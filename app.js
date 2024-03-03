let displayValue = "";
let $input = document.querySelector(".input input");

function showdisplay(value) {
  displayValue += value;
  $input.value = displayValue;
}

function cleardisplay() {
  displayValue = "";
  $input.value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    if (isNaN(displayValue)) {
      displayValue = "Error";
    }
    $input.value = displayValue;
  } catch (error) {
    $input.value = "Error";
  }
}

document.getElementById("clear").addEventListener("click", () => {
  cleardisplay();
});

document.getElementById("evaluate").addEventListener("click", () => {
  calculate();
});
