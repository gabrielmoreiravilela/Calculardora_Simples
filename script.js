        function calcular(operator, num1, num2) {
            switch (operator) {
                case '+':
                    return num1 + num2
                case '-':
                    return num1 - num2
                case '/':
                    return num1 / num2
                case '*':
                    return num1 * num2
                default:
                    alert("Operador Inválido")
            }

        }
        let operator = prompt("Escolha um desses operadores [+, -, /, *]")
        let number1 = parseFloat((prompt("Insira o primeiro número")))
        let number2 = parseFloat((prompt("Insira o segundo número")))

        let resultadoCalculo = calcular(operator, number1, number2)

        const res = document.getElementById("resultado")
        res.innerHTML = `Resultado ${resultadoCalculo}`