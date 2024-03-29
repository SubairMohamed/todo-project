import TasksCompleted from './TasksCompleted/TasksCompleted';
const Right = (props) => {
    return (
        //    aside right
        <aside id="right" className="hidden lg:block md:w-60 xl:w-full max-w-lg rounded-tl-lg shadow-lg shadow-sky-200 bg-sky-600">
            <TasksCompleted
                data={props.data}
                taskUndo={props.taskUndo} />
        </aside>
    );
}

export default Right;