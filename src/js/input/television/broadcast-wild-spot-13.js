((function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}};c=this;b=c.log;a=c.define;a(["jquery","underscore"],function(a,b){var c;c=function(){function c(){this.onChange=d(this.onChange,this);this.label="Wild Spot - 13 week cycle";this.html='<fieldset>\n  It will be broadcast in the following markets:\n  <select name="markets" id="markets" multiple class="chzn-select" data-placeholder="please choose...">\n    <option value="-1"></option>\n  </select>\n</fieldset>';this.$el=a(this.html);this.el=this.$el[0];this.setupOptions();this.$el.on("change","#markets",this.onChange)}c.prototype.setupOptions=function(){var a;this.selectedIndex=-1;this.selectedItem=null;this.options=[];a="";b.each(this.options,function(b,c){return a+='<option value="'+c+'">'+b.label+"</option>"});return this.$el.find("select").append(this.options)};c.prototype.getSelectedItem=function(){return this.selectedItem};c.prototype.onChange=function(a){this.selectedIndex=parseInt(a.target.value,10);return this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null};return c}();return c})})).call(this);