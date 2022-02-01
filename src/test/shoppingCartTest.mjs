
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import EWallet from "../app/eWallet.js"
import Customer from "../app/customer.js"
import Apple from "../app/apple.js";
import Milk from "../app/milk.js";
import Newspaper from "../app/newspaper.js"
import { assert ,expect } from "chai"

describe('Shopping cart app',()=>{
    let customer;
    beforeEach(()=> {
        const eWallet = new EWallet(1000);
        customer = new Customer("raghu", eWallet);
    });

    it('verify all products',()=>{
    //Arrange
        const apple = new Apple("Apple","CameoApple", 65, 2);
        const milk = new Milk("Milk", "CreamMilk", 30, 2);
        const newspaper = new Newspaper("Newspaper", "IndianExpress", 3, 1);
    //Act
        customer.AddToCart(apple);
        customer.AddToCart(milk);
        customer.AddToCart(newspaper);
    //Assert
            let product = customer.GetAllProduct();
            const getAssertedProduct=()=>{
              for(let getProduct in customer.GetAllProduct()){
                            if (((JSON.stringify(product[getProduct])===JSON.stringify(apple)) || (JSON.stringify(product[getProduct])===JSON.stringify(milk))|| (JSON.stringify(product[getProduct])===JSON.stringify(newspaper))))
                                    return true;
                                 else 
                                    return false;                          
                    }                     
            }
            expect(getAssertedProduct()).to.be.true

    })

    it('verify the offer in cart',()=>{
    //Arrange
        const offerItem="Milk"
        const minPurchaseQuantity=2
        const apple = new Apple("Apple","CameoApple", 65, 2);
        const milk = new Milk("Milk", "CreamMilk", 30, 2);
        const newspaper = new Newspaper("Newspaper", "IndianExpress", 3, 1);
        
    //Act
        customer.AddToCart(apple);
        customer.AddToCart(milk);
        customer.AddToCart(newspaper);
        customer.CheckForAnyOffer(customer.GetAllProduct(),offerItem,minPurchaseQuantity)

    //Assert
        assert.equal(milk.quantity,4); //ProductWithDiscount
    })

    it('verify payment with discount',()=>{
    //Arrange
        const apple = new Apple("Apple","CameoApple", 65, 2);
        const milk = new Milk("Milk", "CreamMilk", 30, 2);
        const newspaper = new Newspaper("Newspaper", "IndianExpress", 3, 1);
    //Act
       
        customer.AddToCart(apple);
        customer.AddToCart(milk);
        customer.AddToCart(newspaper);
        const totalPrice = customer.GetTotalPrice()
        customer.PayFromEWallet();

    //Assert
        assert.equal(totalPrice,183.35); //ProductWithDiscount
        assert.equal(customer.GetWalletBalance(),816.65) //WalletBalanceWithDiscount

    })

    it('verify payment without discount',()=>{
        //Arrange
            const apple = new Apple("Apple","CameoApple", 50, 1);
            const milk = new Milk("Milk", "CreamMilk", 30, 1);
            const newspaper = new Newspaper("Newspaper", "IndianExpress", 3, 1);
        //Act
            customer.AddToCart(apple);
            customer.AddToCart(milk);
            customer.AddToCart(newspaper);
            const totalPrice = customer.GetTotalPrice()
            customer.PayFromEWallet();

        //Assert
            assert.equal(totalPrice,83); //ProductWithOutDiscount
            assert.equal(customer.GetWalletBalance(),917) //WalletBalanceWithOutDiscount

        })

    it('Remove item from the cart',()=>{
    //Arrange
        const apple = new Apple("Apple","CameoApple", 65, 1);
        const milk = new Milk("Milk", "CreamMilk", 30, 2);
        const newspaper = new Newspaper("Newspaper", "IndianExpress", 3, 1);
    //Act
        customer.AddToCart(apple);
        customer.AddToCart(milk);
        customer.AddToCart(newspaper);
        customer.RemoveFromCart(milk);   
        customer.PayFromEWallet();

    //Assert
        assert.equal(customer.GetWalletBalance(),932) //WalletBalance
    })  

})