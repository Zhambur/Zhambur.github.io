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
