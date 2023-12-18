import getOrderCustomerData from '../api/mergedData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>Broken</h1>';
  renderToDOM('#store', domString);
};

const viewOrder = () => {
  clearDom();
  const renderCards = (order) => {
    let domString = '';
    order.forEach((item) => {
      domString
    += `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${item.order_date}</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;
    });
    renderToDOM('#view', domString);
  };
  getOrderCustomerData().then((order) => { renderCards(order); });
};

export {
  viewOrder,
  emptyOrders
};
