function genererDescriptions(tableaux) {
	let res = [];
	for (let i = 0; i < tableaux.length; i++) {
		res.push(`${tableaux[i].nom} a ${tableaux[i].age}.`);
	}
	return res;
}

console.log(
	genererDescriptions([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
);
// Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]
