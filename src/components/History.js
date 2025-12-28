
/*
 * Project final hand-in: Javascript File History.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-28
 */

function History({data}) {
    return (
        <div role="tabpanel" aria-labelledby="history" className="Section History">
            <h1 id={data["id"]}>{data["title"]}</h1>
            <p>Edad Antigua (Origen de los tiempos - 701 a.C.) <br />
               Edad Clásica (700 a.C. - 500) <br />
               Edad Media (501 - 1299) <br />
               Edad de la Pólvora (1300 - 1715) <br />
               Siglo de las Luces (1716 - 1880) <br />
               Era Industrial (1881 - 1935) <br />
               Edad Moderna (1936 - 1968) <br />
               Siglo de la Información (1969 - actualidad) <br /> </p>
        </div>
    );
}

export default History;
