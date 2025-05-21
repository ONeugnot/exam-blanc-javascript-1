function calculerPrix(prix) {
	let reduc = 0.1;
	if (prix < 100) {
		return prix;
	} else {
		return prix - prix * reduc;
	}
}

console.log(calculerPrix(120)); // Résultat attendu : 108
console.log(calculerPrix(80)); // Résultat attendu : 80
