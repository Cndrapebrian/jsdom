const judul = document.getElementById('judul');
judul.style.color = 'yellow';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Candra Pebrian';

const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++ ) {
    p[i].style.color = 'lightgreen';
    p[i].style.backgroundColor = 'grey';
}


const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'Ini diubah menggunakan JavaScript';


const p4 = document.querySelector('#b p');
p4.innerHTML = 'Ini tuh paragraf 4 saya ubah hhe';
p4.style.color = 'yellow';
p4.style.fontSize = '30px';



const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'lightblue';



