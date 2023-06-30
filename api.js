
async function fetchData() {
    const response = await fetch('http://localhost:8888/.netlify/functions/hello');
    return response;
  }
  
  document.getElementById('triggerButton').addEventListener('click', async () => {
    try {
      const response = await fetchData(); 
      const data = await response.json();
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.textContent = data.message; 
    } catch (error) {
      console.error('Error:', error);
    }
  });
console.log(response);