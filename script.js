//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  var squares = document.querySelectorAll(".square");

  squares.forEach(function (square) {
    square.addEventListener("mouseover", function () {
      squares.forEach(function (otherSquare) {
        if (otherSquare !== square) {
          otherSquare.style.backgroundColor = "#6F4E37"; // Coffee color
        }
      });
    });

    square.addEventListener("mouseout", function () {
      squares.forEach(function (otherSquare) {
        otherSquare.style.backgroundColor = "#E6E6FA"; // Lavender color
      });
    });
  });
});
