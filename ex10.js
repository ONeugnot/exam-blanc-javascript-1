function countVowels(mots) {
	let nbvoyelles = 0;
	let voyelles = ["a", "e", "i", "o", "u", "y"];
	for (const lettre of mots) {
		if (voyelles.includes(lettre)) {
			nbvoyelles++;
		}
	}
	return nbvoyelles;
}
console.log(countVowels("javascript")); // Retour attendu: 3
