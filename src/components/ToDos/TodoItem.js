import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <Card className={`${classes["todo-task"]}`}>
      <span>{props.title}</span>
      <div className={classes["actions-wrap"]}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </Card>
  );
};

export default TodoItem;
