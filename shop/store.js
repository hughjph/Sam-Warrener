if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName("remove-button");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName("addCartButton");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClick);
    }

}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}


function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClick(event) {
    var buttonClicked = event.target;
    var shopItem = buttonClicked.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("unit-cost")[0].innerText;
    var itemQuantity = shopItem.getElementsByClassName("Quantity")[0].value;
    var imageSrc;

    switch (title) {
        case "Life In Lockdown":
            imageSrc = "../Pictures/AlbumCoverMini.jpg";
            break;
        case "Sacrifice My Soul":
            imageSrc = "../Pictures/SacrificeMySoulMini.jpg";

    }
    console.log(title, price, itemQuantity, imageSrc);
    addItemToCart(title, price, itemQuantity, imageSrc);
    updateCartTotal();
}


function addItemToCart(title, price, itemQuantity, imageSrc) {
    var cartRow = document.createElement('tr');
    cartRow.classList.add("cart-row");
    var cartTable = document.getElementsByClassName("cart-table")[0];
    var cartItemNames = cartTable.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already in the cart');
            return;
        }
    }
    var cartRowContents = `
                <td>
                    <img src="${imageSrc}" />
                    <span class="cart-item-title">${title}</span>
                </td>
                <td>
                    <input value = ${itemQuantity} class="quantity" type = "number" min = "1" max = "10" />
                </td>
                <td class="price">${price}</td>
                <td>
                    <button class="btn-danger remove-button" type="button">Remove</button>
                </td>`;
    cartRow.innerHTML = cartRowContents;
    cartTable.append(cartRow);
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged);
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-table')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('price')[0];
        var quantityElement = cartRow.getElementsByClassName('quantity')[0];
        console.log(priceElement, quantityElement);
        var price = priceElement.innerHTML;
        price = parseFloat(price.replace(/\u00A3/g, " "));
        var quantity = quantityElement.value;
        total += price * quantity;
        
    }
    total = Math.round(total * 100) / 100;

    var PoundSign = String.fromCharCode('163');

    document.getElementsByClassName('total')[0].innerText = "Total: " + PoundSign + total;
}