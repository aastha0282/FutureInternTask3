function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (unit === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    }

    resultElement.textContent = `${temperature}  ${unit} is equal to ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}