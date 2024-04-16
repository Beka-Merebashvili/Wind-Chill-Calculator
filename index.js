function calculateWindChill() {
    const windSpeed = parseFloat(document.getElementById('wind-speed').value);
    const temperature = parseFloat(document.getElementById('air-temperature').value);
    const windUnits = document.getElementById('wind-utils').value;
    const tempUnits = document.getElementById('temperature-units').value;

    // Convert wind speed to miles per hour if necessary
    let v = windSpeed;
    if (windUnits === 'kph') {
        v = windSpeed / 1.60934; // 1 mile = 1.60934 kilometers
    } else if (windUnits === 'mps') {
        v = windSpeed * 2.23694; // 1 meter per second = 2.23694 miles per hour
    } else if (windUnits === 'kts') {
        v = windSpeed * 1.15078; // 1 knot = 1.15078 miles per hour
    } else if (windUnits === 'fts') {
        v = windSpeed * 0.681818; // 1 foot per second = 0.681818 miles per hour
    }

    // Convert temperature to Fahrenheit if necessary
    let t = temperature;
    if (tempUnits === 'C') {
        t = (temperature * 9/5) + 32; // Celsius to Fahrenheit conversion formula
    } else if (tempUnits === 'K') {
        t = (temperature - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit conversion formula
    }

    // Calculate wind chill temperature using the given formula
    const windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16);

    // Display the result
    document.getElementById('result').innerText = `Wind Chill Temperature: ${windChill.toFixed(2)} °F`;
}

function resetForm() {
    document.getElementById('result').innerText = "";
    document.getElementById('myForm').reset();
}
