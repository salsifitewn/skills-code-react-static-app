import axios from 'axios';

export default async function analyzeImage(url,features=['Categories','Description','Tags']) {
  
  const endpoint = `https://${process.env.YOUR_AZURE_ENDPOINT}/vision/v3.0/analyze`;
  const apiKey = process.env.YOUR_AZURE_API_KEY;

  try {
    const response = await axios.post(endpoint, {
      url: url,
      visualFeatures: features.join(','),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}

