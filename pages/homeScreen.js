import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const homeScreen = () => {
  clearDom();

  const domString = `<h1>Welcome User</h1>
  <div id="home_btns">
  <button id="allOrders" class="btn btn-success">View All Orders</button><br>
  <button id="newOrder" class="btn btn-danger">Create an Order</button><br>
  <button id="viewRev" class="btn btn-warning">View Revenue</button>
  </div>`;
  renderToDOM('#store', domString);
};

export default homeScreen;
