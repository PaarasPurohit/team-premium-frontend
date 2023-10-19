---
layout: post
title: AstronomyAI 
---

<html lang="en">
<p>Astronomy Chat Bot<p>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Request Demo</title>
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
</head>

<body>
    <div style="text-align:center; margin-top: 50px;">
        <input type="text" id="inputQuery" placeholder="Enter your query here" style="width: 70%; padding: 10px; font-size: 16px;">
        <button onclick="requestAPI()">Search</button>
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
</body>


