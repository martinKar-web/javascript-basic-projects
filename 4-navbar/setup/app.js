//* classList - returns all the classes on the element on which it is called
//* contains - checks classList for specific class
//* add - add class on the element on which it is called
//* remove - remove class
//* toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  //* console.log(navLinks.classList);
  //* console.log(navLinks.classList.contains('random')); // false
  //* console.log(navLinks.classList.contains('links')); // true

  /**
  //if (navLinks.classList.contains('show-links')) {
    navLinks.classList.remove('show-links');
  //} else {
    navLinks.classList.add('show-links');
  //}
  */

/**alternatively */
  
  navLinks.classList.toggle('show-links');
})
