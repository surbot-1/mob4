function sendAppMessage(Ref,name,message,status,date,ip) { 
  var ref = firebase.database().ref("App").child(Ref); 
  ref.set({ 
    Name: name, 
    Message: message, 
    Status: status, 
    Date: date, 
    Ip: ip 
  }); 
} 

function receiveAppMessage(Ref,Name,Message,Status,Date,Ip) { 
  var ref = firebase.database().ref("App").child(Ref); 
  ref.once("value", function(snapshot) { 
    var name = snapshot.child(Name).val(); 
    var message = snapshot.child(Message).val(); 
    var status = snapshot.child(Status).val(); 
    var date = snapshot.child(Date).val(); 
    var ip = snapshot.child(Ip).val(); 
    // snapshot.forEach(function(element) { 
    var obj = { 
      name: name, 
      massage: message, 
      status: status, 
      date: date, 
      ip: ip 
    } 
    return obj; 
  });
} 

function readAppMessage(Ref,Data) { 
  var ref = firebase.database().ref(Ref /* "App/Chatbot/Message" */); 
  ref.once("value", function(snapshot) { 
    var data = snapshot.child(Data).val(); 
    return data; 
  }); 
}
