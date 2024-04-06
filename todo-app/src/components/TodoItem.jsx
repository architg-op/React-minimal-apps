import TodoButton from './TodoButton';

const TodoItem = ({ taskName, taskDate }) => {
  return (
    <div className="row">
      <div className="col-6">{taskName}</div>
      <div className="col-4">{taskDate}</div>
      <div className="col-2">
        <TodoButton btType="danger" btText="Delete" />
      </div>
    </div>
  );
};

export default TodoItem;
