import { $element } from './util';

import { message, buttons as buttonsCss, dialog } from './Dialog.css';
import { glyph } from './static/glyph.css';

export const Dialog = ({ buttons, icon, text }) => {
	if (!text) {
		text = 'The window at ' + window.location.href + ' says nothing';
	}
	const $dialog = $element('div', { class: dialog }, [
		$element('div', { class: message, 'data-icon': !!icon }, [
			icon &&
				$element('span', {
					class: glyph,
					'data-glyph': icon,
				}),
			text,
		]),
		$element('div', { class: buttonsCss }, buttons),
	]);
	return $dialog;
};
