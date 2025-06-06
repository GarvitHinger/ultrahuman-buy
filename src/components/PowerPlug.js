// import React, { useState } from 'react'

import "./PowerPlug.css"
import { useProduct } from '../context/ProductContext.js';
const PowerPlug = () => {

  // const [selected, setSelected] = useState("");
  const { powerPlug, setPowerPlug } = useProduct();

  const options = [
    {
      id: "1year",
      title: "Cardio Adaptability - 1 Year",
      price: "₹2,499",
      recommended: false,
      discount: null,
    },
    {
      id: "2year",
      title: "Cardio Adaptability - 2 Year",
      price: "₹3,998",
      recommended: true,
      discount: "Save 20%",
    },
    {
      id: "none",
      title: "No, I don’t want proactive heart monitoring",
      price: null,
      recommended: false,
    },
  ];

  return (
    <div className="powerplug">
      <p className="powerplug-title">
        PowerPlug. <span className="subtitle">Protect your heart health.</span>
      </p>
      <p className="description">
        Monitor night time heart trends to evaluate your heart's response to stressors.
      </p>

      <div className="powerplug-options">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`powerplug-card ${powerPlug === opt.id ? "selected" : ""}`}
            onClick={() => setPowerPlug(opt.id)}
          >
            {opt.recommended && <div className="recommended">RECOMMENDED</div>}

            <div className="card-left">
              <p className="card-title">{opt.title}</p>
              {opt.discount && <span className="discount">{opt.discount}</span>}
            </div>

            {opt.price && <div className="price">{opt.price}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};


export default PowerPlug