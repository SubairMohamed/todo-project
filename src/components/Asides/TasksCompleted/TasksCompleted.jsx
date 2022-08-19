import React from 'react'
import { ClipboardCheckIcon } from '@heroicons/react/outline'
import TaskComplete from './TaskComplete';


const TasksCompleted = () => {

    const data = [
        {
            id: "t-01",
            title: "learning",
            category: "going to university",
            date: "2022-02-28",
            status: "in progress",
        },
        {
            id: "t-02",
            title: "work",
            category: "going work",
            date: "2023-06-15",
            status: "completed",
        },
    ];

    return (
        <section id="completed-tasks" className='mt-3 mx-3 p-1 font-RobotoSlab'>
            <div className='flex items-center'>
                <ClipboardCheckIcon className='w-6 h-6 text-green-500' />
                <h1 className='capitalize text-white text-xl font-bold tracking-wider mb-1 ml-1'>tasks completed</h1>
            </div>
            <hr />
            <div>
                {data.map((task) => (<TaskComplete
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