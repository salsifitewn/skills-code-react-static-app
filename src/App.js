import React from 'react';
import { useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/7yPH8b2.png');
  const handleChange = (event) => {
    setImageUrl(event.target.value);
  }

  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <label>Image imageUrl
        <input onChange={handleChange} type='text' placeholder='Enter Image URL' value={imageUrl} />
      </label>
      <div>
        <button type='button'>Analyze</button>
        <button type='button'>Generate</button>
      </div>
    </div>
  );
}

export default App;
