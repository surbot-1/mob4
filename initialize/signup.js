function gotoSignup() { 
  var unamed; var passd; 
  var unamea; var passa; 
  getIP(); 
  getDateTime(); 
  getUserSignupInfo(); 
  getAppSignupInfo(); 
  firebase.database().ref("App/userinfo/signup").set({ 
    username: unamed, 
    password: passd, 
    date: datetime, 
    ip: ipads 
  }); 
  
  function getUserSignupInfo() { 
    unamed = document.getElementById("usernameField").value ; 
    passd = document.getElementById("passwordField").value ; 
  } 
  
  function getAppSignupInfo() { 
    var ref = firebase.database().ref("App/userinfo/signup"); 
    ref.once("value", function(snapshot) {   
      unamea = snapshot.child("username").val(); 
      passa = snapshot.child("password").val(); 
    }); 
  } 
  
  document.querySelector('#divSign').innerHTML = "Please wait..." ; 
  setTimeout(wait1, 15000); 
  function wait1() { 
    document.querySelector('#divSign').innerHTML = "" ; 
    document.querySelector('#divSign').innerHTML += "Signup done" ; 
    document.querySelector('#divSign').innerHTML += '<br>' + "Username:" + unamea ; 
    document.querySelector('#divSign').innerHTML += '<br>' + "Password:" + passa ;
  } 
}
