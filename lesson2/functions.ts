const add = (a: number, b: number) => {
	return a + b;
};

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
	console.log(s.toUpperCase());
});
