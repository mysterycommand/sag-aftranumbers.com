// Generated by CoffeeScript 1.3.3
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery","output/line-item-group"],function(e,t){var n;n=function(){function e(e,t){this.label=e;this.className=t;this.estimators=[];return}e.prototype.estimate=function(e){var n,r,i,s,o,u,a;this.data=e;this.html="";this.cost=0;u=this.data;for(n=s=0,o=u.length;s<o;n=++s){r=u[n];(a=(i=this.estimators)[n])==null&&(i[n]=new t(this.className));this.estimators[n].estimate(r);this.html+=this.estimators[n].html;this.cost+=this.estimators[n].cost}this.html+='<tbody class="line-item-group '+this.className+'-subtotal">\n  <tr>\n    <th headers="line-item-label" class="label">'+this.label+'</th>\n    <th headers="line-item-amount" class="amount">$ '+this.cost.toFixed(2)+"</th>\n  </tr>\n</tbody>"};return e}();return n})}).call(this);