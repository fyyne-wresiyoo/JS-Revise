const createAccount = (name, initial_amt) => {
  let balance = initial_amt;

  return {
    deposit: (amount) => {
      balance += amount;
      console.log(`Deposited: ${amount}`);
      console.log(`New Balance: ${balance}`);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
        console.log(`Remaining Balance: ${balance}`);
      }
    },

    inquiry: () => {
      console.log(`Current Balance: ${balance}`);
    },

    getDetails: () => {
      console.log(`Account Holder: ${name}`);
      console.log(`Balance: ${balance}`);
    },
  };
};
