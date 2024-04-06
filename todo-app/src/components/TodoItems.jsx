import TodoItem from './TodoItem';
const TodoItems = ({ todoItems }) => {
  return todoItems.map((todoItem) => (
    <TodoItem
      key={todoItem.taskName}
      taskName={todoItem.taskName}
      taskDate={todoItem.taskDate}
    />
  ));
};

export default TodoItems;
