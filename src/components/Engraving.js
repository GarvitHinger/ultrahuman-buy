// import React, { useState } from 'react'
import "./Engraving.css"
import { useProduct } from '../context/ProductContext.js';
const Engraving = () => {
  // const [selected, setSelected] = useState('none');
  // const [text, setText] = useState('');

  const { engraving, setEngraving, engravingText, setEngravingText } = useProduct();
  const handleChange = (e) => {
    if (e.target.value.length <= 8) {
      setEngravingText(e.target.value);
    }
  };

  return (
    <div className="engraving">
      <p className="engraving-title">
        Engraving.<span className="subtitle"> Personalize it to make it uniquely yours.</span></p>
      <div
        className={`engraving-option ${engraving === 'add' ? 'selected' : ''}`}
        onClick={() => setEngraving('add')}
      >
        <strong>Add engraving</strong>
        <p>Add custom engraving for just ₹3,299 extra</p>
        <p className="note">*Engraving orders take 7 days longer to ship</p>

        {engraving === 'add' && (
          <>
            <input
              type="text"
              value={engravingText}
              onChange={handleChange}
              placeholder="eg. Jon Snow"
              className="engraving-input"
              onClick={(e) => e.stopPropagation()} // prevents parent click toggle
            />
            <div
              className="engraving-info"
              onClick={(e) => e.stopPropagation()} // same here
            >
              <span>Max. 8 characters</span>
              <span>(alphanumeric & some special characters supported)</span>
            </div>
          </>
        )}
      </div>


      <div
        className={`engraving-option ${engraving === 'none' ? 'selected' : ''}`}
        onClick={() => {
          setEngraving('none');
          setEngravingText('');
        }}
      >
        I don’t want the engraving
      </div>

    </div>
  )
}

export default Engraving