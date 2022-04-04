function fileManager(op, file, size, data) { 
  if (op=="create") { 
   
    var filename=file.substring(0,file.indexOf("."));  
    var fileext=file.substring(file.indexOf(".")+1); 
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
    /* for(let i=0; i<(file.length)-4; i++) {  
      filename+=file.charAt(i);
    } 
    for(let i=(file.length)-3; i<(file.length); i++) {  
      fileext+=file.charAt(i);
    } */
    driveView[FAT1+fatno]=cluno; 
    for (i=0; i<32; i++) { 
      var fnl=filename.length; 
      if (i>=0 && i<fnl) {driveView[dir0+dirno*32+i]=filename.charCodeAt(i);} 
      if (i>=fnl && i<8) {driveView[dir0+dirno*32+i]=" ".charCodeAt(0);} 
      if (i>=8 && i<11) {driveView[dir0+dirno*32+i]=fileext.charCodeAt(i-8);} 
      if (i>=20 && i<22) {driveView[dir0+dirno*32+i]=cluho[i-20];} 
      if (i>=26 && i<28) {driveView[dir0+dirno*32+i]=clulo[i-26];} 
      if (i>=28 && i<32) {driveView[dir0+dirno*32+i]=fsize[i-28];} 
    }
    for (i=0; i<size; i++) { 
      driveView[cluster0+cluno*8*512+i]=data.charCodeAt(i); 
    }
  
  
  }
}
