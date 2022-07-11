import Tasks from './Tasks/Tasks';

const Content = (props) => {

    // console.log("content", props)

    return (
        // Main

        <main className="bg-white mx-5 my-6 card-white">
            <section id='form'>
                <form>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input type="text" name="text" id='title'></input>
                    </div>
                    <div>
                        <label htmlFor='category'>Category':</label>
                        <input type="text" name="text" id='category'></input>
                    </div>
                    <div>
                        <label htmlFor='date'>Date:</label>
                        <input type="date" name="date" id='date'></input>
                    </div>
                    <div>
                        <label htmlFor='status'>Status:</label>
                        <select>
                            <option disabled>Choose Status</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </form>
            </section>

            <Tasks tasks={props.tasks} />

        </main>
    );
}

export default Content;