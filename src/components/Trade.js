// import React, { useState } from 'react'
import "./Trade.css"
import { useProduct } from '../context/ProductContext.js'

const ringOptions = [
  {
    name: "Ultrahuman Ring AIR", deduction: 7200
  },
  {
    name: "Ultrahuman R1", deduction: 5400
  },
  {
    name: "Oura Gen 3", deduction: 4200
  },
  {
    name: "Oura Gen 2", deduction: 2100
  },
]

const Trade = () => {

  // const [selected, setSelected] = useState('no-trade');
  // const [selectedRing, setSelectedRing] = useState('');
  const {tradeOption, setTradeOption, selectedRing, setSelectedRing,setDeduction} = useProduct()

  return (
    <div className="trade">
      <p className="trade-title">Trade in.<span className="subtitle"> Save up to ₹10,000 in credit.</span> </p>
      <div className="trade-options">
        <button
          className={tradeOption === 'trade' ? 'active' : ''}
          onClick={() => setTradeOption('trade')}
        >
          Select a Smart Ring
        </button>
        <button
          className={tradeOption === 'no-trade' ? 'active' : ''}
          onClick={() => {
          setTradeOption('no-trade');
          setSelectedRing('');
          setDeduction(0);
          }}
        >
          No Trade-In
        </button>
      </div>

      {tradeOption=== 'trade' && (
        <div className="trade-select-ring">
          <p>Select a smart ring you want to trade in</p>
          <div className="ring-options">
            {ringOptions.map((ring, idx) => (
              <div
                key={idx}
                className={`ring-option ${selectedRing === ring ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedRing(ring);
                  setDeduction(ring.deduction)
                }}
              >
                {ring.name} - Get ₹{ring.deduction} trade in credit
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Trade