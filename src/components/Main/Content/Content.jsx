import Tasks from './Tasks/Tasks';
import Form from "./Form/Form";

const Content = (props) => {

    const childToparent = (data) => {
        console.log("your content data: ", data);
    }


    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">

            <Form childToparent={childToparent} />


            <Tasks tasks={props.tasks} />

        </main>
    );
}

export default Content;