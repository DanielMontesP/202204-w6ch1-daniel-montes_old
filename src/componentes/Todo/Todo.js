import TodoCSS from "./TodoCSS";

const Todo = ({ todo: { id, name, done } }) => {
  const deleteTodo = () => {};
  const editTodo = () => {
    navigator(`/todo/edit/`);
  };

  return (
    <TodoCSS key={id} className="todo">
      <h2>
        {id}
        {name}
      </h2>
      <h3>{done}</h3>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={editTodo}>Add</button>
    </TodoCSS>
  );
};

export default Todo;
