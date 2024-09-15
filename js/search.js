   import { fetchProducts } from "./fetch_data.js";
   import { productListTmpl } from "./templates.js";


   /* Vores .json fil med produkter gemmes ned som et array her */
   let products = await fetchProducts()
   let productListContainer = document.querySelector('.product-container')


    export function search() {

        /* renderResult funktionen udskriver vores søgeresultat */
        const renderResult = (result) => {
            productListContainer.innerHTML = '';
        
            result.forEach(product => {
                productListContainer.insertAdjacentHTML('beforeend', productListTmpl(product));
            })
    
        }


        
        /* Koden herunder sørger for at den udskrevne pris ændres, når range-baren rykkes på */
        const price = document.querySelector('#price')
        const outputPrice = () => {
            let priceOutput = document.querySelector('.price-output');
            priceOutput.innerHTML = price.value;
        }
        price.addEventListener('input', outputPrice);



        /* Finder de produkter der lever op til vores søgeresultat */
        const searchInput = (e) => {
            const category = document.querySelector('#category').value;

            /* let searchTerm = e.target.value; */
            let searchTerm = document.querySelector('#search').value


            let result = products.filter(product => 
                (searchTerm === '' || product.title.includes(searchTerm)) &&
                (category === 'all' || product.category === category) &&
                (product.price <= price.value)
            );

            renderResult(result)

    
        }
    
        /* const input = document.querySelector('#search');
        input.addEventListener('input', searchInput); */

                
        const searchBtn = document.querySelector('#search-btn');
        searchBtn.addEventListener('click', searchInput)
    



    } 



