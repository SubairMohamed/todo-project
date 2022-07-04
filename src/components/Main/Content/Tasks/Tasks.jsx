import Task from './Task'
const Tasks = () => {
    return (
        //    Tasks 
        < div id="tasks" className="bg-sky-900 rounded-lg flex flex-col items-center justify-center px-2 py-2" >
            <h1 className="text-white text-2xl font-bold capitalize border-b pb-1 tracking-wider w-full max-w-lg">lists</h1>

            <div id='Lists' className='w-full flex flex-col items-center justify-center'>
                <Task />
            </div>

        </div >
    );
}

export default Tasks;