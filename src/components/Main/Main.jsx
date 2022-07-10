import Header from './Header';
import Content from './Content/Content';

const Main = (props) => {
    console.log(props);

    return (
        // Main
        <section className="grow font-RobotoSlab">

            <Header />
            <Content />


        </section>
    );
}

export default Main;