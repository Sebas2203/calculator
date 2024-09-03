// CALCULATOR PROGRAM
const display = document.getElementById("display");

const appendDisplay = (input) => (display.value += input);

const clearDisplay = () => (display.value = "");

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
