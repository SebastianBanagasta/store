
const query = location.search
const params = new URLSearchParams(query)
const id = params.get('id')
//console.log(id)

const changeMini = (e) => {
    const selectedSrc = e.target.src
    const bigSelector = document.getElementById("bigImg")
    bigSelector.src = selectedSrc
}




const changeSubtotal = (e) => {
    const quantity = e.target.valueAsNumber
    const valueProduct = products.find(i => i.id === id)
    const total = quantity * valueProduct.price
    const productAmount = document.getElementById('amount')
    productAmount.textContent = `S/. ${total}`
}

//LOCAL STORAGE
const saveProduct = (id) => {
    const productFound = products.find(i=>i.id === id)
    const product = {
        id: id,
        title: productFound.title,
        price: productFound.price,
        image: productFound.images[0],
        color: document.querySelector('#color-'+id).value,
        quantity : Number(document.querySelector('#quantity-'+id).value)
    }
    
    const stringifyProduct = JSON.stringify(product)

    const getCard = JSON.parse(localStorage.getItem('card'))
    if(getCard) {
        return console.log(getCard)
    }
    localStorage.setItem('card',stringifyProduct)
}


const printDetails = (id) => {
    const product = products.find( e => e.id === id )
    //console.log(product)
    const detailsTemplate = `
        <div class="columns-container">
            <div class="product-images-block">
                <div>
                    ${
                        product.images.map(
                            e => `<div class="thumbnail-container"><img src="${e}" onClick="changeMini(event)" alt="mac"></div>`     
                        ).join("")
                    }
                </div>
                <img class="main-image" id="bigImg" src="${product.images[0]}" alt="mac">
            </div>
            <div class="product-description-block">
                <h1 class="title">${product.title}</h1>
                <form action="" class="selector">
                    <fieldset>
                        <label class="label" for="color">${product.color}</label>
                        <select name="" id="color-${product.id}" type="text" aria-placeholder="Seleccionar un color">
                            ${
                                product.color.map(
                                    (e) => `<option value="${e}">${e}</option>`
                                )
                            }
                        </select>
                    </fieldset>
                </form>
                <div class="description">
                    <h1>Descripcion</h1>
                    <p>
                        CPU de 8 nucleos con 4 nucleos de rendimiento y 4 de eficiancia
                        GPU de 10 nucleos
                        Trazado de ratos acelerado por hardware
                        Neural Engine de 16 nucleos
                        100 GB/s de ancho de banda de memoria
                    </p>
                </div>
            </div>
            <div class="product-checkout-block">
                <div class="checkout-container">
                    <span class="checkout-total-label">Total:</span>
                    <h2 class="checkout-total-price" id="amount">S/. ${product.price}</h2>
                    <p class="checkout-description">
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
                        haciendo la solicitud en AFIP.
                    </p>
                    <ul class="checkout-policy-list">
                        <li>
                            <span class="policy-icon"><img src="../assets/truck.png" alt="Truck" /></span>
                            <span class="policy-desc">Agrega el producto al carrito para conocer los costos de
                                envío</span>
                        </li>
                        <li>
                            <span class="policy-icon"><img src="../assets/plane.png" alt="Plane" /></span>
                            <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles,
                                seleccionando
                                envío normal</span>
                        </li>
                    </ul>
                    <div class="checkout-process">
                        <div class="top">
                            <input type="number" value="1" id="quantity-${product.id}" onChange="changeSubtotal(event)" />
                            <button class="btn-primary">Comprar</button>
                        </div>
                        <div class="bottom">
                            <button class="btn-outline" onClick="saveProduct('${product.id}')">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    const detailsSelector = document.querySelector('#details')
    detailsSelector.innerHTML = detailsTemplate
}



printDetails(id)