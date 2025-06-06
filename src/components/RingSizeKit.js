import React from 'react';
import sizingKitImg from "../assets/SizingKit1.avif";
import "./RingSizeKit.css";
import { useProduct } from '../context/ProductContext.js';

const RingSizeKit = () => {
  const { hasKit, setHasKit, selectedSize, setSelectedSize } = useProduct();

  const sizes = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="ring-size-kit">
      <p className="ring-size-kit-title">Size. <span className="subtitle">Use the sizing kit to get it right the first time.</span></p>
      <div className={`sizing-kit-box ${selectedSize === null ? "selected" : ""}`}>
        <div className="sizing-kit-content"
          onClick={() => {
            setHasKit(true);
            setSelectedSize(null);
          }}>
          <img src={sizingKitImg} alt="Sizing Kit" className="kit-img" />
          <div className="kit-details">
            <strong>Sizing Kit</strong>
            <p>Choose the right size with the ring samples, ensuring a perfect fit for the best data accuracy.</p>
            <ul>
              <li>✔ Perfect ring fit—no guesswork</li>
              <li>✔ Yours to keep and share—no returns required</li>
              <li>✔ Eco-friendly materials—better for you and the planet</li>
            </ul>
          </div>
          <div className="kit-price">FREE</div>
        </div>
      </div>


      <button className="toggle-btn" onClick={() => setHasKit((prev) => !prev)}>
        {hasKit ? "I want the sizing kit ▴" : "I have a ring sizing kit ▾"}
      </button>


      {hasKit && (
        <div className="kit-known-section">
          <p className="dispatch-info">
            📦 Dispatched by: <strong>Tomorrow, Jun 6</strong> (after size selection)
          </p>
          <p className="size-tip">
            Not a 100% sure? Go for the sizing kit. Nailing the fit the first time helps you and the Earth.
          </p>
          <div className="size-grid">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-box ${selectedSize === size ? "selected" : ""}`}
                onClick={() => {
                  setSelectedSize(size);
                  // setHasKit();
                }}

              >
                {size}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RingSizeKit