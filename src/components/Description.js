import React from 'react'
import "./Description.css"
const Description = () => {
  return (
    <div className="description">
      <h1 className="ring-name">Ring AIR</h1>
      <p className="ring-price">₹28,499</p>
      <p className="dispatch-detail">
        Dispatched by : <strong>Tomorrow, Jun 6</strong> <span className="note">(after size selection)</span>
      </p>

      <div className="trade-in-box">
        <p>
          <strong>Get up to ₹10,000 for your trade-in</strong>
          <span className="plus-icon">＋</span>
        </p>
        <span className="arrow">➔</span>
      </div>
    </div>
  )
}

export default Description