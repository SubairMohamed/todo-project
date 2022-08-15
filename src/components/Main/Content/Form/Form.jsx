
import { useState } from "react";
import "./Form.css";

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const categoryChangeHandler = (e) => {
        setCategory(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    };
    const statusChangeHandler = (e) => {
        setStatus(e.target.value);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        // console.log({
        //     title,
        //     category,
        //     date,
        //     status,
        // });

        // const data = { title, category, date, status, };
        const data = {
            title: title,
            category: category,
            date: date,
            status: status,
        }

        props.childToparent(data);

        setTitle('');
        setCategory('');
        setDate('');
        setStatus('');

    };


    // const getshowform = () => {
    //     props.oncloseform();
    // } // waa habka kow aad, kalena waa onclick ta inaad siisi props...

    // const getinformation = () => {
    //     props.oncloseform();
    // }



    return (
        <section id='form' className="card-gray w-full my-3">
            <h1 className="text-2xl font-bold tracking-wide capitalize mb-3 text-teal-600 underline">add new task</h1>
            <form onSubmit={submitFormHandler} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="input-group">
                    <label htmlFor='title' className="input-label">Title:</label>
                    <input type="text" name="text" id='title' className="input-control" value={title} onChange={titleChangeHandler}></input>
                </div>
                <div className="input-group">
                    <label htmlFor='category' className="input-label ">Category:</label>
                    <select name="category" className="input-control" value={category} onChange={categoryChangeHandler}>
                        <option defaultValue="" className="text-gray-500">Choose Category</option>
                        <option value="going to trip">going to trip</option>
                        <option value="going to travel">going to travel</option>
                        <option value="going to studying">going to studying</option>
                        <option value="going to work">going to work</option>
                        <option value="Making Exercise">Making Exercise</option>
                        <option value="Using Social Media">Using Social Media</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor='date' className="input-label">Date:</label>
                    <input type="date" name="date" id='date' className="input-control" value={date} onChange={dateChangeHandler}></input>
                </div>
                <div>
                    <label htmlFor='status' className="input-label">Status:</label>
                    <select name="status" className="input-control" value={status} onChange={statusChangeHandler}>
                        <option defaultValue="" className="text-gray-500">Choose Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex justify-center md:col-span-2 mr-36 gap-3">
                    <button className="btn-add">Add</button>
                    <button onClick={() => props.oncloseform()} className="btn-cancel">cancel</button>
                </div>
            </form>
        </section>
    );
}

export default Form;