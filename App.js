var btn = document.querySelectorAll('#movie-list .delete');
var list = document.querySelector('#movie-list ul');

// DELETE

list.addEventListener('click',function(e) {
    if(e.target.className == 'delete'){
        var li = e.target.parentElement;
        list.removeChild(li);
    }
});

// ADD

var form = document.querySelector('#add-movie');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	var value = form.querySelector('input[type="text"]').value;

	var li = document.createElement('li');
	var name = document.createElement('span');
	var del = document.createElement('span');

	name.textContent = value;
	del.textContent = 'Delete';

  name.classList.add('name');
  del.classList.add('delete');
	li.appendChild(name);
	li.appendChild(del);
	list.appendChild(li);
});

// HIDE
var res=document.querySelector("#hide");
res.addEventListener('change',function(e){
  if(res.checked){
    list.style.display = "none";
  }
  else {
    list.style.display = "initial";
  }
});

// SEARCH

var search = document.forms['search-movies'].querySelector('input');
search.addEventListener('keyup',function(e) {
    var t = e.target.value.toLowerCase();
    var m = list.getElementsByTagName('li');
    Array.from(m).forEach(function(m) {
        var a = m.firstElementChild.textContent;
        if(a.toLowerCase().indexOf(t) > -1) {
            m.style.display = 'block';
        }
        else{
            m.style.display = 'none';
        }
    })
});
