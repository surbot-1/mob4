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
       image.src=URL.createObjectURL(file); 
       image.onload = function (e) { 
    ctx.drawImage(image,0,200);
    URL.revokeObjectURL(image.src); 
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
