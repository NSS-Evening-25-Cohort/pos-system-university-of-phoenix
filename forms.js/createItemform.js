import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const itemForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
    <div>
      <div class="form-group">
        <label for="price">Item Name</label>
        <input type="text" class="form-control" id="item_name" placeholder="Item Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="text" class="form-control" id="price" placeholder="Item Price" value="${obj.price || ''}" required>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit Item
    </button>
  </form>`;
  renderToDOM('#form-container', domString);
};

export default itemForm;
