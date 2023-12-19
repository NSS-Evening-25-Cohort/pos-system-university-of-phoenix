import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

<<<<<<< HEAD
const showItems = (array) => {
=======
const emptyItems = () => {
  const domString = '<h1>!!!No Items!!!</h1>';
  renderToDOM('#main-container', domString);
};

const showItems = (item) => {
>>>>>>> b50d95f26a2bea7dfe5692ecf3e246707df83bae
  clearDom();
  const renderAllItemCards = (domStringTwo) => {
    renderToDOM('#view', domStringTwo);
  };

  let domString = '';
  array.forEach((item) => {
    domString
      += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.item_name}</h5>
<<<<<<< HEAD
          <h3>${item.price}</h3>
=======
          <h3>${item.item_price}</h3>
>>>>>>> b50d95f26a2bea7dfe5692ecf3e246707df83bae
            <hr>
            <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit Item</i>
            <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete Item</i>
        </div>
      </div>`;
<<<<<<< HEAD
    renderAllItemCards(domString);
  });
=======
  renderToDOM('#main-container', domString);
>>>>>>> b50d95f26a2bea7dfe5692ecf3e246707df83bae
};
// this is fuctioning

export default showItems;
