const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const main = document.querySelector('body');

  
function init() {
  let i = 0;
  let codeChecker = [];
  
  main.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[i]) {
      i++;
      codeChecker.push(key);
      
      if (codeChecker === code) {
        alert("Hurray!");
        i = 0;
        codeChecker = [];
      }
    }
  });
}