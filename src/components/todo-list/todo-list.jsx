import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = (props) => {

  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    // Function to delete task
    var arr = [];
    arr = todos.filter((i) => { return i.id !== id })
    setTodos(arr);


  };

  const toggleCheck = (id) => {
    // Function to toggle task
    var arr = [], j = 0;
    for (var i = 0; i < todos.length; i++) {
      if (id == todos[i].id) {
        todos[i].checked = !todos[i].checked;
      }
      arr[j++] = todos[i];
    }
    console.log(arr);
    setTodos(arr);


  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (

            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
