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
            <button type="submit" onclick="postWeight()">Submit</button>
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
            </table>
        </div>
    </body>
</html>

### JavaScript
> Fetch code to be implemented when backend is deployed

```javascript
function postWeight() {
    // Retrieve the user's weight from the input field
    const weightInput = document.getElementById("weight");
    const mass = weightInput.value / 9.81;

    // Create an object with the data to be posted
    const postData = {
        mass: mass,
    };

    // Replace 'accessToken' with your actual authentication token
    const accessToken = 'YOUR_ACCESS_TOKEN';

    // Set up the request headers
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
    });

    // Configure the fetch request
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postData),
    };

    // Make the API request to post the weight data
    fetch('https://www.astronomer.nighthawkcodingsociety.com/api/users', requestOptions)
        .then(response => {
            if (response.ok) {
                // Successfully posted data
                alert('Weight data posted successfully!');
                // You can perform additional actions here if needed
            } else {
                // Handle the error if the request fails
                alert('Failed to post weight data');
                // You can handle the error in a way that suits your application
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error if fetch itself encounters an issue
        });
}
```

### Java
> Backend code that will take the user's mass and display planet weights.

```java
import java.util.ArrayList;

public class PlanetWeight {

    private final double mercuryGravity = 3.7;
    private final double venusGravity = 8.87;
    private final double earthGravity = 9.81;
    private final double marsGravity = 3.721;
    private final double jupiterGravity = 24.79;
    private final double saturnGravity = 10.44;
    private final double uranusGravity = 8.69;
    private final double neptuneGravity = 11.15;

    public ArrayList<Double> calculatePlanetWeights(double mass) {
        if (mass <= 0) {
            throw new IllegalArgumentException("Mass must be positive.");
        }

        ArrayList<Double> weights = new ArrayList<Double>();

        weights.add(mass * mercuryGravity);
        weights.add(mass * venusGravity);
        weights.add(mass * earthGravity);
        weights.add(mass * marsGravity);
        weights.add(mass * jupiterGravity);
        weights.add(mass * saturnGravity);
        weights.add(mass * uranusGravity);
        weights.add(mass * neptuneGravity);

        return weights;
    }

    private static String getPlanetName(int index) {
        switch (index) {
            case 0: return "Mercury";
            case 1: return "Venus";
            case 2: return "Earth";
            case 3: return "Mars";
            case 4: return "Jupiter";
            case 5: return "Saturn";
            case 6: return "Uranus";
            case 7: return "Neptune";
            default: return "Unknown";
        }
    }

    public ArrayList<String> representWeights(ArrayList<Double> weights) {
        ArrayList<String> comparisons = new ArrayList<String>();
        
        for (double i : weights) {
            if (i >= 0 && i <= 50) {
                comparisons.add("A bag of dog food");
            } else if (i > 50 && i <= 100) {
                comparisons.add("A standard adult bicycle");
            } else if (i > 100 && i <= 150) {
                comparisons.add("A large microwave oven");
            } else if (i > 150 && i <= 200) {
                comparisons.add("A typical adult male");
            } else if (i > 200 && i <= 250) {
                comparisons.add("A full-sized refrigerator");
            } else if (i > 250 && i <= 300) {
                comparisons.add("A grand piano");
            } else if (i > 300 && i <= 350) {
                comparisons.add("A vending machine");
            } else if (i > 350 && i <= 400) {
                comparisons.add("A small motorcycle");
            } else if (i > 400 && i <= 450) {
                comparisons.add("A black bear (average weight)");
            } else if (i > 450 && i <= 500) {
                comparisons.add("A grand piano with additional weight or a full-grown male lion (average weight)");
            }
        }
        
        return comparisons;
    }    
}
```