import { $element } from '../util';

import { WaveWindow } from './wavewindow';
import { message, buttons, dialog } from './dialog.css';
import { glyph } from '../static/glyph.css';

export class Dialog extends WaveWindow {
	get buttons() {
		return [];
	}

	get clientArea() {
		const $buttons = $element('div', { class: buttons }, this.buttons);
		const $message = $element(
			'div',
			{ class: message, 'data-icon': !!this.params.icon },
			[
				this.params.icon &&
					$element('span', {
						class: glyph,
						'data-glyph': this.params.icon,
					}),
				this.params.text,
			]
		);
		const $dialog = $element('div', { class: dialog }, [$message, $buttons]);
		return $dialog;
	}
}
