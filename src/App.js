import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Todos from "./componentes/Todos/Todos";
import initialTodos from "./data/initialTodos";
import { loadTodosActionCreator } from "./redux/features/todos/todosSlice";
import TodoCSS from "../src/componentes/Todo/TodoCSS";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosActionCreator(initialTodos));
  }, [dispatch]);

  return (
    <TodoCSS>
      <h1> Todo calendar</h1>
      <Todos />
    </TodoCSS>
  );
}
// id: 1, name: "Cita", done: false
export default App;
