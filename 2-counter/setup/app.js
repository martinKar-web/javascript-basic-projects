//* Select value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    //*Increment/Decrement count
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    //*Change color
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = '#222';
      
    }
    value.textContent = count;
  });
});
