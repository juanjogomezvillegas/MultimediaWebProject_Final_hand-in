
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
import data from './data/data.json';

function App() {
  document.title = data["title"];

  const [lang, setLang] = useState("ca");
  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const [currImg, setCurrImg] = useState(0);
    const slaiderImageChange = () => {
        setCurrImg(currImg == 0? 1: 0);
    };
  
  return (
    <div className='App'>
      <Header data={data[lang]} lang={lang} handleLangChange={handleLangChange} />
      <div className='App-Content'>
        <Slider data={data["slider"]} currImg={currImg} changeImg={slaiderImageChange} />
        <div className='App-Sections'>
          <Presentation data={data[lang]["sections"]["presentation"]} />
          <Distances data={data[lang]["sections"]["distances"]} />
          <AboutInfo data={data[lang]["sections"]["aboutInfo"]} />
          <Activities data={data[lang]["sections"]["activities"]} />
          <Location data={data[lang]["sections"]["location"]} />
        </div>
      </div>
      <Footer flags={data["flags"]} />
    </div>
  );
}

export default App;
