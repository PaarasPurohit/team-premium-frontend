---
layout: post
title: Planet Weight Simulator
---

<html>
    <head>
        <style>
            div.content {
                font-family: Arial, sans-serif;
                text-align: center;
                background-color: #250070;
                padding: 20px;
            }
            p {
                font-size: 18px;
                margin-bottom: 10px;
            }
            input[type="text"] {
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                width: 200px;
                margin-right: 10px;
            }
            button[type="submit"] {
                padding: 10px 20px;
                background-color: #4CAF50;
                color: #fff;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                cursor: pointer;
            }
            button[type="submit"]:hover {
                background-color: #45a049;
            }
            table {
                width: 100%;
                margin-top: 20px;
                border-collapse: collapse;
            }
            th, td {
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #4CAF50;
                color: #fff;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2;
            }
        </style>        
    </head>
    <body>
        <div class="content">
            <p>Enter your weight in pounds:</p>
            <input id="weight" type="text">
            <button type="submit" onclick="getWeight()">Submit</button>
            <table id="planetWeights">
                <tr>
                    <th>Planet</th>
                    <th>Weight</th>
                    <th>That weighs about as much as...</th>
                </tr>
                <tr>
                    <td>Mercury</td>
                    <td id="mercuryWeight"></td>
                    <td id="mercuryComparison"></td>
                </tr>
                <tr>
                    <td>Venus</td>
                    <td id="venusWeight"></td>
                    <td id="venusComparison"></td>
                </tr>
                <tr>
                    <td>Earth</td>
                    <td id="earthWeight"></td>
                    <td id="earthComparison"></td>
                </tr>
                <tr>
                    <td>Mars</td>
                    <td id="marsWeight"></td>
                    <td id="marsComparison"></td>
                </tr>
                <tr>
                    <td>Jupiter</td>
                    <td id="jupiterWeight"></td>
                    <td id="jupiterComparison"></td>
                </tr>
                <tr>
                    <td>Saturn</td>
                    <td id="saturnWeight"></td>
                    <td id="saturnComparison"></td>
                </tr>
                <tr>
                    <td>Uranus</td>
                    <td id="uranusWeight"></td>
                    <td id="uranusComparison"></td>
                </tr>
                <tr>
                    <td>Neptune</td>
                    <td id="neptuneWeight"></td>
                    <td id="neptuneComparison"></td>
                </tr>
                <tr>
                    <td>Moon</td>
                    <td id="moonWeight"></td>
                    <td id="moonComparison"></td>
                </tr>
                <tr>
                    <td>Pluto</td>
                    <td id="plutoWeight"></td>
                    <td id="plutoComparison"></td>
                </tr>
            </table>
        </div>
        <script>
            function getWeight() {
                const weightInput = document.getElementById("weight");
                const weight = parseFloat(weightInput.value);
                if (isNaN(weight) || weight <= 0) {
                    alert("Please enter a valid positive weight in pounds.");
                    return;
                }
                const mass = weight * 0.453592;
                const headers = new Headers({
                    'Content-Type': 'application/json',
                });
                const requestOptions = {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: headers,
                };
                fetch(`http://localhost:8035/planet_weights/${mass}`, requestOptions)
                    .then(response => response.json())
                    .then(data => updateTable(data))
                    .catch(error => {
                        console.error("Error:", error);
                        alert("An error occurred while fetching data from the API.");
                    });
            }
    function updateTable(data) {
        console.log(data);
        const planets = [
            "mercury",
            "venus",
            "earth",
            "mars",
            "jupiter",
            "saturn",
            "uranus",
            "neptune",
            "moon",
            "pluto"
        ];
        if (Array.isArray(data.comparisons) && Array.isArray(data.weights) && data.comparisons.length === planets.length && data.weights.length === planets.length) {
            for (let i = 0; i < planets.length; i++) {
                const planet = planets[i];
                const weightElement = document.getElementById(`${planet}Weight`);
                const comparisonElement = document.getElementById(`${planet}Comparison`);
                weightElement.textContent = data.weights[i];
                comparisonElement.textContent = data.comparisons[i];
            }
        } else {
            console.error("Data structure does not match expectations");
        }
    }
        </script>
    </body>
</html>

Wanna know more about planets besides your weight on them? Learn about them <a href="{{ site.baseurl }}/AB_planet_quiz.html">here</a>.

Or do you have really specific questions? Ask them <a href="{{ site.baseurl }}/AC_ai.html">here</a>.

Or do you want to get information on more celestial objects than just the ones listed? Get it <a href="{{ site.baseurl }}/AA_celestial.html">here</a>.