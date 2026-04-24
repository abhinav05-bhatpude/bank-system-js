class Account {
  static totalAccounts = 0;
  static bankName = "MyBank";

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.accountNumber = Date.now();
    Account.totalAccounts++;
  }

  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}

const nameInput = document.getElementById("nameInput");
const balanceInput = document.getElementById("balanceInput");
const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");

const createBtn = document.getElementById("createBtn");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const showBtn = document.getElementById("showBtn");

const output = document.getElementById("message");

let user = null;

createBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const balance = Number(balanceInput.value);

  if (!name || balance <= 0) {
    output.innerText = "Enter valid name and balance ❌";
    return;
  }

  user = new Account(name, balance);
  output.innerText = `Account created for ${user.name} ✅`;

  nameInput.value = "";
  balanceInput.value = "";
});

depositBtn.addEventListener("click", () => {
  if (!user) {
    output.innerText = "Create account first ❌";
    return;
  }

  const amount = Number(depositInput.value);

  if (amount <= 0) {
    output.innerText = "Enter valid deposit amount ❌";
    return;
  }

  user.deposit(amount);
  output.innerText = `Deposited ₹${amount} ✅`;
  depositInput.value = "";
});

withdrawBtn.addEventListener("click", () => {
  if (!user) {
    output.innerText = "Create account first ❌";
    return;
  }

  const amount = Number(withdrawInput.value);

  if (amount <= 0) {
    output.innerText = "Enter valid withdraw amount ❌";
    return;
  }

  if (!user.withdraw(amount)) {
    output.innerText = "Insufficient balance ❌";
    return;
  }

  output.innerText = `Withdrawn ₹${amount} ✅`;
  withdrawInput.value = "";
});

showBtn.addEventListener("click", () => {
  if (!user) {
    output.innerText = "Create account first ❌";
    return;
  }

  output.innerHTML = `
    <strong>Name:</strong> ${user.name} <br>
    <strong>Balance:</strong> ₹${user.balance} <br>
    <strong>Account No:</strong> ${user.accountNumber} <br><br>
    <strong>Total Accounts:</strong> ${Account.totalAccounts} <br>
    <strong>Bank:</strong> ${Account.bankName}
  `;
});