function initiate() { 
  var uname = getCookie("username"); 
  var  pass = getCookie("password"); 
  if (uname=="" && pass=="") { 
    signin(); 
  } else if (uname!="" && pass!="") { 
    if (uname=="sAy1" && pass=="s@1234") { 
      username=uname; password=pass; 
      sender=uname; appHomeChats(1,0,1); 
    } else if (uname=="sAy2" && pass=="k@1234") { 
      username=uname; password=pass; 
      sender=uname; appHomeChats(1,0,1); 
    } else if (uname=="Yash Shiv" && pass=="ys@1234") { 
      username=uname; password=pass; 
      sender=uname; appHomeChats(1,0,1); 
    } else if (uname=="Jitendra" && pass=="j@1234") { 
      username=uname; password=pass; 
      sender=uname; appHomeChats(1,0,1); 
    } else { 
      signin(); 
    }
  } 
}
