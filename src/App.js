import Left from './components/Asides/Left';
import Main from './components/Main/Main';
import Right from './components/Asides/Right';


const App = () => {
  const tasks = [
    {
      category: "learning",
      content: "going to university",
      date: "2022-02-28",
    },
    {
      category: "work",
      content: "going work",
      date: "2023-06-15",
    },
  ];

console.log("App",tasks)


 return (
  <div className="flex min-h-screen w-screen bg-sky-900">
    <Left />

    <Main tasks={tasks}/>

    <Right />

  </div>
 );
}

export default App;
