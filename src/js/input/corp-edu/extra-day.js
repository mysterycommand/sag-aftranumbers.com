// Generated by CoffeeScript 1.3.3
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","underscore"],function(e,t){var n;n=function(){function n(t){this.index=t;this.onChange=r(this.onChange,this);this.html="<p>\n	Extra "+this.index+' is a\n	<select name="extra-'+this.index+'-type" id="extra-'+this.index+'-type" class="chzn-select" data-placeholder="please choose...">\n		<!-- EXTRA MUST HAVE A TYPE! -->\n		<!-- <option value="-1"></option> -->\n	</select>-type\n	extra, and I\'ll need them for\n	<input type="number" name="extra-'+this.index+'-num-days" id="extra-'+this.index+'-num-days" class="num-days" value="1" min="1" max="10">\n	day(s).\n</p>\n';this.$el=e(this.html);this.el=this.$el[0];this.setupOptions();this.$el.on("change","#extra-type",this.onChange)}n.prototype.setupOptions=function(){var e;this.selectedIndex=-1;this.selectedItem=null;this.options=["general","special ability","silent bit"];e="";t.each(this.options,function(t,n){return e+='<option value="'+n+'">'+t+"</option>"});return this.$el.find("select").append(e)};n.prototype.getSelectedItem=function(){return this.selectedItem};n.prototype.onChange=function(e){this.selectedIndex=parseInt(e.target.value,10);return this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null};return n}();return n})}).call(this);