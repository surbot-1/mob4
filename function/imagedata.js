function saveImageData(x, y, w, h) { alert('1');
	var cnv = document.getElementById("canvas"); 
	var ctx = cnv.getContext('2d'); 
        // var imgData = ctx.createImageData(w, h); 
        var imgData = ctx.getImageData(x, y, w, h); alert('2');
        /* for (let i=0; i<w*4*h; i+=4) { 
		imageView[i+0]=imgData.data[i+0]; 
		imageView[i+1]=imgData.data[i+1]; 
		imageView[i+2]=imgData.data[i+2]; 
		imageView[i+3]=imgData.data[i+3]; 
	} */ aler((imgData.data[0])); // aler((imageView[0])); 
	ctx.putImageData(imgData, 500, 500); alert('3');
} 

function restoreImageData(x, y, w, h) {  
	var cnv = document.getElementById("canvas"); 
	var ctx = cnv.getContext('2d'); 
	var imgData = ctx.createImageData(w, h);  
	for (let i=0; i<w*4*h; i+=4) { 
		imgData.data[i+0]=imageView[i+0]; 
		imgData.data[i+1]=imageView[i+1]; 
		imgData.data[i+2]=imageView[i+2]; 
		imgData.data[i+3]=imageView[i+3]; 
	}
	ctx.putImageData(imgData, x, y); 
}
