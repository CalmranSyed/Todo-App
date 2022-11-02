import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  // state for checking if task if being updated
  const [editMode, setEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(props.title);
  const todoEditRef = useRef();

  // handler for edit button
  const editTodoHandler = () => {
    if (editMode === false) {
      setEditMode(true);
      return;
    }
    console.log(localStorage.getItem("savedTodos"));
    setEditMode(false);
  };

  // handler for delete button
  const deleteTaskHandler = () => {
    props.onDelete(props.id);
  };

  const todoTitleChangeHandler = (event) => {
    setUpdatedTodo(todoEditRef.current.value);
  };

  let titleContent = <span>{updatedTodo}</span>;

  if (editMode) {
    titleContent = (
      <input
        className={classes["edit-input"]}
        type="text"
        value={updatedTodo}
        onChange={todoTitleChangeHandler}
        ref={todoEditRef}
      />
    );
  }

  // ref for input field for updating task

  return (
    <Card className={`${classes["todo-task"]}`}>
      {titleContent}
      <div className={classes["actions-wrap"]}>
        <Button
          className={classes["edit-task"]}
          onClick={editTodoHandler}
          disabled={editMode}
        >
          Edit
        </Button>
        <Button className={classes["delete-task"]} onClick={deleteTaskHandler}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TodoItem;
