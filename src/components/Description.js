import React,{useState,useEffect} from 'react'
import "./Description.css"

const tradeInQuotes = [
  "Special pricing for the heroes of the world",
  "Get upto ₹10000 off for trade in",
];

const Description = ({productName="Ring AIR", price=31000, dispatchDate="Jun 7"}) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % tradeInQuotes.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="description">
      <h1 className="ring-name">{productName}</h1>
      <p className="ring-price">₹{price.toLocaleString()}</p>
      <p className="dispatch-detail">
        Dispatched by : <strong>{dispatchDate}</strong>{" "}
        <span className="note">(after size selection)</span>
      </p>

      <div className="trade-in-box">
        <div key={quoteIndex} className="trade-text fade-in">
          <strong>{tradeInQuotes[quoteIndex]}</strong>
          <span className="plus-icon"></span>
        </div>
        <span className="arrow">➔</span>
      </div>
    </div>
  )
}

export default Description