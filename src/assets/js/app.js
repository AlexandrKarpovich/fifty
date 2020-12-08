// random bg color
// import axios from 'axios';
//
// window.addEventListener('load', () => {
//
//   const api = 'http://www.colr.org/json/color/random';
//   const body = document.querySelector('body');
//
//   function randomColor() {
//     axios.get(api).then(res => {
//       let color = res.data.colors[0].hex;
//
//       if (!color) {
//         console.error('Random color could not be fetched.');
//       }
//
//       color = '#' + color;
//
//       body.style.backgroundColor = color;
//     }).catch(() => console.error('Random color could not be fetched.'));
//   }
//
//   randomColor();
//
//   setInterval(randomColor, 8000);
//
// });


// cards
const box = document.querySelectorAll('.box');

box.forEach(box => {
    box.addEventListener('click', () => {
        removeActiveClasses();
        box.classList.add('active');
    })
})

function removeActiveClasses() {
    box.forEach(box => {
        box.classList.remove('active')
    })
}

















