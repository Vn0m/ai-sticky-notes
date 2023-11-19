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
      


function sendNote(){
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
    
    newNote.innerHTML = noteContent;
    let allNotes = document.getElementById('notes');
    allNotes.appendChild(newNote);


}