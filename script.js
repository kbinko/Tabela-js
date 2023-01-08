const invoices = [];

const currencies = ["PLN", "EUR", "USD", "GBP", "CHF", "JPY", "CZK", "SEK", "NOK", "DKK"];



for (let i = 0; i < 100; i++) {
    const invoice = {
        number: Math.floor(Math.random() * 1000),
        date: new Date(
            2010 + Math.floor(Math.random() * 13),
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28)
        ),
        amount: Math.floor(Math.random() * 10000),
        currency: currencies[Math.floor(Math.random() * currencies.length)],
        status: Math.random() > 0.5 ? "paid" : "unpaid",
        client: "Klient " + Math.floor(Math.random() * 1000),
    };
    invoices.push(invoice);
}


invoices.sort((a, b) => a.number - b.number);


const table = document.getElementById("table");

invoices.forEach((invoice) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${invoice.number}</td>
    <td>${invoice.date.toLocaleDateString()}</td>
    <td>${invoice.amount} ${invoice.currency}</td>
    <td>${invoice.status}</td>
    <td>${invoice.client}</td>
    `;
    table.appendChild(row);
});