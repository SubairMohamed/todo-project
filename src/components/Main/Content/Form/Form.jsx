

const Form = () => {
    return (
        <section id='form' className="card-white w-full my-3">
            <h1 className="text-2xl font-bold tracking-wide capitalize mb-3 text-teal-600 underline">add new task</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-row items-start">
                    <label htmlFor='title' className="text-lg font-bold tracking-wide mx-1">Title:</label>
                    <input type="text" name="text" id='title' className="px-2 text-black rounded-xl focus:outline-none focus:bg-teal-200 focus:border focus:border-sky-900"></input>
                </div>
                <div>
                    <label htmlFor='category' className="text-lg font-bold tracking-wide mx-1">Category:</label>
                    <input type="text" name="text" id='category' className="px-2 text-black rounded-xl focus:outline-none focus:bg-teal-200 focus:border focus:border-sky-900"></input>
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
    );
}

export default Form;