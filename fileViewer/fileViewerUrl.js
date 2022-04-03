function fileViewerUrl(url) {  
  
  if () {  
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
