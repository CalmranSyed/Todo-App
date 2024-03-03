import React, { useState, useRef, Fragment } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const [isValid, setIsValid] = useState(null);

  const todoInputRef = useRef();

  const todoChangeHandler = () => {
    setTodo(todoInputRef.current.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Check for empty inputs
    if (todoInputRef.current.value.trim().length !== 0) {
      setIsValid(true);
      props.onSaveTodoTask(todoInputRef.current.value);
      // two way binding to clear thr input field
      setTodo("");
      return;
    }

    setIsValid(false);
    setTodo("");
  };

  var message = <p className="text-red-500 mt-2 text-left text-sm font-semibold">Please add a task</p>;

  return (
    <Fragment>
      <Card className="my-7 max-w-5xl mx-auto">
        <p className="mb-3 text-sm font-bold">Keep track of your tasks effortlessly! Jot down everything here, and your to-dos will be ready for you next time. Add each task for smooth task management</p>
        <form onSubmit={formSubmitHandler} className="flex gap-5">
          <input
            className="basis-3/4 leading-7 text-base focus:outline-none"
            onChange={todoChangeHandler}
            type="text"
            placeholder="Enter a task"
            value={todo}
            ref={todoInputRef}
          />
          <Button type="submit" className="basis-1/4 button">Add Task</Button>
        </form>
      {isValid === false && message}
      </Card>
    </Fragment>
  );
};

export default TodoForm;
