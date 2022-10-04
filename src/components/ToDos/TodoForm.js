import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TodoForm.module.css";

const todoTasks = [];

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  const todoInputRref = useRef();

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const formSubmitHandler = (event) => {
    // using refs to read value of the input instead of useState hook
    event.preventDefault();
    todoTasks.push(todoInputRref.current.value);
    props.onSaveTodos(todoTasks);
    // Add two way binding to clear form input upon submission
    setTodo("");
  };

  return (
    <Card className={classes["form-wrap"]}>
      <form onSubmit={formSubmitHandler} className={classes["todo-form"]}>
        <input
          onChange={todoChangeHandler}
          type="text"
          placeholder="Enter a task"
          value={todo}
          ref={todoInputRref}
        />
        <Button type="submit">Add Task</Button>
      </form>
    </Card>
  );
};

export default TodoForm;
