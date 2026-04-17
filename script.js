class Account{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
    
    deposit(amount){
        this.balance+=amount
    }
}