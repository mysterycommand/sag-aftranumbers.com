// Generated by CoffeeScript 1.3.3
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery"],function(e){var t;t=function(){function t(){}t.onCameraSessionLineItems=function(t){var n,r,i,s,o,u,a,f,l;a=parseInt(e("#num-days").val(),10);s=[];n=0;while(n++<a){o=parseInt(e("#day-"+n+"-num-actors").val(),10);f=parseInt(e("#day-"+n+"-num-extras").val(),10);u=parseInt(e("#day-"+n+"-actors-wardrobe").val(),10);l=parseInt(e("#day-"+n+"-extras-wardrobe").val(),10);r=0;while(r++<o){i={label:"Day "+n+" Principal Actor "+r,first:{label:"Initial Session Fee",price:t.session_actor},items:[]};r<=u&&i.items.push({count:0,label:"Wardrobe Fitting",price:t.actor_wardrobe});s.push(i)}r=0;while(r++<f){i={label:"Day "+n+" General Extra "+r,first:{label:"Initial Session Fee",price:t.session_extra},items:[]};r<=l&&i.items.push({count:0,label:"Wardrobe Fitting",price:t.extra_wardrobe});s.push(i)}}return s};t.offCameraSessionLineItems=function(t){var n,r,i,s,o,u,a;s=parseInt(e("#num-actors").val(),10);u=parseInt(e("#num-versions").val(),10);o=parseInt(e("#num-tags").val(),10);a=0;o>1&&(a=t.tag_2_25);o>25&&(a=t.tag_26_50);o>50&&(a=t.tag_51);i=[];n=0;while(n++<s){r={label:"Principal Actor "+n,first:{label:"Initial Session Fee",price:t.session_actor},items:[]};u-1&&r.items.push({count:u-1,label:"Add'l Versions of the Script",price:t.session_actor});a&&r.items.push({count:o-1,label:"Add'l Tags at $ "+a.toFixed(2),price:a});i.push(r)}return i};t.demoSessionLineItems=function(t){var n,r,i,s,o,u;s=parseInt(e("#num-actors").val(),10);o=[];e(".num-characters").each(function(t,n){return o[t]=parseInt(e(n).val(),10)});u=parseInt(e("#num-versions").val(),10);i=[];n=0;while(n++<s){r={label:"Principal Actor "+n,first:{label:"Initial Session Fee",price:t.session_actor},items:[]};o[n-1]-1&&r.items.push({count:o[n-1]-1,label:"Add'l Characters/Voices",price:t.session_actor});u-1&&r.items.push({count:u-1,label:"Add'l Versions of the Script",price:t.session_actor});i.push(r)}return i};t.usageLineItems=function(e){var t;t=[];return t};return t}();return t})}).call(this);