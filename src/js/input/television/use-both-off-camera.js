// Generated by CoffeeScript 1.4.0
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery","underscore","input/television/use-broadcast-off-camera","input/television/use-internet"],function(e,t,n,r){var i;i=function(){function i(){var i=this;this.label="both as a television broadcast, and on the Internet or in new media";this.steps=[new n,new r];this.el=[];t.each(this.steps,function(e,t){return i.el.push(e.el)});this.$el=e(this.el)}i.prototype.getSelectedItem=function(e){return this.steps[0].getSelectedItem()};return i}();return i})}).call(this);