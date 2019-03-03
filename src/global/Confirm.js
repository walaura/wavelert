import { Dialog } from './Dialog';
import { Button } from './Button';

const Confirm = ({ icon, text, onClose }) =>
	Dialog({
		buttons: [
			Button(
				{
					onClick: () => {
						onClose(true);
					},
				},
				'OK'
			),
			Button(
				{
					onClick: () => {
						onClose(false);
					},
				},
				'Cancel'
			),
		],
		icon,
		text,
	});

export { Confirm };
