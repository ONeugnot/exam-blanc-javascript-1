function filtrerProduitsEnPromo(tableaux) {
	let res = [];
	for (const element of tableaux) {
		if (element.promo === true) {
			res.push(element);
		}
	}
	return res; 
}

console.log(
	filtrerProduitsEnPromo([
		{ nom: "Télévision", prix: 500, promo: true },
		{ nom: "Casque audio", prix: 100, promo: false },
		{ nom: "Smartphone", prix: 700, promo: true },
	])
);
// Résultat attendu : [{nom: "Télévision", prix: 500, promo: true}, {nom: "Smartphone", prix: 700, promo: true}]
