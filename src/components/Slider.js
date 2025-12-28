
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
                {currImg === 0?
                <img alt={data["image1"][1]} width="100%" src={data["image1"][0]} />
                : 
                <video width={width} controls autoPlay loop>
                    <source src={data["video"][0]} type="video/mp4" />
                    {data["video"][1]}
                </video>}
            </div>
            <div id="controlSlaider">
                <button title="previousImage" aria-label="previous image" id="prevImg" onClick={changeImg}><i class="fa fa-arrow-left"></i></button>
                <button title="nextImage" aria-label="next image" id="nextImg" onClick={changeImg}><i class="fa fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default Slider;
