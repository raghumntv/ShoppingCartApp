export default class Milk
{

    constructor(name,type,price,quantity,offer)
    {
        this.price = price;
        this.quantity = quantity;
        this.name = name;
        this.type = type;
        this.offer= offer
    }

    GetPrice()
    {
        return this.price;
    }

    GetType()
    {
        return this.type;
    }

    GetQuantity()
    {
        return this.quantity;
    }

    GetName()
    {
        return this.name;
    }
}
