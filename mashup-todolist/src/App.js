import React from "react";
import { createGlobalStyle } from "styled-components"; // 특정 컴포넌트를 만들어서 스타일링 하는게 아니라 글로벌 스타일을 추가
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e0ffff; 
  }
`; // 회색 배경 적용

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
