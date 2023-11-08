---
layout: post
title: Celestial Object Information
---

<html lang="en">
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background-color: #fff;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
        }
        button.addToFavorites {
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button.addToFavorites:hover {
            background-color: #1e7e34;
        }
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Celestial Object Information</title>
</head>
<body>
    <input type="text" id="searchInput" placeholder="Search for Celestial Objects">
    <button onclick="searchCelestialObjects()">Search</button>
    <button onclick="displayAllData()">Display All Data</button>
    <div id="altitudeAzimuthDescriptions">
        <p style="font-weight: bold;">Altitude and Azimuth Descriptions:</p>
        <p><strong>Altitude</strong>: Altitude is the angle between a celestial object (e.g., a star or planet) and an observer's horizon. It measures how high above the horizon the object appears.</p>
        <p><strong>Azimuth</strong>: Azimuth is the compass direction from which a celestial object can be seen. It represents the angle clockwise from the north direction to the object's location.</p>
    </div>
    <h2>Search Results:</h2>
    <table id="searchResultsTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Distance (km)</th>
                <th>Altitude (degrees)</th>
                <th>Azimuth (degrees)</th>
            </tr>
        </thead>
        <tbody id="searchResults"></tbody>
    </table>
    <h2>Favorites</h2>
    <ul id="favorites"></ul>
    <script>
        async function searchCelestialObjects() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            try {
                const response = await fetch('https://teampremium.stu.nighthawkcodingsociety.com/api/celestial-data/list');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const celestialData = await response.json();
                clearTable();
                displaySearchResults(celestialData, searchTerm);
            } catch (error) {
                console.error('Error fetching celestial objects:', error);
            }
        }
        function clearTable() {
            const table = document.getElementById('searchResultsTable');
            const tbody = table.getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';
        }
        function displaySearchResults(celestialData, searchTerm) {
            const resultsContainer = document.getElementById('searchResults');
            celestialData.forEach(entry => {
                entry.data.table.rows.forEach(row => {
                    const data = row.cells[0];
                    if (data.name && data.name.toLowerCase().includes(searchTerm)) {
                        const newRow = resultsContainer.insertRow();
                        newRow.insertCell().textContent = data.name;
                        newRow.insertCell().textContent = data.type;
                        newRow.insertCell().textContent = entry.data.dates.from;
                        newRow.insertCell().textContent = data.distance.fromEarth.km || 'N/A';
                        newRow.insertCell().textContent = data.position.horizontal.altitude.degrees || 'N/A';
                        newRow.insertCell().textContent = data.position.horizontal.azimuth.degrees || 'N/A';
                        newRow.insertCell().textContent = data.constellation ? data.constellation.name || 'N/A' : 'N/A';
                        const addToFavoritesBtn = document.createElement('button');
                        addToFavoritesBtn.textContent = 'Add to Favorites';
                        addToFavoritesBtn.addEventListener('click', () => addToFavorites(entry));
                        newRow.appendChild(addToFavoritesBtn);
                    }
                });
            });
        }
        async function displayAllData() {
            try {
                const response = await fetch('https://teampremium.stu.nighthawkcodingsociety.com/api/celestial-data/list');
                if (!response.ok) {
                    console.error('Network response was not ok');
                    return;
                }
                const celestialData = await response.json();
                clearTable();
                displayAllDataResults(celestialData);
                displayConstellations(celestialData);
            } catch (error) {
                console.error('Error fetching celestial objects:', error);
            }
        }
        async function displayAllDataResults(celestialData) {
            const resultsContainer = document.getElementById('searchResults');
            celestialData.forEach(entry => {
                entry.data.table.rows.forEach(row => {
                    const data = row.cells[0];
                    const newRow = resultsContainer.insertRow();
                    newRow.insertCell().textContent = data.name || data.extraInfo.magnitude;
                    newRow.insertCell().textContent = data.type || 'N/A';
                    newRow.insertCell().textContent = entry.data.dates.from;
                    newRow.insertCell().textContent = data.distance.fromEarth.km || 'N/A';
                    newRow.insertCell().textContent = data.position.horizontal.altitude.degrees || 'N/A';
                    newRow.insertCell().textContent = data.position.horizontal.azimuth.degrees || 'N/A';
                    const constellation = data.constellation ? data.constellation.name || 'N/A' : 'N/A';
                    newRow.insertCell().textContent = constellation;
                    const addToFavoritesBtn = document.createElement('button');
                    addToFavoritesBtn.textContent = 'Add to Favorites';
                    addToFavoritesBtn.addEventListener('click', () => addToFavorites(entry));
                    newRow.appendChild(addToFavoritesBtn);
                });
            });
        }
        async function displayConstellations(celestialData) {
            const constellationsTable = document.getElementById('constellationsTable');
            const constellationsBody = document.getElementById('constellations');
            const constellationsSet = new Set();
            celestialData.forEach(entry => {
                if (entry.data && entry.data.table && entry.data.table.rows) {
                    entry.data.table.rows.forEach(row => {
                        if (row.cells) {
                            row.cells.forEach(cell => {
                                if (cell.data && cell.data.constellation) {
                                    const constellation = cell.data.constellation.name;
                                    console.log('Constellation:', constellation); // Debugging
                                    if (constellation) {
                                        constellationsSet.add(constellation);
                                    }
                                }
                            });
                        }
                    });
                }
            });
            const uniqueConstellations = Array.from(constellationsSet);
            console.log('Unique Constellations:', uniqueConstellations); // Debugging
            constellationsBody.innerHTML = '';
            uniqueConstellations.forEach(constellationName => {
                const newRow = constellationsBody.insertRow();
                const nameCell = newRow.insertCell();
                nameCell.textContent = constellationName;
            });
        }
        let favorites = [];
        function addToFavorites(celestialObject) {
            favorites.push(celestialObject);
            displayFavorites();
        }
        function displayFavorites() {
            const favoritesContainer = document.getElementById('favorites');
            favoritesContainer.innerHTML = '';
            favorites.forEach(entry => {
                const listItem = document.createElement('li');
                listItem.textContent = entry.data.table.rows[0].cells[0].name;
                favoritesContainer.appendChild(listItem);
            });
        }
    </script>
</body>
</html>