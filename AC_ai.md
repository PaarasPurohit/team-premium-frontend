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
        const url = 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '47adfc21bcmsh44e5abcedbf2a29p150b62jsn37a5f5ecf19a',
                'X-RapidAPI-Host': 'chatgpt-best-price.p.rapidapi.com'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'user',
                    content: inputQuery
                }]
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const botResponse = result.choices[0].message.content.replace(/"/g, '');

            saveToHistory(inputQuery, botResponse);
            document.getElementById('response').innerText = botResponse;
        } catch (error) {
            console.error(error);
        }
    }

    function saveToHistory(question, answer) {
        let history = localStorage.getItem('history');
        if (!history) {
            history = [];
        } else {
            history = JSON.parse(history);
        }
        history.push({ question, answer });
        localStorage.setItem('history', JSON.stringify(history));
    }

    function viewHistory() {
        const history = JSON.parse(localStorage.getItem('history')) || [];
        const historyDiv = document.getElementById('history');
        historyDiv.innerHTML = '';
        history.forEach(item => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>Q:</strong> ${item.question} <br> <strong>A:</strong> ${item.answer}`;
            historyDiv.appendChild(p);
        });
    }

    function clearHistory() {
        localStorage.removeItem('history');
        document.getElementById('history').innerHTML = '';
    }
</script>
