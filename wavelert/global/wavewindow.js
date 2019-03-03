import { windowTemplate, css } from '../static/static';

jQuery(function() {
	if (jQuery.find('style.wavelert-styles').length < 1) {
		jQuery('body').append(
			`<style type="text/css" class="wavelert-styles">${css}</style>`
		);
	}
});

export class WaveWindow {
	constructor(params) {
		var self = this;

		this._onSuccess = function() {};
		this._onFail = function() {};

		this.params = this.parseParams(params);
		this.buildWindow(params);
	}

	/*
		false promise bc I really don't want to find out how ES6 to ES4 promises work right now
	*/

	success(callback) {
		this._onSuccess = callback;
		return this;
	}
	fail(callback) {
		this._onFail = callback;
		return this;
	}
	place() {
		jQuery('body').append(this.$window);
		return this;
	}

	get clientArea() {
		return params.text;
	}

	parseParams(params) {
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
	}

	handleDrag() {
		var self = this;
		var delta = false;
		self.$window.on('mousedown', '.wavelert-title', function(ev) {
			var cssDelta = [
				isNaN(parseInt(self.$window.find('.wavelert-window').css('left')))
					? 0
					: parseInt(self.$window.find('.wavelert-window').css('left')),
				isNaN(parseInt(self.$window.find('.wavelert-window').css('top')))
					? 0
					: parseInt(self.$window.find('.wavelert-window').css('top')),
			];
			if (delta === false) {
				delta = [ev.screenX, ev.screenY];
			}
			jQuery(window).one('mouseup.wavelert-dragOperation', function(ev) {
				delta = false;
				jQuery(window).off('.wavelert-dragOperation');
			});
			jQuery(window).on('mousemove.wavelert-dragOperation', function(ev) {
				self.$window.find('.wavelert-window').css({
					left: cssDelta[0] + ev.screenX - delta[0],
					top: cssDelta[1] + ev.screenY - delta[1],
				});
			});
		});
	}

	close(succesfully = true) {
		this.$window.remove();
		if (succesfully) {
			this._onSuccess();
		} else {
			this._onFail();
		}
	}

	handleClose() {
		var self = this;
		self.$window.on('click', '.wavelert-js-close', function(ev) {
			ev.preventDefault();
			ev.stopPropagation();

			if ($(ev.currentTarget).hasClass('wavelert-js-close--cool')) {
				self.close(true);
			} else {
				self.close(false);
			}
		});
	}

	getHighestZIndex() {
		var highestZIndex = 9999;
		jQuery('.wavelert-wrapper').each(function() {
			var zIndex = parseInt(jQuery(this).css('z-index'), 10);
			if (zIndex > highestZIndex) {
				highestZIndex = zIndex;
			}
		});
		return highestZIndex;
	}

	handleTopVisibility() {
		var self = this;
		self.$window.on('mousedown', '.wavelert-window', function(ev) {
			if (
				self.getHighestZIndex() !== parseInt(self.$window.css('z-index'), 10)
			) {
				self.$window.css('z-index', self.getHighestZIndex() + 1);
			}
		});
	}

	buildWindow(params) {
		var self = this;
		self.$window = jQuery(windowTemplate);
		if (params.dark) {
			self.$window.addClass('wavelert-wrapper--dark');
		}
		if (params.title) {
			self.$window.find('.wavelert-title').prepend(params.title);
		}
		if (params.theme) {
			self.$window = self.$window.wrapInner(
				`<div class="wavelert-u-theme wavelert-u-theme--${params.theme}"></div>`
			);
		}
		if (params.width) {
			this.$window.find('.wavelert-window').css('width', params.width);
		}
		if (params.height) {
			this.$window.find('.wavelert-window').css('height', params.height);
		}

		this.$window.css('z-index', this.getHighestZIndex() + 1);
		this.$window.find('.wavelert-clientArea').html(self.clientArea);

		self.handleClose();
		self.handleDrag();
		self.handleTopVisibility();
	}
}
