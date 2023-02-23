let students = [];


// function renderStudents(){
// tbody.innerHTML = "";

// 	for(let i =0;i<students.length; i++){
// 		let row = document.createElement("tr");
// 		let td1 = document.createElement("td");
// 		let td2 = document.createElement("td");

// 		let td3 = document.createElement("td");
// 		let button = document.createElement("button");
// 		td3.appendChild(button);

// 		button.innerHTML = "Delete";
// 		button.classList = ["btn btn-info"];

// 		button.addEventListener("click", () => deleteStudent(i));

// 		td1.innerHTML = students[i].rollNumber;
// 		row.appendChild(td1);

// 		$(td1).html(students[i].studentName);
// 		row.appendChild(td2);
// 		row.appendChild(td3);

// 		tbody.appendChild(row);
// 	}
// }


$(document).ready(function(){

var studentName = $('#studentName');
var rollNumber = $('#rollNumber');

$('#rollNumber').on('keyup', function(e){
	console.log(typeof($(this).val()));
	if(e.key == "Enter"){
		$(this).prev('label').text('valid input').css({
			"color": "green",
			"font-weight": "bold",
		});
	}
});

// $('#btn').on('', function(){
// 	students.push({
// 		"rollNumber": rollNumber.val(),
// 		"studentName": studentName.val(),
// 	});


// 	$('table').addClass('table-primary').removeClass('table-bordered');
// 	$('#tbody').append("<tr><td>"+rollNumber.val()+"</td><td>"+studentName.val()+"</td></tr>");
// })



});