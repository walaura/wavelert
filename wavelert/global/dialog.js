import {WaveWindow}     from './wavewindow';
import {dialogTemplate} from '../static/static';	
export class Dialog extends WaveWindow {
	
	get buttons() {
		return '';
	}
	
	get clientArea(){
		
		var $dialog = jQuery(dialogTemplate);
		
		$dialog.find('.wavelert-dialog-buttons').append(this.buttons);	
		$dialog.find('.wavelert-dialog-message').text(this.params.text);
		if(this.params.icon) {
			$dialog.find('.wavelert-dialog-message').prepend(`<span class="wavelert-js-close wavelert-u-glyph wavelert-u-glyph--${this.params.icon}"></span>`)
		}
		return $dialog;
	}
		
}