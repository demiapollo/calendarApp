$(function () {
  //I added the current time and day right under h1 and p tags
  let currentTimeDay = dayjs();
  $("#currentDay").text(currentTimeDay.format("MM/DD/YYYY"));

  //click event listener for the save button
  $(".saveBtn").on("click", function () {
    let eventCreated = $(this).siblings(".description").val();

    // // timePicked is a number now
    let timePicked = parseInt($(this).parent().attr("id"));
    // console.log(timePicked);
    // console.log(typeof timePicked);

    //save in local storage
    localStorage.setItem(timePicked, eventCreated);
  });

  //currentHour is a number now
  let currentHour = parseInt(dayjs().format("HH"));

  function checkTime() {
    $(".time-block").each(function () {
      let timePicked = parseInt($(this).attr("id"));

      if (currentHour === timePicked) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (currentHour > timePicked) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  //get user input from localStorage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  checkTime();
});
