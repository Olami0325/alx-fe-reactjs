import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count +1);
    }

    function decrease(){
        setCount(count -1);
    }

    function reset(){
        setCount(0);
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter