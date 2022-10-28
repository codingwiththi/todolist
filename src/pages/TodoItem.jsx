import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Loading from "../components/Loading";
import { ModalCreateItem } from "../components/ModalCreateItem";
import { ModalEditItem } from "../components/ModalEditItem";
import SnackbarComponent from "../components/SnackBarComponent";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TodoItem() {
    const { id } = useParams();
    const {
        data: todo,
        error,
        mutate,
    } = useSWR(`http://localhost:3333/todolists/${id}`, fetcher);

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openTodo, setOpenTodo] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/todoitems/${id}`);
            mutate();
            setMessage("Todo deletado com sucesso!");
            setSeverity("success");
            setOpen(true);
        } catch (error) {
            console.log(error);
            setMessage("Erro ao deletar todo!");
            setSeverity("error");
            setOpen(true);
        }
    };

    const doneTodo = async (id) => {
        try {
            await axios.put(`http://localhost:3333/todoitems/${id}/done`);
            mutate();
            setMessage("Item concluído com sucesso!");
            setSeverity("success");
            setOpen(true);
        } catch (error) {
            console.log(error);
            setMessage("Erro ao concluir item!");
            setSeverity("error");
            setOpen(true);
        }
    };

    // const editTodo = async (id, title) => {
    //     try {
    //         await axios.put(`http://localhost:3333/todoitems/${id}`, {
    //             title,
    //         });
    //         mutate();
    //         setMessage("Item editado com sucesso!");
    //         setSeverity("success");
    //         setOpen(true);
    //     } catch (error) {
    //         console.log(error);
    //         setMessage("Erro ao editar item!");
    //         setSeverity("error");
    //         setOpen(true);
    //     }
    // };

    if (error) return <div>Failed to load</div>;
    if (!todo) return <Loading />;

    console.log(todo);

    return (
        <>
            <ModalCreateItem
                openTodo={openTodo}
                setOpenTodo={setOpenTodo}
                todolistId={id}
                mutate={mutate}
            />
            <header className="bg-white shadow">
                <div className="flex flex-row mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {todo.title}
                    </h1>
                    <button
                        className="bg-green-500 hover:bg-green-300 rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() => setOpenTodo(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="flex flex-row justify-center items-center ">
                            <ul>
                                {todo.todoitems.map((item) => (
                                    <li key={item.id}>
                                        <div className="flex flex-row justify-between items-center w-96 bg-white shadow rounded-lg p-4 mb-4">
                                            <div className="flex flex-row">
                                                {item.done ? (
                                                    <>
                                                        <div className="flex flex-col">
                                                            <button
                                                                className="bg-green-500 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                                                                onClick={() =>
                                                                    doneTodo(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    class="w-8 h-8"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col ml-4">
                                                            <h1 className="text-lg font-bold text-gray-900 line-through">
                                                                {item.title}
                                                            </h1>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="flex flex-col">
                                                            <button
                                                                className="bg-gray-500 hover:bg-green-300 rounded-full w-8 h-8 flex items-center justify-center"
                                                                onClick={() =>
                                                                    doneTodo(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    class="w-8 h-8"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col ml-4">
                                                            <h1 className="text-lg font-bold text-gray-900">
                                                                {item.title}
                                                            </h1>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex flex-row justify-center items-center">
                                                <ModalEditItem
                                                    item={item}
                                                    mutate={mutate}
                                                />

                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-4"
                                                    onClick={() =>
                                                        deleteTodo(item.id)
                                                    }
                                                >
                                                    Excluir
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <SnackbarComponent
                                open={open}
                                setOpen={setOpen}
                                message={message}
                                severity={severity}
                            />
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </>
    );
}
