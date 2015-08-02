import {WaveWindow}  from './global/wavewindow';
export class Browser extends WaveWindow {
	
	get clientArea(){
		
		if(this.params.url){
			return `
				<iframe
					src="${this.params.url}"
					style="position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;
					border:none"
				>
				</iframe>`
		}
		else {
			return `<div class="wavelert-content wavelert-u-surfaceContent" style="position:absolute;top:0;left:0;right:0;bottom:0;" >${this.params.text}</div>`;
		}
		
	}
		
}