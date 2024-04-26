

const captureText = (e,arrayProducts) => {
    
    const eventKey = e.target.value
    const newProducts = arrayProducts.filter(p => p.title == eventKey)
    console.log(arrayProducts.length)
    
    if(newProducts.length == 0){
        printCards(arrayProducts,"products")
    }else{
        printCards(newProducts,"products")
    }
}

const searchSelector = document.getElementById('search')
searchSelector.addEventListener("keyup",event => {captureText(event,products)})