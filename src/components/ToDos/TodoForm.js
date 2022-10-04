import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TodoForm.module.css";

const todoTasks = [];

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  const todoInputRef = useRef();

  const todoChangeHandler = (event) => {
    console.log(todoInputRef.current.value);
    setTodo(todoInputRef.current.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(todo);
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
          ref={todoInputRef}
        />
        <Button type="submit">Add Task</Button>
      </form>
    </Card>
  );
};

export default TodoForm;
