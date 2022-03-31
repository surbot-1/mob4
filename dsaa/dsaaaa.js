 function dsaaaa() { 
	
    var canx=0, cany=0, canw=1080, canh=2400-112-112; // 2176
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
	  
	context.fillStyle = "white";
        context.fillRect(0, 0, 1080, 2176);
        
        var image1 = new Image();  // dp 144
        image1.setAttribute('crossOrigin', 'anonymous');
        image1.src = 'image/dp8.png';
        image1.onload = function (e) {
        var x = canx;
	var y = cany;
	var w = canw;
	var h = 144;
          context.drawImage(image1, x, y, w, h);
        }; 
	 
	var image2 = new Image();  // dp 144
        image2.setAttribute('crossOrigin', 'anonymous');
        image2.src = 'image/dp9.png';
        image2.onload = function (e) {
        var x = canx;
	var y = cany+144;
	var w = canw;
	var h = 144;
          context.drawImage(image2, x, y, w, h);
        }; 
	 
	var image3 = new Image();  // dp 144
        image3.setAttribute('crossOrigin', 'anonymous');
        image3.src = 'image/dp9.png';
        image3.onload = function (e) {
        var x = canx;
	var y = cany+144*2;
	var w = canw;
	var h = 144;
          context.drawImage(image3, x, y, w, h);
        }; 
	 
	var image4 = new Image();  // dp 144
        image4.setAttribute('crossOrigin', 'anonymous');
        image4.src = 'image/dp9.png';
        image4.onload = function (e) {
        var x = canx;
	var y = cany+144*3;
	var w = canw;
	var h = 144;
          context.drawImage(image4, x, y, w, h);
        }; 
	 
	var image5 = new Image();  // dp 144
        image5.setAttribute('crossOrigin', 'anonymous');
        image5.src = 'image/dp9.png';
        image5.onload = function (e) {
        var x = canx;
	var y = cany+144*4;
	var w = canw;
	var h = 144;
          context.drawImage(image5, x, y, w, h);
        }; 
	
        var image10 = new Image();  // text 144
        image10.setAttribute('crossOrigin', 'anonymous');
        image10.src = 'image/dp10.png';
        image10.onload = function (e) {
	var x = canx;
	var y = canh-144-640+640;  // 1391+640=2032
	var w = canw;
	var h = 144;
          context.drawImage(image10, x, y, w, h);
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
