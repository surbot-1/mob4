function fileManager(op, file, buf, size) { 
  if (op=="create") {fileManagerCreate(file, buf, size);} 
  if (op=="open") {fileManagerOpen(buf, size, file);} 
} 
  
  function fileManagerCreate(file, buf, size) {
    var index = file.indexOf(".");
    var filename=file.substring(0, index);  
    var fileext=file.substring(index+1, index+4); 
    var filercv=""; 
      for (let i=0; i<11; i++) { 
      if (i>=0 && i<filename.length) {filercv+=filename.charAt(i);} 
      if (i>=filename.length && i<8) {filercv+=" ".charAt(0);} 
      if (i>=8 && i<11) {filercv+=fileext.charAt(i-8);} 
    } 
    var cluho=[]; 
    var clulo=[]; 
    var fsize=[]; 
    var fat=fatno; 
    var clust=cluno; 
    cluho[0]=clust&0x00FF0000; 
    cluho[0]=cluho[0]>>16;      
    cluho[1]=clust&0xFF000000; 
    cluho[1]=cluho[1]>>24;      
    clulo[0]=clust&0x000000FF;  
    clulo[1]=clust&0x0000FF00;
    clulo[1]=clulo[1]>>8;       
    fsize[0]=size&0x000000FF; 
    fsize[1]=size&0x0000FF00; 
    fsize[1]=fsize[1]>>8; 
    fsize[2]=size&0x00FF0000; 
    fsize[2]=fsize[2]>>16; 
    fsize[3]=size&0xFF000000; 
    fsize[3]=fsize[3]>>24;      
    
      for (i=0; i<32; i++) { 
      if (i>=0 && i<11) {driveView[dirct0+dirno*32+i]=filercv.charCodeAt(i);} 
      if (i>=20 && i<22) {driveView[dirct0+dirno*32+i]=cluho[i-20];} 
      if (i>=26 && i<28) {driveView[dirct0+dirno*32+i]=clulo[i-26];} 
      if (i>=28 && i<32) {driveView[dirct0+dirno*32+i]=fsize[i-28];} 
    } 
    
      var data = new Uint8Array(buf); 
      
      fat=fatno; clust=cluno; 
      var j=0; 
      for (let i=0; i<size; i++) { 
        driveView[clust0+clust*8*512+i]=data[i]; 
        if (i>=8*512*(1+j)) { 
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
  }
    
   /* var reader = new FileReader(); 
    reader.onload = function(e) { 
      var dataBuf = e.target.result; 
      var dataByte = new Uint8Array(dataBuf); 
      for (i=0; i<size; i++) { 
        driveView[clust0+cluno*8*512+i]=dataByte[i]; 
      } alert(dataByte); 
      driveView[fat1+fatno*4]=cluno; 
      fatno++; dirno++; cluno++; 
    }; 
    reader.readAsArrayBuffer(blob); */
   
  
  
  function fileManagerOpen(x, y, file) { 
    var index=file.indexOf(".");
    var filename=file.substring(0,index);  
    var fileext=file.substring(index+1,index+4); 
    var filercv=""; 
    var filedir=""; 
    var cluho=[]; 
    var clulo=[]; 
    var fsize=[];  
    for (let i=0; i<11; i++) { 
      if (i>=0 && i<filename.length) {filercv+=filename.charAt(i);} 
      if (i>=filename.length && i<8) {filercv+=" ".charAt(0);} 
      if (i>=8 && i<11) {filercv+=fileext.charAt(i-8);} 
    } 
    var b=false; 
    for (let i=0; i<dirno; i++) { 
      for (let j=0; j<32; j++) { 
        if (j>=0 && j<11) {filedir+=ascChar(driveView[dirct0+i*32+j]);} 
        if (j>=20 && j<22) {cluho[j-20]=driveView[dirct0+i*32+j];} 
        if (j>=26 && j<28) {clulo[j-26]=driveView[dirct0+i*32+j];} 
        if (j>=28 && j<32) {fsize[j-28]=driveView[dirct0+i*32+j];} 
      } 
      if (filedir==filercv) {b=true; break;} 
      else {filedir="";}
    } 
    if (b) { 
      var buf = new ArrayBuffer(4); 
      var view = new DataView(buf); 
      view.setUint8(0,cluho[1]); 
      view.setUint8(1,cluho[0]); 
      view.setUint8(2,clulo[1]); 
      view.setUint8(3,clulo[0]); 
      var clust=view.getUint32(0);   
      view.setUint8(0,fsize[3]); 
      view.setUint8(1,fsize[2]); 
      view.setUint8(2,fsize[1]); 
      view.setUint8(3,fsize[0]); 
      var size=view.getUint32(0);   
      fileViewerDrive(x,y,filedir,clust,size); 
    } 
  }
  

  
  
  
  
  








