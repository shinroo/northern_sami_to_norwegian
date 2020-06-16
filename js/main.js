$(document).ready(function() {
    let day = new Date().getDay();
    let daily_line = daily_list[day % daily_list.length];
    daily_line = daily_line.split("##");
    $('#sami_word').text(daily_line[0]);
    $('#norwegian_word').text(daily_line[1]);
    $('#additional_info').text(daily_line[2]);
});
