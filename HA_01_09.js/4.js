// Funktion zur Umrechnung von Fahrenheit in Celsius
function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }
  
  // Funktion zur Umrechnung von Celsius in Fahrenheit
  function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
  // Beispielaufrufe der Funktionen
  const fahrenheitTemperature = 32;
  const celsiusTemperature = 0;
  
  console.log(`${fahrenheitTemperature} Fahrenheit entspricht ${convertToCelsius(fahrenheitTemperature)} Celsius`);
  console.log(`${celsiusTemperature} Celsius entspricht ${convertToFahrenheit(celsiusTemperature)} Fahrenheit`);  