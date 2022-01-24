// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has loaded.")
  
  
  clickListener()
  
})

errorModal.classList.add("hidden")

function hideError(){
  errorModal.classList.add("hidden")
}

removeActivated()
function removeActivated(){
  document.addEventListener('click',e)
    if(e.target.classList === 'activated-heart'){
      e.target.classList.remove("activated-heart") 
}
}

function clickListener(){
  document.addEventListener('click', (event) => {
    if(event.target.classList[0] === 'like-glyph'){
      console.log("Found!")
      mimicServerCall()
      .then(resp => {
        event.target.classList.add("activated-heart")
      })
      .catch(error => {
        errorModal.classList.remove("hidden")
        setTimeout(() => {
          hideError()
        }, 3000)
      })
  }})
}

//heart.addEventListener('click', cb(heart))

//function cb(heart) {
  //console.log(heart.target)
  //mimicServerCall()
  //.then(() => {
    //if (heart.target.innerText === EMPTY_HEART){
      //heart.target.classList.add('activated-heart')
      //heart.target.innerText = FULL_HEART
    //}
    //else {
      //heart.target.classList.remove('activated-heart')
      //heart.target.innerText = EMPTY_HEART
    //}
  //})
  //.catch(() => {
    
  //})
//};



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
