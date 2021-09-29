const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAll = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
        
    }
}

showTasks();

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector('.pendingNum');
    pendingNum.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAll.classList.add("active");
    }else{
        deleteAll.classList.remove("active");
    }
    let newliTag = '';
    listArr.forEach((element, index) => {
        newliTag += `<li>${element}<span onclick=deleteTask(); ><i class="fa fa-trash" aria-hidden="true"></i></span></li>`;
    });
    todoList.innerHTML = newliTag;
    inputBox.value = "";
}

function deleteTask(index){
    getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}

deleteAll.onclick = ()=>{
    listArr = [];
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}
