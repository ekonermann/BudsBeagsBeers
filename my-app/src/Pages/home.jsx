import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";

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
          <Link to = "/home">Home</Link>
          <Link to = "/learn">Learn</Link>
          <div class="dropdown">
            <button class="dropbtn">Beer
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href = "beers.html#Porter">Porter</a>
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
          <Link to = "/forums">Forums</Link>
          <Link to = "https://sites.google.com/view/beaglesand12s/home">Beagles and 12s</Link>
          <Link to = "/gallery">Gallery</Link>
        </div>
        <div class = "logo-bg">
          <img src = "logo.png" class = "logo" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">&#9672 Welcome &#9672</div>
          <div class = "inner-bg"><p> INFO ON WHERE IT ALL STARTED, INSPIRATION FOR THE
            WEBSITE WITHOUT EXPLICITLY SAYING THAT, THE PURPOSE OF THE WEBSITE, AND BEAGLES
            AND 12’S. HOW THAT STARTED AND HOW IM GOING TO INTEGRATE IT INTO THE SITE.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">&#9672 Get Started &#9672</div>
          <div class = "grid-container">
            <header><p>Header</p></header>
            <learn><p>Learn</p></learn>
            <beers><p>Beers</p></beers>
            <forums><p>forums</p></forums>
          </div>
        </div>
        <div class = "welcome-bg">
          <div class = "page-title">&#9672 Beagles and 12s &#9672</div>
          <div class = "inner-bg"><p> INFO ON BEAGLES AND 12S. HOW AND WHY IT STARTED.
            GIVE CREDIT WHERE ITS DUE TO GILLY. INTRODUCE A LINK TO A SHOPPING SECTION WHERE USERS
            CAN BUY MERCH.</p></div>
          <img src = "beagles12s.jpg" class = "crop-pic" />
        </div>
      </body>
    </html>
  );
};

export default Homepage;