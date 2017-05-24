// Model
var catsModel = {
	'currentCat' : null,
	'adminShow' : false,
	'cat' : [
		{
			'name' : 'Fido',
			'url' : 'img/cat1.jpg',
			'score' : 0,
		},
		{
			'name' : 'Frank',
			'url' : 'img/cat2.jpg',
			'score' : 0,
		},
		{
			'name' : 'Grumpy Cat',
			'url' : 'img/cat3.jpg',
			'score' : 0,
		},
		{
			'name' : 'Eloise',
			'url' : 'img/cat4.jpg',
			'score' : 0,
		},
		{
			'name' : 'Hortensia',
			'url' : 'img/cat5.jpg',
			'score' : 0,
		},
		{
			'name' : 'Breadface',
			'url' : 'img/cat6.jpg',
			'score' : 0,
		},
		{
			'name' : 'Kitty',
			'url' : 'img/cat7.jpg',
			'score' : 0,
		},
	],
};


var clicks = 0;

var cat1 = document.getElementById('cat1');
var score = document.getElementById('score');
score.innerHTML = clicks;

cat1.addEventListener('click', function(){
	clicks ++;
    score.innerHTML = clicks;
}, false);
