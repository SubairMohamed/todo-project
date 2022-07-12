import "./Form.css";

const Form = () => {
    return (
        <section id='form' className="card-gray w-full my-3">
            <h1 className="text-2xl font-bold tracking-wide capitalize mb-3 text-teal-600 underline">add new task</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="input-group">
                    <label htmlFor='title' className="input-label">Title:</label>
                    <input type="text" name="text" id='title' className="input-control"></input>
                </div>
                <div className="input-group">
                    <label htmlFor='category' className="input-label">Category:</label>
                    <input type="text" name="text" id='category' className="input-control"></input>
                </div>
                <div className="input-group">
                    <label htmlFor='date' className="input-label">Date:</label>
                    <input type="date" name="date" id='date' className="input-control"></input>
                </div>
                <div>
                    <label htmlFor='status' className="input-label">Status:</label>
                    <select className="input-control">
                        <option disabled value="" selected>Choose Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex justify-center col-span-2 mr-20">
                    <button className="bg-blue-500 px-1 py-1 text-lg text-white font-bold tracking-wide rounded-full w-20 hover:bg-blue-700">Add</button>
                </div>
            </form>
        </section>
    );
}

export default Form;