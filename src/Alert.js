import { Dialog } from './Dialog';
import { Button } from './Button';

const Alert = ({ icon, children, onClose }) =>
	Dialog({
		buttons: [
			Button({
				onClick: () => {
					onClose(true);
				},
				children: 'OK',
			}),
		],
		icon,
		children,
	});

export { Alert };
