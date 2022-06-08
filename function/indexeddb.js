         //prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange; 

         var dbname="app"; 
         var dbversion=1; 
         var dbostore="contact"; 
         var db; 
         
     function openDB(dbname, dbversion, dbostore, key) { 
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB."); 
         } else { } 

         // var db; // var request; 

         var request = window.indexedDB.open(dbname, dbversion);
         
         request.onerror = function(event) {
            alert("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            // alert("success: "+ db);
         }; 
      
         
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore(dbostore, {keyPath: key}); 
         } 
     }
     
      
  function getObjectStore(dbstore, mode) {
    var tx = db.transaction(dbstore, mode);
    return tx.objectStore(dbstore);
  }

  function clearObjectStore(dbstore, mode) {
    var store = getObjectStore(dbstore, mode);
    var req = store.clear();
    req.onsuccess = function(evt) { 
    };
    req.onerror = function (evt) { 
    };
  } 

         function readObjectStore(objstore,key) {
            var transaction = db.transaction([objstore]);
            var objectStore = transaction.objectStore(objstore); 
            var request = objectStore.get(key);
            
            request.onerror = function(event) {
               alert("Unable to retrieve daa from database!");
            };
            
            request.onsuccess = function(event) {
               // Do something with the request.result!
               if(request.result) { 
                  var value1 = request.result.value1; 
                  var value2 = request.result.value2; 
                  var value3 = request.result.value3; 
                  var value4 = request.result.value4; 
                  var obj = { 
                      value1: value1, 
                      value2: value2, 
                      value3: value3, 
                      value4: value4
                  }; 
                  alert("Value1: " + value1 + ", Value2: " + value2 + ", Value3: " + value3 + ", Value4: " + value4); 
                  return obj; 
               } else {
                  alert("couldn't be found in database!"); 
                  return "error"; 
               }
            };
         } 

         function addObjectStore(objstore,object) {
            var request = db.transaction([objstore], "readwrite")
            .objectStore(objstore)
            .add(object); 
            // .add({ id: "00-03", name: "Kenny", username: "uname", dob: "01/01/2020", gender: "female" });
            
            request.onsuccess = function(event) {
               alert("Added to database.");
            };
            
            request.onerror = function(event) {
               alert("Already exist in database!");
            }
         }
         // alert('4'); 
         function removeObjectStore(objstore,key) {
            var request = db.transaction([objstore], "readwrite")
            .objectStore(objstore)
            .delete(key);
            
            request.onsuccess = function(event) {
               alert("Removed from database.");
            };
         } 

         // alert('1'); 
         function readOSContact(key) {
            var transaction = db.transaction(["contact"]);
            var objectStore = transaction.objectStore("contact");
            var request = objectStore.get(key);
            
            request.onerror = function(event) {
               alert("Unable to retrieve daa from database!");
            };
            
            request.onsuccess = function(event) {
               // Do something with the request.result!
               if(request.result) { 
                  var name = request.result.name; 
                  var username = request.result.username; 
                  var dob = request.result.dob; 
                  var gender = request.result.gender; 
                  var obj = { 
                      name: name, 
                      username: username, 
                      dob: dob, 
                      gender: gender
                  }; 
                  alert("Name: " + name + ", Username: " + username + ", DOB: " + dob + ", Gender: " + gender); 
                  return obj; 
               } else {
                  alert("couldn't be found in database!"); 
                  return "error"; 
               }
            };
         }
         // alert('2'); 
         function readAllOSContact() {
            var objectStore = db.transaction("contact").objectStore("contact");
            
            objectStore.openCursor().onsuccess = function(event) {
               var cursor = event.target.result;
               
               if (cursor) { 
                  var id = cursor.key; 
                  var name = cursor.value.name; 
                  var username = cursor.value.username; 
                  var dob = cursor.value.dob; 
                  var gender = cursor.value.gender; 
                  alert("ID: " + id + ", Name " + name + ", DOB: " + dob + ", Gender: " + gender);
                  cursor.continue();
               } else {
                  alert("No more entries!");
               }
            };
         }
         // alert('3'); 
         function addOSContact(objcontact) {
            var request = db.transaction(["contact"], "readwrite")
            .objectStore("contact")
            .add(objcontact); 
            // .add({ id: "00-03", name: "Kenny", username: "uname", dob: "01/01/2020", gender: "female" });
            
            request.onsuccess = function(event) {
               alert("Added to database.");
            };
            
            request.onerror = function(event) {
               alert("Already exist in database!");
            }
         }
         // alert('4'); 
         function removeOSContact(key) {
            var request = db.transaction(["contact"], "readwrite")
            .objectStore("contact")
            .delete(key);
            
            request.onsuccess = function(event) {
               alert("Removed from database.");
            };
         } 

  function clearOSContact() {
    var store = getObjectStore("contact", "readwrite");
    var req = store.clear();
    req.onsuccess = function(evt) { 
    };
    req.onerror = function (evt) { 
    };
  }













