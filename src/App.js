import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import TodoForm from "./components/ToDos/TodoForm";
import TodoList from "./components/ToDos/TodoList";

function App() {
  // callback for receiving state/data from child component (Lifting state up)
  const [todoTasks, setTodoTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  // persist data in local storage

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoTasks));
  }, [todoTasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("saved tasks are: ", tasks);
    if (tasks.length > 0) {
      setTodoTasks(tasks);
    }
  }, []);

  const todoSaveHandler = (enteredTodoTask) => {
    setTodoTasks((prevTodos) => {
      const updatedTodoTasks = [...prevTodos];

      updatedTodoTasks.unshift({
        title: enteredTodoTask,
        id: Math.random(),
      });

      return updatedTodoTasks;
    });
  };

  const todoDeleteHandler = (todoID) => {
    setTodoTasks((prevTodos) => {
      const updatedTodoTasks = prevTodos.filter((todo) => todo.id !== todoID);
      return updatedTodoTasks;
    });
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
      <header className="App-header bg-slate-800 py-6 text-center">
        <div className="container">
          <h3 className="font-bold text-3xl text-white">ToDo List</h3>
        </div>
      </header>
      <main className="container">
        <TodoForm onSaveTodoTask={todoSaveHandler} />
        {mainContent}
      </main>
    </React.Fragment>
  );
}

export default App;
