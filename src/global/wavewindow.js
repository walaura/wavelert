import createWindow from './window.js';

const parseParams = params => {
	if (typeof params === 'string') {
		params = {
			text: params,
		};
	}
	if (!params) {
		params = {};
	}
	if (!params.text) {
		params.text = 'The window at ' + window.location.href + ' says nothing';
	}
	return params;
};

export class WaveWindow {
	constructor(params) {
		this._onSuccess = function() {};
		this._onFail = function() {};

		this.position = [0, 0];

		this.params = parseParams(params);
		const { $window, $wrapper } = createWindow(
			{
				title: params.title,
				dark: params.dark,
				width: params.width,
				height: params.height,
				onClose: () => this.close(false),
			},
			this.clientArea
		);
		this.$window = $window;
		this.$wrapper = $wrapper;
	}

	/*
		false promise bc I really don't want to find out how ES6 to ES4 promises work right now
	*/

	then(callback) {
		this._onSuccess = callback;
		return this;
	}
	catch(callback) {
		this._onFail = callback;
		return this;
	}

	place() {
		document.body.appendChild(this.$wrapper);
		if (this.$window.activate) {
			this.$window.activate();
		}
		return this;
	}

	get clientArea() {
		return this.params.text;
	}

	close(succesfully = true) {
		this.$wrapper.remove();
		if (succesfully) {
			this._onSuccess();
		} else {
			this._onFail();
		}
	}
}
