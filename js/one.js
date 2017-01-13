function flyjet () {

      var ended = false;

      flyjet.addEventListener('transitionend', function() {
        if (!ended) {
          ended = true;
          alert('Готово!');
        }
      });

      flyjet.classList.add('growing');
    }
function one() {
	document.write("<li class='flex-item'>1</li>");
}