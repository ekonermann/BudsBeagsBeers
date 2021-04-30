import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './Logo.png'
import welcomePic from './Welcome Pic.JPG';

const symbol = "\u25c8";
const url = "https://sites.google.com/view/beaglesand12s/home";

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
          <Link to = "/home" style = {{color: 'black', position: 'absolute', left:20}}>Home</Link>
          <Link to = "/learn" style = {{color: 'black', position: 'absolute', left:100}}>Learn</Link>
          <div class="dropdown">
            <button class="dropbtn">Beer</button>
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
          <Link to = "/forums" style = {{color: 'black', position: 'absolute', left:245}}>Forums</Link>
          <a href = {url} style = {{color: 'black', position: 'absolute', left:330}}>Beagles and 12s</a>
        </div>
        <div class = "logo-bg">
          <img src = {logo} class = "logo" />
        </div>
        <div class = "beers-bg">
          <div class = "page-title">{symbol} Choose Your Type {symbol}</div>
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
          <div class = "page-title"><a id = "Porter">{symbol} Porter {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
            <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Stout">{symbol} Stout {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "IPA">{symbol} IPA {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Pale Ale">{symbol} Pale Ale {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Brown Ale">{symbol} Brown Ale {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Pilsner">{symbol} Pilsner {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Lager">{symbol} Lager {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Wheat">{symbol} Wheat {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Sour">{symbol} Sour {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Belgian">{symbol} Belgian {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Amber">{symbol} Amber {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Hefeweizen">{symbol} Hefeweizen {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Saison">{symbol} Saison {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Kolsch">{symbol} Kolsch {symbol}</a></div>
          <div class = "inner-bg"><p> TELL USERS TO CHOOSE A BEER BELOW AND
            THAT THEY WILL GET AN OVERVIEW OF WHAT KIND OF BEER IT IS, AND
            EXTENSIVE INFO ON IT.</p></div>
          <img src = {welcomePic} class = "crop-pic" />
        </div>
      </body>
    </html>
  );
};

export default Beers;
