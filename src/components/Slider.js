
/*
 * Project final hand-in: Javascript File Slider.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

function Slider({data, currImg, changeImg}) {
    var width = window.innerWidth;
    return (
        <div className="Slider">
            <div>
                {currImg == 0?
                <img alt="slider" width="100%" height="650px" src={data["image1"]} />
                : 
                <video width={width} height="650px" controls autoPlay loop>
                    <source src={data["video"]} type="video/mp4" />
                    El navegador no suporta el video
                </video>}
            </div>
            <div id="controlSlaider">
                <button id="prevImg" onClick={changeImg}><i class="fa fa-arrow-left"></i></button>
                <button id="nextImg" onClick={changeImg}><i class="fa fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default Slider;
