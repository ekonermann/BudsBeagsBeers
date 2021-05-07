import React from 'react';
import { Link } from 'react-router-dom';
import "./Style/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './Images/Logo.png'
import earlyBrew from './Images/Early  Brew.jpg';
import yuengling from './Images/yuengling.jpeg';

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
          <button id = "login-signup">Login/Sign-Up</button>
        </div>
        <div class="navbar">
          <Link to = "/" style = {{color: 'black', position: 'absolute', left:20}}>Home</Link>
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
          <img src = {logo} alt = "Logo" class = "logo" />
        </div>
        <div class = "welcome-bg" style = {{height: 685}}>
          <div class = "page-title">{symbol} Background {symbol}</div>
            <div class = "inner-bg" style = {{height: 565}}><p style = {{marginTop: 10, paddingRight: 10}}>&emsp;Beer brewing has been an integral part of humanity for centuries. It is believed that beer was invented 12,000 years ago around the time agriculture started. As hunter-gatherers settled, they stumbled across the fermentation process for beer. It's no surprise that people were able to quickly figure out how to brew this tremendous beverage. Most likely, beer first began in Mesopotamia where civilizations first started. There was evidence uncovered of malted barley scraps and beer residue. Over time, beer has made it to all parts of the world like it is today. Commercial brewing arrived in North America in 1632. However, beer was not mass-produced and consumed until after the Civil War. Yuengling, based in Pottsville, Pennsylvania is the oldest beer brewing company in America. It was established in 1829.</p></div>
            <img src = {earlyBrew} alt = "Early Brew" class = "crop-pic"  style = {{height: 277.5, marginTop: -30}}/>
            <img src = {yuengling} alt = "Yuengling" class = "crop-pic"  style = {{height: 335, marginTop: 260}}/>
          </div>
        <div class = "welcome-bg" style = {{height: 730}}>
          <div class = "page-title">{symbol} What You Will Need {symbol}</div>
          <div class = "inner-bg" style = {{height: 610}}><p style = {{marginTop: 10, paddingRight: 10}}>&emsp;There are several essential pieces of equipment that you need in order to brew your own beer at home. You're going to need a brew pot, fermenter, a heat source, sanitizer, siphon, an airlock/bung, and a beer brewing recipe kit of your choice. The recipe kit has the ingredients for a certain type of beer that you are looking to brew. There are a lot more pieces of equipment that you can have, but these are the essentials. It is nice to have a secondary fermenter, a strainer, and a thermometer. After fermentation, you're going to want to drink it right? So, bottling or kegging is the next step. To bottle, you'll need sanitized bottles, caps, bottle capper, bottle filler, and a bottling bucket. For kegging, you'll need an entire kegging system. There is a picture below on what a diagram looks like of a kegging system. You can find all of this equipment plus more at the websites listed on the right.</p></div>
            <div id="menu-outer-learn">
              <div class="table">
              <ul id="horizontal-list-learn">
                <li0 style = {{position: "relative", fontSize: 25, left: 65}}>Equipment Sites</li0>
                  <li><a href="https://www.northernbrewer.com/products/deluxe-brewing-starter-kit">Northern Brewer</a></li>
                  <li><a href="https://www.midwestsupplies.com/collections/homebrewing-equipment">Midwest Supplies</a></li>
                  <li><a href="https://www.homebrewing.org/Brewing-Equipment_c_133.html">Homebrewing.org</a></li>
                  <li><a href="https://homebrewsupply.com/brewing-equipment/">Homebrew Supply</a></li>
                  <li><a href="https://craftabrew.com/collections/home-beer-brewing-kit">Craft-A-Brew</a></li>
                  <li><a href="https://www.morebeer.com/category/home-brewing-kits.html?gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRgwmZkQT1KX17XB0tMKtfEmZeA_hmxMHC9K-Nyb0ZA3qDC3UhBcziEaAtb4EALw_wcB">More Beer!</a></li>
                  <li><a href="https://www.kegconnection.com/homebrew-keg-kits/">Keg Connection</a></li>
                  <li><a href="https://www.amazon.com/Bottling-Kit/s?k=Bottling+Kit">Amazon</a></li>
                  <li><a href="https://www.mrbeer.com/kits">Mr. Beer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Learn;
