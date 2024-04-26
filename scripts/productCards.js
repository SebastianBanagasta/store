
const products = [
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "https://home.ripley.com.pe/Attachment/WOP_5/2065331768874/2065331768874-2.jpg",
        title : "MOTOROLA MOTO G14",
        color : "Gris",
        price : 429.00,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "https://home.ripley.com.pe/Attachment/WOP_5/2065253836057/2065253836057_2.jpg",
        title : "AUDÍFONOS ON EAR JBL TUNE 500",
        color : "Blanco",
        price : 99.00,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "https://home.ripley.com.pe/Attachment/WOP_5/2004313328750/2004313328750_2.jpg",
        title : "ASUS VIVOBOOK GO 15",
        color : "Negro",
        price : 2099,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
    {
        id : "A100",
        linkTo : "./details.html",
        images : "/assets/mock1.jpg",
        title : "iPad Pro 12.9",
        color : "Silver",
        price : 750.000,
        discount : "50% Off",
    },
]

const printCards = (arrayOfProducts,idSelector) => {
    const productosSelector = document.getElementById(idSelector)
    let productsTemplate = ""

    const createCard = (product)=>{
        return `
        <article class="product-card">
            <a class="product-card" href="${product.linkTo}">
                <img src="${product.images}" alt="${product.id}" class="product-img">
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.color}</span>
                    <div class="product-price-block">
                        <span class="price">$${product.price}</span>
                        <span class="discount">${product.discount}</span>
                    </div>
                    <div class="product-tax-policy">Incluye impuesto País ...</div>
                </div>
            </a>
        </article>
        `
    }

    for(const element of arrayOfProducts){
        productsTemplate = productsTemplate + createCard(element)
    }

    productosSelector.innerHTML = productsTemplate
}

printCards(products,"products")