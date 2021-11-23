import React from 'react'
import { useState } from 'react';

export const CounterComponent = () => {

    const [count, setCount] = useState(30);

    const handleIncrement = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    const handleDecrement = () => {
        setCount((prevCount) => {
            return prevCount - 1;
        })
    }

    return (
        <div className="box--component">
            <p>useState demo</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <p>Count {count} </p>
        </div>
    )
}
