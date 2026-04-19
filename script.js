class Account{
    static totalAccounts=0;
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
        this.accountNumber=Date.now();
        
        Account.totalAccounts++;

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

class SavingsAccount extends Account{
    constructor(name,balance,interestRate){
        super(name,balance);
        this.interestRate=interestRate;
    }
    addInterest(){
        if(this.balance>0){
            const interest=(this.balance * this.interestRate)/100;
            this.balance+=interest;
        }

    }
}

const user1=new Account("Abhinav",1000);
const user2=new Account("Rahul",1000);

user2.deposit(500);      
user2.addInterest();     
user2.checkBalance();