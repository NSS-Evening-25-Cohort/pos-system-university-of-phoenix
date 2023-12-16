import getOrderCustomerData from '../api/mergedData';
import viewOrder from '../pages/viewOrders';
// import closeOrder from '../pages/closeOrder';
// import createEditItem from '../pages/createItems';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderCustomerData(firebaseKey).then(viewOrder);
    }
  });
};
export default domEvents;
