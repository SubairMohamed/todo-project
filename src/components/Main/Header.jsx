const Header = () => {
    return (
        // header 
        <header className="mx-4 my-3 flex items-center justify-between">
            <div id="wrap" className="flex items-center ">
                <div id="logo" className="my-4 mx-3 sm:hidden">
                    <img src="/images/todo-logo-1.jpg" className="rounded-full shadow-md shadow-sky-300 w-12"></img>
                </div>
                <div id="text-header" className="hidden xl:block mt-5">
                    <h1 className="text-teal-400 text-xl font-bold capitalize tracking-wide">manage your tasks </h1>
                    <p className="text-sm text-teal-400 font-thin capitalize tracking-wider">the best todo app for store tasks</p>
                </div>
                <div id="text-header" className="xl:hidden">
                    <h1 className="text-teal-400 text-xl font-bold capitalize tracking-wide">Learn todo app </h1>
                    <p className="text-sm text-teal-400 font-thin capitalize tracking-wider">sava your performance</p>
                </div>
            </div>
        </header>
    );
}

export default Header;