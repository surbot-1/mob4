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
    // var imgData = ctx.createImageData(1080, 1264-32-512-64+8); 
    var imgData = ctx.getImageData(0,144+512+64+8,1080,1264-32-512-64); 
    ctx.putImageData(imgData,0,144); 
    imgData = ctx.getImageData(0,1408-512-64-32,1080,512+64+8); 
    for (let i=0; i<1080*4*(1264-32-512-64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
    } 
    appPtr += (512+64+8);
  ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // white
  ctx.fillRect(0, y, 1080, 512+64+32); 
  ctx.fillStyle = "rgba(200,240,200,1.0)"; // blue
    ctx.fillRect(x,y,512+16,512+64); 
    ctx.drawImage(image,x+8,y+8,512,512);
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
