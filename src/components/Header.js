
/*
 * Project final hand-in: Javascript File Header.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Header({data, lang, handleLangChange}) {
    return (
        <div id="top" aria-label="section top of the page">
            <header aria-label="header of the page">
                <select name="changeLang" aria-label="button change language" id="selChangeLang" value={lang} onChange={handleLangChange}>
                    <option value="ca">Català</option>
                    <option value="es">Castellano</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </header>
            <nav id="navbar" aria-label="navigation bar">
                <div>
                    <a href="."><img alt="home" src="./multimedia_files/images/flagVillage.png" /></a>
                    {data["itemsNavbar"].map((item, index) => (
                        <a key={index} className="elementmenu" id={item[0]} href={item[0]}>{item[1]}</a>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Header;
