

const addFavorite = (ev) => {
    const productFavorite = JSON.parse(localStorage.getItem('card')).find(p => p.id === ev.target.id)

    if (localStorage.getItem('favorite') == null) return localStorage.setItem('favorite',JSON.stringify([productFavorite]))
        
    let favorite = JSON.parse(localStorage.getItem('favorite'))
    favorite.push(productFavorite)
    localStorage.setItem('favorite',JSON.stringify(favorite))
}

const printFavoriteProduct = () => {
    const contentFavorite = document.getElementById('favoriteproducts')
    const dataFavoriteProducts = JSON.parse(localStorage.getItem('favorite'))

    //console.log(dataFavoriteProducts)

    let printFavorite = ``
    
    dataFavoriteProducts.map(fp => {
        console.log(fp)
        printFavorite += `
            <article class="product-card-favorite">
                <a class="redirec-product" href="./details.html">
                    <img src="${fp.image}" alt="producto" class="product-img">
                    <div class="product-info-favorite">
                        <span class="product-title-favorite">${fp.title}</span>
                        <span class="product-description-favorite">${fp.color}</span>
                        <div class="product-price-block-favorite">
                            <span class="pric-favoritee">$${fp.price}</span>
                        </div>
                        <div class="product-tax-policy-favorite">Incluye impuesto País ...</div>
                    </div>
                </a>
            </article>
        `
    });
    contentFavorite.innerHTML = printFavorite
}

printFavoriteProduct()