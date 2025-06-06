import React from 'react'
import voyagerImg from "../assets/VoyagerCharger.avif"
import "./Charger.css"
import { useProduct } from '../context/ProductContext.js';
const Charger = () => {
  // const [selected, setSelected] = useState("regular");
  const {charger,setCharger} = useProduct()

  return (
    <div className="charger">
      <p className="charger-title">
        Charger. <span className="subtitle">Power up and never miss a beat</span>.
      </p>
      <div className={`charger-card voyager ${charger === 'voyager' ? 'selected' : ''}`}
        onClick={() => setCharger('voyager')}>
        <div className="voyager-left">
          <p className="label">NEW</p>
          <img src={voyagerImg} alt="voyagerImg" className="voyager-img" />
        </div>
        <div className="voyager-right">
          <p className="voyager-price">Get the Voyager Charger at ₹3799</p>
          <p className="voyager-desc">
            A compact, powerful, and lightweight charger, engineered for adventurer in you.
          </p>
        </div>

      </div>
      <div className={`charger-card regular ${charger === 'regular' ? 'selected' : ''}`}
        onClick={() => setCharger('regular')}>
        <p className="regular-desc">Free standard charger</p>
      </div>
    </div>
  )
}

export default Charger