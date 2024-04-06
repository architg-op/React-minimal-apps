import TodoButton from './TodoButton';
import styles from './AddTodo.module.css';

const AddTodo = () => {
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          id="task-name"
          placeholder="Enter Todo here"
        />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <TodoButton btType="success" btText="Add" />
      </div>
    </div>
  );
};

export default AddTodo;
