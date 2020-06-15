$(document).ready(function() {
    let day = new Date().getDay();
    $('#daily_line').text(daily_list[day % daily_list.length]);
});
