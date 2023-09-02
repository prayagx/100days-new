let shop = document.getElementById("shop");

//console.log(shop);

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
    price: 100,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img: "images/img-4.jpg",
}]

let generateshop = () => {
    return shop.innerHTML = shopitemsdata.map((item) => {
      return `
        <div class="item">
          <img width="219" src="images/img-1.jpg" alt="">
          <div class="details">
            <h3>Casual Shirt</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
              <h2>$45</h2>
              <div class="buttons">
                <i class="bi bi-plus-square"></i>
                <div class="quantity">0</div>
                <i class="bi bi-dash-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img width="219" src="images/img-2.jpg" alt="">
          <div class="details">
            <h3>Office Shirt</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
              <h2>$70</h2>
              <div class="buttons">
                <i class="bi bi-plus-square"></i>
                <div class="quantity">0</div>
                <i class="bi bi-dash-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img width="219" src="images/img-3.jpg" alt="">
          <div class="details">
            <h3>T-Shirt</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
              <h2>$25</h2>
              <div class="buttons">
                <i class="bi bi-plus-square"></i>
                <div class="quantity">0</div>
                <i class="bi bi-dash-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img width="219" src="images/img-4.jpg" alt="">
          <div class="details">
            <h3>Men's Suit</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
              <h2>$100</h2>
              <div class="buttons">
                <i class="bi bi-plus-square"></i>
                <div class="quantity">0</div>
                <i class="bi bi-dash-square"></i>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

generateshop();