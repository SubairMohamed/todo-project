const Left = () => {
    return (
        //    aside left 
        <aside id="left" className="w-20 lg:w-28 xl:w-60 lex-none shadow-xl shadow-sky-200 rounded-tr-lg bg-sky-600">
            <div id="wrap-logo" className="flex flex-row justify-center items-center">
                <div id="logo" className="my-4 mx-3">
                    <img src="/images/todo-logo-1.jpg" className="rounded-full shadow-md shadow-sky-300 w-12"></img>
                </div>
                <div id="text-header" className="hidden xl:block">
                    <h1 className="text-teal-400 text-xl font-bold capitalize">Learn todo app </h1>
                    <p className="text-sm text-teal-400 font-thin capitalize">sava your performance</p>
                </div>
            </div>

        </aside>
    );
}

export default Left;