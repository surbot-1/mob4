function writeAppMessage(user,msgid,name,message,status,date,ip) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.set({ 
    Msgid: msgid, 
    Name: name, 
    Message: message, 
    Status: status, 
    Date: date, 
    Ip: ip 
  }); 
} 

function readAppMessage(user) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").val(); 
    var name = snapshot.child("Name").val(); 
    var message = snapshot.child("Message").val(); 
    var status = snapshot.child("Status").val(); 
    var date = snapshot.child("Date").val(); 
    var ip = snapshot.child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    for (let i=0; i<name.length; i++) {
       usrView[1+i]=name.charCodeAt(i); 
	  } 
    for (let i=0; i<message.length; i++) {
       usrView[32+i]=message.charCodeAt(i); 
	  } 
    usrView[0]=0x02; 
    usrView[28]=message.length; 
    sendUserMessage(); 
    
    /* var obj = { 
      msgid: msgid, 
      name: name, 
      massage: message, 
      status: status, 
      date: date, 
      ip: ip 
    }; 
    return obj; */ 
  }); 
} 

function getAppMessage(user,data) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.once("value", function(snapshot) { 
    var get = snapshot.child(data).val(); 
    return get; 
  }); 
}
