         //prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange; 
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB."); 
         } else { } 

         var db; var request; 
      function requestDB(database, version) {
         request = window.indexedDB.open(database, version);
         
         request.onerror = function(event) {
            alert("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            // alert("success: "+ db);
         }; 
      }
         
     function onUpgradeNeeded(store, keypath) { 
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore(store, {keyPath: keypath}); 
         } 
      }
         // alert('1'); 
         function readDB(store, key) {
            var transaction = db.transaction([store]);
            var objectStore = transaction.objectStore(store);
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
         function readAllDB(store, ) {
            var objectStore = db.transaction(store).objectStore(store);
            
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
         function addDB(store, ) {
            var request = db.transaction([store], "readwrite")
            .objectStore(store)
            .add({ id: "00-03", name: "Kenny", age: 19, gender: "female", email: "kenny@planet.org" });
            
            request.onsuccess = function(event) {
               alert("Kenny has been added to your database.");
            };
            
            request.onerror = function(event) {
               alert("Unable to add data\r\nKenny is aready exist in your database! ");
            }
         }
         // alert('4'); 
         function removeDB(store, key) {
            var request = db.transaction([store], "readwrite")
            .objectStore(store)
            .delete(key);
            
            request.onsuccess = function(event) {
               alert("Kenny's entry has been removed from your database.");
            };
         } 
