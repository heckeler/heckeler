// document.body.innerHTML = `<h1>${d3.version}</h1>`;
var ordinalScale = d3.scaleOrdinal()
	.domain(['cold','cool','nice','okay','warm'])
	.range(['blue','lightblue','white','yellow','green']);

console.log(ordinalScale('cool'));
console.log(ordinalScale('warm'));
console.log(ordinalScale('okay'));