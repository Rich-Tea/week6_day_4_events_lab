document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
   
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  


// const textInput = document.querySelector('#input')
// textInput.addEventListener('input', handleInput);

});

const handleFormSubmit = function (event) {
  
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list');
  resultParagraph.textContent = `Title: ${event.target.title.value}, Author: ${event.target.title.value}, Category: ${event.target.category.value}`
  document.getElementById("new-item-form").reset();
  
 };



//  const handleFormSubmit = function (event) {

//   event.preventDefault();
//   const resultParagraph = document.querySelector('#reading-list');
//   resultParagraph.textContent = `Author: ${event.target.author.value}`
 
// };





