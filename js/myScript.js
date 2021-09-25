// Time Test
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

    console.log(divTime);
    console.log(nowTime);
    console.log(divTime.isSame(nowTime, 'hour'));
    console.log(divTime.isAfter(nowTime, 'hour'));
    console.log(divTime.isBefore(nowTime, 'hour'));
    
})


// Save button
// on click, localstorage.setitem("")
// each text area should have its own key
function buttonClick() {
    localStorage.setItem("")
}