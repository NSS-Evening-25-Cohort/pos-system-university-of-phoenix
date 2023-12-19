import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showItems = (array) => {
  clearDom();
  const renderAllItemCards = (domStringTwo) => {
    renderToDOM('#view', domStringTwo);
  };

  let domString = '';
  array.forEach((order) => {
    domString
          += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
          <p class="card-text"> ${order.item_name} </p>
          <p class="card-text"> ${order.item_price}</p>
          <p class="card-text">  </p>
          <button type="button" id="delete-order" class="btn btn-danger">Delete</button>
          <button type="button" id="edit-order" class="btn btn-success">Edit</button>
          <button type="button" id="details-item" class="btn-info"btn >Details</button>
        </div>
      </div>`;
    renderAllItemCards(domString);
  });
};
// this is fuctioning

export default showItems;
