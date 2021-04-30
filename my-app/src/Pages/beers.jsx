import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";

const Beers = () => {
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
                <a href = "#Porter">Porter</a>
                <a href = "#Stout">Stout</a>
                <a href = "#IPA">IPA</a>
                <a href = "#Pale Ale">Pale Ale</a>
                <a href = "#Brown Ale">Brown Ale</a>
                <a href = "#Pilsner">Pilsner</a>
                <a href = "#Lager">Lager</a>
                <a href = "#Wheat">Wheat</a>
                <a href = "#Sour">Sour</a>
                <a href = "#Belgian">Belgian</a>
                <a href = "#Amber">Amber</a>
                <a href = "#Hefeweizen">Hefeweizen</a>
                <a href = "#Saison">Saison</a>
                <a href = "#Kolsch">Kolsch</a>
            </div>
          </div>
          <Link to = "/forums">Forums</Link>
          <Link to = "https://sites.google.com/view/beaglesand12s/home">Beagles and 12s</Link>
          <Link to = "/gallery">Gallery</Link>
        </div>
        <div class = "logo-bg">
          <img src = "logo.png" class = "logo" />
        </div>
        <div class = "beers-bg">
          <div class = "page-title">&#9672 Choose Your Type &#9672</div>
          <div class = "inner-beer inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <div id="menu-outer">
            <div class="table">
            <ul id="horizontal-list">
                <li><a href="#Porter">Porter</a></li>
                <li><a href="#Stout">Stout</a></li>
                <li><a href="#IPA">IPA</a></li>
                <li><a href="#Pale Ale">Pale Ale</a></li>
                <li><a href="#Brown Ale">Brown Ale</a></li>
                <li><a href="#Pilsner">Pilsner</a></li>
                <li><a href="#Lager">Lager</a></li>
                <li><a href="#Wheat">Wheat</a></li>
                <li><a href="#Sour">Sour</a></li>
                <li><a href="#Belgian">Belgian</a></li>
                <li><a href="#Amber">Amber</a></li>
                <li><a href="#Hefeweizen">Hefeweizen</a></li>
                <li><a href="#Saison">Saison</a></li>
                <li><a href="#Kolsch">Kolsch</a></li>
            </ul>
            </div>
          </div>
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Porter">&#9672 Porter &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
            <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Stout">&#9672 Stout &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "IPA">&#9672 IPA &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Pale Ale">&#9672 Pale Ale &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Brown Ale">&#9672 Brown Ale &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Pilsner">&#9672 Pilsner &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Lager">&#9672 Lager &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Wheat">&#9672 Wheat &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Sour">&#9672 Sour &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Belgian">&#9672 Belgian &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Amber">&#9672 Amber &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Hefeweizen">&#9672 Hefeweizen &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Saison">&#9672 Saison &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Kolsch">&#9672 Kolsch &#9672</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = "Welcome Pic.jpg" class = "crop-pic" />
        </div>
      </body>
    </html>
  );
};

export default Beers;
