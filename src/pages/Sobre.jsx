export default function Sobre() {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Todo List Application
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    O que faz a ferramenta Todo.
                </p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Meus Todo's
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Na página de Meus Todo's você pode ver todos os seus
                            Todo's cadastrados. Você pode criar um novo Todo,
                            editar um Todo já existente ou excluir um Todo.
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Página do Todo List
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Na página do Todo List você pode ver todos os Itens
                            daquele Todo List. Você pode criar um novo Item,
                            editar um Item já existente ou excluir um Item. Você
                            também pode marcar um Item como concluído.
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Login
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Na página de Login você pode fazer login na sua
                            conta cadastrada.
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Registro
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Na página de Registro você pode criar uma nova
                            conta.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
