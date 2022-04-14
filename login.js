var input = document.querySelector('#inp-element')
var btn = document.querySelector('.add-data')
var showlist = document.querySelector('.list')
var remove =  document.querySelector('.cls')
var paragraph = document.querySelector('.list p')
var clsform = document.querySelector('#cls-form')

btn.addEventListener('click', () => {
  showlist.style.display = 'block'
  showlist.style.display = 'flex'
  input.value = ''
})
input.addEventListener('keyup', (e) => {
  if(e.keyCode == 13){
   input.value = ''
   clsform.style.display = 'none'
   paragraph.textContent = input.value 
  }

})
  
 
remove.addEventListener('click', () => {
  input.value=''
})

