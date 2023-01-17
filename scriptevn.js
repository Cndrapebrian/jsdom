// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
// p2.style.backgroundColor = 'Black';
// }

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'Black';
//     }


// const p2 =document.querySelector('section#b p');
// p2.onclick = ubahWarnaP2;


// const P4 = document.querySelector('section#b p');
// P4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLIBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(teksLIBaru);
//     ul.appendChild(liBaru);

// });



const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'Black';
// }
// p3.onclick = function() {
//     p3.style.color = 'lightgreen';
// }

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'Black';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'navy';
});


