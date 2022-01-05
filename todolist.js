const inputBox=document.querySelector(".inputflides input");
const addbtn=document.querySelector(".inputflides button");
const todolist=document.querySelector(".todolist");
const deleteAllBtn=document.querySelector(".footer Button");


inputBox.onkeyup=()=>{
let userData=inputBox.value;
if(userData.trim()!=0){
    addbtn.classList.add("active");
}else{
    addbtn.classList.remove("active");
}
}
showTasks();

addbtn.onclick=()=>{
    let userData=inputBox.value;
    let getlocalStorage=localStorage.getItem("New todo");
    if(getlocalStorage===null){
        listArr=[];
    }else{
        listArr=JSON.parse(getlocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showTasks();
}
function showTasks(){
    let getlocalStorage=localStorage.getItem("New todo");
    if(getlocalStorage===null){
        listArr=[];
    }else{
        listArr=JSON.parse(getlocalStorage);
    }

const pendingNumb=document.querySelector(".pandingNum");
pendingNumb.textContent=listArr.length;
if(listArr.length>0){
    deleteAllBtn.classList.add("active");

}else{
    deleteAllBtn.classList.remove("active");
}


    let newLiTag='';
    listArr.forEach((element,index)=>{
        newLiTag+=`<li>${element}<span onclick="deleteTask(${index})";><i class="fas fa-trash-alt"></i></span></li>`;
    });
    todolist.innerHTML=newLiTag;
    inputBox.value=""; 
}
 
function deleteTask(index){
    let getlocalStorage=localStorage.getItem("New todo");
    listArr=JSON.parse(getlocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showTasks();
}
deleteAllBtn.onclick=()=>{
    listArr=[];
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showTasks();
}




