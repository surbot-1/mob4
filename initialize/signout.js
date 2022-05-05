function signout() {
  deleteCookie("username"); 
  deleteCookie("password"); 
  // window.localStorage.clear(); 
  window.localStorage.removeItem('contact')
}
