parcelRequire = (function(e, r, n, t) {
	var i = 'function' == typeof parcelRequire && parcelRequire,
		o = 'function' == typeof require && require;
	function u(n, t) {
		if (!r[n]) {
			if (!e[n]) {
				var f = 'function' == typeof parcelRequire && parcelRequire;
				if (!t && f) return f(n, !0);
				if (i) return i(n, !0);
				if (o && 'string' == typeof n) return o(n);
				var c = new Error("Cannot find module '" + n + "'");
				throw ((c.code = 'MODULE_NOT_FOUND'), c);
			}
			(p.resolve = function(r) {
				return e[n][1][r] || r;
			}),
				(p.cache = {});
			var l = (r[n] = new u.Module(n));
			e[n][0].call(l.exports, p, l, l.exports, this);
		}
		return r[n].exports;
		function p(e) {
			return u(p.resolve(e));
		}
	}
	(u.isParcelRequire = !0),
		(u.Module = function(e) {
			(this.id = e), (this.bundle = u), (this.exports = {});
		}),
		(u.modules = e),
		(u.cache = r),
		(u.parent = i),
		(u.register = function(r, n) {
			e[r] = [
				function(e, r) {
					r.exports = n;
				},
				{},
			];
		});
	for (var f = 0; f < n.length; f++) u(n[f]);
	if (n.length) {
		var c = u(n[n.length - 1]);
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = c)
			: 'function' == typeof define && define.amd
			? define(function() {
					return c;
			  })
			: t && (this[t] = c);
	}
	return u;
})(
	{
		NKbW: [
			function(require, module, exports) {
				'use strict';
				function e(e, o) {
					return n(e) || r(e, o) || t();
				}
				function t() {
					throw new TypeError(
						'Invalid attempt to destructure non-iterable instance'
					);
				}
				function r(e, t) {
					var r = [],
						n = !0,
						o = !1,
						i = void 0;
					try {
						for (
							var a, u = e[Symbol.iterator]();
							!(n = (a = u.next()).done) &&
							(r.push(a.value), !t || r.length !== t);
							n = !0
						);
					} catch (c) {
						(o = !0), (i = c);
					} finally {
						try {
							n || null == u.return || u.return();
						} finally {
							if (o) throw i;
						}
					}
					return r;
				}
				function n(e) {
					if (Array.isArray(e)) return e;
				}
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.withCloseWrapper = exports.$element = void 0);
				var o = function(t) {
					var r =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: [],
						o = document.createElement(t);
					return (
						Object.entries(r).forEach(function(t) {
							var r = e(t, 2),
								n = r[0],
								i = r[1];
							'onCreateElement' === n && i(),
								'on' === n.substring(0, 2)
									? o.addEventListener(n.substring(2).toLowerCase(), i)
									: o.setAttribute(n, i);
						}),
						Array.isArray(n) || (n = [n]),
						n
							.filter(function(e) {
								return !!e;
							})
							.forEach(function(e) {
								'string' == typeof e || 'number' == typeof e
									? o.appendChild(document.createTextNode(e))
									: o.appendChild(e);
							}),
						o
					);
				};
				exports.$element = o;
				var i = function(e) {
					return function() {
						return new Promise(function(t, r) {
							var n = e(function(e) {
								n.remove(), e ? t() : r();
							});
							document.body.appendChild(n), n.activate && n.activate();
						});
					};
				};
				exports.withCloseWrapper = i;
			},
			{},
		],
		qdv2: [
			function(require, module, exports) {
				module.exports = {
					wrapper: '_wrapper_1noln_1',
					window: '_window_1noln_39 _surface_1iiae_1',
					windowTitle: '_windowTitle_1noln_57',
					titleButton: '_titleButton_1noln_83 _surface_1iiae_1',
				};
			},
			{},
		],
		zYr8: [
			function(require, module, exports) {
				module.exports = '/wavelert/close.ffd02228.gif';
			},
			{},
		],
		sKTG: [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.WaveWindow = void 0);
				var e = require('../util'),
					t = require('./WaveWindow.css'),
					n = r(require('../static/close.gif'));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function o(e) {
					return u(e) || i(e) || a();
				}
				function a() {
					throw new TypeError(
						'Invalid attempt to spread non-iterable instance'
					);
				}
				function i(e) {
					if (
						Symbol.iterator in Object(e) ||
						'[object Arguments]' === Object.prototype.toString.call(e)
					)
						return Array.from(e);
				}
				function u(e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = new Array(e.length); t < e.length; t++)
							n[t] = e[t];
						return n;
					}
				}
				function l(e, t) {
					return d(e) || c(e, t) || s();
				}
				function s() {
					throw new TypeError(
						'Invalid attempt to destructure non-iterable instance'
					);
				}
				function c(e, t) {
					var n = [],
						r = !0,
						o = !1,
						a = void 0;
					try {
						for (
							var i, u = e[Symbol.iterator]();
							!(r = (i = u.next()).done) &&
							(n.push(i.value), !t || n.length !== t);
							r = !0
						);
					} catch (l) {
						(o = !0), (a = l);
					} finally {
						try {
							r || null == u.return || u.return();
						} finally {
							if (o) throw a;
						}
					}
					return n;
				}
				function d(e) {
					if (Array.isArray(e)) return e;
				}
				var f = 10,
					v = function(r) {
						var o = r.title,
							a = r.onMove,
							i = r.onMoveStart,
							u = r.onClose,
							s = !1,
							c = [0, 0],
							d = (0, e.$element)('header', { class: t.windowTitle }, [
								o,
								(0, e.$element)(
									'button',
									{ class: t.titleButton, onClick: u },
									(0, e.$element)('img', { src: n.default })
								),
							]);
						return (
							d.addEventListener('mousedown', function(e) {
								(c = [e.pageX, e.pageY]), i(), (s = !0);
							}),
							window.addEventListener('mouseup', function() {
								s = !1;
							}),
							window.addEventListener('mousemove', function(e) {
								var t = e.pageX,
									n = e.pageY;
								if (s) {
									var r = l(c, 2),
										o = r[0],
										i = r[1];
									a(t - o, n - i);
								}
							}),
							d
						);
					},
					p = function(n, r) {
						var a = n.title,
							i = n.dark,
							u = n.width,
							l = n.height,
							s = n.onClose,
							c = n.theme,
							d = [0, 0],
							p = o(d),
							m = (0, e.$element)('dialog', { class: t.window, tabIndex: 0 }, [
								(0, e.$element)('main', {}, r),
							]),
							w = v({
								title: a,
								onMoveStart: function() {
									p = o(d);
								},
								onMove: function(e, t) {
									(d = [p[0] + e, p[1] + t]),
										(m.style.transform = 'translateX('
											.concat(d[0], 'px) translateY(')
											.concat(d[1], 'px)'));
								},
								onClose: s,
							});
						m.prepend(w);
						var y = (0, e.$element)(
							'div',
							{ class: t.wrapper, 'data-dark': i, 'data-theme': c },
							[m]
						);
						return (
							u && (m.style.width = u + 'px'),
							l && (m.style.height = l + 'px'),
							(y.activate = function() {
								requestAnimationFrame(function() {
									var e = m.querySelector('main button');
									e ? e.focus() : m.focus();
								});
							}),
							m.addEventListener('focus', function() {
								f++, (y.style.zIndex = f);
							}),
							y
						);
					};
				exports.WaveWindow = p;
			},
			{
				'../util': 'NKbW',
				'./WaveWindow.css': 'qdv2',
				'../static/close.gif': 'zYr8',
			},
		],
		'3VCn': [
			function(require, module, exports) {
				module.exports = {
					dialog: '_dialog_l6qn5_1',
					message: '_message_l6qn5_5',
					buttons: '_buttons_l6qn5_17',
				};
			},
			{},
		],
		xEAL: [
			function(require, module, exports) {
				module.exports = { glyph: '_glyph_1xas1_1' };
			},
			{
				'./close.gif': [['close.ffd02228.gif', 'zYr8'], 'zYr8'],
				'./alert.png': [['alert.5b14a5b7.png', 'bLYP'], 'bLYP'],
			},
		],
		k0ZI: [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.Dialog = void 0);
				var e = require('../util'),
					t = require('./Dialog.css'),
					s = require('../static/glyph.css'),
					i = function(i) {
						var a = i.buttons,
							o = i.icon,
							l = i.text;
						return (
							l ||
								(l = 'The window at ' + window.location.href + ' says nothing'),
							(0, e.$element)('div', { class: t.dialog }, [
								(0, e.$element)('div', { class: t.message, 'data-icon': !!o }, [
									o &&
										(0, e.$element)('span', {
											class: s.glyph,
											'data-glyph': o,
										}),
									l,
								]),
								(0, e.$element)('div', { class: t.buttons }, a),
							])
						);
					};
				exports.Dialog = i;
			},
			{
				'../util': 'NKbW',
				'./Dialog.css': '3VCn',
				'../static/glyph.css': 'xEAL',
			},
		],
		IcR4: [
			function(require, module, exports) {
				module.exports = { button: '_button_p4ioe_1 _surface_1iiae_1' };
			},
			{},
		],
		'5Wgw': [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.Button = void 0);
				var e = require('../util'),
					t = require('./Button.css');
				function r(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {},
							o = Object.keys(r);
						'function' == typeof Object.getOwnPropertySymbols &&
							(o = o.concat(
								Object.getOwnPropertySymbols(r).filter(function(e) {
									return Object.getOwnPropertyDescriptor(r, e).enumerable;
								})
							)),
							o.forEach(function(t) {
								n(e, t, r[t]);
							});
					}
					return e;
				}
				function n(e, t, r) {
					return (
						t in e
							? Object.defineProperty(e, t, {
									value: r,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (e[t] = r),
						e
					);
				}
				var o = function(n, o) {
					return (0, e.$element)('button', r({ class: t.button }, n), o);
				};
				exports.Button = o;
			},
			{ '../util': 'NKbW', './Button.css': 'IcR4' },
		],
		tfyO: [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.Alert = void 0);
				var t = require('./Dialog'),
					e = require('./Button'),
					o = function(o) {
						var r = o.icon,
							n = o.text,
							i = o.onClose;
						return (0, t.Dialog)({
							buttons: [
								(0, e.Button)(
									{
										onClick: function() {
											i(!0);
										},
									},
									'OK'
								),
							],
							icon: r,
							text: n,
						});
					};
				exports.Alert = o;
			},
			{ './Dialog': 'k0ZI', './Button': '5Wgw' },
		],
		k9gM: [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.Confirm = void 0);
				var o = require('./Dialog'),
					t = require('./Button'),
					e = function(e) {
						var n = e.icon,
							i = e.text,
							r = e.onClose;
						return (0, o.Dialog)({
							buttons: [
								(0, t.Button)(
									{
										onClick: function() {
											r(!0);
										},
									},
									'OK'
								),
								(0, t.Button)(
									{
										onClick: function() {
											r(!1);
										},
									},
									'Cancel'
								),
							],
							icon: n,
							text: i,
						});
					};
				exports.Confirm = e;
			},
			{ './Dialog': 'k0ZI', './Button': '5Wgw' },
		],
		WVhq: [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.promisified = void 0);
				var e = require('./src/WaveWindow'),
					r = require('./src/Alert'),
					n = require('./src/Confirm'),
					t = require('./src/util');
				function o(e) {
					for (var r = 1; r < arguments.length; r++) {
						var n = null != arguments[r] ? arguments[r] : {},
							t = Object.keys(n);
						'function' == typeof Object.getOwnPropertySymbols &&
							(t = t.concat(
								Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable;
								})
							)),
							t.forEach(function(r) {
								i(e, r, n[r]);
							});
					}
					return e;
				}
				function i(e, r, n) {
					return (
						r in e
							? Object.defineProperty(e, r, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (e[r] = n),
						e
					);
				}
				var u = {
					Alert: function(n) {
						var i = Object.assign({}, n);
						return (0, t.withCloseWrapper)(function(n) {
							return (0, e.WaveWindow)(
								o({}, i, {
									onClose: function() {
										return n(!1);
									},
								}),
								(0, r.Alert)(o({}, i, { onClose: n }))
							);
						});
					},
					Confirm: function(r) {
						var i = Object.assign({}, r);
						return (0, t.withCloseWrapper)(function(r) {
							return (0, e.WaveWindow)(
								o({}, i, {
									onClose: function() {
										return r(!1);
									},
								}),
								(0, n.Confirm)(o({}, i, { onClose: r }))
							);
						});
					},
				};
				exports.promisified = u;
			},
			{
				'./src/WaveWindow': 'sKTG',
				'./src/Alert': 'tfyO',
				'./src/Confirm': 'k9gM',
				'./src/util': 'NKbW',
			},
		],
		Focm: [
			function(require, module, exports) {
				'use strict';
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					Object.defineProperty(exports, 'WaveWindow', {
						enumerable: !0,
						get: function() {
							return e.WaveWindow;
						},
					}),
					Object.defineProperty(exports, 'Dialog', {
						enumerable: !0,
						get: function() {
							return r.Dialog;
						},
					}),
					Object.defineProperty(exports, 'Alert', {
						enumerable: !0,
						get: function() {
							return t.Alert;
						},
					}),
					Object.defineProperty(exports, 'Confirm', {
						enumerable: !0,
						get: function() {
							return i.Confirm;
						},
					}),
					Object.defineProperty(exports, 'promisified', {
						enumerable: !0,
						get: function() {
							return o.promisified;
						},
					}),
					Object.defineProperty(exports, 'withCloseWrapper', {
						enumerable: !0,
						get: function() {
							return n.withCloseWrapper;
						},
					});
				var e = require('./src/WaveWindow'),
					r = require('./src/Dialog'),
					t = require('./src/Alert'),
					i = require('./src/Confirm'),
					o = require('./promisified'),
					n = require('./src/util');
			},
			{
				'./src/WaveWindow': 'sKTG',
				'./src/Dialog': 'k0ZI',
				'./src/Alert': 'tfyO',
				'./src/Confirm': 'k9gM',
				'./promisified': 'WVhq',
				'./src/util': 'NKbW',
			},
		],
	},
	{},
	['Focm'],
	'wavelert'
);
//# sourceMappingURL=/wavelert/wavelert.42b6584b.map
