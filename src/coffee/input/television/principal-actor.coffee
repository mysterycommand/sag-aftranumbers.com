root = this
log = root.log
define = root.define

define [
  'jquery'
], ($) ->
	class PrincipalActor
    constructor: (@index) ->
      @html = """
        <fieldset>
          I'll need
          <input type="number" name="num-actors" id="num-actors" value="0" min="0" max="2">
          <a href="#principal-actor">principal actor</a>(s).
        </fieldset>
      """
      @$el = $ @html
      @el = @$el[0]
      
      @$el.on 'input', '#num-actors', @onInputActors
    
    onInputActors: (event) =>
      # Does nothing for now.
  
  PrincipalActor