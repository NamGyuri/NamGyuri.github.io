$(document).ready(function(){

    $("#icon").click(function(){
        $("#icon:checked + label + #header + #pagecover").fadeIn(600);
    });
    $(".menu_btn").click(function(){
        $("#icon:checked + label + #header + #pagecover").fadeOut(600);
    });
});