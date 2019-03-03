import { WaveWindow } from './src/global/WaveWindow';
import { Alert } from './src/global/Alert';
import { Confirm } from './src/global/Confirm';
import { withCloseWrapper } from './src/util';

export const promisified = {
	Alert: ({ ...props }) =>
		withCloseWrapper(closeWrapper =>
			WaveWindow(
				{ ...props, onClose: () => closeWrapper(false) },
				Alert({ ...props, onClose: closeWrapper })
			)
		),
	Confirm: ({ ...props }) =>
		withCloseWrapper(closeWrapper =>
			WaveWindow(
				{ ...props, onClose: () => closeWrapper(false) },
				Confirm({ ...props, onClose: closeWrapper })
			)
		),
};
