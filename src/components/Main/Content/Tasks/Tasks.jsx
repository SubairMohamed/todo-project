import Task from './Task'
import { PlusIcon } from '@heroicons/react/solid'
const Tasks = (props) => {

    const tasks = props.tasks.filter((tasks) => tasks.isCompleted === false);


    return (
        //    Tasks 
        < div id="tasks" className="bg-sky-900 rounded-lg flex flex-col items-center justify-center shadow-lg shadow-sky-900 px-2 py-3 mb-3 relative">
            {props.showform === true ? '' : <div>
                <button onClick={props.Onopenform} className='text-white bg-teal-500 rounded-full absolute -top-2 border-2 border-white'><PlusIcon className='w-4 h-4'></PlusIcon></button>
            </div>}
            <h1 className="text-teal-500 text-2xl font-bold capitalize underline pb-1 tracking-wider w-full max-w-lg">lists</h1>

            <div id='Lists' className='w-full flex flex-col items-center justify-center'>

                {tasks.map((tasks) => {
                    return (
                        <Task
                            key={tasks.id}
                            title={tasks.title}
                            id={tasks.id}
                            category={tasks.category}
                            date={tasks.date}
                            status={tasks.status}
                            istaskDeleted={props.istaskDeleted} />
                    );
                })}

            </div>

        </div >
    );
}

export default Tasks;