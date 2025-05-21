function extraireNoms(tableaux) {
	res = [];
	for (const element of tableaux) {
		res.push(element.nom);
	}
	return res;
}
console.log(
	extraireNoms([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
); // Résultat attendu : ["Alice", "Bob"]
