import './css/App.css';
import React ,{useEffect, useRef, useState}from 'react';

function App() {
  document.title="Countdown Timer";
  const [days,setDays]=useState('00');
  const [hours,setHours]=useState('00');
  const [minutes,setMinutes]=useState('00');
  const [seconds,setSeconds]=useState('00');
  let interval=useRef();
  const startTimer=()=>{
    const countFrom = new Date('January 1,2022 00:00:00').getTime();
       interval=setInterval(()=>{
      const now = new Date().getTime();
      const diff= countFrom - now;
      const day=Math.floor(diff/(1000*60*60*24));
      const hr=Math.floor(diff%(1000*60*60*24)/(1000*60*60));
      const min=Math.floor(diff%(1000*60*60)/(1000*60));
      const sec=Math.floor(diff%(1000*60)/1000);
      
      if(diff<0){
        //stop timer 
        clearInterval(interval.current);
      }
      else{
        //update 
        setDays(day);
        setHours(hr);
        setMinutes(min);
        setSeconds(sec);
      }

    },1000)
  }
  useEffect(()=>{
    startTimer();
    return()=>{
      clearInterval(interval.current);
    }
  });
  return (
    <React.Fragment>
    <div className="container">

      <div>
        <i className="far fa-calendar-alt"></i>
        <h1>Countdown Timer To <span >202<span className='n2'>2</span></span> </h1>
      </div>
      

      <div className='row '>

        <div className="col">
        <p>Days</p>
        <p className='num'>{days}</p>
        </div>

        <div className="col ">
        <p>Hours</p>
        <p className='num'>{hours}</p>
        </div>

        <div className="col ">
        <p>Minutes</p>
        <p className='num'>{minutes}</p>
        </div>

        <div className="col">
        <p>Seconds</p>
        <p className='num'>{seconds}</p>
        </div>

      </div>
      </div> 
    </React.Fragment>
  );
}

export default App;
