function attachment() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d');
  var ele; 
         openFile(); 
function openFile() {
  ele = document.createElement("INPUT");
  ele.setAttribute("type", "file"); 
  ele.setAttribute("id", "file"); 
  // ele.setAttribute("style", "display:none"); 
  // ele.style.display='none';  
  document.body.appendChild(ele); 
  // document.getElementById("file").click(); 
  var element = document.getElementById("file");
  element.addEventListener("change", readFile);
}  
	
function readFile(e) { 
  var file = e.target.files[0]; 
  if (!file) {return;} 
  var name = file.name; 
  var index = name.indexOf("."); 
  var fname = name.substring(0,index);
  var fext = name.substring(index+1,index+4);  
  if (fext=="jpg"||fext=="jpe"||fext=="png"||fext=="bmp") { 
       var reader = new FileReader(); 
       var image = new Image(); 
       var url = window.URL.createObjectURL(file); 
       image.src = url; 
       image.onload = function (e) { 
    var x=536; var y=1408-512-64-32; 
    var w = image.naturalWidth; 
    var h = image.naturalHeight; 
    if (w<512) {h=h*(512/w); w=512;} 
    else if (w>512) {h=h*(512/w); w=512;} 
    x=536; var y=1408-h-64-32; 
    var imgData = ctx.createImageData(1080, 1264-32-h-64+8); 
    imgData = ctx.getImageData(0,144+h+64+8,1080,1264-32-h-64); 
    ctx.putImageData(imgData,0,144); 
  ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // white
  ctx.fillRect(0, y, 1080, h+64+32); 
  ctx.fillStyle = "rgba(200,240,200,1.0)"; // blue
    ctx.fillRect(x,y,w+16,h+64); 
    ctx.drawImage(image,x+8,y+8,w,h); 
    var time = getTime("12h"); 
    writecStr(x+64+168,y+h+24,432,128,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    imgData = ctx.getImageData(0,1408-h-64-32,1080,h+64+8); 
    for (let i=0; i<1080*4*(1264-32-h-64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
    } 
    var mptr=appPtr; 
    appPtr += (h+64+8); 
  var mx=1080-w-32-16; var my=mptr; 
  var mw=w+32; var mh=h+64; 
  dirView[dirPtr*32+0]=msgid&0x00FF; 
  dirView[dirPtr*32+1]=(msgid&0xFF00)>>8; 
  dirView[dirPtr*32+16]=mx&0x000000FF; 
  dirView[dirPtr*32+17]=(mx&0x0000FF00)>>8; 
  dirView[dirPtr*32+18]=(mx&0x00FF0000)>>16; 
  dirView[dirPtr*32+19]=(mx&0xFF000000)>>24; 
  dirView[dirPtr*32+20]=my&0x000000FF; 
  dirView[dirPtr*32+21]=(my&0x0000FF00)>>8; 
  dirView[dirPtr*32+22]=(my&0x00FF0000)>>16; 
  dirView[dirPtr*32+23]=(my&0xFF000000)>>24; 
  dirView[dirPtr*32+24]=mw&0x00FF; 
  dirView[dirPtr*32+25]=(mw&0xFF00)>>8; 
  dirView[dirPtr*32+26]=mh&0x00FF; 
  dirView[dirPtr*32+27]=(mh&0xFF00)>>8; 
  dirView[dirPtr*32+28]=mw*4*mh&0x000000FF; 
  dirView[dirPtr*32+29]=(mw*4*mh&0x0000FF00)>>8; 
  dirView[dirPtr*32+30]=(mw*4*mh&0x00FF0000)>>16; 
  dirView[dirPtr*32+31]=(mw*4*mh&0xFF000000)>>24; 
  dirPtr++; 
    window.URL.revokeObjectURL(url); 
    document.body.removeChild(ele); 
    };  
  }
 /* var reader = new FileReader(); 
  reader.onload = function(e) { 
     var buf = e.target.result; 
     var view = new Uint8Array(buf); 
     var size = buf.byteLength; 
     drawImageBmp(540, 512, buf, size); 
     fileManagerSave("image.bmp",buf,size); 
     // fileManagerOpen(540,800,"image.bmp"); 
     document.body.removeChild(ele);  
  }; 
  reader.readAsArrayBuffer(file) */ 
} 
document.getElementById("file").click(); 
}

function attachment2() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d');
  var ele; 
         openFile(); 
function openFile() {
  ele = document.createElement("INPUT");
  ele.setAttribute("type", "file"); 
  ele.setAttribute("id", "file"); 
  // ele.setAttribute("style", "display:none"); 
  // ele.style.display='none';  
  document.body.appendChild(ele); 
  // document.getElementById("file").click(); 
  var element = document.getElementById("file");
  element.addEventListener("change", readFile);
}  
	
function readFile(e) { 
  var file = e.target.files[0]; 
  if (!file) {return;} 
  var name = file.name; 
  var index = name.indexOf("."); 
  var fname = name.substring(0,index);
  var fext = name.substring(index+1,index+4);  
  if (fext=="jpg"||fext=="jpe"||fext=="png"||fext=="bmp") { 
       var reader = new FileReader(); 
       var image = new Image(); 
       var url = window.URL.createObjectURL(file); 
       image.src = url; 
       image.onload = function (e) { 
    var x=536; var y=2048-512-64-32; 
    var w = image.naturalWidth; 
    var h = image.naturalHeight; 
    if (w<512) {h=h*(512/w); w=512;} 
    else if (w>512) {h=h*(512/w); w=512;} 
    x=536; var y=2048-h-64-32; 
    var imgData = ctx.createImageData(1080, 2048-32-h-64+8); 
    imgData = ctx.getImageData(0,144+h+64+8,1080,2048-32-h-64); 
    ctx.putImageData(imgData,0,144); 
  ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // white
  ctx.fillRect(0, y, 1080, h+64+32); 
  ctx.fillStyle = "rgba(200,240,200,1.0)"; // blue
    ctx.fillRect(x,y,w+16,h+64); 
    ctx.drawImage(image,x+8,y+8,w,h); 
    var time = getTime("12h"); 
    writecStr(x+64+168,y+h+24,432,128,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    imgData = ctx.getImageData(0,1408-h-64-32,1080,h+64+8); 
    for (let i=0; i<1080*4*(2048-32-h-64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
    } 
    var mptr=appPtr; 
    appPtr += (h+64+8); 
  var mx=1080-w-32-16; var my=mptr; 
  var mw=w+32; var mh=h+64; 
  dirView[dirPtr*32+0]=msgid&0x00FF; 
  dirView[dirPtr*32+1]=(msgid&0xFF00)>>8; 
  dirView[dirPtr*32+16]=mx&0x000000FF; 
  dirView[dirPtr*32+17]=(mx&0x0000FF00)>>8; 
  dirView[dirPtr*32+18]=(mx&0x00FF0000)>>16; 
  dirView[dirPtr*32+19]=(mx&0xFF000000)>>24; 
  dirView[dirPtr*32+20]=my&0x000000FF; 
  dirView[dirPtr*32+21]=(my&0x0000FF00)>>8; 
  dirView[dirPtr*32+22]=(my&0x00FF0000)>>16; 
  dirView[dirPtr*32+23]=(my&0xFF000000)>>24; 
  dirView[dirPtr*32+24]=mw&0x00FF; 
  dirView[dirPtr*32+25]=(mw&0xFF00)>>8; 
  dirView[dirPtr*32+26]=mh&0x00FF; 
  dirView[dirPtr*32+27]=(mh&0xFF00)>>8; 
  dirView[dirPtr*32+28]=mw*4*mh&0x000000FF; 
  dirView[dirPtr*32+29]=(mw*4*mh&0x0000FF00)>>8; 
  dirView[dirPtr*32+30]=(mw*4*mh&0x00FF0000)>>16; 
  dirView[dirPtr*32+31]=(mw*4*mh&0xFF000000)>>24; 
  dirPtr++; 
    window.URL.revokeObjectURL(url); 
    document.body.removeChild(ele); 
    };  
  }
 /* var reader = new FileReader(); 
  reader.onload = function(e) { 
     var buf = e.target.result; 
     var view = new Uint8Array(buf); 
     var size = buf.byteLength; 
     drawImageBmp(540, 512, buf, size); 
     fileManagerSave("image.bmp",buf,size); 
     // fileManagerOpen(540,800,"image.bmp"); 
     document.body.removeChild(ele);  
  }; 
  reader.readAsArrayBuffer(file) */ 
} 
document.getElementById("file").click(); 
}
