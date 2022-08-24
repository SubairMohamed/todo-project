import Header from './Header';
import Content from './Content/Content';
import Tasks from './Content/Tasks/Tasks';

const Main = (props) => {

    const uploadDataHandler = (data) => {
        // console.log(data);
        props.onUploadData(data); // waa app.js ka 
    }
    // console.log(props.tasks); //wuxu kuu cadeen doonaa u inuu main ku data ay soo gaadhay
    return (
        // Main
        <section className="grow font-RobotoSlab">

            <Header />
            <Content onUploadData={uploadDataHandler}
                tasks={props.tasks}
                ontaskCompleted={props.ontaskCompleted}
                taskDeletedHandler={props.taskDeletedHandler} />


        </section>
    );
}

export default Main;