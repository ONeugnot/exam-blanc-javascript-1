function longueursMots(mots) {
	let res = [];

	for (const element of mots) {
		res.push(element.length);
	}
	return res;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
