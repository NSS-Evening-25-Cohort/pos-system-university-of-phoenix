import getOrderByCustomerData from '../api/mergedData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showOrders = (array) => {
  clearDom();
  getOrderByCustomerData();

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
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export default showOrders;
