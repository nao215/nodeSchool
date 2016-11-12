const input = process.argv;
input.splice(0, 2);

const sum = (ary) => {
	let answer = 0;
	ary.forEach((el) => {
		answer += Number(el);
	})
	return answer;
};

console.log(sum(input));
