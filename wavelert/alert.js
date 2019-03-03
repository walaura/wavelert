import { Dialog } from './global/dialog';
import { $element } from './util';

export class Alert extends Dialog {
	get buttons() {
		return [
			$element(
				'button',
				{
					onClick: () => {
						this.close(true);
					},
					class: 'wavelert-u-surface wavelert-button',
				},
				['OK']
			),
		];
	}
}
