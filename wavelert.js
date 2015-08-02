import {css}  from './wavelert/static';
import {Alert}  from './wavelert/alert';
import {Confirm}  from './wavelert/confirm';

jQuery(function(){
	if(jQuery.find('style.wavelert-styles').length < 1) {
		jQuery('body').append(`<style type="text/css" class="wavelert-styles">${css}</style>`);
	}
});

window.wavelert = {
	confirm: function(params) {
		return (new Confirm(params)).place();
	},
	alert: function(params) {
		return (new Alert(params)).place();
	}
}