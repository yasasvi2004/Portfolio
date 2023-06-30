// script.js
async function fetchData() {
    const response = await fetch('http://localhost:8888/.netlify/functions/hello');
    return response;
  }
  
  document.getElementById('triggerButton').addEventListener('click', async () => {
    try {
      const response = await fetchData(); // Call the function to fetch data
      const data = await response.json();
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.textContent = data.message; // Update the content with the result
    } catch (error) {
      console.error('Error:', error);
    }
  });
  