import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

const Todos = () => {
  const todosList = useSelector((state) => state.todos);
  return (
    <>
      {todosList.map((todoCard) => {
        return (
          <li key={todoCard.id}>
            <Todo id={todoCard.id} name={todoCard.name} done={todoCard.done} />
          </li>
        );
      })}
    </>
  );
};

export default Todos;
