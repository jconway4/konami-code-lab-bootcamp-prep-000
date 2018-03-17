const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  const body = document.querySelector('body');
  let i = 0;
  let codeChecker = [];
  
  body.addEventListener('keydown', function(e) {
      codeFunction(e);
      }
    )}

var codeFunction = function(e) {
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
};