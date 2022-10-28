import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const [isValid, setIsValid] = useState(false);

  const todoInputRef = useRef();

  const todoChangeHandler = () => {
    setTodo(todoInputRef.current.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Check for empty inputs
    if (todoInputRef.current.value.trim().length !== 0) {
      props.onSaveTodoTask(todoInputRef.current.value);
      // two way binding to clear thr input field
      setTodo("");
      return;
    }
    console.log("invalid input");
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
