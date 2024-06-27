const textInp = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultScrn = document.getElementById("result");


const isPalindrome = (inputText) => {
  const cleanStr = inputText.toLowerCase().replace(/[^A-Za-z0-9]/gi, '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

checkBtn.addEventListener('click', () => {
  let palResult;
  
  if (textInp.value === "") {
    alert("Please input a value.");
  } else {
    const inputText = textInp.value;
    palResult = isPalindrome(inputText);
  }
  resultScrn.innerText = palResult ? `${textInp.value} is a palindrome.` : `${textInp.value} is not a palindrome.`;
  resultScrn.classList.add('show-result');
});