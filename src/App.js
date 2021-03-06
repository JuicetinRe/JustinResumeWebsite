import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Card} from 'react-bootstrap';
import MorseCalculator from './MorseCalculator';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Routes>
        <Route exact path ="/" element = {<Home />} />
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/resume" element = {<Resume/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/MorseCalculator" element = {<MorseCalculator/>}></Route>
      </Routes>
      </div>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
