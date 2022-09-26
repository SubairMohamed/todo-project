import Tasks from './Tasks/Tasks';
import Form from "./Form/Form";
import { useState } from 'react';

const Content = (props) => {

    const [showform, setShowForm] = useState(true);


    const childToparent = (data) => {

        const id = Math.floor(Math.random() * 1000);

        const taskdata = {
            id: "t-" + id,
            title: data.title,
            category: data.category,
            date: data.date,
            status: data.status,
            isCompleted: false,
        }

        // console.log("your new object content: ", taskdata);

        props.onUploadData(taskdata);
    };

    const openform = () => {
        setShowForm(true);
    }

    const closeform = () => {
        setShowForm(false);
    }

    const istaskComplete = (id) => {
        // console.log(id);
        props.taskComplete(id);
    }

    const istaskDeleted = (id) => {
        props.taskDeletedHandler(id);
    }

    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">

            {showform === true ? <Form childToparent={childToparent} oncloseform={closeform} /> : ''}
            <Tasks Onopenform={openform}
                showform={showform}
                tasks={props.tasks}
                istaskComplete={istaskComplete}
                istaskDeleted={istaskDeleted} />

        </main>
    );
}

export default Content;