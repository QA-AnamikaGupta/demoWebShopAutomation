import HomePage from "../Pages/homePage"

describe('Verify Home Page',function(){
    //Visit the URL with the environment variable `url` from the cypress.config.js file
    it('Visit the Home Page',()=>{
        HomePage.productBrowsing()
    })

    it('Searching for a product and Verify the Search Result',()=>{
        //Visit the URL with the environment variable `url` from the cypress.config.js file
        HomePage.productSearching('Fiction')
        HomePage.productSearchResult()
    })
})



