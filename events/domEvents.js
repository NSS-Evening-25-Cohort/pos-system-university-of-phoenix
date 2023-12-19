import { getAllOrders } from '../api/orderData';
import editOrderForm from '../forms.js/creatEditOrder';
import showOrders from '../pages/Orders';
// import closeOrder from '../pages/closeOrder';
// import createEditItem from '../pages/createItems';

const domEvents = () => {
  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('allOrders')) {
      getAllOrders().then(showOrders);
      console.warn(getAllOrders);
    }
    if (e.target.id.includes('newOrder')) {
      editOrderForm();
    }
  });
};
export default domEvents;
