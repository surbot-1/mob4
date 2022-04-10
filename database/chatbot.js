function chatbot() { // alert(((["ABC"]).toString('utf8')));
	
var msgbot=[[[""],
	     ["Have a nice day. Thank you"]],
	    [["Hi"],
	     ["Hi"]],
	    [["Hello"],
	     ["Hello"]],
	    [["Bye"],
	     ["Bye Bye"]],
	    [["How are you?"], // ?
	     ["I am fine. you?"]],
	    [["I am fine"],
	     ["Good"]],
	    [["Good"],
	     ["Thank you"]],
	    [["Thank you"],
	     ["Welcome"]],
	    [["What are you doing?"], // ? 
	     ["Enjoying the real world. How beautiful this is!"]],
	    [["Good morning"],
	     ["Good morning"]],
	    [["Good evening"],
	     ["Good evening"]],
	    [["What is your name?"], // ? 
	     ["My name is sAy"]],
	    [["Tell me about yourself"],
	     ["I am sAy. I am a chatbot integrated with AI and ML."]],
	    [["What is your favourite color?"], // ? 
	     ["My favourite color is blue"]],
	    [["What is your age?"], // ? 
	     ["I am a software. I have been created when you installed the sAy app."]],
	    [["What is your country?"],
	     ["My country is India"]],
	    [["What is ai?"],
	     ["AI means Artificial Intelligence"]],
	    [["What is ml?"],
	     ["ML means Machine Learning"]],
	    [["Alphabet"],
	     ["ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"]],
	    [["Solar system"],
	     ["Solar system consists of a Sun and nine Planets"]],
	    [[""],
	     [""]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]]]; 
	
        // var mcnt=22; // msgbot.length
	
	var nbot=""; // = new Uint8Array(512); 
	var cbot=""; 
	var mbot=""; // = new Uint8Array(512); 
	var rbot=""; // = new Uint8Array(512); 
	var ptr = msgPtrj-1; 
	var minfo = msgView[ptr+0];
	var msize = msgView[ptr+28]; 
	var b=false;
	
	for(let i=0; i<msize; i++) { 
		var charcode=msgView[ptr+32+i]; 
		nbot += ascChar(charcode); 
	} 
	
	for(let i=0; i<nbot.length; i++) { 
		var charc=nbot.charCodeAt(i);
		if(i==0) { 
			if(charc>=65 && charc<=90){
			} else if(charc>=97 && charc<=112) {charc-=32;} 
		} else { 
			if (charc>=65 && charc<=90){ charc+=32;
			} else if(charc>=97 && charc<=112) { } 
		} 
		cbot += ascChar(charc); 
	} 
	
	if(cbot.charCodeAt((cbot.length)-1)==" ".charCodeAt(0)) {  
		cbot = cbot.slice(0, (cbot.length)-1); 
		mbot=cbot; 
	} else {mbot=cbot;} 
	
	for(let i=0; i<1; i++) { 
		check(); 
		if(b) {reply(); break;}
		mbot+="?"; 
		check(); 
		if(b) {reply(); break;} 
		if(!b) {reply(); break;}
	}
	
    function check() {
	for(let i=0; i<msgbot.length; i++) { 
		for(let j=0; j<1; j++) { 
			if(mbot==msgbot[i][0]) { 
			rbot=msgbot[i][1]; b=true; break; 
			} else {b=false;}
		} 
		if(b) {break;}
	} 
    }
	
    function reply() { 
	ptr++; 
	if(!b) {rbot=msgbot[0][1];} 
	rbot=rbot.toString(); 
	for(let i=0; i<rbot.length; i++) {  
		botArr[32+i]=rbot.charCodeAt(i); 
	} 
	botArr[0]=0x01;    // chatbot 
	botArr[28]=rbot.length; 
	//chatbot=true; 
    }
	
}

	
	
	
	
	
	
	
	
