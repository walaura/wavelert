import {Alert}  from '../alert';
import {Confirm}  from '../confirm';
import {Browser}  from '../browser';

window.wavelert = {
	confirm: function(params) {
		return (new Confirm(params)).place();
	},
	alert: function(params) {
		return (new Alert(params)).place();
	},
	browser: function(params) {
		return (new Browser(params)).place();
	}
}