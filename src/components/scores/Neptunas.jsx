import { useState } from "react";

export function Neptunas() {  
    const [count, setCount] = useState(0);
    const [team, setTeam] =useState('');
    

    function updateCount1() {
        setCount(count + 1);
        setTeam('Neptunas')
    }

    function updateCount2() {
        setCount(count + 2);
        setTeam('Neptunas')
    }

    function updateCount3() {
        setCount(count + 3);
        setTeam('Neptunas')
    }
    return ( <>
            <div className="name Neptunas">
                <h2>Neptūnas</h2>
                <h3 className="rezultatas Neptunas taskai">{count}</h3>
                <button className="Neptunas" onClick={updateCount1}>1</button>
                <button className="Neptunas" onClick={updateCount2}>2</button>
                <button className="Neptunas" onClick={updateCount3}>3</button>
            </div>
                <div className="" > {team} {count}</div>
            </>
    );
}