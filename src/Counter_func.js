import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const [fixedNumber] = useState(0)

    return (
        <div>
            <h1>{number}</h1>
            <h2>변경되지 않는 값 : {fixedNumber} </h2>
            <button onClick={() => setNumber(number+1)}> +1 </button>
        </div>
    )
}

export default Counter;