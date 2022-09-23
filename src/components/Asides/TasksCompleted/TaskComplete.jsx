import { CalendarIcon, } from '@heroicons/react/outline';
import { ReplyIcon } from '@heroicons/react/solid';

const TasksCompleted = (props) => {

    const istaskCompletedUndo = () => {
        props.istaskUndo(props.id);
    }

    return (
        // Task 
        <div id="task" className="relative flex items-center justify-between w-full max-w-lg line-through border-l-4 border-teal-400 opacity-75 card-task">
            <div id="left-side" className='w-full'>
                <div id="category" className='flex items-center justify-between w-full px-2'>
                    <h5 className="tracking-wide underline">{props.title}</h5>
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="tracking-wide">{props.date}</span>
                    </div>
                </div>
                <div id="content" className="mb-5">
                    <h1 className="mb-1 font-bold tracking-wide">{props.category}</h1>
                    <div className='absolute w-full bottom-1'>
                        <div id='wrap' className='flex items-center justify-between w-full px-4'>
                            <span className='mt-1 font-bold tracking-wide capitalize font-RobotoSlab'>{props.status}</span>
                            <span className='flex items-center justify-center gap-1 px-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full' onClick={istaskCompletedUndo}><ReplyIcon className='w-5 h-5' />undo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TasksCompleted;