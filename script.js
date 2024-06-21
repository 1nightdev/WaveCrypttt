var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3)";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1)"; 
    crsr.style.border = "0px solid #000";
    crsr.style.backgroundColor = "#000";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});


gsap.to("#main", {
  backgroundColor: "#071325FF",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-community img,#about-community-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-community",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});



gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

var path = window.location.pathname;

var navBarIds = [ "nav"];

navBarIds.forEach(function(navId) {
  var navLinks = document.querySelectorAll("#" + navId + " a");

  navLinks.forEach(function(link) {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});

function scrollToDiv(divId) {
  var div = document.getElementById(divId);
  div.scrollIntoView({behavior:'smooth'});
}

document.getElementById('check').addEventListener('click', function() {
  document.body.classList.toggle('nav-open');
});



  
  infoDropdown.addEventListener('click', function() {
      dropdownContent.classList.toggle('show');
  });

  
  var dropdownLinks = dropdownContent.querySelectorAll('a');
  dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          var targetSelector = event.target.getAttribute('href');
          navigateAndScroll(targetSelector);
          dropdownContent.classList.remove('show');
      });
  });



function navigateAndScroll(targetSelector) {
  var targetParts = targetSelector.split('#');
  var targetPage = targetParts[0];
  var targetElement = targetParts[1];

  
  window.location.href = targetPage;

  
  window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
          var target = document.getElementById(targetElement);

          if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
      }, 500); 
  });
}

const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

let isDragging = false, startY, startHeight;

const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
}
const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`;
    
    bottomSheet.classList.toggle("fullscreen", height === 100);
}

const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
}

const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
}

const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
}
dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);
sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);

