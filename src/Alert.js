import { Dialog } from './Dialog';
import { Button } from './Button';

const Alert = ({ icon, text, onClose }) =>
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
		],
		icon,
		text,
	});

export { Alert };
