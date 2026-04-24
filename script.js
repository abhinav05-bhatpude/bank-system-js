class Account{
    static totalAccounts=0;
    static bankName="MyBank";
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

    static showTotalAccounts(){
        console.log(`Total Accounts : ${Account.totalAccounts}`);
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

const nameInput = document.getElementById("name");
const balanceInput = document.getElementById("balance");
const depositInput=document.getElementById("depositAmount");
const withdrawInput=document.getElementById("withdrawAmount");

const createBtn = document.getElementById("createBtn");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const showBtn = document.getElementById("showBtn");

const output = document.getElementById("message");

let user;
createBtn.addEventListener("click",function(){
    const name=nameInput.value.trim();
    const amount=Number(balanceInput.value);

    if(!name || amount <=0){
        output.innerText="Enter valid input ❌";
        return;
    }
    user=new Account(name,amount);

    output.innerText=`Account created for ${user.name} ✅`
});

depositBtn.addEventListener("click",function(){
    if(!user){
        output.innerText="Create account first ❌";
        return;
    }
    const amount=Number(balanceInput.value);

    if(amount <=0){
        output.innerText="Enter valid amount ❌";
        return;
    }
    user.deposit(amount);
    output.innerText= `Deposited ${amount} successfully ✅`;

});

withdrawBtn.addEventListener("click",function(){
    if(!user){
        output.innerText="Create account first ❌";
        return;
    }

    const amount=Number(balanceInput.value);

    if(amount <=0){
        output.innerText="Enter valid amount ❌";
        return;
    }
    if(amount > user.balance){
        output.innerText="Insufficient balance ❌";
        return
    }

    user.withdraw(amount);

    output.innerText=`Withdraw ${amount} succesfully`;
})

showBtn.addEventListener("click", function() {
  if (!user) {
    output.innerText = "Create account first ❌";
    return;
  }

  output.innerText = `
Name: ${user.name}
Balance: ₹${user.balance}
Account No: ${user.accountNumber}

Total Accounts: ${Account.totalAccounts}
Bank: ${Account.bankName}
  `;
});