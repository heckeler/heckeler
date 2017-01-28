// document.body.innerHTML = `<h1>${d3.version}</h1>`;
var timeScale = d3.scaleTime()
	.domain([new Date(2016,0,1), new Date()])
	.range([0,100]);

	console.log(timeScale(new Date(2016, 6, 4)));
	console.log(timeScale(new Date(2016, 6, 3)));
	console.log(timeScale(new Date(2016, 1, 6)));
	console.log(timeScale.invert(50));