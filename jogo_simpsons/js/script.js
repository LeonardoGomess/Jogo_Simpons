const homer = document.querySelector('.homer');
const barril = document.querySelector('.barril');
const rosquinha = document.querySelector('.rosquinha');
const gameboard = document.querySelector('.game-board');

const jump = () => {

  homer.classList.add('jump');

  setTimeout(() => {
    homer.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const barrilPosition = barril.offsetLeft;

  const homerPosition = +window.getComputedStyle(homer, rosquinha).bottom.replace('px', '');

  if (barrilPosition <= 120 && barrilPosition > 0 && homerPosition < 80) {

    barril.style.animation = 'none';
    barril.style.left = `${barrilPosition}px`;

    homer.style.animation = 'none';
    homer.style.bottom = `${homerPosition}px`;

    homer.src = '../images/game-over.png';
    homer.style.width = '175px';
    homer.style.marginLeft = '150px';

    rosquinha.src = '../images/over.gif';
    rosquinha.style.width = '500px';
    rosquinha.style.left = '36%';
    rosquinha.style.marginTop = '190px';


    let btn = document.createElement('button');

    let text = document.createTextNode('Reiniciar jogo');
    btn.appendChild(text);
    btn.classList.add("btn-iniciar");

    btn.onclick = function () {
      window.location.reload();
    }

    gameboard.appendChild(btn)
    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);