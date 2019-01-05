import './styles.scss'

console.log('Loaded index.js')

window.addEventListener('load', draw());

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(300, 300, 150, 0, Math.PI * 2, false); 
    
    // ctx.arc(300, 300, 250, 0, Math.PI * 2, true);
    ctx.stroke();
  } 
}