import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Body from "../../components/body/Body"
import Destrepeat from "../../components/repeatdestiny/Destrepeat"
import Headrepeat from "../../components/headrepeat/Headrepeat"
import Smallrepeat from "../../components/smallrepeatdest/Smallrepeat"
import Inspiration from "../../components/inspirationsection/Inspiration"
import Inspirationright from "../../components/inspirationright/Inspirationright"
import Explore from "../../components/exploreindia/Explore"
import Property from "../../components/property/Property"
import Bodyicon from "../../components/bodyicon/Bodyicon"
import Uproperties from "../../components/uniqueproperties/Uproperties"
import Destination from "../../components/destinations/Destination"
import Selectdest from "../../components/selectdest/Selectdest"
import Savetime from "../../components/savetime/Savetime"
import Propertylist from "../../components/propertylist/Propertylist"
import Version from "../../components/version/Version"
import Footer from "../../components/footer/Footer"
import Copyright from "../../components/copyright/Copyright"
import Footerimage from "../../components/footerimage/Footerimage"


import { faBicycle, faCity, faHeart, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'

//images
import imgsrc1 from "../../pictures/bengalore.jpg"
import imgSrc2 from "../../pictures/kolkata.jpg"
import imgSrc3 from "../../pictures/kashmir.png"
import imgSrc4 from "../../pictures/delhi.jpg"
import imgSrc5 from "../../pictures/mumbai.jpg"
import imgSrc6 from "../../pictures/chennai.jpeg"
import imgSrc7 from "../../pictures/agoda.png"
import imgSrc8 from "../../pictures/booking.png"
import imgSrc9 from "../../pictures/kayank.png"
import imgSrc10 from "../../pictures/opentable.png"
import imgSrc11 from "../../pictures/priceline.png"
import imgSrc12 from "../../pictures/rentalcar.png"


const home = () => {
  return (
    <div>
      <div className="chatopadhyay">
        <Navbar/>
        <Header/>
      </div>
      <div className="test">
      <Body/>
      <Headrepeat heading="Trending destinations" subheading="Most popular choices for travellers from India"/>
      <div className="horizontal">
      <Destrepeat location="Bengaluru" imgSrc={imgsrc1}/>
      <Destrepeat location="Kolkata" imgSrc={imgSrc2}/>
      </div>
      <div className="smallhorizontal">
      <Smallrepeat location="Kashmir" imgSrc={imgSrc3}/>
      <Smallrepeat location="Delhi" imgSrc={imgSrc4}/>
      <Smallrepeat location="Mumbai" imgSrc={imgSrc5}/>
      </div>
      <Headrepeat heading="Get inspiration for your next trip" />
      <div className="inspirationsection">
        <Inspiration/>
        <div className="inspirationright">
        <Inspirationright heading="6 incredeble bangkok rooftof bars"  subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad esse aliquid dolore! Amet, temporibus." imgSrc={imgsrc1}/>
        <Inspirationright heading="6 incredeble bangkok rooftof bars"  subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad esse aliquid dolore! Amet, temporibus." imgSrc={imgSrc5}/>
        </div>
      </div>
      <Headrepeat heading="Explore India" subheading="These popular destinations have a lot to offer" />
      <div className="explore">
      <Explore location="Delhi" quantity="2,252 Properties" imgSrc={imgSrc4}/>
      <Explore location="Kashmir" quantity="2,252 Properties" imgSrc={imgSrc3}/>
      <Explore location="Mumbai" quantity="2,252 Properties" imgSrc={imgSrc5}/>
      <Explore location="Chennai" quantity="2,252 Properties" imgSrc={imgSrc6}/>
      <Explore location="Bengalore" quantity="2,252 Properties" imgSrc={imgsrc1}/>
      </div>
      <Headrepeat heading="Browse by property type" />
      <div className="explore">
      <Property property="Appartment" imgSrc={imgSrc2}/>
      <Property property="Appartment" imgSrc={imgSrc3}/>
      <Property property="Appartment" imgSrc={imgSrc4}/>
      <Property property="Appartment" imgSrc={imgSrc5}/>
      </div>
      <Headrepeat heading="Quick and easy trip planner" subheading="Pick a vibe and explore the top destinations in India" />
      <div className="explore">
      <Bodyicon icon={faCity} plan="City"/>
      <Bodyicon icon={faBicycle} plan="Outdoor"/>
      <Bodyicon icon={faHeart} plan="Romance"/>
      <Bodyicon icon={faUmbrellaBeach} plan="Beach"/>
      </div>
      <div className="explore">
      <Explore location="Delhi" quantity="2,252 Properties" imgSrc={imgSrc4}/>
      <Explore location="Kashmir" quantity="2,252 Properties" imgSrc={imgSrc3}/>
      <Explore location="Mumbai" quantity="2,252 Properties" imgSrc={imgSrc5}/>
      <Explore location="Chennai" quantity="2,252 Properties" imgSrc={imgSrc6}/>
      <Explore location="Bengalore" quantity="2,252 Properties" imgSrc={imgsrc1}/>
      </div>
      <Headrepeat heading="Stay at our top unique properties" subheading="From castles and villas to boats and igloos, we've got it all"  />
      <div className="explore">
      <Uproperties location="harbour View" sublocation="Germany" ratings="8.6" reviews="Fabulous. 290 reviews" imgSrc={imgSrc2}/>     
      <Uproperties location="harbour View" sublocation="Germany" ratings="8.6" reviews="Fabulous. 290 reviews" imgSrc={imgsrc1}/>     
      <Uproperties location="harbour View" sublocation="Germany" ratings="8.6" reviews="Fabulous. 290 reviews" imgSrc={imgSrc5}/>     
      <Uproperties location="harbour View" sublocation="Germany" ratings="8.6" reviews="Fabulous. 290 reviews" imgSrc={imgSrc6}/>
      </div>
      <Headrepeat heading="Destinations we love" />
      <Selectdest/>
      <div className="dest-row">
      <div className="dest-column">
      <Destination quantity="1,433 properties" destination="Mykons"/>
      <Destination quantity="89 properties" destination="jersey"/>
      <Destination quantity="61 properties" destination="Guernsey"/>
      <Destination quantity="113 properties" destination="Ras Al Khaimish"/>
      </div>

      <div className="dest-column">
      <Destination quantity="1,433 properties" destination="Mykons"/>
      <Destination quantity="89 properties" destination="jersey"/>
      <Destination quantity="61 properties" destination="Guernsey"/>
      <Destination quantity="113 properties" destination="Ras Al Khaimish"/>
      </div>
      <div className="dest-column">
      <Destination quantity="1,433 properties" destination="Mykons"/>
      <Destination quantity="89 properties" destination="jersey"/>
      <Destination quantity="61 properties" destination="Guernsey"/>
      <Destination quantity="113 properties" destination="Ras Al Khaimish"/>
      </div>
      <div className="dest-column">
      <Destination quantity="1,433 properties" destination="Mykons"/>
      <Destination quantity="89 properties" destination="jersey"/>
      <Destination quantity="61 properties" destination="Guernsey"/>
      <Destination quantity="113 properties" destination="Ras Al Khaimish"/>
      </div>
      <div className="dest-column">
      <Destination quantity="1,433 properties" destination="Mykons"/>
      <Destination quantity="89 properties" destination="jersey"/>
      <Destination quantity="61 properties" destination="Guernsey"/>
    
      </div>
      

      </div>  

      </div>  
      <Savetime/>
      <Propertylist/>
      <Version/>
      <div className="test">
        <div className="footer-row">
          <div className="footer-column">
            <Footer footeritem="Countries"/>
            <Footer footeritem="Regions"/>
            <Footer footeritem="Cities"/>
            <Footer footeritem="Districts"/>
            <Footer footeritem="Airport"/>
            <Footer footeritem="Hotels"/>
            <Footer footeritem="Places of interest"/>
          </div>
          <div className="footer-column">
            <Footer footeritem="Home"/>
            <Footer footeritem="Appartment"/>
            <Footer footeritem="Resort"/>
            <Footer footeritem="Villas"/>
            <Footer footeritem="Hostels"/>
            <Footer footeritem="B&Bs"/>
            <Footer footeritem="Guest House"/>
          </div> 
          <div className="footer-column">
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Booking.com for Travel Agents"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
          </div> 
          <div className="footer-column">
            <Footer footeritem="Countries"/>
            <Footer footeritem="Flight finder"/>
            <Footer footeritem="Restaurant reservations"/>
            <Footer footeritem="Booking.com for Travel Agents"/>
          </div> 
          <div className="footer-column">
            <Footer footeritem="Coronavirus (COVID-19) FAQs"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Countries"/>
            <Footer footeritem="Flight finder"/>
            <Footer footeritem="Restaurant reservations"/>
            <Footer footeritem="Booking.com for Travel Agents"/>
          </div> 
        
        </div>
        <Copyright/>
        <div className="footerimages">
        <Footerimage imgSrc={imgSrc7}/>
        <Footerimage imgSrc={imgSrc8}/>
        <Footerimage imgSrc={imgSrc9}/>
        <Footerimage imgSrc={imgSrc10}/>
        <Footerimage imgSrc={imgSrc11}/>
        <Footerimage imgSrc={imgSrc12}/>

        </div>
      </div>
    </div>
  )
}

export default home
