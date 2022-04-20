const input = document.querySelector("#inp-element");
const btn = document.querySelector(".add-data");
const showlist = document.querySelector(".list");
const remove = document.querySelector(".cls");
const paragraph = document.querySelector(".list p");
const clsform = document.querySelector("#cls-form");
const inpdata = document.querySelector(".inp-data");
const sortButton = document.querySelector(".sorting");
const inpdataInput = document.querySelector('.inp-data input')

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

  const liremove = document.querySelectorAll(".remove-btn");
  for (let i = 0; i < liremove.length; i++) {
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
  inpdataInput.focus()
});

remove.addEventListener("mouseover", () => {
  remove.style.background = `url(./img-icon/close-btn-hov.svg)`;
  remove.style.backgroundRepeat = "no-repeat";
  remove.style.backgroundPosition = "center";
  remove.style.width = '1.5vw'
  remove.style.height = '1.5vw'
  remove.style.backgroundSize = 'cover'
});

remove.addEventListener("mouseleave", () => {
  remove.style.background = `url(./img-icon/close-btn.svg)`;
  remove.style.backgroundRepeat = "no-repeat";
  remove.style.backgroundPosition = "center";
  remove.style.width = '1.5vw'
  remove.style.height = '1.5vw'
  remove.style.backgroundSize = 'cover'
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
    sortButton.style.width = "1.8vw";
    sortButton.style.height = "1.12vw";
    sortButton.style.backgroundSize = 'cover'
    sortButton.style.backgroundRepeat = 'no-repeat'
    sortButton.style.border = "none";
    sortButton.onmouseover = function () {
      sortButton.style.background = `url(./img-icon/sorted.svg)`;
      sortButton.style.width = "1.8vw";
      sortButton.style.height = "1.12vw";
      sortButton.style.backgroundSize = 'cover'
      sortButton.style.backgroundRepeat = 'no-repeat'
      sortButton.style.transition = "0.3s";
    };
    sortButton.onmouseout = function () {
      sortButton.style.background = `url(./img-icon/sort.svg)`;
      sortButton.style.transition = "0.3s";
      sortButton.style.width = "1.8vw";
      sortButton.style.height = "1.12vw";
      sortButton.style.backgroundSize = 'cover'
      sortButton.style.backgroundRepeat = 'no-repeat'
    };
  } 
  else {
    isTrue = true;
    sortButton.style.background = "url(./img-icon/reverse-sorted.svg)";
    sortButton.style.width = "1.8vw";
    sortButton.style.height = "1.12vw";
    sortButton.style.backgroundSize = 'cover'
    sortButton.style.backgroundRepeat = 'no-repeat'
    sortButton.style.border = "none";
    sortButton.onmouseover = function () {
      sortButton.style.background = `url(./img-icon/reverse-sorted.svg)`;
      sortButton.style.transition = "0.3s";
      sortButton.style.width = "1.8vw";
      sortButton.style.height = "1.12vw";
      sortButton.style.backgroundSize = 'cover'
      sortButton.style.backgroundRepeat = 'no-repeat'
    };
    sortButton.onmouseout = function () {
      sortButton.style.background = `url(./img-icon/reverse-sort.svg)`;
      sortButton.style.transition = "0.3s";
      sortButton.style.width = "1.8vw";
      sortButton.style.height = "1.12vw";
      sortButton.style.backgroundSize = 'cover'
      sortButton.style.backgroundRepeat = 'no-repeat'
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
