class Account{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
        this.accountNumber=Date.now();
    }

    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            console.log(`${this.name} deposited ${amount}`);
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
    getAccountInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`balance: ${this.balance}`);
        console.log(`Account No: ${this.accountNumber}`);
    }
}

const user1=new Account("Abhinav",1000);
const user2=new Account("Rahul",1000);

user1.deposit(500);
user2.deposit(300);

user1.getAccountInfo();
user2.getAccountInfo();