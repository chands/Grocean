function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data);
    })
}

function addProduct (name, manufacturer, price, description, done) {
  $.post('/api/products', {
    name: name,
    manufacturer: manufacturer,
    price: price,
    description: description
  }, function (data) {
    done(data);
  })
}

function createProductCard(product) {
    return $(`
    <div class="col-lg-3 col-md-5 col-10 card m-2 p-2">
        <h4 class="mx-1 product-name">${product.name}</h4>
        <small class="product-manufacturer text-muted mx-1">${product.manufacturer}</small>
        <small class="text-muted mx-1 product-description">${product.description}</small>
        <div class="row">
          <div class="col m-3 p-1 product-price">
            <b>Rs. ${product.price}</b>
          </div>
          <button class="btn btn-primary col m-3 p-1">Buy</button>
        </div>
    </div>`
    );
}