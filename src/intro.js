import React from "react";
import './styling/animations.css';
import beans from "./images/beans-.png"
import './styling/App.css'
import { Link } from 'react-router-dom';
// import Cappuccino from './cappuccin';

function Intro() {
    return (

<main id='landing'>
<section className="title-">
  <div class="content">
    <h2>Tic Tac Joe</h2>
    <h2>Tic Tac Joe</h2>
  </div>
</section>


<div className="button-container">
<Link to="/Test" id="main-button">Start</Link>
<img src={beans} alt="coffee-play-button" className="beans-button"/>
</div>


<div class="cof-container">
    <div class="coffee-header">
      <div class="coffee-header__buttons coffee-header__button-one"></div>
      <div class="coffee-header__buttons coffee-header__button-two"></div>
      <div class="coffee-header__display"></div>
      <div class="coffee-header__details"></div>
    </div>
    <div class="coffee-medium">
      <div class="coffe-medium__exit"></div>
      <div class="coffee-medium__arm"></div>
      <div class="coffee-medium__liquid"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
      <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
      <div class="coffee-medium__cup"></div>
    </div>
    <div class="coffee-footer"></div>
  </div>
  </main>
    )
    };


    export default Intro;
