import React from 'react'
import asterBlack from "../assets/big-images/Aster-Black.png"
import bionicGold from "../assets/big-images/Bionic-Gold.avif"
import matteGrey from "../assets/big-images/Matte-Grey.avif"
import rawTitanium from "../assets/big-images/Raw-Titanium.avif"
import spaceSilver from "../assets/big-images/Space-Silver.avif"
import { useProduct } from '../context/ProductContext.js'
import "./ImageSection.css"
const ImageSection = () => {
  const { selectedColor } = useProduct()
  const colorToImage = {
    "Aster Black": asterBlack,
    "Bionic Gold": bionicGold,
    "Matte Grey": matteGrey,
    "Raw Titanium": rawTitanium,
    "Space Silver": spaceSilver,
  };
  const image =  colorToImage[selectedColor] || asterBlack;
  return (
    <div className="image-section">
      <img className="image"src={image} alt={`${image} ring`}/>
    </div>
  )
}

export default ImageSection