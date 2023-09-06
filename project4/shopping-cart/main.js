let shop = document.getElementById("shop");

console.log(shop);


let shopitemsdata = [{
    id: "sdvsdvs",
    name: "Casual Shirt",
    price: 45,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img: "images/img-1.jpg",
},{
    id: "sdvsdsdes",
    name: "Office shirt",
    price: 70,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img: "images/img-2.jpg",
},{
    id: "sdvsddfvs",
    name: "T-Shirt",
    price: 25,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img: "images/img-3.jpg",
},{
    id: "sdvsdfsddvs",
    name: "Men's Suit",
    price: 300,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img: "images/img-4.jpg",
}];




let basket = [];





let generateshop = () => {
  return shop.innerHTML = shopitemsdata.map((x) => {
    let { name, price, img, desc, id } = x;
    return `
      <div id=product-id-${id} class="item">
        <img width="219" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$${price}</h2>
            <div class="buttons">
              <i onclick="increment(${id})" class="bi bi-plus-square"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
};

generateshop();

let increment = (id) => {
    let selecteditem = id;
    let search = basket.find((x) => x.id === selecteditem.id);

    if (search===undefined) {
        basket.push({
            id: selecteditem.id,
            item: 1,
        });
    }

    else {
        search.item += 1;
    }
    //console.log(basket);
    update(selecteditem.id);
    
};

let decrement = (id) => {
    let selecteditem = id;
    let search = basket.find((x) => x.id === selecteditem.id);

    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    //console.log(basket);
    update(selecteditem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    //console.log(id);
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartamount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();

 