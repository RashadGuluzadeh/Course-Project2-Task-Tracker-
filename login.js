var input = document.querySelector("#inp-element");
var btn = document.querySelector(".add-data");
var showlist = document.querySelector(".list");
var remove = document.querySelector(".cls");
var paragraph = document.querySelector(".list p");
var clsform = document.querySelector("#cls-form");
var inpdata = document.querySelector('.inp-data')


input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if(input.value.length == 0){
      alert("Enter the task")
      clsform.style.display = 'block'
      inpdata.style.border = '1px solid #C4C4C4'
    }
    else  {
      const list = document.createElement("div");
      list.classList.add("todolist");
      const addli = document.createElement("li");
      addli.classList.add("showli");
      addli.innerHTML = input.value;
      list.appendChild(addli);
      const deletebtn = document.createElement("button");
      deletebtn.classList.add("remove-btn");
      deletebtn.innerHTML = '<img src="./img-icon/close-btn.svg">';
      list.appendChild(deletebtn);
      showlist.appendChild(list);
      input.value = "";
      showlist.style.display = "block";
      showlist.style.display = "flex";
      clsform.style.display = 'none'
      inpdata.style.border = 'none'
    }
  }
  var liremove = document.querySelectorAll('.remove-btn')
  for(var i = 0; i < liremove.length; i++){
    liremove[i].onclick=function(){
      this.parentNode.remove()
      if(showlist.childElementCount == 0){
        showlist.style.display = 'none'
        clsform.style.display = 'block'
        inpdata.style.border = '1px solid #C4C4C4'
      }
    }
  }  

});


btn.addEventListener('click', () => {
  clsform.style.display = 'block'
  inpdata.style.border = '1px solid #C4C4C4'
});

remove.addEventListener('click', () => {
  input.value = ''
})


