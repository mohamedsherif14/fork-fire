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
    logincon()
}
window.onload = function () {
    logincon()
    LogInCheack()
    displayOrder()
}

logoutI.onclick = logout
function logincon() {
    if (!JSON.parse(localStorage.getItem("login"))) {
        window.location.href = '../login/login.html'
    }
}


let orders = JSON.parse(localStorage.getItem("order")) || []
let container = document.getElementById("orders")

function displayOrder() {
    orders.forEach(order => {
        container.innerHTML = ``
        let itemsHTML = ""
        let i = 0;
        order.items.forEach(item => {
            itemsHTML += `<p>${item.quantity} x  ${item.name}</p>`
        })

        container.innerHTML += `
            <div class="order-card">
                <div>
                    <h3>Order #${i + 1}</h3>
                    ${itemsHTML}
                </div>
                <span class="price">${order.total} L.E</span>
            </div>

    `
        i++
    })
}
console.log(orders)