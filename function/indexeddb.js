         //prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange; 

         var dbname="dbapp"; 
         var dbversion=1; 
         var dbstore="dbcontact"; 
         var db; 
         
     function openDB(dbname, dbversion, dbstore, key) { 
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
            var objectStore = db.createObjectStore(store, {keyPath: key}); 
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

         // alert('1'); 
         function readObjectStore(dbstore, key) {
            var transaction = db.transaction([dbstore]);
            var objectStore = transaction.objectStore(dbstore);
            var request = objectStore.get(key);
            
            request.onerror = function(event) {
               alert("Unable to retrieve daa from database!");
            };
            
            request.onsuccess = function(event) {
               // Do something with the request.result!
               if(request.result) { 
                  var name = request.result.name; 
                  var age = request.result.age; 
                  var gender = request.result.gender;  
                  var email = request.result.email; 
                  alert("Name: " + name + ", Age: " + age + ", Gender: " + gender + ", Email: " + email);
               } else {
                  alert("Kenny couldn't be found in your database!");
               }
            };
         }
         // alert('2'); 
         function readAllObjectStore(dbstore) {
            var objectStore = db.transaction(dbstore).objectStore(dbstore);
            
            objectStore.openCursor().onsuccess = function(event) {
               var cursor = event.target.result;
               
               if (cursor) { 
                  var id = cursor.key; 
                  var name = cursor.value.name; 
                  var age = cursor.value.age; 
                  var gender = cursor.value.gender; 
                  var email = cursor.value.email; 
                  alert("Name for id " + id + " is " + name + ", Age: " + age + ", Gender: " + gender + ", Email: " + email);
                  cursor.continue();
               } else {
                  alert("No more entries!");
               }
            };
         }
         // alert('3'); 
         function addObjectStore(dbstore, mode, objdata ) {
            var request = db.transaction([dbstore], mode)
            .objectStore(dbstore)
            .add({ id: "00-03", name: "Kenny", age: 19, gender: "female", email: "kenny@planet.org" });
            
            request.onsuccess = function(event) {
               alert("Kenny has been added to your database.");
            };
            
            request.onerror = function(event) {
               alert("Unable to add data\r\nKenny is aready exist in your database! ");
            }
         }
         // alert('4'); 
         function removeObjectStore(dbstore, mode, key) {
            var request = db.transaction([dbstore], key)
            .objectStore(dbstore)
            .delete(key);
            
            request.onsuccess = function(event) {
               alert("Kenny's entry has been removed from your database.");
            };
         } 
