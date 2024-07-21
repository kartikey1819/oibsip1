function convertTemperature() {
    // Fetching user input
    const temperatureInput = document.getElementById('temperature').value.trim();
    const unit = document.getElementById('unit').value;
    
    // Validating input
    if (temperatureInput === '' || isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
    
    const temperature = parseFloat(temperatureInput);
    
    // Converting based on selected unit
    let convertedTemperature;
    let convertedUnit;
    
    switch (unit) {
      case 'celsius':
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        break;
      case 'fahrenheit':
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
        break;
      case 'kelvin':
        convertedTemperature = temperature + 273.15;
        convertedUnit = 'Kelvin';
        break;
      default:
        break;
    }
    
    // Displaying the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  }
  