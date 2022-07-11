import Tasks from './Tasks/Tasks';

const Content = (props) => {

    // console.log("content", props)

    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">
            <Tasks tasks={props.tasks} />

        </main>
    );
}

export default Content;