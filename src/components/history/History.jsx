import { Neptunas } from "../scores/Neptunas";

export function History(info) {
    
    console.log(Neptunas.info)
    return ( 
    <>
        <h4>Švieslentės istorija</h4>
        <div className="istorijos konteineris">
            <div className="istorija"></div>
        </div>
    </>
    );
}

