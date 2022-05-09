import TodoCSS from "./TodoCSS";

const Todo = ({ todo: { id, name, done } }) => {
  const deleteTodo = () => {};
  const editTodo = () => {
    navigator(`/projects/edit/2`);
  };

  return (
    <TodoCSS key={id} className="todo">
      <h2>
        {id}
        {name}
      </h2>
      <h3>{done}</h3>
      <button onClick={deleteTodo} />
      <button onClick={editTodo} />
    </TodoCSS>
  );
};

export default Todo;
