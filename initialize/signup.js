function gotoSignup() { 
  getIP(); 
  getDateTime(); 
  getUserSignupInfo(); 
  getAppSignupInfo(); 
  firebase.database().ref("App/userinfo/signup").set({ 
    username: username, 
    password: password, 
    date: datetime, 
    ip: iprcv 
  }); 
  
  function getUserSignupInfo() { 
    username = document.getElementById("usernameField").value ; 
    password = document.getElementById("passwordField").value ; 
  } 
  
  function getAppSignupInfo() { 
    var ref = firebase.database().ref("App/userinfo/signup"); 
    ref.once("value", function(snapshot) {   
      username = snapshot.child("username").val(); 
      password = snapshot.child("password").val(); 
    }); 
  } 
  
  document.querySelector('#divSign').innerHTML = "Please wait..." ; 
  setTimeout(wait1, 15000); 
  function wait1() { 
    document.querySelector('#divSign').innerHTML = "" ; 
    document.querySelector('#divSign').innerHTML += "Signup done" ; 
    document.querySelector('#divSign').innerHTML += '<br>' + "Username:" + username ; 
    document.querySelector('#divSign').innerHTML += '<br>' + "Password:" + password ;
  } 
}
