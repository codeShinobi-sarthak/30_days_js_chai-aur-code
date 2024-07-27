class Account {
  #balance; //* this is a private property menas can only be accessed in class

  constructor(balance) {
    this.balance = balance;
  }

  deposite(value) {
    this.balance += value;
    console.log("money has been deposite");
    console.log("Updated balance : " + this.balance);
  }

  withdrawl(value) {
    this.balance -= value;
    console.log("money has been withdrawl");
    console.log("Remaining balance : " + this.balance);
  }
}

const account = new Account(10000);
account.withdrawl(6000);
account.deposite(2000);
