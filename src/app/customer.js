
  import ShoppingCart from "../app/shoppingCart.js";
  
  export default class Customer
    {
         
        constructor(name,ewallet)
        {
            this.name = name;
            this.ewallet = ewallet;
            this.cart = new ShoppingCart();
        }

        AddToCart(product)
        {
            this.cart.addProduct(product);
        }

        RemoveFromCart(product)
        {
            this.cart.removeProduct(product);
        }

        GetTotalPrice()
        {
            return this.cart.getTotalPrice();
        }

        GetWalletBalance()
        {
            return this.ewallet.GetBalance();
        }

        PayFromEWallet()
        {
            this.ewallet.DeductAmount(this.GetTotalPrice());
            this.EmptyCart();
        }

        EmptyCart()
        {
            this.cart.emptyCart();
        }

        GetAllProduct()
        {
            return this.cart.getAllProduct();
        }

        CheckForAnyOffer(products,offerItem,offerQuantity)
        {
            this.cart.checkForAnyOffer(products,offerItem,offerQuantity)
        }
    }

