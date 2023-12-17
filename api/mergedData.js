import { getAllCustomers } from './customerData';
import { getAllOrders } from './orderData';

const getOrderByCustomerData = () => new Promise((resolve, reject) => {
  getAllCustomers().then((orderObjects) => {
    getAllOrders()
      .then((customerOrderObjects) => resolve(
        { ...orderObjects, customerOrderObjects }
      ));
  }).catch(reject);
});

export default getOrderByCustomerData;
