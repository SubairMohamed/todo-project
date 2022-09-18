import { useState } from 'react';
import Left from './components/Asides/Left';
import Main from './components/Main/Main';
import Right from './components/Asides/Right';



const App = () => {
  const data = [
    {
      id: "t-01",
      title: "learning",
      category: "going to university",
      date: "2022-02-28",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: "t-02",
      title: "work",
      category: "going work",
      date: "2023-06-15",
      status: "completed",
      isCompleted: true,
    },
  ];

  const [tasks, setTasks] = useState(data);

  const SaveUploadData = (data) => {
    setTasks((previewState) => {
      return [...previewState, data];
    });
  }

  const taskCompletedHandler = (taskid) => {
    // console.log(taskid, "task id "); wn ku baadhayay idga
    setTasks((prevState) => {
      // console.log(prevstate, taskid);
      const task = prevState.find((task) => task.id === taskid);

      const taskUpdate = {
        ...task,
        isCompleted: true,
        status: "Completed",
      }
      // console.log(task, "this is update task", taskUpdate);

      const taskIndex = prevState.findIndex((task) => task.id === taskid);
      // wxn ku soo saranayay indexex ka
      // console.log(taskIndex);
      // console.log(prevstate);

      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUpdate;



      return prevUpdate;
    });
  };

  const taskDeletedHandler = (taskid) => {
    // console.log(taskid);

    setTasks((prevState) => {
      const prevUpdate = prevState.filter((task) => task.id !== taskid);

      // console.log(prevUpdate);

      return prevUpdate;
    })
  };

  const taskUndoHandler = (taskid) => {
    // console.log(taskid);

    setTasks((prevState) => {
      const taskUndo = prevState.find((task) => task.id === taskid);

      // console.log(taskUndo);

      const taskUpdate = {
        ...tasks,
        isCompleted: false,
        status: "in progress",
      }

      const taskIndex = prevState.findIndex((task) => task.id === taskid);
      // console.log(taskIndex, taskUpdate);

      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUpdate;

      return prevUpdate;
    })
  };


  return (
    <div className="flex min-h-screen w-screen bg-sky-900">
      <Left />

      <Main onUploadData={SaveUploadData}
        tasks={tasks}
        ontaskCompleted={taskCompletedHandler}
        taskDeletedHandler={taskDeletedHandler} />

      <Right
        data={data}
        ontaskUndo={taskUndoHandler} />

    </div>
  );
}

export default App;
