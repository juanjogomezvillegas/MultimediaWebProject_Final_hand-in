
/*
 * Project final hand-in: Javascript File History.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-28
 */

import { useState } from 'react';
import TimeHistory from "./TimeHistory.js";

function History({data}) {
    const [currTime, setCurrTime] = useState(data["info"].length-1);

    const handleNextTime = (e) => {
        let newTime;
        if (currTime === data["info"].length-1) {
            newTime = 0;
        } else {
            newTime = currTime + 1;
        }
        setCurrTime(newTime);
    };

    const handlePrevTime = (e) => {
        let newTime;
        if (currTime === 0) {
            newTime = data["info"].length-1;
        } else {
            newTime = currTime - 1;
        }
        setCurrTime(newTime);
    };

    return (
        <div role="tabpanel" aria-labelledby="history" className="Section History">
            <h1 id={data["id"]}>{data["title"]}</h1>
            <p>
                <TimeHistory data={data["info"][currTime]} handleNextTime={handleNextTime} handlePrevTime={handlePrevTime} />
            </p>
        </div>
    );
}

export default History;
