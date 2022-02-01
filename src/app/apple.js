
    export default class Apple
    {
        constructor(name,type,price,quantity)
        {
            this.price = price;
            this.name = name;
            this.type = type;
            this.quantity = quantity;
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
