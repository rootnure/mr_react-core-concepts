import { useState } from "react";

const Counter = () => {
    const [count, setCount] =  useState(0);

    const counterStyle = {
        border: '1px solid yellow',
        padding: '10px',
        margin: "10px"
    }

    const handleAdd = () => {
        setCount(curr => curr+1 );
    }

    return (
        <div style={counterStyle}>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>Add 1</button>
        </div>
    );
};

export default Counter;