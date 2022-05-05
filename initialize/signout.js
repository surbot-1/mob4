function signout() {
  deleteCookie("username"); 
  deleteCookie("password"); 
  // localStorage.clear(); 
  localStorage.removeItem('contact')
}
