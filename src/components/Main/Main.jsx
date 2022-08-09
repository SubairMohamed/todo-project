import Header from './Header';
import Content from './Content/Content';
import Tasks from './Content/Tasks/Tasks';

const Main = (props) => {

    const uploadDataHandler = (data) => {
        // console.log(data);
        props.onUploadData(data); // waa app.js ka 
    }

    return (
        // Main
        <section className="grow font-RobotoSlab">

            <Header />
            <Content onUploadData={uploadDataHandler} tasks={props.tasks} />


        </section>
    );
}

export default Main;