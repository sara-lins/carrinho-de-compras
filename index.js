
//body
const body = document.querySelector("body");

//main
const main = document.createElement("main");
body.appendChild(main);

//-------------------------------------------------------/

//div img e titulo (div principal)
const divPrincipal = document.createElement("div")
main.appendChild(divPrincipal)

//img principal
const logo = document.createElement("img");
divPrincipal.appendChild(logo);

//titulo carrinho de compras
const tituloPrincipal = document.createElement("h1")
divPrincipal.appendChild(tituloPrincipal)

logo.src = "https://cdn-icons-png.flaticon.com/512/5087/5087847.png";
logo.alt = "Logo Carrinho de compras"
tituloPrincipal.innerText = "Carrinho de Compras"

//-------------------------------------------------------/

//div descrição (div secundaria)
const divSecundaria1 = document.createElement("div")
main.appendChild(divSecundaria1)
divSecundaria1.classList.add("divSecundaria1")

const descricao1 = document.createElement("p")
divSecundaria1.appendChild(descricao1)

const descricao2 = document.createElement("p")
divSecundaria1.appendChild(descricao2)

const descricao3 = document.createElement("p")
divSecundaria1.appendChild(descricao3)

const descricao4 = document.createElement("p")
divSecundaria1.appendChild(descricao4)

descricao1.innerText = "Produto"
descricao2.innerText = "Descrição"
descricao3.innerText = "Qntd."
descricao4.innerText = "Preço"

//-------------------------------------------------------/

//section principal
const ProductDetailsPrincipal = document.createElement("section");
main.appendChild(ProductDetailsPrincipal);

//ul
const ProductList = document.createElement("ul")
ProductDetailsPrincipal.appendChild(ProductList);

//li == relógio
const ProductItem1 = document.createElement("li")
ProductList.appendChild(ProductItem1);

const img1 = document.createElement("img")
ProductItem1.appendChild(img1)

const titulo1 = document.createElement("p")
ProductItem1.appendChild(titulo1)

const quantity1 = document.createElement("p")
ProductItem1.appendChild(quantity1)

const preco1 = document.createElement("p")
ProductItem1.appendChild(preco1)

img1.src = "./imgs/relogio.webp"
preco1.innerText  = productsCart[0].price
titulo1.innerText = productsCart[0].name
quantity1.innerText = productsCart[0].quantity

//-------------------------------------------------------/

//li 2 == teclado
const ProductItem2 = document.createElement("li")
ProductList.appendChild(ProductItem2);

const img2 = document.createElement("img")
ProductItem2.appendChild(img2)

const titulo2 = document.createElement("p")
ProductItem2.appendChild(titulo2)

const quantity2 = document.createElement("p")
ProductItem2.appendChild(quantity2)

const preco2 = document.createElement("p")
ProductItem2.appendChild(preco2)

img2.src = "./imgs/teclado.avif"
preco2.innerText = productsCart[1].price
titulo2.innerText = productsCart[1].name
quantity2.innerText = productsCart[1].quantity

//-------------------------------------------------------/

//li 3 == tv
const ProductItem3 = document.createElement("li")
ProductList.appendChild(ProductItem3);

const img3 = document.createElement("img")
ProductItem3.appendChild(img3)

const titulo3 = document.createElement("p")
ProductItem3.appendChild(titulo3)

const quantity3 = document.createElement("p")
ProductItem3.appendChild(quantity3)

const preco3 = document.createElement("p")
ProductItem3.appendChild(preco3)

img3.src = "./imgs/tv.jpg"
preco3.innerText = productsCart[2].price
titulo3.innerText = productsCart[2].name
quantity3.innerText = productsCart[2].quantity

//-------------------------------------------------------/

//li 3 == teclado
const ProductItem4 = document.createElement("li")
ProductList.appendChild(ProductItem4);

const img4 = document.createElement("img")
ProductItem4.appendChild(img4)

const titulo4 = document.createElement("p")
ProductItem4.appendChild(titulo4)

const quantity4 = document.createElement("p")
ProductItem4.appendChild(quantity4)


const preco4 = document.createElement("p")
ProductItem4.appendChild(preco4)

img4.src = "./imgs/alexa.jpg"
preco4.innerText = productsCart[3].price
titulo4.innerText = productsCart[3].name
quantity4.innerText = productsCart[3].quantity

//-------------------------------------------------------/

//section secundaria
const ProductDetailsSecundaria = document.createElement("section")
main.appendChild(ProductDetailsSecundaria)
ProductDetailsSecundaria.classList.add("secSecundariaStyle")

const button = document.createElement("button")
ProductDetailsSecundaria.appendChild(button)

const quant = document.createElement("p")
ProductDetailsSecundaria.appendChild(quant)
quant.classList.add("quantStyle")

const preco = document.createElement("p")
ProductDetailsSecundaria.appendChild(preco)
preco.classList.add("precoStyle")

button.textContent = "Total de produtos"
quant.innerText = ""
preco.innerText = ""
