import React from 'react'
import { useState, useMemo } from 'react';

export const UseMemoComponent = () => {

    const [count, setCount] = useState(1);
    const [bgColor, setBgColor] = useState(false);

    const doubleNumber = useMemo(() => {
        // this would not be called every time the component is rendered.
        // this would be onv=oked only when the dependency is updated. e.g. count is updated
        for (let i = 0; i < 1000000000; i++);
        return count * 2;
    }, [count]);

    const styles = {
        backgroundColor: bgColor ? 'red' : 'yellow',
    }

    return (
        <div className="box--component">
            <p>useMemo demo</p>
            <div style={styles}>
                <div>Current count {count}</div>
                <div>Double number {doubleNumber}</div>
            </div>
            <button onClick={() => setCount((currentCount) => currentCount + 1)}>count+ (Invoke slow function)</button>
            <button onClick={() => setBgColor((currentFlag) => !currentFlag)}>Change Theme</button>
        </div>
    )
}
