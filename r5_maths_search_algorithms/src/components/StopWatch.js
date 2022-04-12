import {useRef, useState, useEffect} from 'react';

function StopWatch(){
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  // Start Timer is invoked when the Start button is clicked.
  // save the timerIdRef in the reference timerIdRef.curr
  const startTimer = () =>{
    if(timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(()=>{
      setCount(c => c+1)
    }, 1000);
  }

  // Stop Timer
  const stopTimer = ()=>{
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  }

  const resetTimer = () =>{
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  }
  // cleanup function
  // if the component unmounts with the stopwatch active, the cleanup function of useEffect() is going to stop the timer
  useEffect(()=>{
    return ()=> clearInterval(timerIdRef.current);
  }, []);
  return(
    <div>
      <div>Timer : {count}s </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch;