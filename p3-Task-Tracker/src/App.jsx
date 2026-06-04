import Input from './components/Input.jsx'
import TaskBoard from './pages/TaskBoard.jsx'
import react, { useState } from 'react'
import CompletedTask from './pages/CompletedTask.jsx';
import "./App.css";
import "./styles/input.css";
import "./styles/timer.css";
import "./styles/taskBoard.css"
import "./styles/completedTask.css"

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
    <h1 className="text-5xl font-extrabold text-center py-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Task Tracker</h1>
    <Input taskList={taskList} setTaskList={setTaskList} />
    <div className="board-container">
      <div className="board-section">
        <h2 className="board-title text-cyan-300">To Do</h2>
        <ul>
        {taskList.filter((task)=>!task.completed).map((todo, index)=>{
            return <TaskBoard key={index} index={index} todo={todo} taskList={taskList} setTaskList={setTaskList}/>
          })}
        </ul>
      </div>

      <div className="board-section">
        <h2 className="board-title text-green-300">Completed</h2>
        <ul>
        {taskList.filter((task)=>task.completed).map((todo, index)=>{  
            return <CompletedTask key={index} index={index} todo={todo} taskList={taskList} setTaskList={setTaskList}/>
          })}
        </ul>
      </div>
    </div>
    </>
  )
}
export default App
