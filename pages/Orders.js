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
          <p class="card-text">Phone: ${customer.first_name} </p>
          <p class="card-text">Email:</p>
          <p class="card-text"> In person/Phone : ${order.order_type}</p>
          <a href="#" class="card-link">Delete</a>
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Details</a>
          <button id="view_order" type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>`;
      renderAllOrderCards(domString);
    });
    // renderToDOM('#store', domString);
  });
};

export default showOrders;
