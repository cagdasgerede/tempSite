var popProfiles={windowCenter:{width:720,height:400,center:1,createnew:0}};!function(){var e=function(){console.log("Functionality to run before printing.")},o=function(){console.log("Functionality to run after printing")};if(window.matchMedia){var t=window.matchMedia("print");t.addListener(function(t){t.matches?e():o()})}window.onbeforeprint=e,window.onafterprint=o}(),$(function(){var e=new Slideout({panel:document.getElementById("TobbPagePanel"),menu:document.getElementById("TobbSideMenu"),padding:256,tolerance:70,side:"right",touch:!1});$(".yardimPhoto").magnificPopup({type:"image"}),document.querySelector(".showMobileMenu").addEventListener("click",function(){e.toggle()}),$(".popWindow").popupwindow(popProfiles),$("table").stacktable(),enquire.register("all and (max-width:1023px)",{match:function(){var e=$(".tobbFooter .footerLinksToggle"),o=$(".tobbFooter .tobbFooter__List");e.click(function(){e.removeClass("active"),o.removeClass("open"),$(this).next("div").is(":visible")?($(this).next("div").slideUp(300).removeClass("open"),$(this).removeClass("active")):(o.slideUp(300),$(this).next("div").slideToggle(300).addClass("open"),$(this).addClass("active"))})},unmatch:function(){$(".tobbFooter .footerLinksToggle").removeClass("active"),$(".tobbFooter .tobbFooter__List").removeClass("open")}},!0)});