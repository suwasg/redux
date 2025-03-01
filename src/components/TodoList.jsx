import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/todo/todoActions";

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id}>
          {todo.task}{" "}
          <button onClick={() => dispatch(removeTask(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
