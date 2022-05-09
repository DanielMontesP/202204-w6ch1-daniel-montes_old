import styled from "styled-components";

const TodoCSS = styled.div`
  width: fit-content;
  height: fit-content;
  border: 2px solid white;

  margin: auto;

  .todo-container {
    border: 2px solid black;
    border-radius: 45px;
    margin-left: 10px;
    text-align: center;
    height: 100px;
    background: #3270f9;
    color: white;
  }
  h1 {
    text-align: center;
  }
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 12px;
  }
  ul,
  li {
    list-style-type: none;
  }
  li {
    height: 140px;
  }
`;

export default TodoCSS;
