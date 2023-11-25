import React from 'react';
import { useState } from "react";
import analyzeImage from './azure-image-analysis';
function App() {
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/7yPH8b2.png');
  const handleChange = (event) => {
    setImageUrl(event.target.value);
  }
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    const result = await analyzeImage(imageUrl);
    console.log(result);
    setIsAnalyzing(false);
  }
  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <label>Image imageUrl
        <input onChange={handleChange} type='text' placeholder='Enter Image URL' value={imageUrl} />
      </label>
      <div>
        <button type='button' onClick={handleAnalyze}>Analyze</button>
        <button type='button'>Generate</button>
        {isAnalyzing && <p>Analysing...</p>}
      </div>
    </div>
  );
}

export default App;
