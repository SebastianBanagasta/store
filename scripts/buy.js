
const buySelector = document.getElementById('buySelector')

buySelector.addEventListener('click',(e)=>{
    cardproducts = null
    localStorage.removeItem('card')
    //console.log(localStorage.getItem('card'))
    createCartCard(cardproducts)
    const total_price = document.getElementById('total-price')
    total_price.textContent = '00.00'
    alert('La compra se realizo correctamente!!')
    //console.log(cardproducts)
})