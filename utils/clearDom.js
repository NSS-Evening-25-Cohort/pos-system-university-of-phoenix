<<<<<<< HEAD
const clearDom = () => {};
=======
const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};
>>>>>>> 044fd4cc62196471b7c107ff3035245cbb1060d1

export default clearDom;
