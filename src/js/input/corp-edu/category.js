// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","underscore"],function(e,t){var n;n=function(){function t(){this.onChange=r(this.onChange,this);this.html='<fieldset>\n	<span style="vertical-align: top;">It\'s a</span>\n	<span style="display: inline-block;">\n		<input type="radio" name="category" id="category-i" value="0" checked /> <label for="category-i">Category I</label><br/>\n		<input type="radio" name="category" id="category-ii" value="1" /> <label for="category-ii">Category II</label>\n	</span>\n	program.\n</fieldset>';this.$el=e(this.html);this.el=this.$el[0];this.setupOptions();this.$el.on("change","input",this.onChange)}t.prototype.setupOptions=function(){this.selectedIndex=-1;this.selectedItem=null;return this.options=["Category I","Category II"]};t.prototype.getSelectedItem=function(){return this.selectedItem};t.prototype.onChange=function(e){this.selectedIndex=parseInt(e.target.value,10);return this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null};return t}();return n})}).call(this);