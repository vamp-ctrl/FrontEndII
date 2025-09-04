// const lista = document.querySelectorAll('li');
// const input = document.querySelector('input');
// const p = document.querySelector('p');
// const pao = document.querySelector('#pao')

// pao.addEventListener('mouseover', () => {
//     pao.style.backgroundColor = 'red'
// });

// pao.addEventListener('mouseout', () => {
//     pao.style.backgroundColor = ''
// });


// input.addEventListener('input', () => {
//     p.textContent = "Sua busca: " + input.value;
// });

// const lista = document.querySelectorAll('li');
// const input = document.querySelector('input');
// const p = document.querySelector('p');
// const pao = document.querySelector('#pao');
// const proAdd = document.querySelector('#proAdd');

// // Função para adicionar item à lista de compras
// function addToCart(item) {
//     const cartList = document.querySelector('.listas ul');
//     const newItem = document.createElement('li');
//     newItem.textContent = item.textContent;
//     cartList.appendChild(newItem);
// }

// // Evento mouseover e mouseout para mudar cor do pão
// pao.addEventListener('mouseover', () => {
//     pao.style.backgroundColor = 'red';
// });

// pao.addEventListener('mouseout', () => {
//     pao.style.backgroundColor = '';
// });

// // Mostrar busca no parágrafo
// input.addEventListener('input', () => {
//     p.textContent = "Sua busca: " + input.value;
// });

// // Botão comprar
// document.getElementById('btnComprar').onclick = function() {
//     alert('Compra realizada com sucesso!');
// };


// proAdd.addEventListener('mousemove', () => {
//     alert('Mexeu o mouse sobre a div!');
// });

// proAdd.addEventListener('mouseover', () => {
//     const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     proAdd.style.backgroundColor = randomColor;
// });

// proAdd.addEventListener('mouseout', () => {
//     proAdd.style.backgroundColor = '';
// });

const input = document.querySelector('input');
const p = document.querySelector('p');
const pao = document.querySelector('#pao');
const proAdd = document.querySelector('#proAdd');
const divListas = document.querySelector('.listas'); // pega a div

// Função para adicionar item à lista de compras
function addToCart(item) {
    const cartList = document.querySelector('.listas ul');
    const newItem = document.createElement('li');
    newItem.textContent = item.textContent;
    cartList.appendChild(newItem);
}

// Evento mouseover e mouseout para mudar cor do pão
pao.addEventListener('mouseover', () => {
    pao.style.backgroundColor = 'red';
});

pao.addEventListener('mouseout', () => {
    pao.style.backgroundColor = '';
});

// Mostrar busca no parágrafo
input.addEventListener('input', () => {
    p.textContent = "Sua busca: " + input.value;
});

// Botão comprar
document.getElementById('btnComprar').onclick = function() {
    alert('Compra realizada com sucesso!');
};

// Quando passar em cima da UL com id proAdd → mostrar mensagem
proAdd.addEventListener('mouseover', () => {
    alert('Você passou o mouse sobre a lista de compras!');
});

// Quando passar em cima da DIV listas → mudar cor aleatória
divListas.addEventListener('mouseover', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    divListas.style.backgroundColor = randomColor;
});

divListas.addEventListener('mouseout', () => {
    divListas.style.backgroundColor = '';
});


// const input = document.querySelector('input');
// const p = document.querySelector('p');
// const pao = document.querySelector('#pao');
// const proAdd = document.querySelector('#proAdd'); // ID correto
// const divListas = document.querySelector('.listas');

// // Função para adicionar item à lista de compras
// function addToCart(item) {
//     const cartList = document.querySelector('.listas ul');
//     const newItem = document.createElement('li');
//     newItem.textContent = item.textContent;
//     cartList.appendChild(newItem);
// }

// // Evento mouseover e mouseout para mudar cor do pão
// pao.addEventListener('mouseover', () => {
//     pao.style.backgroundColor = 'red';
// });

// pao.addEventListener('mouseout', () => {
//     pao.style.backgroundColor = '';
// });

// // Mostrar busca no parágrafo
// input.addEventListener('input', () => {
//     p.textContent = "Sua busca: " + input.value;
// });

// // Botão comprar
// document.getElementById('btnComprar').onclick = function() {
//     alert('Compra realizada com sucesso!');
// };

// // Quando passar em cima da UL com id proAdd → mostrar mensagem
// proAdd.addEventListener('mouseover', () => {
//     console.log('Você passou o mouse sobre a lista de compras!');
// });

// // Quando mover o mouse dentro da UL → gerar cor aleatória
// proAdd.addEventListener('mousemove', () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     let cor = `rgb(${r}, ${g}, ${b})`;
//     proAdd.style.backgroundColor = cor;
// });

// // Resetar cor ao sair da UL
// proAdd.addEventListener('mouseout', () => {
//     proAdd.style.backgroundColor = '';
// });

// // Quando passar em cima da DIV listas → mudar cor aleatória
// divListas.addEventListener('mouseover', () => {
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     divListas.style.backgroundColor = randomColor;
// });

// divListas.addEventListener('mouseout', () => {
//     divListas.style.backgroundColor = '';
// });
