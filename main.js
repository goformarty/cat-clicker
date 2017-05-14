var clicks = 0;

var cat = document.getElementById('cat');
var score = document.getElementById('score');
score.innerHTML = clicks;

cat.addEventListener('click', function(){
	clicks ++;
    score.innerHTML = clicks;
}, false);
