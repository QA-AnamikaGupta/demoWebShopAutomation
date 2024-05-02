import HomePage from "../Pages/homePage"

it('Browse the product',()=>{
    HomePage.productBrowsing()
})

it('Searching for a product',()=>{
    HomePage.productSearching('Fiction')
})
it('Verify the Search Result',()=>{
    HomePage.productSearchResult()
})