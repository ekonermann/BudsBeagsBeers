import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";

const Gallery = () => {
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
      </body>
    </html>
  );
};

export default Gallery;
