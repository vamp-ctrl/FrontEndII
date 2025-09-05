const lista = document.querySelectorAll('li');
const input = document.querySelector('input');
const prodAdd = document.querySelector('#prodAdd');
const p = document.querySelector('p');
const pao = document.querySelector('#pao')
const prodAComp = document.querySelector('#prodAComp')


// pao.addEventListener('mouseover', () => {
// pao.style.backgroundColor = 'red'
// });

// pao.addEventListener('mouseout', () => {
// pao.style.backgroundColor = ''
// });


// input.addEventListener('input', () => {
// console.log(input.value)
// p.textContent = "Sua busca: " + input.value;
// });

// prodAdd.addEventListener('mousemove', () => {
// // alert('Carrinho de Compras');
// let r = parseInt(Math.random() * 255);
// let g = parseInt(Math.random() * 255);
// let b = parseInt(Math.random() * 255);
// let cor = `rgb(${r}, ${g}, ${b})`
// console.log(cor);
// prodAdd.style.backgroundColor = cor;
// });

lista.forEach((item) => {
    // console.log(item.textContent);
    item.addEventListener('click', () => {
        const novoItem = document.createElement('li');
        novoItem.textContent = item.textContent;
        prodAdd.appendChild(novoItem);
        item.remove();
        novoItem.addEventListener('click', (ev) => {
            console.log(ev.target.innerText);
        });
    });
});

console.log(lista);