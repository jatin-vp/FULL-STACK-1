let balance = 100;

function deposit() {
    const amountInput = document.getElementById("amount");
    const error = document.getElementById("error");
    let amount = Number(amountInput.value);

    if (amount <= 0 || isNaN(amount)) {
        error.style.display = "block";
        return;
    }

    balance += amount;
    updateUI();
}

function withdraw() {
    const amountInput = document.getElementById("amount");
    const error = document.getElementById("error");
    let amount = Number(amountInput.value);

    if (amount <= 0 || isNaN(amount) || amount > balance) {
        error.style.display = "block";
        return;
    }

    balance -= amount;
    updateUI();
}

function updateUI() {
    document.getElementById("balance").innerText = balance;
    document.getElementById("amount").value = "";
    document.getElementById("error").style.display = "none";
}
