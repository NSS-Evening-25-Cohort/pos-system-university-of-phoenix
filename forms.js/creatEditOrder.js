import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const editOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
  <div class="form-group">
    <label for="title">Order Name</label>
    <input type="text" class="form-control" id="title" aria-describedby="Order Name" placeholder="Enter Item" value="${obj.name || ''}" required>
  </div>
  <div class="form-group">
  <label for="price">Price</label>
  <input type="text" class="form-control" id="price" placeholder="Customer Phone" value="${obj.customer_phone || ''}" required>
</div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price" placeholder="Customer Email" value="${obj.Customer_email || ''}" required>
  </div>
  <div class="form-group" id="select-item">
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit Item
  </button>
</form>`;

  renderToDOM('#form-container', domString);
};
export default editOrderForm;
