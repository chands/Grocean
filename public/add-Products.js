$(function(){
    let productName = $('#productName');
    let productManufacturer = $('#productManufacturer');
    let productPrice = $('#productPrice');
    let productDescription = $('#productDescription');
    let btnAddProduct = $('#btnAddProduct');

    btnAddProduct.click(function(event){
        // event.prevetDefault();
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            productDescription.val(),
            function(addedProduct) {
                window.alert("Added product " + addedProduct.name + " to Database");
            }
        )
    });
})