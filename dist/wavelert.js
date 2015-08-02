(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _wavelertStatic = require('./wavelert/static');

var _wavelertAlert = require('./wavelert/alert');

var _wavelertConfirm = require('./wavelert/confirm');

jQuery(function () {
	if (jQuery.find('style.wavelert-styles').length < 1) {
		jQuery('body').append('<style type="text/css" class="wavelert-styles">' + _wavelertStatic.css + '</style>');
	}
});

window.wavelert = {
	confirm: function confirm(params) {
		return new _wavelertConfirm.Confirm(params).place();
	},
	alert: function alert(params) {
		return new _wavelertAlert.Alert(params).place();
	}
};

},{"./wavelert/alert":2,"./wavelert/confirm":3,"./wavelert/static":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _globalWavewindow = require('./global/wavewindow');

var Alert = (function (_WaveWindow) {
	_inherits(Alert, _WaveWindow);

	function Alert() {
		_classCallCheck(this, Alert);

		_get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Alert, [{
		key: 'parseParams',
		value: function parseParams(params) {
			params.buttons = '\n\t\t\t<a class="wavelert-u-surface wavelert-button wavelert-js-close wavelert-js-close--cool" href="#">OK</a>\n\t\t';
			return params;
		}
	}]);

	return Alert;
})(_globalWavewindow.WaveWindow);

exports.Alert = Alert;

},{"./global/wavewindow":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _globalWavewindow = require('./global/wavewindow');

var Confirm = (function (_WaveWindow) {
	_inherits(Confirm, _WaveWindow);

	function Confirm() {
		_classCallCheck(this, Confirm);

		_get(Object.getPrototypeOf(Confirm.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Confirm, [{
		key: 'parseParams',
		value: function parseParams(params) {
			params.buttons = '\n\t\t\t<a class="wavelert-u-surface wavelert-button wavelert-js-close wavelert-js-close--cool" href="#">OK</a>\n\t\t\t<a class="wavelert-u-surface wavelert-button wavelert-js-close" href="#">Cancel</a>\n\t\t';
			return params;
		}
	}]);

	return Confirm;
})(_globalWavewindow.WaveWindow);

exports.Confirm = Confirm;

},{"./global/wavewindow":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _static = require('../static');

var WaveWindow = (function () {
	_createClass(WaveWindow, [{
		key: 'success',

		/*
  	false promise bc I really don't want to find out how ES6 to ES4 promises work right now
  */

		value: function success(callback) {
			this._onSuccess = callback;
			return this;
		}
	}, {
		key: 'fail',
		value: function fail(callback) {
			this._onFail = callback;
			return this;
		}
	}, {
		key: 'place',
		value: function place() {
			jQuery('body').append(this.$window);
			return this;
		}
	}, {
		key: 'parseParams',
		value: function parseParams(params) {
			return params;
		}
	}]);

	function WaveWindow(params) {
		_classCallCheck(this, WaveWindow);

		var self = this;

		this._onSuccess = function () {};
		this._onFail = function () {};
		self.$window = jQuery(_static.windowTemplate);

		if (typeof params === 'string') {
			params = {
				'text': params
			};
		}
		if (!params) {
			params = {};
		}
		if (!params.text) {
			params.text = 'The window at ' + window.location.href + ' says nothing';
		}
		params = this.parseParams(params);

		self.$window.find('.wavelert-dialog-buttons').append(params.buttons);
		self.$window.find('.wavelert-dialog-message').text(params.text);
		if (params.dark) {
			self.$window.addClass('wavelert-wrapper--dark');
		}
		if (params.icon) {
			self.$window.find('.wavelert-dialog-message').prepend('<span class="wavelert-js-close wavelert-u-glyph wavelert-u-glyph--' + params.icon + '"></span>');
		}
		if (params.title) {
			self.$window.find('.wavelert-title').prepend(params.title);
		}

		self.$window.on('click', '.wavelert-js-close', function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			self.$window.remove();
			if ($(ev.currentTarget).hasClass('wavelert-js-close--cool')) {
				self._onSuccess();
			} else {
				self._onFail();
			}
		});
	}

	return WaveWindow;
})();

exports.WaveWindow = WaveWindow;

},{"../static":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var css = ".wavelert-u-glyph.wavelert-u-glyph--close:before {\n\tcontent: url(data:image/gif;base64,R0lGODlhCAAHAIAAAP///wAAACH5BAEAAAAALAAAAAAIAAcAQAINTIBgaJt9VGTHOZokLgA7);\n}\n\n.wavelert-u-glyph.wavelert-u-glyph--alert:before {\n\tcontent: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNq8lz0OwjAMhWO3CxsDO4dgh3O0VwEBHbgKvQYSMzdhhoEhJFWL2tCmtePGUtQ/JNtf3nMpKEYU+5Vuzk+XJ2itVbSwyfV7U636Fjm7LbhZ7OQ9RWScIjCUSKsIRS3CBlK6Px7WQ4/BrCunCJTQhUNBnsBI90EUUModXAoo1D2bQkqtGBYPcLwPTff2aJ7LERjoXo9ckyiIaYCrBRTae7YWxAlQKeAM3ZMokAmY4rzXVApA7d5nQ89v8/pW2X4bsgi4yXydTqGAnL1vsA/hp2iB5QL7N6x9DHEEcpTfHr2hjsAAr4vMBeD43nECTCHhOsK4oAwhoD0vIxIFFJp65OkIAJlZbALgG2YUCilTgOQtcCNJksoRqCJGLcRuIbf7q0D1Oe+2yxjJfy5AxO7+WTGayTY3hPyvMPcD0aoz4q6UfRooYyW3zX8FGADQwNExSLCogAAAAABJRU5ErkJggg==)\n}\n\n.wavelert-u-surface {\n\tbackground: #c0c0c0;\n\tcolor: #000;\n\ttext-decoration: inherit;\n\tpadding: 1px;\n\tposition: relative;\n\tfont: 1em tahoma, verdana, sans-serif;\n\tletter-spacing: .5px;\n\t-webkit-font-smoothing: none;\n\tfont-smoothing: none;\n\tborder: 1px solid #000;\n\tborder-top-color: rgba(255,255,255,.75);\n\tborder-left-color: rgba(255,255,255,.75);\n\t-webkit-user-select: none;\n\t-webkit-user-drag: none;\n\tuser-select: none;\n\tuser-drag: none;\n\tcursor: default;\n}\n.wavelert-u-surface:after,\n.wavelert-u-surface:before {\n\tcontent: '\\0020';\n\tposition: absolute;\n\tz-index: 9;\n\tpointer-events: none;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n}\n.wavelert-u-surface:before {\n\tborder: 1px solid transparent;\n\tborder-right-color: rgba(0,0,0,.5);\n\tborder-bottom-color: rgba(0,0,0,.5);\n}\n\n.wavelert-u-surface * {\n\tz-index: 10;\n}\n\n.wavelert-wrapper {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: scroll;\n\tdisplay: flex;\n\talign-content: center;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding-bottom: 4em;\n}\n.wavelert-wrapper--dark {\n\tbackground: url(data:image/gif;base64,R0lGODlhAgACAIAAAP///wAAACH5BAEAAAAALAAAAAACAAIAQAIDDBAFADs=);\n}\n\n.wavelert-button {\n\tpadding: .25em 1em .4em;\n\ttext-align: center;\n\tdisplay: inline-block;\n}\n.wavelert-button:active {\n\tborder-bottom-color: rgba(255,255,255,.75);\n\tborder-right-color: rgba(255,255,255,.75);\n\tborder-left-color: #000;\n\tborder-top-color: #000;\n}\n.wavelert-button:active:before {\n\tborder-top-color: rgba(0,0,0,.25);\n\tborder-left-color: rgba(0,0,0,.25);\n\tborder-right-color: rgba(255,255,255,.25);\n\tborder-bottom-color: rgba(255,255,255,.25);\n}\n\n.wavelert-button:focus {\n\toutline: none;\n}\n.wavelert-button:focus:after {\n\tborder: 1px dotted #000;\n\tmargin: 1px 2px 2px 1px;\n}\n\n.wavelert-window {\n\tpadding: 2px;\n\tborder: 1px solid rgba(0,0,0,1);\n\tborder-top: none;\n\tborder-left: none;\n\tmax-width: 300px;\n\tfont-size: .7em;\n\tposition: relative;\n}\n\n.wavelert-window:before {\n\tborder-top-color: rgba(255,255,255,.75);\n\tborder-left-color: rgba(255,255,255,.75);\n}\n\n.wavelert-title {\n\tbackground: #000080;\n\tbackground: linear-gradient(to right, #000080,#1381d0);\n\tpadding: .25em .25em .25em .5em;\n\theight: 1.2em;\n\tfont-weight: 800;\n\tcolor: #fff;\n}\n.wavelert-title-button {\n\tfloat: right;\n\theight: 1.1em;\n\twidth: 1.25em;\n\tpadding: 0;\n\tcolor: #000;\n\ttext-align: center;\n\tfont-weight: 800;\n\tline-height: .9em;\n}\n\n\n.wavelert-dialog {\n\tpadding: 1em;\n}\n\n.wavelert-dialog-message {\n\tmargin-bottom: 1.25em;\n\toverflow: hidden;\n\tdisplay: flex;\n}\n\n.wavelert-dialog-message .wavelert-u-glyph {\n\tfloat: left;\n\tmargin-right: 1em;\n}\n\n.wavelert-dialog-buttons {\n\ttext-align: center;\n}\n\n.wavelert-dialog-buttons .wavelert-button {\n\twidth: 5em;\n}";

exports.css = css;
var windowTemplate = "<div class=\"wavelert-wrapper\">\n\t<div class=\"wavelert-u-surface wavelert-window\">\n\t\t<div class=\"wavelert-title\">\n\t\t\t<div class=\"wavelert-u-surface wavelert-button wavelert-title-button\"><span class=\"wavelert-js-close wavelert-u-glyph wavelert-u-glyph--close\"></span></div>\n\t\t</div>\n\t\t<div class=\"wavelert-dialog\">\n\t\t\t<div class=\"wavelert-dialog-message\"></div>\n\t\t\t<div class=\"wavelert-dialog-buttons\"></div>\n\t\t</div>\n\t</div>\n</div>";
exports.windowTemplate = windowTemplate;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXZzd2hhdGV2cy9SZXBvcy93YXZlbGVydC93YXZlbGVydC5qcyIsIi9Vc2Vycy9ldnN3aGF0ZXZzL1JlcG9zL3dhdmVsZXJ0L3dhdmVsZXJ0L2FsZXJ0LmpzIiwiL1VzZXJzL2V2c3doYXRldnMvUmVwb3Mvd2F2ZWxlcnQvd2F2ZWxlcnQvY29uZmlybS5qcyIsIi9Vc2Vycy9ldnN3aGF0ZXZzL1JlcG9zL3dhdmVsZXJ0L3dhdmVsZXJ0L2dsb2JhbC93YXZld2luZG93LmpzIiwiL1VzZXJzL2V2c3doYXRldnMvUmVwb3Mvd2F2ZWxlcnQvd2F2ZWxlcnQvc3RhdGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OEJDQW1CLG1CQUFtQjs7NkJBQ2pCLGtCQUFrQjs7K0JBQ2hCLG9CQUFvQjs7QUFFM0MsTUFBTSxDQUFDLFlBQVU7QUFDaEIsS0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNuRCxRQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxxRUFOZixHQUFHLGNBTTZFLENBQUM7RUFDdkY7Q0FDRCxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLFFBQVEsR0FBRztBQUNqQixRQUFPLEVBQUUsaUJBQVMsTUFBTSxFQUFFO0FBQ3pCLFNBQU8sQUFBQyxxQkFWRixPQUFPLENBVU8sTUFBTSxDQUFDLENBQUUsS0FBSyxFQUFFLENBQUM7RUFDckM7QUFDRCxNQUFLLEVBQUUsZUFBUyxNQUFNLEVBQUU7QUFDdkIsU0FBTyxBQUFDLG1CQWRGLEtBQUssQ0FjTyxNQUFNLENBQUMsQ0FBRSxLQUFLLEVBQUUsQ0FBQztFQUNuQztDQUNELENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQ2pCeUIscUJBQXFCOztJQUNsQyxLQUFLO1dBQUwsS0FBSzs7VUFBTCxLQUFLO3dCQUFMLEtBQUs7OzZCQUFMLEtBQUs7OztjQUFMLEtBQUs7O1NBRU4scUJBQUMsTUFBTSxFQUFDO0FBQ2xCLFNBQU0sQ0FBQyxPQUFPLDBIQUViLENBQUM7QUFDRixVQUFPLE1BQU0sQ0FBQztHQUNkOzs7UUFQVyxLQUFLO3FCQURWLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDQVEscUJBQXFCOztJQUNsQyxPQUFPO1dBQVAsT0FBTzs7VUFBUCxPQUFPO3dCQUFQLE9BQU87OzZCQUFQLE9BQU87OztjQUFQLE9BQU87O1NBRVIscUJBQUMsTUFBTSxFQUFDO0FBQ2xCLFNBQU0sQ0FBQyxPQUFPLHFOQUdiLENBQUM7QUFDRixVQUFPLE1BQU0sQ0FBQztHQUNkOzs7UUFSVyxPQUFPO3FCQURaLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztzQkNBWSxXQUFXOztJQUM1QixVQUFVO2NBQVYsVUFBVTs7Ozs7OztTQU1mLGlCQUFDLFFBQVEsRUFBQztBQUNoQixPQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUMzQixVQUFPLElBQUksQ0FBQztHQUNaOzs7U0FDRyxjQUFDLFFBQVEsRUFBQztBQUNiLE9BQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLFVBQU8sSUFBSSxDQUFDO0dBQ1o7OztTQUNJLGlCQUFFO0FBQ04sU0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsVUFBTyxJQUFJLENBQUM7R0FDWjs7O1NBRVUscUJBQUMsTUFBTSxFQUFDO0FBQ2xCLFVBQU8sTUFBTSxDQUFDO0dBQ2Q7OztBQUVVLFVBdkJDLFVBQVUsQ0F1QlYsTUFBTSxFQUFFO3dCQXZCUixVQUFVOztBQXlCckIsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixNQUFJLENBQUMsVUFBVSxHQUFHLFlBQVUsRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxPQUFPLEdBQUcsWUFBVSxFQUFFLENBQUM7QUFDNUIsTUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLFNBOUJmLGNBQWMsQ0E4QmlCLENBQUM7O0FBRXRDLE1BQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQzlCLFNBQU0sR0FBRztBQUNSLFVBQU0sRUFBRSxNQUFNO0lBQ2QsQ0FBQztHQUNGO0FBQ0QsTUFBRyxDQUFDLE1BQU0sRUFBRTtBQUNYLFNBQU0sR0FBRyxFQUFFLENBQUM7R0FDWjtBQUNELE1BQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ2hCLFNBQU0sQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUMsZUFBZSxDQUFDO0dBQ3BFO0FBQ0QsUUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRWxDLE1BQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyRSxNQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEUsTUFBRyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ2YsT0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQztHQUNoRDtBQUNELE1BQUcsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNmLE9BQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsT0FBTyx3RUFBc0UsTUFBTSxDQUFDLElBQUksZUFBWSxDQUFBO0dBQ2xKO0FBQ0QsTUFBRyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ2hCLE9BQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtHQUMxRDs7QUFFRCxNQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsVUFBUyxFQUFFLEVBQUM7QUFDeEQsS0FBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3BCLEtBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNyQixPQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLE9BQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsRUFBRTtBQUMzRCxRQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEIsTUFDSTtBQUNKLFFBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmO0dBQ0QsQ0FBQyxDQUFBO0VBRUY7O1FBcEVXLFVBQVU7Ozs7Ozs7Ozs7O0FDRGhCLElBQUksR0FBRyxtckhBb0paLENBQUM7OztBQUVJLElBQUksY0FBYyxnZUFXbEIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge2Nzc30gIGZyb20gJy4vd2F2ZWxlcnQvc3RhdGljJztcbmltcG9ydCB7QWxlcnR9ICBmcm9tICcuL3dhdmVsZXJ0L2FsZXJ0JztcbmltcG9ydCB7Q29uZmlybX0gIGZyb20gJy4vd2F2ZWxlcnQvY29uZmlybSc7XG5cbmpRdWVyeShmdW5jdGlvbigpe1xuXHRpZihqUXVlcnkuZmluZCgnc3R5bGUud2F2ZWxlcnQtc3R5bGVzJykubGVuZ3RoIDwgMSkge1xuXHRcdGpRdWVyeSgnYm9keScpLmFwcGVuZChgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNsYXNzPVwid2F2ZWxlcnQtc3R5bGVzXCI+JHtjc3N9PC9zdHlsZT5gKTtcblx0fVxufSk7XG5cbndpbmRvdy53YXZlbGVydCA9IHtcblx0Y29uZmlybTogZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0cmV0dXJuIChuZXcgQ29uZmlybShwYXJhbXMpKS5wbGFjZSgpO1xuXHR9LFxuXHRhbGVydDogZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0cmV0dXJuIChuZXcgQWxlcnQocGFyYW1zKSkucGxhY2UoKTtcblx0fVxufSIsImltcG9ydCB7V2F2ZVdpbmRvd30gIGZyb20gJy4vZ2xvYmFsL3dhdmV3aW5kb3cnO1xuZXhwb3J0IGNsYXNzIEFsZXJ0IGV4dGVuZHMgV2F2ZVdpbmRvdyB7XG5cdFxuXHRwYXJzZVBhcmFtcyhwYXJhbXMpe1xuXHRcdHBhcmFtcy5idXR0b25zID0gYFxuXHRcdFx0PGEgY2xhc3M9XCJ3YXZlbGVydC11LXN1cmZhY2Ugd2F2ZWxlcnQtYnV0dG9uIHdhdmVsZXJ0LWpzLWNsb3NlIHdhdmVsZXJ0LWpzLWNsb3NlLS1jb29sXCIgaHJlZj1cIiNcIj5PSzwvYT5cblx0XHRgO1xuXHRcdHJldHVybiBwYXJhbXM7XG5cdH1cblx0XHRcbn0iLCJpbXBvcnQge1dhdmVXaW5kb3d9ICBmcm9tICcuL2dsb2JhbC93YXZld2luZG93JztcbmV4cG9ydCBjbGFzcyBDb25maXJtIGV4dGVuZHMgV2F2ZVdpbmRvdyB7XG5cdFxuXHRwYXJzZVBhcmFtcyhwYXJhbXMpe1xuXHRcdHBhcmFtcy5idXR0b25zID0gYFxuXHRcdFx0PGEgY2xhc3M9XCJ3YXZlbGVydC11LXN1cmZhY2Ugd2F2ZWxlcnQtYnV0dG9uIHdhdmVsZXJ0LWpzLWNsb3NlIHdhdmVsZXJ0LWpzLWNsb3NlLS1jb29sXCIgaHJlZj1cIiNcIj5PSzwvYT5cblx0XHRcdDxhIGNsYXNzPVwid2F2ZWxlcnQtdS1zdXJmYWNlIHdhdmVsZXJ0LWJ1dHRvbiB3YXZlbGVydC1qcy1jbG9zZVwiIGhyZWY9XCIjXCI+Q2FuY2VsPC9hPlxuXHRcdGA7XG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXHRcdFxufSIsImltcG9ydCB7d2luZG93VGVtcGxhdGV9ICBmcm9tICcuLi9zdGF0aWMnO1xuZXhwb3J0IGNsYXNzIFdhdmVXaW5kb3cge1xuXHRcdFxuXHQvKlxuXHRcdGZhbHNlIHByb21pc2UgYmMgSSByZWFsbHkgZG9uJ3Qgd2FudCB0byBmaW5kIG91dCBob3cgRVM2IHRvIEVTNCBwcm9taXNlcyB3b3JrIHJpZ2h0IG5vd1xuXHQqL1x0XG5cdFxuXHRzdWNjZXNzKGNhbGxiYWNrKXtcblx0XHR0aGlzLl9vblN1Y2Nlc3MgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRmYWlsKGNhbGxiYWNrKXtcblx0XHR0aGlzLl9vbkZhaWwgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRwbGFjZSgpe1xuXHRcdGpRdWVyeSgnYm9keScpLmFwcGVuZCh0aGlzLiR3aW5kb3cpO1x0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0XG5cdHBhcnNlUGFyYW1zKHBhcmFtcyl7XG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHBhcmFtcylcdHtcblx0XHRcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5fb25TdWNjZXNzID0gZnVuY3Rpb24oKXt9O1xuXHRcdHRoaXMuX29uRmFpbCA9IGZ1bmN0aW9uKCl7fTtcblx0XHRzZWxmLiR3aW5kb3cgPSBqUXVlcnkod2luZG93VGVtcGxhdGUpO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRwYXJhbXMgPSB7XG5cdFx0XHRcdCd0ZXh0JzogcGFyYW1zXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZighcGFyYW1zKSB7XG5cdFx0XHRwYXJhbXMgPSB7fTtcblx0XHR9XG5cdFx0aWYoIXBhcmFtcy50ZXh0KSB7XG5cdFx0XHRwYXJhbXMudGV4dCA9ICdUaGUgd2luZG93IGF0ICcrd2luZG93LmxvY2F0aW9uLmhyZWYrJyBzYXlzIG5vdGhpbmcnO1xuXHRcdH1cblx0XHRwYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG5cdFx0XG5cdFx0c2VsZi4kd2luZG93LmZpbmQoJy53YXZlbGVydC1kaWFsb2ctYnV0dG9ucycpLmFwcGVuZChwYXJhbXMuYnV0dG9ucyk7XHRcblx0XHRzZWxmLiR3aW5kb3cuZmluZCgnLndhdmVsZXJ0LWRpYWxvZy1tZXNzYWdlJykudGV4dChwYXJhbXMudGV4dCk7XG5cdFx0aWYocGFyYW1zLmRhcmspIHtcblx0XHRcdHNlbGYuJHdpbmRvdy5hZGRDbGFzcygnd2F2ZWxlcnQtd3JhcHBlci0tZGFyaycpO1xuXHRcdH1cblx0XHRpZihwYXJhbXMuaWNvbikge1xuXHRcdFx0c2VsZi4kd2luZG93LmZpbmQoJy53YXZlbGVydC1kaWFsb2ctbWVzc2FnZScpLnByZXBlbmQoYDxzcGFuIGNsYXNzPVwid2F2ZWxlcnQtanMtY2xvc2Ugd2F2ZWxlcnQtdS1nbHlwaCB3YXZlbGVydC11LWdseXBoLS0ke3BhcmFtcy5pY29ufVwiPjwvc3Bhbj5gKVxuXHRcdH1cblx0XHRpZihwYXJhbXMudGl0bGUpIHtcblx0XHRcdHNlbGYuJHdpbmRvdy5maW5kKCcud2F2ZWxlcnQtdGl0bGUnKS5wcmVwZW5kKHBhcmFtcy50aXRsZSlcblx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRzZWxmLiR3aW5kb3cub24oJ2NsaWNrJywnLndhdmVsZXJ0LWpzLWNsb3NlJyxmdW5jdGlvbihldil7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRzZWxmLiR3aW5kb3cucmVtb3ZlKCk7XG5cdFx0XHRpZigkKGV2LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCd3YXZlbGVydC1qcy1jbG9zZS0tY29vbCcpKSB7XG5cdFx0XHRcdHNlbGYuX29uU3VjY2VzcygpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNlbGYuX29uRmFpbCgpO1x0XG5cdFx0XHR9XG5cdFx0fSlcblxuXHR9XHRcdFxufSIsImV4cG9ydCB2YXIgY3NzID1cbmAud2F2ZWxlcnQtdS1nbHlwaC53YXZlbGVydC11LWdseXBoLS1jbG9zZTpiZWZvcmUge1xuXHRjb250ZW50OiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ0FBSEFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFJQUFjQVFBSU5USUJnYUp0OVZHVEhPWm9rTGdBNyk7XG59XG5cbi53YXZlbGVydC11LWdseXBoLndhdmVsZXJ0LXUtZ2x5cGgtLWFsZXJ0OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVZCSlJFRlVlTnE4bHowT3dqQU1oV08zQ3hzRE80ZGdoM08wVndFQkhiZ0t2UVlTTXpkaGhvRWhKRldMMnRDbXRlUEdVdFEvSk50ZjNuTXBLRVlVKzVWdXprK1hKMml0VmJTd3lmVjdVNjM2RmptN0xiaFo3T1E5UldTY0lqQ1VTS3NJUlMzQ0JsSzZQeDdXUTQvQnJDdW5DSlRRaFVOQm5zQkk5MEVVVU1vZFhBb28xRDJiUWtxdEdCWVBjTHdQVGZmMmFKN0xFUmpvWG85Y2t5aUlhWUNyQlJUYWU3WVd4QWxRS2VBTTNaTW9rQW1ZNHJ6WFZBcEE3ZDVuUTg5djgvcFcyWDRic2dpNHlYeWRUcUdBbkwxdnNBL2hwMmlCNVFMN042eDlESEVFY3BUZkhyMmhqc0FBcjR2TUJlRDQzbkVDVENIaE9zSzRvQXdob0Qwdkl4SUZGSnA2NU9rSUFKbFpiQUxnRzJZVUNpbFRnT1F0Y0NOSmtzb1JxQ0pHTGNSdUliZjdxMEQxT2UrMnl4akpmeTVBeE83K1dUR2F5VFkzaFB5dk1QY0QwYW96NHE2VWZSb29ZeVczelg4RkdBRFF3TkV4U0xDb2dBQUFBQUJKUlU1RXJrSmdnZz09KVxufVxuXG4ud2F2ZWxlcnQtdS1zdXJmYWNlIHtcblx0YmFja2dyb3VuZDogI2MwYzBjMDtcblx0Y29sb3I6ICMwMDA7XG5cdHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcblx0cGFkZGluZzogMXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQ6IDFlbSB0YWhvbWEsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cdGxldHRlci1zcGFjaW5nOiAuNXB4O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBub25lO1xuXHRmb250LXNtb290aGluZzogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuXHRib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItZHJhZzogbm9uZTtcblx0Y3Vyc29yOiBkZWZhdWx0O1xufVxuLndhdmVsZXJ0LXUtc3VyZmFjZTphZnRlcixcbi53YXZlbGVydC11LXN1cmZhY2U6YmVmb3JlIHtcblx0Y29udGVudDogJ1xcXFwwMDIwJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiA5O1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xufVxuLndhdmVsZXJ0LXUtc3VyZmFjZTpiZWZvcmUge1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XG59XG5cbi53YXZlbGVydC11LXN1cmZhY2UgKiB7XG5cdHotaW5kZXg6IDEwO1xufVxuXG4ud2F2ZWxlcnQtd3JhcHBlciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nLWJvdHRvbTogNGVtO1xufVxuLndhdmVsZXJ0LXdyYXBwZXItLWRhcmsge1xuXHRiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQWdBQ0FJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFDQUFJQVFBSUREQkFGQURzPSk7XG59XG5cbi53YXZlbGVydC1idXR0b24ge1xuXHRwYWRkaW5nOiAuMjVlbSAxZW0gLjRlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ud2F2ZWxlcnQtYnV0dG9uOmFjdGl2ZSB7XG5cdGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjc1KTtcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7XG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xuXHRib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xufVxuLndhdmVsZXJ0LWJ1dHRvbjphY3RpdmU6YmVmb3JlIHtcblx0Ym9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDAsMCwuMjUpO1xuXHRib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLDAsMCwuMjUpO1xuXHRib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xufVxuXG4ud2F2ZWxlcnQtYnV0dG9uOmZvY3VzIHtcblx0b3V0bGluZTogbm9uZTtcbn1cbi53YXZlbGVydC1idXR0b246Zm9jdXM6YWZ0ZXIge1xuXHRib3JkZXI6IDFweCBkb3R0ZWQgIzAwMDtcblx0bWFyZ2luOiAxcHggMnB4IDJweCAxcHg7XG59XG5cbi53YXZlbGVydC13aW5kb3cge1xuXHRwYWRkaW5nOiAycHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMSk7XG5cdGJvcmRlci10b3A6IG5vbmU7XG5cdGJvcmRlci1sZWZ0OiBub25lO1xuXHRtYXgtd2lkdGg6IDMwMHB4O1xuXHRmb250LXNpemU6IC43ZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndhdmVsZXJ0LXdpbmRvdzpiZWZvcmUge1xuXHRib3JkZXItdG9wLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7XG5cdGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7XG59XG5cbi53YXZlbGVydC10aXRsZSB7XG5cdGJhY2tncm91bmQ6ICMwMDAwODA7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDA4MCwjMTM4MWQwKTtcblx0cGFkZGluZzogLjI1ZW0gLjI1ZW0gLjI1ZW0gLjVlbTtcblx0aGVpZ2h0OiAxLjJlbTtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Y29sb3I6ICNmZmY7XG59XG4ud2F2ZWxlcnQtdGl0bGUtYnV0dG9uIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRoZWlnaHQ6IDEuMWVtO1xuXHR3aWR0aDogMS4yNWVtO1xuXHRwYWRkaW5nOiAwO1xuXHRjb2xvcjogIzAwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogODAwO1xuXHRsaW5lLWhlaWdodDogLjllbTtcbn1cblxuXG4ud2F2ZWxlcnQtZGlhbG9nIHtcblx0cGFkZGluZzogMWVtO1xufVxuXG4ud2F2ZWxlcnQtZGlhbG9nLW1lc3NhZ2Uge1xuXHRtYXJnaW4tYm90dG9tOiAxLjI1ZW07XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi53YXZlbGVydC1kaWFsb2ctbWVzc2FnZSAud2F2ZWxlcnQtdS1nbHlwaCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLndhdmVsZXJ0LWRpYWxvZy1idXR0b25zIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2F2ZWxlcnQtZGlhbG9nLWJ1dHRvbnMgLndhdmVsZXJ0LWJ1dHRvbiB7XG5cdHdpZHRoOiA1ZW07XG59YDtcblxuZXhwb3J0IHZhciB3aW5kb3dUZW1wbGF0ZSA9XG5gPGRpdiBjbGFzcz1cIndhdmVsZXJ0LXdyYXBwZXJcIj5cblx0PGRpdiBjbGFzcz1cIndhdmVsZXJ0LXUtc3VyZmFjZSB3YXZlbGVydC13aW5kb3dcIj5cblx0XHQ8ZGl2IGNsYXNzPVwid2F2ZWxlcnQtdGl0bGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3YXZlbGVydC11LXN1cmZhY2Ugd2F2ZWxlcnQtYnV0dG9uIHdhdmVsZXJ0LXRpdGxlLWJ1dHRvblwiPjxzcGFuIGNsYXNzPVwid2F2ZWxlcnQtanMtY2xvc2Ugd2F2ZWxlcnQtdS1nbHlwaCB3YXZlbGVydC11LWdseXBoLS1jbG9zZVwiPjwvc3Bhbj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwid2F2ZWxlcnQtZGlhbG9nXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2F2ZWxlcnQtZGlhbG9nLW1lc3NhZ2VcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3YXZlbGVydC1kaWFsb2ctYnV0dG9uc1wiPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PmA7Il19
