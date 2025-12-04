
/*
 * Project final hand-in: Javascript File Footer.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Footer({flags}) {
    return (
        <footer className="Footer">
            <div>
                <p>Juan José Gómez Villegas &copy; 2025</p>
            </div>
            <div>
                {flags.map((item, index) => (
                    <img className="flags" key={index} src={item[0]} alt={item[1]} title={item[1]} />
                ))}
            </div>
        </footer>
    );
}

export default Footer;
