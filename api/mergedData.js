import { getSingleCustomer } from './customerData';
import { getOrder } from './orderData';

const getOrderCustomerData = () => new Promise((resolve, reject) => {
  const mergedArray = [];
  getOrder().then((orderObjects) => {
    orderObjects.forEach((order) => {
      getSingleCustomer(order.customer_id)
        .then((customerObject) => {
          const mergedObject = { ...order, ...customerObject };
          mergedArray.push(mergedObject);
        });
    });
    resolve(mergedArray);
  }).catch(reject);
});
export default getOrderCustomerData;
