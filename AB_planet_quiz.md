---
layout: post
title: Planet Info 
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #000;
            color: #fff;
        }
        .solar-system {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .planet {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #3498db;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin: 10px;
            position: relative;
            transition: transform 0.2s;
        }
        .planet:hover {
            transform: scale(1.1);
        }
        .planet span {
            text-align: center;
        }
        .planet-info {
            text-align: center;
            margin-top: 20px;
            display: none;
        }
        .planet-info h2 {
            font-size: 24px;
        }
        .planet-info p {
            font-size: 18px;
        }
    </style>
    <title>Solar System Viewer</title>
</head>
<body>
    <div class="solar-system">
        <div id="sun" class="planet">
            <span>Sun</span>
        </div>
        <div id="mercury" class="planet">
            <span>Mercury</span>
        </div>
        <div id="venus" class="planet">
            <span>Venus</span>
        </div>
        <div id ="earth" class="planet">
            <span>Earth</span>
        </div>
        <div id ="jupiter" class="planet">
            <span>Jupiter</span>
        </div>
        <div id ="saturn" class="planet">
            <span>Saturn</span>
        </div>
        <div id ="uranus" class="planet">
            <span>Jupiter</span>
        </div>
        <div id ="neptune" class="planet">
            <span>Jupiter</span>
        </div>
        <div id ="pluto" class="planet">
            <span>Pluto</span>
        </div>
    </div>
    <div class="planet-info">
        <h2>Planet Information</h2>
        <p id="planet-name"></p>
        <p id="planet-description"></p>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const planetInfo = {
                sun: {
                    name: "Sun",
                    description: "The Sun is the star at the center of the solar system."
                },
                mercury: {
                    name: "Mercury",
                    description: "Mercury is the smallest planet in the solar system."
                },
                venus: {
                    name: "Venus",
                    description: "Venus is often called Earth's sister planet due to their similar size and composition."
                },
                earth: {
                    name:"Earth",
                    description:"Earth is the third planet from the sun and is the only known planet with life on it."
                },
            }
            const planetElements = document.querySelectorAll('.planet');
            const planetNameElement = document.getElementById('planet-name');
            const planetDescriptionElement = document.getElementById('planet-description');
            const planetInfoElement = document.querySelector('.planet-info');
            planetElements.forEach((planet) => {
                planet.addEventListener('click', () => {
                    const planetId = planet.id;
                    const info = planetInfo[planetId];
                    if (info) {
                        planetNameElement.textContent = info.name;
                        planetDescriptionElement.textContent = info.description;
                        planetInfoElement.style.display = 'block';
                    }
                });
            });
        });
    </script>
</body>
</html>