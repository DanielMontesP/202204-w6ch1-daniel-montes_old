
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"

const TodoForm = ({id}) =>{
const dispatch = useDispatch();
const navigate = useNavigate();
const todos = useSelector((state)=>state.todos)
let todo = useRef();

useEffect(()=>{
  todo.current = todos.find((todo)=>{todo.id===id});
  setName(todo.current?.name || "");},[id,todos]);

  const newTodo={id:1000,name:"test",done:"yes"};
  dispatchEvent(addTodoActionCreator(newTodo));

  return(<><TodoForm/><button type="submit"/></>);
});

};

export default TodoForm;
