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
    }
}
function logout() {
    localStorage.setItem("login", JSON.stringify(false))
    LogInCheack()
    logincon();
}
window.onload = function () {
    LogInCheack();
    displayCart();
    logincon();
}

logoutI.onclick = logout

let total = 0
let cart = document.getElementById("cart-container")
let cartitems = JSON.parse(localStorage.getItem("cart")) || []
let totalSpan = document.getElementById("Total")

function displayCart() {

    cart.innerHTML = ""
    total = 0

    cartitems.forEach((item, index) => {

        let subtotal = item.quantity * item.price
        total += subtotal

        cart.innerHTML += `
        <div class="cart-card">
            <div class="item-info">
                <h3>${item.quantity} ${item.name}</h3>
                <p>${subtotal} L.E</p>
            </div>
            <i class="fa-solid fa-trash remove" onclick="removeItem(${index})"></i>
        </div>`
    })

    totalSpan.innerHTML = total
}

function removeItem(index) {

    cartitems.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(cartitems))

    displayCart()
}

function logincon() {
    if (!JSON.parse(localStorage.getItem("login"))) {
        window.location.href = '../login/login.html'
    }
}