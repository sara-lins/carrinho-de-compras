function arrObjectsOne() {
    return productsCart
}

const buttonClick = document.querySelector("button")
buttonClick.addEventListener("click", function somaProducts() {

    let arrObjects = arrObjectsOne()
    let quantResult = 0
    let precoTotal = 0

    for(let i = 0; i < arrObjects.length; i++) {

        quantResult += arrObjects[i].quantity
        precoTotal += arrObjects[i].price
    }

    if(quantResult > 1) {

        preco.innerText = precoTotal
        return quant.innerText = `${quantResult} unidades`

    }else{

        preco.innerText = precoTotal
        return quant.innerText = `${quantResult} unid.`
    }


});