import client from '../utils/client';

const endpoint = client.databaseURL;

const getAllCustomers = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getCustomerOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order.json?orderBy="customer_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteSinglecustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllCustomers, getSingleCustomer, getCustomerOrder, deleteSinglecustomer
};
