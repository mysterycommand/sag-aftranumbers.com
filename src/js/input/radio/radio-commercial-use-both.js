(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/radio/use-broadcast', 'input/radio/use-internet'], function($, _, UseBroadcast, UseInternet) {
    var UseBoth;
    UseBoth = (function() {

      function UseBoth() {
        var _this = this;
        this.label = "both as a radio broadcast, and on the Internet or in new media";
        this.steps = [new UseBroadcast(), new UseInternet()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      UseBoth.prototype.getSelectedItem = function(index) {
        return this.steps[0].getSelectedItem();
      };

      return UseBoth;

    })();
    return UseBoth;
  });

}).call(this);
