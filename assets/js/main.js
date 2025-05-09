/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  // 页面加载完成后
  $(function () {
    // 设置页面加载状态
    window.setTimeout(function () {
      $("body").removeClass("is-preload");
    }, 100);

    // 如果浏览器不支持fixed背景，启用我们的替代方案
    if (!$("body").hasClass("is-mobile")) {
      // 如果不是移动设备
      $("#header").css("background-position", "left 0px");

      // 处理窗口滚动
      $(window).on("scroll", function () {
        // 根据滚动位置调整背景图位置
        var pos = $(window).scrollTop();
        $("#header").css("background-position", "left " + pos * -0.15 + "px");
      });
    }
  });
})(jQuery);

/**
 * 学术主页交互脚本
 */

document.addEventListener("DOMContentLoaded", function () {
  // 导航栏滚动效果
  const navigation = document.querySelector(".navigation");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  });

  // 平滑滚动到锚点
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navigationHeight = navigation.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition - navigationHeight - 20,
          behavior: "smooth",
        });
      }
    });
  });
});
