import { productsList } from "./products_list.js"
import { productsPage } from "./products_page.js"
import { search } from "./search.js"

const app = {}

app.init = async () => {

    productsList()
    productsPage()
    search()
}


app.init()