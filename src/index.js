import { WaveWindow } from './global/WaveWindow';
import { Dialog } from './global/Dialog';
import { Alert } from './global/Alert';
import { Confirm } from './global/Confirm';

const withCloseWrapper = fn => {
	return {
		place: () =>
			new Promise((yay, nay) => {
				const onClose = state => {
					$item.remove();
					state ? yay() : nay();
				};
				const $item = fn(onClose);
				document.body.appendChild($item);
				if ($item.activate) {
					$item.activate();
				}
			}),
	};
};

const promisified = {
	Alert: ({ ...props }) => {
		return withCloseWrapper(closeWrapper =>
			WaveWindow(
				{ ...props, onClose: () => closeWrapper(false) },
				Alert({ ...props, onClose: closeWrapper })
			)
		);
	},

	Confirm: ({ ...props }) => {
		return withCloseWrapper(closeWrapper =>
			WaveWindow(
				{ ...props, onClose: () => closeWrapper(false) },
				Confirm({ ...props, onClose: closeWrapper })
			)
		);
	},
};

export { promisified, Alert, Confirm, Dialog, WaveWindow };
