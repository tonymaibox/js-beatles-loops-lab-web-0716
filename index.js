function theBeatlesPlay (musicians, instruments) {
	var array = []
	for (var i = 0; i < musicians.length && i < instruments.length; i++) {
		array.push(`${musicians[i]} plays ${instruments[i]}`)
	}
	return array
}

function johnLennonFacts(facts){
	var array = []
	for (var i = 0; i < facts.length; i++) {
	array.push(`${facts[i]}!!!`)
	}
	return array
}

function iLoveTheBeatles(num){
	var array = []
	do { array.push("I love the Beatles!"); num++;
	}
	while (num < 15);
	return array
}