const cardproducts = JSON.parse(localStorage.getItem('card'))
//console.log(cardproducts)

const createCartCard = (totalproducts) => {
    let viewcardproducts = ``
    totalproducts.map((p)=>{
        viewcardproducts += `
            <article class="item-cart">
                <div class="cart-product">
                    <div class="image-details">
                        <img src="${p.image}" alt="" />
                        <div class="cart-product-detail">
                            <span class="cart-product-title">${p.title}</span>
                            <span class="cart-product-color">${p.color}</span>
                            <span class="cart-product-description">descripcion descripcion descripcion </span>
                            <input type="number" value="${p.quantity}" min="1" id="${p.id}" onchange="changeQuantity(event)" class="cart-product-quantity" />
                        </div>
                    </div>
                    <div class="price">S/${p.quantity * p.price}</div>
                </div>
            </article>
        ` 
    })
    const articleCard = document.getElementById('cartproducts')
    articleCard.innerHTML = viewcardproducts
}

const createTotalTemplate = (pricetotalproducts) => {
    let total = 0
    pricetotalproducts.forEach(e => {
        total = total + e.price * e.quantity
    });
    const articleTotal = document.getElementById('total-price')
    //console.log(articleTotal)
    articleTotal.textContent = total
}

const changeQuantity = (ev) => {
    //console.log(ev)
    const findProducts = cardproducts.find(e => e.id === ev.target.id )
    findProducts.quantity = Number(ev.target.value)
    let cardProductsSave = localStorage.getItem('card')
    cardProductsSave = JSON.parse(cardProductsSave)
    console.log(cardProductsSave)

}

createCartCard(cardproducts)
createTotalTemplate(cardproducts)