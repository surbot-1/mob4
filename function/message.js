function message() { 
  var kstr=readKeypad(0,1664,ktype); 
  if (kstr=="SHIFT") { 
    if (ktype==0 || ktype==2) { 
      ktype++; 
      drawdKeypad(0,1664,ktype);
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
  } else if (kstr=="SPACE") { 
    writeChar(16+ci,1448+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*16) {ci=0; cj=0;} 
    msgView[msgPtrj+msgPtri]=" ".charCodeAt(0); 
    msgPtri++; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,ktype); 
    writeChar(16+ci,1448+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*16) {ci=0; cj=0;} 
    msgView[msgPtrj+msgPtri]=kchar.charCodeAt(0); 
    msgPtri++; 
  }
} 
