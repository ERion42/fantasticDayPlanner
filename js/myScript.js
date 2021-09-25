// Set the day and date at the top
var today = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(today);

// Change color class based on time now vs time on the scheduler
$(".row").children("div.timeBlock").each(function() {
    var divTime = moment($(this).text().trim(), 'h A');
    var nowTime = moment().format();
    if (divTime.isSame(nowTime, 'hour')) {
        $(this).next().addClass('present');
    }
    if (divTime.isAfter(nowTime, 'hour')) {
        $(this).next().addClass('future');
    }
    if (divTime.isBefore(nowTime, 'hour')) {
        $(this).next().addClass('past');
    }
})

// Restore previous values. This means any user that clicks the "save" button will lock in that hour's schedule until it is cleared.
function renderLastValues() {
    $("#am9").val(localStorage.getItem("9am"))
    $("#am10").val(localStorage.getItem("10am"))
    $("#am11").val(localStorage.getItem("11am"))
    $("#pm12").val(localStorage.getItem("12pm"))
    $("#pm1").val(localStorage.getItem("1pm"))
    $("#pm2").val(localStorage.getItem("2pm"))
    $("#pm3").val(localStorage.getItem("3pm"))
    $("#pm4").val(localStorage.getItem("4pm"))
    $("#pm5").val(localStorage.getItem("5pm"))
}
renderLastValues();

// Save button
// each text area should have its own key
// there is definitely a more elegant way to do this
$("#btn9am").click(function() {
    var am9Input = document.getElementById(am9);
    var txt = $("#am9").val();
    localStorage.setItem("9am",txt);    
})
$("#btn10am").click(function() {
    var am10Input = document.getElementById(am10);
    var txt = $("#am10").val();
    localStorage.setItem("10am",txt);    
})
$("#btn11am").click(function() {
    var am11Input = document.getElementById(am11);
    var txt = $("#am11").val();
    localStorage.setItem("11am",txt);    
})
$("#btn12pm").click(function() {
    var pm12Input = document.getElementById(pm12);
    var txt = $("#pm12").val();
    localStorage.setItem("12pm",txt);    
})
$("#btn1pm").click(function() {
    var pm1Input = document.getElementById(pm1);
    var txt = $("#pm1").val();
    localStorage.setItem("1pm",txt);    
})
$("#btn2pm").click(function() {
    var pm2Input = document.getElementById(pm2);
    var txt = $("#pm2").val();
    localStorage.setItem("2pm",txt);    
})
$("#btn3pm").click(function() {
    var pm3Input = document.getElementById(pm3);
    var txt = $("#pm3").val();
    localStorage.setItem("3pm",txt);    
})
$("#btn4pm").click(function() {
    var pm4Input = document.getElementById(pm4);
    var txt = $("#pm4").val();
    localStorage.setItem("4pm",txt);    
})
$("#btn5pm").click(function() {
    var pm5Input = document.getElementById(pm5);
    var txt = $("#pm5").val();
    localStorage.setItem("5pm",txt);    
})

// Restore Button
// sets all stored values to null, allowing for easier testing
$("#restoreBtn").click(function() {
    var txt = "";
    localStorage.setItem("9am",txt);
    localStorage.setItem("10am",txt);
    localStorage.setItem("11am",txt);
    localStorage.setItem("12pm",txt);
    localStorage.setItem("1pm",txt);
    localStorage.setItem("2pm",txt);
    localStorage.setItem("3pm",txt);
    localStorage.setItem("4pm",txt);
    localStorage.setItem("5pm",txt);
})