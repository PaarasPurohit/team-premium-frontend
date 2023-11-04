---
hide: false
toc: true
layout: post
title: Paaras Purohit - Individual Review
description: Recap of key events and learnings from developing Team Premium's Astronomer
type: tangibles
courses: { compsci: {week: 6} }
permalink: /paaras-individual-review
---

# Issue Recap
Running into problems is inevitable for every developer, and I am no exception. While I didn't make review tickets for each week, I did track some of my progress in a time box which can be found below.

[Time Box Progress](https://paaraspurohit.github.io/apcsa-blog-2024/time-box).

Here are some of the problems I ran into:

- **Backend Run Failing.** This was due to commits made by one of the people working on the background template. However, after consulting with my teacher about this, we were able to resolve this issue and get it working.

- **Lack of OOP in JS.** This was mainly due to my lack of practice using OOP in JavaScript frontend to fetch data from the backend. The issue was resolved by consulting with ChatGPT about how to make my code more object-oriented while still keeping the functionality.

- **Lack of Backend Implementation.** This was due to a team-wide lack of initiave on making sure that the backend worked. Due to this, it took longer, for example, for my Planet Weight Simulator backend code to be implemented into the backend. Even still, it does not completely work.

- **Debugging.** We are still in the process of debugging and testing to make sure our final website works for Night at the Museum as well as final ticket submission. This shouldn't be a problem, however, due to our backend now up and running properly.

# Overview of Landing Page - index.html
Landing page, or home page, for Astronomer.  This has been an area of learning and rework.

### HTML Elements
Although are landing page is very minimalistic, we used a table to organize the 2 elements found on the page. We make heavy use of the navigation bar at the top, however.

**Minima Layout.** It is very important to know how a minima site works and layout files provided by a Theme.  It powers our whole site, not just one page. Thus, the game is content between GitHub Pages "header" and "footer".
   - [Minima Readme](https://github.com/jekyll/minima/blob/master/README.md)
   - [Minima Layout](https://github.com/jekyll/minima/blob/master/_layouts/base.html)

```html
<!-- include head.html -->

<body>

  <!-- include header.html -->

  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <!-- content -->
    </div>
  </main>

  <!-- include footer.html -->

</body>
```

This project inherits style from _sass/minima directory.  Developers should start in this directory before adding CSS already defined in GitHub Pages.

- custom-styles.scss is file used to customize style.  Developers start here to differentiate style.

```scss
@import "minima/Nighthawkpages-dracula-highlight"; 
@import "minima/dark-mode"; // Dracula Highlight recommended for dark mode
```

- dark-mode.scss is file that provides inverted background feature for anyting inside a "canvas" tag, this is intended feature to go with idea of being on an alien planet

```scss
:root {
    --default-canvas-filter: invert(100%);
}
/* more code not shown */
canvas {
    filter: var(--default-canvas-filter);
}
```

# Planet Weight Simulator (Paaras' Feature)

## Frontend

### JavaScript OOP

Although it wasn't required, it is a good practice to use object-oriented programming in this course. A great way to do said practice is by not limiting oneself to just doing it in Java. I implemented OOP in my frontend code that still fetches backend data, but using a class with a constructor and different methods.

To start, I made the class declaration:

```js
    class WeightPoster {

    }
```

Then adding a constructor:

```js
    class WeightPoster {
        constructor(accessToken) {
            this.accessToken = accessToken;
        }
    }
```

Then adding the fetch code inside a class method:

```js
    async getWeight() {
        const headers = new Headers({
            'Authorization': `Bearer ${this.accessToken}`,
        });

        const requestOptions = {
            method: 'GET',
            headers: headers,
        };

        try {
            const response = await fetch('https://www.astronomer.nighthawkcodingsociety.com/api/users', requestOptions);
            if (response.ok) {
                const data = await response.json();
                this.handleGetSuccess(data);
            } else {
                this.handleGetError();
            }
        } catch (error) {
            this.handleFetchError(error);
        }
    }
```

And finally, adding the handling methods called in the getData() method.

```js
    handleGetSuccess(data) {
        // Process the data received from the API
        // For example, you can display it in the console
        console.log('Received data:', data);
    }

    handleGetError() {
        alert('Failed to retrieve weight data');
    }

    handleFetchError(error) {
        console.error('Error:', error);
    }
```

At the end of the JS, we need to actually run these methods, just like how I did:

```js
    const accessToken = 'YOUR_ACCESS_TOKEN'; // replace with your actual access token

    const weightPoster = new WeightPoster(accessToken);

    document.getElementById("getButton").addEventListener("click", () => {
        weightPoster.getWeight();
    });
```

And that's all the frontend code!

### HTML That Fits the Purpose

Since this is a planet weight simulator that gets the weight of the user on the planets of our solar system as well as represents the data appropriately, the HTML looks like this:

```html
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
```

### CSS

Although it doesn't affect the functionality, the website still needs to look good. This is done through our Sass & our local CSS, shown below:

```css
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
```

## Backend

### Main Planet Weight Class

Java OOP is required. My feature uses two classes, the main class, and an API controller class. I started by declaring the main planet weight class:

```java
    public class PlanetWeight {

    }
```

Then defining all the class variables:

```java
    private final double mercuryGravity = 3.7;
    private final double venusGravity = 8.87;
    private final double earthGravity = 9.81;
    private final double marsGravity = 3.721;
    private final double jupiterGravity = 24.79;
    private final double saturnGravity = 10.44;
    private final double uranusGravity = 8.69;
    private final double neptuneGravity = 11.15;
```

Then writing a method to use the mass of the user as the input and calculate the weight of the user on each planet, outputting the data using ArrayLists:

```java
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
```

Then writing a method that compares each of the weights to real-life objects to better represent the data:

```java
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
                comparisons.add("A grand piano with additional weight");
            }
        }
        
        return comparisons;
    }    
```

### API Controller:

This is like the middle man between the JavaScript code and the Java code, the frontend and the backend. This is what sets up the connection, basically:

```java
    package com.nighthawk.spring_portfolio.mvc.astronomy;

    import org.springframework.web.bind.annotation.*;
    import org.springframework.http.HttpStatus;

    import java.util.ArrayList;
    import java.util.List;

    @RestController
    @RequestMapping("/planet_weights")
    public class PlanetWeightAPIController {

        @GetMapping("/{mass}")
        public PlanetWeightResponse getPlanetWeights(@PathVariable double mass) {
            if (mass <= 0) {
                throw new IllegalArgumentException("Mass must be positive.");
            }

            PlanetWeight planetWeightCalculator = new PlanetWeight();
            ArrayList<Double> weights = planetWeightCalculator.calculatePlanetWeights(mass);
            ArrayList<String> comparisons = planetWeightCalculator.representWeights(weights);

            return new PlanetWeightResponse(weights, comparisons);
        }

        @ExceptionHandler(IllegalArgumentException.class)
        @ResponseStatus(HttpStatus.BAD_REQUEST)
        public String handleIllegalArgumentException(IllegalArgumentException ex) {
            return ex.getMessage();
        }

    }

    class PlanetWeightResponse {
        private List<Double> weights;
        private List<String> comparisons;

        public PlanetWeightResponse(List<Double> weights, List<String> comparisons) {
            this.weights = weights;
            this.comparisons = comparisons;
        }

        public List<Double> getWeights() {
            return weights;
        }

        public List<String> getComparisons() {
            return comparisons;
        }
    }
```

