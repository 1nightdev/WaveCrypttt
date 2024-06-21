document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });

  loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });

  
  document.getElementById('signup-form').addEventListener('submit', function (event) {
      event.preventDefault(); 

     
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;


    
      fetch('/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name,
              email,
              password
          })
      })
          .then(response => {
              if (response.ok) {
                  window.location.href = "index.html"; 
              } else {
                  console.error('Registration failed');
              }
          })
          .catch(error => {
              console.error('Error during registration:', error);
          });
  });

  document.getElementById('signin-form').addEventListener('submit', function (event) {
      event.preventDefault(); 

      
      const email = document.getElementById('signin-email').value;
      const password = document.getElementById('signin-password').value;

     

      fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              password
          })
      })
          .then(response => {
              if (response.ok) {
                  window.location.href = "index.html"; 
              } else {
                  console.error('Authentication failed');
              }
          })
          .catch(error => {
              console.error('Error during authentication:', error);
          });
  });
});



