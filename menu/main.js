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
window.onload = LogInCheack

logoutI.onclick = logout








let catg = document.querySelectorAll(".catg li")
let ctgarray = Array.from(catg)
let sec = document.querySelectorAll(".dishes section")
let secarray = Array.from(sec)

ctgarray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        ctgarray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
        secarray.forEach((div) => {
            div.style.display = "none";
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
    });
});
function search() {
    let searchBar = document.querySelector('#search-input').value.toUpperCase();
    let product = document.querySelectorAll('.card');
    let productName = document.querySelectorAll('.card h2');

    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}




fetch("menu.json")
    .then(res => res.json())
    .then(data => {

        displayProducts(data.Starters, "Starters");
        displayProducts(data.Mains, "Mains");
        displayProducts(data.PastaBowls, "PastaBowls");
        displayProducts(data.Drinks, "Drinks");

    });


function displayProducts(products, className) {

    let container = document.querySelector("." + className);

    products.forEach(product => {

        container.innerHTML += `
                    <div class="card">
                        <div class="dich name">
                            <h2>${product.name}</h2>
                        </div>
                        <div class="photo">
                            <img src="${product.image}" alt="">
                        </div>
                        <div class="price">
                            <h3> ${product.price} LE</h3>
                        </div>
                        <button onclick='addToCart(${JSON.stringify(product)})'>add to cart</button>
                    </div> `;

    });

}

function addToCart(product) {



    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let exist = cart.find(item => item.id === product.id);
    if (!JSON.parse(localStorage.getItem("login"))) {
        window.location.href = '../login/login.html'
        return
    }
    else if (exist) {
        exist.quantity = (exist.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
        
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(` added to cart`);
}

