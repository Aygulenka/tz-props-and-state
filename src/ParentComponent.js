import React, {useState} from 'react'
import ChildComponent from './ChildComponent'



const ParentComponent = () =>{
    const [state, setState] = useState(0)
    const increment = () =>{
       setState (state +1)
    }
    const decrement = () =>{
        setState (state === 0 ? 0 : state -1)
    }
    const reset = () => {
        setState(state - state)
    }
    const random = ()=> {
        setState( Math.floor(Math.random() * (11 - 1)) + 1)
    }
    return (
        <div>
            <p>Counter : {state}</p>
            <button onClick = {increment}>Увеличить</button>
            <button onClick = {reset}>Сбросить</button>
            <button onClick = {decrement}>Уменьшить</button>
            <button onClick = {random}>Случайное значение</button>
<ChildComponent name = "Aygulya" state = {state} />
        </div>
    )
}

export default ParentComponent;