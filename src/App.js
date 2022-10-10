import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/ToDos/TodoForm";
import TodoList from "./components/ToDos/TodoList";

const dummyTodos = [{ title: "Play Valorant" }, { title: "Play The Witcher" }];

function App() {
  // callback for receiving state/data from child component (Lifting state up)
  const [todoTasks, setTodoTasks] = useState(dummyTodos);

  const todoSaveHandler = (enteredTodoTask) => {
    const todoTask = {
      ...enteredTodoTask,
      id: Math.random().toString(),
    };

    setTodoTasks((prevTodos) => {
      return [todoTask, ...prevTodos];
    });

    console.log(todoTasks);
  };

  return (
    <React.Fragment>
      <header className="App-header">
        <h3>ToDo List</h3>
      </header>
      <main className="container">
        <TodoForm onSaveTodoTask={todoSaveHandler} />
        <TodoList todos={todoTasks} />
      </main>
    </React.Fragment>
  );
}

export default App;
