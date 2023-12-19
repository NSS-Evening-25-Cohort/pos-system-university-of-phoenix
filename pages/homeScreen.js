import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const homeScreen = () => {
  clearDom();

  const domString = `<h1>Welcome User</h1>
  <div id="home_btns">
  <button id="allOrders" class="btn btn-success">View All Orders</button>
  </div>`;
  renderToDOM('#store', domString);
};

export default homeScreen;
