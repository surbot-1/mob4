function sendAppMessage(Ref,msgid,name,message,status,date,ip) { 
  var ref = firebase.database().ref("App").child(Ref); 
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
    } 
    return obj; 
  }); 
  return false; 
} 

function readAppMessage(Ref,Data) { 
  var ref = firebase.database().ref(Ref /* "App/Chatbot/Message" */); 
  ref.once("value", function(snapshot) { 
    var data = snapshot.child(Data).val(); 
    return data; 
  }); 
}
