// initialize your calendar, once the page's DOM is ready

// Initialize evo-calendar in your script file or an inline <script> tag
$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Midnight Blue",
    eventDisplayDefault: false,
  });
});

//adds bootstrap classes to elements once loaded
$(document).ready(function () {
  $(".calendar-events").addClass("mr-5");
});

$(document).ready(function () {
  $(".calendar-inner").addClass("mr-5");
});
<<<<<<< Updated upstream
=======

function addToCal(data) {
  $("#calendar").evoCalendar("addCalendarEvent", data);
}

const getRoutine = async (newDate) => {
  try {
    const response = await fetch(`/api/routines;`, {
      method: "POST",
      body: JSON.stringify({ date: newDate }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("made it here");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("OMDB Error: " + response.statusText);
      return null;
    }
    // ((data) => addToCal(data));
  } catch (err) {
    console.log(err);
  }
};

// selectDate
$("#calendar").on("selectDate", function (event, newDate, oldDate) {
  getRoutine(newDate);
});
>>>>>>> Stashed changes
