import React, { useState } from 'react';

export default function Hook1Example() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Guest");
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h2>Welcome, {name}!</h2>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

