import { $element } from './util';
import { button } from './Button.css';

const Button = (props, children) =>
	$element(
		'button',
		{
			class: button,
			...props,
		},
		children
	);

export { Button };
