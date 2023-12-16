import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const closeOrder = (obj = {}) => {
  clearDom();

  const domString = `
    <form id="close_order" class="mb-4">
    <div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown link
    </a>
  
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#" id="cash">Cash</a>
      <a class="dropdown-item" href="#" id="credit">Credit</a>
      <a class="dropdown-item" href="#" id="mobile">Mobile</a>
    </div>
  </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Tip Amount" value="${obj.tip || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Close Order</button>
    </form>`;
  renderToDOM('#view', domString);
};

export default closeOrder;
