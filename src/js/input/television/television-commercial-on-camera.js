// Generated by CoffeeScript 1.3.3
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery","underscore","input/television/day","input/television/use"],function(e,t,n,r){var i;i=function(){function i(){var i=this;this.label="Television Commercial - (On Camera)";this.value="television_commercial_on_camera";this.steps=[new n,new r];this.el=[];t.each(this.steps,function(e,t){return i.el.push(e.el)});this.$el=e(this.el)}i.prototype.destroy=function(){return this.$el.off("**")};return i}();return i})}).call(this);