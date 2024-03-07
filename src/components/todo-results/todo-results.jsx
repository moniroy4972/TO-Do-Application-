import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;
  const [count, setCount] = React.useState(0)
  const calculateChecked = () => {
    // Function to calculate completed tasks
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].checked === true) {
        setCount(count + 1)
      }
    }
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
