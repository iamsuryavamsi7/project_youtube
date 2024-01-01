let cartQuantity = 0;

function carting(count1, count2){

    (cartQuantity <= count1 ? cartQuantity += count2 : alert(`Sorry we can't add more than 10 items in cart`))

    document.querySelector(`.cart_status`)
        .innerHTML = `Added to cart:- ${cartQuantity}`;

}

function cartingminus(count1, count2){

    ( cartQuantity >= count1 ? cartQuantity -= count2 : alert(`It can't go down than 0`));

    document.querySelector(`.cart_status`)
    .innerHTML = `Removed from cart:- ${cartQuantity}`;

}
