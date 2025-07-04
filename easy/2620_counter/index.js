const createCounter = (n) => {
	let count = n;
	return function () {
		return count++;
	};
};

const calls = ['call', 'call', 'call', 'call', 'call'];
const counter = createCounter(-2);

const result = calls.map((c) => {
	if (c === 'call') return counter();
});

console.log(result);
