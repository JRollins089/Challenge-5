// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var date = new Date();
	document.getElementById("currentDay").innerHTML = date;
var saveButtonEL = $('save');
const rows = document.getElementsByClassName("row time-block past");
let currentHour = parseInt(moment().format('H'));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  const handlePipetteClick = event => {
    const onClick = (saveButtonEL) => {
      // do what you want
      console.log('click');
      // remove event
      document.removeEventListener('click', onClick);
    };
    // add event
    document.addEventListener('click', onClick);
  };

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  document.getElementById(saveButtonEL).addEventListener("click", function ()
    {
        var todo = document.getElementById("todo").value ;
        localStorage.setItem("todo", todo) ;
        alert("Saved To-Do List") ;
        console.log("Saved To-Do List")
    } , false);

    document.getElementById(saveButtonEL).addEventListener("click", function ()
    {
        document.getElementById("todo").innerHTML = localStorage.getItem("todo");
        alert("Reloaded To-Do List") ;
        console.log("Reloaded To-Do List")
    } , false);
  // TODO: Add code to display the current date in the header of the page.

});
