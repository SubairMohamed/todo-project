import Left from './components/Asides/Left';
import Main from './components/Main/Main';
import Right from './components/Asides/Right';


const App = () => {
  const tasks = [
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

  const SaveUploadData = (data) => {
     tasks.push(data);

     console.log(tasks);
  }


 return (
  <div className="flex min-h-screen w-screen bg-sky-900">
    <Left />

    <Main onUploadData={SaveUploadData}  tasks={tasks}/>

    <Right />

  </div>
 );
}

export default App;
