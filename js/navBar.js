function toggle() {
    let navBar = document.getElementById("topNavId")
    if (navBar.className === "topNav") {
        navBar.className += " responsive" ;
    } else {
        navBar.className = "topNav"
    }

}