import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './Logo.png'
import welcomePic from './Welcome Pic.JPG';
import earlyBrew from './Early  Brew.jpg';

const symbol = "\u25c8";
const url = "https://sites.google.com/view/beaglesand12s/home";

const Learn = () => {
  return (
    <html>
      <head>
        <title>Buds, Beagles, and Beer</title>
      </head>
      <body>
        <div class = "header">
          <h1>Buds, Beagles, and Beer</h1>
          <button class = "login-signup">Login/Sign-Up</button>
        </div>
        <div class="navbar">
          <Link to = "/home" style = {{color: 'black', position: 'absolute', left:20}}>Home</Link>
          <Link to = "/learn" style = {{color: 'black', position: 'absolute', left:100}}>Learn</Link>
          <div class="dropdown">
            <button class="dropbtn">Beer</button>
              <div class="dropdown-content">
                <a href = "beers#Porter">Porter</a>
                <a href = "beers.html#Stout">Stout</a>
                <a href = "beers.html#IPA">IPA</a>
                <a href = "beers.html#Pale Ale">Pale Ale</a>
                <a href = "beers.html#Brown Ale">Brown Ale</a>
                <a href = "beers.html#Pilsner">Pilsner</a>
                <a href = "beers.html#Lager">Lager</a>
                <a href = "beers.html#Wheat">Wheat</a>
                <a href = "beers.html#Sour">Sour</a>
                <a href = "beers.html#Belgian">Belgian</a>
                <a href = "beers.html#Amber">Amber</a>
                <a href = "beers.html#Hefeweizen">Hefeweizen</a>
                <a href = "beers.html#Saison">Saison</a>
                <a href = "beers.html#Kolsch">Kolsch</a>
              </div>
          </div>
          <Link to = "/forums" style = {{color: 'black', position: 'absolute', left:245}}>Forums</Link>
          <a href = {url} style = {{color: 'black', position: 'absolute', left:330}}>Beagles and 12s</a>
       </div>
        <div class = "logo-bg">
          <img src = {logo} class = "logo" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">{symbol} Background {symbol}</div>
            <div class = "inner-bg"><p> HISTORY OF BEER BREWING FROM THE START TO TODAY.</p></div>
            <img src = {earlyBrew} class = "crop-pic" />
          </div>
        <div class = "welcome-bg">
          <div class = "page-title">{symbol} What You Will Need {symbol}</div>
          <div class = "inner-bg"><p> GIVE INFORMATION ON THE COMPONENTS OF BEER BREWING.
            FROM THE POTS, KETTLES, AND INGREDIENTS. EXPLAIN THE EXPENSES OF THE PIECES AND HOW PROFESSIONALS DO IT.
            TALK ABOUT HOW YOU CAN DO IT IN YOUR OWN HOME AFFORDABLY AND ALSO BROADEN YOUR HORIZONS TO ADVANCED.</p></div>
            <div id="menu-outer-learn">
              <div class="table">
              <ul id="horizontal-list-learn">
                <li0>Equipment Sites</li0>
                  <li><a href="#">Site2</a></li>
                  <li><a href="#">Site3</a></li>
                  <li><a href="#">Site4</a></li>
                  <li><a href="#">Site5</a></li>
                  <li><a href="#">Site6</a></li>
                  <li><a href="#">Site7</a></li>
                  <li><a href="#">Site8</a></li>
                  <li><a href="#">Site9</a></li>
                  <li><a href="#">Site10</a></li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Learn;
