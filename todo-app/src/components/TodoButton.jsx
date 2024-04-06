const TodoButton = ({ btType, btText }) => {
  return (
    <button type="button" className={`btn btn-${btType}`}>
      {btText}
    </button>
  );
};

export default TodoButton;
