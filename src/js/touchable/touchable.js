// Generated by CoffeeScript 1.3.3
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","touchable/touches"],function(e,t){var i,s,o,u;u=Array.prototype.slice;o=function(e,t,n){return u.call(e,t!=null||n?1:t)};s=function(e,t){var r;r=o(arguments,2);return function(){return e.apply(t||n,r.concat(arguments))}};i=function(){function n(t){this.element=t;this.onTouchCancel=r(this.onTouchCancel,this);this.onTouchEnd=r(this.onTouchEnd,this);this.onTouchMove=r(this.onTouchMove,this);this.onTouchStart=r(this.onTouchStart,this);this.onMouseUp=r(this.onMouseUp,this);this.onMouseMove=r(this.onMouseMove,this);this.onMouseDown=r(this.onMouseDown,this);this.$ele=e(this.element);this.setTouchable(!0);return}n.prototype.setTouchable=function(e){if(this.touchable===e)return;this.touchable=e;this.$ele.css("pointer-events",this.touchable||this.hoverable?"auto":"none");this.touchable?this.$ele.on({mousedown:this.onMouseDown,touchstart:this.onTouchStart}):this.$ele.off({mousedown:this.onMouseDown,touchstart:this.onTouchStart})};n.prototype.triggerTouchDown=function(e){return this.$ele.trigger("touchabledown",[e])};n.prototype.triggerTouchMove=function(e){return this.$ele.trigger("touchablemove",[e])};n.prototype.triggerTouchUp=function(e){return this.$ele.trigger("touchableup",[e])};n.prototype.onMouseDown=function(n){e(document).on({mousemove:this.onMouseMove,mouseup:this.onMouseUp});this.touches=new t(n);this.triggerTouchDown(this.touches)};n.prototype.onMouseMove=function(e){e.stopPropagation();e.preventDefault();this.touches._updateWithEvent(e);this.triggerTouchMove(this.touches)};n.prototype.onMouseUp=function(t){this.touches._goUpWithEvent(t);this.triggerTouchUp(this.touches);delete this.touches;e(document).off({mousemove:this.onMouseMove,mouseup:this.onMouseUp})};n.prototype.onTouchStart=function(n){n.stopPropagation();n.preventDefault();if(this.touches!=null||n.length>1){this.onTouchCancel(n);return}e(document).on({touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel});this.touches=new t(n);this.triggerTouchDown(this.touches)};n.prototype.onTouchMove=function(e){e.stopPropagation();e.preventDefault();if(this.touches==null)return;this.touches._updateWithEvent(e);this.triggerTouchMove(this.touches)};n.prototype.onTouchEnd=function(t){t.stopPropagation();t.preventDefault();if(this.touches==null)return;this.touches._goUpWithEvent(t);this.triggerTouchUp(this.touches);delete this.touches;e(document).off({touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel})};n.prototype.onTouchCancel=function(e){this.onTouchEnd(e)};return n}();return i})}).call(this);