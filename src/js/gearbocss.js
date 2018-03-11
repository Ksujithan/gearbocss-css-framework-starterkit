//W3C

var content = document.querySelector('#nav-content');
var sidebarBody = document.querySelector('#nav-sidebar-body');
var button = document.querySelector('#nav-button');
var overlay = document.querySelector('#nav-overlay');
var activatedClass = 'nav-activated';

sidebarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.remove(activatedClass);
});

//---------------------------------------------------------------

var close = document.getElementsByClassName("alert-close");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}

//----------------------------------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
