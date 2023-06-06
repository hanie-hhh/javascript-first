const inputText = document.querySelector('#add-book input');
const link = document.querySelector('.button');
const ul = document.querySelector('ul');

const inputsearch = document.querySelector('#search-books input');
const spanDelete = `<span class="delete">حذف</span>`;
const chekbox = document.querySelector('#hide input');
console.log('hiii');

link.addEventListener('click' , function(event){
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputText.value;

    const li = document.createElement('li');

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);

    loc(inputText.value);
    inputText.value = '';

    event.preventDefault();

})

ul.addEventListener('click' , function (event){
    if(event.target.className === 'delete'){
        event.target.parentElement.remove();
        rloc(event.target.parentElement.children[0].textContent);


    }
})

function rloc(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    for(let i=0; i<tasks.length; i++ ){
        if(tasks[i] === task){
            tasks.splice(i, 1);
        }
    }
    if(tasks.length === 0){
        localStorage.clear();
    }
    else{
        localStorage.setItem('tasks' , tasks);
    }


}

inputText.addEventListener('keypress' , function(event){
    if (event.key === "Enter") {
        const spanName1 = document.createElement('span');
        spanName1.className = 'name';
        spanName1.textContent = inputText.value;

        const li = document.createElement('li');

        li.appendChild(spanName1);
        li.innerHTML += spanDelete;

        ul.appendChild(li);
        loc(inputText.value);

        inputText.value = '';

        event.preventDefault();
        }

})
document.addEventListener('DOMContentLoaded' , function (){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }

    for(let item of tasks) {
        const spanName1 = document.createElement('span');
        spanName1.className = 'name';
        spanName1.textContent = item;

        const li = document.createElement('li');

        li.appendChild(spanName1);
        li.innerHTML += spanDelete;

        ul.appendChild(li);
    }
})
function loc(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }

    tasks.push(task);


    localStorage.setItem('tasks' , tasks);
}

chekbox.addEventListener('change' , function(event)
{
    if(chekbox.checked === true){
ul.style.display = 'none';
    }
    else{
        ul.style.display = 'block';
    }
})

inputsearch.addEventListener('keyup' , function (event){
    for(let book of ul.children){
        if(book.firstElementChild.textContent.indexOf(inputsearch.value) !== -1){
            book.style.display = 'block';
        }
        else{
            book.style.display = 'none';
        }
    }

})