const mobileHamburguer = document.querySelector(".mobileMenuToggle");
const mobileMenu = document.querySelector(".menu");
const hamburguerFirstRow = document.querySelector(".firstHamburguerRow");
const hamburguerSecondRow = document.querySelector(".secondHamburguerRow");
const hamburguerThirdRow = document.querySelector(".thirdHamburguerRow");
const body = document.querySelector("body");
const blackScreen = document.querySelector(".blackScr");
const featuresContentWrapper = document.querySelector(".toggleMenuContentWrapperFeatures");
const featuresMenu = document.querySelector(".toggleMenuFeatures");
const companyContentWrapper = document.querySelector(".toggleMenuContentWrapperCompany");
const companyMenu = document.querySelector(".toggleMenuCompany");
let windowWidth;

mobileHamburguer.addEventListener("click", () => {
    checkWindowWidth()

    console.log(windowWidth)

    if(windowWidth < 770 && windowWidth > 500) {
        toggleMenu("menuActive770")
    } else if(windowWidth < 500) {
        toggleMenu("menuActive500")
    }
});

function checkWindowWidth() {
    windowWidth = window.screen.width;
}

function toggleMenu(classe) {
    if(mobileMenu.classList.contains("menuActive770")){

        mobileMenu.classList.remove("menuActive770");

        hamburguerFirstRow.classList.remove("firstRowActive")
        hamburguerSecondRow.classList.remove("secondtRowActive")
        hamburguerThirdRow.classList.remove("thirdRowActive")

        mobileHamburguer.classList.remove("activeMobileHamburguer")

        body.classList.remove("bodyMenuActive")

        blackScreen.classList.remove("blackScreenActive")

    } else if(mobileMenu.classList.contains("menuActive500")){

        mobileMenu.classList.remove("menuActive500");

        hamburguerFirstRow.classList.remove("firstRowActive")
        hamburguerSecondRow.classList.remove("secondRowActive")
        hamburguerThirdRow.classList.remove("thirdRowActive")

        mobileHamburguer.classList.remove("activeMobileHamburguer")

        body.classList.remove("bodyMenuActive")

        blackScreen.classList.remove("blackScreenActive")

    } else {
        mobileMenu.classList.add(classe);

        hamburguerFirstRow.classList.add("firstRowActive")
        hamburguerSecondRow.classList.add("secondRowActive")
        hamburguerThirdRow.classList.add("thirdRowActive")

        mobileHamburguer.classList.add("activeMobileHamburguer")

        body.classList.add("bodyMenuActive")

        blackScreen.classList.add("blackScreenActive")

    }
}

featuresContentWrapper.addEventListener("click", () => {
    featuresMenu.classList.toggle("subMenuActive");
});

companyContentWrapper.addEventListener("click", () => {
    companyMenu.classList.toggle("subMenuActive");
});