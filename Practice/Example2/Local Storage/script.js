let clicker = document.getElementById('click');
let deleteclicker = document.getElementById('deleteclick');

function clickCounter() {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      const results = document.getElementById("result");
      results.innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";

  }

  function clickDelete() {
    if (localStorage.clickcount) {
        localStorage.clickcount = 0;
    } 
    
    const results = document.getElementById("result");
    results.innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
}

clicker.addEventListener('click',clickCounter);
deleteclicker.addEventListener('click',clickDelete);
