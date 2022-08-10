import {useState} from 'react';
import Left from './components/Asides/Left';
import Main from './components/Main/Main';
import Right from './components/Asides/Right';



const App = () => {
  const data = [
    {
      id: "t-01",
      category: "learning",
      content: "going to university",
      date: "2022-02-28",
      status: "in progress",
    },
    {
      id: "t-02",
      category: "work",
      content: "going work",
      date: "2023-06-15",
      status: "completed",
    },
  ];

  const [tasks, setTasks] = useState(data);

  const SaveUploadData = (data) => {
     setTasks((previewState) => {
      return [...previewState,data];
     });
  }


 return (
  <div className="flex min-h-screen w-screen bg-sky-900">
    <Left />

    <Main subeer={SaveUploadData}  tasks={tasks}/>

    <Right />

  </div>
 );
}

export default App;
