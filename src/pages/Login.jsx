import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SnackbarComponent from "../components/SnackBarComponent";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);

    const onSubmit = async (data) => {
        const response = await axios
            .post(`http://localhost:3333/login`, data)
            .then((response) => {
                // console.log(response.data);
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("nome", response.data.nome);
                localStorage.setItem("email", response.data.email);
                window.location.href = "/";
            })
            .catch((error) => {
                setOpen(true);
            });
    };

    return (
        <>
            <SnackbarComponent
                open={open}
                setOpen={setOpen}
                message="Usuário ou senha incorretos"
                severity="error"
            />
            <div className="h-screen bg-gray-50">
                <div className="h-full ">
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src="/src/logo2.svg"
                                    alt="Your Company"
                                />
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                    Todo List
                                </h2>
                                <p className="mt-2 text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Entre com a sua conta
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="sr-only"
                                        >
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            id="label"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="senha"
                                            className="sr-only"
                                        >
                                            Senha
                                        </label>
                                        <input
                                            {...register("senha")}
                                            id="senha"
                                            name="senha"
                                            type="password"
                                            autoComplete="senha"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Senha"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <LockClosedIcon
                                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        Entrar
                                    </button>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="text-sm">
                                        <Link
                                            to="/registrar"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Não possue uma conta? Cadastre-se
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
