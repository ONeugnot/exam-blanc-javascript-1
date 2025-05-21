function isDivisibleBy3And5(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isDivisibleBy3And5(5)); // Output attendu : true
