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
  document.body.appendChild(x); 
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
    var x=480; var y=1264-512-64-32; 
    var w = image.naturalWidth; 
    var h = image.naturalHeight; 
    ctx.createImageData(1080, 1264-512-64); 
    var imgData = ctx.getImageData(0,144+512+64+32,1080,1264-512-64-32); 
    ctx.putImageData(imgData,0,144); 
  ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // white
  ctx.fillRect(x, y, 1080, 512+64+32); 
  ctx.fillStyle = "rgba(200,240,200,1.0)"; // blue
    ctx.fillRect(x,y,512+32,512+64); 
    ctx.drawImage(image,x+16,y+16,512,512);
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
