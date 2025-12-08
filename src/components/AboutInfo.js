
/*
 * Project final hand-in: Javascript File AboutInfo.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function AboutInfo({data}) {
    return (
        <div className="Section AboutInfo">
            <h1 id={data["id"]}>{data["title"]}</h1>
        </div>
    );
}

export default AboutInfo;
