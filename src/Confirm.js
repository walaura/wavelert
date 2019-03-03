import { Dialog } from './Dialog';
import { Button } from './Button';

const Confirm = ({ icon, text, onClose }) =>
	Dialog({
		buttons: [
			Button({
				onClick: () => {
					onClose(true);
				},
				children: 'OK',
			}),
			Button({
				onClick: () => {
					onClose(false);
				},
				children: 'Cancel',
			}),
		],
		icon,
		text,
	});

export { Confirm };
