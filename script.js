const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const numb = 400;

// console.log(Math.floor(Math.random() * colors.length));

for (let i = 0; i < numb; i++) {
	const sq = document.createElement("div");
	sq.classList.add("sqaure");
	container.appendChild(sq);

	sq.addEventListener("mouseover", function () {
		sq.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		sq.style.boxShadow = "0 0 2px #000";
	});

	sq.addEventListener("mouseout", function () {
		sq.style.backgroundColor = "";
		sq.style.boxShadow = "";
	});

	// const squares = document.querySelectorAll(".sqaure");

	// squares.forEach((square) => {
	// 	square.addEventListener("mouseover", function () {
	// 		square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	// 		square.style.boxShadow = "0 0 2px #000";
	// 	});
	// });

	// squares.forEach((square) => {
	// 	square.addEventListener("mouseout", function () {
	// 		square.style.backgroundColor = "";
	// 		square.style.boxShadow = "";
	// 	});
	// });
}
