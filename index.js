
let homeScoresEl = document.getElementById("home-score")
let guestScoresEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0
function addhome1() {
   homeScore += 1
   homeScoresEl.textContent = homeScore
   
}
function addhome2() {
    homeScore += 2
    homeScoresEl.textContent = homeScore
    
 }
 function addhome3() {
    homeScore += 3
    homeScoresEl.textContent = homeScore
    
 }
 function addguest1() {
    guestScore += 1
    guestScoresEl.textContent = guestScore
    
 }
 function addguest2() {
    guestScore += 2
    guestScoresEl.textContent = guestScore
     
  }
  function addguest3() {
    guestScore += 3
    guestScoresEl.textContent = guestScore
  }
 