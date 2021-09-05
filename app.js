let form=document.getElementById("myform");

let mynewnotes=document.getElementById('mynewnotes');
form.addEventListener('submit',addNewNote);
document.addEventListener('DOMContentLoaded',getLocalStorageOnLoaded)
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
this.reset();
 addNoteToLocalStorage(newNote);
}

mynewnotes.addEventListener('click',function(e){
    e.preventDefault;
    if(e.target.classList.contains("closenewnote")){
        e.target.parentElement.remove()
       removeFromLocalStorage(e.target.parentElement.textContent)
    }
   })


   function addNoteToLocalStorage(newNote){

    let notes=getNoteFromLocalStorage();
    notes.push(newNote);
    localStorage.setItem('notes',JSON.stringify(notes))
   }

   function getNoteFromLocalStorage(){
     let notes;
     let noteFromLg=localStorage.getItem('notes');
     if(noteFromLg===null){
         notes=[];
     }
     else{
         notes=JSON.parse(noteFromLg)
     }
     return notes;
   }
function getLocalStorageOnLoaded(){
    let notes=getNoteFromLocalStorage();
    notes.forEach(element => {
        const li=document.createElement("li");

        li.classList="newnote"
        li.appendChild(document.createTextNode(element))
        let closeBtn=document.createElement('span');
        closeBtn.textContent="x"
        closeBtn.className='closenewnote';
        li.appendChild(closeBtn);
        mynewnotes.appendChild(li);
    });
}

function  removeFromLocalStorage(noteContent){
    let deleteNote=noteContent.substring(0,noteContent.length - 1)
    let notesFromLS=getNoteFromLocalStorage();
    notesFromLS.forEach(function(note,index){
    if(note===deleteNote){
        notesFromLS.splice(index,1);
    }
    })

    localStorage.setItem('notes',JSON.stringify(notesFromLS))
}