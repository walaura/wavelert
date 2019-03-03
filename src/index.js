import { $element } from './util';
import { Dialog } from './global/dialog';
import { button } from './static/styles.css';

class Alert extends Dialog {
	get buttons() {
		return [
			$element(
				'button',
				{
					onClick: () => {
						this.close(true);
					},
					class: button,
				},
				['OK']
			),
		];
	}
}

class Confirm extends Dialog {
	get buttons() {
		return [
			$element(
				'button',
				{
					onClick: () => {
						this.close(true);
					},
					class: button,
				},
				['OK']
			),
			$element(
				'button',
				{
					onClick: () => {
						this.close(false);
					},
					class: button,
				},
				['Cancel']
			),
		];
	}
}

export { Alert, Confirm };
