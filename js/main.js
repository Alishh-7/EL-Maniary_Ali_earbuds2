(() => {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(".hero-logo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.to(".hero-title", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.5,
  });
  gsap.to(".hero-subtitle", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.7,
  });
  gsap.to(".button", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.9,
  });

  //X-ray
  let imageCon = document.querySelector("#imageCon"),
    drag = document.querySelector(".image-drag"),
    left = document.querySelector(".image-left"),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

  // function
  function onDown() {
    dragging = true;
    console.log("down Called");
  }

  function onUp() {
    dragging = false;
    console.log(" up Called");
  }

  function onMove(event) {
    if (dragging === true) {
      let x = event.clientX - imageCon.getBoundingClientRect().left;
      if (x < min) {
        x = min;
      } else if (x > max) {
        x = max - 4;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }

  // event listeners
  drag.addEventListener("mousedown", onDown);
  document.body.addEventListener("mouseup", onUp);
  document.body.addEventListener("mousemove", onMove);


  //animation

  const canvas = document.querySelector("#spider-earbuds");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 300;
  const images = [];
  let loadedImages = 0;

  const buds = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = function () {
      loadedImages++;
      if (loadedImages === frameCount) {
        startAnimation();
      }
    };
    img.src = `images/spider-projects${(i + 1).toString().padStart(4, "0")}.png`;
    images.push(img);
  }

  function startAnimation() {
    gsap.to(buds, {
      frame: 300,
      snap: "frame",
      scrollTrigger: {
        trigger: "#spider-earbuds",
        pin: true,
        scrub: 5,
        start: "center center",
      },
      onUpdate: render,
    });
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (images[buds.frame]) {
      context.drawImage(images[buds.frame], 0, 0);
    }
  }

  //product
  document.querySelectorAll(".product").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".SpiderBuds" });
    });
  });

  document
    .getElementById("takealook")
    .addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".SpiderBuds" });
    });

  // Register-now

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".content", {
    scrollTrigger: {
      trigger: ".Register-now-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
  });
  

  //  image animaton
  gsap.from(".image-container img", {
    scrollTrigger: {
      trigger: ".Register-now",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
  });

  let menu = document.querySelector("#hamburgermenu"),
    mobileNav = document.querySelector(".mobile-menu");

  function toggleMenu() {
    mobileNav.classList.toggle("hidden");
  }

  menu.addEventListener("click", toggleMenu);

  // hotspots Selection

  // Variables
  const hotspots = document.querySelectorAll(".Hotspot");
  
  // List
const lists = [
  {
    // image: "./images/fingerprint.svg",
    name: "Effortless Control at Your Fingertips",
    para: "Enjoy seamless control with just a touch. This innovative  allows you to effortlessly pause, accept calls, and play music, all with a single tap.",
  },
  {
    // image: "./images/volumecontrole.svg",
    name: "Intuitive Volume Control at Your Fingertips",
    para: "Effortlessly control your audio volume with a simple swipe up or down, giving you smooth, precise adjustments at your fingertips.",
  },
  {
    // image: "./images/wirelesscharger.svg",
    name: "Convenient Wireless Charging Solution",
    para: "Experience hassle-free power with wireless charging.",
  },
  {
    // image: "./images/noisecancelation.svg",
    name: "Immersive Noise Cancellation Technology",
    para: "Enjoy clear, immersive sound with noise cancellation that blocks out background noise, perfect for staying focused wherever you are. ",
  },
];

  function loadInfo() {
    lists.forEach((list, index) => {
      const selected = document.querySelector(
        `.Hotspot[slot="hotspot-${index + 1}"]`
      );
      console.log(selected);

      if (selected) {
        // const listImage = document.createElement("img");
        // listImage.src = list.image;

        const listName = document.createElement("h3");
        listName.textContent = list.name;

        const listPara = document.createElement("p");
        listPara.textContent = list.para;

        // selected.querySelector(".HotspotAnnotation").append(listImage);
        selected.querySelector(".HotspotAnnotation").append(listName);
        selected.querySelector(".HotspotAnnotation").append(listPara);
      }
    });
  }

  loadInfo();

  // Show and hide hotspots
  function showInfo(e) {
    const selected = e.currentTarget.querySelector(".HotspotAnnotation");
    if (selected) {
      gsap.to(selected, { autoAlpha: 1, duration: 0.5 });
    }
  }

  function hideInfo(e) {
    const selected = e.currentTarget.querySelector(".HotspotAnnotation");
    if (selected) {
      gsap.to(selected, { autoAlpha: 0, duration: 0.5 });
    }
  }

  // Add eventlisteners for showing and hiding info
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  

  //scroll
  document.querySelectorAll(".home").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".hero" });
    });
  });

  //Register-scroll

  document.querySelectorAll(".Register").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".Registernow" });
    });
  });

  // footer-
  gsap.from("#site-footer", {
    scrollTrigger: {
      trigger: "#site-footer",
      start: "top bottom", 
    },
    y: 50, 
    opacity: 0,
    duration: 1,
  });
})();
