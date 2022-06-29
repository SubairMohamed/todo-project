import { PlusCircleIcon } from "@heroicons/react/solid";

const Main = () => {
    return (
        // Main
        <section className="grow font-RobotoSlab">
            <header className="mx-4 my-3 flex items-center justify-between">
                <div id="text-header">
                    <h1 className="text-teal-400 text-xl font-bold capitalize tracking-wide">Learn todo app </h1>
                    <p className="text-sm text-teal-400 font-thin capitalize tracking-wider">sava your performance</p>
                </div>
                <div className="bg-purple-800 p-1 rounded-full w-7 h-7 flex justify-center items-center">
                    <button className="text-sm text-white"><PlusCircleIcon className="h-7 w-7" /></button>
                </div>
            </header>
            <main>main</main>
        </section>
    );
}

export default Main;