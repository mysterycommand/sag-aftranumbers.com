// Generated by CoffeeScript 1.3.3
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery"],function(e){var t;t=function(){function e(e){this.classNames=["line-item-group"];this.classNames.push(e);return}e.prototype.estimate=function(e){var t,n,r,i;this.data=e;this.html="";this.cost=0;this.html+='<tbody class="'+this.classNames.join(" ")+'">\n  <tr>\n    <th colspan="2" headers="line-item-label">'+this.data.label+"</th>\n  </tr>";if(this.data.first!=null){this.html+='<tr>\n  <td headers="line-item-label" class="label">'+this.data.first.label+'</td>\n  <td headers="line-item-amount" class="amount">$ '+this.data.first.price.toFixed(2)+"</td>\n</tr>";this.cost+=this.data.first.price}i=this.data.items;for(n=0,r=i.length;n<r;n++){t=i[n];this.html+='<tr>\n  <td headers="line-item-label" class="label">'+(t.count>0?t.count.toString()+" ":"")+t.label+'</td>\n  <td headers="line-item-amount" class="amount">$ '+(t.count>0?(t.count*t.price).toFixed(2):t.price.toFixed(2))+"</td>\n</tr>";this.cost+=t.count>0?t.count*t.price:t.price}this.html+="</tbody>"};return e}();return t})}).call(this);