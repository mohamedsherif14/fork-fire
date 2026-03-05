let loginB = document.getElementById("loginp")
let profilI = document.getElementById("profileI")
let logoutI = document.getElementById("logout")

function LogInCheack() {
    if (JSON.parse(localStorage.getItem("login"))) {
        profilI.style.display = ""
        logoutI.style.display = ""
        loginB.style.display = "none"
    } else {
        profilI.style.display = "none"
        logoutI.style.display = "none"
        loginB.style.display = ""
    }}
    onload = LogInCheack()

    function logout() {
    localStorage.setItem("login", JSON.stringify(false))
    LogInCheack()
}