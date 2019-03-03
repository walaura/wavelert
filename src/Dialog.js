import { createElement } from './util';

import { message, buttons as buttonsCss, dialog } from './Dialog.css';
import { glyph } from './static/glyph.css';

export const Dialog = ({ buttons, icon, children }) => {
	if (!children) {
		children = 'The window at ' + window.location.href + ' says nothing';
	}
	const $dialog = createElement('div', { class: dialog }, [
		createElement('div', { class: message, 'data-icon': !!icon }, [
			icon &&
				createElement('span', {
					class: glyph,
					'data-glyph': icon,
				}),
			children,
		]),
		createElement('div', { class: buttonsCss }, buttons),
	]);
	return $dialog;
};
