// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","underscore"],function(e,t){var n;n=function(){function n(){this.onChange=r(this.onChange,this);this.label="Local Cable - 13 week cycle";this.html='<fieldset>\n	It will be broadcast on a local station with\n	<select name="subscribers" id="subscribers" class="chzn-select" data-placeholder="please choose...">\n		<option value="-1"></option>\n	</select>\n	subscribers.\n</fieldset>';this.$el=e(this.html);this.el=this.$el[0];this.setupOptions();this.$el.on("change","#subscribers",this.onChange)}n.prototype.setupOptions=function(){var e;this.selectedIndex=-1;this.selectedItem=null;this.options=["1 - 50,000","50,001 - 100,000","100,001 - 150,000","150,001 - 200,000","200,001 - 250,000","250,001 - 500,000","500,001 - 750,000","750,001 - 1,000,000"];e="";t.each(this.options,function(t,n){return e+='<option value="'+n+'">'+t+"</option>"});return this.$el.find("select").append(e)};n.prototype.getSelectedItem=function(){return this.selectedItem};n.prototype.onChange=function(e){this.selectedIndex=parseInt(e.target.value,10);return this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null};return n}();return n})}).call(this);