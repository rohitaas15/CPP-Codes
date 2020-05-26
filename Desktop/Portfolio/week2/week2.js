var items = document.querySelector('#items');
var form1 = document.querySelector('#form1');
var form2 = document.querySelector('#form2');
var button1 = document.getElementById('button1');
var button2 = document.querySelector('#button2');


items.addEventListener('click', removeItem);

form1.addEventListener('submit', sub1);
function sub1(e) {
  e.preventDefault();

  
  var new1 = document.getElementById('inp1').value;
  
  var li = document.createElement('li');
  //add class name to this li item
  li.className = 'list-group-item';
  // console.log(li);
  //add text node with input value
  li.appendChild(document.createTextNode(new1));

  var del = document.createElement('button');
  del.className = 'btn btn-danger btn-sm float-right delete';

  del.appendChild(document.createTextNode('X'));

  li.appendChild(del);
  items.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure ;(')) {
      var li = e.target.parentElement;

      items.removeChild(li);
    }
  }
}
