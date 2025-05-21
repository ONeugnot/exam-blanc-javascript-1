function isSumEven(a, b) {
	let res = a + b;
	if (res % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isSumEven(1, 3)); // Retourne: true
console.log(isSumEven(1, 0)); // Retourne: false
