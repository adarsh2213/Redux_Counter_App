
import './App.css';
import AddTodoapp from './components/AddTodoapp';
import ShowTodoList from './components/ShowTodoList';

function App() {
  return (
    <>
    <div className="container p-4 mt-2">
    <h2>Todo Application</h2>
    <AddTodoapp/>
    <ShowTodoList/>

    </div>
   
    </>
  );
}

export default App;

