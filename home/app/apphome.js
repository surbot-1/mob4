function appHomeChats(p1,p2,p3) { 
if (p1) { 
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
  writecStr(16+24*2,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"MESSAGES"); 
  writecStr(16+24*13,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CALLS"); 
  writecStr(16+24*21,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"STATUS");  
  writecStr(16+24*30,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CONTACTS");  
	
  imageRect(16+24*2,144-8,24*8,8,"rgba(255,255,255,1.0)"); 
	
  fileViewerUrl(1080-128+32, 8+32, "icon/business-man-icon-64.bmp"); 
  fileViewerUrl(920, 2024, "icon/add-icon-128.bmp"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
ctx.fillRect(0, 144, 1080, 2032); 
} 
	
receive(false); 
chatbotactive=false; useractive=false; sendactive=10; 
appPtr=0; appPtri=0; appPtrf=0; 
msgid=1; rcvmsgid=0; rcvmsgidp=0; 
	
 // var acname=[]; 
 // var acuname=[]; 
 // var acsts=[]; 
 // var account=0; 
	
  function writeContact(cname, cuname, i) {  
    // acname[i]=cname; acuname[i]=cuname; acsts[i]=true; 
    fileViewerUrl(64, 144*i+8, "icon/business-man-icon-128.bmp"); 
    writecStr(200,144*i+48,24*24,32,"ubuntubold",[0,0,0,255],[240,240,240,255],cname); 
    // writecStr(200,144*i+72,24*24,32,"ubuntufont",[0,0,0,255],[240,240,240,255],cuname); 
  } 
	
  function putName() { 
     for (let i=0; i<username.length; i++) { 
	contView[0*512+32+i] = username.charCodeAt(i);
     } 
     for (let i=0; i<username.length; i++) { 
	contView[0*512+80+i] = username.charCodeAt(i); 
     }
  }
	
  function getContact() { 
   var tmr; var cname=""; var cuname=""; 
   var count = contView[0*512+0] ; 
   var rcv = contView[count*512+0]; 
   tmr = setInterval( ()=> { 
     if (rcv) { 
       clearInterval(tmr); contView[0*512+2]=1; 
       for (let i=1; i<count+1; i++) { 
	  for (let j=0; j<(contView[i*512+2]); j++) { 
	    cname += ascChar(contView[i*512+32+j]); 
	  }  
	  for (let j=0; j<(contView[i*512+4]); j++) { 
	    cuname += ascChar(contView[i*512+80+j]); 
	  }  
	  writeContact(cname,cuname,i); cname=""; cuname=""; 
       } 
     } else if (!rcv) { 
       rcv = contView[count*512+0]; 
     }
   }, 1000); 
  } 
	
  function storeContact() { 
	  var arr=[]; 
	  var rcv = contView[appcontcount*512+0]; 
	  tmr = setInterval( ()=> { 
		  if (rcv) { 
			  clearInterval(tmr); 
			  for (let i=0; i<appcontcount+1; i++) { 
				  for (let j=0; j<512; j++) { 
					  arr[i*512+j]=contView[i*512+j];
				  }   
			  } 
			  var base64 = base64EncArr (arr); 
			  localStorage.setItem('contact', base64); 
		  } else if (!rcv) { 
			  rcv = contView[appcontcount*512+0]; 
		  }
	  }, 1000); 
  } 
	
  function retrieveContact() { 
	  var contact = localStorage.getItem('contact'); 
	  if (contact != null) { 
		  var arr = base64DecToArr (contact, 1); 
		  for (let i=0; i<arr.length; i++) { 
		  contView[i]=arr[i]; 
		  } 
		  appcontcount=contView[0]; 
		  getContact(); 
	  } else if (contact == null) { 
		  var tmr; appcontcount=0; 
                  var count = readAppContactCount(sender); 
                  tmr = setInterval( ()=> { 
                    if (appcontcount) { 
                       clearInterval(tmr); 
                       for (let i=1; i<appcontcount+1; i++) { 
	                    readAppContact(sender, i); 
                       } 
                       putName(); 
                       getContact(); 
	               storeContact(); 
		    } else if (!appcontcount) { 
                        count = readAppContactCount(sender); 
		    } 
		  }, 1000); 
	  }
  }
	
  if (p2==1) { 
    var tmr; appcontcount=0; 
    var count = readAppContactCount(sender); 
    tmr = setInterval( ()=> { 
      if (appcontcount) { 
          clearInterval(tmr); 
          for (let i=1; i<appcontcount+1; i++) { 
	     readAppContact(sender, i); 
          } 
	  putName(); 
	  getContact(); 
	  storeContact(); 
      } else if (!appcontcount) { 
         count = readAppContactCount(sender); 
      }
    }, 1000); 
  } else if(p2==2 && contView[0*512+2]) { 
      getContact(); 
  } else if(p2==2) { 
     if (contView[0] != 0) { 
        getContact(); 
     } else if (contView[0] == 0) { 
        retrieveContact(); 
     }
  } else if (!p2) { 
  }
	

     if (p3) {
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { 
              touch = 0;
              if (x>128*1 && x<128*2 && y>0 && y<144) { 
              } else if (x>128*2 && x<128*3 && y>0 && y<144) { 
              } else if (x>128*3 && x<128*4 && y>0 && y<144) { 
	      } else if (x>16+24*30 && x<16+24*38 && y>0 && y<144) { 
		      clearInterval(timer); appHomeContacts(); 
	      } else if (x>1080-128 && x<1080 && y>0 && y<144) { 
		      clearInterval(timer); admin(); 
              } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
		        if (contView[1*512+0]) { 
                            clearInterval(timer); 
			    var cname=""; var cuname=""; 
			    for (let j=0; j<contView[1*512+2]; j++) { 
				    cname += ascChar(contView[1*512+32+j]); 
			    } 
			    for (let j=0; j<contView[1*512+4]; j++) { 
				    cuname += ascChar(contView[1*512+80+j]); 
			    } 
			    receiver = cuname; 
			    appHomeChatsChatbot(); 
		       }
              } else if (x>0 && x<1080 && y>144*2 && y<144*11) { 
		 for (let i=2; i<contView[0*512+0]+1; i++) { 
                    if (x>0 && x<1080 && y>144*i && y<144*(i+1)) {
		      if (contView[i*512+0]) {  
			   clearInterval(timer); 
			    var cname=""; var cuname=""; 
			   for (let j=0; j<contView[i*512+2]; j++) { 
				   cname += ascChar(contView[i*512+32+j]); 
			   } 
			   for (let j=0; j<contView[i*512+4]; j++) { 
				   cuname += ascChar(contView[i*512+80+j]); 
			   } 
			   receiver = cuname; 
			   appHomeChatsUser(cname); break; 
		      } 
		    }
		 } 
	      } else if (x>0 && x<1080 && y>144*11 && y<144*11+144) { 
	      } else if (x>0 && x<1080 && y>144*12 && y<144*12+144) { 
	      } else if (x>920 && x<920+128 && y>2024 && y<2024+128) { 
		      clearInterval(timer); newContact(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 
     }

}

function appHomeCalls() { 
} 

function appHomeStatus() { 
} 

function appHomeContacts() { 
	var cnv = document.getElementById("canvas"); 
	var ctx = cnv.getContext('2d'); 
	ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
	ctx.fillRect(0, 0, 1080, 144); 
	writecStr(16+24*2,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"MESSAGES"); 
	writecStr(16+24*13,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CALLS"); 
	writecStr(16+24*21,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"STATUS");  
	writecStr(16+24*30,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CONTACTS");  
	
	imageRect(16+24*30,144-8,24*8,8,"rgba(255,255,255,1.0)"); 
	
	fileViewerUrl(1080-128+32, 8+32, "icon/business-man-icon-64.bmp"); 
	fileViewerUrl(920, 2024, "icon/add-icon-128.bmp"); 
	
	ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
	ctx.fillRect(0, 144, 1080, 2032); 
	
	receive(false); 
	chatbotactive=false; useractive=false; sendactive=10; 
	appPtr=0; appPtri=0; appPtrf=0; 
	msgid=1; rcvmsgid=0; rcvmsgidp=0; 
	
	var acname=[]; 
	var acuname=[]; 
	var acsts=[]; 
	
	function writeCont(cname, cuname, i) {  
		acname[i]=cname; acuname[i]=cuname; acsts[i]=true; 
		fileViewerUrl(64, 144*i+8, "icon/business-man-icon-128.bmp"); 
		writecStr(200,144*i+36,24*24,32,"ubuntubold",[0,0,0,255],[240,240,240,255],cname); 
		writecStr(200,144*i+76,24*24,32,"ubuntufont",[0,0,0,255],[240,240,240,255],cuname); 
	} 
	
	function rcvCont() { 
		var tmr; var cname=""; var cuname=""; 
		var rcv = contView[appcontcount*512+0]; 
		tmr = setInterval( ()=> { 
			if (rcv) { 
				clearInterval(tmr); 
				for (let i=1; i<appcontcount+1; i++) { 
					for (let j=0; j<(contView[i*512+2]); j++) { 
						cname += ascChar(contView[i*512+32+j]); 
					}  
					for (let j=0; j<(contView[i*512+4]); j++) { 
						cuname += ascChar(contView[i*512+80+j]); 
					}  
					writeCont(cname,cuname,i); cname="";  cuname="";
				} 
			} else if (!rcv) { 
				rcv = contView[appcontcount*512+0]; 
			} 
		}, 1000); 
	} 
	
	if (true) { 
		var tmr; appcontcount=0; 
		var count = readAppContactCount(sender); 
		tmr = setInterval( ()=> { 
			if (appcontcount) { 
				clearInterval(tmr); 
				for (let i=1; i<appcontcount+1; i++) { 
					readAppContact(sender, i); 
				} 
				rcvCont(); 
			} else if (!appcontcount) { 
				count = readAppContactCount(sender); 
			} 
		}, 1000); 
	} 
	
	var timer; 
	function check() { 
		var x = touchx;  var y = touchy; 
		var tend = touch;  
		if (tend == 3) { 
			touch = 0; 
			if (x>16+24*2 && x<16+24*10 && y>0 && y<144) { 
				clearInterval(timer); appHomeChats(1,2,1); 
			} else if (x>16+24*13 && x<16+24*18 && y>0 && y<144) { 
			} else if (x>16+24*21 && x<12+24*27 && y>0 && y<144) { 
			} else if (x>16+24*30 && x<16+24*38 && y>0 && y<144) { 
			} else if (x>1080-128 && x<1080 && y>0 && y<144) { 
				clearInterval(timer); admin(); 
			} else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
				if (acsts[1]) { 
					clearInterval(timer); 
					receiver = acuname[1]; 
					appHomeChatsChatbot(); 
				} 
			} else if (x>0 && x<1080 && y>144*2 && y<144*3) {  
				if (acsts[2]) { 
					clearInterval(timer); 
					receiver = acuname[2];  
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*3 && y<144*4) { 
				if (acsts[3]) { 
					clearInterval(timer); 
					receiver = acuname[3]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*4 && y<144*5) { 
				if (acsts[4]) { 
					clearInterval(timer); 
					receiver = acuname[4]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*5 && y<144*5+144) { 
				if (acsts[5]) { 
					clearInterval(timer); 
					receiver = acuname[5]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*6 && y<144*6+144) { 
				if (acsts[6]) { 
					clearInterval(timer); 
					receiver = acuname[6]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*7 && y<144*8) { 
				if (acsts[7]) { 
					clearInterval(timer); 
					receiver = acuname[7]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*8 && y<144*9) { 
				if (acsts[8]) { 
					clearInterval(timer); 
					receiver = acuname[8]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*9 && y<144*10) { 
				if (acsts[9]) { 
					clearInterval(timer); 
					receiver = acuname[9]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*10 && y<144*11) { 
				if (acsts[10]) { 
					clearInterval(timer); 
					receiver = acuname[10]; 
					appHomeChatsUser(receiver); 
				} 
			} else if (x>0 && x<1080 && y>144*11 && y<144*11+144) { 
			} else if (x>0 && x<1080 && y>144*12 && y<144*12+144) { 
			} else if (x>920 && x<920+128 && y>2024 && y<2024+128) { 
				clearInterval(timer); newContact(); 
			} 
		} 
	} 
	timer = setInterval(check, 0020); 
	
} 











