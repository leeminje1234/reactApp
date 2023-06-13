let addButton = document.getElementById('addButton');
let tdContainer = document.getElementById('tdContainer');
let textInput = document.getElementById('textInput');

addButton.addEventListener('click', function(){
    
    let paragraph = document.createElement('p');
    paragraph.innerText = textInput.value;
    paragraph.classList.add('paragraph-style');
    
    
    tdContainer.appendChild(paragraph);
    
    
    textInput.value = "";
    textInput.focus();
    
    paragraph.addEventListener('click', function(){
       paragraph.style.textDecoration = "line-through"; 
    });    
    paragraph.addEventListener('dblclick', function(){
       tdContainer.removeChild(paragraph);
    });
});

textInput.addEventListener("keyup", function(e){
    if(e.keyCode == 13) {
        e.preventDefault();
        document.getElementById('addButton').click();
    }
});