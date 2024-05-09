const inputBox= document.getElementById("input-box");
const lis=document.getElementsByClassName("todo_value");
function AddTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("todo");
        li.innerHTML=inputBox.value;
        lis.appendChild(todo);
        let span=document.createElement("span");
        spanElement.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
};
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagname==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();