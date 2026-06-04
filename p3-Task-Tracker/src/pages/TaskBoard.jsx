import React, { useEffect , useState} from 'react';
import Timer from '../components/Timer.jsx'
const Board = ({ index , todo, taskList, setTaskList}) => {
  
  function handleComplete(){
    console.log(index);
    //move it to completed board
    const updatedList = [...taskList];
    updatedList[index].completed = true;
    setTaskList(updatedList);
  }
  function handleDelete(){
    console.log(index);
    
    //delete that todo
    const updatedTasks = [
      ...taskList.slice(0, index),      // 0 to index-1
      ...taskList.slice(index + 1)      // index+1 to end
    ];
    setTaskList(updatedTasks);
  }
  return (   
    <li className="task-card">
      <div className="task-content">
        <h3 className={`task-priority priority-${todo.priority}`}>{todo.priority}</h3> 
        <span className="task-name">{todo.task}</span>
        <Timer/>
        <div className="flex gap-3 mt-2">
          <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white font-semibold transition-all duration-300" onClick={handleDelete}>Delete</button>
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-white font-semibold transition-all duration-300" onClick={handleComplete}>Complete</button>
        </div>
      </div>
    </li>
    )
};

export default Board;