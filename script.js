// =============================
// Apply Button
// =============================

document.querySelector(".hero button").addEventListener("click", function () {
    alert("🎉 Thank you for your interest! Your internship application has been received.");
});

// =============================
// Contact Form Validation
// =============================

document.querySelector("#contact button").addEventListener("click", function () {

    let name = document.querySelector("#contact input[type='text']").value;
    let email = document.querySelector("#contact input[type='email']").value;
    let message = document.querySelector("#contact textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("⚠ Please fill all the fields.");
    } else {
        alert("✅ Your message has been sent successfully!");
    }

});

// =============================
// Animated Counter
// =============================

let counters = document.querySelectorAll(".stats h2");

counters.forEach(counter => {

    let target = parseInt(counter.innerText);

    let count = 0;

    let speed = target / 100;

    let updateCounter = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// =============================
// Scroll To Top Button
// =============================

let topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff5722";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =============================
// Welcome Message
// =============================

window.onload = function () {

    console.log("Welcome to CodeSphere Internship Landing Page!");

};

// =============================
// Navbar Highlight on Scroll
// =============================

let links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.style.color = "white");

        this.style.color = "#ff9800";

    });

});