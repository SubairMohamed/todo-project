import Header from './Header';
import Content from './Content/Content';
import Tasks from './Content/Tasks/Tasks';

const Main = (props) => {

    const uploadDataHandler = (data) => {
        // console.log(data);
        props.subeer(data); // waa app.js ka 
    }
    // console.log(props.tasks); //wuxu kuu cadeen doonaa u inuu main ku data ay soo gaadhay
    return (
        // Main
        <section className="grow font-RobotoSlab">

            <Header />
            <Content onUploadData={uploadDataHandler} tasks={props.tasks} />


        </section>
    );
}

export default Main;