// Generated by CoffeeScript 1.3.3
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery"],function(e){var t;t=function(){function t(){}t.onCameraSessionLineItems=function(t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w;n=parseInt(e("input:radio[name=category]:checked").val(),10);r=n===0?"Category I":"Category II";i=n===0?"cat_1_":"cat_2_";g=parseInt(e("#num-narrators").val(),10);m=parseInt(e("#num-half-players").val(),10);y=parseInt(e("#num-players").val(),10);h=parseInt(e("#num-extras").val(),10);c=0;l=[];a=0;while(a++<g){c=parseInt(e("#narrator-"+a+"-num-days").val(),10);f={label:""+r+" Narrator "+a+" - "+c+" Days Total",first:{label:"First Day",price:t[i+"session_narrator_day_1"]},items:[]};c-1&&f.items.push({count:c-1,label:"Add'l Days at $ "+t[i+"session_narrator_day_2"].toFixed(2),price:t[i+"session_narrator_day_2"]});l.push(f)}a=0;while(a++<m){f={label:""+r+" Half-day Player "+a,first:{label:"4-hour Session at $ "+t[i+"session_player_half_day"].toFixed(2),price:t[i+"session_player_half_day"]},items:[]};l.push(f)}a=0;while(a++<y){c=parseFloat(e("#player-"+a+"-num-days").val(),10);d=Math.floor(c);v=Math.ceil(c-d);p=Math.floor(d/5);w=Math.floor((d-p*5)/3);b=d-(p*5+w*3);f={label:""+r+" Day Player "+a+" - "+c+" Days Total",items:[]};p&&f.items.push({count:p,label:"Week Session(s) at $ "+t[i+"session_player_week"].toFixed(2),price:t[i+"session_player_week"]});w&&f.items.push({count:w,label:"3-Day Session(s) at $ "+t[i+"session_player_day_3"].toFixed(2),price:t[i+"session_player_day_3"]});b&&f.items.push({count:b,label:"Single Day Session(s) at $ "+t[i+"session_player_day_1"].toFixed(2),price:t[i+"session_player_day_1"]});l.push(f)}a=0;while(a++<h){c=parseInt(e("#extra-"+a+"-num-days").val(),10);u=parseInt(e("#extra-"+a+"-type").val(),10)||0;s=["General Extra","Special Ability Extra","Silent Bit Extra"][u];o=["_general","_special","_silent"][u];f={label:""+r+" Extra "+a+" - "+c+" Days Total",first:{label:""+s+" at "+t[i+"session_extra"+o].toFixed(2),price:t[i+"session_extra"+o]*c},items:[]};l.push(f)}return l};t.offCameraSessionLineItems=function(e){var t,n;n=[];t={label:"",first:{label:"",price:0},items:[]};t.items.push({count:0,label:"",price:0});n.push(t);return n};t.audioOnlySessionLineItems=function(e){var t,n;n=[];t={label:"",first:{label:"",price:0},items:[]};t.items.push({count:0,label:"",price:0});n.push(t);return n};return t}();return t})}).call(this);