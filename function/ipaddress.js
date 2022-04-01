      function getIP() {
         var ip=[]; 
         (async function () {
          let  data = await getIPs();
             for(let i = 0; i < 2; i++){
                  ip[i]=data[i];
                 if (i==1 && data[i]!=null) {
                  ipsts=true;
                  ipads=ip[1]; 
                  return ip[1]; 
                 }
               }
           })();
        }  
               
        
         function detectOnline() {
               if (navigator.onLine) {
                   if (!ipReceived){
                        getIP(); 
                    }
               } else {
                   ipsts=false;
               }
          }
