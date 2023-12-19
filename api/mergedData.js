import { getAllCustomers } from './customerData';
import { deleteSingleOrder, getAllOrders, getSingleOrder } from './orderData';

const getOrderByCustomerData = () => new Promise((resolve, reject) => {
  getAllCustomers().then((orderObjects) => {
    getAllOrders()
      .then((customerOrderObjects) => resolve(
        { ...orderObjects, customerOrderObjects }
      ));
  }).catch(reject);
});

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((customerOrderArray) => {
    const deleteOrderPromises = customerOrderArray.map((order) => deleteSingleOrder(order.firebaseKey));

    Promise.all(deleteOrderPromises).then(() => {
      (firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderByCustomerData, deleteOrderItemRelationship };
