import { CalendarIcon, CheckIcon, TrashIcon } from '@heroicons/react/outline';
const Tasks = () => {
    return (
        //    Tasks 
        < div id="tasks" className="bg-sky-900 rounded-lg flex flex-col items-center justify-center px-2 py-2" >
            <h1 className="text-white text-2xl font-bold capitalize border-b pb-1 tracking-wider w-full max-w-lg">lists</h1>
            {/* Task */}
            <div id="task" className="card-task border-l-4 border-teal-400 flex items-center justify-between max-w-lg w-full opacity-75">
                <div id="left-side">
                    <div id="category">
                        <h5 className="tracking-wide">Learning</h5>
                    </div>
                    <div id="content" className="mt-1">
                        <h1 className="tracking-wide font-bold mb-1">Learning MERN Stack</h1>
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5" />
                            <span className="tracking-wide">2022/6/30</span>
                        </div>
                    </div>
                </div>
                <div id="right-side" className="flex flex-col items-center justify-center gap-1">
                    <CheckIcon className="h-6 w-6 cursor-pointer text-green-500" />
                    <TrashIcon className="h-6 w-6 cursor-pointer text-red-500" />
                </div>
            </div>
        </div >
    );
}

export default Tasks;