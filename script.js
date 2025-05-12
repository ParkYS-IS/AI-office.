document.addEventListener("DOMContentLoaded", function () {
    const homepageBtn = document.getElementById("homepage-btn");

    homepageBtn.addEventListener("click", function (event) {
        event.preventDefault();
        alert("홈페이지로 돌아갑니다!");
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.querySelector(".buttons a");

    homeButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("메인 페이지로 이동합니다!");
        window.location.href = "index.html";
    });
});

document.getElementById("lecture-btn").addEventListener("click", function () {
    window.location.href = "lecture.html";

    <button id="lecture-btn">Lecture</button>
});