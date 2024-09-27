function calculateTotal() {
    let total = parseFloat(
        document.getElementById("g1").value
    );
    total += parseFloat(
        document.getElementById("g2").value
    );
    total += parseFloat(
        document.getElementById("g3").value
    );

    document.getElementById("total").innerText = `Total grocery amount: ${total}`;
}