import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./main.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './Logo.png'
import welcomePic from './Welcome Pic.JPG';
import beagles12s from './Beags12s.jpg';

const symbol = "\u25c8";
const url = "https://sites.google.com/view/beaglesand12s/home";

const Homepage = () => {

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
          <Link to = "/home" style = {{color: 'black', position: 'absolute', left:20}} >Home</Link>
          <Link to = "/learn" style = {{color: 'black', position: 'absolute', left:100}}>Learn</Link>
          <div class="dropdown">
            <button class="dropbtn">Beer</button>
              <div class="dropdown-content">
                  <a href = "beers#Porter">Porter</a>
                  <a href = "beers#Stout">Stout</a>
                  <a href = "beers#IPA">IPA</a>
                  <a href = "beers#Pale Ale">Pale Ale</a>
                  <a href = "beers#Brown Ale">Brown Ale</a>
                  <a href = "beers#Pilsner">Pilsner</a>
                  <a href = "beers#Lager">Lager</a>
                  <a href = "beers#Wheat">Wheat</a>
                  <a href = "beers#Sour">Sour</a>
                  <a href = "beers#Belgian">Belgian</a>
                  <a href = "beers#Amber">Amber</a>
                  <a href = "beers#Hefeweizen">Hefeweizen</a>
                  <a href = "beers#Saison">Saison</a>
                  <a href = "beers#Kolsch">Kolsch</a>
              </div>
            </div>
          <Link to = "/forums" style = {{color: 'black', position: 'absolute', left:245}}>Forums</Link>
          <a href = {url} style = {{color: 'black', position: 'absolute', left:330}}>Beagles and 12s</a>
        </div>
        <div class = "logo-bg">
          <img src = {logo} class = "logo" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">{symbol} Welcome {symbol}</div>
          <div class = "inner-bg"><p> INFO ON WHERE IT ALL STARTED, INSPIRATION FOR THE
            WEBSITE WITHOUT EXPLICITLY SAYING THAT, THE PURPOSE OF THE WEBSITE, AND BEAGLES
            AND 12’S. HOW THAT STARTED AND HOW IM GOING TO INTEGRATE IT INTO THE SITE.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">{symbol} Get Started {symbol}</div>
          <div class = "grid-container">
            <header><p>Header</p></header>
            <learn><p>Learn</p></learn>
            <beers><p>Beers</p></beers>
            <forums><p>forums</p></forums>
          </div>
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">{symbol} Beagles and 12s {symbol}</div>
          <div class = "inner-bg"><p> INFO ON BEAGLES AND 12S. HOW AND WHY IT STARTED.
            GIVE CREDIT WHERE ITS DUE TO GILLY. INTRODUCE A LINK TO A SHOPPING SECTION WHERE USERS
            CAN BUY MERCH.</p></div>
          <img src = {beagles12s} class = "crop-pic" />
        </div>
      </body>
    </html>
  );
};

export default Homepage;
