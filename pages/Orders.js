import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import getOrderByCustomerData from '../api/mergedData';

const showOrders = (array) => {
  getOrderByCustomerData();
  console.warn(array);
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.order_name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Status: ${item.order_status}</h6>
      <p class="card-text">Phone: ${item.first_name} </p>
      <p class="card-text">Email:</p>
      <p class="card-text"> In person/Phone : ${item.order_type}</p>
      <a href="#" class="card-link">Delete</a>
      <a href="#" class="card-link">Edit</a>
      <a href="#" class="card-link">Details</a>
      <button id="view_order" type="button" class="btn btn-danger">Danger</button>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export default showOrders;
