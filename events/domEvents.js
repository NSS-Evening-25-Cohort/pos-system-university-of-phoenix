import { getAllOrders } from '../api/orderData';
import showOrders from '../pages/Orders';
import { showItems } from '../pages/orderDetails';
import { getItems } from '../api/itemData';
// import closeOrder from '../pages/closeOrder';
// import createEditItem from '../pages/createItems';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('allOrders')) {
      getAllOrders().then(showOrders);
    }
    if (e.target.id.includes('details-item')) {
      console.warn('DETAILS CLICKED');
      getItems().then(showItems);
    }
  });
};
export default domEvents;
