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
    setEditMode(false);
  };

  // handler for delete button
  const deleteTaskHandler = () => {
    props.onDelete(props.id);
  };

  const todoTitleChangeHandler = (event) => {
    setUpdatedTodo(todoEditRef.current.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onUpdate(updatedTodo, props.id);
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
      <form className={`${classes["edit-form"]}`} onSubmit={formSubmitHandler}>
        <div className={classes["task-content"]}>{titleContent}</div>
        <div className={classes["actions-wrap"]}>
          <Button
            className={classes["edit-task"]}
            onClick={editTodoHandler}
            disabled={editMode}
            type="submit"
          >
            Edit
          </Button>
          <Button
            className={classes["delete-task"]}
            onClick={deleteTaskHandler}
          >
            Delete
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TodoItem;
