import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import Loading from "../components/Loading";
import { ModalCreateTodo } from "../components/ModalCreateTodo";
import SnackbarComponent from "../components/SnackBarComponent";
import TodoCard from "../components/TodoCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TodoList() {
    const userId = localStorage.getItem("id");
    const [open, setOpen] = useState(false);
    const [openTodo, setOpenTodo] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    if (!userId) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Você não está logado!</h1>
                <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Login
                    </button>
                </Link>
            </div>
        );
    }

    console.log(userId);
    const {
        data: todos,
        error,
        mutate,
    } = useSWR(`http://localhost:3333/todolists/user/${userId}`, fetcher);

    if (error) return <div>Failed to load</div>;
    if (!todos) return <Loading />;

    return (
        <>
            <ModalCreateTodo
                openTodo={openTodo}
                setOpenTodo={setOpenTodo}
                user={userId}
                mutate={mutate}
            />
            <header className="bg-white shadow">
                <div className="flex flex-row mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Meus Todo's
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
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {todos.map((todo) => (
                                <Link to={`/todo/${todo.id}`}>
                                    <TodoCard
                                        key={todo.id}
                                        todo={todo}
                                        // deleteTodo={deleteTodo}
                                        mutate={mutate}
                                    />
                                </Link>
                            ))}
                        </div>
                        <SnackbarComponent
                            open={open}
                            setOpen={setOpen}
                            message={message}
                            severity={severity}
                        />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </>
    );
}

// crie um componente de modal para criar um novo todo e adicione ele na página TodoList.jsx
// src\components\ModalCreateTodo.jsx
