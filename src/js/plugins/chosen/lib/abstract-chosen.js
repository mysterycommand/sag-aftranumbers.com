// Generated by CoffeeScript 1.3.3
/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*//*
Wrapped in a Require.js module by:
Matt Hayes
*/(function(){var e,t;t=this;e=t.define;e([],function(){var e;e=function(){function e(e,t){this.form_field=e;this.options=t!=null?t:{};this.set_default_values();this.is_multiple=this.form_field.multiple;this.default_text_default=this.is_multiple?"Select Some Options":"Select an Option";this.setup();this.set_up_html();this.register_observers();this.finish_setup()}e.prototype.set_default_values=function(){var e=this;this.click_test_action=function(t){return e.test_active_click(t)};this.activate_action=function(t){return e.activate_field(t)};this.active_field=!1;this.mouse_on_container=!1;this.results_showing=!1;this.result_highlighted=null;this.result_single_selected=null;this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1;this.disable_search_threshold=this.options.disable_search_threshold||0;this.search_contains=this.options.search_contains||!1;this.choices=0;return this.results_none_found=this.options.no_results_text||"No results match"};e.prototype.mouse_enter=function(){return this.mouse_on_container=!0};e.prototype.mouse_leave=function(){return this.mouse_on_container=!1};e.prototype.input_focus=function(e){var t=this;if(!this.active_field)return setTimeout(function(){return t.container_mousedown()},50)};e.prototype.input_blur=function(e){var t=this;if(!this.mouse_on_container){this.active_field=!1;return setTimeout(function(){return t.blur_test()},100)}};e.prototype.result_add_option=function(e){var t,n;if(!e.disabled){e.dom_id=this.container_id+"_o_"+e.array_index;t=e.selected&&this.is_multiple?[]:["active-result"];e.selected&&t.push("result-selected");e.group_array_index!=null&&t.push("group-option");e.classes!==""&&t.push(e.classes);n=e.style.cssText!==""?' style="'+e.style+'"':"";return'<li id="'+e.dom_id+'" class="'+t.join(" ")+'"'+n+">"+e.html+"</li>"}return""};e.prototype.results_update_field=function(){this.result_clear_highlight();this.result_single_selected=null;return this.results_build()};e.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()};e.prototype.results_search=function(e){return this.results_showing?this.winnow_results():this.results_show()};e.prototype.keyup_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode;this.search_field_scale();switch(t){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke){this.result_clear_highlight();return this.results_search()}break;case 13:e.preventDefault();if(this.results_showing)return this.result_select(e);break;case 27:this.results_showing&&this.results_hide();return!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}};e.prototype.generate_field_id=function(){var e;e=this.generate_random_id();this.form_field.id=e;return e};e.prototype.generate_random_char=function(){var e,t,n;e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";n=Math.floor(Math.random()*e.length);t=e.substring(n,n+1);return t};return e}();return e})}).call(this);