const hamburger = document.querySelector(`.hamburger`)

const hamburgerFunction = () => {

    const navBar = document.querySelector(`.nav_bar`)

    if (!navBar.classList.contains(`isActive`)){

        navBar.classList.add("isActive");

    } else {

        navBar.classList.remove("isActive");

    }

}

hamburger.addEventListener("click", () => {
    hamburgerFunction();
})