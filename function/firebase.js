function writeAppMessage(user,msgid,name,message,status,time,ip) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.set({ 
    Msgid: msgid, 
    Name: name, 
    Message: message, 
    Status: status, 
    Time: time, 
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
    var time = snapshot.child("Time").val(); 
    var ip = snapshot.child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    for (let i=0; i<name.length; i++) {
       usrByte[1+i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       usrByte[32+i]=message.charCodeAt(i); 
    } 
    usrByte[0]=0x02; 
    usrByte[28]=message.length;  
    sendUserMessage(); 
  }); 
} 

function readSenderMessage(user) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").val(); 
    var name = snapshot.child("Name").val(); 
    var message = snapshot.child("Message").val(); 
    var status = snapshot.child("Status").val(); 
    var time = snapshot.child("Time").val(); 
    var ip = snapshot.child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    for (let i=0; i<name.length; i++) {
       sndByte[1+i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       sndByte[32+i]=message.charCodeAt(i); 
    } 
    sndByte[0]=0x03; 
    sndByte[28]=message.length;  
    sendSenderMessage(); 
  }); 
} 

function getAppMessage(user,data) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.once("value", function(snapshot) { 
    var get = snapshot.child(data).val(); 
    return get; 
  }); 
}
