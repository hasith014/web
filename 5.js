var num;
function multipleof3and5(num){
	var num = window.prompt("Enter a number: ");
	if (num%5==0 && num%3==0){
		document.write(num+" is multiple of 3 and 5");
	}	
	else{
		document.write(num+" is NOT multiple of 3 and 5");
	}
	
}