function writeAppMessage(sndr,rcvr,msgid,name,message,status,time,ip) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.child("Msgid").set({ 
    Msgid: msgid  
  }); 
  ref.child("Name").set({ 
    Name: name 
  }); 
  ref.child("Message").set({ 
    Message: message
  }); 
  ref.child("Status").set({ 
    Status: status 
  }); 
  ref.child("Time").set({ 
    Time: time  
  }); 
  ref.child("Ip").set({ 
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
       usrByte[i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<time.length; i++) { 
       usrByte[40+i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       usrByte[64+i]=message.charCodeAt(i); 
    } 
    usrByte[28]=message.length;  
    usrByte[32]=0x02; 
    sendUserMessage(); 
    sendOnServerRcv(sender); 
  }); 
} 

function readAppMessageOnce(sndr,rcvr,msgid) { 
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
       usrByte[i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<time.length; i++) {
       usrByte[40+i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       usrByte[64+i]=message.charCodeAt(i); 
    } 
    usrByte[28]=message.length;  
    if (name==sender) {usrByte[32]=0x03;} 
    else if (name==receiver) {usrByte[32]=0x02;} 
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

function writeAppMessageStatus(sndr,rcvr,msgid,status) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.child("Status").set({ 
  Status: status
  }); 
} 

function readAppMessageStatus(sndr,rcvr,msgid) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid)  ; 
  ref.once("value", function(snapshot) { 
    var read = snapshot.child("Status").child("Status").val(); 
    rcvmsgsts = read; 
    return read; 
  }); 
} 

function putAppMessage(sndr,rcvr,msgid,aref,data) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.child(aref).set({ 
    Status: data
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

function writeAppMessageCount(sndr,rcvr,msgcount) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr); 
  ref.child("MsgCount").set({ 
  MsgCount: msgcount 
  }); 
} 

function readAppMessageCount(sndr,rcvr) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr); 
  ref.once("value", function(snapshot) { 
    var read = snapshot.child("MsgCount").child("MsgCount").val(); 
    msgcount = read; 
    return read; 
  }); 
} 





