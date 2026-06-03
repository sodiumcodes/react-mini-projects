import Input from './components/Input.jsx'
import Board from './pages/Board.jsx'
import react, { useState } from 'react'
import "./App.css";
import "./styles/input.css";
import "./styles/board.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList)
  return (
    <>
    <h1>To-Do List</h1>
    <Input taskList = {taskList} setTaskList= {setTaskList} />
    <ul >
      {/* When you use {} in an arrow function, you must explicitly return something.
        Currently your callback returns undefined, so React never renders <Board /> */}
      {taskList.map((todo, index)=>{  
        return <Board key= {index} todo={todo}/>
      })}
    </ul>
    </>
  )
}
export default App
