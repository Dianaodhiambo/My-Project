const itemList = document.querySelector('#item-list');

store.forEach((item, index)=> {
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'text-center');

    const img = document.createElement('img'); 
    img.setAttribute('src', `${item.image}`);
    imageContainer.appendChild(img);

    const h5 = document.createElement('h5');
    h5.textContent = item.itemName;

    const p = document.createElement('p');
    p.textContent = item.price;

    const qty = document.createElement('input')
    qty.setAttribute('id', index);
    qty.setAttribute('placeholder', 'QTY');
    qty.setAttribute('type', 'number');

    const addToCartBtn = document.createElement('button');
    addToCartBtn.setAttribute('class', 'btn btn-warning btn-sm');
    addToCartBtn.textContent = "Add To Cart";

    imageContainer.appendChild(h5);
    imageContainer.appendChild(p);
    imageContainer.appendChild(qty);
    imageContainer.appendChild(addToCartBtn);

    itemList.appendChild(imageContainer)
})
