import Tasks from './Tasks/Tasks';
import Form from "./Form/Form";

const Content = (props) => {

    const childToparent = (data) => {

        const id = Math.floor(Math.random() * 1000);

        const taskdata = {
            id: "t-" + id,
            title: data.title,
            category: data.category,
            date: data.date,
            status: data.status,
        }

        // console.log("your new object content: ", taskdata);

        props.onUploadData(taskdata);
    };


    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">

            <Form childToparent={childToparent} />


            <Tasks tasks={props.tasks} />

        </main>
    );
}

export default Content;