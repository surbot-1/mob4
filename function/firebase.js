function writeAppMessage(sndr,rcvr,msgid,name,msgtype,message,status,date,time,ip) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.child("Msgid").set({ 
    Msgid: msgid  
  }); 
  ref.child("Name").set({ 
    Name: name 
  }); 
  ref.child("Msgtype").set({ 
    Msgtype: msgtype
  }); 
  ref.child("Message").set({ 
    Message: message
  }); 
  ref.child("Status").set({ 
    Status: status 
  }); 
  ref.child("Date").set({ 
    Date: date  
  }); 
  ref.child("Time").set({ 
    Time: time  
  }); 
  ref.child("Ip").set({ 
    Ip: ip 
  });  
} 

function writeAppUser(ucount, uname) { 
  var ref = firebase.database().ref("App").child("User").child(ucount); 
  ref.child("Username").set({ 
    Username: uname 
  }); 
} 

function writeAppUserCount(ucount) { 
  var ref = firebase.database().ref("App").child("User"); 
  ref.child("UserCount").set({ 
    UserCount: ucount 
  }); 
} 

function readAppUser(ucount) { 
  var ref = firebase.database().ref("App").child("User").child(ucount); 
  ref.once("value", function(snapshot) { 
  var uname = snapshot.child("Username").child("Username").val(); 
  appusername = uname; 
  return uname; 
  }); 
} 

function readAppUserCount() { 
  var ref = firebase.database().ref("App").child("User"); 
  ref.once("value", function(snapshot) { 
  var ucount = snapshot.child("UserCount").child("UserCount").val(); 
  appusercount = ucount; 
  return ucount; 
  }); 
} 

function writeAppContact(sndr,ccount,cname,cuname) { 
  var ref = firebase.database().ref("App").child(sndr).child("Contact").child(ccount).child("Contact"); 
  ref.child("Name").set({ 
    Name: cname 
  }); 
  ref.child("Username").set({ 
    Username: cuname 
  }); 
} 

function writeAppContactCount(sndr,ccount) { 
  ref = firebase.database().ref("App").child(sndr).child("Contact"); 
  ref.child("ContactCount").set({ 
    ContactCount: ccount 
  }); 
} 

function readAppContact(sndr,ccount) { 
  var ref = firebase.database().ref("App").child(sndr).child("Contact").child(ccount).child("Contact"); 
  ref.once("value", function(snapshot) { 
  var cname = snapshot.child("Name").child("Name").val(); 
  var cuname = snapshot.child("Username").child("Username").val(); 
  for (let i=0; i<cname.length; i++) { 
    contView[ccount*512+32+i] = cname.charCodeAt(i); 
  } 
  for (let i=0; i<cuname.length; i++) { 
    contView[ccount*512+80+i] = cuname.charCodeAt(i); 
  } 
  contView[0*512+0]=ccount; 
  contView[ccount*512+0] = ccount; 
  contView[ccount*512+2] = cname.length; 
  contView[ccount*512+4] = cuname.length; 
  var obj = { 
    name: cname, 
    uname: cuname 
  };
  return object; 
  }); 
} 

function readAppContactCount(sndr) { 
  var ref = firebase.database().ref("App").child(sndr).child("Contact"); 
  ref.once("value", function(snapshot) { 
  var ccount = snapshot.child("ContactCount").child("ContactCount").val(); 
  contView[0*512+0] = ccount; 
  appcontcount = ccount; 
  return ccount; 
  }); 
} 

function readAppMessage(sndr,rcvr,mid) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(mid); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").child("Msgid").val(); 
    var name = snapshot.child("Name").child("Name").val(); 
    var msgtype = snapshot.child("Msgtype").child("Msgtype").val(); 
    var message = snapshot.child("Message").child("Message").val(); 
    var status = snapshot.child("Status").child("Status").val(); 
    var date = snapshot.child("Date").child("Date").val();
    var time = snapshot.child("Time").child("Time").val(); 
    var ip = snapshot.child("Ip").child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    if (msgtype=="text") { 
    for (let i=0; i<name.length; i++) { 
       usrByte[i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<status.length; i++) { 
       usrByte[36+i]=status.charCodeAt(i); 
    } 
    for (let i=0; i<date.length; i++) { 
       usrByte[40+i]=date.charCodeAt(i); 
    } 
    for (let i=0; i<time.length; i++) { 
       usrByte[50+i]=time.charCodeAt(i); 
    } 
    for (let i=0; i<msgtype.length; i++) {
       usrByte[64+i]=msgtype.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       usrByte[80+i]=message.charCodeAt(i); 
    } 
    var msize=message.length; 
    usrByte[28]=msize&0x000000FF; 
    usrByte[29]=(msize&0x0000FF00)>>8; 
    usrByte[30]=(msize&0x00FF0000)>>16; 
    usrByte[31]=(msize&0xFF000000)>>24; 
    usrByte[32]=0x02; 
    } 
    if (msgtype=="text") {
      sendUserMessage(); 
      sendOnServerRcv(sender); 
      msgnotitone.play(); 
    } else if (msgtype=="image") {
      sendAttachment(message,1,sendactive,date,time,status); 
      sendOnServerRcvImg(rcvr,sndr,mid,name,msgtype,message,"seen",date,time,ip); 
      msgnotitone.play(); 
    }
    
    // writeAppMessageStatus(sndr,rcvr,mid,"seen"); 
  }); 
} 

function readAppMessageOnce(sndr,rcvr,msgid) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(msgid); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").child("Msgid").val(); 
    var name = snapshot.child("Name").child("Name").val(); 
    var msgtype = snapshot.child("Msgtype").child("Msgtype").val(); 
    var message = snapshot.child("Message").child("Message").val(); 
    var status = snapshot.child("Status").child("Status").val(); 
    var date = snapshot.child("Date").child("Date").val(); 
    var time = snapshot.child("Time").child("Time").val(); 
    var ip = snapshot.child("Ip").child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    var minfo=0; 
    if (msgtype=="text") { 
    for (let i=0; i<name.length; i++) {
       usrByte[i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<status.length; i++) {
       usrByte[36+i]=status.charCodeAt(i); 
    } 
    for (let i=0; i<date.length; i++) {
       usrByte[40+i]=date.charCodeAt(i); 
    } 
    for (let i=0; i<time.length; i++) {
       usrByte[50+i]=time.charCodeAt(i); 
    } 
    for (let i=0; i<msgtype.length; i++) {
       usrByte[64+i]=msgtype.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       usrByte[80+i]=message.charCodeAt(i); 
    } 
    var msize=message.length; 
    usrByte[28]=msize&0x000000FF; 
    usrByte[29]=(msize&0x0000FF00)>>8; 
    usrByte[30]=(msize&0x00FF0000)>>16; 
    usrByte[31]=(msize&0xFF000000)>>24; 
    } 
    if (msgtype=="text") { 
      if (name==sender) {usrByte[32]=0x03;} 
      else if (name==receiver) {usrByte[32]=0x02;} 
      sendUserMessage(); 
    } else if (msgtype=="image") { 
      if (name==sender) {minfo=0;} 
      else if (name==receiver) {minfo=1;} 
      sendAttachment(message,minfo,sendactive,date,time,status);
    }
  }); 
} 

function readSenderMessage(user) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").val(); 
    var name = snapshot.child("Name").val(); 
    var msgtype = snapshot.child("Msgtype").val(); 
    var message = snapshot.child("Message").val(); 
    var status = snapshot.child("Status").val(); 
    var date = snapshot.child("Date").val(); 
    var time = snapshot.child("Time").val(); 
    var ip = snapshot.child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    for (let i=0; i<name.length; i++) {
       usrByte[i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<status.length; i++) { 
       usrByte[36+i]=status.charCodeAt(i); 
    } 
    for (let i=0; i<date.length; i++) { 
       usrByte[40+i]=name.charCodeAt(i); 
    } 
    for (let i=0; i<msgtype.length; i++) {
       usrByte[64+i]=msgtype.charCodeAt(i); 
    } 
    for (let i=0; i<message.length; i++) {
       usrByte[80+i]=message.charCodeAt(i); 
    } 
    usrByte[28]=message.length;  
    usrByte[32]=0x03; 
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

function readAppMessageReadStatus(sndr,rcvr,mid) { 
  var ref = firebase.database().ref("App").child(sndr).child(rcvr).child(mid)  ; 
  ref.once("value", function(snapshot) { 
    var read = snapshot.child("Status").child("Status").val(); 
    readmsgsts = read; 
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
    // rcvmsgid = get; 
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





