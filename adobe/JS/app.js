
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
