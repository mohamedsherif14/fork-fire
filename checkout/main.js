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
}
window.onload = function () {
    LogInCheack()
    displaysummary()
}

logoutI.onclick = logout


let total = 0
let summary = document.getElementById("items")
let cartitems = JSON.parse(localStorage.getItem("cart")) || []
let totalSpan = document.getElementById("Total")
let orders = []
function displaysummary() {

    summary.innerHTML = ""
    total = 0

    cartitems.forEach((item, index) => {

        let subtotal = item.quantity * item.price
        total += subtotal

        summary.innerHTML += `
            <div class="summary-item">
                <span>${item.name} x${item.quantity}</span>
                <span>${subtotal} L.E</span>
            </div>`
    })

    totalSpan.innerHTML = total + ` L.E`
}
function placeorder() {
    let order = {
        items: cartitems,
        total: total
    }
    orders.push(order)
    localStorage.setItem("order" , JSON.stringify(orders))
    localStorage.removeItem("cart")
    alert("order placed")
window.location.href ='../index.html'
}

function clickOrder() {
    validat()
    let form = document.getElementById("myform")
    if (validat()) {
        form.submit()
        placeorder()
    }
}



function validat() {
    let name = document.getElementById("namein")
    let num = document.getElementById("numberin")
    let add = document.getElementById("addin")
    let isvalid = true
    if (name.value.trim() === "") {
        error(name, "is must")
        isvalid = false
    }
    if (num.value === "") {
        error(num, "is must");
        isvalid = false
    }
    else if (num.value.length < 11) {
        error(num, "Enter valid phone number");
        isvalid = false
    }
    if (add.value.trim() == "") {
        error(add, "is must")
        isvalid = false
    }
    return isvalid
}

function error(input, message) {
    let small = input.parentElement.querySelector("small");

    small.innerText = message;
    small.style.display = "block";
    small.style.color = "red";
    input.style.border = " solid 1px red";
}

