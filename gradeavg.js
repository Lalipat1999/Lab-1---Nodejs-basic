function gradeAvg(number){
	
	if((number<=100)&&(number>=80))
	{
    	console.log( "Your grade are A");
	}
 	else if((number<=79)&&(number>=70))
	{
    	console.log( "Your grade are B");
	}
	else if((number<=69)&&(number>=60))
	{
    	console.log( "Your grade are C");
	}
	else if((number<=59)&&(number>=50))
	{
    	console.log( "Your grade are D");
	}
	else{
    	console.log( "Your grade are E");
	}



}
gradeAvg(98);