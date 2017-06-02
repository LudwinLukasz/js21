function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return "Nieprawidłowe dane";
	}

	return a*h/2;
}

console.log(getTriangleArea(5, 10));
var triangle1Area = getTriangleArea(1, 2);
var	triangle2Area = getTriangleArea(20, 2);
var	triangle3Area= getTriangleArea(-2, 2);
console.log("triangle1: " + triangle1Area +", triangle2: " +  triangle2Area + ", triangle3: " + triangle3Area);
