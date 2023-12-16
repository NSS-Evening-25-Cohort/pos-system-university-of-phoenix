import { getAllCustomers } from './customerData';
import { getAllOrders } from './orderData';
// TODO#1 get all orders
// TODO#2 get all customers
// TODO#3 filter by customer_id
// TODO#4 Append data to create new object
const getOrderByCustomerData = () => new Promise((resolve, reject) => {
  getAllCustomers().then((orderObjects) => {
    getAllOrders()
      .then((customerOrderObjects) => resolve(
        { ...orderObjects, customerOrderObjects }
      ));
  }).catch(reject);
});

export default getOrderByCustomerData;
