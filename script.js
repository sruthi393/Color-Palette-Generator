const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generate');

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function generatePalette() {
  palette.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = randomColor();
    const div = document.createElement('div');
    div.classList.add('color');
    div.style.background = color;
    div.innerText = color;
    div.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`${color} copied to clipboard!`);
    });
    palette.appendChild(div);
  }
}

generateBtn.addEventListener('click', generatePalette);
generatePalette();
