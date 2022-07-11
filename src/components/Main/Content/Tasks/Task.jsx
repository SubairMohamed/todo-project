import { CalendarIcon, CheckIcon, TrashIcon } from '@heroicons/react/outline';

const Task = (props) => {

    // console.log("task", props);

    return (
        // Task 
        <div id="task" className="card-task border-l-4 border-teal-400 flex items-center justify-between max-w-lg w-full opacity-75">
            <div id="left-side" className='relative'>
                <div id="category">
                    <h5 className="tracking-wide">{props.category}</h5>
                </div>
                <div id="content" className="mt-1">
                    <h1 className="tracking-wide font-bold mb-1">{props.content}</h1>
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span className="tracking-wide">{props.date}</span>
                    </div>
                    <div className='mx-1 absolute'>
                        <span className='capitalize font-RobotoSlab tracking-wide mt-1'>in progress</span>
                    </div>
                </div>
            </div>
            <div id="right-side" className="flex flex-col items-center justify-center gap-1">
                <CheckIcon className="h-6 w-6 cursor-pointer text-green-500" />
                <TrashIcon className="h-6 w-6 cursor-pointer text-red-500" />
            </div>
        </div>
    );
}

export default Task;