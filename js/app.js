// console.log("hello world")
showNotes();

let addBtn = document.getElementById('addBtn');
let addtxt = document.getElementById('addtxt');
let addTitle = document.getElementById('addTitle')

addBtn.addEventListener('click',function(){
    if(addtxt.value == false){
        alert("Please write something in Add Notes.")
    }else{
    let notes = localStorage.getItem('notes')
    if (notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes);
    }
    myObj={
        title: addTitle.value,
        text: addtxt.value

    }
    notesObj.push(myObj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value = "";
    addTitle.value="";
   // console.log(notesObj)
    showNotes();
}

})
function showNotes(element,index){
    let notes = localStorage.getItem('notes')
    if (notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes);
    }
    let html="";
   notesObj.forEach(function(element,index) {
       html += `<div class="noteCard my-3 mx-3 card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p class="card-text">${element.text}</p>
         <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
       </div>
       </div>
     `
   });
   let newDiv = document.getElementById('notes');
   if(notesObj !=0){
   newDiv.innerHTML=html;
   }
   else{
       newDiv.innerHTML=`<p class="text-center">Nothing to show here use Add Notes</p>`
   }
}


function deleteNote(index){
    let notes = localStorage.getItem('notes')
    if (notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchtxt');

// search.addEventListener('input',function(element){
//     let inputval = search.value.toLowerCase();
//     let noteCard = document.getElementsByClassName('card')
//     Array.from(noteCard).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p").innerText;
//         if(cardTxt.includes(inputval)){
//             element.style.display="block"
//         }
//         else{
//             element.style.display="none"
//         }
//     })

// })

search.addEventListener("input",function(){

    let inputval = search.value;
    // console.log(inputval);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display= "block"
        }
        else{
            element.style.display= "none"
        }

    })
})