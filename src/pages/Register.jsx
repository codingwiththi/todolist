// crie uma página de registro com formulário, incluindo nome, email e senha. Ao clicar no botão de registro, o usuário deve ser cadastrado no banco de dados e redirecionado para a página de login. Se o usuário já estiver logado, redirecionar para a página de tarefas.

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SnackbarComponent from "../components/SnackBarComponent";

export default function Register() {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);

    const onSubmit = async (data) => {
        const response = await axios
            .post(`http://localhost:3333/register`, data)
            .then((response) => {
                window.location.href = "/login";
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
                message="Erro ao cadastrar usuário"
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
                                    Registre sua conta
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="sr-only"
                                        >
                                            Nome
                                        </label>
                                        <input
                                            {...register("name")}
                                            id="name"
                                            name="name"
                                            type="name"
                                            autoComplete="name"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Nome"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="sr-only"
                                        >
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="sr-only"
                                        >
                                            Senha
                                        </label>
                                        <input
                                            {...register("password")}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Senha"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg
                                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h7a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
