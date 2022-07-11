import Task from './Task'

const Tasks = (props) => {

    // console.log("Tasks", props)

    return (
        //    Tasks 
        < div id="tasks" className="bg-sky-900 rounded-lg flex flex-col items-center justify-center px-2 py-2" >
            <h1 className="text-white text-2xl font-bold capitalize border-b pb-1 tracking-wider w-full max-w-lg">lists</h1>

            <div id='Lists' className='w-full flex flex-col items-center justify-center'>
                <Task category={props.tasks[0].category}
                    content={props.tasks[0].content}
                    date={props.tasks[0].date} />
            </div>

        </div >
    );
}

export default Tasks;