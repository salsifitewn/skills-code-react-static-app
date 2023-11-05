import React from 'react';

function App() {
  const [imageUrl, setImageUrl] = React.useState('https://i.imgur.com/7yPH8b2.png');
  const handleChange = (event) => {
    setImageUrl(event.target.value);
  }
  
  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <label>Image URL</label>
      <input onChange={handleChange} type='text' placeholder='Enter Image URL' value={imageUrl}/>
      // add two buttons with button type analyze and generate
      <button type='button'>Analyze</button>
      <button type='button'>Generate</button>
    </div>
  );
}

export default App;
