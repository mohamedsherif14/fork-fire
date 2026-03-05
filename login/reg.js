let fname = document.getElementById("regName")
let mail = document.getElementById("rege")
let phone = document.getElementById("regNum")
let password1 = document.getElementById("regPass1")
let password2 = document.getElementById("regPass2")
let form = document.getElementById("regf")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let isvalid = true;
    if (fname.value.trim() === '') {
        error(fname, "name is required");
        isvalid = false;
    }
    if (!mail.value.includes("@")) {
        error(mail, "Enter valid email");
        isvalid = false;
    }

    if (phone.value.length < 11) {
        error(phone, "Enter valid phone number");
        isvalid = false;
    }

    if (password1.value.length < 6) {
        error(password1, "Password must be at least 6 characters");
        isvalid = false;
    }
    if (password2.value == "") {
        error(password2, "Password must be at least 6 characters");
        isvalid = false;
    }
    else if (password2.value != password1.value) {
        error(password2, "Passwords do not match");
        isvalid = false;
    }


    if (isvalid) {
        form.submit()
    }
})
function error(input, message) {
    let small = input.parentElement.querySelector("small");

    small.innerText = message;
    small.style.display = "block";
    small.style.color = "red";
    input.style.borderColor = "red";
}

