function writeCursor() { 
    setInterval(f1, 1000); 
    function f1() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d'); 
        ctx.fillStyle = "blue"; 
        ctx.fillRect(16+ci, 1448+cj, 4, 48); 
	setTimeout( function() { 
	ctx.fillStyle = "white"; 
        ctx.fillRect(16+ci, 1448+cj, 4, 48); 
        }, 0500); 
      }	 
}

function showCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(16+ci, 1448+cj, 4, 48);
        }
	
function updateCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(16+cip, 1448+cjp, 4, 48);
	ctx.fillStyle = "blue";
        ctx.fillRect(16+ci, 1448+cj, 4, 48);
        }
	
function clearCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        clearInterval(cursor);
        ctx.fillStyle = "white";
        ctx.fillRect(16+ci, 1448+cj, 4, 48);
        }
