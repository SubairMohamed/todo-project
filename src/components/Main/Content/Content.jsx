import Tasks from './Tasks/Tasks';
import Form from "./Form/Form";

const Content = (props) => {

    // console.log("content", props)

    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">
            <section id='form'>
                <Form />
            </section>

            <Tasks tasks={props.tasks} />

        </main>
    );
}

export default Content;