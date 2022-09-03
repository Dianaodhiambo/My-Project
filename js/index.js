const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '93cfba9521msh8e281a782f5fda5p1d05e3jsn58878cfc1489',
		'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
	}
};

fetch("https://jumia-service.p.rapidapi.com/")
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  grain.forEach((item, index,)=> {
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'col-3 text-center');
const itemList = document.querySelector("#item-list");

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
document.querySelectorAll('.add-to-cart').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    console.log("added")
  })
})
document.addEventListener('DOMContentLoaded', async()=> {
  products = await getGrain();
  updateUI(grain);
})