const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const listUI = document.querySelector('ul');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUI.children;
const firstListItem = listUI.firstElementChild;
const lastListItem = listUI.lastElementChild;

// firstListItem.style.backgroundColor = 'lightskyblue';
// lastListItem.style.backgroundColor = 'lightsteelblue';


function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);

}
for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}


listUI.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }

    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      console.log(li);
      let prevLi = li.previousElementSibling;
      console.log(prevLi);
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }

    //Down button feature
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextElm = li.nextElementSibling;
      let ul = li.parentNode;
      ul.insertBefore(nextElm, li);
    }
  }
});



toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});