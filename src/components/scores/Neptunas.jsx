import { useState } from "react";

export function Neptunas() {  
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
            <div className="name Neptunas">
                <h2>Neptūnas</h2>
                <h3 className="rezultatas Neptunas taskai">{count}</h3>
                <button className="Neptunas" onClick={updateCount1}>1</button>
                <button className="Neptunas" onClick={updateCount2}>2</button>
                <button className="Neptunas" onClick={updateCount3}>3</button>
            </div>
    );
}