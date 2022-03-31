 function dsaaaa() { 
	
    var canx=0, cany=0, canw=1080, canh=2400-112-112; // 2176
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
	  
	context.fillStyle = "white";
        context.fillRect(0, 0, 1080, 2176);
        
        var image1 = new Image();  // dp 144
        image1.setAttribute('crossOrigin', 'anonymous');
        image1.src = 'image/dp4.png';
        image1.onload = function (e) {
        var x = canx;
	var y = cany;
	var w = canw;
	var h = 144;
          context.drawImage(image1, x, y, w, h);
        }; 
	
        var image2 = new Image();  // text 144
        image2.setAttribute('crossOrigin', 'anonymous');
        image2.src = 'image/text4.png';
        image2.onload = function (e) {
	var x = canx;
	var y = canh-144-640+640;  // 1391+640=2032
	var w = canw;
	var h = 144;
          context.drawImage(image2, x, y, w, h);
        }; 
	  
	var timer;
	function check() { 
	var x = cordx;  var y = cordy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<1080 && y>2032 && y<2176) { 
                 clearInterval(timer); dsaaaaaa(); 
               }
             } 
	}
	timer = setInterval(check, 0100); 
	 
   }
