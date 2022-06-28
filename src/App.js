import Left from './components/Asides/Left';
import Main from './components/Main/Main';
import Right from './components/Asides/Right';


const App = () => {
 return (
  <div className="flex min-h-screen w-screen bg-sky-900">
    <Left />

    <Main />

    <Right />

  </div>
 );
}

export default App;
