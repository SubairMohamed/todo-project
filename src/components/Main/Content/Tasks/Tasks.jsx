import Task from './Task'

const Tasks = (props) => {

    const tasks = props.tasks;

    // console.log("Tasks", props)

    return (
        //    Tasks 
        < div id="tasks" className="bg-sky-900 rounded-lg flex flex-col items-center justify-center px-2 py-2" >
            <h1 className="text-teal-500 text-2xl font-bold capitalize underline pb-1 tracking-wider w-full max-w-lg">lists</h1>

            <div id='Lists' className='w-full flex flex-col items-center justify-center'>

                {tasks.map((tasks) => {
                    return (
                        <Task
                            key={tasks.id}
                            category={tasks.category}
                            content={tasks.content}
                            date={tasks.date}
                            status={tasks.status} />
                    );
                })}

            </div>

        </div >
    );
}

export default Tasks;