function fileManager(op, file, blob, size) { alert('1');
  
  if (op=="create") { 
    var filename=file.substring(0,file.indexOf("."));  
    var fileext=file.substring(file.indexOf(".")+1); 
    var filercv=""; 
    for (let i=0; i<11; i++) { 
      if (i>=0 && i<filename.length) {filercv+=filename.charAt(i);} 
      if (i>=filename.length && i<8) {filercv+=" ".charAt(0);} 
      if (i>=8 && i<11) {filercv+=fileext.charAt(i-8);} 
    }
    var cluho=[]; 
    var clulo=[]; 
    var fsize=[]; 
    cluho[0]=cluno&0x00FF0000;     // lsb 
    cluho[0]=cluho[0]>>16; 
    cluho[1]=cluno&0xFF000000;     // msb 
    cluho[1]=cluho[1]>>24; 
    clulo[0]=cluno&0x000000FF;     // lsb
    clulo[1]=cluno&0x0000FF00;
    clulo[1]=clulo[1]>>8;          // msb 
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
    
    var reader = new FileReader(); 
    reader.addEventListener('loadend', () => { 
      var dataByte = new Uint8Array(reader.result);
      for (i=0; i<size; i++) { 
        driveView[clust0+cluno*8*512+i]=dataByte[i]; 
      } 
    }); 
    reader.readAsArrayBuffer(blob); 
    
    driveView[fat1+fatno*4]=cluno; 
    
    fatno++; dirno++; cluno++;
  } 
  
  if (op=="open") {  
    var filename=file.substring(0,file.indexOf("."));  
    var fileext=file.substring(file.indexOf(".")+1); 
    var filercv=""; 
    var filedir=""; 
    var cluho=[]; 
    var clulo=[]; 
    var fsize=[]; 
    var x=blob, 
    var y=size;
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
        if (filedir==filercv) {b=true;}
      } 
      if (b) {break;} 
    } 
    if (b) {
      var buf = new ArrayBuffer(4); 
      var view = new DataView(buf); 
      view.setUint8(0,cluho[1]); 
      view.setUint8(1,cluho[0]); 
      view.setUint8(2,clulo[1]); 
      view.setUint8(3,clulo[0]); 
      var cluno=view.getUint32(0); 
      view.setUint8(0,fsize[3]); 
      view.setUint8(1,fsize[2]); 
      view.setUint8(2,fsize[1]); 
      view.setUint8(3,fsize[0]); 
      var size=view.getUint32(0);
      fileViewerDrive(x,y,filedir,cluno,size); 
      break; 
    } 
  } 

}








