function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultadoDiv = document.getElementById('resultado');
    
    if (!peso || !altura) {
        resultadoDiv.innerHTML = "<p class='erro'> Please, enter valid values.</p>";
        return;
    }
    
    let imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";
    
    if (imc < 18.5) {
        classificacao = "Underweight";
        cor = "#ffa500";
    } else if (imc < 24.9) {
        classificacao = "Normal weight";
        cor = "#2ecc71";
    } else if (imc < 29.9) {
        classificacao = "Overweight";
        cor = "#f39c12";
    } else {
        classificacao = "Obesity";
        cor = "#e74c3c";
    }
    
    resultadoDiv.innerHTML = `<p style='color: ${cor}; font-size: 18px; font-weight: bold;'>Your BMI is: ${imc.toFixed(2)} (${classificacao})</p>`;
}