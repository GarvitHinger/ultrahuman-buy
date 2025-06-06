// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import ImageSection from './components/ImageSection.js'
import Description from './components/Description.js'
import ColorChoice from './components/ColorChoice.js'
import RingSizeKit from './components/RingSizeKit.js'
import Charger from './components/Charger.js'
import Trade from './components/Trade.js'
import Engraving from './components/Engraving.js'
import PowerPlug from './components/PowerPlug.js'
import Protection from './components/Protection.js'
import AddToCart from './components/AddToCart.js'
import StickyBar from './components/StickyBar.js'



function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="content">
        <div className="left-part">
          <ImageSection />
        </div>
        <div className="right-part">
          <Description />
          <hr className="app-line" />
          <ColorChoice />
          <hr className="app-line"/>
          <RingSizeKit />
          <hr className="app-line"/>
          <Charger />
          <hr className="app-line"/>
          <Trade />
          <hr className="app-line"/>
          <Engraving />
          <hr className="app-line"/>
          <PowerPlug />
          <hr className="app-line"/>
          <Protection />
          <hr className="app-line"/>
          <AddToCart />
          
        </div>
      </div>
      {/* <StickyBar /> */}
    </div>
  );
}

export default App;
