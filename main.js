let loginB = document.getElementById("loginp")
let profilI = document.getElementById("profileI")
let logoutI = document.getElementById("logout")
function LogInCheack() {
    if ( JSON.parse(localStorage.getItem("login"))) {
        profilI.style.display = ""
        loginB.style.display = "none"
        logoutI.style.display = ""
    } else {
        profilI.style.display = "none"
        loginB.style.display = ""
        logoutI.style.display = "none"
    }
}
function logout (){
    localStorage.setItem("login" , JSON.stringify(false))
    LogInCheack()
}
logoutI.onclick= logout


window.onload = LogInCheack()