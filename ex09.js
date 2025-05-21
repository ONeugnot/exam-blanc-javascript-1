function isNationalIDValid(name, age, zip, password) {
	if (
		typeof name == String &&
		typeof age == Number &&
		typeof zip == Number &&
		typeof password == Number &&
		name !== "" &&
		age >= 18 &&
		age <= 65 &&
		zip <= 99999 &&
		zip >= 0 &&
		password !== "azerty" &&
		password !== "qwerty" &&
		password !== 1234
	) {
		return true;
	} else {
		return false;
	}
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true
