
/*
 * Project final hand-in: Javascript File Header.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Header({data, lang, handleLangChange, theme, handleThemeChange}) {
    return (
        <div id="top" aria-roledescription="section top of the page">
            <header aria-roledescription="header of the page">
                <select name="changeLang" aria-label="button change language" title="change language" id="selChangeLang" value={lang} onChange={handleLangChange}>
                    <option value="ca">Català</option>
                    <option value="es">Castellano</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
                <select name="changeTheme" aria-label="button change theme" title="change theme" id="selChangetheme" value={theme} onChange={handleThemeChange}>
                    <option value="theme">Default Theme</option>
                    <option value="blood">Blood Theme</option>
                    <option value="dark">Dark Theme</option>
                </select>
                <select name="changeFont" aria-label="button change font" title="change font" id="selChangefont" value="" onChange="">
                    <option value="arial">Arial</option>
                </select>
            </header>
            <nav id="navbar" aria-label="navigation bar">
                <div>
                    <a aria-roledescription="image web page" title="image web page" href="."><img alt="home" src="./multimedia_files/images/flagVillage.png" /></a>
                    {data["itemsNavbar"].map((item, index) => (
                        <a aria-roledescription={item[1]} key={index} title={item[1]} className="elementmenu" id={item[0]} href={item[0]}>{item[1]}</a>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Header;
