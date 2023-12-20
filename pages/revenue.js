import { getSingleCustomer } from '../api/customerData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showRevenue = (array) => {
  clearDom();
  const renderRevenueCard = (domStringTwo) => {
    renderToDOM('#view', domStringTwo);
  };
  //the variables for the Revenue page
  const callInTotal = 0;
  const walkInTotal = 0;
  //types of payments
  const cashTotal = 0;
  const creditTotal = 0;
  const phoneTotal = 0;
  // the tip total sum
  const tipTotal = 0;

  let domString = '';
  array.forEach((order) => {
    if (order.order_type == "phone") {callInTotal++;} 
    else if (order.order_type == "in person"){walkInTotal++}

    if (order.payment_type == "cash") {cashTotal++;} 
    else if (order.payment_type == "debit/credit"){creditTotal++}
    else if (order.payment_type == "debit/credit"){phoneTotal++}

    tipTotal += order.tip_amount;

  });

  domString= `<div class="revenue-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">REVENUE</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">TOTAL REVENUE</h6>
          <p class="card-text">CALL INS:  ${callInTotal} </p>
          <p class="card-text">WALK INS:  ${walkInTotal}</p>
          <p class="card-text">CASH:  ${cashTotal}</p>
          <p class="card-text">DEBIT/CREDIT:  ${creditTotal}</p>
          <p class="card-text">MOBILE PAYMENT:  ${phoneTotal}</p>
          <p class="card-text">TIPS:  ${tipTotal}</p>
        </div>
      </div>`;
    renderRevenueCard(domString);
}

export default showRevenue();
