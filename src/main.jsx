import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sobre from "./pages/Sobre";
import TodoItem from "./pages/TodoItem";
import TodoList from "./pages/TodoList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <TodoList />,
            },
            {
                path: "/todo/:id",
                element: <TodoItem />,
            },
            {
                path: "/sobre",
                element: <Sobre />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/registrar",
        element: <Register />,
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
);
