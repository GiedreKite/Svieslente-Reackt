import { useState } from "react";

export function Rytas() {  
    const [count, setCount] = useState(0);

    function updateCount1() {
        setCount(count + 1);
    }

    function updateCount2() {
        setCount(count + 2);
    }

    function updateCount3() {
        setCount(count + 3);
    }
    return (
            <div className="name Rytas r1">
                <h2>Lietuvos rytas</h2>
                <h3 className="rezultatas Rytas taskai">{count}</h3>
                <button className="Rytas" onClick={updateCount1}>1</button>
                <button className="Rytas" onClick={updateCount2}>2</button>
                <button className="Rytas" onClick={updateCount3}>3</button>
            </div>
    );
}