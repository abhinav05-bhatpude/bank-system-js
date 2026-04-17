class Account{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }

    deposit(amount){
        if(amount>0){
            this.balance+=amount;
        }
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("Insuffecient Balance");
        }
        else{
            this.balance-=amount;
        }
    }
    checkBalance(){
        console.log(`Balance: ${this.balance}`);
    }
}