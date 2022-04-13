function attachment() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d');
  var x; 
         openFile(); 
function openFile() {
  x = document.createElement("INPUT");
  x.setAttribute("type", "file"); 
  x.setAttribute("id", "file"); 
  // x.setAttribute("style", "display:none"); 
  // x.style.display='none';  
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
    var x=500; var y=1408-512-64-32; 
    ctx.fillStyle = "rgba(200,240,200,1.0)"; // blue
    ctx.fillRect(x,y,512+32,512+64); 
    var w = image.naturalWidth; 
    var h = image.naturalHeight; 
    ctx.drawImage(image,x+16,y+16,512,512);
    window.URL.revokeObjectURL(url); 
    document.body.removeChild(x); 
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
     document.body.removeChild(x);  
  }; 
  reader.readAsArrayBuffer(file) */ 
} 
document.getElementById("file").click(); 
}
