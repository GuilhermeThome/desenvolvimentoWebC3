const colors = [
    'red', 'blue', 'green', 'yellow', 'orange',
    'purple', 'pink', 'brown', 'cyan', 'magenta',

  ];
  
  const selectedColors = [];
  const maxAttempts = 3;
  let randomColor;
  let attempts = 0;
  
  function pegarCorAleatoria() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function createColorPalette() {
    const colorPalette = document.getElementById('color-palette');
    for (let i = 0; i < 10; i++) {
      const color = pegarCorAleatoria();
      selectedColors.push(color);
      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = color;
      colorBox.addEventListener('click', function() {
        document.getElementById('color-guess').value = color;
      });
      colorPalette.appendChild(colorBox);
    }
    randomColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];
  }
  
  function checkGuess() {
    const guessInput = document.getElementById('color-guess');
    const resultDisplay = document.getElementById('resultado');
  
    if (!guessInput || !resultDisplay) {
      console.error("Element not found!");
      return;
    }
  
    const guess = guessInput.value.toLowerCase();
    if (guess === randomColor) {
      document.body.style.backgroundColor = randomColor;
      resultDisplay.textContent = 'BOA! Você descobriu a cor!';
    } else {
      attempts++;
      if (attempts === maxAttempts) {
        resultDisplay.textContent = `Desculpe, você perdeu! A cor era ${randomColor}.`;
      } else {
        resultDisplay.textContent = `Tente novamente! ${maxAttempts - attempts} tentativa(s) restante(s).`;
      }
    }
  }  
  createColorPalette();