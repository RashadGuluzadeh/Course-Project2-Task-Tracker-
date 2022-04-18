var input = document.querySelector("#inp-element");
var btn = document.querySelector(".add-data");
var showlist = document.querySelector(".list");
var remove = document.querySelector(".cls");
var paragraph = document.querySelector(".list p");
var clsform = document.querySelector("#cls-form");
var inpdata = document.querySelector(".inp-data");
var sortButton = document.querySelector(".sorting");
var inpdataInput = document.querySelector('.inp-data input')

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (input.value.length == 0) {
      alert("Enter the task");
      clsform.style.display = "block";
      inpdata.style.border = "1px solid #C4C4C4";
    } 
    else {
      const addli = document.createElement("LI");
      addli.classList.add("showli");
      addli.innerHTML = input.value;
      const deletebtn = document.createElement("button");
      deletebtn.classList.add("remove-btn");
      addli.appendChild(deletebtn);
      showlist.appendChild(addli);
      input.value = "";
      showlist.style.display = "block";
      showlist.style.display = "flex";
      clsform.style.display = "none";
      // inpdata.style.border = "none";
      // inpdata.style.display = 'none'
      addli.setAttribute("draggable", true);
      clsform.style.marginTop = '0px'
      addli.lastChild.style.marginBottom = '0px'
    }
  }

  var liremove = document.querySelectorAll(".remove-btn");
  for (var i = 0; i < liremove.length; i++) {
    liremove[i].onclick = function () {
      this.parentNode.remove();
      if (showlist.childElementCount == 0) {
        showlist.style.display = "none";
        clsform.style.display = "block";
        inpdata.style.border = "1px solid #C4C4C4";
        inpdata.style.display = 'block'
        clsform.style.marginTop = '10px'

      }
    };
  }
});

btn.addEventListener("click", () => {
  clsform.style.display = "block";
  inpdata.style.border = "1px solid #C4C4C4";
  inpdata.style.display = 'block'
});

remove.addEventListener("mouseover", () => {
  remove.style.background = `url(./img-icon/close-btn-hov.svg)`;
  remove.style.backgroundRepeat = "no-repeat";
  remove.style.backgroundPosition = "center";
});

remove.addEventListener("mouseleave", () => {
  remove.style.background = `url(./img-icon/close-btn.svg)`;
});

remove.addEventListener("click", () => {
  input.value = "";
});

const drag = document.querySelector('.wrapper')
new Sortable(drag, {
  animation: 250
})

let isTrue = true;
sortButton.onclick = function () {
  if (isTrue) {
    isTrue = false;
    sortButton.style.background = "url(./img-icon/sorted.svg)";
    sortButton.style.width = "25px";
    sortButton.style.height = "15px";
    sortButton.style.border = "none";
    sortButton.onmouseover = function () {
      sortButton.style.background = `url(./img-icon/sorted.svg)`;
      sortButton.style.transition = "0.3s";
    };
    sortButton.onmouseout = function () {
      sortButton.style.background = `url(./img-icon/sort.svg)`;
      sortButton.style.transition = "0.3s";
    };
  } 
  else {
    isTrue = true;
    sortButton.style.background = "url(./img-icon/reverse-sorted.svg)";
    sortButton.style.width = "25px";
    sortButton.style.height = "15px";
    sortButton.style.border = "none";
    sortButton.onmouseover = function () {
      sortButton.style.background = `url(./img-icon/reverse-sorted.svg)`;
      sortButton.style.transition = "0.3s";
    };
    sortButton.onmouseout = function () {
      sortButton.style.background = `url(./img-icon/reverse-sort.svg)`;
      sortButton.style.transition = "0.3s";
    };
  }

  var list,
    i,
    switching,
    b,
    shouldSwitch,
    dir,
    switchcount = 0;
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = showlist.getElementsByTagName("LI");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } 
      else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } 
    else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};
