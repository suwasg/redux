import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todo/todoActions";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTodo;
