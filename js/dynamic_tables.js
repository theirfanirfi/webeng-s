var students = [];

var student_obj1 = {
	"rollNumber" : 1234,
	"studentName": "Uzair"
}

var student_obj2 = {
	"rollNumber" : 4321,
	"studentName": "Aans"
}

students.push(student_obj1);
students.push(student_obj2);

var tbody = document.getElementById("tbody");


function deleteStudent(index){
	students = students.splice(index, index);

	renderStudents();
}

function renderStudents(){
tbody.innerHTML = "";

	for(let i =0;i<students.length; i++){
		let row = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");

		let td3 = document.createElement("td");
		let button = document.createElement("button");
		td3.appendChild(button);

		button.innerHTML = "Delete";
		button.classList = ["btn btn-info"];

		button.addEventListener("click", () => deleteStudent(i));

		td1.innerHTML = students[i].rollNumber;
		row.appendChild(td1);

		td2.innerHTML = students[i].studentName;
		row.appendChild(td2);
		row.appendChild(td3);

		tbody.appendChild(row);
	}
}

renderStudents();



///form 




function addStudent() {
var rollNumber = document.getElementById('rollNumber');
var studentName = document.getElementById('studentName');



students.push({
	"rollNumber": rollNumber.value,
	"studentName": studentName.value
});

renderStudents();
// return false;
}
















