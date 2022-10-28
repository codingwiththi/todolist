import { Button, Modal, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SnackbarComponent from "./SnackBarComponent";

export function ModalEditItem({ item, mutate }) {
    const [title, setTitle] = useState("");
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");
    console.log(item);

    //get user id from local storage and set it to userId variable

    // const handleClose = () => {
    //     setOpenTodo(false);
    // };

    const handleCreateTodo = async () => {
        // criar um todo
        try {
            await axios.put(`http://localhost:3333/todoitems/${item.id}`, {
                title,
            });
            setMessage("Todo criado com sucesso!");
            setSeverity("success");
            setTitle("");
            setOpenSnack(true);
            mutate();
            setOpen(false);
        } catch (error) {
            console.log(error);
            setMessage("Erro ao criar todo!");
            setSeverity("error");
            setOpenSnack(true);
        }
    };

    return (
        <>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleOpen}
            >
                Editar
            </button>
            <SnackbarComponent
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                severity={severity}
            />
            <Modal open={open} onClose={handleClose}>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="bg-white rounded-md p-4 w-1/4">
                        <div className="flex flex-row items-center justify-between m-2">
                            <h1 className="text-2xl font-bold text-gray-900">
                                Editar Item
                            </h1>
                            <button
                                className="bg-red-500 hover:bg-red-300 rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={handleClose}
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <TextField
                            id="title"
                            label="Título"
                            variant="outlined"
                            className="mb-4 w-full"
                            placeholder={item.title}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="flex flex-row justify-end mt-2">
                            <Button
                                variant="contained"
                                color="primary"
                                required
                                onClick={handleCreateTodo}
                            >
                                Editar
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
