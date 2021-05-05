import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './Logo.png'
import welcomePic from './Welcome Pic.JPG';
import porterBeer from './PorterBeer.jpeg';
import guinnessBeer from './guinness.jpeg';
import ipa from './IPA.jpeg';
import paleAle from './Pale Ale.jpeg';
import brownAle from './Brown Ale.jpeg';
import pilsner from './Pilsner.jpeg';
import lager from './Lagers.jpeg';
import sourBeer from './Sour Beer.jpeg';
import belgianBeer from './Belgian Beer.jpeg';
import belgianBeer2 from './Belgian Beer.2.jpeg';
import amberAle from './Amber Ale.jpeg';
import hefeweizenBeer from './Hefeweizen.jpeg';
import saisonBeer from './Saison Beer.jpeg';
import kolschBeer from './Kolsch Beer.jpeg';

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
          <div class = "inner-beer inner-bg"><p style = {{marginTop: 10}}>There are endless recipes and variations for different types of beer. Below are 15 different types that you can learn about to decide whether or not it is the beer for you! Be sure to check out the Learn section in order to gain insight on how to brew beer.</p></div>
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
        <div class = "welcome-bg" style = {{height: 770}}>
          <div class = "page-title"><a id = "Porter">{symbol} Porter {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 650}}><p>&emsp;The porter beer was first concocted in the 1700s in London, England. It was a mixture of old, sour beer; new, brown ale; and mild beers. Today, English porters come in two styles: brown and robust. Brown porters are maltier beers that can come in flavors like bittersweet chocolate, caramel, or toffee. Robust porters are more intense because they use roasted and black patent malt. These two porters are the English's versions. Next comes the Baltic porter. This one is very similar to an English porter, but it has much higher ABV content because it has to withstand the journey across the Baltic Sea. Finally, the American porter comes to fruition. This porter was crafted from n inspiration from the English Porter. One type of American Porter is called the Imperial style, which uses smoked malts to one-up the Robust English Porter. The other American Porter style lies along the lines of craft beer, which consists of aggressive hops and malt complexity. </p></div>
            <img src = {porterBeer} class = "crop-pic" style = {{height: 425}}/>
            <div class = "additional-info" style = {{textAlign: "center"}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
            <p2 style = {{fontSize: 15, top: -15}}>English: Samuel Smith’s Taddy Porter, Fuller’s London Porter</p2><br></br>
            <p3 style = {{fontSize: 15, top: -15}}>Baltic: Smuttynose Baltic Porter, Victory Brewing Co. Baltic Thunder</p3><br></br>
            <p4 style = {{fontSize: 15, top: -15}}>American: Rogue Ales Mocha Porter, Great Lakes Brewing Co. Edmund Fitzgerald Porter</p4></div>
        </div>
        <div class = "welcome-bg" style = {{height: 640}}>
          <div class = "page-title"><a id = "Stout">{symbol} Stout {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 520}}><p>&emsp;The Stout beer emerged in Ireland as a "stronger" porter. The main difference betwen the two styles is that the stout has roasted barley. Irish stouts are drier, which means that there is less malty sweetness. Carbonation is very low in this stout as well as most other stouts. Most stouts are quite similar around the world, but there is one type, the Imperial Stout, that is the strongest. It was originally brewed in the 1800s in England for the Russian Imperial Court. This type of stout has a much higher ABV and it is deep, dark, and roasty that may have some twinge of chocolate flavors in the malt. Additionally, there are oatmeal, milk, and oyster stouts. These flavors are added to the mash to create a much different tasting, dark and creamy, Stout. </p></div>
          <img src = {guinnessBeer} class = "crop-pic" style = {{position: "absolute", height: 350, marginTop: -20}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 350}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
          <p2 style = {{fontSize: 15, top: -15}}>Irish: Guinness Draught Brooklyn Irish Dry Stout</p2><br></br>
          <p3 style = {{fontSize: 15, top: -15}}>American: Harpoon Chocolate Stout, Saranac Vanilla Stout</p3><br></br>
          <p4 style = {{fontSize: 15, top: -15}}>Oyster: Flying Dog Pearl Necklace Oyster Stout, Porterhouse Brewing Co. Oyster Stout</p4></div>
        </div>
        <div class = "welcome-bg" style = {{height:810}}>
          <div class = "page-title"><a id = "IPA">{symbol} IPA {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 690}}><p>&emsp;The IPA, known as the Indian Pale Ale, is one of the most beloved craft beers. First introduced in the 1700s in Britain, it was created for the British Empire in the East near India. It is too hot in India to brew beer, so IPAs were created to survive the six-month journey to the British East Empire. What sets it apart from other beers is its hoppiness. This beer has grown to have the most hops out of any other beer. The flavors are endless with IPAs. They can be bitter, floral, earthy, citrusy, piney, bitter, or fruity. Once again, you can add different things to the malt such as rye in order to create new concoctions such as the Rye IPA. There are IPAs all over the world such as the Belgian IPA, English IPA, and American IPA. The America IPA has emerged into two different categories: East Coast (balanced with a stronger malt component) and West Coast (aggressive hops and powerfully bitter). If you like flavorful beer that is strong and hoppy with flexibility in the flavor department, then IPAs are for you.</p></div>
          <img src = {ipa} class = "crop-pic" style = {{height: 465}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 490}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
          <p2 style = {{fontSize: 15, top: -15}}>American: Lagunitas IPA, Voodoo Ranger, Dogfish Head 60 Minute IPA</p2><br></br>
          <p3 style = {{fontSize: 15, top: -15}}>English: Goose Island Beer Co., Harpoon Brewery and Beer Hall</p3><br></br>
          <p4 style = {{fontSize: 15, top: -15}}>Belgian: Galaxy White, Live a Rich Life, De Ranke XX Bitter</p4></div>
        </div>
        <div class = "welcome-bg" style = {{height: 630}}>
          <div class = "page-title"><a id = "Pale Ale">{symbol} Pale Ale {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 510}}><p>&emsp;Pale Ales are one of the most common types of beer in the world today. What distinguishes itself from other beers is that it is moderately hoppy with balancing malt flavors. The biggest key to a Pale Ale is having balance in the malt and hops. There are American Pale Ales and English Pale Ales. American Pale Ales have hops that are dialed down quite a bit. American Pale Ales have citrus, pine, fruit, florals, etc. for the hops. They have varying amounts of malt as well. American Pale Ale was inspired by the English Pale Ale. The English Pale Ale is known for its maltiness and bitterness of the hops. The maltiness tempers the bitter hops, so it is not to be confused with an IPA. The hops give an earthy, floral, or herby notes of flavor.</p></div>
          <img src = {paleAle} class = "crop-pic" style = {{height: 285}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 310}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
          <p2 style = {{fontSize: 18, top: -15}}>American: Sierra Nevada Pale Ale, Stone Pale Ale, Dale’s Pale Ale</p2><br></br><br></br>
          <p3 style = {{fontSize: 18, top: -15}}>English: Fullers ESB, Boddingtons Pub Ale, Bass Pale Ale</p3></div>
        </div>
        <div class = "welcome-bg" style = {{height: 675}}>
          <div class = "page-title"><a id = "Brown Ale">{symbol} Brown Ale {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 555}}><p>&emsp;Brown Ales are similar to Pale Ales, but they are darker. This is because of the choice and treatment of the malts. In general, these beers are typically maltier and less hoppy. Once again, there are American and English Brown Ales. The American Brown Ale was inspired by the English. This beer is typically hoppier than the English Brown Ale. Americans tend to like their hops, but this beer is just hoppy enough to keep it in the Brown Ale category because it isn't nearly as hoppy as an IPA. English Brown Ales are similar, but they are less hoppy and more malty. This means that the beer can be dry or sweet depending on the chosen style and approach to creating it. There are also distinctions similar to the American IPAs. In England, there are Northern (hoppier) and Southern (darker, sweeter, maltier) Brown Ales. </p></div>
          <img src = {brownAle} class = "crop-pic" style = {{height: 330}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 355}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>American: Dogfish Head Indian Brown Ale, Smuttynose Durty Mud Season Hoppy Brown Ale</p2><br></br>
          <p3 style = {{fontSize: 17, top: -15}}>English: Kona Brewing Co. Big Wave Golden Ale, Victory Brewing Co. Summer Love</p3></div>
        </div>
        <div class = "welcome-bg" style = {{height: 675}}>
          <div class = "page-title"><a id = "Pilsner">{symbol} Pilsner {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 555}}><p>&emsp;The Pilsner beer first emerged in Czechoslovakia, and today it is a beer loved all around the globe. The Pilsner style is accredited to Joseph Groll when he combined Bavarian bottom-fermenting lager yeasts, lighter malts, and spicy Saaz hops for the first time in 1842. The beer has a balance of soft malts along with the spicy Saaz hops. The first sip of the beer is very bitter; however, the finish is a clean taste that Pilsner lovers admire. After the Bohemian Pilsner came the German Pilsner. It is more hoppy with the Saaz and German Style Hops. When the Germans came to America, they were able to introduce the German Pilsner, which later became Americanized by becoming the American Imperial Pilsner. It is similar to all pilsners, but it has more aggressive flavors, hops, and alcohol.</p></div>
          <img src = {pilsner} class = "crop-pic" style = {{height: 330}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 355}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
          <p2 style = {{fontSize: 15, top: -15}}>Czech: Pilsner Urquell, Oskar Blues Mama’s Little Yella Pils, Lagunitas PILS</p2><br></br>
          <p3 style = {{fontSize: 15, top: -15}}>German: Bitburger, Jever Pilsener, Victory Prima Pils</p3><br></br>
          <p4 style = {{fontSize: 15, top: -15}}>American: Sam Adams Hallertau Imperial Pilsner, Dogfish Head My Antonia</p4></div>
        </div>
        <div class = "welcome-bg" style = {{height: 455}}>
          <div class = "page-title"><a id = "Lager">{symbol} American Lager {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 335}}><p> Welcome to the world of gas station beers. These are the beers brewed by giant American beer companies. Macro Lagers are light beers that are typically pale due to the use of cereal adjuncts in the malt bill. They are heavily carbonated and served ice cold to people. Adjunct lagers are lagers that are brewed with some amount of corn or rice to lighten up the flavor profile. These beers are similar to macro, but the goal is not fewer calories, but a crispier taste.</p></div>
          <img src = {lager} class = "crop-pic" style = {{height: 200, marginTop: -20}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 195, height: 150}}><p style = {{textDecoration: "underline"}}>Commerical Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>Bud Light, Budweiser, Coors, Coors Light, Miller Lite Pabst Blue Ribbon, Tecate, Modelo</p2></div>
        </div>
        <div class = "welcome-bg" style = {{height: 545}}>
          <div class = "page-title"><a id = "Sour">{symbol} Sour {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 425}}><p>This beer is not your typical type of beer. In fact, it doesn't really even taste like beer. This is the oldest type of beer in history because nearly all beers were at least somewhat sour before pasteurization and sterilization were fully understood. Today, sours have a tart taste and are made with wild bacteria and yeast. The bacteria is what gives it the sour taste, and the yeast adds the earthy quality into it. There are two types of bacteria: lactobacillus, which turns sugar into lactic acid, and pediococcus, which adds acidity. Brettanomyces is the yeast, and it just adds an earthy layer to the beer. There is no definitive type of sour, just styles.</p></div>
          <img src = {sourBeer} class = "crop-pic" style = {{height: 250}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 285, height: 150}}><p style = {{textDecoration: "underline"}}>Styles</p>
          <p2 style = {{fontSize: 17, top: -15}}>American: American Wild Ale, </p2><br></br>
          <p3 style = {{fontSize: 17, top: -15}}>German: Gose, Berliner Weisse</p3><br></br>
          <p4 style = {{fontSize: 17, top: -15}}>Belgian: Flanders, Lambic</p4></div>
        </div>
        <div class = "welcome-bg" style = {{height: 850}}>
          <div class = "page-title"><a id = "Belgian">{symbol} Belgian {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 730}}><p> Belgian beers are typically pale ales. These beers have heavy emphasis on malts and a lot of fruity yeast flavors. Belgian beer has many different sub-groups. One such group would be Belgian Dubbels. These are dark amber-brown beers with a lot of rich, roasted malt flavors. They can be somewhat spicy and with fruity characteristics. Another type would be Tripels. Brewed with triple the typical malts, these are big dense beers. They’re usually golden in color with notes of spice, fruit, and honey, and are often a bit more bitter than typical of Belgian ales to balance out all the malts. Quadrupels were inspired by the Dubbel and Tripel styles, quads are an emerging style in the US. They’re usually deep reddish-brown in color with a robust malty flavor profile and upwards of 10% alcohol by volume. There are also Lambics, which are sours previously mentioned above. Another important type of Belgian beer is the Belgian Dark Ale. These have a relatively strong alcohol and malt presence balanced out by yeast and spice. Finally, there are Saisons, which will be explained in a later section.</p></div>
          <img src = {belgianBeer} class = "crop-pic" style = {{height: 250}}/>
          <img src = {belgianBeer2} class = "crop-pic" style = {{height: 250, marginTop: 270}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 530}}><p style = {{textDecoration: "underline"}}>Commercial Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>Dubel: Ommegang Abbey Ale, Westmalle Trappist</p2><br></br>
          <p3 style = {{fontSize: 17, top: -15}}>Tripel: Unibroue La Fin du Monde, Allagash Curieux Bourbon Barrel-Aged </p3><br></br>
          <p5 style = {{fontSize: 17, top: -15}}>Dark Ale: Chimay Grand Reserve Blue, Trappist Rochefort 8</p5></div>
        </div>
        <div class = "welcome-bg" style = {{height: 495}}>
          <div class = "page-title"><a id = "Amber">{symbol} Amber {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 375}}><p>Amber Ales are a by-product of American Pale Ales that originated in the west coast. Amber beer showcases a medium-high to high malt character with medium to low caramel character derived from the use of roasted crystal malts. The American amber is characterized by American-variety hops, which lend the amber ale notes of citrus, fruit and pine to balance the sweetness of the malt. These beers are often darker than the American Pale Ale cousins and have a red tint (hence the name). The beer has a toastful and toffee flavor due to the malts used in it.</p></div>
          <img src = {amberAle} class = "crop-pic" style = {{height: 200}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 225, height: 160}}><p style = {{textDecoration: "underline"}}>Commercial Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>American Amber Ales: Bell's Amber Ale, Alaskan Autumn Ale, Anderson Valley Boont Amber, St. Rogue Red Ale, and Mendocino Red Tail Ale</p2></div>
        </div>
        <div class = "welcome-bg">
          <div class = "page-title"><a id = "Hefeweizen">{symbol} Hefeweizen {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 470}}><p> Hefeweizen beer originated in Bavaria, Germany. In German, “hefe” refers to the yeast which remains in suspension giving the German beer its cloudy appearance, and “weizen” denotes the use of wheat. This is an unfiltered ale, meaning the brewer’s yeast is left in suspension, making the beer cloudy and slightly white looking. This beer is considered to be a wheat beer, which means that is uses at least 50% wheat in the malt. The aroma of the beer comes from all of the wheat that is used when making this beer. It also contains low to moderate alcohol content. The beer has relatively high carbonation, and it is noted for its low hop bitterness with a very low to medium-low alt sweetness. </p></div>
          <img src = {hefeweizenBeer} class = "crop-pic" style = {{height: 295}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 320, height: 160}}><p style = {{textDecoration: "underline"}}>Commercial Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>German Hefeweizens: Ayinger Brauweisse, Sketchbook Brewing Cumulus, Pinkus Hefe Weizen, Erdinger Weissbier</p2></div>
        </div>
        <div class = "welcome-bg" style = {{height: 545}}>
          <div class = "page-title"><a id = "Saison">{symbol} Saison {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 425}}><p>Also known as "Farmhouse Ales", Saisons are a type of Belgium beer. It originated in Wallonia, Belgium well before refrigeration was available, so it was brewed at the end of the winter so it could last long enough to be thirst quenching in the summer. As mentioned in the Sours, this beer uses the Brettanomyces yeast, but the flavor is much less sour. Saisons are slightly fruity, citrusy, and spicy with some light malt and earthy hop bitterness edging out a dry finish. Spices and herbs may also be added, since variety is the spice of life in Belgian brewing, and Saisons are very much a product of that philosophy.</p></div>
          <img src = {saisonBeer} class = "crop-pic" style = {{height: 250}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 275, height: 160}}><p style = {{textDecoration: "underline"}}>Commercial Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>Saisons: Brasserie Ommegang Hennepin, Brasserie Dupont Saison Dupont, Boulevard Brewing Co. Saison-Brett</p2></div>
        </div>
        <div class = "welcome-bg" style = {{height: 545}}>
          <div class = "page-title"><a id = "Kolsch">{symbol} Kolsch {symbol}</a></div>
          <div class = "inner-bg" style = {{height: 425}}><p>This type of beer originated in Cologne, Germany. Kolsch is a product of comobining both aspects of ale and lager fermentation. It is fermented with ale yeasts, but it is stored cold like lagers. These beers are typically light, delicate malt, delicate hops, and maybe a bit of delicate and/or tart fruitiness, all finishing pretty dry. This beer is best compared to a lighter lager or Pilsner. Today, it has sparked a lot of interest in the United States thanks to the world of craft brewing. There are a lost of American-made Kolsch beers. In fact, the picture on the right features all American Kolsch beers.</p></div>
          <img src = {kolschBeer} class = "crop-pic" style = {{height: 240}}/>
          <div class = "additional-info" style = {{textAlign: "center", marginTop: 275, height: 160}}><p style = {{textDecoration: "underline"}}>Commercial Examples</p>
          <p2 style = {{fontSize: 17, top: -15}}>Kolsch: Reisdorf Kölsch, Sam Adams East-West Kölsch, Harpoon Summer Beer</p2></div>
        </div>
      </body>
    </html>
  );
};

export default Beers;
