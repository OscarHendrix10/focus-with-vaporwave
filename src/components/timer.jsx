import '../assets/styles/timer.css'
import { timerWork } from '../utils/calculateTimer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ControlTimer from './controlTimer';



const Timer = () => {

    const { isActive, minutes, seconds, selectedMinutes } = useSelector(state => state.timer);

    useEffect(() => {
        if(isActive) {
            timerWork()
        }
    }, [isActive]);

  return (
    <>
    <div class="box">

    <div className='title'>
         <img src="../../public/icons/time_and_date-3.png" width="20" height="20" class="title" />
         <p class="title">PomodoroTimer.exe</p>
         <button>X</button>
         <button>?</button>
    </div>    

    
    <div class="body">
        <div
            className='timer-counter'
            id={isActive ? 'timer-started' : 'timer-sleep' }>
            {
                isActive ? `${minutes}:${seconds}` : `${selectedMinutes}:00` 
            }    
        </div>
            <ControlTimer />
    </div>
    
</div>
    </>
  )
}

export default Timer