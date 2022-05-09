const Todo = ({ id, name, done }) => {
  const deleteTodo = () => {};
  const editTodo = () => {
    navigator(`/todo/edit/`);
  };

  return (
    <div className="todo-container">
      <div>
        <h2>
          {id} -{name}
        </h2>
        <h3>{done}</h3>
      </div>
      <div>
        <button onClick={deleteTodo}>Delete</button>
        <button onClick={editTodo}>Add</button>
      </div>
    </div>
  );
};

export default Todo;
