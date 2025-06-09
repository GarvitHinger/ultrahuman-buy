import React from 'react'
import { useProduct } from '../context/ProductContext.js'
import "./AddToCart.css"
const AddToCart = () => {
  const { selectedColor,
    hasKit,
    selectedSize,
    charger,
    tradeOption,
    deduction,
    selectedRing,
    engraving,
    engravingText,
    powerPlug,
    protection } = useProduct();
  
   let finalPrice = 28499;
  let items = [`Ring AIR (${selectedColor})`];

  if (selectedSize === null) {
    items.push("Sizing kit included");
  } else {
    items.push(`Size: ${selectedSize}`);
  }

  if (engraving === 'add') {
    finalPrice += 3299;
    items.push(`Engraving: ${engravingText || "Yes"} (+₹3,299)`);
  }

  if (charger === 'voyager') {
    finalPrice += 3799;
    items.push("Voyager Ring Charger (+₹3,799)");
  }

  if (powerPlug === '2year') {
    finalPrice += 3988;
    items.push("Cardio Adaptibility - 2 years (+₹3,988)");
  } else if (powerPlug === '1year') {
    finalPrice += 2499;
    items.push("Cardio Adaptibility - 1 year (+₹2,499)");
  }

  if (protection === '2year') {
    finalPrice += 4400;
    items.push("UltrahumanX - 2 years (+₹4,400)");
  } else if (protection === '1year') {
    finalPrice += 2988;
    items.push("UltrahumanX - 1 year (+₹2,988)");
  }

  if (tradeOption === 'trade' && deduction > 0) {
    finalPrice -= deduction;
    items.push(`Trade-in credit: -₹${deduction.toLocaleString()}`);
  }

  const handleAddToCart = () => {
    const summary = items.join('\n') + `\n\nTotal: ₹${finalPrice.toLocaleString()}`;
    alert("Your Order Summary:\n\n" + summary);
  };
  
  return (
    <div className="cart">
      <p className="card-title">Almost there. Here’s your order summary.</p>
      <p>Ultrahuman Ring AIR {engraving === "add" && "(with engraving)"} <br />
        {selectedColor}, {selectedSize === null ? "Sizing kit included" : selectedSize + " size"}
      </p>
      <div className="price-breakdown">
        <div>
          <p>Ring AIR {tradeOption === "trade" && "(before trade in)"}</p>
          <p>₹28,499</p>
        </div>

        {protection !== 'none' && (
          protection === '2year' ? (
            <div>
              <p>UltrahumanX - 2 years</p>
              <p>+₹4,400</p>
            </div>
          ) : (
              <div>
                <p>UltrahumanX - 1 years</p>
                <p>+₹2,988</p>
              </div>
          )
        )}

        {powerPlug !== 'none' && (
          powerPlug === '2year' ? (
            <div>
              <p>Cardio Adaptibility</p>
              <p>+₹3,988</p>
            </div>
          ) : (
              <div>
                <p>Cardio Adaptibility</p>
                <p>+₹2,499</p>
              </div>
          )
        )}
        {charger === "voyager" && 
          (<div>
          <p>Voyager Ring Charger</p>
          <p>+₹3,799</p>
          </div>)
        } 
        {tradeOption === "trade" && 
          (<div>
          <p>Trade in credit</p>
          <p>{"-₹" + deduction.toLocaleString()}</p>
          </div>)
          
        }
      </div>
      <hr />
      <div className="total-due">
        <p>Total due today</p>
        <p>{"₹" +finalPrice.toLocaleString()}</p>
      </div>
      <p>Dispatched by : Tomorrow, Jun 7 (after size selection)</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default AddToCart