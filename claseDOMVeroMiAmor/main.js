const container = document.querySelector('#container');
const parents = Array.from(container.children);
const parentTwo = parents[1];
const kids = Array.from(parentTwo.children);
console.log(kids[0].textContent = 'Hijos');

//---------------------------------------------------------
const parent = document.querySelector('#parent');
const containerW = parent.parentElement;
console.log(containerW);


const child4 = document.querySelector('#child4');
const con = child4.closest('#container');
console.log(con);


//console.log('hola amoooor');

const box = document.querySelector('#box');



let html = `
<div>
<ul>
    <li>Manzana</li>
    <li>Pera</li>
    <li>Platano</li>
    <li>Melón</li>
</ul>
</div>
`;


// Creación de elementos
const div = document.createElement('div');
div.innerHTML = '<h3>Vero mi amor</h3>';
box.append(div);

// Eliminar elementos
const spanHi = document.querySelector('#hi');
spanHi.remove();

// Obtener value de propiedades HTML
const mySpanId = document.querySelector('#mySpanId');
console.log(mySpanId.id);
console.log(mySpanId.getAttribute('data-test'));

mySpanId.setAttribute('id', '12345');
console.log(mySpanId.id);

mySpanId.title = 'spanShido';

mySpanId.removeAttribute('title');

console.log(mySpanId.dataset.love);
mySpanId.dataset.anotherData = 'HOLAAA';
console.log(mySpanId.dataset);


// Manejo de clases.
box.classList.add('new-class');
box.classList.remove('style1');
box.classList.toggle('new-class2');

box.style.backgroundColor = 'black';
box.style.color = 'white';
box.style.padding = '10px';
box.style.border = '10px solid blue';