
export default class EWallet
{
     balance;

     constructor(balance)
    {
        this.balance = balance;
    }

    GetBalance()
    {
        return this.balance;
    }

    AddAmount(amount)
    {
        return this.balance += amount;
    }

    DeductAmount(amount)
    {
        if (this.balance > amount)
        {
            return this.balance -= amount;
        }
        return('Insufficient Balance. Please add money to proceed further');
    }
}
