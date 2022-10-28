// crie um card com o titulo dos todos e a data de criação
//

import { useState } from "react";
import { Link } from "react-router-dom";

export default function TodoCard({ todo }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="w-96">
                    <div className="bg-gray-800 shadow-md overflow-hidden sm:rounded-lg border border-gray-400 hover:shadow-2xl hover:shadow-gray-600">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-50 ">
                                {todo.title}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {/* {todo.description} */}
                            </p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Data de criação
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {new Date(
                                            todo.createdAt
                                        ).toLocaleDateString("pt-BR")}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
