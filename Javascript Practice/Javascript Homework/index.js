const fromTemp = document.getElementById('from-temp');
const fromUnit = document.getElementById('from-unit');
const toTemp = document.getElementById('to-temp');
const toUnit = document.getElementById('to-unit');
const convertButton = document.getElementById('convert');

  
  
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const celsiusToKelvin = (celsius) => celsius + 273.15;
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const fahrenheitToCelsius = (fahrenheit) => (farenheit - 32) * 5/9;
const getInputAsCelsius = () => {
    const input = parseFloat(fromTemp.value);
    const unit = fromUnit.options[fromUnit.selectedIndex].value;
    
    if (unit === 'f') {
      return fahrenheitToCelsius(input);
      
    } else if (unit === 'k') {
      return kelvinToCelsius(input);
    }
    
    return input;
  }
  
  const convertCelsiusToUnit = (celsius, unit) => {
    if (unit === 'f') {
      return celsiusToFahrenheit(celsius);
      
    } else if (unit === 'k') {
      return celsiusToKelvin(celsius);
    }
    
    return celsius;
  }
  const handleConvert = () => {
    const celsius = getInputAsCelsius();
    const unit = toUnit.options[toUnit.selectedIndex].value
    const outputTemp = convertCelsiusToUnit(celsius, unit);
    toTemp.value = outputTemp;
  }
  const handleClick = () => {
    const celsius = getInputAsCelsius();
    const unit = toUnit.options[toUnit.selectedIndex].value
    const outputTemp = convertCelsiusToUnit(celsius, unit);
    toTemp.value = outputTemp;
  }
  convertButton.addEventListener('click', handleClick);