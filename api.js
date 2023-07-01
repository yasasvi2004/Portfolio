document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the button
    document.getElementById('triggerButton').addEventListener('click', function() {
      console.log('Button clicked'); // Check if the button click event is triggered
  
      // Redirect to the desired page
      console.log('Before redirection');
      window.location.href = 'http://localhost:8888/.netlify/functions/hello'; // Replace with your desired URL
      console.log('After redirection');
    });
  });
netlifyIdentity.init();
const user = netlifyIdentity.currentUser();
console.log(user.email);

  