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
            width: 200vh;
            background-color: #000;
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
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/409afa33-356a-489c-bbac-f53135b222ee" alt="sun">
        </div>
        <div id="mercury" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/f6550d1d-30f1-40a2-a3c9-8439587b589e" alt="mercury">
            <span>Mercury</span>
        </div>
        <div id="venus" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/c442ac64-a9f2-40a0-9d7b-df70e50854ff" alt="venus">
            <span>Venus</span>
        </div>
        <div id ="earth" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/a5ec48d6-432f-4029-a02d-600e31e85d7e" alt="earth">
            <span>Earth</span>
        </div>
        <div id ="moon" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/a9e6d019-06a3-4bc3-afc2-b1cd4b4c8284" alt="moon">
            <span>Moon</span>
        </div>
        <div id ="mars" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/dd24df81-0d3b-4697-8d4d-93b3a41af8e0" alt="sun">
            <span>Mars</span>
        </div>
        <div id ="asteroid" class="planet">
            <img src = "sun.jpg" alt="asteroids">
            <span>Asteroid Belt</span>
        </div>
        <div id ="jupiter" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/bfffa375-5a2c-48c7-84f8-fae7c7b39e32" alt="jupiter">
            <span>Jupiter</span>
        </div>
        <div id ="saturn" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/974af84a-e5f8-43a1-a781-906b9140fe2c" alt="saturn">
            <span>Saturn</span>
        </div>  
        <div id ="uranus" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/2f23bcb0-b0e9-4ec4-aa0e-fc181867da06" alt="uranus">
            <span>Uranus</span>
        </div>
        <div id ="neptune" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/3c57bc67-c7a4-4404-afcc-4247246b26df" alt="neptune">
            <span>Neptune</span>
        </div>
        <div id ="pluto" class="planet">
            <img src = "https://github.com/Henerystone/ws2/assets/96998793/9307c967-09cf-4a50-bbe4-9200f3448254" alt="pluto">
            <span>Pluto</span>
        </div>
        <div id ="belt" class="planet">
            <img src = "sun.jpg" alt="belt">
            <span>Kuiper Belt</span>
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
                    description: "The Sun is the star at the center of our solar system. It's a giant, hot ball of gas that powers our world with light and heat through nuclear fusion. The Sun has a dynamic surface marked by sunspots and can produce powerful storms and solar flares."
                },
                mercury: {
                    name: "Mercury",
                    description: "Mercury is the closest planet to the Sun and is known for its extreme temperature variations, with scorching hot days and frigid nights due to its lack of atmosphere. It's a rocky, cratered world, and its surface resembles the Moon's."
                },
                venus: {
                    name: "Venus",
                    description: "Venus is often referred to as Earth's 'sister planet' because of its similar size and composition, but it has a hellish environment with a thick, toxic atmosphere that traps heat, making it the hottest planet in the solar system."
                },
                earth: {
                    name:"Earth",
                    description:"Our home planet, Earth, is the only known celestial body to support life. It has a diverse environment, with oceans, continents, and a life-sustaining atmosphere, and it's the third planet from the Sun."
                },
                moon: {
                    name:"Moon",
                    description:"Earth's natural satellite, the Moon, orbits our planet, and its surface is marked by impact craters and volcanic plains. It influences tides on Earth and is the target of historical lunar missions, including NASA's Apollo program. The Moon's study continues to inspire scientific exploration and potential future missions."
                },
                mars: {
                    name:"Mars",
                    description:"Often called the 'Red Planet' due to its rusty appearance, Mars is the fourth planet from the Sun. It has a thin atmosphere and is known for its striking features, including the largest volcano in the solar system, Olympus Mons."
                },
                asteroid: {
                    name:"Asteroid Belt",
                    description:"The asteroid belt is a region located between the orbits of Mars and Jupiter. It contains numerous asteroids, which are rocky and metallic objects. The largest asteroid is Ceres, which is also classified as a dwarf planet."
                },
                jupiter: {
                    name:"Jupiter",
                    description:" Jupiter is the largest planet in the solar system and is a gas giant. It's famous for its immense Great Red Spot, a massive storm. Jupiter has a strong magnetic field and many moons, including the Galilean moons."
                },
                saturn: {
                    name:"Saturn",
                    description:"Saturn is known for its stunning system of rings, made up of ice and rock particles. It's a gas giant like Jupiter and has a multitude of moons, with Titan being one of the most intriguing due to its thick atmosphere and liquid lakes."
                },
                uranus: {
                    name:"Uranus",
                    description:"Uranus is a unique planet because it rotates on its side, possibly due to a past collision. It's an ice giant with a bluish tint and a system of rings. Uranus has a smaller number of moons compared to some of the other gas giants."
                },
                neptune: {
                    name:"Neptune",
                    description:"Neptune is the farthest known planet from the Sun and is another ice giant. It has a dynamic atmosphere with dark storm systems, including the Great Dark Spot. Triton, one of Neptune's moons, is notable for its retrograde orbit."
                },
                pluto: {
                    name:"Pluto",
                    description:"Pluto was considered the ninth planet until reclassification as a dwarf planet. Located in the Kuiper Belt, it's a small, icy world with a complex orbit and multiple moons, including Charon."
                },
                belt: {
                    name:"Kuiper Belt",
                    description:"The Kuiper Belt is a region of the solar system extending beyond Neptune. It's home to various icy objects and small worlds, including Pluto, Haumea, Makemake, and Eris. These objects are often referred to as Trans-Neptunian Objects."
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

Information about each celestial object is good, but how does that relate to you? Find out <a href="{{ site.baseurl }}/AD_planet.html">here</a>.

Or do you want to get information on more celestial objects than just the ones listed? Get it <a href="{{ site.baseurl }}/AA_celestial.html">here</a>.

Or do you have really specific questions? Ask them <a href="{{ site.baseurl }}/AC_ai.html">here</a>.