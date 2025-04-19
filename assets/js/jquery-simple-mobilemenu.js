(function ($) {
  var defaults = { "hamburgerId": "sm_menu_ham", "wrapperClass": "sm_menu_outer", "submenuClass": "sub-menu", "menuStyle": "slide", "onMenuLoad": function () { return !0 }, "onMenuToggle": function () { return !0 } }; $.fn.simpleMobileMenu = function (options) {
    if (this.length === 0) { return this }
    var smMenu = {}, ds = $(this); var init = function () { smMenu.settings = $.extend({}, defaults, options); smMenu.styleClass = smMenu.settings.menuStyle.toLowerCase() === 'slide' ? "slide" : "accordion"; createWrapper_Ham(); createBackButton(); if (typeof smMenu.settings.onMenuLoad == 'function') { smMenu.settings.onMenuLoad(ds) } }, createWrapper_Ham = function () { smMenu.hamburger = $("<div/>", { "id": smMenu.settings.hamburgerId, "html": "<span></span><span></span><span></span><span></span>" }), smMenu.smmOuter = $("<div/>", { "class": smMenu.settings.wrapperClass + " " + smMenu.styleClass }); ds.appendTo(smMenu.smmOuter); smMenu.hamburger.add(smMenu.smmOuter).appendTo($("body")) }, createBackButton = function () {
      smMenu.smmOuter.find("ul." + smMenu.settings.submenuClass).each(function () {
        var dis = $(this), disPar = dis.closest("li"), disfA = disPar.find("> a"), disBack = $("<li/>", { "class": "back", "html": "<a href='#'>" + disfA.text() + "</a>" })
        disPar.addClass("hasChild"); if (smMenu.settings.menuStyle.toLowerCase() === 'slide') { disBack.prependTo(dis) }
      })
    }, toggleMobileMenu = function (e) {
      $("#" + smMenu.settings.hamburgerId).toggleClass("open"); $("." + smMenu.settings.wrapperClass).toggleClass("active").find("li.active").removeClass("active"); $("body").toggleClass("mmactive"); if (smMenu.settings.menuStyle.toLowerCase() === 'accordion') { $("." + smMenu.settings.wrapperClass).find("ul." + smMenu.settings.submenuClass).hide() }
      if (typeof smMenu.settings.onMenuToggle == 'function') { smMenu.settings.onMenuToggle(ds, $("#" + smMenu.settings.hamburgerId).hasClass("open")) }
    }, showSlideSubMenu = function (e) { $("." + smMenu.settings.wrapperClass).scrollTop(0); $(this).parent().addClass("active").siblings().removeClass("active") }, showAccordionSubMenu = function (e) {
      e.preventDefault(); var dis = $(this), dispar = $(this).parent(), lastActive = dispar.siblings(".active"); dispar.find("> ." + smMenu.settings.submenuClass).slideToggle(function () { if ($(this).is(":visible")) { var offset = dis[0].offsetTop; $("." + smMenu.settings.wrapperClass).stop().animate({ scrollTop: offset }, 300) } }); lastActive.find("ul." + smMenu.settings.submenuClass).slideUp(function () { $(this).find(".hasChild").removeClass("active") })
      dispar.toggleClass("active").siblings().removeClass("active")
    }, goBack = function (e) { e.preventDefault(); $(this).closest("ul." + smMenu.settings.submenuClass).parent().removeClass("active") }
    init(); smMenu.hamburger.click(toggleMobileMenu); smMenu.smmOuter.filter(".slide").find("li.hasChild > a").click(showSlideSubMenu); smMenu.smmOuter.filter(".accordion").find("li.hasChild > a").click(showAccordionSubMenu); smMenu.smmOuter.find("li.back a").click(goBack)
  }
})(jQuery)