function checkPassword() {
    // Replace 'correctPassword' with the actual password
    if (document.getElementById('password').value === 'vishal') {
      window.location.href = 'main.html';
      return false;
    } else {
      alert('Incorrect Code');
      return false;
    }
  }
  
  
  function logout() {
    // Redirect to the login page
    window.location.href = 'index.html';
  }