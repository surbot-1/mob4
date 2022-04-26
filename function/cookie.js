function setCookie(cname, cvalue, exdays) {
  const d = new Date(); alert(d); 
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); alert(d); 
  let expires = "expires="+d.toUTCString(); alert((d.toUTCString())); 
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; alert(document.cookie); 
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  let cval = getCookie(cname);
  if (cval != "") {
    alert("Welcome again " + cval);
  } else {
    cval = prompt("Please enter " + cname, "");
    if (cval != "" && cval != null) {
      setCookie(cname, cval, 365);
    }
  }
}

function deleteCookie(cname) {
  // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
  document.cookie = cname + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
}
