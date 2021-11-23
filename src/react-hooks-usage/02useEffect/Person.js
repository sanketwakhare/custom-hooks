import React from 'react'
import { useState, useEffect } from 'react';


export const Person = () => {

    const [name, setName] = useState('John');
    const [age, setAge] = useState(21);
    useEffect(() => {
        console.log(name, age);
    }, [name, age]);

    const updateName = () => {
        console.log(name)
        setName(name);
    }

    return (
        <div>
            Person Information:
            <input type="text" name="Name" value={name} onChange={() => updateName(name)}></input>
            <input type="text" name="Age" value={age}></input>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}
