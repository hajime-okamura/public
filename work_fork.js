for (var i=1; i<21; i++ ) {
		
    if(i%3==0&&i%5==0) {
        console.log("FuzzBuzz");
       }
    else if(i%5==0) {
            console.log("Buzz");
        }
    else if(i%3==0) {	
               console.log("Fuzz");
        } 
    else if(i%3!=0||i%5!=0) {
        console.log(i);
    }
    }