function app () {

    /*Popup Message*/
    openPopup.addEventListener ("click", function (){
        principalMessagePopup.classList.add("show");
    });

    closePopup.addEventListener ("click", function(){
        principalMessagePopup.classList.remove("show");
    });

    window.addEventListener("click", function(event){
        if (event.target == principalMessagePopup){
            principalMessagePopup.classList.remove("show")
        }
    })

    openPopupMsg.addEventListener ("click", function (){
        schoolFacilitiesPopup.classList.add("show");
    });

    closePopupMsg.addEventListener ("click", function(){
        schoolFacilitiesPopup.classList.remove("show");
    });

    window.addEventListener("click", function(event){
        if (event.target == schoolFacilitiesPopup){
            schoolFacilitiesPopup.classList.remove("show")
        }
    })

    //Curriculum Popup
    var openCurriculumPopup1 = document.getElementById("openCurriculumPopup1");
    var openCurriculumPopup2 = document.getElementById("openCurriculumPopup2");
    // Add variables for other elements

    var curriculumPopup1 = document.getElementById("curriculumPopup1");
    var curriculumPopup2 = document.getElementById("curriculumPopup2");
    // Add variables for other popups

    var closeCurriculumPopup1 = document.getElementById("closeCurriculumPopup1");
    // Add variables for other close buttons

    openCurriculumPopup1.addEventListener("click", function () {
        curriculumPopup1.classList.add("Show");
    });

    closeCurriculumPopup1.addEventListener("click", function () {
        curriculumPopup1.classList.remove("Show");
    });
}

return app ();

