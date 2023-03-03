import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  const div = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Gerar novo CPF';
  cpfGerado.appendChild(div);
  div.appendChild(button);
  button.addEventListener('click', e => {
    cpfGerado.innerHTML = `${gera.geraNovoCpf()}`;
    cpfGerado.appendChild(div);
    div.appendChild(button);
  })
})();
