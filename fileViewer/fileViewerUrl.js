function fileViewerUrl(url) {  
  
  var index = url.indexOf('.'); 
  var filename = url.substring(0, index); 
  var fileext = url.substring(index+1); 
  
  if (fileext=="bmp") {  
    var oReq = new XMLHttpRequest(); 
    oReq.open("GET", url, true); 
    oReq.responseType = "arraybuffer"; 
    
    oReq.onload = function (oEvent) { 
      var arrayBuffer = oReq.response; 
      if (arrayBuffer) { 
        var byteArray = new Uint8Array(arrayBuffer);  
      } 
    }; 
    
    oReq.send(null);
    
  }
}
