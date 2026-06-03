import React from 'react'
import { useState } from 'react'
const Input = ({taskList, setTaskList}) => {

  const [value, setValue] = useState("Medium");
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      priority: value,
      task: task
    }
    setTaskList([...taskList, todo]);
    setValue("Medium")
    setTask("");
  }
  return (
  <div className="input-container">
    <label htmlFor="dropdownPriority">
      Select your task priority
    </label>

    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      id="dropdownPriority"
    >
      <option value="Urgent">Urgent</option>
      <option value="Important">Important</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
    </select>

    <label htmlFor="task">Add your Task Here:</label>

    <input
      type="text"
      id="task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />

    <button type="submit" onClick={handleSubmit}>
      Add
    </button>
  </div>
);
}
export default Input