---
layout: post
title: Planet Info 
permalink: /planet-test
---
<html>
<head>
    <title>Solar System Image Map</title>
    <style>
        .planet-info {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="planet-info">
        <h2>Planet Information</h2>
        <p id="planet-name"></p>
        <p id="planet-description"></p>
    </div>
    <div class="planet-image">
        <img src="{{ site.baseurl }}/images/solar-system-5611038_1280.png" usemap="#image-map" width="1280" height="853">
        <map name="image-map">
            <area target="" alt="mercury" title="mercury" coords="462,620,348,469" shape="rect" onclick="getPlanetInfo('mercury')">
            <area target="" alt="earth" title="earth" coords="540,391,683,547" shape="rect" onclick="getPlanetInfo('earth')">
            <area target="" alt="mars" title="mars" coords="739,552,637,650" shape="rect" onclick="getPlanetInfo('mars')">
            <area target="" alt="jupiter" title="jupiter" coords="727,249,916,482" shape="rect" onclick="getPlanetInfo('jupiter')">
            <area target="" alt="saturn" title="saturn" coords="817,42,1035,227" shape="rect" onclick="getPlanetInfo('saturn')">
            <area target="" alt="neptune" title="neptune" coords="1069,115,1192,255" shape="rect" onclick="getPlanetInfo('neptune')">
            <area target="" alt="uranus" title="uranus" coords="1018,472,1121,618" shape="rect" onclick="getPlanetInfo('uranus')">
            <area target="" alt="moon" title="moon" coords="603,301,690,383" shape="rect" onclick="getPlanetInfo('moon')">
            <area target="" alt="pluto" title="pluto" coords="1177,290,1277,398" shape="rect" onclick="getPlanetInfo('pluto')">
        </map>
    </div>
    <script>
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
                name: "Earth",
                description: "Earth is the third planet from the sun and is the only known planet with life on it."
            },
            mars: {
                name: "Mars",
                description: "Mars is known as the Red Planet due to its reddish appearance."
            },
            jupiter: {
                name: "Jupiter",
                description: "Jupiter is the largest planet in the solar system and is a gas giant."
            },
            saturn: {
                name: "Saturn",
                description: "Saturn is known for its beautiful ring system."
            },
            neptune: {
                name: "Neptune",
                description: "Neptune is the eighth and farthest known planet from the Sun in the solar system."
            },
            uranus: {
                name: "Uranus",
                description: "Uranus is the seventh planet from the Sun and is an ice giant."
            },
            moon: {
                name: "Moon",
                description: "The Moon is Earth's natural satellite and is the fifth-largest natural satellite in the solar system."
            },
            pluto: {
                name: "Pluto",
                description: "Pluto is a dwarf planet and was formerly considered the ninth planet in the solar system."
            }
        };
        function getPlanetInfo(planet) {
            const planetNameElement = document.getElementById("planet-name");
            const planetDescriptionElement = document.getElementById("planet-description");
            if (planetInfo[planet]) {
                planetNameElement.textContent = "Planet Name: " + planetInfo[planet].name;
                planetDescriptionElement.textContent = "Description: " + planetInfo[planet].description;
            } else {
                planetNameElement.textContent = "Unknown Planet";
                planetDescriptionElement.textContent = "No information available for this planet.";
            }
        }
    </script>
    </body>
</html>

Information about each celestial object is good, but how does that relate to you? Find out <a href="{{ site.baseurl }}/AD_planet.html">here</a>.

Or do you have really specific questions? Ask them <a href="{{ site.baseurl }}/AC_ai.html">here</a>.