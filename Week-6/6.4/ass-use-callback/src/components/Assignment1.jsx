import { useState, memo, useCallback } from 'react'

export function Assignment1(){
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(function(){
         setCount(function(count){
            return count + 1;
         })
    }, [])

    const handleDecrement = useCallback(function(){
         setCount(function(count){
            return count - 1;
         })
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <Buttons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    )
}

const Buttons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
))
    

    
