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
    setTasks((prevstate) => {
      // console.log(prevstate, taskid);
      const task = prevstate.find((task) => task.id === taskid);

      const taskUpdate = {
        ...task,
        isCompleted: true,
        status: "Completed",
      }
      // console.log(task, "this is update task", taskUpdate);

      const taskIndex = prevstate.findIndex((task) => task.id === taskid);
      // wxn ku soo saranayay indexex ka
      // console.log(taskIndex);
      // console.log(prevstate);

      const prevUpdate = [...prevstate];
      prevUpdate[taskIndex] = taskUpdate;

      return prevUpdate;
    });
  }

  const taskDeletedHandler = (taskid) => {
    console.log(taskid);
  }


  return (
    <div className="flex min-h-screen w-screen bg-sky-900">
      <Left />

      <Main onUploadData={SaveUploadData}
        tasks={tasks}
        ontaskCompleted={taskCompletedHandler}
        taskDeletedHandler={taskDeletedHandler} />

      <Right data={data} />

    </div>
  );
}

export default App;
