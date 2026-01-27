// script.js
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  const modules = document.querySelectorAll(".module");
  const navLinks = document.querySelectorAll(".menu a");

  // 当前激活的标签
  let currentTarget = "welcome";

  // 设置初始状态
  updateHero("welcome");

  // 导航栏点击事件
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      updateHero(target);

      // 更新导航高亮
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 模块悬停事件
  modules.forEach(module => {
    module.addEventListener("mouseenter", function () {
      const bg = this.getAttribute("data-bg");
      const title = this.getAttribute("data-title");
      const desc = this.getAttribute("data-desc");
      updateHero(bg, title, desc);
    });
  });

  // 更新 Hero 区域函数
  function updateHero(target, title = null, desc = null) {
    if (target === "welcome") {
      hero.style.backgroundImage = "url('biodiesel.jpg')";
      document.querySelector(".hero-title").textContent = "PRODUCTION OF BIODIESEL";
      document.querySelector(".hero-text").textContent =
        "Bulmarket Group is a leader in the transformation efforts of the energy and transport industry in South-Eastern Europe.<br>We work for a sustainable future by processing renewable and waste products into high-quality clean fuels and providing efficient solutions for their transportation.";
    } else if (target === "about") {
      hero.style.backgroundImage = "url('about.jpg')";
      document.querySelector(".hero-title").textContent = "ABOUT US";
      document.querySelector(".hero-text").textContent = "We are a leading energy group with over 25 years of experience in Southeast Europe.";
    } else if (target === "activities") {
      hero.style.backgroundImage = "url('activities.jpg')";
      document.querySelector(".hero-title").textContent = "OUR ACTIVITIES";
      document.querySelector(".hero-text").textContent = "From fuel trade to biodiesel production and port logistics.";
    }
    // 可以继续添加其他选项
  }
});
