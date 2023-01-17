// Manipulation part 1

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>CndraPbrn</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Semua Bisa Karena Terbiasa';




// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'salmon';




// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');



// const p2 = document.querySelector('.p2');





// Manipulation part 2

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

pBaru.appendChild(teksPBaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'black';
liBaru.style.backgroundColor = 'black';
h2Baru.style.backgroundColor = 'black';


