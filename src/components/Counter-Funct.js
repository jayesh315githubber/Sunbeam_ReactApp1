import { useState } from "react"
import Header from "./Header"

const CounterApp = () => {

   /*  const [state,setState] = useState(
        {
            counter1 : 0,
            counter2 : 0 
        }) */

        console.log("Hello");
        const [counter1,setCounter1] = useState(0)
        const [counter2,setCounter2] = useState(0)

        const onIncrement1 = () =>{
            /* setState({
                // ...state,
                counter2 : state.counter2,
                counter1 : state.counter1+ 1
            }) */
            setCounter1(counter1 + 1)
        }

        const onIncrement2 = () =>{
           /*  setState({
                // ...state,
                counter1 : state.counter1,
                counter2 : state.counter2 + 1
            }) */
            setCounter2(counter2 + 1)

        }

        const onDecrement1 = () =>{
            /* setState({
                // ...state,
                counter2 : state.counter2,
                counter1 : state.counter1 - 1
            }) */
            setCounter1(counter1 - 1)

        }

        const onDecrement2 = () =>{
           /*  setState({
                // ...state,
                counter1 : state.counter1,
                counter2 : state.counter2 - 1
            }) */
            setCounter2(counter2 - 1)

        }

    return (
        <div>
            <Header title="Counter App" subtitle="this is a functional component" />

            <div className="counter">
                {/* <h4>Counter1 : {state.counter1}</h4> */}
                <h4>Counter1 : {counter1}</h4>
                <button onClick = {onIncrement1} className="btn btn-success">+1</button>
                <button onClick = {onDecrement1} className="btn btn-success">-1</button>
            </div>

            <div className="counter">
                {/* <h4>Counter2 : {state.counter2}</h4> */}
                <h4>Counter2 : {counter2}</h4>
                <button onClick = {onIncrement2} className="btn btn-success">+1</button>
                <button onClick = {onDecrement2} className="btn btn-success">-1</button>
            </div>

        </div>
    )
}

export default CounterApp