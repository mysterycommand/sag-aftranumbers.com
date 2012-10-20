root = this
log = root.log
define = root.define

define [
  'jquery'
  'input/television/principal-actor-general-extra'
], ($, PrincipalActorGeneralExtra) ->
	class Day
    constructor: ->
      @html = """
        <fieldset>
          It's a
          <input type="number" name="num-days" id="num-days" value="0" min="1" max="2">
          day <a href="#shoot">shoot</a>.
          <span style="display: none;" id="more-days">
            Looking for longer shoots?
            <a href="mailto:togren@sagaftra.org?subject=SAG-AFTRAnumbers%20Question">Contact Tim at SAG-AFTRA</a>!
          </span>
        </fieldset>
      """
      @$el = $ @html
      @el = @$el[0]
      
      @performers = []
      @$el.on 'input', '#num-days', @onInputDays
    
    onInputDays: (event) =>
      numPerformers = parseInt(event.target.value, 10)
      if numPerformers is @performers.length then return
      
      if numPerformers > @performers.length
        while @performers.length < numPerformers
          performer = new PrincipalActorGeneralExtra(@performers.length)
          @performers.push performer
          @$el.append performer.$el
      else
        while @performers.length > numPerformers
          @performers.pop().$el.remove()
      
      if event.target.value is $(event.target).attr 'max'
        @$el.find('#more-days').filter(":hidden").show()
      else
        @$el.find('#more-days').filter(":visible").hide()
  
  Day
