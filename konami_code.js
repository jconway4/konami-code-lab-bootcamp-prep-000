const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
 
function init() {
  const body = document.querySelector('body');
 
  body.addEventListener('keydown', function(event) {
  const key = parseInt(e.detail || e.which);
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
    
  });
}