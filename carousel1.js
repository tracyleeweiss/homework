var ul = document.getElementsByTagName('ul')[0]
ul.style['margin-left'] = '0px';
var prevbtn = document.getElementById('prev')
var nextbtn = document.getElementById('next')
var width = 600;
var numOfImages = document.getElementsByTagName('img').length; // Figure out how to get this

nextbtn.onclick = function() {
	var sum = parseInt(ul.style['margin-left']) - width; 
	if (sum === -numOfImages * width) { sum = 0 }
	ul.style['margin-left'] = sum + 'px'
};

prevbtn.onclick = function(){
	var originalPosition = parseInt(ul.style['margin-left']);
	if (originalPosition === 0) {originalPosition = -numOfImages * width} 
	ul.style['margin-left'] = originalPosition + width + 'px'
};