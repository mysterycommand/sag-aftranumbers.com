// Generated by CoffeeScript 1.3.3
/*
Wrapped in a Require.js module by:
Matt Hayes
*/(function(){var e,t;t=this;e=t.define;e([],function(){var e;e=function(){function e(){this.options_index=0;this.parsed=[]}e.prototype.add_node=function(e){return e.nodeName==="OPTGROUP"?this.add_group(e):this.add_option(e)};e.prototype.add_group=function(e){var t,n,r,i,s,o;t=this.parsed.length;this.parsed.push({array_index:t,group:!0,label:e.label,children:0,disabled:e.disabled});s=e.childNodes;o=[];for(r=0,i=s.length;r<i;r++){n=s[r];o.push(this.add_option(n,t,e.disabled))}return o};e.prototype.add_option=function(e,t,n){if(e.nodeName==="OPTION"){if(e.text!==""){t!=null&&(this.parsed[t].children+=1);this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:e.value,text:e.text,html:e.innerHTML,selected:e.selected,disabled:n===!0?n:e.disabled,group_array_index:t,classes:e.className,style:e.style.cssText})}else this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0});return this.options_index+=1}};return e}();e.select_to_array=function(t){var n,r,i,s,o;r=new e;o=t.childNodes;for(i=0,s=o.length;i<s;i++){n=o[i];r.add_node(n)}return r.parsed};return e})}).call(this);