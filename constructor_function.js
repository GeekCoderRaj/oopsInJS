function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance
}

const account = new BankAccount("Aman", 1000);
console.log(account);