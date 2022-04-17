function writeAppMessage(sndr,rcvr,msgid,name,message,status,time,ip) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.child.(msgid)set({ 
    Msgid: msgid  
  }); alert('1');
  ref.child.(name)set({ 
    Name: name 
  }); 
  ref.child.(message)set({ 
    Message: message
  }); 
  ref.child.(status)set({ 
    Status: status 
  }); 
  ref.child.(time)set({ 
    Time: time  
  }); 
  ref.child.(ip)set({ 
    Ip: ip 
  }); 
} 

function readAppMessage(sndr,rcvr,msgid) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").child("Msgid").val(); 
    var name = snapshot.child("Name").child("Name").val(); 
    var message = snapshot.child("Message").child("Message").val(); 
    var status = snapshot.child("Status").child("Status").val(); 
    var time = snapshot.child("Time").child("Time").val(); 
    var ip = snapshot.child("Ip").child("Ip").val(); 
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

function getAppMessage(user,sndrcv,msgid,data) { 
  var ref = firebase.database().ref("App").child(user).child(sndrcv).child(msgid)  ; 
  ref.once("value", function(snapshot) { 
    var get = snapshot.child(data).child(data).val(); 
    rcvmsgid = get; 
    return get; 
  }); 
}
