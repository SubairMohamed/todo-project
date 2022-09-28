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

  const taskComplete = (taskid) => {
    // console.log(taskid);
    setTasks((prevState) => {

      const task = prevState.find((task) => task.id === taskid);

      const taskUpdate = {
        ...task,
        isCompleted: true,
        status: "Completed",
      }
      // console.log(taskUpdate,tasks);

     const taskIndex = prevState.findIndex((tasks) => tasks.id === taskid);

    const prevUpdate = [...prevState];
    prevUpdate[taskIndex] = taskUpdate;     
   

      return prevUpdate;
    })
  }


  const taskDeletedHandler = (taskid) => {
    // console.log(taskid);

    setTasks((prevState) => {
      const prevUpdate = prevState.filter((task) => task.id !== taskid);

      // console.log(prevUpdate);

      return prevUpdate;
    })
  };

  const taskUndo = (taskid) => {
    setTasks((prevState) => {
      const tasks = prevState.find((task) => task.id === taskid);

      const taskUpdate = {
        ...tasks,
        isCompleted: false,
        status: "in progress"
      }
   
      const taskIndex = prevState.findIndex((task) => task.id === taskid);
      
      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUpdate;
      
      return prevUpdate;
    })
  }

  


  return (
    <div className="flex w-screen min-h-screen bg-sky-900">
      <Left />

      <Main onUploadData={SaveUploadData}
        tasks={tasks}
        taskComplete={taskComplete}
        taskDeletedHandler={taskDeletedHandler} />

      <Right
        data={data}
        taskUndo={taskUndo} />

    </div>
  );
}

export default App;
