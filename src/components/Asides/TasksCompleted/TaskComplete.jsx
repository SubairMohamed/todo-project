import { CalendarIcon, } from '@heroicons/react/outline';
import { } from '@heroicons/react/solid';

const TasksCompleted = (props) => {


    return (
        // Task 
        <div id="task" className="card-task border-l-4 border-teal-400 flex items-center justify-between max-w-lg w-full opacity-75 relative line-through">
            <div id="left-side" className='w-full'>
                <div id="category" className='flex justify-between items-center w-full px-2'>
                    <h5 className="tracking-wide underline">{props.title}</h5>
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span className="tracking-wide">{props.date}</span>
                    </div>
                </div>
                <div id="content" className="mb-5">
                    <h1 className="tracking-wide font-bold mb-1">{props.category}</h1>
                    <div className='absolute bottom-1 ml-1'>
                        <span className='capitalize font-RobotoSlab font-bold tracking-wide mt-1'>{props.status}</span>
                        <span>undo</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TasksCompleted;