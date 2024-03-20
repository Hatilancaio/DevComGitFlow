document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const pesoInput = document.querySelector('input[name="peso"]');
    const alturaInput = document.querySelector('input[name="altura"]');
    const resultadoIMC = document.getElementById('resultado-imc');
    const resultadoPeso = document.getElementById('resultado-peso');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const peso = parseFloat(pesoInput.value.replace(',', '.'));
        const altura = parseFloat(alturaInput.value.replace(',', '.'));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoIMC.textContent = 'Por favor, insira valores válidos para peso e altura.';
            resultadoPeso.textContent = '';
            return;
        }

        const imc = calcularIMC(peso, altura);
        resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)}.`;

        if (imc < 18.5) {
            resultadoPeso.textContent = 'Você está abaixo do peso.';
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultadoPeso.textContent = 'Seu peso está dentro do considerado saudável.';
        } else {
            resultadoPeso.textContent = 'Você está acima do peso.';
        }
    });

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }
});
