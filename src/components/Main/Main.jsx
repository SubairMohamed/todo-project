import Header from './Header';
import Content from './Content/Content';
import Tasks from './Content/Tasks/Tasks';

const Main = (props) => {
    console.log("Main", props)


    return (
        // Main
        <section className="grow font-RobotoSlab">

            <Header />
            <Content tasks={props.tasks} />


        </section>
    );
}

export default Main;