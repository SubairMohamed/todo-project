import Tasks from './Tasks/Tasks';
import Form from "./Form/Form";
import { useState } from 'react';

const Content = (props) => {

    const [showform, setShowform] = useState(true);

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

    const ShowForm = () => {
        setShowform(true);
    }

    const closeform = () => {
        setShowform(false);
    }




    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">

            {showform === true ? <Form childToparent={childToparent} oncloseform={closeform} /> : ''}

            <Tasks showform={showform} onShowForm={ShowForm} tasks={props.tasks} />

        </main>
    );
}

export default Content;