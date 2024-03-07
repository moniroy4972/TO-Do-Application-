import * as React from "react";
import "./todo-form.scss";
// import { TodoList } from "../todo-list/todo-list";

export const TodoForm = (props) => {
  
  const { todos, setTodos } = props;
  // console.log(todos);
  const [task, setTask] = React.useState("");

  const handleAddTodo = (e) => {
    // Function to add todo
    var obj = { id: props.todos.length,
      label: task,
      checked: false}
      // console.log([...todos, obj]);
      setTodos([...todos, obj]);
  };

  const handleKeyUp = (e) => {
    // console.log(e.target.value);
    if (e.keyCode === 13) {
      handleAddTodo(e.target.value);
    }

  };

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
