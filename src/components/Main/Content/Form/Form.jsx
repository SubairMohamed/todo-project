

const Form = () => {
    return (
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
    );
}

export default Form;