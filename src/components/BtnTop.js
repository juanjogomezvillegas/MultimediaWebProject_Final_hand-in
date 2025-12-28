
/*
 * Project final hand-in: Javascript File BtnTop.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-28
 */

function BtnTop({top}) {
    return (
        <div className="btnTop" aria-labelledby="go to top in the page">
            <a href={'#'+top} title="button go to top" class="fa fa-arrow-up"></a>
        </div>
    );
}

export default BtnTop;
