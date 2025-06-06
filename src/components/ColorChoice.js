import React from 'react'

import "./ColorChoice.css"

import asterBlack from "../assets/big-images/Aster-Black.png"
import bionicGold from "../assets/big-images/Bionic-Gold.avif"
import matteGrey from "../assets/big-images/Matte-Grey.avif"
import rawTitanium from "../assets/big-images/Raw-Titanium.avif"
import spaceSilver from "../assets/big-images/Space-Silver.avif"

import { useProduct } from '../context/ProductContext.js';

const colorData = [
  { name: 'Aster Black', image: asterBlack },
  { name: 'Bionic Gold', image: bionicGold },
  { name: 'Matte Grey', image: matteGrey },
  { name: 'Raw Titanium', image: rawTitanium },
  { name: 'Space Silver', image: spaceSilver},
];

const ColorChoice = () => {
  // const [selectedColor, setSelectedColor] = useState('Aster Black');
  const { selectedColor, setSelectedColor } = useProduct();

  return (
    <div className="color-choice">
      <p className="color-choice-title">Color. <span className="subtitle">Choose a finish that suits your style.</span></p>
    <div className="color-cards">
        {colorData.map(({ name, image }) => (
          <div
            key={name}
            className={`color-card ${selectedColor === name ? 'selected' : ''}`}
            onClick={() => setSelectedColor(name)}
          >
            <img src={image} alt={name} className="ring-image" />
            <div className="color-label">{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorChoice