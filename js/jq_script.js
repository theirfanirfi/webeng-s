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

	$('#btn').click((e) => {

		$.ajax({
			url: "https://jsonplaceholder.typicode.com/todos/kkd/1",
			method: "get",

			success: (data) => {
				console.log(data);
			},
			error: (error) => {
				console.log('error: '+error);
			}
		});
// 		$.get('https://jsonplaceholder.typicode.com/todos/', function(data){
// $('#tbody').html("");

// 			data.map((obj) => {

// 			$('#tbody').append("<tr><td>"+obj.id+"</td><td>"+obj.title+"</td></tr>");

// 			})


// 		});
	})


});
