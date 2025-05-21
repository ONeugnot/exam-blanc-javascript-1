function inverserMots(phrase) {
	return phrase.split(" ").reverse().join(" ");
}

console.log(inverserMots("Bonjour tout le monde")); // Résultat attendu : "monde le tout Bonjour"
