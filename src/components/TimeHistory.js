
/*
 * Project final hand-in: Javascript File TimeHistory.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-31
 */

function TimeHistory({data, handleNextTime, handlePrevTime}) {
    return (
        <div aria-labelledby="time of the history" className="TimeHistory">
            <h2>{data[0]}</h2>
            <p>
                {data[1]}
            </p>
            <div>
                <button title="previousHistory" aria-label="previous history" id="prevHistory" onClick={handlePrevTime}><i class="fa fa-arrow-left"></i></button>
                <button title="nextHistory" aria-label="next history" id="nextHistory" onClick={handleNextTime}><i class="fa fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default TimeHistory;
