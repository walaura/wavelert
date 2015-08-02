import {Dialog}  from './global/dialog';
export class Confirm extends Dialog {
	
	get buttons(){
		return `
			<a class="wavelert-u-surface wavelert-button wavelert-js-close wavelert-js-close--cool" href="#">OK</a>
			<a class="wavelert-u-surface wavelert-button wavelert-js-close" href="#">Cancel</a>
		`
	}
		
}