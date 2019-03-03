import { createElement } from './util';
import { button } from './Button.css';

const Button = ({ children, ...props }) =>
	createElement(
		'button',
		{
			class: button,
			...props,
		},
		children
	);

export { Button };
