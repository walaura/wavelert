import { WaveWindow } from './src/WaveWindow';
import { Alert } from './src/Alert';
import { Confirm } from './src/Confirm';
import { withCloseWrapper } from './src/util';

export const promisified = {
	Alert: ({ ...props }) =>
		withCloseWrapper(closeWrapper =>
			WaveWindow({
				...props,
				onClose: () => closeWrapper(false),
				children: Alert({ ...props, onClose: closeWrapper }),
			})
		),
	Confirm: ({ ...props }) =>
		withCloseWrapper(closeWrapper =>
			WaveWindow({
				...props,
				onClose: () => closeWrapper(false),
				children: Confirm({ ...props, onClose: closeWrapper }),
			})
		),
};
