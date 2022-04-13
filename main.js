let $ = document
let covers = $.querySelectorAll(".cover")
// main script
covers.forEach(function (cover) {
    cover.addEventListener("click", function () {
        removeClass()
        cover.classList.add("show")
    })
})
// remove cover class function
function removeClass() {
    covers.forEach(function(cover){
            cover.classList.remove("show")
    })
}