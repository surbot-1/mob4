function message() { 
  clearCursor(16,1448); 
  var kstr = readKeypad(0,1664,ktype); 
  var ptr = msgByte[28]; 
  if (kstr=="SHIFT") {  
    if (ktype==0 || ktype==2) { 
      ktype++; 
      drawKeypad(0,1664,ktype);
    } else if (ktype==1 || ktype==3) { 
      ktype--; 
      drawKeypad(0,1664,ktype); 
    }
  } else if (kstr=="?123") { 
    ktype=2; 
    drawKeypad(0,1664,ktype);
  } else if (kstr=="ABC") { 
    ktype=0; 
    drawKeypad(0,1664,ktype); 
  } else if (kstr=="BS") { 
    if (ptr==0) { 
    } else { 
      if (ci==0) {ci=24*23;} else {ci-=24;} 
      writeChar(16+ci,1448+cj,"font2448"," "); 
      ptr--; 
      msgByte[32]=0x00; 
      msgByte[28]=ptr; 
    }
  } else if (kstr=="SPACE") { 
    writeChar(16+ci,1448+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    msgByte[80+ptr]=" ".charCodeAt(0); 
    ptr++; 
    msgByte[32]=0x00;
    msgByte[28]=ptr; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,ktype); 
    writeChar(16+ci,1448+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    msgByte[80+ptr]=kchar.charCodeAt(0); 
    ptr++; 
    msgByte[32]=0x00;
    msgByte[28]=ptr; 
  } 
  
  if (kstr=="SHIFT" || kstr=="?123" || kstr=="ENTER") { 
  } else { 
    if (msgByte[28]==0) { 
      ktype=0; 
      drawKeypad(0,1664,ktype); 
    } else if (msgByte[28]!=0 && ktype==0) { 
      ktype=1; 
      drawKeypad(0,1664,ktype); 
    } 
  }
  
  writeCursor(16,1448); 
  showCursor(16,1448);
} 





