 function dsaaaaaa() { 
	 
    cursor = setInterval(writeCursor, 1000);
    var cx=0, cy=0, cw=1080, ch=2400-112-112; // 2176
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext('2d');
	  
	ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1080, 2400);
	   
        var image1 = new Image();  // dp 144
        image1.setAttribute('crossOrigin', 'anonymous');
        image1.src = 'image/dp4.png'; 
        image1.onload = function (e) {
        var x = cx;
        var y = cy;
        var w = cw;
        var h = 144;
          ctx.drawImage(image1, 0, 0,1080,144);
        }; 
	  
	var image2 = new Image();  // text 144
        image2.setAttribute('crossOrigin', 'anonymous');
        image2.src = 'image/text5.png';
        image2.onload = function (e) {
	var x = cx;
	var y = ch-144-640;  // 1392
	var w = cw;
	var h = 144;
          ctx.drawImage(image2, x, y, w, h);
        };
	  
	var image3 = new Image();  // keypad 640
        image3.setAttribute('crossOrigin', 'anonymous');
        image3.src = 'image/keypad1.png';
        image3.onload = function (e) { 
	var x = cx;
	var y = ch-640;    // 1536
	var w = cw;
	var h = 640;
          ctx.drawImage(image3, x, y, w, h); 
        };
	  
   var timer;
   function check() { 
    var x = cordx;  var y = cordy; 
    var tend = cordt;  
    if (tend == 3) { cordt = 0;
	   if (x>0 && x<72 && y>0 && y<144) {          // back
           clearInterval(timer); clrCursor(); dsaaaa();
       } else if (x>72 && x<108 && y>0 && y<144) {  // dp
       } else if (x>108 && x<740 && y>0 && y<144) {  // space
       } else if (x>740 && x<800 && y>0 && y<144) {  // video call
       } else if (x>880 && x<924 && y>0 && y<144) {  // voice call
       } else if (x>1000 && x<1040 && y>0 && y<144) {  // option
       } else if (x>0 && x<1080 && y>144 && y<1392) {  // message_field
	       
       } else if (x>0 && x<128 && y>1392 && y<1536) { // emoji
       } else if (x>128 && x<800 && y>1392 && y<1536) { // type_field
       } else if (x>800 && x<932 && y>1392 && y<1536) { // attachment
       } else if (x>932 && x<1080 && y>1392 && y<1536) { // send
	       message();
       } else if (x>0 && x<1080 && y>1536 && y<2176) {  // keypad
	       keypad(); 
       }
      }
     }
     timer= setInterval(check, 0100);
	    
 }
