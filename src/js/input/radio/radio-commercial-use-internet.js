(function() {
  var define, log, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/radio/internet-8-week', 'input/radio/internet-1-year'], function($, _, Internet8Week, Internet1Year) {
    var UseInternet;
    UseInternet = (function() {

      function UseInternet() {
        this.onChange = __bind(this.onChange, this);        this.label = "on the Internet or in new media";
        this.html = "<p>\n  It will be used on the Internet or in new media with the\n  <select name=\"internet-type\" id=\"internet-type\" class=\"chzn-select\" data-placeholder=\"please choose...\">\n    <option value=\"-1\"></option>\n  </select>\n</p>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.setupOptions();
        this.$el.on('change', '#internet-type', this.onChange);
      }

      UseInternet.prototype.setupOptions = function() {
        var html;
        this.selectedIndex = -1;
        this.selectedItem = null;
        this.options = [new Internet8Week(), new Internet1Year()];
        html = '';
        _.each(this.options, function(el, i) {
          return html += "<option value=\"" + i + "\">" + el.label + "</option>";
        });
        return this.$el.find('select').append(html);
      };

      UseInternet.prototype.getSelectedItem = function() {
        return this.selectedItem;
      };

      UseInternet.prototype.onChange = function(event) {
        this.selectedIndex = parseInt(event.target.value, 10);
        return this.selectedItem = this.selectedIndex !== -1 ? this.options[this.selectedIndex] : null;
      };

      return UseInternet;

    })();
    return UseInternet;
  });

}).call(this);
