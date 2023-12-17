import { getAllOrders } from '../api/orderData';
import showOrders from '../pages/Orders';
// import closeOrder from '../pages/closeOrder';
// import createEditItem from '../pages/createItems';

const domEvents = () => {
  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order')) {
      getAllOrders().then(showOrders);
    }
  });
};
export default domEvents;
