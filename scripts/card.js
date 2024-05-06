let cardproducts = JSON.parse(localStorage.getItem('card'))

const createCartCard = (totalproducts) => {
    const articleCard = document.getElementById('cartproducts')
    let viewcardproducts = ``
    //console.log(totalproducts)
    if(totalproducts===null) {
        viewcardproducts += `
            <article class="item-cart">
                <h1>No hay productos en el carrito 😢</h1>
            </article>
        `
        return articleCard.innerHTML = viewcardproducts
    }
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
    
    articleCard.innerHTML = viewcardproducts
}

const createTotalTemplate = (pricetotalproducts) => {
    let total = 0

    if(pricetotalproducts===null) return

    pricetotalproducts.forEach(e => {
        total = total + e.price * e.quantity
    });

    const articleTotal = document.getElementById('total-price')
    //console.log(articleTotal)
    articleTotal.textContent = total
}

//ACTUALIZAR LA CANTIDAD DEL CARRITO DE COMPRAS(ACTIVIDAD 1)
const changeQuantity = (ev) => {
    const findProducts = cardproducts.find(e => e.id === ev.target.id )
    findProducts.quantity = Number(ev.target.value)
    let cardProductsSave = localStorage.getItem('card')
    cardProductsSave = JSON.parse(cardProductsSave)
    for (let i = 0; i < cardProductsSave.length; i++) {
        if (cardProductsSave[i].id === findProducts.id) {
           cardProductsSave[i] = findProducts
        }
    }
    localStorage.setItem('card',JSON.stringify(cardProductsSave))
}

createCartCard(cardproducts)
createTotalTemplate(cardproducts)