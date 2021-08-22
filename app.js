let form=document.getElementById("myform");

let mynewnotes=document.getElementById('mynewnotes');
form.addEventListener('submit',addNewNote);

function addNewNote(e){
e.preventDefault();
let input=document.getElementById("note");
let newNote=input.value;


const li=document.createElement("li");

li.classList="newnote"
li.appendChild(document.createTextNode(newNote))
let closeBtn=document.createElement('span');
closeBtn.textContent="x"
closeBtn.className='closenewnote';
li.appendChild(closeBtn);



mynewnotes.appendChild(li);
input.value='';
}

mynewnotes.addEventListener('click',function(e){
    e.preventDefault;
    if(e.target.classList.contains("closenewnote")){
        e.target.parentElement.remove()
       
    }
   })