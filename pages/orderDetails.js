import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItems = () => {
  const domString = '<h1>!!!No Items!!!</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add an Item</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.name}</h5>
            <hr>
            <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit Item</i>
            <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete Item</i>
            
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showItems, emptyItems };
