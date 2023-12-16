import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrder = () => {
  clearDom();

  const domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"></li>
  <li class="list-group-item"></li>
  <li class="list-group-item">A third item</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewOrder;
