
//  메뉴바

const btns = document.querySelectorAll(".btn");
const containers = document.querySelectorAll(".container");
const lists =  document.querySelectorAll(".list");

btns.forEach((btn, index) => {
    btn.addEventListener("click", function menuBar() {
    const hasOn = containers[index].classList.contains("on");
    if (!hasOn ) {
      containers.forEach ((container) => {
      container.classList.remove("on");
      });
      containers[index].classList.toggle("on");
      }
    else {
      containers.forEach ((container) => {
      container.classList.remove("on");
      })
    }
  })
})

btns.forEach((btn, index) => {
  btn.addEventListener("click", function angle() {
  const hasPop = lists[index].classList.contains("pop");
  if (!hasPop ) {
    lists.forEach ((list) => {
    list.classList.remove("pop");
    });
    lists[index].classList.toggle("pop");
    }
  else {
    lists.forEach ((list) => {
    list.classList.remove("pop");
    })
  }
})
})


// search-bar 
let searchBtn = document.querySelector('.btn-search');
let searchBar = document.querySelector('.inp-wrap')

searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle('on');
})



//  모달

let modalOpen = false;

document.getElementById('btnClose').addEventListener('click', function () {
  if(modalOpen == true) {
    document.getElementById('backGround').style.backgroundColor = '#ffffff';
    document.getElementById('modalBox').style.display= 'none';
    modalOpen = false;
  }
})

document.getElementById('btnOpen').addEventListener('click', function () {
  if(modalOpen == false) {
    document.getElementById('backGround').style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    document.getElementById('modalBox').style.display= 'block';
    modalOpen = true;
  }
})

// max-width: 900 -  메뉴바 오픈
const menuBtn = document.querySelector('.btn-menu')
menuBtn.addEventListener("click", function toggleMenu() {
  document.querySelector('.list-nav-menu').classList.toggle('on')
})


// max-width: 900 -  footer-메뉴바 오픈
const footerBtns = document.querySelectorAll(".btn-menu-footer");
const footerMenus = document.querySelectorAll('.menu')
footerBtns.forEach((footerBtn, index) => {
  footerBtn.addEventListener("click", function menuBar() {
  const hasOpen = footerMenus[index].classList.contains("open");
  if (!hasOpen ) {
    footerMenus.forEach ((footerMenu) => {
      footerMenu.classList.remove("open");
    });
    footerMenus[index].classList.toggle("open");
    }
  else {
    footerMenus.forEach ((footerMenu) => {
      footerMenu.classList.remove("open");
    })
  }
})
})
