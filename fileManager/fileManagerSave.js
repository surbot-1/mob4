function fileManagerSaveUrl(url) { 
    var index = url.indexOf('.'); 
    var filename = url.substring(0, index); 
    var fileext = url.substring(index+1, index+4); 
    var file = url; 
   
    var oReq = new XMLHttpRequest(); 
    oReq.open("GET", url, true); 
    oReq.responseType = "arraybuffer"; 
    
    oReq.onload = function (oEvent) { 
      var buf = oReq.response; 
      var size = buf.byteLength; 
      function fileManagerSave(file, buf, size)
     }; 
    oReq.send(null); 
}
  
  
