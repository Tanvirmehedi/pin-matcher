document.getElementById("key-pad").addEventListener("click", function (event) {
  const btnText = event.target.innerText;
  const display = document.getElementById("display");
  const displayValue = display.value;
  if (btnText <= 9) {
    display.value = displayValue + btnText;
  } else if (btnText == "C") {
    display.value = "";
  } else if (btnText == "<") {
    display.value = display.value.slice(0, -1);
  }
});

function generatePin() {
  const input = document.getElementById("generate-input");
  let makeFourNumber = pin() + "";
  if (makeFourNumber.length == 4) {
    input.value = makeFourNumber;
  } else {
    pin();
  }
}
// Pin
function pin() {
  const pinNumber = Math.round(Math.random() * 10000);
  return pinNumber;
}

function submit() {
  const input = document.getElementById("generate-input");
  const display = document.getElementById("display");
  const outputMach = document.getElementById("match");
  const outputNotMach = document.getElementById("not-match");
  if (input.value == display.value) {
    outputMach.classList = "show";
    outputNotMach.classList = "hide";
  } else {
    outputMach.classList = "hide";
    outputNotMach.classList = "show";
  }
}
