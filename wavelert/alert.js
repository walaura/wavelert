import {WaveWindow}  from './global/wavewindow';
export class Alert extends WaveWindow {
	
	parseParams(params){
		params.buttons = `
			<a class="wavelert-u-surface wavelert-button wavelert-js-close wavelert-js-close--cool" href="#">OK</a>
		`;
		return params;
	}
		
}