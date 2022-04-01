function gotoSignin() { 
  var unamed; var passd: 
  var unamea; var passa; 
             document.querySelector('#divSign').innerHTML = "Please wait...";
                 getUserSigninInfo(); 
                 getAppSigniupInfo(); 
             setTimeout(function(){
             if (unamed == unamea && passd == passa) {
                 signin = true; 
                 getDateTime();
              firebase.database().ref("App/userinfo/signin").set({
                  username: unamed, 
                  password: passd, 
                  date: datetime, 
                  ip: ipads
              });
                  document.querySelector('#divSign').innerHTML = ""; 
                  initiateChat();  
                  }
                  
              else { 
                  signin = false; 
                  document.querySelector('#divSign').innerHTML = "";
                  document.querySelector('#divSign').innerHTML += "Wrong Username and Password !";
                   } 
                  } , 5000 );
                
              function getUserSigninInfo() {
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
  }
