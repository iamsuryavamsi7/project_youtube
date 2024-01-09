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

function filterButton(argu01){

    const filterButton01 = document.querySelector(argu01)

    if (!filterButton01.classList.contains('isActive')){

        filter();

        filterButton01.classList.add('isActive')

    } else {

        filterButton01.classList.remove('isActive')

    }

}

function filter(){

    const filterElement = document.querySelector('.isActive');

    if (filterElement){

        filterElement.classList.remove("isActive");

    } 

}
