
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
            <div>
                <h1>{data["title"]}</h1>
            </div>
            <div>
                <p>{data["description"]}</p>
            </div>
        </div>
    );
}

export default Presentation;
