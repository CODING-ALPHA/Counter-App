"use strict";

let btn1El = document.querySelector(".decrease_btn");
let btn2El = document.querySelector(".increase_btn");
let output = document.querySelector(".display_number");
let reset = document.querySelector(".reset_btn");
output.textContent = 0;

btn1El.addEventListener("click", function () {
  let result = Number(output.textContent) - 1;
  output.textContent = result;
});

btn2El.addEventListener("click", function () {
  let result = Number(output.textContent) + 1;
  output.textContent = result;
});

reset.addEventListener("click", function () {
  output.textContent = 0;
});
