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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Celestial Object Information</title>
</head>
<body>
    <!-- Input field for entering the search term -->
    <input type="text" id="searchInput" placeholder="Search for Celestial Objects">
    <button onclick="searchCelestialObjects()">Search</button>
    <!-- Display area for search results in a table -->
    <h2>Search Results:</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody id="searchResults"></tbody>
    </table>
    <!-- Display area for favorite celestial objects -->
    <h2>Favorites</h2>
    <ul id="favorites"></ul>
    <script>
        async function searchCelestialObjects() {
            // Get the search term input by the user
            const searchTerm = document.getElementById('searchInput').value;

            // Fetch celestial data list from the API
            try {
                const response = await fetch('http://localhost:8085/api/celestial-data/list');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const celestialObjects = await response.json();

                // Filter the results based on the user's search term
                const filteredResults = celestialObjects.filter(obj => obj.data.table.rows[0].cells[0].name.toLowerCase().includes(searchTerm.toLowerCase()));

                // Display the search results in a table
                displaySearchResults(filteredResults);
            } catch (error) {
                console.error('Error fetching celestial objects:', error);
            }
        }

        function displaySearchResults(celestialObjects) {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = '';

            celestialObjects.forEach(obj => {
                const row = resultsContainer.insertRow();
                const nameCell = row.insertCell(0);
                const typeCell = row.insertCell(1);

                nameCell.textContent = obj.data.table.rows[0].cells[0].name;
                typeCell.textContent = obj.data.table.rows[0].cells[0].type;

                const addToFavoritesBtn = document.createElement('button');
                addToFavoritesBtn.textContent = 'Add to Favorites';
                addToFavoritesBtn.addEventListener('click', () => addToFavorites(obj));
                row.appendChild(addToFavoritesBtn);
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

            favorites.forEach(obj => {
                const listItem = document.createElement('li');
                listItem.textContent = obj.data.table.rows[0].cells[0].name;
                favoritesContainer.appendChild(listItem);
            });
        }
    </script>
</body>
</html>