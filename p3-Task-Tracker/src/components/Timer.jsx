import React from 'react'
import { useState , useEffect } from 'react';
const Time = () => {
    let [running, setRunning] = useState(false);
    let [time, setTime] = useState(0)
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
        <div className="timer-container">
            <div className="timer-display">
                <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>
            </div>
            <div className="timer-buttons">
                {(!running)? 
                <button className="start-btn" onClick={() => setRunning(true)}>Start</button>
                :
                <button className="stop-btn" onClick={() => setRunning(false)}>Stop</button>}
                <button className="reset-btn" onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Time