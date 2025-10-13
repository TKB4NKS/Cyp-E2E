import {homePage} from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'


describe('test automation', () =>{
    before(()=>{
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', ()=>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
        //homePageObj.addToCart2()
        //homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
        //homePageObj.verifyAddedToCartMessage() .should('contain', testData.message2.successMessage2)

    })
})


//Use npx cypress run to run test in headless mode
//Use npx cypress open to run standard test using browser