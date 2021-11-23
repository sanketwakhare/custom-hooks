import React from 'react'
import { useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            useState demo
            <p>Count {count} </p>
            <button onClick={() => setCount(count + 1)}>Increment+</button>
            <button onClick={() => setCount(count - 1)}>Decrement-</button>
        </div>
    )
}
