import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/ToDos/TodoForm";
import TodoList from "./components/ToDos/TodoList";

function App() {
  const dummyTodos = [
    { title: "Make a todo app" },
    { title: "Make a login app" },
    { title: "Play Valorant" },
    { title: "Play The Witcher" },
  ];

  // var [todoList, setTodoList] = useState(dummyTodos);
  // creating a callback for lifting the state up - Getting data from todoform component to the app component
  const saveTodoHandler = (todos) => {
    // setTodoList(todos);
    console.log(dummyTodos);
  };

  return (
    <React.Fragment>
      <header className="App-header">
        <h3>ToDo List</h3>
      </header>
      <main className="container">
        <TodoForm
          // using a custom prop for lifting the value up
          onSaveTodos={saveTodoHandler}
        />
        <TodoList todos={dummyTodos} />
      </main>
    </React.Fragment>
  );
}

export default App;
