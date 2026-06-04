import React from 'react'

const Complete = ({ todo, index, taskList, setTaskList}) => {
  function handleDelete(){
    //delete that todo
    const updatedTasks = [
      ...taskList.slice(0, index),      // 0 to index-1
      ...taskList.slice(index + 1)      // index+1 to end
    ];
    setTaskList(updatedTasks);
  }
  return (
    <li className="completed-task-card">
      <div className="completed-task-content">
        <h3 className="completed-task-priority">{todo.priority}</h3> 
        <span className="completed-task-name">{todo.task}</span>
        <div className="flex gap-3 mt-2">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white font-semibold transition-all duration-300" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  )
};
export default Complete