
const query = location.search
const params = new URLSearchParams(query)
const id = params.get('id')
//console.log(id)

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
                        <select name="" id="" type="text" aria-placeholder="Seleccionar un color">
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
                    <h2 class="checkout-total-price" id="amount">$${product.price}</h2>
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
                            <input type="number" value="1" onkeypress="alert('hola')" id="amount" />
                            <button class="btn-primary">Comprar</button>
                        </div>
                        <div class="bottom">
                            <button class="btn-outline">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    const detailsSelector = document.querySelector('#details')
    detailsSelector.innerHTML = detailsTemplate
}

const changeMini = (e) => {
    const selectedSrc = e.target.src
    const bigSelector = document.getElementById("bigImg")
    bigSelector.src = selectedSrc
}

/*
const changeSubtotal = (e) => {
    const productAmount = document.getElementById('amount')
    console.log(productAmount)
}
*/

printDetails(id)