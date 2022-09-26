import { CalendarIcon, CheckIcon, TrashIcon } from '@heroicons/react/outline';

const Task = (props) => {



    const taskDeleted = () => {
        props.istaskDeleted(props.id);
    }


    return (
        // Task 
        <div id="task" className="card-task border-l-4 border-teal-400 flex items-center justify-between max-w-lg w-full opacity-75 relative">
            <div id="left-side">
                <div id="category">
                    <h5 className="tracking-wide underline">{props.title}</h5>
                </div>
                <div id="content" className="mt-1">
                    <h1 className="tracking-wide font-bold mb-1">{props.category}</h1>
                    <div className="flex items-center gap-2 mb-5">
                        <CalendarIcon className="h-5 w-5" />
                        <span className="tracking-wide">{props.date}</span>
                    </div>
                    <div className='absolute bottom-1 ml-1'>
                        <span className='capitalize font-RobotoSlab font-bold tracking-wide mt-1'>{props.status}</span>
                    </div>
                </div>
            </div>
            <div id="right-side" className="flex flex-col items-center justify-center gap-1">
                <CheckIcon className="h-6 w-6 cursor-pointer text-green-500" />
                <TrashIcon className="h-6 w-6 cursor-pointer text-red-500" onClick={taskDeleted} />
            </div>
        </div>
    );
}

export default Task;