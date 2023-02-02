$(document).ready(function() {
    $("#stream1_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("#stream1_btn").on(function() {
    $(".stream1").toggle(1000);
    $(".stream2").slideDown('slow');
    $(".stream3").show('medium');
    $(".stream1").hide('fast');
    $(".stream1").slideUp('fast');
    $(".stream1").fadeIn('fast');
    $(".stream1").fadeOut('fast');
    $(".stream1").fadeToggle('fast');
    $(".stream1").fadeTo(1000, 0,5);

}); 

$('#myButton').removeClass('blueBox').addClass('border');
$('p').css('color','blue').slideUp(2000).slideDown(2000);
$('a').attr('href','http://www.example.com');