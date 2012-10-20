root = this
log = root.log
define = root.define

define [
  'jquery'
  'underscore'
  'input/television/principal-actor-demo'
  'input/version'
], ($, _, PrincipalActorDemo, Version) ->
	class TelevisionCommercialDemo
    constructor: ->
      @label = "Television Commercial Demo - (Voiceover/Off Camera, Non-air)"
      @steps = [
        new PrincipalActorDemo()
        new Version()
      ]
      @el = []
      _.each @steps, (el, i) => @el.push el.el
      @$el = $ @el
    
    destroy: ->
      @$el.off("**") # TODO: Make sure this works.
  
  TelevisionCommercialDemo