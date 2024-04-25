


const options = [
    { title: "Ofertas", linkTo: "./outlet.html" },
    { title: "Cómo comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

const navSelector = document.getElementById("navlist");

for( let option of options ){
    const lista = document.createElement('li')
    const anchor = document.createElement('a')
    anchor.textContent = option.title
    anchor.href = option.linkTo
    lista.appendChild(anchor)
    navSelector.appendChild(lista)
}

const optionsFooter = [
    {
        opts: [
            {aTitle:"Ofertas de la semana",href:"#",title:true},
            {aTitle:"Laptops",href:"#"},
            {aTitle:"Audio",href:"#"},
            {aTitle:"Auriculares",href:"#"}
        ]
    },
    {
        opts: [
            
            {aTitle:"Cómo comprar",href:"#",title:true},
            {aTitle:"Formas de pago",href:"#"},
            {aTitle:"Envios",href:"#"},
            {aTitle:"Devoluciones",href:"#"}
        ]
    },
    {
        opts: [
            {aTitle:"Costos y tarifas",href:"#",title:true},
            {aTitle:"Impuestos",href:"#"},
            {aTitle:"Facturación",href:"#"}
        ]
    },
    {
        opts: [
            {aTitle:"Mis pedidos",href:"#",title:true},
            {aTitle:"Pedir nuevamente",href:"#"},
            {aTitle:"Lista de deseos",href:"#"}
        ]
    },
    {
        opts: [
            {aTitle:"Garantía de Entrega",href:"#",title:true},
        ]
    },
];

const footerSelector = document.querySelector('#footer')

optionsFooter.map((op)=>{
    const divFooter = document.createElement('div')
    divFooter.className = 'col'
    const ulFooter = document.createElement('ul')
    op.opts.map((o)=>{
        const liFooter = document.createElement('li')
        const aFooter = document.createElement('a')
        aFooter.textContent = o.aTitle
        aFooter.href = o.href
        if(o.title==true){liFooter.className = 'col-main-item'} 
        liFooter.appendChild(aFooter)
        divFooter.appendChild(ulFooter).appendChild(liFooter)
    })
    footerSelector.appendChild(divFooter)
})