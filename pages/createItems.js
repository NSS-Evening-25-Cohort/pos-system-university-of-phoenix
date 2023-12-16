import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createEditItem = (obj = {}) => {
  clearDom();
  const domString = `<div>
  <div class="form-group">
  <label for="price">Item Name</label>
  <input type="text" class="form-control" id="item_name" placeholder="Item Name" value="${obj.price || ''}" required>
</div>
<div class="form-group">
        <label for="price">Item Price</label>
        <input type="text" class="form-control" id="price" placeholder="Item Price" value="${obj.price || ''}" required>
      </div>
  </div>`;
  renderToDOM('#form-container', domString);
};

export default createEditItem;
