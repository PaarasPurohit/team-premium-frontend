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
}
```