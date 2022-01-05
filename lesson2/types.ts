// infered type with date
const today = new Date();
today.getDate();

// object type
const person = {
	name: "Jonny",
	age: 20,
};

// class type
class Color {
	private hex: string;

	constructor(hexColor: string) {
		this.hex = hexColor;
	}

	get() {
		return this.hex;
	}
}

const red = new Color("#ffaef9");
console.log(red.get());
