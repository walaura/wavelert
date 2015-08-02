import {Dialog}  from './global/dialog';
export class Alert extends Dialog {
	
	get buttons(){
		return `
			<a class="wavelert-u-surface wavelert-button wavelert-js-close wavelert-js-close--cool" href="#">OK</a>
		`
	}
		
}