function checkPalindrome() {
    const num = document.getElementById("numberInput").value;
    const forNum = num.replace(/\s/g, "").toLowerCase();
    const reverNum = forNum.split("").reverse().join("");
    if (formattedNumber === reverNum) {
      document.getElementById("result").textContent = "It is a palindrome!";
    } else {
      document.getElementById("result").textContent = "It is not a palindrome!";
    }
  }
  
