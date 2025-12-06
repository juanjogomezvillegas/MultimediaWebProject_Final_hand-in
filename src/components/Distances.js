
/*
 * Project final hand-in: Javascript File Distances.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Distances({data}) {
    return (
        <div className="Distances">
            {data.map((item) => (
                <div>
                    <img alt={item[1]} title={item[1]} src={item[0]} />
                    <h2>{item[1]}</h2>
                </div>
            ))}
        </div>
    );
}

export default Distances;
