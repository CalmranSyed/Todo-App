import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div className={classes}>
      <h3>Tasks</h3>
      {props.todos.map((task) => (
        <TodoItem
          onDelete={props.onDeleteTodoTask}
          key={task.id}
          title={task.title}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
