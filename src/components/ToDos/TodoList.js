import { useState, React } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const [editIndex, setEditIndex] = useState();
  const editModeHandler = (taskID) => {
    const pos = props.todos.map((task) => task.id).indexOf(taskID);

    if (editIndex !== pos) {
      setEditIndex(pos);
      return;
    }

    setEditIndex();
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h3 className="text-xl font-bold text-center mb-3">Tasks remaining</h3>
      {props.todos.map((task, index) => (
        <TodoItem
          onDelete={props.onDeleteTodoTask}
          key={task.id}
          title={task.title}
          id={task.id}
          onUpdate={props.onUpdateTodoTask}
          edit={editIndex === index}
          onEdit={editModeHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
