//method 1 - using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  // console.log('question', question);
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  /**
   **  close the question that has not been clicked
   **/
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      // console.log('item', item);
      question.classList.toggle('show-text');
      
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

  });
});

// method 2 - traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
