// import React,{useState} from 'react';
import "./Protection.css"
import { useProduct } from '../context/ProductContext.js';

const Protection = () => {
  // const [selected, setSelected] = useState("none")
  const { protection, setProtection } = useProduct();
  return (
    <div className="protection">
      <p className="protection-heading">UltrahumanX Coverage. <span className="subtitle">Protect your new Ring</span> </p>
      
      <div className={`coverage ${protection === "1year" ? "selected" : ""}`} onClick={() => setProtection("1year")}>
    <div className="coverage-header">
      <p className="duration">1 Year Coverage</p>
      <p className="price">₹2,988</p>
    </div>
    <hr className="divider" />
    <div className="coverage-benefits">
      <p>✔ Extra value on trade-in</p>
      <p>✔ Accidental damage protection</p>
      <p>✔ Priority care</p>
    </div>
  </div>
      <div className={`coverage ${protection === "2year" ? "selected" : ""}`} onClick={() => setProtection("2year")}>
    <div className="badge">POPULAR</div>
    <div className="coverage-header">
      <div>
        <p className="duration">2 Year Coverage</p>
        <span className="save-tag">Save 17%</span>
      </div>
      <div>
        <p className="price">₹4,440</p>
        <p className="sub-price">(That’s just ₹2,220/year)</p>
      </div>
    </div>
    <hr className="divider" />
    <div className="coverage-benefits">
      <p>✔ Includes all 1 Year Coverage benefits</p>
      <p>✔ Theft and loss protection</p>
      <p>✔ Weight loss insurance</p>
    </div>
  </div>
      <div className={`coverage ${protection === "none" ? "selected" : ""}`} onClick={() => setProtection("none")}>
    <p className="duration">No, I don’t want to protect my new Ring AIR</p>
  </div>
      
    </div>
  )
}

export default Protection