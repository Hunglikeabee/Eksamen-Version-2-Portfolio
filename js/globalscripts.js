/* ADD HEADER TO THE PAGES */

const theHeader = document.querySelector("header");

theHeader.innerHTML = ` <section class="header-menu">
                        <a href="/index.html"><div class="logo"></div></a>
                            <div class="hamburger__container">
                                <label for="hamburger" class="hamburger__icon-menu" tabindex="0"><i class="fas fa-bars"></i></label>
                                <input type="checkbox" id="hamburger">
                                <div class="hamburger__dropdown-menu">
                                    <a href="index.html" class="active">HOME</a>
                                    <a href="posts.html">BLOGS</a>
                                    <a href="contact.html">CONTACT</a>
                                    <a href="about.html">ABOUT</a>
                                </div>
                                <nav>
                                    <ul>
                                        <li><a href="index.html" class="active">HOME</a></li>
                                        <li><a href="posts.html">BLOGS</a></li>
                                        <li><a href="contact.html">CONTACT</a></li>
                                        <li><a href="about.html">ABOUT</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </section>
                        <div class="search-bar">
                            <input type="text" class="search-text" placeholder="Search blogs...">
                            <button type="submit" class="search-button" aria-label="Search Button"><i class="fas fa-search"></i></button>
                        </div>`

/* ADD FOOTER TO THE PAGES */

const theFooter = document.querySelector("footer");

theFooter.innerHTML = `<section class="footer__container">
                            <div class="footer-links">
                                <h3>Links</h3>
                                <a href="index.html">HOME</a>
                                <a href="posts.html">BLOGS</a>
                                <a href="contact.html">CONTACT</a>
                                <a href="about.html">ABOUT</a>
                            </div>
                            <div class="social-media">
                                <h3>Social Media</h3>
                                <div>
                                    <label>
                                        <a href="https://www.facebook.com/groups/716522351730441" aria-label="Link to Facebook page"><i class="fab fa-facebook-f"></i></a>
                                    </label>
                                    <label>
                                        <a href="https://www.instagram.com/elverum_frisbeeklubb/" aria-label="Link to Instagram page">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </label>
                                </div>
                            </div>
                        </section>
                        <div class="copyright">&copy; Renovation Dad</div>`

/* Search bar function */

const searchText = document.querySelector(".search-text");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
    let valueInput = searchText.value.trim();
    window.location.href = `searchresult.html?search=${valueInput}`
});
searchText.addEventListener("keyup", (e) => {
    let pressedKey = e.key;
    let valueInput = searchText.value;
    if (pressedKey === "Enter") {
        window.location.href = `searchresult.html?search=${valueInput}`
    }
});



/* Scroll event navigation */
const hamburgerMenu = document.querySelector(".hamburger__dropdown-menu")
const headerMenu = document.querySelector(".header-menu")

function scrollFunction() {
    const scroll = window.scrollY;
    
    if (scroll > 100) {
        hamburgerMenu.classList.add("scrolled-hamburger")
        headerMenu.classList.add("scrolled-menu")
        document.body.classList.add("body-padding")

    }
    else  if ( scroll < 40){
        hamburgerMenu.classList.remove("scrolled-hamburger")
        headerMenu.classList.remove("scrolled-menu")
        document.body.classList.remove("body-padding")
    }
}
document.addEventListener("scroll", scrollFunction);


/* Dice on blogs */
function dicePicker(diceInput) {
    switch(diceInput) {
        case 6:
            diceToShow = `<i class="fas fa-dice-six"></i>`;
            break;
        case 5:
            diceToShow = `<i class="fas fa-dice-five"></i>`;
            break;
        case 4:
            diceToShow = `<i class="fas fa-dice-four"></i>`;
            break;
        case 3:
            diceToShow = `<i class="fas fa-dice-three"></i>`;
            break;
        case 2:
            diceToShow = `<i class="fas fa-dice-two"></i>`;
            break;
        case 1:
            diceToShow = `<i class="fas fa-dice-one"></i>`;
            break;
        default:
            diceToShow = `<i class="fas fa-dice-d6"></i>`;
    }
    return diceToShow;
}


/* Form validation universal functions */

function checkForm(value, length) {
    if(value.trim().length > length) {
        return true;
    }
    else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

function checkName() {
    if(checkForm(fullName.value, fulleNameLength)) {
        fullNameError.style.display = "none";
    }
};

function checkEmail() {
    if(validateEmail(email.value)) {
        emailError.style.display = "none";
    }
};

function checkSubject() {
    if(checkForm(subject.value, subjectLength)) {
        subjectError.style.display = "none";
    }
};

function checkTextArea() {
    if(checkForm(textArea.value, textAreaLength)) {
        textAreaError.style.display = "none";
    }
};

function checkFocusOutName() {
    if(checkForm(fullName.value, fulleNameLength)) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }
};

function checkFocusOutEmail() {
    if(validateEmail(email.value)) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
};

function checkFocusOutSubject() {
    if(checkForm(subject.value, subjectLength)) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
};

function checkFocusOutTextArea() {
    if(checkForm(textArea.value, textAreaLength)) {
        textAreaError.style.display = "none";
    }
    else {
        textAreaError.style.display = "block";
    }
};