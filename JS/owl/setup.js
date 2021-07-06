$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

//add onHover function.
function showVideoOnHover(obj) {
    $("#image").css("display", "none");
    $("#youtube").css("display", "block");
    $("#youtube").attr("src", $(obj).data("src"));
}
function hideVideo() {
    $("#youtube").css("display", "none");
    $("#image").css("display", "block");
}