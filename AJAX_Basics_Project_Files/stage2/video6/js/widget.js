var xhr_room = new XMLHttpRequest();
xhr_room.onreadystatechange = function () {
  if (xhr_room.readyState === 4 && xhr_room.status === 200) {
    let officerooms = JSON.parse(xhr_room.responseText);
    var roomsHTML = '<ul class="rooms">';
    for (var i = 0; i < officerooms.length; i += 1) {
      if (officerooms[i].available === true) {
        roomsHTML += '<li class="empty">';
      } else {
        roomsHTML += '<li class="full">';
      }
      roomsHTML += officerooms[i].room;
      roomsHTML += '</li>';
      console.log(roomsHTML);
    }
    roomsHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomsHTML;
  }
};

xhr_room.open('GET', 'data/rooms.json');
xhr_room.send();


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();




// <
// ul class = "rooms" >
//   <
//   li class = "full" > 101 < /li> <
//   li class = "empty" > 102 < /li> <
//   li class = "full" > 103 < /li> <
//   li class = "full" > 104 < /li> <
//   li class = "empty" > 105 < /li> <
//   li class = "empty" > 106 < /li> <
//   /ul>