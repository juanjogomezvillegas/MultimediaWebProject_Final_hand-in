
/*
 * Project final hand-in: Javascript File DtAndDd.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

function DtAndDd({title, data, link}) {
    return (
        <span>
            {!link? (
            <span>
                <dt>{title}</dt>
                <dd>
                    <dl>
                        {data.map((item, index) => (
                            <span key={index}>
                                <dt>{item[0]}</dt>
                                <dd>{item[1]}</dd>
                            </span>
                        ))}
                    </dl>
                </dd>
            </span>) : 
            <span>
                <dt>{title}</dt>
                <dd><a href={data} title={title} target="_blank">{data}</a></dd>
            </span>}
        </span>
    );
}

export default DtAndDd;
