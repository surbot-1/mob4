function message() { 
  var kstr=readKeypad(0,1664,0); 
  if (kstr=="SIFT") { 
  } else if (kstr=="BS") { 
  } else if (kstr=="?123") { 
  } else if (kstr=="SPACE") { 
    writeChar(16+ci,1448+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*16) {ci=0; cj=0;} 
    msgView[msgPtrj+msgPtri]=" ".charCodeAt(0); 
    msgPtri++; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,0); 
    writeChar(16+ci,1448+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*16) {ci=0; cj=0;} 
    msgView[msgPtrj+msgPtri]=kchar.charCodeAt(0); 
    msgPtri++; 
  }
} 
