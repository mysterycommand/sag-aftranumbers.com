((function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}};c=this;b=c.log;a=c.define;a(["jquery","input/actor-announcer-character"],function(a,b){var c;c=function(){function c(){this.onInputSingers=d(this.onInputSingers,this);this.onInputActors=d(this.onInputActors,this);this.html='<fieldset>\n  I\'ll need\n  <input type="number" name="num-actors" id="num-actors" value="0" min="0" max="10">\n  <a href="#actor-announcer">actor/announcer</a>(s) and\n  <input type="number" name="num-singers" id="num-singers" value="0" min="0" max="2">\n  <a href="#singer">singer</a>(s).\n  <span style="display: none;" id="more-singers">\n    Looking for more singers?\n    <a href="mailto:togren@sagaftra.org?subject=SAG-AFTRAnumbers%20Question">Contact Tim at SAG-AFTRA</a>!\n  </span>\n</fieldset>';this.$el=a(this.html);this.el=this.$el[0];this.actors=[];this.$el.on("input","#num-actors",this.onInputActors);this.$el.on("input","#num-singers",this.onInputSingers)}c.prototype.onInputActors=function(a){var c,d,e,f;d=parseInt(a.target.value,10);if(d===this.actors.length)return;if(d>this.actors.length){e=[];while(this.actors.length<d){c=new b(this.actors.length);this.actors.push(c);e.push(this.$el.append(c.$el))}return e}f=[];while(this.actors.length>d)f.push(this.actors.pop().$el.remove());return f};c.prototype.onInputSingers=function(b){return b.target.value===a(b.target).attr("max")?this.$el.find("#more-singers").filter(":hidden").show():this.$el.find("#more-singers").filter(":visible").hide()};return c}();return c})})).call(this);