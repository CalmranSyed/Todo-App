import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/ToDos/TodoForm";
import TodoList from "./components/ToDos/TodoList";

function App() {
  // callback for receiving state/data from child component (Lifting state up)
  const [todoTasks, setTodoTasks] = useState([]);

  // persist data in local storage
  localStorage.setItem("tasks", JSON.stringify(todoTasks));
  const tasks = localStorage.getItem("tasks");

  const todoSaveHandler = (enteredTodoTask) => {
    setTodoTasks((prevTodos) => {
      const updatedTodoTasks = [...prevTodos];
      updatedTodoTasks.unshift({
        title: enteredTodoTask,
        id: Math.random().toString(),
      });
      return updatedTodoTasks;
    });

    console.log(todoTasks);
  };

  const todoDeleteHandler = (todoID) => {
    setTodoTasks((prevTodos) => {
      const updatedTodoTasks = prevTodos.filter((todo) => todo.id !== todoID);
      return updatedTodoTasks;
    });
    console.log(todoTasks);
  };

  const todoUpdateHandler = (title, id) => {
    setTodoTasks((prevTodos) => {
      const updatedTodoTasks = prevTodos.filter((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }

        return todo;
      });
      return updatedTodoTasks;
    });
    console.log(todoTasks);
  };

  let mainContent = (
    <p className="message">
      No Tasks found , Please add some tasks using the form above
    </p>
  );

  if (todoTasks.length > 0) {
    mainContent = (
      <TodoList
        todos={todoTasks}
        onDeleteTodoTask={todoDeleteHandler}
        onUpdateTodoTask={todoUpdateHandler}
      />
    );
  }

  return (
    <React.Fragment>
      <header className="App-header">
        <h3>ToDo List</h3>
      </header>
      <main className="container">
        <TodoForm onSaveTodoTask={todoSaveHandler} />
        {mainContent}
      </main>
    </React.Fragment>
  );
}

export default App;
