(function(){
    let products = document.getElementById('products')
    let listProducts = "";
    fetch('/products')
    .then((data) => data.json())
    .then((result) => {
        for (let i = 0; i < 5; i++) {
            console.log(result[i].productName)
            listProducts += `
            <div class="product__item">
                <a href="${result[i].link}">
                    <img src="${result[i].items[0].images[0].imageUrl}" alt="Papaya Bolsa 3Kg">
                </a>
                <div style="heigth: 200px">
                    <section>
                        <span class="brand">${result[i].brand}</span>
                        <h2 class="product-title">
                            <a href="${result[i].link}">${result[i].productName}</a>
                        </h2>
                        <div class="price-wrapper">
                            <span class="price-title">Precio</span>
                            <span><span class="currency">s/</span><span class="list-price">${result[i].items[0].sellers[0].commertialOffer.ListPrice}</span>
                        </div>
                    </section>
                    <a class="product__item--button" href="${result[i].link}">VER PRODUCTO</a>
                </div>
            </div>
            `
        }

        products.innerHTML = listProducts

        $('.owl-carousel').owlCarousel({
            margin:10,
            autoWidth:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    loop: true
                },
                600:{
                    items:3,
                    loop: true
                },
                1024:{
                    items:5
                }
            }
        })
    })
    
})();
