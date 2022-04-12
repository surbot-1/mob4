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

function receiveAppMessage(user) { 
  var ref = firebase.database().ref("App").child(user); 
  ref.once("value", function(snapshot) { 
    var msgid = snapshot.child("Msgid").val(); 
    var name = snapshot.child("Name").val(); 
    var message = snapshot.child("Message").val(); 
    var status = snapshot.child("Status").val(); 
    var date = snapshot.child("Date").val(); 
    var ip = snapshot.child("Ip").val(); 
    // snapshot.forEach(function(element) { 
    var obj = { 
      msgid: msgid, 
      name: name, 
      massage: message, 
      status: status, 
      date: date, 
      ip: ip 
    }; 
    return obj; 
  }); 
} 

function readAppMessage(user,data) { 
  var ref = firebase.database().ref(user); 
  ref.once("value", function(snapshot) { 
    var read = snapshot.child(data).val(); 
    return read; 
  }); 
}
