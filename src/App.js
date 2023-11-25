import React from 'react';
import { useState } from "react";
import analyzeImage, { isConfigured } from './azure-image-analysis';
function App() {
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/ccIeWeW.jpeg');
  const handleChange = (event) => {
    setImageUrl(event.target.value);
  }
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    const result = await analyzeImage(imageUrl);
    setResults(result);
    setIsAnalyzing(false);
  }
  if (!isConfigured()) {
    return (
      <>
        <p>You need to configure your .env file.</p>
      </>
    )
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
        <DisplayResults results={results} imageUrl={imageUrl} />
      </div>
    </div>
  );
}
function DisplayResults({ results, imageUrl = '' }) {
  return (
    <div>
      <h2>Results</h2>
      <img src={imageUrl} alt='' />
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  )
}
export default App;
