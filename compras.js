// const lista = document.querySelectorAll('#prodAComp li');
// const input = document.querySelector('input');
// const prodAdd = document.querySelector('#prodAdd');
// const p = document.querySelector('p');
// const pao = document.querySelector('#pao');
// const prodAComp = document.querySelector('#prodAComp');

// pao.addEventListener('mouseover', () => {
//     pao.style.backgroundColor = 'red';
// });

// pao.addEventListener('mouseout', () => {
//     pao.style.backgroundColor = '';
// });

// input.addEventListener('input', () => {
//     console.log(input.value);
//     p.textContent = "Sua busca: " + input.value;
// });

// prodAdd.addEventListener('mousemove', () => {
//     alert('Carrinho de Compras');
//     let r = parseInt(Math.random() * 255);
//     let g = parseInt(Math.random() * 255);
//     let b = parseInt(Math.random() * 255);
//     let cor = `rgb(${r}, ${g}, ${b})`;
//     console.log(cor);
//     prodAdd.style.backgroundColor = cor;
// });

// // Função para mover item entre listas
// function moverItem(item, origem, destino) {
//     const novoItem = document.createElement('li');
//     novoItem.textContent = item.textContent;
//     destino.appendChild(novoItem);
//     item.remove();

//     // adicionar evento de volta
//     novoItem.addEventListener('click', () => {
//         moverItem(novoItem, destino, origem);
//     });
// }

// // mover da lista de compra para o carrinho
// lista.forEach((item) => {
//     item.addEventListener('click', () => {
//         moverItem(item, prodAComp, prodAdd);
//     });
// });

// lista.forEach((item) => {
//     item.addEventListener('click', (ev) => {
//         console.log(ev);
//         const li = ev.target;
//         const ul = li.parentElement;
//         if (ul === prodAComp) {
//             prodAdd.appendChild(li);
//         } else if (ul === prodAdd) {
//             prodAComp.appendChild(li);
//         }
//     });
// });