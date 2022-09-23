import React from 'react'
import { ClipboardCheckIcon } from '@heroicons/react/outline'
import TaskComplete from './TaskComplete';


const TasksCompleted = (props) => {
    // const data = [{}]; ayan ka siinayay data ii taala app ka, imikana wxn ka siinaya habka props 

    const tasksCompleted = props.data.filter((tasks) => tasks.isCompleted === true);

    const istaskUndo = (id) => {
        // console.log(id);
        props.ontaskUndo(id);

    }

    return (
        <section id="completed-tasks" className='p-1 mx-3 mt-3 font-RobotoSlab'>
            <div className='flex items-center'>
                <ClipboardCheckIcon className='w-6 h-6 text-green-500' />
                <h1 className='mb-1 ml-1 text-xl font-bold tracking-wider text-white capitalize'>tasks completed</h1>
            </div>
            <hr />
            <div>
                {tasksCompleted.map((task) => {
                    return (
                        <TaskComplete
                            key={task.id}
                            title={task.title}
                            category={task.category}
                            date={task.date}
                            status={task.status}
                            id={task.id}
                            istaskUndo={istaskUndo} />
                    );
                })}
            </div>
        </section>
    );
}

export default TasksCompleted;
