

const productosSelector = document.getElementById('products')


const createCard = (product)=>{
    return `
    <article class="product-card">
        <a class="product-card" href="./details.html">
            <img src="${product.images[0]}" alt="${product.id}" class="product-img">
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">Silver</span>
                <div class="product-price-block">
                    <span class="price">$750.000</span>
                    <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">Incluye impuesto País ...</div>
            </div>
        </a>
    </article>
    `
}
let productsTemplate = ``
for(const element of products){
    productsTemplate = productsTemplate + createCard(element)
}

productosSelector.innerHTML = productsTemplate

/*
<article class="product-card">
    <a class="product-card" href="./details.html">
        <img src="/assets/mock1.jpg" alt="producto" class="product-img">
        <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
                <span class="price">$750.000</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País ...</div>
        </div>
    </a>
</article>
*/
productosSelector.innerHTML = productsTemplate