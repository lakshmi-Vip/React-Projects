import {useSelector, useDispatch} from "react-redux";
import { useRef, useEffect } from 'react'
import { increment, decrement, resete } from "./counterSlice";



export const Counter = () => {
    const cref = useRef(null)
    const dispatch = useDispatch()
    const count1 = useSelector((state) => state.counter.count)
    
    useEffect(() =>{
        cref.current.focus()
    },[])
       

    return (
        <>
        <p>RTK Counter: {count1}</p>
        <input type="text" ref={cref} value={count1} readOnly/>
        <br/>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick = {() => dispatch(reset())}>Set</button>
        </>
    )
}

export default Counter;