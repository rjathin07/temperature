document.getElementById("convertToFahrenheit").addEventListener("click", function() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("result").innerText = `${celsius}°C is approximately equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid temperature in Celsius.";
    }
});

document.getElementById("convertToCelsius").addEventListener("click", function() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("result").innerText = `${fahrenheit}°F is approximately equal to ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid temperature in Fahrenheit.";
    }
}
);
