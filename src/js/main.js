// Generated by CoffeeScript 1.4.0
/*
    Author: Matt Hayes
*/(function(){var e,t,n;n=this;e=n.log;t=n.require;t.config({paths:{jquery:"libs/jquery-1.7.1",underscore:"libs/underscore-1.3.2",chosen:"plugins/chosen/chosen.jquery",order:"plugins/order-1.0.5"}});t(["order!jquery","order!app","order!chosen"],function(t,n){var r;r=t;r(function(){var t,i,s,o,u,a,f,l,c,h,p,d,v;s=r(window);i=r(document);t=r("#app");o=new n(t[0]);d=0;v=10;r(".chzn-select").not(".chzn-done").chosen({allow_single_deselect:!0,disable_search_threshold:20});c=function(e){e.preventDefault();o.restart()};l=function(e){e.preventDefault();r(".hud .start, .calculator .both").fadeOut(400);r(".hud .estimate, .hud h5, nav li").fadeIn(400);r("footer h3, footer h4, footer address").show(400,function(){if(!r(".page").hasClass("home"))return null;r(".page").removeClass("home");return o.start()})};f=function(t){var n,i;n=r(t.target);i=n.attr("href");i=i.substr(0,i.indexOf("body=")+5);r("#output tr").each(function(t,n){var s,o,u,a,f,l,c,h,p,d;s=r(n);p="%0A";d="%09";a=s.find("th").size()>0;u=s.parent().is("thead");l=s.parent().is(".session-fees-subtotal")||s.parent().is(".usage-fees-subtotal");c=s.is("#subtotal")||s.is("#total");f=s.parent().is("tfoot");h=a?u?encodeURIComponent(s.find("th").text().toUpperCase()):l?p+encodeURIComponent(s.find(".label").text()):f?p+encodeURIComponent("*"+s.find(".label").text()+"*"):p+encodeURIComponent("*"+s.find("th").text()+"*"):d+encodeURIComponent(s.find(".label").text());o=encodeURIComponent(s.find(".amount").text());e(o,a);l&&(i+=p+"------------------------------");i+=h;a&&!l&&!f||(i+=d+o);i+=p;if(l)return i+="------------------------------"+p});n.attr("href",i)};a=function(e){e.preventDefault();r(".page").addClass("home");r(".hud .start, #splash").fadeIn(400);r(".hud .estimate, .hud h5, nav li").fadeOut(400);r("footer h3, footer h4, footer address").hide(400)};u=function(e){var t;e.preventDefault();t=r(this.hash);if(t.is(":visible")){r(this.hash+"-overlay").fadeOut(400);t.fadeOut(400)}else{r(this.hash+"-overlay").fadeIn(400);t.fadeIn(400)}r("#tooltip-left").fadeOut(400);r("#tooltip-right").fadeOut(400)};h=function(e){var t,n,i,s,o,u,a,f;e.preventDefault();i=r(this);n=r(this.hash);a="#tooltip-"+(i.closest(".inner").hasClass("left")?"left":"right");t=r(a);if(this.hash===a){t.fadeOut(400);return}f=i.position().top+i.height()+14|0;s=i.position().left+i.width()/2-46|0;if(t.find(this.hash).length){u=t.position().top!==f;o=t.find(".pointer").position().left!==s;if(u||o){t.css("top",f).find(".pointer").css("left",s).end().fadeIn(400);return}t.is(":visible")?t.fadeOut(400):t.fadeIn(400);return}t.find(".content").empty().append(n.clone()).end().css("top",f).find(".pointer").css("left",s).end();t.is(":visible")||t.fadeIn(400)};p=function(e){};i.on("click",".definitions.open, .definitions.close",u).on("click",".term.open, .term.close",h).on("click",".start-over a",c).on("click",".start a",l).on("click",".share a",f).on("click","h1 a",a);o.$el.on("update",p)})})}).call(this);