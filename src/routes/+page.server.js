export function load() {
	const exampleData = [];
	let prevY = 0;
	for (let i = 0; i < 100000; i += 1) {
		const y = prevY + (Math.random() * 2 - 1);
		exampleData.push({ x: i, y });
		prevY = y;
	}
	return { exampleData };
}
