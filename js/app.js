// document.body.innerHTML = `<h1>${d3.version}</h1>`;
var quantizeScale = d3.scaleQuantize()
	.domain([0,100])
	.range(['red','green','white','purple','yellow']);

console.log(quantizeScale(18));
console.log(quantizeScale(30));
console.log(quantizeScale(50));
console.log(quantizeScale(90));
console.log(quantizeScale(64));

console.log(quantizeScale.invertExtent('white'));