let la_case_des_entres=document.getElementById('TheInput');
let  les_entres=document.getElementById('AddToDo');
let le_resultat=document.getElementById('js-container-box');

// let  = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('js-container-box');

    la_case_des_entres.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = le_resultat.value;
    les_entres=document.appendChild(paragraph);
    le_resultat.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})