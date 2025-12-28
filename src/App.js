
/*
 * Project final hand-in: Javascript File App.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Slider from './components/Slider.js';
import Presentation from './components/Presentation.js';
import Distances from './components/Distances.js';
import AboutInfo from './components/AboutInfo.js';
import Activities from './components/Activities.js';
import Location from './components/Location.js';
import History from './components/History.js';
import BtnTop from './components/BtnTop.js';
import data from './data/data.json';

function App({utils}) {
  document.title = data["title"];

  const [themeColor, setThemeColor] = useState('#000000');

  const handleThemeChange = (e) => {
    let backgroundColor = "";
    let textColor = "";
    switch (e.target.value) {
      case "default":
        backgroundColor = "#005EB8";
        textColor = "#ffffff";
        break;
      case "blood":
        backgroundColor = "#8A0404";
        textColor = "#ffffff";
        break;
      case "dark":
        backgroundColor = "#080808";
        textColor = "#ffffff";
        break;
    }
    utils.setCssVar('--colorPrimary', backgroundColor);
    utils.setCssVar('--textColorPrimary', textColor);
    setThemeColor(e.target.value);
  };

  const [lang, setLang] = useState("ca");
  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const [currImg, setCurrImg] = useState(0);
  const slaiderImageChange = () => {
    setCurrImg(currImg === 0? 1: 0);
  };

  return (
    <div className='App'>
      <span id='gototop'></span>
      <Header data={data[lang]} lang={lang} handleLangChange={handleLangChange} theme={themeColor} handleThemeChange={handleThemeChange} />
      <div className='App-Content'>
        <Slider data={data["slider"]} currImg={currImg} changeImg={slaiderImageChange} />
        <div className='App-Sections'>
          <Presentation data={data[lang]["sections"]["presentation"]} />
          <Distances data={data[lang]["sections"]["distances"]} />
          <AboutInfo data={data[lang]["sections"]["aboutInfo"]} />
          <Activities data={data[lang]["sections"]["activities"]} products={data["products"]} lang={lang} />
          <Location data={data[lang]["sections"]["location"]} />
          <History data={data[lang]["sections"]["history"]} />
        </div>
      </div>
      <BtnTop top="gototop" />
      <Footer flags={data["flags"]} />
    </div>
  );
}

export default App;
