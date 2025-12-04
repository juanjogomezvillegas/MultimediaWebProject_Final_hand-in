
/*
 * Project final hand-in: Javascript File Presentation.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Presentation({data}) {
    return (
        <div className="Presentation">
            <h1>{data["title"]}</h1>
            <p>{data["description"]}</p>
        </div>
    );
}

export default Presentation;
