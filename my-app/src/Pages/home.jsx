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
        <div class = "welcome-bg" style = {{height: 475}}>
          <div class = "page-title">{symbol} Welcome {symbol}</div>
          <div class = "inner-bg" style = {{height: 350}}><p style = {{fontSize: 45}}>"He was a wise man who invented beer"</p>
          <p2 style = {{position: "absolute",fontSize: 22, marginTop: -25, marginLeft: "2.5rem"}}>-Plato</p2>
          <p3 style = {{position: "absolute", marginTop: 10}}>&emsp;Whether you are looking to browse various types of beers,
          learn how to brew beer, or educate yourself, you are in the right place. There is no better way to enjoy friends and
          family than a to have a cold beer with them. The beer brewing community is perfect for the beginner to advanced beer connoisseurs.
          </p3></div>
          <img src = {welcomePic} class = "crop-pic-welcome" />
        </div>
        <div class = "welcome-bg" style = {{height: 580}}>
          <div class = "page-title">{symbol} Get Started {symbol}</div>
          <div class = "grid-container">
            <header style = {{height: 100}}><p style = {{textAlign: "center", verticalAlign: "center", marginTop: "-.2em"}}>Check out these sections below to get started today on your beer adventures!</p></header>
            <learn><p style = {{textAlign: "center", marginTop: -14, textDecoration: "underline"}}>Learn</p><p2>&nbsp;Check out the learning page to get educated on beer brewing and helpful equipment websites to get started.</p2></learn>
            <beers><p style = {{textAlign: "center", marginTop: -14, textDecoration: "underline"}}>Beers</p><p2>&nbsp;Browse the beers page to get insightful guides and resources on various types of beer.</p2></beers>
            <forums><p style = {{textAlign: "center", textDecoration: "underline"}}>Forums</p>
            <p2>&nbsp;Visit the forums page to browse others or
             post to the community about your own beer brew.</p2> </forums>
          </div>
        </div>
        <div class = "welcome-bg" style = {{height: 480}}>
          <div class = "page-title">{symbol} Beagles and 12s {symbol}</div>
          <div class = "inner-bg" style = {{height: 355}}><p style = {{marginTop: 10, paddingRight: 10}}>&emsp;Every type of hunting needs its brand. Gilly Simpson, creator of Beagles and 12s, put a brand in motion in March of 2019 for rabbit hunters. There's no better way to enjoy a long day of hunting than to have a beer. Gilly's brand was an inspiraion for the name of this website. His father and mine brewed beer together for years, and they both enjoy rabbit hunting during the winter season. Visit the Beagles and 12s website if you are interested in rabbit hunting as well as good beer!</p></div>
          <img src = {beagles12s} class = "crop-pic" style= {{height: 355}} />
        </div>
      </body>
    </html>
  );
};

export default Homepage;
