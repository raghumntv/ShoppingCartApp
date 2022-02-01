
export default class ShoppingCart
{
    discountPercentage = 5;

     constructor()
    {
        this.products = new Array();
    }

    getAllProduct() {
        return this.products
    }

     addProduct(product)
    {
        this.products.push(product);
    }

     removeProduct(product)
    {
        this.products.splice(this.products.indexOf(product),1);
    }

     getTotalPrice()
    {
        let total = 0;
        this.products.forEach(i => total += i.GetPrice() * i.GetQuantity());
        return this.getDiscount(total)
    }

    getDiscount(totalAmount){
        if (totalAmount > 100) {
            this.discountAmount = this.getDiscountAmount(totalAmount);
            return totalAmount-this.discountAmount
        } else {
            this.discountAmount = 0;
            return totalAmount;
        }
        
    }
    getDiscountAmount(amount) {
        return (amount * this.discountPercentage) / 100;
    }

     emptyCart()
    {
        this.products=[];
    }

    checkForAnyOffer(products,offerItem,offerQuantity){
            products.filter((item)=>{ 
            if(item.name==offerItem && item.quantity>=offerQuantity) {  
                const objIndex = products.findIndex((obj => obj.quantity == item.quantity)); 
                item.quantity+=item.quantity
                products[objIndex].quantity = item.quantity   
            }
        });         
             
    }
}
