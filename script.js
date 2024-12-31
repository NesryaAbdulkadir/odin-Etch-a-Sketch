const container = document.querySelector(".container");

for (let i = 0; i < 255; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

const squares = document.querySelectorAll(".square");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const size = parseInt(
    prompt("Enter the size of the squares. 100 is the max")
  );

  if (size < 100) {
    squares.forEach((square) => {
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
    });
  } else {
    alert("The size must be less than 100");
  }
});

function colorSquare(event) {
  const square = event.target;
  square.style.backgroundColor = "black";
}

if (squares.length) {
  squares.forEach((square) => {
    square.addEventListener("mouseover", colorSquare);
  });
}
