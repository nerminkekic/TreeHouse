$(document).ready(function () {
  var url = "data/rooms.json";
  $.getJSON(url, function (response) {
    var statusHTML = '<ul class="rooms">';
    $.each(response, function (index, officeRooms) {
      if (officeRooms.available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += officeRooms.room + '</li>';
    }); //end getJSON
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  });
}); // end ready 



$(document).ready(function () {
  var url = "data/employees.json";
  $.getJSON(url, function (response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    }); //end getJSON
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  });
}); // end ready 



// $(document).ready(function () {
//   $.getJSON('data/employees.json', function (data) {
//     var statusHTML = '<ul class="bulleted">';
//     $.each(data, function (index, employee) {
//       if (employee.inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employee.name + '</li>';
//     });
//     statusHTML += '</ul>';
//     $('#employeeList').html(statusHTML)
//   }); // end getJSON
// }); // end ready