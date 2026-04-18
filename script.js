class Account{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
        this.accountNumber=Date.now();
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

const user1=new Account("Abhinav",1000);

user1.deposit(500);
user1.withdraw(200);
user1.checkBalance();