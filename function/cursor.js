function showCursor(x, y) { 
    setInterval(f1, 1000); 
    function f1() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d'); 
        ctx.fillStyle = "blue"; 
        ctx.fillRect(x+ci, y+cj, 4, 48); 
	setTimeout( function() { 
	ctx.fillStyle = "white"; 
        ctx.fillRect(x+ci, y+cj, 4, 48); 
        }, 0500); 
      }	 
}

function writeCursor(x, y) {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(x+ci, y+cj, 4, 48);
        }
	
function updateCursor(x, y) {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(16+cip, 1448+cjp, 4, 48);
	ctx.fillStyle = "blue";
        ctx.fillRect(x+ci, y+cj, 4, 48);
        }
	
function clearCursor(x, y) {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        clearInterval(cursor);
        ctx.fillStyle = "white";
        ctx.fillRect(x+ci, y+cj, 4, 48);
        }
