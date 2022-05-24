const APIURL = "http://hunglikeabee.com:81/wordpress/";

const postsAPI = `${APIURL}wp-json/wp/v2/posts?_embed&per_page=100`;
const pagesAPI = `${APIURL}wp-json/wp/v2/pages?_embed&per_page=100`;
var postsArray = [];

async function getMyBlog() {
  try {
    // Get the API and create welcome message

    const fetchPosts = await fetch(postsAPI);
    const fetchPages = await fetch(pagesAPI);
    const resultPosts = await fetchPosts.json();
    console.log(resultPosts);
    const resultPages = await fetchPages.json();
    console.log(resultPages);

    const makeFeelWelcome = document.querySelector(".welcome-message");

    makeFeelWelcome.innerHTML = `<h1 class="welcome-title">${resultPages[0].title.rendered}</h1>
                                        <div class="welcome-paragraph">${resultPages[0].content.rendered}</div>`;

    /* THE BIG CAROUSEL MAKE IT SPIN!!! */

    const carousel = document.querySelector(".index-carousel");
    const leftButtonCarousel = document.querySelector(".carousel__left-button");
    const rightButtonCarousel = document.querySelector(
      ".carousel__right-button"
    );
    function makeCarousel(countPages, readLengthCarousel) {
      carousel.innerHTML = "";
      for (let i = countPages; i < readLengthCarousel; i++) {
        let valueDif = resultPosts[i]._embedded["wp:term"][1][0].name;
        let resultDif = parseInt(valueDif[3]);
        let difficultyDice;
        difficultyDice = dicePicker(resultDif);

        let valueTime = resultPosts[i]._embedded["wp:term"][1][1].name;
        let resultTime = parseInt(valueTime[4]);

        let timeDice;
        timeDice = dicePicker(resultTime);

        for (let r = 0; r > resultTime.length; r++) {
          StaticRange;
        }

        carousel.innerHTML += `<a href="post.html?id=${resultPosts[i].id}"><div class="carousel-boxes postid-${resultPosts[i].id}">
                                            <div class="carousel__text">${resultPosts[i].title.rendered}</div>
                                            <div class="post-image id${resultPosts[i].id}" style="background-image: url(${resultPosts[i]._embedded["wp:featuredmedia"][0].source_url})"></div>
                                            <div aria-hidden="true" class="time-dif">Time used: ${difficultyDice}</div>
                                            <div aria-hidden="true" class="time-dif">Difficulty: ${timeDice}</div>
                                         </div>
                                       </a>`;
        if (
          `${resultPosts[i]._embedded["wp:featuredmedia"][0].media_details.file}` ===
          undefined
        ) {
          continue;
        }
      }
    }

    /* Buttons for the carousel */

    leftButtonCarousel.addEventListener("click", previousCarousel);
    rightButtonCarousel.addEventListener("click", nextCarousel);

    function previousCarousel() {
      if (countPages > 0) {
        countPages = countPages - 1;
      } else {
        countPages = 0;
      }
      if (lengthCarousel <= widthNumber) {
        lengthCarousel = widthNumber;
      } else {
        lengthCarousel = lengthCarousel - 1;
      }

      makeCarousel(countPages, lengthCarousel);
    }

    function nextCarousel() {
      countPages = countPages + 1;

      if (countPages >= resultPosts.length - widthNumber) {
        countPages = resultPosts.length - widthNumber;
      }

      lengthCarousel = countPages + widthNumber;

      if (lengthCarousel >= resultPosts.length) {
        lengthCarousel = resultPosts.length;
      }

      makeCarousel(countPages, lengthCarousel);
    }

    /* Check window width for amount of images loaded */

    var checkScreenWidth = window.innerWidth;
    function checkWidthScreen(checkScreenWidth) {
      if (checkScreenWidth >= 850) {
        widthNumber = 4;
        countPages = 0;
        makeCarousel(countPages, widthNumber);
      } else if (checkScreenWidth > 700 && checkScreenWidth < 850) {
        widthNumber = 3;
        countPages = 0;
        makeCarousel(countPages, widthNumber);
      } else if (checkScreenWidth > 550 && checkScreenWidth <= 700) {
        widthNumber = 2;
        countPages = 0;
        makeCarousel(countPages, widthNumber);
      } else {
        widthNumber = 1;
        countPages = 0;
        makeCarousel(countPages, widthNumber);
      }
    }

    checkWidthScreen(checkScreenWidth);

    var countPages = 0;
    var widthNumber;
    var lengthCarousel = widthNumber;

    window.addEventListener("resize", checkChangesScreen);

    function checkChangesScreen() {
      const widthOutput = window.innerWidth;
      checkWidthScreen(widthOutput);
    }
  } catch (error) {
    console.log("An error occurred " + error);
  }
}

getMyBlog();
