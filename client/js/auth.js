// Save token after login
function saveToken(token) {
  localStorage.setItem('token', token);
}

// Get token from storage
function getToken() {
  return localStorage.getItem('token');
}

// Remove token on logout
function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login.html';
}

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem('token') !== null;
}