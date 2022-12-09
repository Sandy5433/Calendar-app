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

  var saveBtns = $(".time-block button");
  saveBtns.on('click', saveToLocal)

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

var currentTime = parseInt(dayjs().format("h"))
console.log(currentTime)

function colorDiv () {
var divTime = parseInt(this.id.split("-")[1])
console.log(divTime)
if(divTime == currentTime){
  this.classList.add("present")
}
if(divTime < currentTime){
  this.classList.add("past")
}
if(divTime > currentTime){
  this.classList.add("future")
}
}

var timeDiv = $(".time-block")
timeDiv.each(colorDiv)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  function saveToLocal() {
    var key = this.parentElement.id
    var value = $(this.parentElement).children("textarea").val()
    console.log(key)
    console.log(value)
    // var task9am = $(".description").val().trim();
    // console.log(task9am); 
    localStorage.setItem(key, value); 
   }

   function loadTask() {
   
   var key = this.parentElement.id
   var value = localStorage.getItem(key)
   console.log(value)
  //  $(this).val(value)
  this.value = value
     }
   var textAreas = $(".time-block textarea"); 
   console.log(textAreas)
   textAreas.each(loadTask)
  // }

  // TODO: Add code to display the current date in the header of the page.
var currentDayEl = dayjs().format("MMM D, YYYY");
$("#currentDay").text(currentDayEl);
});

