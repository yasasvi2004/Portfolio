document.getElementById('myButton').addEventListener('click', function() {
  fetch('http://localhost:8888/.netlify/functions/hello')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the response data to the console
      // Handle the response data as needed
    })
    .catch(error => {
      console.error(error); // Log any errors to the console
    });
});
