import {Alert}  from '../alert';
import {Confirm}  from '../confirm';

window.wavelert = {
	confirm: function(params) {
		return (new Confirm(params)).place();
	},
	alert: function(params) {
		return (new Alert(params)).place();
	}
}