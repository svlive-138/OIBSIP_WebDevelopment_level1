//   converter
function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let outputTemp;
    if (fromUnit === toUnit) {
        outputTemp = inputTemp;
    } else if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        outputTemp = (inputTemp * 9/5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        outputTemp = parseFloat(inputTemp) + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        outputTemp = (inputTemp - 32) * 5/9;
    }   else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        outputTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        outputTemp = inputTemp - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        r =(inputTemp - 273.15) * 9/5 + 32 ;
        outputTemp = r ;
    }
    document.getElementById('outputTemp').value = outputTemp.toFixed(2) + '  ' + toUnit;

}