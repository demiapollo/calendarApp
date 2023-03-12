// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT:
  // What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
  // How might the id be useful when saving the description in local storage?

  //I added the current time and day right under h1 and p tags
  let currentTimeDay = dayjs();
  $("#currentDay").text(currentTimeDay.format("MM/DD/YYYY"));

  let timePicked = parseInt($(this).parent().attr("id"));

  //click event listener for the save button
  $(".saveBtn").on("click", function () {
    let eventCreated = $(this).siblings(".description").val();

    // // timePicked is a number now
    timePicked = parseInt($(this).parent().attr("id"));
    console.log(timePicked);
    console.log(typeof timePicked);
    //save in local storage
    localStorage.setItem(timePicked, eventCreated);
  });

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?

  //currentHour is a number now
  let currentHour = parseInt(dayjs().format("HH"));

  function checkTime() {
    $(".time-block").each(function () {
      if (currentHour === timePicked) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else if (currentHour < timePicked) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }

  checkTime();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
