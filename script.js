const API_KEY = '';

function getRandomColor(){
    const COLORS = [
        "#a2d1fc",
        "#ffc2cd",
        "#97aedc",
        "#d967ae",
        "#b7cf8e",
        "#d5edc2",
    ]

    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
      

async function sendNote(){
    /*
    1.take the note from the input box
    2.clear the note from the input box
    3.add the note to the bottom of our list
    */

    const inputElement = document.getElementById('input');
    const noteContent = inputElement.value;
    inputElement.value = "";

    let newNote = document.createElement('li');
    newNote.style = "height: 150px";
    newNote.style.backgroundColor = getRandomColor();
    newNote.classList.add('container');

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'assistant', content: `Turn this into a dad joke: ${noteContent}`}],
        max_tokens: 50
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }

    // fetch(RESOURCE -> from where,OPTION -> additional info like key, format, etc.)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });

    if(response.ok){
        const result =  await response.json();
        const generatedText = result.choices[0].message.content;
        newNote.innerHTML = generatedText;
        let allNotes = document.getElementById('notes');
        allNotes.appendChild(newNote);
    } else {
        console.error("Error!");
    }
}