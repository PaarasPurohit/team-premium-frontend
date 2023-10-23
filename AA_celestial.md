---
layout: post
title: Celestial Object Information
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astronomy App</title>
</head>
<body>
    <!-- Input field for entering the celestial object name -->
    <input type="text" id="searchName" placeholder="Enter Celestial Object Name">
    
    <!-- Input field for entering the date (e.g., 2017-12-20) -->
    <input type="text" id="searchDate" placeholder="Enter Date (e.g., 2017-12-20)">
    
    <!-- Button to trigger the search for celestial objects -->
    <button onclick="searchCelestialObjects()">Search Celestial Objects</button>

    <!-- Display area for search results -->
    <h2>Search Results:</h2>
    <ul id="searchResults"></ul>

    <!-- Display area for favorite celestial objects -->
    <h2>Favorites</h2>
    <ul id="favorites"></ul>

    <script>
        async function searchCelestialObjects() {
            // Get the input values for name and date
            const searchName = document.getElementById('searchName').value;
            const searchDate = document.getElementById('searchDate').value;
            
            // Check if the input fields are empty
            if (!searchName || !searchDate) {
                alert("Please enter both a name and a date.");
                return;
            }
            
            // Construct the URL for the API request using the input values
            const url = `https://astronomy.p.rapidapi.com/api/v2/bodies/positions?latitude=33.775867&longitude=-84.39733&from_date=${searchDate}&to_date=${searchDate}&elevation=166&time=12%3A00%3A00`;
            
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '8401db6433msh3a46dd5bf23ad2ep19a280jsn48536a994246',
                        'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                
                // Check if the response format is as expected
                if (!data || !data.body || !Array.isArray(data.body)) {
                    throw new Error('Unexpected response format');
                }
                
                const filteredResults = data.body.filter(obj => obj.name.toLowerCase().includes(searchName.toLowerCase()));
                displayCelestialObjects(filteredResults);
            } catch (error) {
                console.error('Error searching celestial objects:', error);
            }
        }

        function displayCelestialObjects(celestialObjects) {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = ''; // Clear previous results

            celestialObjects.forEach(obj => {
                const listItem = document.createElement('li');
                listItem.textContent = obj.name;
                const addToFavoritesBtn = document.createElement('button');
                addToFavoritesBtn.textContent = 'Add to Favorites';
                addToFavoritesBtn.addEventListener('click', () => addToFavorites(obj));
                listItem.appendChild(addToFavoritesBtn);
                resultsContainer.appendChild(listItem);
            });
        }

        let favorites = [];

        function addToFavorites(celestialObject) {
            favorites.push(celestialObject);
            displayFavorites();
        }

        function displayFavorites() {
            const favoritesContainer = document.getElementById('favorites');
            favoritesContainer.innerHTML = ''; // Clear previous favorites

            favorites.forEach(obj => {
                const listItem = document.createElement('li');
                listItem.textContent = obj.name;
                favoritesContainer.appendChild(listItem);
            });
        }
    </script>
</body>
</html>