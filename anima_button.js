const footer = document.querySelector("footer");
const button = document.querySelector("footer button");
var result;

var promise = () => {
  return new Promise((terminou) => {

    // posicionar o footer com absolute
    footer.classList.toggle('footer-absolute');

    setTimeout(() => {

      // aumentar o footer
      footer.classList.toggle('footer-aument');

      // posicionar o button
      button.classList.toggle('button-posi');

      setTimeout(() => {

        // pegar a barra que cobre a palavra
        let barra = document.querySelector("#barra");

        // pegar o espaço em que a barra esta
        let bloco = document.querySelector("#bloco");

        // aumentar a barra
        barra.style = `

        width: 100%;
        `;
        setTimeout(() => {
          // tirar a palavra da tela
          button.classList.toggle('button-tirar');

          // aumentar muito o bloco
          bloco.style = `
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          `;

          // adicionar a animação
          barra.style = `
          animation: cobrir 2.5s ease-in-out both;
          `;
          
          // avisa quando tudo terminou
          setTimeout(()=>{
            terminou();
          },2500);

        }, 1000);
      }, 2000);
    }, 1);
  });
};
button.addEventListener("click", () => {
  promise().then(()=>{
  })
});

// function animacao_registrar(){

// }
