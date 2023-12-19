import { getSingleCustomer } from '../api/customerData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showOrders = (array) => {
  clearDom();
  const renderAllOrderCards = (domStringTwo) => {
    renderToDOM('#view', domStringTwo);
  };

  let domString = '';
  array.forEach((order) => {
    getSingleCustomer(order.customer_id).then((customer) => {
      domString
          += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${order.order_name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Status: ${order.order_status}</h6>
          <p class="card-text">Phone: ${customer.customer_phone} </p>
          <p class="card-text">Email: ${customer.customer_email}</p>
          <p class="card-text"> Order Type : ${order.order_type}</p>
          <button type="button" class="btn btn-danger">Delete</button>
          <button type="button" class="btn btn-success">Edit</button>
          <button type="button" class="btn btn-info">Details</button>
        </div>
      </div>`;
      renderAllOrderCards(domString);
    });
  });
};

export default showOrders;
