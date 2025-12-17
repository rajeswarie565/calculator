const display = document.getElementById("display");

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch {
    display.value = "Error";
  }
}

// Scientific operations
function scientific(func) {
  try {
    let val = parseFloat(display.value);

    switch (func) {
      case 'sin': display.value = Math.sin(val * Math.PI / 180).toFixed(6); break;
      case 'cos': display.value = Math.cos(val * Math.PI / 180).toFixed(6); break;
      case 'tan': display.value = Math.tan(val * Math.PI / 180).toFixed(6); break;
      case 'sqrt': display.value = Math.sqrt(val).toFixed(6); break;
      case 'log': display.value = Math.log10(val).toFixed(6); break;
      case 'exp': display.value = Math.exp(val).toFixed(6); break;
      case 'pow': display.value = Math.pow(val, 2).toFixed(6); break;
      case 'pi': display.value = Math.PI.toFixed(6); break;
    }
  } catch {
    display.value = "Error";
  }
}
