import React from 'react'
import { useState, useEffect } from 'react';

export const PersonComponent = () => {

    const [name, setName] = useState('John');
    const [age, setAge] = useState(21);

    useEffect(() => {
        // use Effect gets called every time the dependency state changes
        console.log('name changed');
        // here name is dependency state
    }, [name]);

    useEffect(() => {
        // use Effect gets called every time the dependency state changes
        console.log('age changed');
        // here age is dependency state
    }, [age]);

    const updateName = (e) => {
        setName(e.target.value);
        // after this name state changes, the useEffect hook will be invoked
    }

    const updateAge = (e) => {
        //  considered valid age to be between 0 to 150
        const newAge = e.target.value;
        if (newAge < 0 || newAge > 150) {
            return;
        }
        setAge(e.target.value);
        // after this age state changes, the useEffect hook will be invoked
    }

    return (
        <div className="box--component">
            <p>useEffect demo</p>
            Name: <input type="text" name="Name" defaultValue={name} onChange={updateName}></input>
            Age: <input type="number" name="Age" defaultValue={age} onChange={updateAge}></input>
            <p> Name: {name}</p>
            <p> Age: {age}</p>
        </div>
    )
}