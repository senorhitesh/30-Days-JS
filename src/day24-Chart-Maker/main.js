const ctx = document.querySelector("#myChart");

const addBtn = document.querySelector("#addBtn");
const categoryInput = document.querySelector("#categoryInput");
const amountInput = document.querySelector("#amountInput");
const totalAmount = document.querySelector("#totalAmount");
const descInput = document.querySelector("#descInput");

let expenses = JSON.parse(localStorage.getItem("expence")) || [];

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Food', 'Rent', 'Entertainment', 'Transport'],
        datasets: [{
            label: '# of Budget',
            data: [0, 0, 0, 0],
            borderWidth: 1,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
        }]
    },
    options: {
        scales: { y: { beginAtZero: true } }
    }
});

function addExpense(e) {
    if (descInput.value === "" || amountInput.value === "") {
        alert("Please Enter Name");
        return;
    }
    if (amountInput.value < 0) {
        alert("Enter Valid Number");
        return;
    }

    const description = descInput.value.toString();
    
    const spentAmount = Number(amountInput.value);
    
    const category = categoryInput.value;

    let expenseObj = {
        desc: description,
        amount: spentAmount,
        // 🔧 FIX 2: Rename 'cat' to 'category' so your filter works later
        category: category 
    };
    
    expenses.push(expenseObj);
    
    totalExpense();
    updateChartData();
    localStorage.setItem("expence",JSON.stringify(expenses))
}

addBtn.addEventListener("click", addExpense);

function totalExpense() {
    // 🔧 FIX 3: Removed curly braces {} so it returns automatically
    let total = expenses.reduce((sum, item) => sum + item.amount, 0)
    
    totalAmount.textContent = "$" + total; 
}

function updateChartData() {
    // 🔧 FIX 5: Simplified syntax (removed curly braces)
    const foodTotal = expenses
        .filter(item => item.category === "Food")
        .reduce((sum, item) => sum + item.amount, 0);

    const rentTotal = expenses
        .filter(item => item.category === "Rent")
        .reduce((sum, item) => sum + item.amount, 0);

    const entTotal = expenses
        .filter(item => item.category === "Entertainment")
        .reduce((sum, item) => sum + item.amount, 0);

    const transTotal = expenses
        .filter(item => item.category === "Transport")
        .reduce((sum, item) => sum + item.amount, 0);

    myChart.data.datasets[0].data = [foodTotal, rentTotal, entTotal, transTotal];
    myChart.update(); 
}

