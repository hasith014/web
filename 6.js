var num1,num2;
function findsmall(num1,num2){
	var num1 = window.prompt("Enter the first number: ");
	var num2 = window.prompt("Enter the second number: ");	
	if (num1<num2){
		document.write(num1+" is smaller value");
	}	
	else{
		document.write(num2+" is smaller value");
	}
}	
