contact_address = [
  "https://github.com/voicihojun",
  "https://www.facebook.com/profile.php?id=1037132570",
  "https://www.linkedin.com/in/hojun-hwang/",
];

const contactImages = document.querySelectorAll(".contact-image");
console.log(contactImages);

for (let i = 0; i < contactImages.length; i++) {
  contactImages[i].addEventListener("click", (e) => {
    console.log(e);
    window.location.href = contact_address[i];
  });
}

const content = "Hey. I'm \n Hojun Hwang.";
const text = document.querySelector("#text1");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
  }
}
setInterval(typing, 200);

$(function () {
  // when scroll, header fade-in
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("header").removeClass("deactive");
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
      $("header").addClass("deactive");
    }
  });
});

const menus = document.querySelectorAll(".nav-menu");
for (const menu of menus) {
  menu.addEventListener("click", function () {
    //선택된 button의 dataset.target명의 offsetTop을 구하는 변수를 선언한다.
    const scrollPosition = document.querySelector(
      this.dataset.target
    ).offsetTop;

    //scroll을 offsetTop으로 이동시킨다.
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  });
}
