$(function(){
    // navbar
    let togglerBtn = $(".myTogglerBtn");
    togglerBtn.click(function(){
        let menu = $("nav #myNavbar ul");
        menu.toggleClass("menuActive");

        let logo = $("nav .myLogo")
        logo.toggleClass("activeLogo");
 



    }) 
})