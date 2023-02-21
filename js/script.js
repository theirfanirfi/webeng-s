function getValuesAndSumThem(){
	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');
	// var result = document.getElementById('result');

	var num1_display = document.getElementById('num1_display');
	var num2_display = document.getElementById('num2_display');
	var operator = document.getElementById('operator');
	var sum = document.getElementById('sum');

	num1_display.innerHTML = "<h1>"+num1.value+"</h1>";
	operator.innerHTML = "<h1> + </h1>";

	num2_display.innerHTML = "<h1>"+num2.value+"</h1>";

	// console.log(num1.value, ' ', num2.value);
	var result = parseInt(num1.value)+parseInt(num2.value);

	sum.innerHTML = "<h1>"+result+"</h1>";

}


function changeDivValue(){
	var num1_display = document.getElementById('num1_display');
	var num2_display = document.getElementById('num2_display');

	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');

	num1_display.innerHTML = "<h1> First Number: "+num1.value+"</h1>";
	// operator.innerHTML = "<h1> + </h1>";

	num2_display.innerHTML = "<h1> Second Number: "+num2.value+"</h1>";
}