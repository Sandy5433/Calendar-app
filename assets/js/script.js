
$(function () {
  console.log('hello')

// select all buttons in the time-block class
  var saveBtns = $(".time-block button");
  saveBtns.on('click', saveToLocal)

//get current time as numbers instead of string by using parseInt
var currentTime = parseInt(dayjs().format("HH"))
console.log(currentTime)

function colorDiv () {
var divTime = parseInt(this.id.split("-")[1]) 
//'this' = each block of the time-block class;split id of each time-block by the dash; select index 1 (index 0 = hour) 
console.log(divTime)
debugger
console.log(this.id)
if(divTime == currentTime){
  
  this.classList.add("present")
} else if (divTime < currentTime){
  // document.getElementById(this.id).classList.add("past")
  this.classList.add("past")
} else if (divTime > currentTime){
  // document.getElementById(this.id).classList.add("future")
  this.classList.add("future")
}
}
// select all the time-block class
var timeDiv = $(".time-block")
//run colorDiv function each time when var timeDiv is called
timeDiv.each(colorDiv)
  
  function saveToLocal() {
    var time = this.parentElement.id //'this' refers to the button that is clicked; traverse to its parent 'div' and select its ID
    var task = $(this.parentElement).children("textarea").val() //get user input
    console.log(time)
    console.log(task)
    localStorage.setItem(time, task); // set user input in local storage
  }

  function loadTask() {
    var key = this.parentElement.id //'this' refers to the textarea tag
    var userInput = localStorage.getItem(key) //retrieves var task that was saved to local
    console.log(userInput)
    // jQury: $(this).val(userInput)
    this.value = userInput //load saved task into the textarea element (changing the value of 'this' to var userInput) 
  }

   var textAreas = $(".time-block textarea"); 
   console.log(textAreas)
   textAreas.each(loadTask)   //activate loadTask function for each textAreas

  // }

  //display the current date in the header of the page.
var currentDayEl = dayjs().format("MMM D, YYYY");
$("#currentDay").text(currentDayEl);
});