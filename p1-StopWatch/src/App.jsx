import { useState , useEffect} from 'react'
function App() {
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{
        setTime(lastTime => lastTime+10)
      },10);
    }
    else if (! running){ 
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  
  })
  return(
    <>
      <h1 className="text-5xl font-bold text-white my-5">Stop Watch</h1>
      <div className="flex justify-center items-center my-5">
        <span className="text-7xl font-mono text-cyan-400" >{("0" + Math.floor((time/60000)%60))} : </span> {/* time to minutes */}
        <span className="text-7xl font-mono text-cyan-400" >{("0" + Math.floor((time/1000)%60))} : </span> {/* converts time to seconds */}
        <span className="text-7xl font-mono text-cyan-400" >{("0" + Math.floor((time/100)%100))} </span> {/* converts time to milliseconds */}
        
      </div>
      <div className="flex justify-center items-center my-5"> 
        {(running == false)? 
        <button className='px-8 py-3 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-800 mx-5' onClick={() => setRunning(true)}>Start</button> 
        :
        <button className='px-8 py-3 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-900 mx-5' onClick={() => setRunning(false)}>Stop</button>}

        <button className='px-8 py-3 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600' onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  )
}

export default App