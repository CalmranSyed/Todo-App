import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const TodoItem = (props) => {
  // state for checking if task if being updated
  // const [editMode, setEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(props.title);
  const todoEditRef = useRef();
  // handler for edit button
  const editTodoHandler = () => {
    // if (editMode === false) {
    //   setEditMode(true);
    // } else {
    //   setEditMode(false);
    // }

    const currentTaskID = props.id;
    props.onEdit(currentTaskID);
    // setTimeout(() => {
    //   todoEditRef.current.focus();
    // }, 50);
    
  };

  // handler for delete button
  const deleteTaskHandler = () => {
    const id = props.id;
    props.onDelete(id);
  };

  const todoTitleChangeHandler = (event) => {
    setUpdatedTodo(todoEditRef.current.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onUpdate(updatedTodo, props.id);
  };

  return (
    <Card className="flex items-center justify-between">
      <form className="flex items-center justify-between w-full gap-5" onSubmit={formSubmitHandler}>
        <div className="w-[75%]">
        <input
          id="edit-field"
          className="w-full disabled:border-transparent disabled:px-0 disabled:font-semibold"
          type="text"
          value={updatedTodo}
          onChange={todoTitleChangeHandler}
          ref={todoEditRef}
          disabled={!props.edit}
        />
        </div>
        <div className="inline-flex items-center justify-center gap-5 basis-1/4 shrink-0 grow-0">
          <Button
            className="action-button"
            onClick={editTodoHandler}
            type="submit"
          >
            Edit
          </Button>
          <Button
            className="action-button"
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
