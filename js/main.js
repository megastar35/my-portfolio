const getElementByID = (id) => document.getElementById(id);
new WOW().init();


//HEADER ON SCROLL 
window.addEventListener("scroll", function () {
  const header = getElementByID("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})
// TOGGLE // 
document.onclick = function (e) {
  if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
    getElementByID("toggle").classList.remove('active');
    getElementByID("navbar").classList.remove('active');

  }
}

const navbarItem = document.getElementsByTagName('a');
getElementByID("toggle").onclick = function () {
  getElementByID("toggle").classList.toggle('active');
  getElementByID("navbar").classList.toggle('active');
  navbarItem.classList.toggle('active');
}
// for (let i = 0; i < navbarItem.length; i++) {
//   navbarItem[i].onclick = function () {
//     let j = 0;
//     while (j < navbarItem.length) {
//       navbarItem[j++].className = ' ';
//     }
//     navbarItem[i].className = 'active';
//   }
// }

// RESUME //
const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)
    console.log(target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("resume_active")
    })
    target.classList.add("resume_active")

    tabs.forEach(tab => {
      tab.classList.remove("resume_active")
    })
    tab.classList.add("resume_active")
  })
})
//ScrollSpy//
//VANILLA JS//
// let section = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header #navbar ul li a");

// window.onscroll = () => {
//   section.forEach(sec => {

//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top > offset && top < offset + height) {
//       navLinks.forEach(link => {
//         link.classList.remove("active");
//         document.querySelector("header #navbar ul li a[href*=" + id + "]").classList.add("active");
//       });
//     }
//   })
// }


window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.remove('preloading');


  }, 4000);
  setTimeout(() => {
    getElementByID("preloader").classList.add("animate__fadeOut");
  }, 3000);
  setTimeout(() => {
    getElementByID("preloader").style.display = "none";
  }, 4000);
}


// SWIPER //
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

