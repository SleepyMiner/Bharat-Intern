document.addEventListener("DOMContentLoaded", function () {
  const transactionForm = document.getElementById("transaction-form");
  const transactionsContainer = document.getElementById(
    "transactions-container"
  );
  const balanceDisplay = document.getElementById("balance-display");

  // Fetch transactions and calculate balance on page load
  fetchTransactionsAndCalculateBalance();

  // Submit form event
  transactionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;

    // Create transaction
    fetch("http://localhost:9000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, type, description }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Clear form
        transactionForm.reset();
        // Fetch transactions and calculate balance again
        fetchTransactionsAndCalculateBalance();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  function fetchTransactionsAndCalculateBalance() {
    fetch("http://localhost:9000/api/transactions")
      .then((response) => response.json())
      .then((data) => {
        transactionsContainer.innerHTML = "";
        let totalIncome = 0;
        let totalExpenses = 0;

        // Create and append total income element
        const totalIncomeElement = document.getElementById("total-income");

        // Create and append total expenses element
        const totalExpensesElement = document.getElementById("total-expense");

        data.forEach((transaction) => {
          const transactionElement = document.createElement("div");
          transactionElement.classList.add("transaction");

          // Calculate total income and expenses
          if (transaction.type === "income") {
            totalIncome += transaction.amount;
            transactionElement.innerHTML = `
                  
                   <div class="home-container09">
              <svg viewBox="0 0 1024 1024" class="home-icon4">
                <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
              </svg>
              <h1 class="home-text08">${transaction.description}</h1>
              <span class="home-text09">+Rs. ${transaction.amount}</span>
            </div>
               `;
          } else if (transaction.type === "expense") {
            totalExpenses += transaction.amount;
            transactionElement.innerHTML = `
                 

                   <div class="home-container10">
              <svg viewBox="0 0 1024 1024" class="home-icon6">
                <path
                  d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                ></path>
              </svg>
              <h1 class="home-text10">${transaction.description}</h1>
              <span class="home-text11">-Rs. ${transaction.amount}</span>
            </div>
               `;
          }

          transactionsContainer.appendChild(transactionElement);
        });

        // Update total income and expenses elements with the final totals
        totalIncomeElement.innerHTML = totalIncome.toFixed(2);
        totalExpensesElement.innerHTML = totalExpenses.toFixed(2);

        // Calculate and display total balance
        const totalBalance = totalIncome - totalExpenses;
        balanceDisplay.textContent = `Rs: ${totalBalance.toFixed(2)}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
