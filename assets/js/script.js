// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  console.log('hello')
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // var hourDiv = $(".time-block")
  // console.log($(hourDiv[0]).children("button")[0]);
  // var hourBtn = $(hourDiv[0]).children("button")[0];
  // hourBtn.addEventListener('click', saveToLocal)

//all buttons in the time-block class
  var saveBtns = $(".time-block button");
  saveBtns.on('click', saveToLocal)

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

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

var timeDiv = $(".time-block")
//run colorDiv function each time when var timeDiv is called
 
timeDiv.each(colorDiv)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  function saveToLocal() {
    var time = this.parentElement.id //'this' refers to the button that is clicked; traverse to its parent 'div' and select its ID
    var task = $(this.parentElement).children("textarea").val()
    console.log(time)
    console.log(task)
    localStorage.setItem(time, task); 
  }

  function loadTask() {
    var key = this.parentElement.id //'this' refers to the textarea tag
    var userInput = localStorage.getItem(key) //retrieves var task that was saved to local
    console.log(userInput)
    // jQury: $(this).val(userInput)
    this.value = userInput //load saved task into the textarea box (changing the value of 'this' to var userInput) 
  }

   var textAreas = $(".time-block textarea"); 
   console.log(textAreas)
   textAreas.each(loadTask)   //activate loadTask function for each textAreas

  // }

  //display the current date in the header of the page.
var currentDayEl = dayjs().format("MMM D, YYYY");
$("#currentDay").text(currentDayEl);
});