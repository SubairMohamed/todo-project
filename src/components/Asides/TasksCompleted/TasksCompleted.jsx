import React from 'react'
import { ClipboardCheckIcon } from '@heroicons/react/outline'
import TaskComplete from './TaskComplete';


const TasksCompleted = (props) => {
   // const data = [{}]; ayan ka siinayay data ii taala app ka, imikana wxn ka siinaya habka props 

    const tasksCompleted = props.data.filter((tasks) => tasks.isCompleted === true);

    return (
        <section id="completed-tasks" className='mt-3 mx-3 p-1 font-RobotoSlab'>
            <div className='flex items-center'>
                <ClipboardCheckIcon className='w-6 h-6 text-green-500' />
                <h1 className='capitalize text-white text-xl font-bold tracking-wider mb-1 ml-1'>tasks completed</h1>
            </div>
            <hr />
            <div>
                {tasksCompleted.map((task) => (<TaskComplete
                    key={task.id}
                    title={task.title}
                    category={task.category}
                    date={task.date}
                    status={task.status} />
                ))}
            </div>
        </section>
    );
}

export default TasksCompleted;
