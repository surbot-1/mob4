function gotoSignin() { 
      var unamed; var passd: 
      var unamea; var passa; 
      getUserSigninInfo(); 
      getAppSigniupInfo(); 
      setTimeout(function(){
         if (unamed == unamea && passd == passa) {
                 signin = true; 
                 var date = getDate("ddmmyyyy"); 
                 var time = getTime("12h"); 
              var ref = firebase.database().ref("App/User/Signin"); 
              ref.set({
                  Username: unamed, 
                  Password: passd, 
                  Date: date, 
                  Tate: time, 
                  ip: "ip"
              }); 
           } else { 
              signin = false; 
           } 
        } , 5000 );
                
        function getUserSigninInfo() {
                  
        } 
        function getAppSignupInfo() {
            var ref = firebase.database().ref("App/User/Signup");
            ref.once("value", function(snapshot) { 
            unamea = snapshot.child("username").val();
            passa = snapshot.child("password").val();
            });
        }  
  }
