---
layout: post
title: AstronomyAI 
---

<style>
    #response, #history {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        overflow: auto;
    }
</style>

<div style="text-align:center; margin-top: 50px;">
    <input type="text" id="inputQuery" placeholder="Enter your query here">
    <button onclick="requestAPI()">Search</button>
    <button onclick="viewHistory()">View My History</button>
    <button onclick="clearHistory()">Clear My History</button>
    <div id="response"></div>
    <div id="history"></div>
</div>

<script>
    async function requestAPI() {
        const inputQuery = document.getElementById('inputQuery').value;
        const response = await fetch('http://localhost:8085/fetch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: inputQuery })
        });

        try {
            const result = await response.json();
            const botResponse = result.response; // Adjust according to the backend response structure
            document.getElementById('response').innerText = botResponse;
            saveToHistory(inputQuery, botResponse); // We are calling saveToHistory just to show the newly added query in history without refreshing
        } catch (error) {
            console.error(error);
        }
    }

    async function saveToHistory(question, answer) {
        // This function now simply adds the new entry to the local view without saving again to the backend
        let historyDiv = document.getElementById('history');
        let entry = document.createElement('p');
        entry.innerHTML = `<strong>Q:</strong> ${question} <br> <strong>A:</strong> ${answer}`;
        historyDiv.appendChild(entry);
    }

    async function viewHistory() {
        try {
            const response = await fetch('http://localhost:8085/history');
            const history = await response.json();
            const historyDiv = document.getElementById('history');
            historyDiv.innerHTML = '';

            history.forEach(item => {
                const p = document.createElement('p');
                p.innerHTML = `<strong>Q:</strong> ${item.query} <br> <strong>A:</strong> ${item.response}`;
                historyDiv.appendChild(p);
            });
        } catch (error) {
            console.error('Error fetching history', error);
        }
    }

    async function clearHistory() {
        try {
            await fetch('http://localhost:8085/history', { method: 'DELETE' });
            document.getElementById('history').innerHTML = '';
        } catch (error) {
            console.error('Error clearing history', error);
        }
    }
</script>
