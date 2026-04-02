 let h1  = document.querySelectorAll('h1')

 h1.forEach(function(h){
    h.style.textAlign = "center"

 })

 document.getElementById('about').style.color = "red"

 let para = document.createElement('p')
 
 para.setAttribute("id", "paragraph")



 para.textContent = "We have jus inserted paragraph in about section"
 
//  <p>We have jus inserted paragraph in about section</p>

document.getElementById('about').append(para)
 document.getElementById('paragraph').style.textAlign = "center"

//  function buttonClick(){
//    alert('I have been clicked')
//  }

// Event Listener
// grab the target element
let button = document.getElementById('button')

// attached an event to the target
// button.addEventListener(1 =>event Type, 2  => callback function)

button.addEventListener('click', function(event){
   console.log(event)

   alert('I have been clicked!')

})

// console.log(button)

let myName = document.getElementById('myName')

let form = document.getElementById('form')

form.addEventListener('submit', function(event){
   event.preventDefault()
  let name = document.getElementById('name').value
  
  myName.textContent = name

})