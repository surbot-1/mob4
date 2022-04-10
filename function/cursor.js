function writeCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d'); 
        ctx.fillStyle = "blue"; 
        ctx.fillRect(cx, cy, 4, 48); 
	setTimeout( function() { 
	ctx.fillStyle = "white"; 
        ctx.fillRect(cx, cy, 4, 48); 
        }, 0500); 
      }	 

function showCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(cx, cy, 4, 48);
        }
	
function updateCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(cxp, cyp, 4, 48);
	ctx.fillStyle = "blue";
        ctx.fillRect(cx, cy, 4, 48);
        }
	
function clrCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        clearInterval(cursor);
        ctx.fillStyle = "white";
        ctx.fillRect(cx, cy, 4, 48);
        }
