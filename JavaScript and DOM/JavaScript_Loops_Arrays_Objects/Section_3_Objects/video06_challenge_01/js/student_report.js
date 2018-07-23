var message = '';
var response = '';
var endLoop = true;



//print function
function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

//does student exist
function isStudent(student) {
    return student.name === 'Nermin';
}


do {
    response = prompt('To search for a student, enter student name: ');
    if (response === 'quit') {
        endLoop = false;
    }
    if (students.find(isStudent(response))) {
        document.print("student found!")
    }

} while (endLoop);







// for (var i in students) {
//     message += '<h2>Student Name: ' + students[i].name + '</h2>';
//     message += '<p>Track: ' + students[i].track + '</p>';
//     message += '<p>Achivements: ' + students[i].achivements + '</p>';
//     message += '<p>Points: ' + students[i].points + '</p>';
// }

print(message);