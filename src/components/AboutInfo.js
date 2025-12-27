
/*
 * Project final hand-in: Javascript File AboutInfo.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

import DtAndDd from "./DtAndDd.js";

function AboutInfo({data}) {
    return (
        <div role="tabpanel" aria-labelledby="aboutInfo" className="Section AboutInfo">
            <h1 id={data["id"]}>{data["title"]}</h1>
            <div>
                <dl>
                    <DtAndDd title={data["info"]["place"]["title"]} data={data["info"]["place"]["data"]} link={false} />
                    <DtAndDd title={data["info"]["humanPopulation"]["title"]} data={data["info"]["humanPopulation"]["data"]} link={false} />
                    <DtAndDd title={data["info"]["geography"]["title"]} data={data["info"]["geography"]["data"]} link={false} />
                    <DtAndDd title={data["info"]["webPortal"]["title"]} data={data["info"]["webPortal"]["data"]} link={true} />
                </dl>
            </div>
        </div>
    );
}

export default AboutInfo;
