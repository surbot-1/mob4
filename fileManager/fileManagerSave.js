function fileManagerSaveUrl(url) { alert('100');
    var index = url.indexOf('.'); 
    var filename = url.substring(0, index); 
    var fileext = url.substring(index+1, index+4); 
    var file = url; alert(file); 
   
    var oReq = new XMLHttpRequest(); 
    oReq.open("GET", url, true); 
    oReq.responseType = "arraybuffer"; 
    
    oReq.onload = function (oEvent) { 
      var buf = oReq.response; 
      var size = buf.byteLength; alert(size);
      fileManagerSave(file, buf, size); 
     }; 
    oReq.send(null); 
}
    
/* function fileManagerSaveStorage(url) { 
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
      function fileManagerSave(file, buf, size); 
     }; 
    oReq.send(null); 
} */
    
 function fileManagerSave(file, buf, size) {
    var index = file.indexOf(".");
    var filename=file.substring(0, index);  
    var fileext=file.substring(index+1, index+4); 
    var filercv=""; 
      for (let i=0; i<11; i++) { 
      if (i>=0 && i<filename.length) {filercv+=filename.charAt(i);} 
      if (i>=filename.length && i<8) {filercv+=" ".charAt(0);} 
      if (i>=8 && i<11) {filercv+=fileext.charAt(i-8);} 
    } alert(filercv.length); alert(fileext); alert(filercv.charAt(8));
    var cluho=[]; alert(filercv);
    var clulo=[]; 
    var fsize=[]; 
    var fat=cluno; 
    var clust=cluno; alert(clust); 
    cluho[0]=clust&0x00FF0000; 
    cluho[0]=cluho[0]>>16;      alert(cluho[0]);
    cluho[1]=clust&0xFF000000; 
    cluho[1]=cluho[1]>>24;      alert(cluho[1]);
    clulo[0]=clust&0x000000FF;  alert(clulo[0]);
    clulo[1]=clust&0x0000FF00;
    clulo[1]=clulo[1]>>8;       alert(clulo[1]);
    fsize[0]=size&0x000000FF; 
    fsize[1]=size&0x0000FF00; 
    fsize[1]=fsize[1]>>8; 
    fsize[2]=size&0x00FF0000; 
    fsize[2]=fsize[2]>>16; 
    fsize[3]=size&0xFF000000; 
    fsize[3]=fsize[3]>>24;      alert(fsize);
    alert ('3');
      for (i=0; i<32; i++) { 
      if (i>=0 && i<11) {driveView[dirct0+dirno*32+i]=filercv.charCodeAt(i);} 
      if (i>=20 && i<22) {driveView[dirct0+dirno*32+i]=cluho[i-20];} 
      if (i>=26 && i<28) {driveView[dirct0+dirno*32+i]=clulo[i-26];} 
      if (i>=28 && i<32) {driveView[dirct0+dirno*32+i]=fsize[i-28];} 
    } alert(driveView[dirct0+dirno*32+9]);
    
      // var buf  = new ArrayBuffer(size); 
      var data = new Uint8Array(buf); 
      alert(data); alert(fatno); alert(cluno); 
      fat=cluno; clust=cluno; 
      var j=0; 
      for (let i=0; i<size; i++) { 
        driveView[clust0+clust*8*512+i]=data[i]; 
        if (i>=8*512*(1+j)) { // alert(driveView[fat1+fat*4]); alert(clust); 
          var clustnext=clust+1; 
          cluho[0]=clustnext&0x000000FF; 
          cluho[1]=clustnext&0x0000FF00; 
          cluho[1]=cluho[1]>>8; 
          clulo[0]=clustnext&0x00FF0000; 
          clulo[0]=clulo[0]>>16; 
          clulo[1]=clustnext&0xFF000000; 
          clulo[1]=clulo[1]>>24; 
          driveView[fat1+fat*4+0]=cluho[0]; 
          driveView[fat1+fat*4+1]=cluho[1]; 
          driveView[fat1+fat*4+2]=clulo[0]; 
          driveView[fat1+fat*4+3]=clulo[1]; 
          fat++; clust++; j++; 
          fatno=fat; cluno=clust; 
        } 
      }  
      driveView[fat1+fatno*4+0]=0xFF; 
      driveView[fat1+fatno*4+1]=0xFF; 
      driveView[fat1+fatno*4+2]=0xFF; 
      driveView[fat1+fatno*4+3]=0xF8; 
      fatno++; dirno++; cluno++; 
      alert(fatno); alert(dirno); alert(cluno);
  } 
    

  
  
