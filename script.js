const btns = document.querySelectorAll(".setVal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.innerHTML;
      const input = document.querySelector("input");
      input.value += val;
    });
  });
  
  const equal = document.querySelector(".setRes");
  const input = document.querySelector("input");
  
  equal.addEventListener("click", () => {
    calculateResult();
  });
  
  function calculateResult() {
    let formatInput = input.value.replace("÷", "/").replace("x", "*");
    formatInput = formatInput.replace(/(\d+)%/g, (match, number) => {
      return `${number} / 100`;
    });
  
    try {
      let result = eval(formatInput);
  
      if (result.toString().includes(".")) {
        result = parseFloat(result.toFixed(10));
      }
  
      input.value = result;
    } catch (error) {
      console.error("Invalid input:", error);
      input.value = "Error";
    }
  }
  
  
  document.addEventListener("keydown", (e) => {
    const key = e.key;
  
    if (/[0-9+\-*/.%]/.test(key)) {
      input.value += key;
    }
  
    if (key === "Enter") {
      calculateResult();
    }
  
    if (key === "Backspace") {
      input.value = input.value.slice(0, -1);
    }
  
    if (key === "Enter" || key === "Backspace") {
      e.preventDefault();
    }
    if (key === "Delete") {
        input.value = "";
        e.preventDefault(); 
      }
  });
  
  const delBtn = document.querySelector(".delete");
  delBtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
  });
  
  // Reset button
  const reset = document.querySelector(".reset");
  reset.addEventListener("click", () => {
    input.value = "";
  });
  