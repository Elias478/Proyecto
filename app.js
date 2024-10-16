document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const customerName = document.getElementById('customerName').value;
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    // Precios de los productos
    const prices = {
        sushi_roll: 10,
        nigiri: 8,
        sashimi: 12
    };

    // Calcular total
    const total = prices[product] * quantity;

    // Mostrar resumen de la orden
    document.getElementById('summaryCustomer').textContent = customerName;
    document.getElementById('summaryProduct').textContent = product.replace('_', ' ').toUpperCase();
    document.getElementById('summaryQuantity').textContent = quantity;
    document.getElementById('summaryTotal').textContent = total.toFixed(2);

    // Mostrar el resumen
    document.getElementById('orderSummary').classList.remove('hidden');
});
