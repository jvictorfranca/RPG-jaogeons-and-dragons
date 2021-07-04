let button = document.querySelector('.card');

let phrase = 'hello';

button.addEventListener('click', function anon() {
  console.log(phrase);
  button.removeEventListener('click', anon);
});
