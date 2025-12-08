
/*
 * Project final hand-in: Javascript File Location.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Location({data}) {
    return (
        <div className="Section Location">
            <h1 id={data["id"]}>{data["title"]}</h1>
            <iframe title="location town Figueres" src="https://visors.icgc.cat/ulldeltemps/?layer=ortofoto_color_2000-2003#16.39/42.267125/2.961398" className="iframeLocation"></iframe>
        </div>
    );
}

export default Location;
