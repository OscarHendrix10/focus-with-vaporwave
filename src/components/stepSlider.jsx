import { styled } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMinutes } from '../redux/slices/timerSlice';


const PrettoSlider = styled(Slider)({
    color: '#808080',
    height: 10,
    '& .MuiSlider-track': {
      border: 'none',
      backgroundColor: '#000080'
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#000080',
      border: '2px solid black',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
});

const StepSlider = () => {
    const { selectedMinutes } = useSelector(state => state.timer);
    const dispatch = useDispatch();
    

    const handleTimerChange = (value) => {
        dispatch(setSelectedMinutes(value))
    }
    
    return (
        <PrettoSlider
            value={selectedMinutes}
            min={10}
            max={60}
            step={5}
            valueLabelDisplay="off"
            onChange={(e) => {
                handleTimerChange(e.target.value)
            }}
        />
    )
}

export default StepSlider