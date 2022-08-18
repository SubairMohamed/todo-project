import React from 'react'
import { ClipboardCheckIcon } from '@heroicons/react/outline'

const TasksCompleted = () => {
    return (
        <section id="completed-tasks" className='mt-3 mx-3 p-1 font-RobotoSlab'>
            <div className='flex items-center'>
                <ClipboardCheckIcon className='w-6 h-6 text-green-500' />
                <h1 className='capitalize text-white text-xl font-bold tracking-wider mb-1'>tasks completed</h1>
            </div>
            <hr />
        </section>
    );
}

export default TasksCompleted;