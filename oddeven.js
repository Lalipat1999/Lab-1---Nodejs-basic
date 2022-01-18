function oddeven(x){
	if(x%2==0)
		return 0
	else
		return 1
}

let s=oddeven(102)
if(s==0)
	console.log("This number is even number")
else
	console.log("This number is odd number")