let form = document.getElementById("loginf")
let phone = document.getElementById("LoginNum")
let password = document.getElementById("loginPass")

const User = {
    phone: "01070638327",
    password: "123456"
};

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let isvalid = true;


    if (phone.value.length < 11) {
        error(phone, "Enter valid phone number");
        isvalid = false;
    }

    if (password.value.length < 6) {
        error(password, "Password must be at least 6 characters");
        isvalid = false;
    }

    if (isvalid) {
        if (phone.value === User.phone && password.value === User.password) {
            localStorage.setItem("login", JSON.stringify(true));
            window.location.href = "../index.html";
        } else {
            alert("Wrong phone or password");
        }
    }
})


function error(input, message) {
    let small = input.parentElement.querySelector("small");

    small.innerText = message;
    small.style.display = "block";
    small.style.color = "red";
    input.style.borderColor = "red";
}