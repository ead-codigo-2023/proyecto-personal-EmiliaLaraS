/*Scroll de la barra principal (barra negra*/
document.addEventListener('DOMContentLoaded', function () {
    var blackBar = document.querySelector('.black-bar');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            blackBar.classList.add('scroll-down');
        } else {
            blackBar.classList.remove('scroll-down');
        }
    });
});

/*___________________________________________________________________________________________*/
/*para clickear y esconder el carrito de compras*/

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
    
    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });
    
    
    /*---------------------------------------------------------------------------------*/
    const cartInfo = document.querySelector ('.cart-product')
    const rowProduct = document.querySelector ('.row-product')
    
    /*-------------------------------------------------------------------------------*/
    /*Lista de todos los productos en el carrito*/
    const productsList = document.querySelector ('.contenedor-padre')
    
    /*Variable de arreglo de productos*/
    let allProducts = [];
    
    
    let valorTotal = document.querySelector('.total-pagar')
    
    const countProducts = document.querySelector ('#contador-productos')
    
    
    
    
    productsList.addEventListener ('click', e => {
        
        if (e.target.classList.contains('boton-comprar')){
            const product = e.target.parentElement
            
            const infoProduct = {
                quantity: 1,
                title: product.querySelector('h3').textContent,
                price: product.querySelector('p').textContent,
                
            };
            
            const exits = allProducts.some(product => product.title === infoProduct.title)
            
            if (exits){
                const products = allProducts.map(product => {
                    if (product.title === infoProduct.title){
                        product.quantity++;
                        return product
                    } else{
                        return product
                    }
                })
                allProducts = [...products]
            } else{
                allProducts = [...allProducts, infoProduct]
            }
            
            showHTML();
        }
        
        
        
    });
    
    rowProduct.addEventListener('click', (e) => {
        if (e.target.classList.contains ('icon-close')){
            const product = e.target.parentElement
            const title = product.querySelector ('p').textContent 

            allProducts = allProducts.filter( 
                product => product.title !== title
            );

            console.log(allProducts)
            showHTML ()
        }
    })
    
    //Funcion para mostrar en HTML
    
    const showHTML =() => {
        //Limpiar HTML 
        rowProduct.innerHTML = '';
        
        let total= 0;
        let totalOfProducts = 0;
        
        allProducts.forEach (product => {
            const containerProduct = document.createElement('div')
            containerProduct.classList.add('cart-product')
            
            containerProduct.innerHTML = `<div class="info-cart-product">
            
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
            />
            </svg>
            
            `;
            
            rowProduct.append (containerProduct);
            
            total =
            total + parseInt(product.quantity * product.price.slice(1));
            totalOfProducts = totalOfProducts + product.quantity;
            
        });
        
        valorTotal.innerText = `$${total}`;
        countProducts.innerText = totalOfProducts;
        
    }
    
    
/*NOTA PARA EL PROFESOR:
No pude resolver la suma del total al seleccionar los productos en el carrito en javascript. 
Si uno selecciona la cantidad de productos, el total indica lo siguiente: "Total: $NaN". 
No pude entender el error y no logré arreglarlo, pero se hizo lo que se pude jeje :)*/