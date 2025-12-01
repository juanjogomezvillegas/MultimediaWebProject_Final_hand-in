
/*
 * Project final hand-in: Javascript File App.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Slider from './components/Slider.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-Content'>
        <Slider />
        <div className='App-Sections'>
          Aquí van la resta de seccions
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
