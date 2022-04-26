function admin() {
  saveImage(880-16,144+16,400,600); 
  imageRect(880-16,144+16,400,600"rgba(128,128,128,1.0)"); 
  imageRect(880-16+4,144+16+4,400-8,600-8"rgba(240,240,240,1.0)"); 
  fileViewerUrl(880-16+36, 144+16+16, "icon/business-man-icon-128.bmp"); 
  var aname=sender; var al=sender.length; 
  var uname=sender; var ul=sender.length; 
  writecStr(880-16+(400-al)/2,144+16+144,480,128,"font2448",[0,0,0,255],[240,240,240,255],aname); 
  writecStr(880-16+(400-ul)/2,144+16+144+64,480,128,"ubuntufont",[0,0,0,255],[240,240,240,255],uname); 
  writecStr(880-16+104,144+16+600-48,480,128,"ubuntufont",[0,0,0,255],[240,240,240,255],"Sign out"); 


        var timer; 
	function check() { 
          var x = touchx;  var y = touchy; 
          var tend = touch;  
          if (tend == 3) { touch = 0;
              if (x>1080-128 && x<1080 && y>0 && y<144) { 
		      clearInterval(timer); 
		      restoreImage(880-16,144+16,400,600); 
		      appHomeChats(); 
	      } else if (x>1024 && x<1024+48 && y>0 && y<144) { 
              } else if (x>0 && x<1080 && y>144*2+8 && y<144*2+8+128) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>144*4+8 && y<144*4+8+128) { 
              } else if (x>0 && x<1080 && y>144*4+8 && y<144*4+8+128) { 
	      } else if (x>0 && x<1080 && y>144*4+8 && y<144*4+8+128) { 
	      } else if (x>0 && x<1080 && y>144*4+8 && y<144*4+8+128) { 
	      } else if (x>0 && x<1080 && y>144*4+8 && y<144*4+8+128) { 
	      } else if (x>880-16+104 && x<880-16+104+8*24 && y>144+16+600-48 && y<144+16+600) { 
                     clearInterval(timer); signout(); 
	      }
            } 
	}
	timer = setInterval(check, 0020); 
}
