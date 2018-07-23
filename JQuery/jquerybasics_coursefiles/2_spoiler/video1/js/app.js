// // When the button is pressed
// $("button").click(function () {
//     //Show the spoiler text
//     $(".spoiler span").show();
//     //Hide the "Reveal Spoiler" button
//     $("button").hide();
// });

$('.spoiler').on('click', 'button', function (event) {
    console.log(event.target);
    //Show the spoiler text
    $(this).prev().show();
    //Hide the "Reveal Spoiler" button
    $(this).hide();
});
//Create the "Reval Spoiler" button
const $button = $("<button>Reveal Spoiler</button>");
//Append to web page
$(".spoiler").append($button);
// Hide the spoiler on page load
$(".spoiler span").hide();