// Generated by CoffeeScript 1.3.3
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","underscore"],function(e,t){var n;n=function(){function n(){this.onChange=r(this.onChange,this);this.label="National Cable - 13 week cycle";this.html='<fieldset>\n  It will be broadcast on a national station with\n  <select name="subscribers" id="subscribers" class="chzn-select" data-placeholder="please choose...">\n    <option value="-1"></option>\n  </select>\n  subscribers.\n</fieldset>';this.$el=e(this.html);this.el=this.$el[0];this.setupOptions();this.$el.on("change","#subscribers",this.onChange)}n.prototype.setupOptions=function(){var e;this.selectedIndex=-1;this.selectedItem=null;this.options=["Minimum","Maximum (2,000 units)"];e="";t.each(this.options,function(t,n){return e+='<option value="'+n+'">'+t+"</option>"});return this.$el.find("select").append(e)};n.prototype.getSelectedItem=function(){return this.selectedItem};n.prototype.onChange=function(e){this.selectedIndex=parseInt(e.target.value,10);return this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null};return n}();return n})}).call(this);