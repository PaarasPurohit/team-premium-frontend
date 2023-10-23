---
layout: post
title: AstronomyAI 
---

<style>
    #response {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
</style>

<div style="text-align:center; margin-top: 50px;">
    <input type="text" id="inputQuery" placeholder="Enter your query here">
    <button onclick="requestAPI()">Request API</button>
    <div id="response"></div>
</div>

<script>
    async function requestAPI() {
        const inputQuery = document.getElementById('inputQuery').value;

        const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '47adfc21bcmsh44e5abcedbf2a29p150b62jsn37a5f5ecf19a',
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            body: JSON.stringify({
                messages: [{
                    role: 'user',
                    content: inputQuery
                }],
                web_access: false,
                stream: false
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const botResponse = result.BOT.replace(/"/g, '');  // Removing extra quotes

            // Displaying the response in a div
            document.getElementById('response').innerText = botResponse;
        } catch (error) {
            console.error(error);
        }
    }
</script>
