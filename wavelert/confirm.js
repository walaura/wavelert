import {WaveWindow}  from './global/wavewindow';
export class Confirm extends WaveWindow {
	
	parseParams(params){
		params.buttons = `
			<a class="wavelert-u-surface wavelert-button wavelert-js-close wavelert-js-close--cool" href="#">OK</a>
			<a class="wavelert-u-surface wavelert-button wavelert-js-close" href="#">Cancel</a>
		`;
		return params;
	}
		
}