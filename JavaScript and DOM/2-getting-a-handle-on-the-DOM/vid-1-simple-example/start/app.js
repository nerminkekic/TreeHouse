// myList = document.getElementsByTagName('li');

// for (var i = 0; i < myList.length; i += 1) {
//     myList[i].style.color = 'orange'
// }

// const errorNotPurple = document.querySelectorAll('.error-not-purple');

// for (var i = 0; i < errorNotPurple.length; i += 1) {
//     errorNotPurple[i].style.color = 'red'
// }

// const evens = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < evens.length; i += 1) {
//     evens[i].style.backgroundColor = 'lightgray';
// }

let navLinks = document.querySelectorAll('#gallery > li > a');

for (var i = 0; i < navLinks.length; i += 1) {
    navLinks[i].style.color = 'red'
}

document.ge