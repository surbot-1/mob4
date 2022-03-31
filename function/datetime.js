               function getDateTime() { 
                     var ampm=true, sec=false;
                     let  today = new Date();
                     var day   = today.getDate() < 10 ? "0" + today.getDate() : today.getDate() ; 
                     var month = today.getMonth() < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1) ;              
                     var year   = today.getFullYear() < 10 ? "0" + today.getFullYear() : today.getFullYear() ;    
                     var hours   = today.getHours() < 10 ? "0" + today.getHours() : today.getHours() ;
                     var minutes   = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes() ;     
                     var seconds   = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds() ; 
                     var gmt = "+0530"
                     if(ampm) { 
                     var part = hours < 12 ? 'am' : 'pm' ;
                     hours = hours % 12; 
                     hours = hours ? hours : 12 ; hours = hours<10 ? "0"+hours : hours;
                     date = day +"."+ month +"."+ year ;
                     time = hours +":"+ minutes +" "+ part ;
                            if(sec) {   
                                date = day +"."+ month +"."+ year ;
                                time = hours +":"+ minutes +":"+ seconds +" "+ part  +" "+ gmt ;
                                } 
                       } else {
                              date = day +"."+ month +"."+ year ;
                              time = hours +":"+ minutes +":"+ seconds +" "+ gmt ;
                               }
                     datetime = date +" "+ time ;
                   
                 }
