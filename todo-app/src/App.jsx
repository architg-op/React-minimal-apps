import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoButton from './components/TodoButton';
import TodoItems from './components/TodoItems';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  let todoItems = [
    { taskName: 'Buy Milk', taskDate: 'Apr 5 2024' },
    { taskName: 'Go to College', taskDate: 'Apr 6 2024' },
    { taskName: 'Pickup Amanda', taskDate: 'Apr 7 2024' },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <div className="container text-center">
        <AddTodo />
        <TodoItems todoItems={todoItems} />
        <div className="items-container"></div>
      </div>
    </center>
  );
}

export default App;
