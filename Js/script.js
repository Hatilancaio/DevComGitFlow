document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const form = document.getElementById('cpfForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const cpf = cpfInput.value;
        const isValid = validaCPF(cpf);

        if (isValid) {
            resultDiv.textContent = 'CPF válido';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'CPF inválido';
            resultDiv.style.color = 'red';
        }
    });

    function validaCPF(cpf) {
        cpf = cpf.replace(/\D+/g, '');
        if (cpf.length !== 11) return false;

        if (/^(\d)\1{10}$/.test(cpf)) return false;

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }

        let remainder = 11 - (sum % 11);
        remainder = (remainder === 10 || remainder === 11) ? 0 : remainder;

        if (parseInt(cpf.charAt(9)) !== remainder) return false;

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }

        remainder = 11 - (sum % 11);
        remainder = (remainder === 10 || remainder === 11) ? 0 : remainder;

        if (parseInt(cpf.charAt(10)) !== remainder) return false;

        return true;
    }
});
