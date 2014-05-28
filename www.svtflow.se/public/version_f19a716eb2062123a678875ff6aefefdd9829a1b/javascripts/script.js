/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
/*!
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012 jQuery Foundation and other contributors
 *  Released under the MIT license
 *  http://sizzlejs.com/
 */
/*
 * jQote2 - client-side Javascript templating engine
 * Copyright (C) 2010, aefxx
 * http://aefxx.com/
 *
 * Dual licensed under the WTFPL v2 or MIT (X11) licenses
 * WTFPL v2 Copyright (C) 2004, Sam Hocevar
 *
 * Date: Fri, May 4th, 2012
 * Version: 0.9.8
 */
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
/**
 * @license
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash -o ./dist/lodash.compat.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
/*!
	jQuery.kinetic v1.8.2
	Dave Taylor http://the-taylors.org/jquery.kinetic

	The MIT License (MIT)
	Copyright (c) <2011> <Dave Taylor http://the-taylors.org>

	Minor changes by SVT to allow mousewheel-scrolling, and to add AMD-style dependency injection.
*/
/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
/**
 * History.js HTML4 Support
 * Depends on the HTML5 Support
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
/**
 * History.getInternetExplorerMajorVersion()
 * Get's the major version of Internet Explorer
 * @return {integer}
 * @license Public Domain
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @author James Padolsey <https://gist.github.com/527683>
 */
/**
 * History.isInternetExplorer()
 * Are we using Internet Explorer?
 * @return {boolean}
 * @license Public Domain
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 */
var requirejs, require, define;
! function (e) {
	function t(e, t) {
		return m.call(e, t)
	}

	function i(e, t) {
		var i, n, s, r, a, o, l, c, u, d, h, p = t && t.split("/"),
			f = v.map,
			y = f && f["*"] || {};
		if (e && "." === e.charAt(0))
			if (t) {
				p = p.slice(0, p.length - 1);
				e = e.split("/");
				a = e.length - 1;
				v.nodeIdCompat && _.test(e[a]) && (e[a] = e[a].replace(_, ""));
				e = p.concat(e);
				for (u = 0; u < e.length; u += 1) {
					h = e[u];
					if ("." === h) {
						e.splice(u, 1);
						u -= 1
					} else if (".." === h) {
						if (1 === u && (".." === e[2] || ".." === e[0])) break;
						if (u > 0) {
							e.splice(u - 1, 2);
							u -= 2
						}
					}
				}
				e = e.join("/")
			} else 0 === e.indexOf("./") && (e = e.substring(2));
		if ((p || y) && f) {
			i = e.split("/");
			for (u = i.length; u > 0; u -= 1) {
				n = i.slice(0, u).join("/");
				if (p)
					for (d = p.length; d > 0; d -= 1) {
						s = f[p.slice(0, d).join("/")];
						if (s) {
							s = s[n];
							if (s) {
								r = s;
								o = u;
								break
							}
						}
					}
				if (r) break;
				if (!l && y && y[n]) {
					l = y[n];
					c = u
				}
			}
			if (!r && l) {
				r = l;
				o = c
			}
			if (r) {
				i.splice(0, o, r);
				e = i.join("/")
			}
		}
		return e
	}

	function n(t, i) {
		return function () {
			return u.apply(e, g.call(arguments, 0).concat([t, i]))
		}
	}

	function s(e) {
		return function (t) {
			return i(t, e)
		}
	}

	function r(e) {
		return function (t) {
			p[e] = t
		}
	}

	function a(i) {
		if (t(f, i)) {
			var n = f[i];
			delete f[i];
			y[i] = !0;
			c.apply(e, n)
		}
		if (!t(p, i) && !t(y, i)) throw new Error("No " + i);
		return p[i]
	}

	function o(e) {
		var t, i = e ? e.indexOf("!") : -1;
		if (i > -1) {
			t = e.substring(0, i);
			e = e.substring(i + 1, e.length)
		}
		return [t, e]
	}

	function l(e) {
		return function () {
			return v && v.config && v.config[e] || {}
		}
	}
	var c, u, d, h, p = {},
		f = {},
		v = {},
		y = {},
		m = Object.prototype.hasOwnProperty,
		g = [].slice,
		_ = /\.js$/;
	d = function (e, t) {
		var n, r = o(e),
			l = r[0];
		e = r[1];
		if (l) {
			l = i(l, t);
			n = a(l)
		}
		if (l) e = n && n.normalize ? n.normalize(e, s(t)) : i(e, t);
		else {
			e = i(e, t);
			r = o(e);
			l = r[0];
			e = r[1];
			l && (n = a(l))
		}
		return {
			f: l ? l + "!" + e : e,
			n: e,
			pr: l,
			p: n
		}
	};
	h = {
		require: function (e) {
			return n(e)
		},
		exports: function (e) {
			var t = p[e];
			return "undefined" != typeof t ? t : p[e] = {}
		},
		module: function (e) {
			return {
				id: e,
				uri: "",
				exports: p[e],
				config: l(e)
			}
		}
	};
	c = function (i, s, o, l) {
		var c, u, v, m, g, _, b = [],
			w = typeof o;
		l = l || i;
		if ("undefined" === w || "function" === w) {
			s = !s.length && o.length ? ["require", "exports", "module"] : s;
			for (g = 0; g < s.length; g += 1) {
				m = d(s[g], l);
				u = m.f;
				if ("require" === u) b[g] = h.require(i);
				else if ("exports" === u) {
					b[g] = h.exports(i);
					_ = !0
				} else if ("module" === u) c = b[g] = h.module(i);
				else if (t(p, u) || t(f, u) || t(y, u)) b[g] = a(u);
				else {
					if (!m.p) throw new Error(i + " missing " + u);
					m.p.load(m.n, n(l, !0), r(u), {});
					b[g] = p[u]
				}
			}
			v = o ? o.apply(p[i], b) : void 0;
			i && (c && c.exports !== e && c.exports !== p[i] ? p[i] = c.exports : v === e && _ || (p[i] = v))
		} else i && (p[i] = o)
	};
	requirejs = require = u = function (t, i, n, s, r) {
		if ("string" == typeof t) return h[t] ? h[t](i) : a(d(t, i).f);
		if (!t.splice) {
			v = t;
			v.deps && u(v.deps, v.callback);
			if (!i) return;
			if (i.splice) {
				t = i;
				i = n;
				n = null
			} else t = e
		}
		i = i || function () {};
		if ("function" == typeof n) {
			n = s;
			s = r
		}
		s ? c(e, t, i, n) : setTimeout(function () {
			c(e, t, i, n)
		}, 4);
		return u
	};
	u.config = function (e) {
		return u(e)
	};
	requirejs._defined = p;
	define = function (e, i, n) {
		if (!i.splice) {
			n = i;
			i = []
		}
		t(p, e) || t(f, e) || (f[e] = [e, i, n])
	};
	define.amd = {
		jQuery: !0
	}
}();
define("almond", function () {});
! function (e, t) {
	function i(e) {
		var t = ft[e] = {};
		Q.each(e.split(tt), function (e, i) {
			t[i] = !0
		});
		return t
	}

	function n(e, i, n) {
		if (n === t && 1 === e.nodeType) {
			var s = "data-" + i.replace(yt, "-$1").toLowerCase();
			n = e.getAttribute(s);
			if ("string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : vt.test(n) ? Q.parseJSON(n) : n
				} catch (r) {}
				Q.data(e, i, n)
			} else n = t
		}
		return n
	}

	function s(e) {
		var t;
		for (t in e)
			if (("data" !== t || !Q.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function r() {
		return !1
	}

	function a() {
		return !0
	}

	function o(e) {
		return !e || !e.parentNode || 11 === e.parentNode.nodeType
	}

	function l(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function c(e, t, i) {
		t = t || 0;
		if (Q.isFunction(t)) return Q.grep(e, function (e, n) {
			var s = !!t.call(e, n, e);
			return s === i
		});
		if (t.nodeType) return Q.grep(e, function (e) {
			return e === t === i
		});
		if ("string" == typeof t) {
			var n = Q.grep(e, function (e) {
				return 1 === e.nodeType
			});
			if (Ot.test(t)) return Q.filter(t, n, !i);
			t = Q.filter(t, n)
		}
		return Q.grep(e, function (e) {
			return Q.inArray(e, t) >= 0 === i
		})
	}

	function u(e) {
		var t = Ht.split("|"),
			i = e.createDocumentFragment();
		if (i.createElement)
			for (; t.length;) i.createElement(t.pop());
		return i
	}

	function d(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}

	function h(e, t) {
		if (1 === t.nodeType && Q.hasData(e)) {
			var i, n, s, r = Q._data(e),
				a = Q._data(t, r),
				o = r.events;
			if (o) {
				delete a.handle;
				a.events = {};
				for (i in o)
					for (n = 0, s = o[i].length; s > n; n++) Q.event.add(t, i, o[i][n])
			}
			a.data && (a.data = Q.extend({}, a.data))
		}
	}

	function p(e, t) {
		var i;
		if (1 === t.nodeType) {
			t.clearAttributes && t.clearAttributes();
			t.mergeAttributes && t.mergeAttributes(e);
			i = t.nodeName.toLowerCase();
			if ("object" === i) {
				t.parentNode && (t.outerHTML = e.outerHTML);
				Q.support.html5Clone && e.innerHTML && !Q.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)
			} else if ("input" === i && Yt.test(e.type)) {
				t.defaultChecked = t.checked = e.checked;
				t.value !== e.value && (t.value = e.value)
			} else "option" === i ? t.selected = e.defaultSelected : "input" === i || "textarea" === i ? t.defaultValue = e.defaultValue : "script" === i && t.text !== e.text && (t.text = e.text);
			t.removeAttribute(Q.expando)
		}
	}

	function f(e) {
		return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
	}

	function v(e) {
		Yt.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t) {
		if (t in e) return t;
		for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = mi.length; s--;) {
			t = mi[s] + i;
			if (t in e) return t
		}
		return n
	}

	function m(e, t) {
		e = t || e;
		return "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
	}

	function g(e, t) {
		for (var i, n, s = [], r = 0, a = e.length; a > r; r++) {
			i = e[r];
			if (i.style) {
				s[r] = Q._data(i, "olddisplay");
				if (t) {
					s[r] || "none" !== i.style.display || (i.style.display = "");
					"" === i.style.display && m(i) && (s[r] = Q._data(i, "olddisplay", x(i.nodeName)))
				} else {
					n = ii(i, "display");
					s[r] || "none" === n || Q._data(i, "olddisplay", n)
				}
			}
		}
		for (r = 0; a > r; r++) {
			i = e[r];
			i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"))
		}
		return e
	}

	function _(e, t, i) {
		var n = ui.exec(t);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
	}

	function b(e, t, i, n) {
		for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) {
			"margin" === i && (r += Q.css(e, i + yi[s], !0));
			if (n) {
				"content" === i && (r -= parseFloat(ii(e, "padding" + yi[s])) || 0);
				"margin" !== i && (r -= parseFloat(ii(e, "border" + yi[s] + "Width")) || 0)
			} else {
				r += parseFloat(ii(e, "padding" + yi[s])) || 0;
				"padding" !== i && (r += parseFloat(ii(e, "border" + yi[s] + "Width")) || 0)
			}
		}
		return r
	}

	function w(e, t, i) {
		var n = "width" === t ? e.offsetWidth : e.offsetHeight,
			s = !0,
			r = Q.support.boxSizing && "border-box" === Q.css(e, "boxSizing");
		if (0 >= n || null == n) {
			n = ii(e, t);
			(0 > n || null == n) && (n = e.style[t]);
			if (di.test(n)) return n;
			s = r && (Q.support.boxSizingReliable || n === e.style[t]);
			n = parseFloat(n) || 0
		}
		return n + b(e, t, i || (r ? "border" : "content"), s) + "px"
	}

	function x(e) {
		if (pi[e]) return pi[e];
		var t = Q("<" + e + ">").appendTo(B.body),
			i = t.css("display");
		t.remove();
		if ("none" === i || "" === i) {
			ni = B.body.appendChild(ni || Q.extend(B.createElement("iframe"), {
				frameBorder: 0,
				width: 0,
				height: 0
			}));
			if (!si || !ni.createElement) {
				si = (ni.contentWindow || ni.contentDocument).document;
				si.write("<!doctype html><html><body>");
				si.close()
			}
			t = si.body.appendChild(si.createElement(e));
			i = ii(t, "display");
			B.body.removeChild(ni)
		}
		pi[e] = i;
		return i
	}

	function C(e, t, i, n) {
		var s;
		if (Q.isArray(t)) Q.each(t, function (t, s) {
			i || bi.test(e) ? n(e, s) : C(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
		});
		else if (i || "object" !== Q.type(t)) n(e, t);
		else
			for (s in t) C(e + "[" + s + "]", t[s], i, n)
	}

	function S(e) {
		return function (t, i) {
			if ("string" != typeof t) {
				i = t;
				t = "*"
			}
			var n, s, r, a = t.toLowerCase().split(tt),
				o = 0,
				l = a.length;
			if (Q.isFunction(i))
				for (; l > o; o++) {
					n = a[o];
					r = /^\+/.test(n);
					r && (n = n.substr(1) || "*");
					s = e[n] = e[n] || [];
					s[r ? "unshift" : "push"](i)
				}
		}
	}

	function k(e, i, n, s, r, a) {
		r = r || i.dataTypes[0];
		a = a || {};
		a[r] = !0;
		for (var o, l = e[r], c = 0, u = l ? l.length : 0, d = e === Oi; u > c && (d || !o); c++) {
			o = l[c](i, n, s);
			if ("string" == typeof o)
				if (!d || a[o]) o = t;
				else {
					i.dataTypes.unshift(o);
					o = k(e, i, n, s, o, a)
				}
		}!d && o || a["*"] || (o = k(e, i, n, s, "*", a));
		return o
	}

	function I(e, i) {
		var n, s, r = Q.ajaxSettings.flatOptions || {};
		for (n in i) i[n] !== t && ((r[n] ? e : s || (s = {}))[n] = i[n]);
		s && Q.extend(!0, e, s)
	}

	function T(e, i, n) {
		var s, r, a, o, l = e.contents,
			c = e.dataTypes,
			u = e.responseFields;
		for (r in u) r in n && (i[u[r]] = n[r]);
		for (;
			"*" === c[0];) {
			c.shift();
			s === t && (s = e.mimeType || i.getResponseHeader("content-type"))
		}
		if (s)
			for (r in l)
				if (l[r] && l[r].test(s)) {
					c.unshift(r);
					break
				}
		if (c[0] in n) a = c[0];
		else {
			for (r in n) {
				if (!c[0] || e.converters[r + " " + c[0]]) {
					a = r;
					break
				}
				o || (o = r)
			}
			a = a || o
		} if (a) {
			a !== c[0] && c.unshift(a);
			return n[a]
		}
	}

	function E(e, t) {
		var i, n, s, r, a = e.dataTypes.slice(),
			o = a[0],
			l = {},
			c = 0;
		e.dataFilter && (t = e.dataFilter(t, e.dataType));
		if (a[1])
			for (i in e.converters) l[i.toLowerCase()] = e.converters[i];
		for (; s = a[++c];)
			if ("*" !== s) {
				if ("*" !== o && o !== s) {
					i = l[o + " " + s] || l["* " + s];
					if (!i)
						for (n in l) {
							r = n.split(" ");
							if (r[1] === s) {
								i = l[o + " " + r[0]] || l["* " + r[0]];
								if (i) {
									if (i === !0) i = l[n];
									else if (l[n] !== !0) {
										s = r[0];
										a.splice(c--, 0, s)
									}
									break
								}
							}
						}
					if (i !== !0)
						if (i && e["throws"]) t = i(t);
						else try {
							t = i(t)
						} catch (u) {
							return {
								state: "parsererror",
								error: i ? u : "No conversion from " + o + " to " + s
							}
						}
				}
				o = s
			}
		return {
			state: "success",
			data: t
		}
	}

	function A() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function P() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function L() {
		setTimeout(function () {
			Ji = t
		}, 0);
		return Ji = Q.now()
	}

	function $(e, t) {
		Q.each(t, function (t, i) {
			for (var n = (Zi[t] || []).concat(Zi["*"]), s = 0, r = n.length; r > s; s++)
				if (n[s].call(e, t, i)) return
		})
	}

	function j(e, t, i) {
		var n, s = 0,
			r = Qi.length,
			a = Q.Deferred().always(function () {
				delete o.elem
			}),
			o = function () {
				for (var t = Ji || L(), i = Math.max(0, l.startTime + l.duration - t), n = 1 - (i / l.duration || 0), s = 0, r = l.tweens.length; r > s; s++) l.tweens[s].run(n);
				a.notifyWith(e, [l, n, i]);
				if (1 > n && r) return i;
				a.resolveWith(e, [l]);
				return !1
			},
			l = a.promise({
				elem: e,
				props: Q.extend({}, t),
				opts: Q.extend(!0, {
					specialEasing: {}
				}, i),
				originalProperties: t,
				originalOptions: i,
				startTime: Ji || L(),
				duration: i.duration,
				tweens: [],
				createTween: function (t, i) {
					var n = Q.Tween(e, l.opts, t, i, l.opts.specialEasing[t] || l.opts.easing);
					l.tweens.push(n);
					return n
				},
				stop: function (t) {
					for (var i = 0, n = t ? l.tweens.length : 0; n > i; i++) l.tweens[i].run(1);
					t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]);
					return this
				}
			}),
			c = l.props;
		D(c, l.opts.specialEasing);
		for (; r > s; s++) {
			n = Qi[s].call(l, e, c, l.opts);
			if (n) return n
		}
		$(l, c);
		Q.isFunction(l.opts.start) && l.opts.start.call(e, l);
		Q.fx.timer(Q.extend(o, {
			anim: l,
			queue: l.opts.queue,
			elem: e
		}));
		return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function D(e, t) {
		var i, n, s, r, a;
		for (i in e) {
			n = Q.camelCase(i);
			s = t[n];
			r = e[i];
			if (Q.isArray(r)) {
				s = r[1];
				r = e[i] = r[0]
			}
			if (i !== n) {
				e[n] = r;
				delete e[i]
			}
			a = Q.cssHooks[n];
			if (a && "expand" in a) {
				r = a.expand(r);
				delete e[n];
				for (i in r)
					if (!(i in e)) {
						e[i] = r[i];
						t[i] = s
					}
			} else t[n] = s
		}
	}

	function N(e, t, i) {
		var n, s, r, a, o, l, c, u, d = this,
			h = e.style,
			p = {},
			f = [],
			v = e.nodeType && m(e);
		if (!i.queue) {
			c = Q._queueHooks(e, "fx");
			if (null == c.unqueued) {
				c.unqueued = 0;
				u = c.empty.fire;
				c.empty.fire = function () {
					c.unqueued || u()
				}
			}
			c.unqueued++;
			d.always(function () {
				d.always(function () {
					c.unqueued--;
					Q.queue(e, "fx").length || c.empty.fire()
				})
			})
		}
		if (1 === e.nodeType && ("height" in t || "width" in t)) {
			i.overflow = [h.overflow, h.overflowX, h.overflowY];
			"inline" === Q.css(e, "display") && "none" === Q.css(e, "float") && (Q.support.inlineBlockNeedsLayout && "inline" !== x(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")
		}
		if (i.overflow) {
			h.overflow = "hidden";
			Q.support.shrinkWrapBlocks || d.done(function () {
				h.overflow = i.overflow[0];
				h.overflowX = i.overflow[1];
				h.overflowY = i.overflow[2]
			})
		}
		for (n in t) {
			r = t[n];
			if (Yi.exec(r)) {
				delete t[n];
				if (r === (v ? "hide" : "show")) continue;
				f.push(n)
			}
		}
		a = f.length;
		if (a) {
			o = Q._data(e, "fxshow") || Q._data(e, "fxshow", {});
			v ? Q(e).show() : d.done(function () {
				Q(e).hide()
			});
			d.done(function () {
				var t;
				Q.removeData(e, "fxshow", !0);
				for (t in p) Q.style(e, t, p[t])
			});
			for (n = 0; a > n; n++) {
				s = f[n];
				l = d.createTween(s, v ? o[s] : 0);
				p[s] = o[s] || Q.style(e, s);
				if (!(s in o)) {
					o[s] = l.start;
					if (v) {
						l.end = l.start;
						l.start = "width" === s || "height" === s ? 1 : 0
					}
				}
			}
		}
	}

	function O(e, t, i, n, s) {
		return new O.prototype.init(e, t, i, n, s)
	}

	function M(e, t) {
		var i, n = {
				height: e
			},
			s = 0;
		t = t ? 1 : 0;
		for (; 4 > s; s += 2 - t) {
			i = yi[s];
			n["margin" + i] = n["padding" + i] = e
		}
		t && (n.opacity = n.width = e);
		return n
	}

	function F(e) {
		return Q.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var H, R, B = e.document,
		V = e.location,
		q = e.navigator,
		z = e.jQuery,
		U = e.$,
		W = Array.prototype.push,
		J = Array.prototype.slice,
		X = Array.prototype.indexOf,
		Y = Object.prototype.toString,
		G = Object.prototype.hasOwnProperty,
		K = String.prototype.trim,
		Q = function (e, t) {
			return new Q.fn.init(e, t, H)
		},
		Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		et = /\S/,
		tt = /\s+/,
		it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		rt = /^[\],:{}\s]*$/,
		at = /(?:^|:|,)(?:\s*\[)+/g,
		ot = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		ct = /^-ms-/,
		ut = /-([\da-z])/gi,
		dt = function (e, t) {
			return (t + "").toUpperCase()
		},
		ht = function () {
			if (B.addEventListener) {
				B.removeEventListener("DOMContentLoaded", ht, !1);
				Q.ready()
			} else if ("complete" === B.readyState) {
				B.detachEvent("onreadystatechange", ht);
				Q.ready()
			}
		},
		pt = {};
	Q.fn = Q.prototype = {
		constructor: Q,
		init: function (e, i, n) {
			var s, r, a;
			if (!e) return this;
			if (e.nodeType) {
				this.context = this[0] = e;
				this.length = 1;
				return this
			}
			if ("string" == typeof e) {
				s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : nt.exec(e);
				if (!s || !s[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
				if (s[1]) {
					i = i instanceof Q ? i[0] : i;
					a = i && i.nodeType ? i.ownerDocument || i : B;
					e = Q.parseHTML(s[1], a, !0);
					st.test(s[1]) && Q.isPlainObject(i) && this.attr.call(e, i, !0);
					return Q.merge(this, e)
				}
				r = B.getElementById(s[2]);
				if (r && r.parentNode) {
					if (r.id !== s[2]) return n.find(e);
					this.length = 1;
					this[0] = r
				}
				this.context = B;
				this.selector = e;
				return this
			}
			if (Q.isFunction(e)) return n.ready(e);
			if (e.selector !== t) {
				this.selector = e.selector;
				this.context = e.context
			}
			return Q.makeArray(e, this)
		},
		selector: "",
		jquery: "1.8.1",
		length: 0,
		size: function () {
			return this.length
		},
		toArray: function () {
			return J.call(this)
		},
		get: function (e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function (e, t, i) {
			var n = Q.merge(this.constructor(), e);
			n.prevObject = this;
			n.context = this.context;
			"find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")");
			return n
		},
		each: function (e, t) {
			return Q.each(this, e, t)
		},
		ready: function (e) {
			Q.ready.promise().done(e);
			return this
		},
		eq: function (e) {
			e = +e;
			return -1 === e ? this.slice(e) : this.slice(e, e + 1)
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		slice: function () {
			return this.pushStack(J.apply(this, arguments), "slice", J.call(arguments).join(","))
		},
		map: function (e) {
			return this.pushStack(Q.map(this, function (t, i) {
				return e.call(t, i, t)
			}))
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: W,
		sort: [].sort,
		splice: [].splice
	};
	Q.fn.init.prototype = Q.fn;
	Q.extend = Q.fn.extend = function () {
		var e, i, n, s, r, a, o = arguments[0] || {},
			l = 1,
			c = arguments.length,
			u = !1;
		if ("boolean" == typeof o) {
			u = o;
			o = arguments[1] || {};
			l = 2
		}
		"object" == typeof o || Q.isFunction(o) || (o = {});
		if (c === l) {
			o = this;
			--l
		}
		for (; c > l; l++)
			if (null != (e = arguments[l]))
				for (i in e) {
					n = o[i];
					s = e[i];
					if (o !== s)
						if (u && s && (Q.isPlainObject(s) || (r = Q.isArray(s)))) {
							if (r) {
								r = !1;
								a = n && Q.isArray(n) ? n : []
							} else a = n && Q.isPlainObject(n) ? n : {};
							o[i] = Q.extend(u, a, s)
						} else s !== t && (o[i] = s)
				}
		return o
	};
	Q.extend({
		noConflict: function (t) {
			e.$ === Q && (e.$ = U);
			t && e.jQuery === Q && (e.jQuery = z);
			return Q
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? Q.readyWait++ : Q.ready(!0)
		},
		ready: function (e) {
			if (e === !0 ? !--Q.readyWait : !Q.isReady) {
				if (!B.body) return setTimeout(Q.ready, 1);
				Q.isReady = !0;
				if (!(e !== !0 && --Q.readyWait > 0)) {
					R.resolveWith(B, [Q]);
					Q.fn.trigger && Q(B).trigger("ready").off("ready")
				}
			}
		},
		isFunction: function (e) {
			return "function" === Q.type(e)
		},
		isArray: Array.isArray || function (e) {
			return "array" === Q.type(e)
		},
		isWindow: function (e) {
			return null != e && e == e.window
		},
		isNumeric: function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function (e) {
			return null == e ? String(e) : pt[Y.call(e)] || "object"
		},
		isPlainObject: function (e) {
			if (!e || "object" !== Q.type(e) || e.nodeType || Q.isWindow(e)) return !1;
			try {
				if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (i) {
				return !1
			}
			var n;
			for (n in e);
			return n === t || G.call(e, n)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function (e) {
			throw new Error(e)
		},
		parseHTML: function (e, t, i) {
			var n;
			if (!e || "string" != typeof e) return null;
			if ("boolean" == typeof t) {
				i = t;
				t = 0
			}
			t = t || B;
			if (n = st.exec(e)) return [t.createElement(n[1])];
			n = Q.buildFragment([e], t, i ? null : []);
			return Q.merge([], (n.cacheable ? Q.clone(n.fragment) : n.fragment).childNodes)
		},
		parseJSON: function (t) {
			if (!t || "string" != typeof t) return null;
			t = Q.trim(t);
			if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
			if (rt.test(t.replace(ot, "@").replace(lt, "]").replace(at, ""))) return new Function("return " + t)();
			Q.error("Invalid JSON: " + t);
			return void 0
		},
		parseXML: function (i) {
			var n, s;
			if (!i || "string" != typeof i) return null;
			try {
				if (e.DOMParser) {
					s = new DOMParser;
					n = s.parseFromString(i, "text/xml")
				} else {
					n = new ActiveXObject("Microsoft.XMLDOM");
					n.async = "false";
					n.loadXML(i)
				}
			} catch (r) {
				n = t
			}
			n && n.documentElement && !n.getElementsByTagName("parsererror").length || Q.error("Invalid XML: " + i);
			return n
		},
		noop: function () {},
		globalEval: function (t) {
			t && et.test(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function (e) {
			return e.replace(ct, "ms-").replace(ut, dt)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
		},
		each: function (e, i, n) {
			var s, r = 0,
				a = e.length,
				o = a === t || Q.isFunction(e);
			if (n)
				if (o) {
					for (s in e)
						if (i.apply(e[s], n) === !1) break
				} else
					for (; a > r && i.apply(e[r++], n) !== !1;);
			else if (o) {
				for (s in e)
					if (i.call(e[s], s, e[s]) === !1) break
			} else
				for (; a > r && i.call(e[r], r, e[r++]) !== !1;);
			return e
		},
		trim: K && !K.call("﻿ ") ? function (e) {
			return null == e ? "" : K.call(e)
		} : function (e) {
			return null == e ? "" : e.toString().replace(it, "")
		},
		makeArray: function (e, t) {
			var i, n = t || [];
			if (null != e) {
				i = Q.type(e);
				null == e.length || "string" === i || "function" === i || "regexp" === i || Q.isWindow(e) ? W.call(n, e) : Q.merge(n, e)
			}
			return n
		},
		inArray: function (e, t, i) {
			var n;
			if (t) {
				if (X) return X.call(t, e, i);
				n = t.length;
				i = i ? 0 > i ? Math.max(0, n + i) : i : 0;
				for (; n > i; i++)
					if (i in t && t[i] === e) return i
			}
			return -1
		},
		merge: function (e, i) {
			var n = i.length,
				s = e.length,
				r = 0;
			if ("number" == typeof n)
				for (; n > r; r++) e[s++] = i[r];
			else
				for (; i[r] !== t;) e[s++] = i[r++];
			e.length = s;
			return e
		},
		grep: function (e, t, i) {
			var n, s = [],
				r = 0,
				a = e.length;
			i = !!i;
			for (; a > r; r++) {
				n = !!t(e[r], r);
				i !== n && s.push(e[r])
			}
			return s
		},
		map: function (e, i, n) {
			var s, r, a = [],
				o = 0,
				l = e.length,
				c = e instanceof Q || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || Q.isArray(e));
			if (c)
				for (; l > o; o++) {
					s = i(e[o], o, n);
					null != s && (a[a.length] = s)
				} else
					for (r in e) {
						s = i(e[r], r, n);
						null != s && (a[a.length] = s)
					}
			return a.concat.apply([], a)
		},
		guid: 1,
		proxy: function (e, i) {
			var n, s, r;
			if ("string" == typeof i) {
				n = e[i];
				i = e;
				e = n
			}
			if (!Q.isFunction(e)) return t;
			s = J.call(arguments, 2);
			r = function () {
				return e.apply(i, s.concat(J.call(arguments)))
			};
			r.guid = e.guid = e.guid || r.guid || Q.guid++;
			return r
		},
		access: function (e, i, n, s, r, a, o) {
			var l, c = null == n,
				u = 0,
				d = e.length;
			if (n && "object" == typeof n) {
				for (u in n) Q.access(e, i, u, n[u], 1, a, s);
				r = 1
			} else if (s !== t) {
				l = o === t && Q.isFunction(s);
				if (c)
					if (l) {
						l = i;
						i = function (e, t, i) {
							return l.call(Q(e), i)
						}
					} else {
						i.call(e, s);
						i = null
					}
				if (i)
					for (; d > u; u++) i(e[u], n, l ? s.call(e[u], u, i(e[u], n)) : s, o);
				r = 1
			}
			return r ? e : c ? i.call(e) : d ? i(e[0], n) : a
		},
		now: function () {
			return (new Date).getTime()
		}
	});
	Q.ready.promise = function (t) {
		if (!R) {
			R = Q.Deferred();
			if ("complete" === B.readyState) setTimeout(Q.ready, 1);
			else if (B.addEventListener) {
				B.addEventListener("DOMContentLoaded", ht, !1);
				e.addEventListener("load", Q.ready, !1)
			} else {
				B.attachEvent("onreadystatechange", ht);
				e.attachEvent("onload", Q.ready);
				var i = !1;
				try {
					i = null == e.frameElement && B.documentElement
				} catch (n) {}
				i && i.doScroll && ! function s() {
					if (!Q.isReady) {
						try {
							i.doScroll("left")
						} catch (e) {
							return setTimeout(s, 50)
						}
						Q.ready()
					}
				}()
			}
		}
		return R.promise(t)
	};
	Q.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
		pt["[object " + t + "]"] = t.toLowerCase()
	});
	H = Q(B);
	var ft = {};
	Q.Callbacks = function (e) {
		e = "string" == typeof e ? ft[e] || i(e) : Q.extend({}, e);
		var n, s, r, a, o, l, c = [],
			u = !e.once && [],
			d = function (t) {
				n = e.memory && t;
				s = !0;
				l = a || 0;
				a = 0;
				o = c.length;
				r = !0;
				for (; c && o > l; l++)
					if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				r = !1;
				c && (u ? u.length && d(u.shift()) : n ? c = [] : h.disable())
			},
			h = {
				add: function () {
					if (c) {
						var t = c.length;
						! function i(t) {
							Q.each(t, function (t, n) {
								var s = Q.type(n);
								"function" !== s || e.unique && h.has(n) ? n && n.length && "string" !== s && i(n) : c.push(n)
							})
						}(arguments);
						if (r) o = c.length;
						else if (n) {
							a = t;
							d(n)
						}
					}
					return this
				},
				remove: function () {
					c && Q.each(arguments, function (e, t) {
						for (var i;
							(i = Q.inArray(t, c, i)) > -1;) {
							c.splice(i, 1);
							if (r) {
								o >= i && o--;
								l >= i && l--
							}
						}
					});
					return this
				},
				has: function (e) {
					return Q.inArray(e, c) > -1
				},
				empty: function () {
					c = [];
					return this
				},
				disable: function () {
					c = u = n = t;
					return this
				},
				disabled: function () {
					return !c
				},
				lock: function () {
					u = t;
					n || h.disable();
					return this
				},
				locked: function () {
					return !u
				},
				fireWith: function (e, t) {
					t = t || [];
					t = [e, t.slice ? t.slice() : t];
					!c || s && !u || (r ? u.push(t) : d(t));
					return this
				},
				fire: function () {
					h.fireWith(this, arguments);
					return this
				},
				fired: function () {
					return !!s
				}
			};
		return h
	};
	Q.extend({
		Deferred: function (e) {
			var t = [
					["resolve", "done", Q.Callbacks("once memory"), "resolved"],
					["reject", "fail", Q.Callbacks("once memory"), "rejected"],
					["notify", "progress", Q.Callbacks("memory")]
				],
				i = "pending",
				n = {
					state: function () {
						return i
					},
					always: function () {
						s.done(arguments).fail(arguments);
						return this
					},
					then: function () {
						var e = arguments;
						return Q.Deferred(function (i) {
							Q.each(t, function (t, n) {
								var r = n[0],
									a = e[t];
								s[n[1]](Q.isFunction(a) ? function () {
									var e = a.apply(this, arguments);
									e && Q.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r + "With"](this === s ? i : this, [e])
								} : i[r])
							});
							e = null
						}).promise()
					},
					promise: function (e) {
						return "object" == typeof e ? Q.extend(e, n) : n
					}
				},
				s = {};
			n.pipe = n.then;
			Q.each(t, function (e, r) {
				var a = r[2],
					o = r[3];
				n[r[1]] = a.add;
				o && a.add(function () {
					i = o
				}, t[1 ^ e][2].disable, t[2][2].lock);
				s[r[0]] = a.fire;
				s[r[0] + "With"] = a.fireWith
			});
			n.promise(s);
			e && e.call(s, s);
			return s
		},
		when: function (e) {
			var t, i, n, s = 0,
				r = J.call(arguments),
				a = r.length,
				o = 1 !== a || e && Q.isFunction(e.promise) ? a : 0,
				l = 1 === o ? e : Q.Deferred(),
				c = function (e, i, n) {
					return function (s) {
						i[e] = this;
						n[e] = arguments.length > 1 ? J.call(arguments) : s;
						n === t ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
					}
				};
			if (a > 1) {
				t = new Array(a);
				i = new Array(a);
				n = new Array(a);
				for (; a > s; s++) r[s] && Q.isFunction(r[s].promise) ? r[s].promise().done(c(s, n, r)).fail(l.reject).progress(c(s, i, t)) : --o
			}
			o || l.resolveWith(n, r);
			return l.promise()
		}
	});
	Q.support = function () {
		var t, i, n, s, r, a, o, l, c, u, d, h = B.createElement("div");
		h.setAttribute("className", "t");
		h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		i = h.getElementsByTagName("*");
		n = h.getElementsByTagName("a")[0];
		n.style.cssText = "top:1px;float:left;opacity:.5";
		if (!i || !i.length || !n) return {};
		s = B.createElement("select");
		r = s.appendChild(B.createElement("option"));
		a = h.getElementsByTagName("input")[0];
		t = {
			leadingWhitespace: 3 === h.firstChild.nodeType,
			tbody: !h.getElementsByTagName("tbody").length,
			htmlSerialize: !!h.getElementsByTagName("link").length,
			style: /top/.test(n.getAttribute("style")),
			hrefNormalized: "/a" === n.getAttribute("href"),
			opacity: /^0.5/.test(n.style.opacity),
			cssFloat: !!n.style.cssFloat,
			checkOn: "on" === a.value,
			optSelected: r.selected,
			getSetAttribute: "t" !== h.className,
			enctype: !!B.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === B.compatMode,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		};
		a.checked = !0;
		t.noCloneChecked = a.cloneNode(!0).checked;
		s.disabled = !0;
		t.optDisabled = !r.disabled;
		try {
			delete h.test
		} catch (p) {
			t.deleteExpando = !1
		}
		if (!h.addEventListener && h.attachEvent && h.fireEvent) {
			h.attachEvent("onclick", d = function () {
				t.noCloneEvent = !1
			});
			h.cloneNode(!0).fireEvent("onclick");
			h.detachEvent("onclick", d)
		}
		a = B.createElement("input");
		a.value = "t";
		a.setAttribute("type", "radio");
		t.radioValue = "t" === a.value;
		a.setAttribute("checked", "checked");
		a.setAttribute("name", "t");
		h.appendChild(a);
		o = B.createDocumentFragment();
		o.appendChild(h.lastChild);
		t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked;
		t.appendChecked = a.checked;
		o.removeChild(a);
		o.appendChild(h);
		if (h.attachEvent)
			for (c in {
				submit: !0,
				change: !0,
				focusin: !0
			}) {
				l = "on" + c;
				u = l in h;
				if (!u) {
					h.setAttribute(l, "return;");
					u = "function" == typeof h[l]
				}
				t[c + "Bubbles"] = u
			}
		Q(function () {
			var i, n, s, r, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
				o = B.getElementsByTagName("body")[0];
			if (o) {
				i = B.createElement("div");
				i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
				o.insertBefore(i, o.firstChild);
				n = B.createElement("div");
				i.appendChild(n);
				n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				s = n.getElementsByTagName("td");
				s[0].style.cssText = "padding:0;margin:0;border:0;display:none";
				u = 0 === s[0].offsetHeight;
				s[0].style.display = "";
				s[1].style.display = "none";
				t.reliableHiddenOffsets = u && 0 === s[0].offsetHeight;
				n.innerHTML = "";
				n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
				t.boxSizing = 4 === n.offsetWidth;
				t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop;
				if (e.getComputedStyle) {
					t.pixelPosition = "1%" !== (e.getComputedStyle(n, null) || {}).top;
					t.boxSizingReliable = "4px" === (e.getComputedStyle(n, null) || {
						width: "4px"
					}).width;
					r = B.createElement("div");
					r.style.cssText = n.style.cssText = a;
					r.style.marginRight = r.style.width = "0";
					n.style.width = "1px";
					n.appendChild(r);
					t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)
				}
				if ("undefined" != typeof n.style.zoom) {
					n.innerHTML = "";
					n.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1";
					t.inlineBlockNeedsLayout = 3 === n.offsetWidth;
					n.style.display = "block";
					n.style.overflow = "visible";
					n.innerHTML = "<div></div>";
					n.firstChild.style.width = "5px";
					t.shrinkWrapBlocks = 3 !== n.offsetWidth;
					i.style.zoom = 1
				}
				o.removeChild(i);
				i = n = s = r = null
			}
		});
		o.removeChild(h);
		i = n = s = r = a = o = h = null;
		return t
	}();
	var vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		yt = /([A-Z])/g;
	Q.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + (Q.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function (e) {
			e = e.nodeType ? Q.cache[e[Q.expando]] : e[Q.expando];
			return !!e && !s(e)
		},
		data: function (e, i, n, s) {
			if (Q.acceptData(e)) {
				var r, a, o = Q.expando,
					l = "string" == typeof i,
					c = e.nodeType,
					u = c ? Q.cache : e,
					d = c ? e[o] : e[o] && o;
				if (d && u[d] && (s || u[d].data) || !l || n !== t) {
					d || (c ? e[o] = d = Q.deletedIds.pop() || ++Q.uuid : d = o);
					if (!u[d]) {
						u[d] = {};
						c || (u[d].toJSON = Q.noop)
					}("object" == typeof i || "function" == typeof i) && (s ? u[d] = Q.extend(u[d], i) : u[d].data = Q.extend(u[d].data, i));
					r = u[d];
					if (!s) {
						r.data || (r.data = {});
						r = r.data
					}
					n !== t && (r[Q.camelCase(i)] = n);
					if (l) {
						a = r[i];
						null == a && (a = r[Q.camelCase(i)])
					} else a = r;
					return a
				}
			}
		},
		removeData: function (e, t, i) {
			if (Q.acceptData(e)) {
				var n, r, a, o = e.nodeType,
					l = o ? Q.cache : e,
					c = o ? e[Q.expando] : Q.expando;
				if (l[c]) {
					if (t) {
						n = i ? l[c] : l[c].data;
						if (n) {
							if (!Q.isArray(t))
								if (t in n) t = [t];
								else {
									t = Q.camelCase(t);
									t = t in n ? [t] : t.split(" ")
								}
							for (r = 0, a = t.length; a > r; r++) delete n[t[r]];
							if (!(i ? s : Q.isEmptyObject)(n)) return
						}
					}
					if (!i) {
						delete l[c].data;
						if (!s(l[c])) return
					}
					o ? Q.cleanData([e], !0) : Q.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null
				}
			}
		},
		_data: function (e, t, i) {
			return Q.data(e, t, i, !0)
		},
		acceptData: function (e) {
			var t = e.nodeName && Q.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	});
	Q.fn.extend({
		data: function (e, i) {
			var s, r, a, o, l, c = this[0],
				u = 0,
				d = null;
			if (e === t) {
				if (this.length) {
					d = Q.data(c);
					if (1 === c.nodeType && !Q._data(c, "parsedAttrs")) {
						a = c.attributes;
						for (l = a.length; l > u; u++) {
							o = a[u].name;
							if (0 === o.indexOf("data-")) {
								o = Q.camelCase(o.substring(5));
								n(c, o, d[o])
							}
						}
						Q._data(c, "parsedAttrs", !0)
					}
				}
				return d
			}
			if ("object" == typeof e) return this.each(function () {
				Q.data(this, e)
			});
			s = e.split(".", 2);
			s[1] = s[1] ? "." + s[1] : "";
			r = s[1] + "!";
			return Q.access(this, function (i) {
				if (i === t) {
					d = this.triggerHandler("getData" + r, [s[0]]);
					if (d === t && c) {
						d = Q.data(c, e);
						d = n(c, e, d)
					}
					return d === t && s[1] ? this.data(s[0]) : d
				}
				s[1] = i;
				this.each(function () {
					var t = Q(this);
					t.triggerHandler("setData" + r, s);
					Q.data(this, e, i);
					t.triggerHandler("changeData" + r, s)
				})
			}, null, i, arguments.length > 1, null, !1)
		},
		removeData: function (e) {
			return this.each(function () {
				Q.removeData(this, e)
			})
		}
	});
	Q.extend({
		queue: function (e, t, i) {
			var n;
			if (e) {
				t = (t || "fx") + "queue";
				n = Q._data(e, t);
				i && (!n || Q.isArray(i) ? n = Q._data(e, t, Q.makeArray(i)) : n.push(i));
				return n || []
			}
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var i = Q.queue(e, t),
				n = i.length,
				s = i.shift(),
				r = Q._queueHooks(e, t),
				a = function () {
					Q.dequeue(e, t)
				};
			if ("inprogress" === s) {
				s = i.shift();
				n--
			}
			if (s) {
				"fx" === t && i.unshift("inprogress");
				delete r.stop;
				s.call(e, a, r)
			}!n && r && r.empty.fire()
		},
		_queueHooks: function (e, t) {
			var i = t + "queueHooks";
			return Q._data(e, i) || Q._data(e, i, {
				empty: Q.Callbacks("once memory").add(function () {
					Q.removeData(e, t + "queue", !0);
					Q.removeData(e, i, !0)
				})
			})
		}
	});
	Q.fn.extend({
		queue: function (e, i) {
			var n = 2;
			if ("string" != typeof e) {
				i = e;
				e = "fx";
				n--
			}
			return arguments.length < n ? Q.queue(this[0], e) : i === t ? this : this.each(function () {
				var t = Q.queue(this, e, i);
				Q._queueHooks(this, e);
				"fx" === e && "inprogress" !== t[0] && Q.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				Q.dequeue(this, e)
			})
		},
		delay: function (e, t) {
			e = Q.fx ? Q.fx.speeds[e] || e : e;
			t = t || "fx";
			return this.queue(t, function (t, i) {
				var n = setTimeout(t, e);
				i.stop = function () {
					clearTimeout(n)
				}
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, i) {
			var n, s = 1,
				r = Q.Deferred(),
				a = this,
				o = this.length,
				l = function () {
					--s || r.resolveWith(a, [a])
				};
			if ("string" != typeof e) {
				i = e;
				e = t
			}
			e = e || "fx";
			for (; o--;) {
				n = Q._data(a[o], e + "queueHooks");
				if (n && n.empty) {
					s++;
					n.empty.add(l)
				}
			}
			l();
			return r.promise(i)
		}
	});
	var mt, gt, _t, bt = /[\t\r\n]/g,
		wt = /\r/g,
		xt = /^(?:button|input)$/i,
		Ct = /^(?:button|input|object|select|textarea)$/i,
		St = /^a(?:rea|)$/i,
		kt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		It = Q.support.getSetAttribute;
	Q.fn.extend({
		attr: function (e, t) {
			return Q.access(this, Q.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				Q.removeAttr(this, e)
			})
		},
		prop: function (e, t) {
			return Q.access(this, Q.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			e = Q.propFix[e] || e;
			return this.each(function () {
				try {
					this[e] = t;
					delete this[e]
				} catch (i) {}
			})
		},
		addClass: function (e) {
			var t, i, n, s, r, a, o;
			if (Q.isFunction(e)) return this.each(function (t) {
				Q(this).addClass(e.call(this, t, this.className))
			});
			if (e && "string" == typeof e) {
				t = e.split(tt);
				for (i = 0, n = this.length; n > i; i++) {
					s = this[i];
					if (1 === s.nodeType)
						if (s.className || 1 !== t.length) {
							r = " " + s.className + " ";
							for (a = 0, o = t.length; o > a; a++)~ r.indexOf(" " + t[a] + " ") || (r += t[a] + " ");
							s.className = Q.trim(r)
						} else s.className = e
				}
			}
			return this
		},
		removeClass: function (e) {
			var i, n, s, r, a, o, l;
			if (Q.isFunction(e)) return this.each(function (t) {
				Q(this).removeClass(e.call(this, t, this.className))
			});
			if (e && "string" == typeof e || e === t) {
				i = (e || "").split(tt);
				for (o = 0, l = this.length; l > o; o++) {
					s = this[o];
					if (1 === s.nodeType && s.className) {
						n = (" " + s.className + " ").replace(bt, " ");
						for (r = 0, a = i.length; a > r; r++)
							for (; n.indexOf(" " + i[r] + " ") > -1;) n = n.replace(" " + i[r] + " ", " ");
						s.className = e ? Q.trim(n) : ""
					}
				}
			}
			return this
		},
		toggleClass: function (e, t) {
			var i = typeof e,
				n = "boolean" == typeof t;
			return Q.isFunction(e) ? this.each(function (i) {
				Q(this).toggleClass(e.call(this, i, this.className, t), t)
			}) : this.each(function () {
				if ("string" === i)
					for (var s, r = 0, a = Q(this), o = t, l = e.split(tt); s = l[r++];) {
						o = n ? o : !a.hasClass(s);
						a[o ? "addClass" : "removeClass"](s)
					} else if ("undefined" === i || "boolean" === i) {
						this.className && Q._data(this, "__className__", this.className);
						this.className = this.className || e === !1 ? "" : Q._data(this, "__className__") || ""
					}
			})
		},
		hasClass: function (e) {
			for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
				if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(bt, " ").indexOf(t) > -1) return !0;
			return !1
		},
		val: function (e) {
			var i, n, s, r = this[0];
			if (arguments.length) {
				s = Q.isFunction(e);
				return this.each(function (n) {
					var r, a = Q(this);
					if (1 === this.nodeType) {
						r = s ? e.call(this, n, a.val()) : e;
						null == r ? r = "" : "number" == typeof r ? r += "" : Q.isArray(r) && (r = Q.map(r, function (e) {
							return null == e ? "" : e + ""
						}));
						i = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()];
						i && "set" in i && i.set(this, r, "value") !== t || (this.value = r)
					}
				})
			}
			if (r) {
				i = Q.valHooks[r.type] || Q.valHooks[r.nodeName.toLowerCase()];
				if (i && "get" in i && (n = i.get(r, "value")) !== t) return n;
				n = r.value;
				return "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n
			}
		}
	});
	Q.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function (e) {
					var t, i, n, s, r = e.selectedIndex,
						a = [],
						o = e.options,
						l = "select-one" === e.type;
					if (0 > r) return null;
					i = l ? r : 0;
					n = l ? r + 1 : o.length;
					for (; n > i; i++) {
						s = o[i];
						if (!(!s.selected || (Q.support.optDisabled ? s.disabled : null !== s.getAttribute("disabled")) || s.parentNode.disabled && Q.nodeName(s.parentNode, "optgroup"))) {
							t = Q(s).val();
							if (l) return t;
							a.push(t)
						}
					}
					return l && !a.length && o.length ? Q(o[r]).val() : a
				},
				set: function (e, t) {
					var i = Q.makeArray(t);
					Q(e).find("option").each(function () {
						this.selected = Q.inArray(Q(this).val(), i) >= 0
					});
					i.length || (e.selectedIndex = -1);
					return i
				}
			}
		},
		attrFn: {},
		attr: function (e, i, n, s) {
			var r, a, o, l = e.nodeType;
			if (e && 3 !== l && 8 !== l && 2 !== l) {
				if (s && Q.isFunction(Q.fn[i])) return Q(e)[i](n);
				if ("undefined" == typeof e.getAttribute) return Q.prop(e, i, n);
				o = 1 !== l || !Q.isXMLDoc(e);
				if (o) {
					i = i.toLowerCase();
					a = Q.attrHooks[i] || (kt.test(i) ? gt : mt)
				}
				if (n !== t) {
					if (null === n) {
						Q.removeAttr(e, i);
						return
					}
					if (a && "set" in a && o && (r = a.set(e, n, i)) !== t) return r;
					e.setAttribute(i, "" + n);
					return n
				}
				if (a && "get" in a && o && null !== (r = a.get(e, i))) return r;
				r = e.getAttribute(i);
				return null === r ? t : r
			}
		},
		removeAttr: function (e, t) {
			var i, n, s, r, a = 0;
			if (t && 1 === e.nodeType) {
				n = t.split(tt);
				for (; a < n.length; a++) {
					s = n[a];
					if (s) {
						i = Q.propFix[s] || s;
						r = kt.test(s);
						r || Q.attr(e, s, "");
						e.removeAttribute(It ? s : i);
						r && i in e && (e[i] = !1)
					}
				}
			}
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (xt.test(e.nodeName) && e.parentNode) Q.error("type property can't be changed");
					else if (!Q.support.radioValue && "radio" === t && Q.nodeName(e, "input")) {
						var i = e.value;
						e.setAttribute("type", t);
						i && (e.value = i);
						return t
					}
				}
			},
			value: {
				get: function (e, t) {
					return mt && Q.nodeName(e, "button") ? mt.get(e, t) : t in e ? e.value : null
				},
				set: function (e, t, i) {
					if (mt && Q.nodeName(e, "button")) return mt.set(e, t, i);
					e.value = t;
					return void 0
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function (e, i, n) {
			var s, r, a, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) {
				a = 1 !== o || !Q.isXMLDoc(e);
				if (a) {
					i = Q.propFix[i] || i;
					r = Q.propHooks[i]
				}
				return n !== t ? r && "set" in r && (s = r.set(e, n, i)) !== t ? s : e[i] = n : r && "get" in r && null !== (s = r.get(e, i)) ? s : e[i]
			}
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var i = e.getAttributeNode("tabindex");
					return i && i.specified ? parseInt(i.value, 10) : Ct.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	});
	gt = {
		get: function (e, i) {
			var n, s = Q.prop(e, i);
			return s === !0 || "boolean" != typeof s && (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
		},
		set: function (e, t, i) {
			var n;
			if (t === !1) Q.removeAttr(e, i);
			else {
				n = Q.propFix[i] || i;
				n in e && (e[n] = !0);
				e.setAttribute(i, i.toLowerCase())
			}
			return i
		}
	};
	if (!It) {
		_t = {
			name: !0,
			id: !0,
			coords: !0
		};
		mt = Q.valHooks.button = {
			get: function (e, i) {
				var n;
				n = e.getAttributeNode(i);
				return n && (_t[i] ? "" !== n.value : n.specified) ? n.value : t
			},
			set: function (e, t, i) {
				var n = e.getAttributeNode(i);
				if (!n) {
					n = B.createAttribute(i);
					e.setAttributeNode(n)
				}
				return n.value = t + ""
			}
		};
		Q.each(["width", "height"], function (e, t) {
			Q.attrHooks[t] = Q.extend(Q.attrHooks[t], {
				set: function (e, i) {
					if ("" === i) {
						e.setAttribute(t, "auto");
						return i
					}
				}
			})
		});
		Q.attrHooks.contenteditable = {
			get: mt.get,
			set: function (e, t, i) {
				"" === t && (t = "false");
				mt.set(e, t, i)
			}
		}
	}
	Q.support.hrefNormalized || Q.each(["href", "src", "width", "height"], function (e, i) {
		Q.attrHooks[i] = Q.extend(Q.attrHooks[i], {
			get: function (e) {
				var n = e.getAttribute(i, 2);
				return null === n ? t : n
			}
		})
	});
	Q.support.style || (Q.attrHooks.style = {
		get: function (e) {
			return e.style.cssText.toLowerCase() || t
		},
		set: function (e, t) {
			return e.style.cssText = "" + t
		}
	});
	Q.support.optSelected || (Q.propHooks.selected = Q.extend(Q.propHooks.selected, {
		get: function (e) {
			var t = e.parentNode;
			if (t) {
				t.selectedIndex;
				t.parentNode && t.parentNode.selectedIndex
			}
			return null
		}
	}));
	Q.support.enctype || (Q.propFix.enctype = "encoding");
	Q.support.checkOn || Q.each(["radio", "checkbox"], function () {
		Q.valHooks[this] = {
			get: function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}
		}
	});
	Q.each(["radio", "checkbox"], function () {
		Q.valHooks[this] = Q.extend(Q.valHooks[this], {
			set: function (e, t) {
				return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) >= 0 : void 0
			}
		})
	});
	var Tt = /^(?:textarea|input|select)$/i,
		Et = /^([^\.]*|)(?:\.(.+)|)$/,
		At = /(?:^|\s)hover(\.\S+|)\b/,
		Pt = /^key/,
		Lt = /^(?:mouse|contextmenu)|click/,
		$t = /^(?:focusinfocus|focusoutblur)$/,
		jt = function (e) {
			return Q.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1")
		};
	Q.event = {
		add: function (e, i, n, s, r) {
			var a, o, l, c, u, d, h, p, f, v, y;
			if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (a = Q._data(e))) {
				if (n.handler) {
					f = n;
					n = f.handler;
					r = f.selector
				}
				n.guid || (n.guid = Q.guid++);
				l = a.events;
				l || (a.events = l = {});
				o = a.handle;
				if (!o) {
					a.handle = o = function (e) {
						return "undefined" == typeof Q || e && Q.event.triggered === e.type ? t : Q.event.dispatch.apply(o.elem, arguments)
					};
					o.elem = e
				}
				i = Q.trim(jt(i)).split(" ");
				for (c = 0; c < i.length; c++) {
					u = Et.exec(i[c]) || [];
					d = u[1];
					h = (u[2] || "").split(".").sort();
					y = Q.event.special[d] || {};
					d = (r ? y.delegateType : y.bindType) || d;
					y = Q.event.special[d] || {};
					p = Q.extend({
						type: d,
						origType: u[1],
						data: s,
						handler: n,
						guid: n.guid,
						selector: r,
						namespace: h.join(".")
					}, f);
					v = l[d];
					if (!v) {
						v = l[d] = [];
						v.delegateCount = 0;
						y.setup && y.setup.call(e, s, h, o) !== !1 || (e.addEventListener ? e.addEventListener(d, o, !1) : e.attachEvent && e.attachEvent("on" + d, o))
					}
					if (y.add) {
						y.add.call(e, p);
						p.handler.guid || (p.handler.guid = n.guid)
					}
					r ? v.splice(v.delegateCount++, 0, p) : v.push(p);
					Q.event.global[d] = !0
				}
				e = null
			}
		},
		global: {},
		remove: function (e, t, i, n, s) {
			var r, a, o, l, c, u, d, h, p, f, v, y = Q.hasData(e) && Q._data(e);
			if (y && (h = y.events)) {
				t = Q.trim(jt(t || "")).split(" ");
				for (r = 0; r < t.length; r++) {
					a = Et.exec(t[r]) || [];
					o = l = a[1];
					c = a[2];
					if (o) {
						p = Q.event.special[o] || {};
						o = (n ? p.delegateType : p.bindType) || o;
						f = h[o] || [];
						u = f.length;
						c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
						for (d = 0; d < f.length; d++) {
							v = f[d];
							if (!(!s && l !== v.origType || i && i.guid !== v.guid || c && !c.test(v.namespace) || n && n !== v.selector && ("**" !== n || !v.selector))) {
								f.splice(d--, 1);
								v.selector && f.delegateCount--;
								p.remove && p.remove.call(e, v)
							}
						}
						if (0 === f.length && u !== f.length) {
							p.teardown && p.teardown.call(e, c, y.handle) !== !1 || Q.removeEvent(e, o, y.handle);
							delete h[o]
						}
					} else
						for (o in h) Q.event.remove(e, o + t[r], i, n, !0)
				}
				if (Q.isEmptyObject(h)) {
					delete y.handle;
					Q.removeData(e, "events", !0)
				}
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function (i, n, s, r) {
			if (!s || 3 !== s.nodeType && 8 !== s.nodeType) {
				var a, o, l, c, u, d, h, p, f, v, y = i.type || i,
					m = [];
				if (!$t.test(y + Q.event.triggered)) {
					if (y.indexOf("!") >= 0) {
						y = y.slice(0, -1);
						o = !0
					}
					if (y.indexOf(".") >= 0) {
						m = y.split(".");
						y = m.shift();
						m.sort()
					}
					if (s && !Q.event.customEvent[y] || Q.event.global[y]) {
						i = "object" == typeof i ? i[Q.expando] ? i : new Q.Event(y, i) : new Q.Event(y);
						i.type = y;
						i.isTrigger = !0;
						i.exclusive = o;
						i.namespace = m.join(".");
						i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
						d = y.indexOf(":") < 0 ? "on" + y : "";
						if (s) {
							i.result = t;
							i.target || (i.target = s);
							n = null != n ? Q.makeArray(n) : [];
							n.unshift(i);
							h = Q.event.special[y] || {};
							if (!h.trigger || h.trigger.apply(s, n) !== !1) {
								f = [
									[s, h.bindType || y]
								];
								if (!r && !h.noBubble && !Q.isWindow(s)) {
									v = h.delegateType || y;
									c = $t.test(v + y) ? s : s.parentNode;
									for (u = s; c; c = c.parentNode) {
										f.push([c, v]);
										u = c
									}
									u === (s.ownerDocument || B) && f.push([u.defaultView || u.parentWindow || e, v])
								}
								for (l = 0; l < f.length && !i.isPropagationStopped(); l++) {
									c = f[l][0];
									i.type = f[l][1];
									p = (Q._data(c, "events") || {})[i.type] && Q._data(c, "handle");
									p && p.apply(c, n);
									p = d && c[d];
									p && Q.acceptData(c) && p.apply(c, n) === !1 && i.preventDefault()
								}
								i.type = y;
								if (!(r || i.isDefaultPrevented() || h._default && h._default.apply(s.ownerDocument, n) !== !1 || "click" === y && Q.nodeName(s, "a") || !Q.acceptData(s) || !d || !s[y] || ("focus" === y || "blur" === y) && 0 === i.target.offsetWidth || Q.isWindow(s))) {
									u = s[d];
									u && (s[d] = null);
									Q.event.triggered = y;
									s[y]();
									Q.event.triggered = t;
									u && (s[d] = u)
								}
								return i.result
							}
						} else {
							a = Q.cache;
							for (l in a) a[l].events && a[l].events[y] && Q.event.trigger(i, n, a[l].handle.elem, !0)
						}
					}
				}
			}
		},
		dispatch: function (i) {
			i = Q.event.fix(i || e.event);
			var n, s, r, a, o, l, c, u, d, h = (Q._data(this, "events") || {})[i.type] || [],
				p = h.delegateCount,
				f = [].slice.call(arguments),
				v = !i.exclusive && !i.namespace,
				y = Q.event.special[i.type] || {},
				m = [];
			f[0] = i;
			i.delegateTarget = this;
			if (!y.preDispatch || y.preDispatch.call(this, i) !== !1) {
				if (p && (!i.button || "click" !== i.type))
					for (r = i.target; r != this; r = r.parentNode || this)
						if (r.disabled !== !0 || "click" !== i.type) {
							o = {};
							c = [];
							for (n = 0; p > n; n++) {
								u = h[n];
								d = u.selector;
								o[d] === t && (o[d] = Q(d, this).index(r) >= 0);
								o[d] && c.push(u)
							}
							c.length && m.push({
								elem: r,
								matches: c
							})
						}
				h.length > p && m.push({
					elem: this,
					matches: h.slice(p)
				});
				for (n = 0; n < m.length && !i.isPropagationStopped(); n++) {
					l = m[n];
					i.currentTarget = l.elem;
					for (s = 0; s < l.matches.length && !i.isImmediatePropagationStopped(); s++) {
						u = l.matches[s];
						if (v || !i.namespace && !u.namespace || i.namespace_re && i.namespace_re.test(u.namespace)) {
							i.data = u.data;
							i.handleObj = u;
							a = ((Q.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, f);
							if (a !== t) {
								i.result = a;
								if (a === !1) {
									i.preventDefault();
									i.stopPropagation()
								}
							}
						}
					}
				}
				y.postDispatch && y.postDispatch.call(this, i);
				return i.result
			}
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode);
				return e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, i) {
				var n, s, r, a = i.button,
					o = i.fromElement;
				if (null == e.pageX && null != i.clientX) {
					n = e.target.ownerDocument || B;
					s = n.documentElement;
					r = n.body;
					e.pageX = i.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0);
					e.pageY = i.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)
				}!e.relatedTarget && o && (e.relatedTarget = o === e.target ? i.toElement : o);
				e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0);
				return e
			}
		},
		fix: function (e) {
			if (e[Q.expando]) return e;
			var t, i, n = e,
				s = Q.event.fixHooks[e.type] || {},
				r = s.props ? this.props.concat(s.props) : this.props;
			e = Q.Event(n);
			for (t = r.length; t;) {
				i = r[--t];
				e[i] = n[i]
			}
			e.target || (e.target = n.srcElement || B);
			3 === e.target.nodeType && (e.target = e.target.parentNode);
			e.metaKey = !!e.metaKey;
			return s.filter ? s.filter(e, n) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function (e, t, i) {
					Q.isWindow(this) && (this.onbeforeunload = i)
				},
				teardown: function (e, t) {
					this.onbeforeunload === t && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function (e, t, i, n) {
			var s = Q.extend(new Q.Event, i, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? Q.event.trigger(s, null, t) : Q.event.dispatch.call(t, s);
			s.isDefaultPrevented() && i.preventDefault()
		}
	};
	Q.event.handle = Q.event.dispatch;
	Q.removeEvent = B.removeEventListener ? function (e, t, i) {
		e.removeEventListener && e.removeEventListener(t, i, !1)
	} : function (e, t, i) {
		var n = "on" + t;
		if (e.detachEvent) {
			"undefined" == typeof e[n] && (e[n] = null);
			e.detachEvent(n, i)
		}
	};
	Q.Event = function (e, t) {
		if (!(this instanceof Q.Event)) return new Q.Event(e, t);
		if (e && e.type) {
			this.originalEvent = e;
			this.type = e.type;
			this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : r
		} else this.type = e;
		t && Q.extend(this, t);
		this.timeStamp = e && e.timeStamp || Q.now();
		this[Q.expando] = !0
	};
	Q.Event.prototype = {
		preventDefault: function () {
			this.isDefaultPrevented = a;
			var e = this.originalEvent;
			e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function () {
			this.isPropagationStopped = a;
			var e = this.originalEvent;
			if (e) {
				e.stopPropagation && e.stopPropagation();
				e.cancelBubble = !0
			}
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = a;
			this.stopPropagation()
		},
		isDefaultPrevented: r,
		isPropagationStopped: r,
		isImmediatePropagationStopped: r
	};
	Q.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (e, t) {
		Q.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var i, n = this,
					s = e.relatedTarget,
					r = e.handleObj;
				r.selector;
				if (!s || s !== n && !Q.contains(n, s)) {
					e.type = r.origType;
					i = r.handler.apply(this, arguments);
					e.type = t
				}
				return i
			}
		}
	});
	Q.support.submitBubbles || (Q.event.special.submit = {
		setup: function () {
			if (Q.nodeName(this, "form")) return !1;
			Q.event.add(this, "click._submit keypress._submit", function (e) {
				var i = e.target,
					n = Q.nodeName(i, "input") || Q.nodeName(i, "button") ? i.form : t;
				if (n && !Q._data(n, "_submit_attached")) {
					Q.event.add(n, "submit._submit", function (e) {
						e._submit_bubble = !0
					});
					Q._data(n, "_submit_attached", !0)
				}
			});
			return void 0
		},
		postDispatch: function (e) {
			if (e._submit_bubble) {
				delete e._submit_bubble;
				this.parentNode && !e.isTrigger && Q.event.simulate("submit", this.parentNode, e, !0)
			}
		},
		teardown: function () {
			if (Q.nodeName(this, "form")) return !1;
			Q.event.remove(this, "._submit");
			return void 0
		}
	});
	Q.support.changeBubbles || (Q.event.special.change = {
		setup: function () {
			if (Tt.test(this.nodeName)) {
				if ("checkbox" === this.type || "radio" === this.type) {
					Q.event.add(this, "propertychange._change", function (e) {
						"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
					});
					Q.event.add(this, "click._change", function (e) {
						this._just_changed && !e.isTrigger && (this._just_changed = !1);
						Q.event.simulate("change", this, e, !0)
					})
				}
				return !1
			}
			Q.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;
				if (Tt.test(t.nodeName) && !Q._data(t, "_change_attached")) {
					Q.event.add(t, "change._change", function (e) {
						!this.parentNode || e.isSimulated || e.isTrigger || Q.event.simulate("change", this.parentNode, e, !0)
					});
					Q._data(t, "_change_attached", !0)
				}
			})
		},
		handle: function (e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			Q.event.remove(this, "._change");
			return !Tt.test(this.nodeName)
		}
	});
	Q.support.focusinBubbles || Q.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var i = 0,
			n = function (e) {
				Q.event.simulate(t, e.target, Q.event.fix(e), !0)
			};
		Q.event.special[t] = {
			setup: function () {
				0 === i++ && B.addEventListener(e, n, !0)
			},
			teardown: function () {
				0 === --i && B.removeEventListener(e, n, !0)
			}
		}
	});
	Q.fn.extend({
		on: function (e, i, n, s, a) {
			var o, l;
			if ("object" == typeof e) {
				if ("string" != typeof i) {
					n = n || i;
					i = t
				}
				for (l in e) this.on(l, i, n, e[l], a);
				return this
			}
			if (null == n && null == s) {
				s = i;
				n = i = t
			} else if (null == s)
				if ("string" == typeof i) {
					s = n;
					n = t
				} else {
					s = n;
					n = i;
					i = t
				}
			if (s === !1) s = r;
			else if (!s) return this;
			if (1 === a) {
				o = s;
				s = function (e) {
					Q().off(e);
					return o.apply(this, arguments)
				};
				s.guid = o.guid || (o.guid = Q.guid++)
			}
			return this.each(function () {
				Q.event.add(this, e, s, n, i)
			})
		},
		one: function (e, t, i, n) {
			return this.on(e, t, i, n, 1)
		},
		off: function (e, i, n) {
			var s, a;
			if (e && e.preventDefault && e.handleObj) {
				s = e.handleObj;
				Q(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler);
				return this
			}
			if ("object" == typeof e) {
				for (a in e) this.off(a, i, e[a]);
				return this
			}
			if (i === !1 || "function" == typeof i) {
				n = i;
				i = t
			}
			n === !1 && (n = r);
			return this.each(function () {
				Q.event.remove(this, e, n, i)
			})
		},
		bind: function (e, t, i) {
			return this.on(e, null, t, i)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		live: function (e, t, i) {
			Q(this.context).on(e, this.selector, t, i);
			return this
		},
		die: function (e, t) {
			Q(this.context).off(e, this.selector || "**", t);
			return this
		},
		delegate: function (e, t, i, n) {
			return this.on(t, e, i, n)
		},
		undelegate: function (e, t, i) {
			return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
		},
		trigger: function (e, t) {
			return this.each(function () {
				Q.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			return this[0] ? Q.event.trigger(e, t, this[0], !0) : void 0
		},
		toggle: function (e) {
			var t = arguments,
				i = e.guid || Q.guid++,
				n = 0,
				s = function (i) {
					var s = (Q._data(this, "lastToggle" + e.guid) || 0) % n;
					Q._data(this, "lastToggle" + e.guid, s + 1);
					i.preventDefault();
					return t[s].apply(this, arguments) || !1
				};
			s.guid = i;
			for (; n < t.length;) t[n++].guid = i;
			return this.click(s)
		},
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	});
	Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		Q.fn[t] = function (e, i) {
			if (null == i) {
				i = e;
				e = null
			}
			return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
		};
		Pt.test(t) && (Q.event.fixHooks[t] = Q.event.keyHooks);
		Lt.test(t) && (Q.event.fixHooks[t] = Q.event.mouseHooks)
	});
	! function (e, t) {
		function i(e, t, i, n) {
			i = i || [];
			t = t || E;
			var s, r, a, o, l = t.nodeType;
			if (1 !== l && 9 !== l) return [];
			if (!e || "string" != typeof e) return i;
			a = b(t);
			if (!a && !n && (s = Y.exec(e)))
				if (o = s[1]) {
					if (9 === l) {
						r = t.getElementById(o);
						if (!r || !r.parentNode) return i;
						if (r.id === o) {
							i.push(r);
							return i
						}
					} else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && w(t, r) && r.id === o) {
						i.push(r);
						return i
					}
				} else {
					if (s[2]) {
						$.apply(i, L.call(t.getElementsByTagName(e), 0));
						return i
					}
					if ((o = s[3]) && ot && t.getElementsByClassName) {
						$.apply(i, L.call(t.getElementsByClassName(o), 0));
						return i
					}
				}
			return f(e, t, i, n, a)
		}

		function n(e) {
			return function (t) {
				var i = t.nodeName.toLowerCase();
				return "input" === i && t.type === e
			}
		}

		function s(e) {
			return function (t) {
				var i = t.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && t.type === e
			}
		}

		function r(e, t, i) {
			if (e === t) return i;
			for (var n = e.nextSibling; n;) {
				if (n === t) return -1;
				n = n.nextSibling
			}
			return 1
		}

		function a(e, t, n, s) {
			var r, a, o, l, c, u, d, h, p, f, v = !n && t !== E,
				y = (v ? "<s>" : "") + e.replace(U, "$1<s>"),
				m = O[T][y];
			if (m) return s ? 0 : L.call(m, 0);
			c = e;
			u = [];
			h = 0;
			p = g.preFilter;
			f = g.filter;
			for (; c;) {
				if (!r || (a = W.exec(c))) {
					if (a) {
						c = c.slice(a[0].length);
						o.selector = d
					}
					u.push(o = []);
					d = "";
					v && (c = " " + c)
				}
				r = !1;
				if (a = J.exec(c)) {
					d += a[0];
					c = c.slice(a[0].length);
					r = o.push({
						part: a.pop().replace(U, " "),
						string: a[0],
						captures: a
					})
				}
				for (l in f)
					if ((a = it[l].exec(c)) && (!p[l] || (a = p[l](a, t, n)))) {
						d += a[0];
						c = c.slice(a[0].length);
						r = o.push({
							part: l,
							string: a.shift(),
							captures: a
						})
					}
				if (!r) break
			}
			d && (o.selector = d);
			return s ? c.length : c ? i.error(e) : L.call(O(y, u), 0)
		}

		function o(e, t, i, n) {
			var s = t.dir,
				r = P++;
			e || (e = function (e) {
				return e === i
			});
			return t.first ? function (t) {
				for (; t = t[s];)
					if (1 === t.nodeType) return e(t) && t
			} : n ? function (t) {
				for (; t = t[s];)
					if (1 === t.nodeType && e(t)) return t
			} : function (t) {
				for (var i, n = r + "." + v, a = n + "." + y; t = t[s];)
					if (1 === t.nodeType) {
						if ((i = t[T]) === a) return t.sizset;
						if ("string" == typeof i && 0 === i.indexOf(n)) {
							if (t.sizset) return t
						} else {
							t[T] = a;
							if (e(t)) {
								t.sizset = !0;
								return t
							}
							t.sizset = !1
						}
					}
			}
		}

		function l(e, t) {
			return e ? function (i) {
				var n = t(i);
				return n && e(n === !0 ? i : n)
			} : t
		}

		function c(e, t, i) {
			for (var n, s, r = 0; n = e[r]; r++) s = g.relative[n.part] ? o(s, g.relative[n.part], t, i) : l(s, g.filter[n.part].apply(null, n.captures.concat(t, i)));
			return s
		}

		function u(e) {
			return function (t) {
				for (var i, n = 0; i = e[n]; n++)
					if (i(t)) return !0;
				return !1
			}
		}

		function d(e, t, n, s) {
			for (var r = 0, a = t.length; a > r; r++) i(e, t[r], n, s)
		}

		function h(e, t, n, s, r, a) {
			var o, l = g.setFilters[t.toLowerCase()];
			l || i.error(t);
			(e || !(o = r)) && d(e || "*", s, o = [], r);
			return o.length > 0 ? l(o, n, a) : []
		}

		function p(e, n, s, r) {
			for (var a, o, l, c, u, p, f, v, y, m, g, _, b, w = 0, x = e.length, C = it.POS, S = new RegExp("^" + C.source + "(?!" + F + ")", "i"), k = function () {
				for (var e = 1, i = arguments.length - 2; i > e; e++) arguments[e] === t && (y[e] = t)
			}; x > w; w++) {
				a = e[w];
				o = "";
				v = r;
				for (l = 0, c = a.length; c > l; l++) {
					u = a[l];
					p = u.string;
					if ("PSEUDO" === u.part) {
						C.exec("");
						f = 0;
						for (; y = C.exec(p);) {
							m = !0;
							g = C.lastIndex = y.index + y[0].length;
							if (g > f) {
								o += p.slice(f, y.index);
								f = g;
								_ = [n];
								if (J.test(o)) {
									v && (_ = v);
									v = r
								}
								if (b = K.test(o)) {
									o = o.slice(0, -5).replace(J, "$&*");
									f++
								}
								y.length > 1 && y[0].replace(S, k);
								v = h(o, y[1], y[2], _, v, b)
							}
							o = ""
						}
					}
					m || (o += p);
					m = !1
				}
				o ? J.test(o) ? d(o, v || [n], s, r) : i(o, n, s, r ? r.concat(v) : v) : $.apply(s, v)
			}
			return 1 === x ? s : i.uniqueSort(s)
		}

		function f(e, t, i, n, s) {
			e = e.replace(U, "$1");
			var r, o, l, c, u, d, h, f, m, _ = a(e, t, s),
				b = t.nodeType;
			if (it.POS.test(e)) return p(_, t, i, n);
			if (n) r = L.call(n, 0);
			else if (1 === _.length) {
				if ((u = L.call(_[0], 0)).length > 2 && "ID" === (d = u[0]).part && 9 === b && !s && g.relative[u[1].part]) {
					t = g.find.ID(d.captures[0].replace(tt, ""), t, s)[0];
					if (!t) return i;
					e = e.slice(u.shift().string.length)
				}
				f = (_ = G.exec(u[0].string)) && !_.index && t.parentNode || t;
				h = "";
				for (c = u.length - 1; c >= 0; c--) {
					d = u[c];
					m = d.part;
					h = d.string + h;
					if (g.relative[m]) break;
					if (g.order.test(m)) {
						r = g.find[m](d.captures[0].replace(tt, ""), f, s);
						if (null == r) continue;
						e = e.slice(0, e.length - h.length) + h.replace(it[m], "");
						e || $.apply(i, L.call(r, 0));
						break
					}
				}
			}
			if (e) {
				o = x(e, t, s);
				v = o.dirruns++;
				null == r && (r = g.find.TAG("*", G.test(e) && t.parentNode || t));
				for (c = 0; l = r[c]; c++) {
					y = o.runs++;
					o(l) && i.push(l)
				}
			}
			return i
		}
		var v, y, m, g, _, b, w, x, C, S, k = !0,
			I = "undefined",
			T = ("sizcache" + Math.random()).replace(".", ""),
			E = e.document,
			A = E.documentElement,
			P = 0,
			L = [].slice,
			$ = [].push,
			j = function (e, t) {
				e[T] = t || !0;
				return e
			},
			D = function () {
				var e = {},
					t = [];
				return j(function (i, n) {
					t.push(i) > g.cacheLength && delete e[t.shift()];
					return e[i] = n
				}, e)
			},
			N = D(),
			O = D(),
			M = D(),
			F = "[\\x20\\t\\r\\n\\f]",
			H = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
			R = H.replace("w", "w#"),
			B = "([*^$|!~]?=)",
			V = "\\[" + F + "*(" + H + ")" + F + "*(?:" + B + F + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + F + "*\\]",
			q = ":(" + H + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + V + ")|[^:]|\\\\.)*|.*))\\)|)",
			z = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
			U = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			W = new RegExp("^" + F + "*," + F + "*"),
			J = new RegExp("^" + F + "*([\\x20\\t\\r\\n\\f>+~])" + F + "*"),
			X = new RegExp(q),
			Y = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
			G = /[\x20\t\r\n\f]*[+~]/,
			K = /:not\($/,
			Z = /h\d/i,
			et = /input|select|textarea|button/i,
			tt = /\\(?!\\)/g,
			it = {
				ID: new RegExp("^#(" + H + ")"),
				CLASS: new RegExp("^\\.(" + H + ")"),
				NAME: new RegExp("^\\[name=['\"]?(" + H + ")['\"]?\\]"),
				TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + V),
				PSEUDO: new RegExp("^" + q),
				CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				POS: new RegExp(z, "ig"),
				needsContext: new RegExp("^" + F + "*[>+~]|" + z, "i")
			},
			nt = function (e) {
				var t = E.createElement("div");
				try {
					return e(t)
				} catch (i) {
					return !1
				} finally {
					t = null
				}
			},
			st = nt(function (e) {
				e.appendChild(E.createComment(""));
				return !e.getElementsByTagName("*").length
			}),
			rt = nt(function (e) {
				e.innerHTML = "<a href='#'></a>";
				return e.firstChild && typeof e.firstChild.getAttribute !== I && "#" === e.firstChild.getAttribute("href")
			}),
			at = nt(function (e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return "boolean" !== t && "string" !== t
			}),
			ot = nt(function (e) {
				e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
				if (!e.getElementsByClassName || !e.getElementsByClassName("e").length) return !1;
				e.lastChild.className = "e";
				return 2 === e.getElementsByClassName("e").length
			}),
			lt = nt(function (e) {
				e.id = T + 0;
				e.innerHTML = "<a name='" + T + "'></a><div name='" + T + "'></div>";
				A.insertBefore(e, A.firstChild);
				var t = E.getElementsByName && E.getElementsByName(T).length === 2 + E.getElementsByName(T + 0).length;
				m = !E.getElementById(T);
				A.removeChild(e);
				return t
			});
		try {
			L.call(A.childNodes, 0)[0].nodeType
		} catch (ct) {
			L = function (e) {
				for (var t, i = []; t = this[e]; e++) i.push(t);
				return i
			}
		}
		i.matches = function (e, t) {
			return i(e, null, null, t)
		};
		i.matchesSelector = function (e, t) {
			return i(t, null, null, [e]).length > 0
		};
		_ = i.getText = function (e) {
			var t, i = "",
				n = 0,
				s = e.nodeType;
			if (s) {
				if (1 === s || 9 === s || 11 === s) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) i += _(e)
				} else if (3 === s || 4 === s) return e.nodeValue
			} else
				for (; t = e[n]; n++) i += _(t);
			return i
		};
		b = i.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		};
		w = i.contains = A.contains ? function (e, t) {
			var i = 9 === e.nodeType ? e.documentElement : e,
				n = t && t.parentNode;
			return e === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
		} : A.compareDocumentPosition ? function (e, t) {
			return t && !!(16 & e.compareDocumentPosition(t))
		} : function (e, t) {
			for (; t = t.parentNode;)
				if (t === e) return !0;
			return !1
		};
		i.attr = function (e, t) {
			var i, n = b(e);
			n || (t = t.toLowerCase());
			if (g.attrHandle[t]) return g.attrHandle[t](e);
			if (at || n) return e.getAttribute(t);
			i = e.getAttributeNode(t);
			return i ? "boolean" == typeof e[t] ? e[t] ? t : null : i.specified ? i.value : null : null
		};
		g = i.selectors = {
			cacheLength: 50,
			createPseudo: j,
			match: it,
			order: new RegExp("ID|TAG" + (lt ? "|NAME" : "") + (ot ? "|CLASS" : "")),
			attrHandle: rt ? {} : {
				href: function (e) {
					return e.getAttribute("href", 2)
				},
				type: function (e) {
					return e.getAttribute("type")
				}
			},
			find: {
				ID: m ? function (e, t, i) {
					if (typeof t.getElementById !== I && !i) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				} : function (e, i, n) {
					if (typeof i.getElementById !== I && !n) {
						var s = i.getElementById(e);
						return s ? s.id === e || typeof s.getAttributeNode !== I && s.getAttributeNode("id").value === e ? [s] : t : []
					}
				},
				TAG: st ? function (e, t) {
					return typeof t.getElementsByTagName !== I ? t.getElementsByTagName(e) : void 0
				} : function (e, t) {
					var i = t.getElementsByTagName(e);
					if ("*" === e) {
						for (var n, s = [], r = 0; n = i[r]; r++) 1 === n.nodeType && s.push(n);
						return s
					}
					return i
				},
				NAME: function (e, t) {
					return typeof t.getElementsByName !== I ? t.getElementsByName(name) : void 0
				},
				CLASS: function (e, t, i) {
					return typeof t.getElementsByClassName === I || i ? void 0 : t.getElementsByClassName(e)
				}
			},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (e) {
					e[1] = e[1].replace(tt, "");
					e[3] = (e[4] || e[5] || "").replace(tt, "");
					"~=" === e[2] && (e[3] = " " + e[3] + " ");
					return e.slice(0, 4)
				},
				CHILD: function (e) {
					e[1] = e[1].toLowerCase();
					if ("nth" === e[1]) {
						e[2] || i.error(e[0]);
						e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2]));
						e[4] = +(e[6] + e[7] || "odd" === e[2])
					} else e[2] && i.error(e[0]);
					return e
				},
				PSEUDO: function (e, t, i) {
					var n, s;
					if (it.CHILD.test(e[0])) return null;
					if (e[3]) e[2] = e[3];
					else if (n = e[4]) {
						if (X.test(n) && (s = a(n, t, i, !0)) && (s = n.indexOf(")", n.length - s) - n.length)) {
							n = n.slice(0, s);
							e[0] = e[0].slice(0, s)
						}
						e[2] = n
					}
					return e.slice(0, 3)
				}
			},
			filter: {
				ID: m ? function (e) {
					e = e.replace(tt, "");
					return function (t) {
						return t.getAttribute("id") === e
					}
				} : function (e) {
					e = e.replace(tt, "");
					return function (t) {
						var i = typeof t.getAttributeNode !== I && t.getAttributeNode("id");
						return i && i.value === e
					}
				},
				TAG: function (e) {
					if ("*" === e) return function () {
						return !0
					};
					e = e.replace(tt, "").toLowerCase();
					return function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function (e) {
					var t = N[T][e];
					t || (t = N(e, new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")));
					return function (e) {
						return t.test(e.className || typeof e.getAttribute !== I && e.getAttribute("class") || "")
					}
				},
				ATTR: function (e, t, n) {
					return t ? function (s) {
						var r = i.attr(s, e),
							a = r + "";
						if (null == r) return "!=" === t;
						switch (t) {
						case "=":
							return a === n;
						case "!=":
							return a !== n;
						case "^=":
							return n && 0 === a.indexOf(n);
						case "*=":
							return n && a.indexOf(n) > -1;
						case "$=":
							return n && a.substr(a.length - n.length) === n;
						case "~=":
							return (" " + a + " ").indexOf(n) > -1;
						case "|=":
							return a === n || a.substr(0, n.length + 1) === n + "-"
						}
					} : function (t) {
						return null != i.attr(t, e)
					}
				},
				CHILD: function (e, t, i, n) {
					if ("nth" === e) {
						var s = P++;
						return function (e) {
							var t, r, a = 0,
								o = e;
							if (1 === i && 0 === n) return !0;
							t = e.parentNode;
							if (t && (t[T] !== s || !e.sizset)) {
								for (o = t.firstChild; o; o = o.nextSibling)
									if (1 === o.nodeType) {
										o.sizset = ++a;
										if (o === e) break
									}
								t[T] = s
							}
							r = e.sizset - n;
							return 0 === i ? 0 === r : 0 === r % i && r / i >= 0
						}
					}
					return function (t) {
						var i = t;
						switch (e) {
						case "only":
						case "first":
							for (; i = i.previousSibling;)
								if (1 === i.nodeType) return !1;
							if ("first" === e) return !0;
							i = t;
						case "last":
							for (; i = i.nextSibling;)
								if (1 === i.nodeType) return !1;
							return !0
						}
					}
				},
				PSEUDO: function (e, t, n, s) {
					var r, a = g.pseudos[e] || g.pseudos[e.toLowerCase()];
					a || i.error("unsupported pseudo: " + e);
					if (!a[T]) {
						if (a.length > 1) {
							r = [e, e, "", t];
							return function (e) {
								return a(e, 0, r)
							}
						}
						return a
					}
					return a(t, n, s)
				}
			},
			pseudos: {
				not: j(function (e, t, i) {
					var n = x(e.replace(U, "$1"), t, i);
					return function (e) {
						return !n(e)
					}
				}),
				enabled: function (e) {
					return e.disabled === !1
				},
				disabled: function (e) {
					return e.disabled === !0
				},
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					e.parentNode && e.parentNode.selectedIndex;
					return e.selected === !0
				},
				parent: function (e) {
					return !g.pseudos.empty(e)
				},
				empty: function (e) {
					var t;
					e = e.firstChild;
					for (; e;) {
						if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
						e = e.nextSibling
					}
					return !0
				},
				contains: j(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
					}
				}),
				has: j(function (e) {
					return function (t) {
						return i(e, t).length > 0
					}
				}),
				header: function (e) {
					return Z.test(e.nodeName)
				},
				text: function (e) {
					var t, i;
					return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (i = e.getAttribute("type")) || i.toLowerCase() === t)
				},
				radio: n("radio"),
				checkbox: n("checkbox"),
				file: n("file"),
				password: n("password"),
				image: n("image"),
				submit: s("submit"),
				reset: s("reset"),
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				input: function (e) {
					return et.test(e.nodeName)
				},
				focus: function (e) {
					var t = e.ownerDocument;
					return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
				},
				active: function (e) {
					return e === e.ownerDocument.activeElement
				}
			},
			setFilters: {
				first: function (e, t, i) {
					return i ? e.slice(1) : [e[0]]
				},
				last: function (e, t, i) {
					var n = e.pop();
					return i ? e : [n]
				},
				even: function (e, t, i) {
					for (var n = [], s = i ? 1 : 0, r = e.length; r > s; s += 2) n.push(e[s]);
					return n
				},
				odd: function (e, t, i) {
					for (var n = [], s = i ? 0 : 1, r = e.length; r > s; s += 2) n.push(e[s]);
					return n
				},
				lt: function (e, t, i) {
					return i ? e.slice(+t) : e.slice(0, +t)
				},
				gt: function (e, t, i) {
					return i ? e.slice(0, +t + 1) : e.slice(+t + 1)
				},
				eq: function (e, t, i) {
					var n = e.splice(+t, 1);
					return i ? e : n
				}
			}
		};
		C = A.compareDocumentPosition ? function (e, t) {
			if (e === t) {
				S = !0;
				return 0
			}
			return (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
		} : function (e, t) {
			if (e === t) {
				S = !0;
				return 0
			}
			if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
			var i, n, s = [],
				a = [],
				o = e.parentNode,
				l = t.parentNode,
				c = o;
			if (o === l) return r(e, t);
			if (!o) return -1;
			if (!l) return 1;
			for (; c;) {
				s.unshift(c);
				c = c.parentNode
			}
			c = l;
			for (; c;) {
				a.unshift(c);
				c = c.parentNode
			}
			i = s.length;
			n = a.length;
			for (var u = 0; i > u && n > u; u++)
				if (s[u] !== a[u]) return r(s[u], a[u]);
			return u === i ? r(e, a[u], -1) : r(s[u], t, 1)
		};
		[0, 0].sort(C);
		k = !S;
		i.uniqueSort = function (e) {
			var t, i = 1;
			S = k;
			e.sort(C);
			if (S)
				for (; t = e[i]; i++) t === e[i - 1] && e.splice(i--, 1);
			return e
		};
		i.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		};
		x = i.compile = function (e, t, i) {
			var n, s, r, o = M[T][e];
			if (o && o.context === t) return o;
			n = a(e, t, i);
			for (s = 0, r = n.length; r > s; s++) n[s] = c(n[s], t, i);
			o = M(e, u(n));
			o.context = t;
			o.runs = o.dirruns = 0;
			return o
		};
		E.querySelectorAll && ! function () {
			var e, t = f,
				n = /'|\\/g,
				s = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
				r = [],
				o = [":active"],
				l = A.matchesSelector || A.mozMatchesSelector || A.webkitMatchesSelector || A.oMatchesSelector || A.msMatchesSelector;
			nt(function (e) {
				e.innerHTML = "<select><option selected=''></option></select>";
				e.querySelectorAll("[selected]").length || r.push("\\[" + F + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
				e.querySelectorAll(":checked").length || r.push(":checked")
			});
			nt(function (e) {
				e.innerHTML = "<p test=''></p>";
				e.querySelectorAll("[test^='']").length && r.push("[*^$]=" + F + "*(?:\"\"|'')");
				e.innerHTML = "<input type='hidden'/>";
				e.querySelectorAll(":enabled").length || r.push(":enabled", ":disabled")
			});
			r = r.length && new RegExp(r.join("|"));
			f = function (e, i, s, o, l) {
				if (!(o || l || r && r.test(e)))
					if (9 === i.nodeType) try {
							$.apply(s, L.call(i.querySelectorAll(e), 0));
							return s
						} catch (c) {} else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
							var u, d, h, p = i.getAttribute("id"),
								f = p || T,
								v = G.test(e) && i.parentNode || i;
							p ? f = f.replace(n, "\\$&") : i.setAttribute("id", f);
							u = a(e, i, l);
							f = "[id='" + f + "']";
							for (d = 0, h = u.length; h > d; d++) u[d] = f + u[d].selector;
							try {
								$.apply(s, L.call(v.querySelectorAll(u.join(",")), 0));
								return s
							} catch (c) {} finally {
								p || i.removeAttribute("id")
							}
						}
				return t(e, i, s, o, l)
			};
			if (l) {
				nt(function (t) {
					e = l.call(t, "div");
					try {
						l.call(t, "[test!='']:sizzle");
						o.push(it.PSEUDO.source, it.POS.source, "!=")
					} catch (i) {}
				});
				o = new RegExp(o.join("|"));
				i.matchesSelector = function (t, n) {
					n = n.replace(s, "='$1']");
					if (!(b(t) || o.test(n) || r && r.test(n))) try {
						var a = l.call(t, n);
						if (a || e || t.document && 11 !== t.document.nodeType) return a
					} catch (c) {}
					return i(n, null, null, [t]).length > 0
				}
			}
		}();
		g.setFilters.nth = g.setFilters.eq;
		g.filters = g.pseudos;
		i.attr = Q.attr;
		Q.find = i;
		Q.expr = i.selectors;
		Q.expr[":"] = Q.expr.pseudos;
		Q.unique = i.uniqueSort;
		Q.text = i.getText;
		Q.isXMLDoc = i.isXML;
		Q.contains = i.contains
	}(e);
	var Dt = /Until$/,
		Nt = /^(?:parents|prev(?:Until|All))/,
		Ot = /^.[^:#\[\.,]*$/,
		Mt = Q.expr.match.needsContext,
		Ft = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Q.fn.extend({
		find: function (e) {
			var t, i, n, s, r, a, o = this;
			if ("string" != typeof e) return Q(e).filter(function () {
				for (t = 0, i = o.length; i > t; t++)
					if (Q.contains(o[t], this)) return !0
			});
			a = this.pushStack("", "find", e);
			for (t = 0, i = this.length; i > t; t++) {
				n = a.length;
				Q.find(e, this[t], a);
				if (t > 0)
					for (s = n; s < a.length; s++)
						for (r = 0; n > r; r++)
							if (a[r] === a[s]) {
								a.splice(s--, 1);
								break
							}
			}
			return a
		},
		has: function (e) {
			var t, i = Q(e, this),
				n = i.length;
			return this.filter(function () {
				for (t = 0; n > t; t++)
					if (Q.contains(this, i[t])) return !0
			})
		},
		not: function (e) {
			return this.pushStack(c(this, e, !1), "not", e)
		},
		filter: function (e) {
			return this.pushStack(c(this, e, !0), "filter", e)
		},
		is: function (e) {
			return !!e && ("string" == typeof e ? Mt.test(e) ? Q(e, this.context).index(this[0]) >= 0 : Q.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function (e, t) {
			for (var i, n = 0, s = this.length, r = [], a = Mt.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; s > n; n++) {
				i = this[n];
				for (; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
					if (a ? a.index(i) > -1 : Q.find.matchesSelector(i, e)) {
						r.push(i);
						break
					}
					i = i.parentNode
				}
			}
			r = r.length > 1 ? Q.unique(r) : r;
			return this.pushStack(r, "closest", e)
		},
		index: function (e) {
			return e ? "string" == typeof e ? Q.inArray(this[0], Q(e)) : Q.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function (e, t) {
			var i = "string" == typeof e ? Q(e, t) : Q.makeArray(e && e.nodeType ? [e] : e),
				n = Q.merge(this.get(), i);
			return this.pushStack(o(i[0]) || o(n[0]) ? n : Q.unique(n))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});
	Q.fn.andSelf = Q.fn.addBack;
	Q.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return Q.dir(e, "parentNode")
		},
		parentsUntil: function (e, t, i) {
			return Q.dir(e, "parentNode", i)
		},
		next: function (e) {
			return l(e, "nextSibling")
		},
		prev: function (e) {
			return l(e, "previousSibling")
		},
		nextAll: function (e) {
			return Q.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return Q.dir(e, "previousSibling")
		},
		nextUntil: function (e, t, i) {
			return Q.dir(e, "nextSibling", i)
		},
		prevUntil: function (e, t, i) {
			return Q.dir(e, "previousSibling", i)
		},
		siblings: function (e) {
			return Q.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return Q.sibling(e.firstChild)
		},
		contents: function (e) {
			return Q.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Q.merge([], e.childNodes)
		}
	}, function (e, t) {
		Q.fn[e] = function (i, n) {
			var s = Q.map(this, t, i);
			Dt.test(e) || (n = i);
			n && "string" == typeof n && (s = Q.filter(n, s));
			s = this.length > 1 && !Ft[e] ? Q.unique(s) : s;
			this.length > 1 && Nt.test(e) && (s = s.reverse());
			return this.pushStack(s, e, J.call(arguments).join(","))
		}
	});
	Q.extend({
		filter: function (e, t, i) {
			i && (e = ":not(" + e + ")");
			return 1 === t.length ? Q.find.matchesSelector(t[0], e) ? [t[0]] : [] : Q.find.matches(e, t)
		},
		dir: function (e, i, n) {
			for (var s = [], r = e[i]; r && 9 !== r.nodeType && (n === t || 1 !== r.nodeType || !Q(r).is(n));) {
				1 === r.nodeType && s.push(r);
				r = r[i]
			}
			return s
		},
		sibling: function (e, t) {
			for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
			return i
		}
	});
	var Ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Rt = / jQuery\d+="(?:null|\d+)"/g,
		Bt = /^\s+/,
		Vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		qt = /<([\w:]+)/,
		zt = /<tbody/i,
		Ut = /<|&#?\w+;/,
		Wt = /<(?:script|style|link)/i,
		Jt = /<(?:script|object|embed|option|style)/i,
		Xt = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"),
		Yt = /^(?:checkbox|radio)$/,
		Gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Kt = /\/(java|ecma)script/i,
		Qt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		Zt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		ei = u(B),
		ti = ei.appendChild(B.createElement("div"));
	Zt.optgroup = Zt.option;
	Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead;
	Zt.th = Zt.td;
	Q.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]);
	Q.fn.extend({
		text: function (e) {
			return Q.access(this, function (e) {
				return e === t ? Q.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll: function (e) {
			if (Q.isFunction(e)) return this.each(function (t) {
				Q(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = Q(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]);
				t.map(function () {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function (e) {
			return Q.isFunction(e) ? this.each(function (t) {
				Q(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = Q(this),
					i = t.contents();
				i.length ? i.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = Q.isFunction(e);
			return this.each(function (i) {
				Q(this).wrapAll(t ? e.call(this, i) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function () {
			return this.domManip(arguments, !0, function (e) {
				(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function () {
			return this.domManip(arguments, !0, function (e) {
				(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function () {
			if (!o(this[0])) return this.domManip(arguments, !1, function (e) {
				this.parentNode.insertBefore(e, this)
			});
			if (arguments.length) {
				var e = Q.clean(arguments);
				return this.pushStack(Q.merge(e, this), "before", this.selector)
			}
		},
		after: function () {
			if (!o(this[0])) return this.domManip(arguments, !1, function (e) {
				this.parentNode.insertBefore(e, this.nextSibling)
			});
			if (arguments.length) {
				var e = Q.clean(arguments);
				return this.pushStack(Q.merge(this, e), "after", this.selector)
			}
		},
		remove: function (e, t) {
			for (var i, n = 0; null != (i = this[n]); n++)
				if (!e || Q.filter(e, [i]).length) {
					if (!t && 1 === i.nodeType) {
						Q.cleanData(i.getElementsByTagName("*"));
						Q.cleanData([i])
					}
					i.parentNode && i.parentNode.removeChild(i)
				}
			return this
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) {
				1 === e.nodeType && Q.cleanData(e.getElementsByTagName("*"));
				for (; e.firstChild;) e.removeChild(e.firstChild)
			}
			return this
		},
		clone: function (e, t) {
			e = null == e ? !1 : e;
			t = null == t ? e : t;
			return this.map(function () {
				return Q.clone(this, e, t)
			})
		},
		html: function (e) {
			return Q.access(this, function (e) {
				var i = this[0] || {},
					n = 0,
					s = this.length;
				if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Rt, "") : t;
				if (!("string" != typeof e || Wt.test(e) || !Q.support.htmlSerialize && Xt.test(e) || !Q.support.leadingWhitespace && Bt.test(e) || Zt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Vt, "<$1></$2>");
					try {
						for (; s > n; n++) {
							i = this[n] || {};
							if (1 === i.nodeType) {
								Q.cleanData(i.getElementsByTagName("*"));
								i.innerHTML = e
							}
						}
						i = 0
					} catch (r) {}
				}
				i && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function (e) {
			if (!o(this[0])) {
				if (Q.isFunction(e)) return this.each(function (t) {
					var i = Q(this),
						n = i.html();
					i.replaceWith(e.call(this, t, n))
				});
				"string" != typeof e && (e = Q(e).detach());
				return this.each(function () {
					var t = this.nextSibling,
						i = this.parentNode;
					Q(this).remove();
					t ? Q(t).before(e) : Q(i).append(e)
				})
			}
			return this.length ? this.pushStack(Q(Q.isFunction(e) ? e() : e), "replaceWith", e) : this
		},
		detach: function (e) {
			return this.remove(e, !0)
		},
		domManip: function (e, i, n) {
			e = [].concat.apply([], e);
			var s, r, a, o, l = 0,
				c = e[0],
				u = [],
				h = this.length;
			if (!Q.support.checkClone && h > 1 && "string" == typeof c && Gt.test(c)) return this.each(function () {
				Q(this).domManip(e, i, n)
			});
			if (Q.isFunction(c)) return this.each(function (s) {
				var r = Q(this);
				e[0] = c.call(this, s, i ? r.html() : t);
				r.domManip(e, i, n)
			});
			if (this[0]) {
				s = Q.buildFragment(e, this, u);
				a = s.fragment;
				r = a.firstChild;
				1 === a.childNodes.length && (a = r);
				if (r) {
					i = i && Q.nodeName(r, "tr");
					for (o = s.cacheable || h - 1; h > l; l++) n.call(i && Q.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === o ? a : Q.clone(a, !0, !0))
				}
				a = r = null;
				u.length && Q.each(u, function (e, t) {
					t.src ? Q.ajax ? Q.ajax({
						url: t.src,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						"throws": !0
					}) : Q.error("no ajax") : Q.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Qt, ""));
					t.parentNode && t.parentNode.removeChild(t)
				})
			}
			return this
		}
	});
	Q.buildFragment = function (e, i, n) {
		var s, r, a, o = e[0];
		i = i || B;
		i = !i.nodeType && i[0] || i;
		i = i.ownerDocument || i;
		if (1 === e.length && "string" == typeof o && o.length < 512 && i === B && "<" === o.charAt(0) && !Jt.test(o) && (Q.support.checkClone || !Gt.test(o)) && (Q.support.html5Clone || !Xt.test(o))) {
			r = !0;
			s = Q.fragments[o];
			a = s !== t
		}
		if (!s) {
			s = i.createDocumentFragment();
			Q.clean(e, i, s, n);
			r && (Q.fragments[o] = a && s)
		}
		return {
			fragment: s,
			cacheable: r
		}
	};
	Q.fragments = {};
	Q.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		Q.fn[e] = function (i) {
			var n, s = 0,
				r = [],
				a = Q(i),
				o = a.length,
				l = 1 === this.length && this[0].parentNode;
			if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === o) {
				a[t](this[0]);
				return this
			}
			for (; o > s; s++) {
				n = (s > 0 ? this.clone(!0) : this).get();
				Q(a[s])[t](n);
				r = r.concat(n)
			}
			return this.pushStack(r, e, a.selector)
		}
	});
	Q.extend({
		clone: function (e, t, i) {
			var n, s, r, a;
			if (Q.support.html5Clone || Q.isXMLDoc(e) || !Xt.test("<" + e.nodeName + ">")) a = e.cloneNode(!0);
			else {
				ti.innerHTML = e.outerHTML;
				ti.removeChild(a = ti.firstChild)
			} if (!(Q.support.noCloneEvent && Q.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e))) {
				p(e, a);
				n = f(e);
				s = f(a);
				for (r = 0; n[r]; ++r) s[r] && p(n[r], s[r])
			}
			if (t) {
				h(e, a);
				if (i) {
					n = f(e);
					s = f(a);
					for (r = 0; n[r]; ++r) h(n[r], s[r])
				}
			}
			n = s = null;
			return a
		},
		clean: function (e, t, i, n) {
			var s, r, a, o, l, c, d, h, p, f, y, m = t === B && ei,
				g = [];
			t && "undefined" != typeof t.createDocumentFragment || (t = B);
			for (s = 0; null != (a = e[s]); s++) {
				"number" == typeof a && (a += "");
				if (a) {
					if ("string" == typeof a)
						if (Ut.test(a)) {
							m = m || u(t);
							d = t.createElement("div");
							m.appendChild(d);
							a = a.replace(Vt, "<$1></$2>");
							o = (qt.exec(a) || ["", ""])[1].toLowerCase();
							l = Zt[o] || Zt._default;
							c = l[0];
							d.innerHTML = l[1] + a + l[2];
							for (; c--;) d = d.lastChild;
							if (!Q.support.tbody) {
								h = zt.test(a);
								p = "table" !== o || h ? "<table>" !== l[1] || h ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes;
								for (r = p.length - 1; r >= 0; --r) Q.nodeName(p[r], "tbody") && !p[r].childNodes.length && p[r].parentNode.removeChild(p[r])
							}!Q.support.leadingWhitespace && Bt.test(a) && d.insertBefore(t.createTextNode(Bt.exec(a)[0]), d.firstChild);
							a = d.childNodes;
							d.parentNode.removeChild(d)
						} else a = t.createTextNode(a);
					a.nodeType ? g.push(a) : Q.merge(g, a)
				}
			}
			d && (a = d = m = null);
			if (!Q.support.appendChecked)
				for (s = 0; null != (a = g[s]); s++) Q.nodeName(a, "input") ? v(a) : "undefined" != typeof a.getElementsByTagName && Q.grep(a.getElementsByTagName("input"), v);
			if (i) {
				f = function (e) {
					return !e.type || Kt.test(e.type) ? n ? n.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : void 0
				};
				for (s = 0; null != (a = g[s]); s++)
					if (!Q.nodeName(a, "script") || !f(a)) {
						i.appendChild(a);
						if ("undefined" != typeof a.getElementsByTagName) {
							y = Q.grep(Q.merge([], a.getElementsByTagName("script")), f);
							g.splice.apply(g, [s + 1, 0].concat(y));
							s += y.length
						}
					}
			}
			return g
		},
		cleanData: function (e, t) {
			for (var i, n, s, r, a = 0, o = Q.expando, l = Q.cache, c = Q.support.deleteExpando, u = Q.event.special; null != (s = e[a]); a++)
				if (t || Q.acceptData(s)) {
					n = s[o];
					i = n && l[n];
					if (i) {
						if (i.events)
							for (r in i.events) u[r] ? Q.event.remove(s, r) : Q.removeEvent(s, r, i.handle);
						if (l[n]) {
							delete l[n];
							c ? delete s[o] : s.removeAttribute ? s.removeAttribute(o) : s[o] = null;
							Q.deletedIds.push(n)
						}
					}
				}
		}
	});
	! function () {
		var e, t;
		Q.uaMatch = function (e) {
			e = e.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
			return {
				browser: t[1] || "",
				version: t[2] || "0"
			}
		};
		e = Q.uaMatch(q.userAgent);
		t = {};
		if (e.browser) {
			t[e.browser] = !0;
			t.version = e.version
		}
		t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0);
		Q.browser = t;
		Q.sub = function () {
			function e(t, i) {
				return new e.fn.init(t, i)
			}
			Q.extend(!0, e, this);
			e.superclass = this;
			e.fn = e.prototype = this();
			e.fn.constructor = e;
			e.sub = this.sub;
			e.fn.init = function (i, n) {
				n && n instanceof Q && !(n instanceof e) && (n = e(n));
				return Q.fn.init.call(this, i, n, t)
			};
			e.fn.init.prototype = e.fn;
			var t = e(B);
			return e
		}
	}();
	var ii, ni, si, ri = /alpha\([^)]*\)/i,
		ai = /opacity=([^)]*)/,
		oi = /^(top|right|bottom|left)$/,
		li = /^(none|table(?!-c[ea]).+)/,
		ci = /^margin/,
		ui = new RegExp("^(" + Z + ")(.*)$", "i"),
		di = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
		hi = new RegExp("^([-+])=(" + Z + ")", "i"),
		pi = {},
		fi = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		vi = {
			letterSpacing: 0,
			fontWeight: 400
		},
		yi = ["Top", "Right", "Bottom", "Left"],
		mi = ["Webkit", "O", "Moz", "ms"],
		gi = Q.fn.toggle;
	Q.fn.extend({
		css: function (e, i) {
			return Q.access(this, function (e, i, n) {
				return n !== t ? Q.style(e, i, n) : Q.css(e, i)
			}, e, i, arguments.length > 1)
		},
		show: function () {
			return g(this, !0)
		},
		hide: function () {
			return g(this)
		},
		toggle: function (e, t) {
			var i = "boolean" == typeof e;
			return Q.isFunction(e) && Q.isFunction(t) ? gi.apply(this, arguments) : this.each(function () {
				(i ? e : m(this)) ? Q(this).show() : Q(this).hide()
			})
		}
	});
	Q.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var i = ii(e, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": Q.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (e, i, n, s) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, a, o, l = Q.camelCase(i),
					c = e.style;
				i = Q.cssProps[l] || (Q.cssProps[l] = y(c, l));
				o = Q.cssHooks[i] || Q.cssHooks[l];
				if (n === t) return o && "get" in o && (r = o.get(e, !1, s)) !== t ? r : c[i];
				a = typeof n;
				if ("string" === a && (r = hi.exec(n))) {
					n = (r[1] + 1) * r[2] + parseFloat(Q.css(e, i));
					a = "number"
				}
				if (!(null == n || "number" === a && isNaN(n))) {
					"number" !== a || Q.cssNumber[l] || (n += "px");
					if (!(o && "set" in o && (n = o.set(e, n, s)) === t)) try {
						c[i] = n
					} catch (u) {}
				}
			}
		},
		css: function (e, i, n, s) {
			var r, a, o, l = Q.camelCase(i);
			i = Q.cssProps[l] || (Q.cssProps[l] = y(e.style, l));
			o = Q.cssHooks[i] || Q.cssHooks[l];
			o && "get" in o && (r = o.get(e, !0, s));
			r === t && (r = ii(e, i));
			"normal" === r && i in vi && (r = vi[i]);
			if (n || s !== t) {
				a = parseFloat(r);
				return n || Q.isNumeric(a) ? a || 0 : r
			}
			return r
		},
		swap: function (e, t, i) {
			var n, s, r = {};
			for (s in t) {
				r[s] = e.style[s];
				e.style[s] = t[s]
			}
			n = i.call(e);
			for (s in t) e.style[s] = r[s];
			return n
		}
	});
	e.getComputedStyle ? ii = function (t, i) {
		var n, s, r, a, o = e.getComputedStyle(t, null),
			l = t.style;
		if (o) {
			n = o[i];
			"" !== n || Q.contains(t.ownerDocument, t) || (n = Q.style(t, i));
			if (di.test(n) && ci.test(i)) {
				s = l.width;
				r = l.minWidth;
				a = l.maxWidth;
				l.minWidth = l.maxWidth = l.width = n;
				n = o.width;
				l.width = s;
				l.minWidth = r;
				l.maxWidth = a
			}
		}
		return n
	} : B.documentElement.currentStyle && (ii = function (e, t) {
		var i, n, s = e.currentStyle && e.currentStyle[t],
			r = e.style;
		null == s && r && r[t] && (s = r[t]);
		if (di.test(s) && !oi.test(t)) {
			i = r.left;
			n = e.runtimeStyle && e.runtimeStyle.left;
			n && (e.runtimeStyle.left = e.currentStyle.left);
			r.left = "fontSize" === t ? "1em" : s;
			s = r.pixelLeft + "px";
			r.left = i;
			n && (e.runtimeStyle.left = n)
		}
		return "" === s ? "auto" : s
	});
	Q.each(["height", "width"], function (e, t) {
		Q.cssHooks[t] = {
			get: function (e, i, n) {
				return i ? 0 === e.offsetWidth && li.test(ii(e, "display")) ? Q.swap(e, fi, function () {
					return w(e, t, n)
				}) : w(e, t, n) : void 0
			},
			set: function (e, i, n) {
				return _(e, i, n ? b(e, t, n, Q.support.boxSizing && "border-box" === Q.css(e, "boxSizing")) : 0)
			}
		}
	});
	Q.support.opacity || (Q.cssHooks.opacity = {
		get: function (e, t) {
			return ai.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function (e, t) {
			var i = e.style,
				n = e.currentStyle,
				s = Q.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				r = n && n.filter || i.filter || "";
			i.zoom = 1;
			if (t >= 1 && "" === Q.trim(r.replace(ri, "")) && i.removeAttribute) {
				i.removeAttribute("filter");
				if (n && !n.filter) return
			}
			i.filter = ri.test(r) ? r.replace(ri, s) : r + " " + s
		}
	});
	Q(function () {
		Q.support.reliableMarginRight || (Q.cssHooks.marginRight = {
			get: function (e, t) {
				return Q.swap(e, {
					display: "inline-block"
				}, function () {
					return t ? ii(e, "marginRight") : void 0
				})
			}
		});
		!Q.support.pixelPosition && Q.fn.position && Q.each(["top", "left"], function (e, t) {
			Q.cssHooks[t] = {
				get: function (e, i) {
					if (i) {
						var n = ii(e, t);
						return di.test(n) ? Q(e).position()[t] + "px" : n
					}
				}
			}
		})
	});
	if (Q.expr && Q.expr.filters) {
		Q.expr.filters.hidden = function (e) {
			return 0 === e.offsetWidth && 0 === e.offsetHeight || !Q.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ii(e, "display"))
		};
		Q.expr.filters.visible = function (e) {
			return !Q.expr.filters.hidden(e)
		}
	}
	Q.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		Q.cssHooks[e + t] = {
			expand: function (i) {
				var n, s = "string" == typeof i ? i.split(" ") : [i],
					r = {};
				for (n = 0; 4 > n; n++) r[e + yi[n] + t] = s[n] || s[n - 2] || s[0];
				return r
			}
		};
		ci.test(e) || (Q.cssHooks[e + t].set = _)
	});
	var _i = /%20/g,
		bi = /\[\]$/,
		wi = /\r?\n/g,
		xi = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Ci = /^(?:select|textarea)/i;
	Q.fn.extend({
		serialize: function () {
			return Q.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				return this.elements ? Q.makeArray(this.elements) : this
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || Ci.test(this.nodeName) || xi.test(this.type))
			}).map(function (e, t) {
				var i = Q(this).val();
				return null == i ? null : Q.isArray(i) ? Q.map(i, function (e) {
					return {
						name: t.name,
						value: e.replace(wi, "\r\n")
					}
				}) : {
					name: t.name,
					value: i.replace(wi, "\r\n")
				}
			}).get()
		}
	});
	Q.param = function (e, i) {
		var n, s = [],
			r = function (e, t) {
				t = Q.isFunction(t) ? t() : null == t ? "" : t;
				s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		i === t && (i = Q.ajaxSettings && Q.ajaxSettings.traditional);
		if (Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function () {
			r(this.name, this.value)
		});
		else
			for (n in e) C(n, e[n], i, r);
		return s.join("&").replace(_i, "+")
	};
	var Si, ki, Ii = /#.*$/,
		Ti = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ei = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		Ai = /^(?:GET|HEAD)$/,
		Pi = /^\/\//,
		Li = /\?/,
		$i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		ji = /([?&])_=[^&]*/,
		Di = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Ni = Q.fn.load,
		Oi = {},
		Mi = {},
		Fi = ["*/"] + ["*"];
	try {
		Si = V.href
	} catch (Hi) {
		Si = B.createElement("a");
		Si.href = "";
		Si = Si.href
	}
	ki = Di.exec(Si.toLowerCase()) || [];
	Q.fn.load = function (e, i, n) {
		if ("string" != typeof e && Ni) return Ni.apply(this, arguments);
		if (!this.length) return this;
		var s, r, a, o = this,
			l = e.indexOf(" ");
		if (l >= 0) {
			s = e.slice(l, e.length);
			e = e.slice(0, l)
		}
		if (Q.isFunction(i)) {
			n = i;
			i = t
		} else i && "object" == typeof i && (r = "POST");
		Q.ajax({
			url: e,
			type: r,
			dataType: "html",
			data: i,
			complete: function (e, t) {
				n && o.each(n, a || [e.responseText, t, e])
			}
		}).done(function (e) {
			a = arguments;
			o.html(s ? Q("<div>").append(e.replace($i, "")).find(s) : e)
		});
		return this
	};
	Q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
		Q.fn[t] = function (e) {
			return this.on(t, e)
		}
	});
	Q.each(["get", "post"], function (e, i) {
		Q[i] = function (e, n, s, r) {
			if (Q.isFunction(n)) {
				r = r || s;
				s = n;
				n = t
			}
			return Q.ajax({
				type: i,
				url: e,
				data: n,
				success: s,
				dataType: r
			})
		}
	});
	Q.extend({
		getScript: function (e, i) {
			return Q.get(e, t, i, "script")
		},
		getJSON: function (e, t, i) {
			return Q.get(e, t, i, "json")
		},
		ajaxSetup: function (e, t) {
			if (t) I(e, Q.ajaxSettings);
			else {
				t = e;
				e = Q.ajaxSettings
			}
			I(e, t);
			return e
		},
		ajaxSettings: {
			url: Si,
			isLocal: Ei.test(ki[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": Fi
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": Q.parseJSON,
				"text xml": Q.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: S(Oi),
		ajaxTransport: S(Mi),
		ajax: function (e, i) {
			function n(e, i, n, a) {
				var c, d, g, _, w, C = i;
				if (2 !== b) {
					b = 2;
					l && clearTimeout(l);
					o = t;
					r = a || "";
					x.readyState = e > 0 ? 4 : 0;
					n && (_ = T(h, x, n));
					if (e >= 200 && 300 > e || 304 === e) {
						if (h.ifModified) {
							w = x.getResponseHeader("Last-Modified");
							w && (Q.lastModified[s] = w);
							w = x.getResponseHeader("Etag");
							w && (Q.etag[s] = w)
						}
						if (304 === e) {
							C = "notmodified";
							c = !0
						} else {
							c = E(h, _);
							C = c.state;
							d = c.data;
							g = c.error;
							c = !g
						}
					} else {
						g = C;
						if (!C || e) {
							C = "error";
							0 > e && (e = 0)
						}
					}
					x.status = e;
					x.statusText = "" + (i || C);
					c ? v.resolveWith(p, [d, C, x]) : v.rejectWith(p, [x, C, g]);
					x.statusCode(m);
					m = t;
					u && f.trigger("ajax" + (c ? "Success" : "Error"), [x, h, c ? d : g]);
					y.fireWith(p, [x, C]);
					if (u) {
						f.trigger("ajaxComplete", [x, h]);
						--Q.active || Q.event.trigger("ajaxStop")
					}
				}
			}
			if ("object" == typeof e) {
				i = e;
				e = t
			}
			i = i || {};
			var s, r, a, o, l, c, u, d, h = Q.ajaxSetup({}, i),
				p = h.context || h,
				f = p !== h && (p.nodeType || p instanceof Q) ? Q(p) : Q.event,
				v = Q.Deferred(),
				y = Q.Callbacks("once memory"),
				m = h.statusCode || {},
				g = {},
				_ = {},
				b = 0,
				w = "canceled",
				x = {
					readyState: 0,
					setRequestHeader: function (e, t) {
						if (!b) {
							var i = e.toLowerCase();
							e = _[i] = _[i] || e;
							g[e] = t
						}
						return this
					},
					getAllResponseHeaders: function () {
						return 2 === b ? r : null
					},
					getResponseHeader: function (e) {
						var i;
						if (2 === b) {
							if (!a) {
								a = {};
								for (; i = Ti.exec(r);) a[i[1].toLowerCase()] = i[2]
							}
							i = a[e.toLowerCase()]
						}
						return i === t ? null : i
					},
					overrideMimeType: function (e) {
						b || (h.mimeType = e);
						return this
					},
					abort: function (e) {
						e = e || w;
						o && o.abort(e);
						n(0, e);
						return this
					}
				};
			v.promise(x);
			x.success = x.done;
			x.error = x.fail;
			x.complete = y.add;
			x.statusCode = function (e) {
				if (e) {
					var t;
					if (2 > b)
						for (t in e) m[t] = [m[t], e[t]];
					else {
						t = e[x.status];
						x.always(t)
					}
				}
				return this
			};
			h.url = ((e || h.url) + "").replace(Ii, "").replace(Pi, ki[1] + "//");
			h.dataTypes = Q.trim(h.dataType || "*").toLowerCase().split(tt);
			if (null == h.crossDomain) {
				c = Di.exec(h.url.toLowerCase());
				h.crossDomain = !(!c || c[1] == ki[1] && c[2] == ki[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (ki[3] || ("http:" === ki[1] ? 80 : 443)))
			}
			h.data && h.processData && "string" != typeof h.data && (h.data = Q.param(h.data, h.traditional));
			k(Oi, h, i, x);
			if (2 === b) return x;
			u = h.global;
			h.type = h.type.toUpperCase();
			h.hasContent = !Ai.test(h.type);
			u && 0 === Q.active++ && Q.event.trigger("ajaxStart");
			if (!h.hasContent) {
				if (h.data) {
					h.url += (Li.test(h.url) ? "&" : "?") + h.data;
					delete h.data
				}
				s = h.url;
				if (h.cache === !1) {
					var C = Q.now(),
						S = h.url.replace(ji, "$1_=" + C);
					h.url = S + (S === h.url ? (Li.test(h.url) ? "&" : "?") + "_=" + C : "")
				}
			}(h.data && h.hasContent && h.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", h.contentType);
			if (h.ifModified) {
				s = s || h.url;
				Q.lastModified[s] && x.setRequestHeader("If-Modified-Since", Q.lastModified[s]);
				Q.etag[s] && x.setRequestHeader("If-None-Match", Q.etag[s])
			}
			x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Fi + "; q=0.01" : "") : h.accepts["*"]);
			for (d in h.headers) x.setRequestHeader(d, h.headers[d]);
			if (h.beforeSend && (h.beforeSend.call(p, x, h) === !1 || 2 === b)) return x.abort();
			w = "abort";
			for (d in {
				success: 1,
				error: 1,
				complete: 1
			}) x[d](h[d]);
			o = k(Mi, h, i, x);
			if (o) {
				x.readyState = 1;
				u && f.trigger("ajaxSend", [x, h]);
				h.async && h.timeout > 0 && (l = setTimeout(function () {
					x.abort("timeout")
				}, h.timeout));
				try {
					b = 1;
					o.send(g, n)
				} catch (I) {
					if (!(2 > b)) throw I;
					n(-1, I)
				}
			} else n(-1, "No Transport");
			return x
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var Ri = [],
		Bi = /\?/,
		Vi = /(=)\?(?=&|$)|\?\?/,
		qi = Q.now();
	Q.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Ri.pop() || Q.expando + "_" + qi++;
			this[e] = !0;
			return e
		}
	});
	Q.ajaxPrefilter("json jsonp", function (i, n, s) {
		var r, a, o, l = i.data,
			c = i.url,
			u = i.jsonp !== !1,
			d = u && Vi.test(c),
			h = u && !d && "string" == typeof l && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Vi.test(l);
		if ("jsonp" === i.dataTypes[0] || d || h) {
			r = i.jsonpCallback = Q.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback;
			a = e[r];
			d ? i.url = c.replace(Vi, "$1" + r) : h ? i.data = l.replace(Vi, "$1" + r) : u && (i.url += (Bi.test(c) ? "&" : "?") + i.jsonp + "=" + r);
			i.converters["script json"] = function () {
				o || Q.error(r + " was not called");
				return o[0]
			};
			i.dataTypes[0] = "json";
			e[r] = function () {
				o = arguments
			};
			s.always(function () {
				e[r] = a;
				if (i[r]) {
					i.jsonpCallback = n.jsonpCallback;
					Ri.push(r)
				}
				o && Q.isFunction(a) && a(o[0]);
				o = a = t
			});
			return "script"
		}
	});
	Q.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function (e) {
				Q.globalEval(e);
				return e
			}
		}
	});
	Q.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1);
		if (e.crossDomain) {
			e.type = "GET";
			e.global = !1
		}
	});
	Q.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var i, n = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
			return {
				send: function (s, r) {
					i = B.createElement("script");
					i.async = "async";
					e.scriptCharset && (i.charset = e.scriptCharset);
					i.src = e.url;
					i.onload = i.onreadystatechange = function (e, s) {
						if (s || !i.readyState || /loaded|complete/.test(i.readyState)) {
							i.onload = i.onreadystatechange = null;
							n && i.parentNode && n.removeChild(i);
							i = t;
							s || r(200, "success")
						}
					};
					n.insertBefore(i, n.firstChild)
				},
				abort: function () {
					i && i.onload(0, 1)
				}
			}
		}
	});
	var zi, Ui = e.ActiveXObject ? function () {
			for (var e in zi) zi[e](0, 1)
		} : !1,
		Wi = 0;
	Q.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && A() || P()
	} : A;
	! function (e) {
		Q.extend(Q.support, {
			ajax: !!e,
			cors: !!e && "withCredentials" in e
		})
	}(Q.ajaxSettings.xhr());
	Q.support.ajax && Q.ajaxTransport(function (i) {
		if (!i.crossDomain || Q.support.cors) {
			var n;
			return {
				send: function (s, r) {
					var a, o, l = i.xhr();
					i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async);
					if (i.xhrFields)
						for (o in i.xhrFields) l[o] = i.xhrFields[o];
					i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType);
					i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (o in s) l.setRequestHeader(o, s[o])
					} catch (c) {}
					l.send(i.hasContent && i.data || null);
					n = function (e, s) {
						var o, c, u, d, h;
						try {
							if (n && (s || 4 === l.readyState)) {
								n = t;
								if (a) {
									l.onreadystatechange = Q.noop;
									Ui && delete zi[a]
								}
								if (s) 4 !== l.readyState && l.abort();
								else {
									o = l.status;
									u = l.getAllResponseHeaders();
									d = {};
									h = l.responseXML;
									h && h.documentElement && (d.xml = h);
									try {
										d.text = l.responseText
									} catch (e) {}
									try {
										c = l.statusText
									} catch (p) {
										c = ""
									}
									o || !i.isLocal || i.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
								}
							}
						} catch (f) {
							s || r(-1, f)
						}
						d && r(o, c, d, u)
					};
					if (i.async)
						if (4 === l.readyState) setTimeout(n, 0);
						else {
							a = ++Wi;
							if (Ui) {
								if (!zi) {
									zi = {};
									Q(e).unload(Ui)
								}
								zi[a] = n
							}
							l.onreadystatechange = n
						} else n()
				},
				abort: function () {
					n && n(0, 1)
				}
			}
		}
	});
	var Ji, Xi, Yi = /^(?:toggle|show|hide)$/,
		Gi = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
		Ki = /queueHooks$/,
		Qi = [N],
		Zi = {
			"*": [

				function (e, t) {
					var i, n, s, r = this.createTween(e, t),
						a = Gi.exec(t),
						o = r.cur(),
						l = +o || 0,
						c = 1;
					if (a) {
						i = +a[2];
						n = a[3] || (Q.cssNumber[e] ? "" : "px");
						if ("px" !== n && l) {
							l = Q.css(r.elem, e, !0) || i || 1;
							do {
								s = c = c || ".5";
								l /= c;
								Q.style(r.elem, e, l + n);
								c = r.cur() / o
							} while (1 !== c && c !== s)
						}
						r.unit = n;
						r.start = l;
						r.end = a[1] ? l + (a[1] + 1) * i : i
					}
					return r
				}
			]
		};
	Q.Animation = Q.extend(j, {
		tweener: function (e, t) {
			if (Q.isFunction(e)) {
				t = e;
				e = ["*"]
			} else e = e.split(" ");
			for (var i, n = 0, s = e.length; s > n; n++) {
				i = e[n];
				Zi[i] = Zi[i] || [];
				Zi[i].unshift(t)
			}
		},
		prefilter: function (e, t) {
			t ? Qi.unshift(e) : Qi.push(e)
		}
	});
	Q.Tween = O;
	O.prototype = {
		constructor: O,
		init: function (e, t, i, n, s, r) {
			this.elem = e;
			this.prop = i;
			this.easing = s || "swing";
			this.options = t;
			this.start = this.now = this.cur();
			this.end = n;
			this.unit = r || (Q.cssNumber[i] ? "" : "px")
		},
		cur: function () {
			var e = O.propHooks[this.prop];
			return e && e.get ? e.get(this) : O.propHooks._default.get(this)
		},
		run: function (e) {
			var t, i = O.propHooks[this.prop];
			this.pos = t = this.options.duration ? Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e;
			this.now = (this.end - this.start) * t + this.start;
			this.options.step && this.options.step.call(this.elem, this.now, this);
			i && i.set ? i.set(this) : O.propHooks._default.set(this);
			return this
		}
	};
	O.prototype.init.prototype = O.prototype;
	O.propHooks = {
		_default: {
			get: function (e) {
				var t;
				if (null != e.elem[e.prop] && (!e.elem.style || null == e.elem.style[e.prop])) return e.elem[e.prop];
				t = Q.css(e.elem, e.prop, !1, "");
				return t && "auto" !== t ? t : 0
			},
			set: function (e) {
				Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	};
	O.propHooks.scrollTop = O.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	};
	Q.each(["toggle", "show", "hide"], function (e, t) {
		var i = Q.fn[t];
		Q.fn[t] = function (n, s, r) {
			return null == n || "boolean" == typeof n || !e && Q.isFunction(n) && Q.isFunction(s) ? i.apply(this, arguments) : this.animate(M(t, !0), n, s, r)
		}
	});
	Q.fn.extend({
		fadeTo: function (e, t, i, n) {
			return this.filter(m).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, i, n)
		},
		animate: function (e, t, i, n) {
			var s = Q.isEmptyObject(e),
				r = Q.speed(t, i, n),
				a = function () {
					var t = j(this, Q.extend({}, e), r);
					s && t.stop(!0)
				};
			return s || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
		},
		stop: function (e, i, n) {
			var s = function (e) {
				var t = e.stop;
				delete e.stop;
				t(n)
			};
			if ("string" != typeof e) {
				n = i;
				i = e;
				e = t
			}
			i && e !== !1 && this.queue(e || "fx", []);
			return this.each(function () {
				var t = !0,
					i = null != e && e + "queueHooks",
					r = Q.timers,
					a = Q._data(this);
				if (i) a[i] && a[i].stop && s(a[i]);
				else
					for (i in a) a[i] && a[i].stop && Ki.test(i) && s(a[i]);
				for (i = r.length; i--;)
					if (r[i].elem === this && (null == e || r[i].queue === e)) {
						r[i].anim.stop(n);
						t = !1;
						r.splice(i, 1)
					}(t || !n) && Q.dequeue(this, e)
			})
		}
	});
	Q.each({
		slideDown: M("show"),
		slideUp: M("hide"),
		slideToggle: M("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, t) {
		Q.fn[e] = function (e, i, n) {
			return this.animate(t, e, i, n)
		}
	});
	Q.speed = function (e, t, i) {
		var n = e && "object" == typeof e ? Q.extend({}, e) : {
			complete: i || !i && t || Q.isFunction(e) && e,
			duration: e,
			easing: i && t || t && !Q.isFunction(t) && t
		};
		n.duration = Q.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Q.fx.speeds ? Q.fx.speeds[n.duration] : Q.fx.speeds._default;
		(null == n.queue || n.queue === !0) && (n.queue = "fx");
		n.old = n.complete;
		n.complete = function () {
			Q.isFunction(n.old) && n.old.call(this);
			n.queue && Q.dequeue(this, n.queue)
		};
		return n
	};
	Q.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	};
	Q.timers = [];
	Q.fx = O.prototype.init;
	Q.fx.tick = function () {
		for (var e, t = Q.timers, i = 0; i < t.length; i++) {
			e = t[i];
			e() || t[i] !== e || t.splice(i--, 1)
		}
		t.length || Q.fx.stop()
	};
	Q.fx.timer = function (e) {
		e() && Q.timers.push(e) && !Xi && (Xi = setInterval(Q.fx.tick, Q.fx.interval))
	};
	Q.fx.interval = 13;
	Q.fx.stop = function () {
		clearInterval(Xi);
		Xi = null
	};
	Q.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	Q.fx.step = {};
	Q.expr && Q.expr.filters && (Q.expr.filters.animated = function (e) {
		return Q.grep(Q.timers, function (t) {
			return e === t.elem
		}).length
	});
	var en = /^(?:body|html)$/i;
	Q.fn.offset = function (e) {
		if (arguments.length) return e === t ? this : this.each(function (t) {
			Q.offset.setOffset(this, e, t)
		});
		var i, n, s, r, a, o, l, c, u, d, h = this[0],
			p = h && h.ownerDocument;
		if (p) {
			if ((s = p.body) === h) return Q.offset.bodyOffset(h);
			n = p.documentElement;
			if (!Q.contains(n, h)) return {
				top: 0,
				left: 0
			};
			i = h.getBoundingClientRect();
			r = F(p);
			a = n.clientTop || s.clientTop || 0;
			o = n.clientLeft || s.clientLeft || 0;
			l = r.pageYOffset || n.scrollTop;
			c = r.pageXOffset || n.scrollLeft;
			u = i.top + l - a;
			d = i.left + c - o;
			return {
				top: u,
				left: d
			}
		}
	};
	Q.offset = {
		bodyOffset: function (e) {
			var t = e.offsetTop,
				i = e.offsetLeft;
			if (Q.support.doesNotIncludeMarginInBodyOffset) {
				t += parseFloat(Q.css(e, "marginTop")) || 0;
				i += parseFloat(Q.css(e, "marginLeft")) || 0
			}
			return {
				top: t,
				left: i
			}
		},
		setOffset: function (e, t, i) {
			var n = Q.css(e, "position");
			"static" === n && (e.style.position = "relative");
			var s, r, a = Q(e),
				o = a.offset(),
				l = Q.css(e, "top"),
				c = Q.css(e, "left"),
				u = ("absolute" === n || "fixed" === n) && Q.inArray("auto", [l, c]) > -1,
				d = {},
				h = {};
			if (u) {
				h = a.position();
				s = h.top;
				r = h.left
			} else {
				s = parseFloat(l) || 0;
				r = parseFloat(c) || 0
			}
			Q.isFunction(t) && (t = t.call(e, i, o));
			null != t.top && (d.top = t.top - o.top + s);
			null != t.left && (d.left = t.left - o.left + r);
			"using" in t ? t.using.call(e, d) : a.css(d)
		}
	};
	Q.fn.extend({
		position: function () {
			if (this[0]) {
				var e = this[0],
					t = this.offsetParent(),
					i = this.offset(),
					n = en.test(t[0].nodeName) ? {
						top: 0,
						left: 0
					} : t.offset();
				i.top -= parseFloat(Q.css(e, "marginTop")) || 0;
				i.left -= parseFloat(Q.css(e, "marginLeft")) || 0;
				n.top += parseFloat(Q.css(t[0], "borderTopWidth")) || 0;
				n.left += parseFloat(Q.css(t[0], "borderLeftWidth")) || 0;
				return {
					top: i.top - n.top,
					left: i.left - n.left
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent || B.body; e && !en.test(e.nodeName) && "static" === Q.css(e, "position");) e = e.offsetParent;
				return e || B.body
			})
		}
	});
	Q.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, i) {
		var n = /Y/.test(i);
		Q.fn[e] = function (s) {
			return Q.access(this, function (e, s, r) {
				var a = F(e);
				if (r === t) return a ? i in a ? a[i] : a.document.documentElement[s] : e[s];
				a ? a.scrollTo(n ? Q(a).scrollLeft() : r, n ? r : Q(a).scrollTop()) : e[s] = r;
				return void 0
			}, e, s, arguments.length, null)
		}
	});
	Q.each({
		Height: "height",
		Width: "width"
	}, function (e, i) {
		Q.each({
			padding: "inner" + e,
			content: i,
			"": "outer" + e
		}, function (n, s) {
			Q.fn[s] = function (s, r) {
				var a = arguments.length && (n || "boolean" != typeof s),
					o = n || (s === !0 || r === !0 ? "margin" : "border");
				return Q.access(this, function (i, n, s) {
					var r;
					if (Q.isWindow(i)) return i.document.documentElement["client" + e];
					if (9 === i.nodeType) {
						r = i.documentElement;
						return Math.max(i.body["scroll" + e], r["scroll" + e], i.body["offset" + e], r["offset" + e], r["client" + e])
					}
					return s === t ? Q.css(i, n, s, o) : Q.style(i, n, s, o)
				}, i, a ? s : t, a, null)
			}
		})
	});
	e.jQuery = e.$ = Q;
	"function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
		return Q
	})
}(window);
! function (e) {
	function t(t, i) {
		throw e.extend(t, i), t
	}

	function i(e) {
		var t = [];
		if (p.call(e) !== o) return !1;
		for (var i = 0, n = e.length; n > i; i++) t[i] = e[i].jqote_id;
		return t.length ? t.sort().join(".").replace(/(\b\d+\b)\.(?:\1(\.|$))+/g, "$1$2") : !1
	}

	function n(t, i) {
		var s, r = [],
			i = i || d,
			a = p.call(t);
		if (a === c) return t.jqote_id ? [t] : !1;
		if (a !== o) return [e.jqotec(t, i)];
		if (a === o)
			for (var l = 0, u = t.length; u > l; l++)(s = n(t[l], i)) && r.push(s[0]);
		return r.length ? r : !1
	}
	var s = "UndefinedTemplateError",
		r = "TemplateCompilationError",
		a = "TemplateExecutionError",
		o = "[object Array]",
		l = "[object String]",
		c = "[object Function]",
		u = 1,
		d = "%",
		h = /^[^<]*(<[\w\W]+>)[^>]*$/,
		p = Object.prototype.toString;
	e.fn.extend({
		jqote: function (t, i) {
			var t = p.call(t) === o ? t : [t],
				n = "";
			this.each(function (s) {
				for (var r = e.jqotec(this, i), a = 0; a < t.length; a++) n += r.call(t[a], s, a, t, r)
			});
			return n
		}
	});
	e.each({
		app: "append",
		pre: "prepend",
		sub: "html"
	}, function (t, s) {
		e.fn["jqote" + t] = function (r, a, o) {
			var l, c, u = e.jqote(r, a, o),
				d = h.test(u) ? e : function (t) {
					return e(document.createTextNode(t))
				};
			(l = i(n(r))) && (c = new RegExp("(^|\\.)" + l.split(".").join("\\.(.*)?") + "(\\.|$)"));
			return this.each(function () {
				var i = d(u);
				e(this)[s](i);
				(3 === i[0].nodeType ? e(this) : i).trigger("jqote." + t, [i, c])
			})
		}
	});
	e.extend({
		jqote: function (e, i, r) {
			var a = "",
				r = r || d,
				l = n(e, r);
			l === !1 && t(new Error("Empty or undefined template passed to $.jqote"), {
				type: s
			});
			i = p.call(i) !== o ? [i] : i;
			for (var c = 0, u = l.length; u > c; c++)
				for (var h = 0; h < i.length; h++) a += l[c].call(i[h], c, h, i, l[c]);
			return a
		},
		jqotec: function (i, n) {
			var o, c, f, n = n || d,
				v = p.call(i);
			if (v === l && h.test(i)) {
				c = f = i;
				if (o = e.jqotecache[i]) return o
			} else {
				c = v === l || i.nodeType ? e(i) : i instanceof jQuery ? i : null;
				c[0] && ((f = c[0].innerHTML) || (f = c.text())) || t(new Error("Empty or undefined template passed to $.jqotec"), {
					type: s
				});
				if (o = e.jqotecache[e.data(c[0], "jqote_id")]) return o
			}
			for (var y, m = "", g = f.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g, "").split("<" + n).join(n + ">").split(n + ">"), _ = 0, b = g.length; b > _; _++) m += "" !== g[_].charAt(0) ? "out+='" + g[_].replace(/(\\|["'])/g, "\\$1") + "'" : "=" === g[_].charAt(1) ? ";out+=(" + g[_].substr(2) + ");" : "!" === g[_].charAt(1) ? ";out+=$.jqotenc((" + g[_].substr(2) + "));" : ";" + g[_].substr(1);
			m = "try{" + ('var out="";' + m + ";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=") + '}catch(e){e.type="' + a + '";e.args=arguments;e.template=arguments.callee.toString();throw e;}';
			try {
				var w = new Function("i, j, data, fn", m)
			} catch (x) {
				t(x, {
					type: r
				})
			}
			y = c instanceof jQuery ? e.data(c[0], "jqote_id", u) : c;
			return e.jqotecache[y] = (w.jqote_id = u++, w)
		},
		jqotefn: function (t) {
			var i = p.call(t),
				n = i === l && h.test(t) ? t : e.data(e(t)[0], "jqote_id");
			return e.jqotecache[n] || !1
		},
		jqotetag: function (e) {
			p.call(e) === l && (d = e)
		},
		jqotenc: function (e) {
			return e.toString().replace(/&(?!\w+;)/g, "&#38;").split("<").join("&#60;").split(">").join("&#62;").split('"').join("&#34;").split("'").join("&#39;")
		},
		jqotecache: {}
	});
	e.event.special.jqote = {
		add: function (e) {
			var t, s = e.handler,
				r = e.data ? p.call(e.data) !== o ? [e.data] : e.data : [];
			e.namespace || (e.namespace = "app.pre.sub");
			r.length && (t = i(n(r))) && (e.handler = function (e, i, n) {
				return !n || n.test(t) ? s.apply(this, [e, i]) : null
			})
		}
	}
}(jQuery);
define("jqote2", function () {});
! function (e) {
	"function" == typeof define && define.amd ? define("jquery-cookie", ["jquery"], e) : e(jQuery)
}(function (e) {
	function t(e) {
		return o.raw ? e : encodeURIComponent(e)
	}

	function i(e) {
		return o.raw ? e : decodeURIComponent(e)
	}

	function n(e) {
		return t(o.json ? JSON.stringify(e) : String(e))
	}

	function s(e) {
		0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			e = decodeURIComponent(e.replace(a, " "))
		} catch (t) {
			return
		}
		try {
			return o.json ? JSON.parse(e) : e
		} catch (t) {}
	}

	function r(t, i) {
		var n = o.raw ? t : s(t);
		return e.isFunction(i) ? i(n) : n
	}
	var a = /\+/g,
		o = e.cookie = function (s, a, l) {
			if (void 0 !== a && !e.isFunction(a)) {
				l = e.extend({}, o.defaults, l);
				if ("number" == typeof l.expires) {
					var c = l.expires,
						u = l.expires = new Date;
					u.setDate(u.getDate() + c)
				}
				return document.cookie = [t(s), "=", n(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
			}
			for (var d = s ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
				var v = h[p].split("="),
					y = i(v.shift()),
					m = v.join("=");
				if (s && s === y) {
					d = r(m, a);
					break
				}
				s || void 0 === (m = r(m)) || (d[y] = m)
			}
			return d
		};
	o.defaults = {};
	e.removeCookie = function (t, i) {
		if (void 0 !== e.cookie(t)) {
			e.cookie(t, "", e.extend({}, i, {
				expires: -1
			}));
			return !0
		}
		return !1
	}
});
define("slick-carousel", ["jquery"], function () {
	var e = window.define;
	window.define = void 0;
	! function (a) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function (a) {
		"use strict";
		var b = window.Slick || {};
		b = function () {
			function c(c, d) {
				var f, g, e = this;
				if (e.defaults = {
					accessibility: !0,
					arrows: !0,
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function (a, b) {
						return '<button type="button">' + (b + 1) + "</button>"
					},
					dots: !1,
					draggable: !0,
					easing: "linear",
					fade: !1,
					infinite: !0,
					lazyLoad: "ondemand",
					onBeforeChange: null,
					onAfterChange: null,
					onInit: null,
					onReInit: null,
					pauseOnHover: !0,
					responsive: null,
					slide: "div",
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 300,
					swipe: !0,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					vertical: !1
				}, e.initials = {
					animating: !1,
					autoPlayTimer: null,
					currentSlide: 0,
					currentLeft: null,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					$list: null,
					touchObject: {},
					transformsEnabled: !1
				}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.paused = !1, e.positionProp = null, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.windowWidth = 0, e.windowTimer = null, e.options = a.extend({}, e.defaults, d), e.originalSettings = e.options, f = e.options.responsive || null, f && f.length > -1) {
					for (g in f) f.hasOwnProperty(g) && (e.breakpoints.push(f[g].breakpoint), e.breakpointSettings[f[g].breakpoint] = f[g].settings);
					e.breakpoints.sort(function (a, b) {
						return b - a
					})
				}
				e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.init()
			}
			var b = 0;
			return c
		}(), b.prototype.addSlide = function (b, c, d) {
			var e = this;
			if ("boolean" == typeof c) d = c, c = null;
			else if (0 > c || c >= e.slideCount) return !1;
			e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).remove(), e.$slideTrack.append(e.$slides), e.$slidesCache = e.$slides, e.reinit()
		}, b.prototype.animateSlide = function (b, c) {
			var d = {},
				e = this;
			e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
				left: b
			}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
				top: b
			}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({
				animStart: e.currentLeft
			}).animate({
				animStart: b
			}, {
				duration: e.options.speed,
				easing: e.options.easing,
				step: function (a) {
					e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
				},
				complete: function () {
					c && c.call()
				}
			}) : (e.applyTransition(), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
				e.disableTransition(), c.call()
			}, e.options.speed))
		}, b.prototype.applyTransition = function (a) {
			var b = this,
				c = {};
			c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
		}, b.prototype.autoPlay = function () {
			var a = this;
			a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
		}, b.prototype.autoPlayClear = function () {
			var a = this;
			a.autoPlayTimer && clearInterval(a.autoPlayTimer)
		}, b.prototype.autoPlayIterator = function () {
			var a = this;
			a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
		}, b.prototype.buildArrows = function () {
			var b = this;
			b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a('<button type="button" class="slick-prev">Previous</button>').appendTo(b.$slider), b.$nextArrow = a('<button type="button" class="slick-next">Next</button>').appendTo(b.$slider), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
		}, b.prototype.buildDots = function () {
			var c, d, b = this;
			if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
				for (d = '<ul class="slick-dots">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
				d += "</ul>", b.$dots = a(d).appendTo(b.$slider), b.$dots.find("li").first().addClass("slick-active")
			}
		}, b.prototype.buildOut = function () {
			var b = this;
			b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode === !0 && (b.options.infinite = !0, b.options.slidesToScroll = 1, 0 === b.options.slidesToShow % 2 && (b.options.slidesToShow = 3)), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses(0), b.options.draggable === !0 && b.$list.addClass("draggable")
		}, b.prototype.checkResponsive = function () {
			var c, d, b = this;
			if (b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && null !== b.originalSettings.responsive) {
				d = null;
				for (c in b.breakpoints) b.breakpoints.hasOwnProperty(c) && a(window).width() < b.breakpoints[c] && (d = b.breakpoints[c]);
				null !== d ? null !== b.activeBreakpoint ? d !== b.activeBreakpoint && (b.activeBreakpoint = d, b.options = a.extend({}, b.defaults, b.breakpointSettings[d]), b.refresh()) : (b.activeBreakpoint = d, b.options = a.extend({}, b.defaults, b.breakpointSettings[d]), b.refresh()) : null !== b.activeBreakpoint && (b.activeBreakpoint = null, b.options = a.extend({}, b.defaults, b.originalSettings), b.refresh())
			}
		}, b.prototype.changeSlide = function (b) {
			var c = this;
			switch (b.data.message) {
			case "previous":
				c.slideHandler(c.currentSlide - c.options.slidesToScroll);
				break;
			case "next":
				c.slideHandler(c.currentSlide + c.options.slidesToScroll);
				break;
			case "index":
				c.slideHandler(a(b.target).parent().index() * c.options.slidesToScroll);
				break;
			default:
				return !1
			}
		}, b.prototype.destroy = function () {
			var b = this;
			b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()), b.$slides.unwrap().unwrap(), b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid)
		}, b.prototype.disableTransition = function (a) {
			var b = this,
				c = {};
			c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
		}, b.prototype.fadeSlide = function (a, b) {
			var c = this;
			c.cssTransitions === !1 ? (c.$slides.eq(a).css({
				zIndex: 1e3
			}), c.$slides.eq(a).animate({
				opacity: 1
			}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
				opacity: 1,
				zIndex: 1e3
			}), b && setTimeout(function () {
				c.disableTransition(a), b.call()
			}, c.options.speed))
		}, b.prototype.filterSlides = function (a) {
			var b = this;
			null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).remove(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
		}, b.prototype.getCurrent = function () {
			var a = this;
			return a.currentSlide
		}, b.prototype.getDotCount = function () {
			var e, a = this,
				b = 0,
				c = 0,
				d = 0;
			for (e = a.options.infinite === !0 ? a.slideCount + a.options.slidesToShow - a.options.slidesToScroll : a.slideCount; e > b;) d++, c += a.options.slidesToScroll, b = c + a.options.slidesToShow;
			return d
		}, b.prototype.getLeft = function (a) {
			var c, d, b = this,
				e = 0;
			return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideCount % b.options.slidesToShow * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToShow * d)) : 0 !== b.slideCount % b.options.slidesToShow && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = b.options.slidesToShow * b.slideWidth - b.slideCount % b.options.slidesToShow * b.slideWidth, e = b.slideCount % b.options.slidesToShow * d), b.options.centerMode === !0 && (b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e
		}, b.prototype.init = function () {
			var b = this;
			a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.checkResponsive()), null !== b.options.onInit && b.options.onInit.call(this, b)
		}, b.prototype.initArrowEvents = function () {
			var a = this;
			a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
				message: "previous"
			}, a.changeSlide), a.$nextArrow.on("click.slick", {
				message: "next"
			}, a.changeSlide))
		}, b.prototype.initDotEvents = function () {
			var b = this;
			b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
				message: "index"
			}, b.changeSlide)
		}, b.prototype.initializeEvents = function () {
			var b = this;
			b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, b.swipeHandler), b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", b.autoPlayClear), b.$list.on("mouseleave.slick", b.autoPlay)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function () {
				b.checkResponsive(), b.setPosition()
			}), a(window).on("resize.slick.slick-" + b.instanceUid, function () {
				a(window).width !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
					b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
				}, 50))
			}), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition)
		}, b.prototype.initUI = function () {
			var a = this;
			a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
		}, b.prototype.keyHandler = function (a) {
			var b = this;
			37 === a.keyCode ? b.changeSlide({
				data: {
					message: "previous"
				}
			}) : 39 === a.keyCode && b.changeSlide({
				data: {
					message: "next"
				}
			})
		}, b.prototype.lazyLoad = function () {
			var c, d, e, f, b = this;
			b.options.centerMode === !0 ? (e = b.options.slidesToShow + b.currentSlide - 1, f = e + b.options.slidesToShow + 2) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow), c = b.$slider.find(".slick-slide").slice(e, f), a("img[data-lazy]", c).not("[src]").each(function () {
				a(this).css({
					opacity: 0
				}).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading").load(function () {
					a(this).animate({
						opacity: 1
					}, 200)
				})
			}), b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), a("img[data-lazy]", d).not("[src]").each(function () {
				a(this).css({
					opacity: 0
				}).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading").load(function () {
					a(this).animate({
						opacity: 1
					}, 200)
				})
			})) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), a("img[data-lazy]", d).not("[src]").each(function () {
				a(this).css({
					opacity: 0
				}).attr("src", a(this).attr("data-lazy")).removeClass("slick-loading").load(function () {
					a(this).animate({
						opacity: 1
					}, 200)
				})
			}))
		}, b.prototype.loadSlider = function () {
			var a = this;
			a.setPosition(), a.$slideTrack.css({
				opacity: 1
			}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
		}, b.prototype.postSlide = function (a) {
			var b = this;
			null !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
		}, b.prototype.progressiveLazyLoad = function () {
			var c, d, b = this;
			c = a("img[data-lazy]").not("[src]").length, c > 0 && (d = a(a("img[data-lazy]", b.$slider).not("[src]").get(0)), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
				b.progressiveLazyLoad()
			}))
		}, b.prototype.refresh = function () {
			var b = this;
			b.destroy(), a.extend(b, b.initials), b.init()
		}, b.prototype.reinit = function () {
			var a = this;
			a.$slides = a.$slideTrack.children(a.options.slide).addClass("slick-slide"), a.slideCount = a.$slides.length, a.currentSlide >= a.slideCount && 0 !== a.currentSlide && (a.currentSlide = a.currentSlide - a.options.slidesToScroll), a.setProps(), a.setupInfinite(), a.buildArrows(), a.updateArrows(), a.initArrowEvents(), a.buildDots(), a.updateDots(), a.initDotEvents(), a.setSlideClasses(0), a.setPosition(), null !== a.options.onReInit && a.options.onReInit.call(this, a)
		}, b.prototype.removeSlide = function (a, b) {
			var c = this;
			return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : c.slideCount - 1) : a = b === !0 ? --a : a, c.slideCount < 1 || 0 > a || a > c.slideCount - 1 ? !1 : (c.unload(), c.$slideTrack.children(this.options.slide).eq(a).remove(), c.$slides = c.$slideTrack.children(this.options.slide), c.$slideTrack.children(this.options.slide).remove(), c.$slideTrack.append(c.$slides), c.$slidesCache = c.$slides, c.reinit(), void 0)
		}, b.prototype.setCSS = function (a) {
			var d, e, b = this,
				c = {};
			d = "left" == b.positionProp ? a + "px" : "0px", e = "top" == b.positionProp ? a + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
		}, b.prototype.setDimensions = function () {
			var a = this;
			a.options.centerMode === !0 ? a.$slideTrack.children(".slick-slide").width(a.slideWidth) : a.$slideTrack.children(".slick-slide").width(a.slideWidth), a.options.vertical === !1 ? (a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)), a.options.centerMode === !0 && a.$list.css({
				padding: "0px " + a.options.centerPadding
			})) : (a.$list.height(a.$slides.first().outerHeight() * a.options.slidesToShow), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight() * a.$slideTrack.children(".slick-slide").length)), a.options.centerMode === !0 && a.$list.css({
				padding: a.options.centerPadding + " 0px"
			}))
		}, b.prototype.setFade = function () {
			var c, b = this;
			b.$slides.each(function (d, e) {
				c = -1 * b.slideWidth * d, a(e).css({
					position: "relative",
					left: c,
					top: 0,
					zIndex: 800,
					opacity: 0
				})
			}), b.$slides.eq(b.currentSlide).css({
				zIndex: 900,
				opacity: 1
			})
		}, b.prototype.setPosition = function () {
			var a = this;
			a.setValues(), a.setDimensions(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade()
		}, b.prototype.setProps = function () {
			var a = this;
			a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== document.body.style.WebkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== document.body.style.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition"), void 0 !== document.body.style.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition"), void 0 !== document.body.style.msTransform && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType
		}, b.prototype.setValues = function () {
			var a = this;
			a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.slideWidth = a.options.vertical === !1 ? Math.ceil(a.listWidth / a.options.slidesToShow) : Math.ceil(a.listWidth)
		}, b.prototype.setSlideClasses = function (a) {
			var c, d, e, b = this;
			b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center"), b.$slides.eq(a).addClass("slick-center")) : a > 0 && a < b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
		}, b.prototype.setupInfinite = function () {
			var c, d, e, b = this;
			if ((b.options.fade === !0 || b.options.vertical === !0) && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
				for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone().attr("id", "").prependTo(b.$slideTrack).addClass("slick-cloned");
				for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone().attr("id", "").appendTo(b.$slideTrack).addClass("slick-cloned");
				b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					a(this).attr("id", "")
				})
			}
		}, b.prototype.slideHandler = function (a) {
			var b, c, d, e, f = null,
				g = this;
			return g.animating === !0 ? !1 : (b = a, f = g.getLeft(b), d = g.getLeft(g.currentSlide), e = 0 !== g.slideCount % g.options.slidesToScroll ? g.options.slidesToScroll : 0, g.currentLeft = null === g.swipeLeft ? d : g.swipeLeft, g.options.infinite === !1 && (0 > a || a > g.slideCount - g.options.slidesToShow + e) ? (g.options.fade === !1 && (b = g.currentSlide, g.animateSlide(d, function () {
				g.postSlide(b)
			})), !1) : (g.options.autoplay === !0 && clearInterval(g.autoPlayTimer), c = 0 > b ? 0 !== g.slideCount % g.options.slidesToScroll ? g.slideCount - g.slideCount % g.options.slidesToScroll : g.slideCount - g.options.slidesToScroll : b > g.slideCount - 1 ? 0 : b, g.animating = !0, null !== g.options.onBeforeChange && a !== g.currentSlide && g.options.onBeforeChange.call(this, g, g.currentSlide, c), g.currentSlide = c, g.setSlideClasses(g.currentSlide), g.updateDots(), g.updateArrows(), g.options.fade === !0 ? (g.fadeSlide(c, function () {
				g.postSlide(c)
			}), !1) : (g.animateSlide(f, function () {
				g.postSlide(c)
			}), void 0)))
		}, b.prototype.startLoad = function () {
			var a = this;
			a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
		}, b.prototype.swipeDirection = function () {
			var a, b, c, d, e = this;
			return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? "left" : 360 >= d && d >= 315 ? "left" : d >= 135 && 225 >= d ? "right" : "vertical"
		}, b.prototype.swipeEnd = function (b) {
			var c = this;
			if (c.$list.removeClass("dragging"), void 0 === c.touchObject.curX) return !1;
			if (c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (a(b.target).on("click.slick", function (b) {
				b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.slick")
			}), c.swipeDirection()) {
			case "left":
				c.slideHandler(c.currentSlide + c.options.slidesToScroll), c.touchObject = {};
				break;
			case "right":
				c.slideHandler(c.currentSlide - c.options.slidesToScroll), c.touchObject = {}
			} else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
		}, b.prototype.swipeHandler = function (a) {
			var b = this;
			if ("ontouchend" in document && b.options.swipe === !1) return !1;
			if (b.options.draggable === !1 && !a.originalEvent.touches) return !0;
			switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
			}
		}, b.prototype.swipeMove = function (a) {
			var c, d, e, f, b = this;
			return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, c = b.getLeft(b.currentSlide), !b.$list.hasClass("dragging") || f && 1 !== f.length ? !1 : (b.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, b.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), d = b.swipeDirection(), "vertical" !== d ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), e = b.touchObject.curX > b.touchObject.startX ? 1 : -1, b.swipeLeft = b.options.vertical === !1 ? c + b.touchObject.swipeLength * e : c + b.touchObject.swipeLength * (b.$list.height() / b.listWidth) * e, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
		}, b.prototype.swipeStart = function (a) {
			var c, b = this;
			return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.$list.addClass("dragging"), void 0)
		}, b.prototype.unfilterSlides = function () {
			var a = this;
			null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).remove(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
		}, b.prototype.unload = function () {
			var b = this;
			a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()), b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")
		}, b.prototype.updateArrows = function () {
			var a = this;
			a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
		}, b.prototype.updateDots = function () {
			var a = this;
			null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(a.currentSlide / a.options.slidesToScroll).addClass("slick-active"))
		}, a.fn.slick = function (a) {
			var c = this;
			return c.each(function (c, d) {
				d.slick = new b(d, a)
			})
		}, a.fn.slickAdd = function (a, b, c) {
			var d = this;
			return d.each(function (d, e) {
				e.slick.addSlide(a, b, c)
			})
		}, a.fn.slickCurrentSlide = function () {
			var a = this;
			return a.get(0).slick.getCurrent()
		}, a.fn.slickFilter = function (a) {
			var b = this;
			return b.each(function (b, c) {
				c.slick.filterSlides(a)
			})
		}, a.fn.slickGoTo = function (a) {
			var b = this;
			return b.each(function (b, c) {
				c.slick.slideHandler(a)
			})
		}, a.fn.slickNext = function () {
			var a = this;
			return a.each(function (a, b) {
				b.slick.changeSlide({
					data: {
						message: "next"
					}
				})
			})
		}, a.fn.slickPause = function () {
			var a = this;
			return a.each(function (a, b) {
				b.slick.autoPlayClear(), b.slick.paused = !0
			})
		}, a.fn.slickPlay = function () {
			var a = this;
			return a.each(function (a, b) {
				b.slick.paused = !1, b.slick.autoPlay()
			})
		}, a.fn.slickPrev = function () {
			var a = this;
			return a.each(function (a, b) {
				b.slick.changeSlide({
					data: {
						message: "previous"
					}
				})
			})
		}, a.fn.slickRemove = function (a, b) {
			var c = this;
			return c.each(function (c, d) {
				d.slick.removeSlide(a, b)
			})
		}, a.fn.slickSetOption = function (a, b, c) {
			var d = this;
			return d.each(function (d, e) {
				e.slick.options[a] = b, c === !0 && (e.slick.unload(), e.slick.reinit())
			})
		}, a.fn.slickUnfilter = function () {
			var a = this;
			return a.each(function (a, b) {
				b.slick.unfilterSlides()
			})
		}, a.fn.unslick = function () {
			var a = this;
			return a.each(function (a, b) {
				b.slick.destroy()
			})
		}
	});
	window.define = e
});
define("play/utils", ["jquery"], function (e) {
	return {
		hideAddressBar: function () {
			e(function () {
				window.scrollTo(0, 1)
			})
		},
		orientationZoomFix: function () {
			if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
				var e = document.querySelector('meta[name="viewport"]');
				if (e) {
					e.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0";
					document.body.addEventListener("gesturestart", function () {
						e.content = "width=device-width, minimum-scale=0.25, maximum-scale=2.0"
					}, !1)
				}
			}
		},
		selectInputOnFocus: function () {
			e(".playJsFocusSelect").on("focus", function () {
				e(this).select()
			});
			e(".playJsFocusSelect").on("mouseup", function (e) {
				e.preventDefault()
			})
		},
		removePlaceholderOnFocus: function () {
			var t = e(".flow_js-input-placeholder");
			t.data("placeholder", t.attr("placeholder"));
			t.focusin(function () {
				e(this).attr("placeholder", "")
			});
			t.focusout(function () {
				e(this).attr("placeholder", e(this).data("placeholder"))
			})
		}
	}
});
! function () {
	var e = !1,
		t = /xyz/.test(function () {}) ? /\b_super\b/ : /.*/;
	this.Class = function () {};
	Class.extend = function (i) {
		function n() {
			!e && this.init && this.init.apply(this, arguments)
		}
		var s = this.prototype;
		e = !0;
		var r = new this;
		e = !1;
		for (var a in i) r[a] = "function" == typeof i[a] && "function" == typeof s[a] && t.test(i[a]) ? function (e, t) {
			return function () {
				var i = this._super;
				this._super = s[e];
				var n = t.apply(this, arguments);
				this._super = i;
				return n
			}
		}(a, i[a]) : i[a];
		n.prototype = r;
		n.prototype.constructor = n;
		n.extend = arguments.callee;
		return n
	}
}();
define("Class", function (e) {
	return function () {
		var t;
		return t || e.Class
	}
}(this));
define("svtlib-messagechannel/app/js/message_channel", ["Class"], function (e) {
	var t = [].slice;
	return e.extend({
		init: function () {
			this._cache = {};
			this._singles = {}
		},
		publish: function (e) {
			for (var t = [].splice.apply(arguments, [1, arguments.length - 1]), i = this._cache[e], n = i ? i.length : 0; n--;) i[n].callback.apply(i[n].context, t || []);
			for (var s = this._singles[e], r = s ? s.pop() : void 0; void 0 !== r;) {
				r.callback.apply(r.context, t || []);
				r = s.pop()
			}
		},
		subscribe: function (e, t, i) {
			this._cache[e] = this._cache[e] || [];
			this._cache[e].push(this._callbackContext(t, i));
			return this._cache[e].length - 1
		},
		unsubscribe: function (e, t) {
			this._cache.hasOwnProperty(e) && this._cache[e].length >= t - 1 && this._cache[e].splice(t, 1)
		},
		clean: function () {
			this._cache = {};
			this._singles = {};
			return this
		},
		once: function (e, t, i) {
			this._singles[e] = this._singles[e] || [];
			this._singles[e].push(this._callbackContext(t, i))
		},
		context: function (e) {
			for (var t, i = {}, n = ["subscribe", "once"], s = 0, r = n.length; r > s; s++) {
				t = n[s];
				i[t] = this._delegateTo(t, e)
			}
			return i
		},
		_delegateTo: function (e, i) {
			var n = this;
			return function () {
				var s = t.apply(arguments);
				s.push(i);
				return n[e].apply(n, s)
			}
		},
		_callbackContext: function (e, t) {
			return {
				callback: e,
				context: void 0 !== t ? t : window
			}
		}
	})
});
! function () {
	var e = null;
	define("svtlib-messagechannel/app/js/singleton", ["./message_channel"], function (t) {
		if (null !== e) return e;
		e = new t;
		return e
	})
}();
requirejs.config({
	shim: {
		Class: {
			exports: "Class"
		}
	},
	paths: {
		Class: "/bower_components/Class.js/Class"
	}
});
define("svtlib-messagechannel/app/js/require-config", ["svtlib-messagechannel/app/js/singleton"], function (e) {
	return e
});
define("svtlib-messagechannel", ["svtlib-messagechannel/app/js/require-config"], function (e) {
	return e
});
var Handlebars = {};
! function (e, t) {
	e.VERSION = "1.0.0";
	e.COMPILER_REVISION = 4;
	e.REVISION_CHANGES = {
		1: "<= 1.0.rc.2",
		2: "== 1.0.0-rc.3",
		3: "== 1.0.0-rc.4",
		4: ">= 1.0.0"
	};
	e.helpers = {};
	e.partials = {};
	var i = Object.prototype.toString,
		n = "[object Function]",
		s = "[object Object]";
	e.registerHelper = function (t, n, r) {
		if (i.call(t) === s) {
			if (r || n) throw new e.Exception("Arg not supported with multiple helpers");
			e.Utils.extend(this.helpers, t)
		} else {
			r && (n.not = r);
			this.helpers[t] = n
		}
	};
	e.registerPartial = function (t, n) {
		i.call(t) === s ? e.Utils.extend(this.partials, t) : this.partials[t] = n
	};
	e.registerHelper("helperMissing", function (e) {
		if (2 === arguments.length) return t;
		throw new Error("Missing helper: '" + e + "'")
	});
	e.registerHelper("blockHelperMissing", function (t, s) {
		var r = s.inverse || function () {},
			a = s.fn,
			o = i.call(t);
		o === n && (t = t.call(this));
		return t === !0 ? a(this) : t === !1 || null == t ? r(this) : "[object Array]" === o ? t.length > 0 ? e.helpers.each(t, s) : r(this) : a(t)
	});
	e.K = function () {};
	e.createFrame = Object.create || function (t) {
		e.K.prototype = t;
		var i = new e.K;
		e.K.prototype = null;
		return i
	};
	e.logger = {
		DEBUG: 0,
		INFO: 1,
		WARN: 2,
		ERROR: 3,
		level: 3,
		methodMap: {
			0: "debug",
			1: "info",
			2: "warn",
			3: "error"
		},
		log: function (t, i) {
			if (e.logger.level <= t) {
				var n = e.logger.methodMap[t];
				"undefined" != typeof console && console[n] && console[n].call(console, i)
			}
		}
	};
	e.log = function (t, i) {
		e.logger.log(t, i)
	};
	e.registerHelper("each", function (t, s) {
		var r, a = s.fn,
			o = s.inverse,
			l = 0,
			c = "",
			u = i.call(t);
		u === n && (t = t.call(this));
		s.data && (r = e.createFrame(s.data));
		if (t && "object" == typeof t)
			if (t instanceof Array)
				for (var d = t.length; d > l; l++) {
					r && (r.index = l);
					c += a(t[l], {
						data: r
					})
				} else
					for (var h in t)
						if (t.hasOwnProperty(h)) {
							r && (r.key = h);
							c += a(t[h], {
								data: r
							});
							l++
						}
		0 === l && (c = o(this));
		return c
	});
	e.registerHelper("if", function (t, s) {
		var r = i.call(t);
		r === n && (t = t.call(this));
		return !t || e.Utils.isEmpty(t) ? s.inverse(this) : s.fn(this)
	});
	e.registerHelper("unless", function (t, i) {
		return e.helpers["if"].call(this, t, {
			fn: i.inverse,
			inverse: i.fn
		})
	});
	e.registerHelper("with", function (t, s) {
		var r = i.call(t);
		r === n && (t = t.call(this));
		return e.Utils.isEmpty(t) ? void 0 : s.fn(t)
	});
	e.registerHelper("log", function (t, i) {
		var n = i.data && null != i.data.level ? parseInt(i.data.level, 10) : 1;
		e.log(n, t)
	});
	var r = function () {
		function e() {
			this.yy = {}
		}
		var t = {
				trace: function () {},
				yy: {},
				symbols_: {
					error: 2,
					root: 3,
					program: 4,
					EOF: 5,
					simpleInverse: 6,
					statements: 7,
					statement: 8,
					openInverse: 9,
					closeBlock: 10,
					openBlock: 11,
					mustache: 12,
					partial: 13,
					CONTENT: 14,
					COMMENT: 15,
					OPEN_BLOCK: 16,
					inMustache: 17,
					CLOSE: 18,
					OPEN_INVERSE: 19,
					OPEN_ENDBLOCK: 20,
					path: 21,
					OPEN: 22,
					OPEN_UNESCAPED: 23,
					CLOSE_UNESCAPED: 24,
					OPEN_PARTIAL: 25,
					partialName: 26,
					params: 27,
					hash: 28,
					dataName: 29,
					param: 30,
					STRING: 31,
					INTEGER: 32,
					BOOLEAN: 33,
					hashSegments: 34,
					hashSegment: 35,
					ID: 36,
					EQUALS: 37,
					DATA: 38,
					pathSegments: 39,
					SEP: 40,
					$accept: 0,
					$end: 1
				},
				terminals_: {
					2: "error",
					5: "EOF",
					14: "CONTENT",
					15: "COMMENT",
					16: "OPEN_BLOCK",
					18: "CLOSE",
					19: "OPEN_INVERSE",
					20: "OPEN_ENDBLOCK",
					22: "OPEN",
					23: "OPEN_UNESCAPED",
					24: "CLOSE_UNESCAPED",
					25: "OPEN_PARTIAL",
					31: "STRING",
					32: "INTEGER",
					33: "BOOLEAN",
					36: "ID",
					37: "EQUALS",
					38: "DATA",
					40: "SEP"
				},
				productions_: [0, [3, 2],
					[4, 2],
					[4, 3],
					[4, 2],
					[4, 1],
					[4, 1],
					[4, 0],
					[7, 1],
					[7, 2],
					[8, 3],
					[8, 3],
					[8, 1],
					[8, 1],
					[8, 1],
					[8, 1],
					[11, 3],
					[9, 3],
					[10, 3],
					[12, 3],
					[12, 3],
					[13, 3],
					[13, 4],
					[6, 2],
					[17, 3],
					[17, 2],
					[17, 2],
					[17, 1],
					[17, 1],
					[27, 2],
					[27, 1],
					[30, 1],
					[30, 1],
					[30, 1],
					[30, 1],
					[30, 1],
					[28, 1],
					[34, 2],
					[34, 1],
					[35, 3],
					[35, 3],
					[35, 3],
					[35, 3],
					[35, 3],
					[26, 1],
					[26, 1],
					[26, 1],
					[29, 2],
					[21, 1],
					[39, 3],
					[39, 1]
				],
				performAction: function (e, t, i, n, s, r) {
					var a = r.length - 1;
					switch (s) {
					case 1:
						return r[a - 1];
					case 2:
						this.$ = new n.ProgramNode([], r[a]);
						break;
					case 3:
						this.$ = new n.ProgramNode(r[a - 2], r[a]);
						break;
					case 4:
						this.$ = new n.ProgramNode(r[a - 1], []);
						break;
					case 5:
						this.$ = new n.ProgramNode(r[a]);
						break;
					case 6:
						this.$ = new n.ProgramNode([], []);
						break;
					case 7:
						this.$ = new n.ProgramNode([]);
						break;
					case 8:
						this.$ = [r[a]];
						break;
					case 9:
						r[a - 1].push(r[a]);
						this.$ = r[a - 1];
						break;
					case 10:
						this.$ = new n.BlockNode(r[a - 2], r[a - 1].inverse, r[a - 1], r[a]);
						break;
					case 11:
						this.$ = new n.BlockNode(r[a - 2], r[a - 1], r[a - 1].inverse, r[a]);
						break;
					case 12:
						this.$ = r[a];
						break;
					case 13:
						this.$ = r[a];
						break;
					case 14:
						this.$ = new n.ContentNode(r[a]);
						break;
					case 15:
						this.$ = new n.CommentNode(r[a]);
						break;
					case 16:
						this.$ = new n.MustacheNode(r[a - 1][0], r[a - 1][1]);
						break;
					case 17:
						this.$ = new n.MustacheNode(r[a - 1][0], r[a - 1][1]);
						break;
					case 18:
						this.$ = r[a - 1];
						break;
					case 19:
						this.$ = new n.MustacheNode(r[a - 1][0], r[a - 1][1], "&" === r[a - 2][2]);
						break;
					case 20:
						this.$ = new n.MustacheNode(r[a - 1][0], r[a - 1][1], !0);
						break;
					case 21:
						this.$ = new n.PartialNode(r[a - 1]);
						break;
					case 22:
						this.$ = new n.PartialNode(r[a - 2], r[a - 1]);
						break;
					case 23:
						break;
					case 24:
						this.$ = [
							[r[a - 2]].concat(r[a - 1]), r[a]
						];
						break;
					case 25:
						this.$ = [
							[r[a - 1]].concat(r[a]), null
						];
						break;
					case 26:
						this.$ = [
							[r[a - 1]], r[a]
						];
						break;
					case 27:
						this.$ = [
							[r[a]], null
						];
						break;
					case 28:
						this.$ = [
							[r[a]], null
						];
						break;
					case 29:
						r[a - 1].push(r[a]);
						this.$ = r[a - 1];
						break;
					case 30:
						this.$ = [r[a]];
						break;
					case 31:
						this.$ = r[a];
						break;
					case 32:
						this.$ = new n.StringNode(r[a]);
						break;
					case 33:
						this.$ = new n.IntegerNode(r[a]);
						break;
					case 34:
						this.$ = new n.BooleanNode(r[a]);
						break;
					case 35:
						this.$ = r[a];
						break;
					case 36:
						this.$ = new n.HashNode(r[a]);
						break;
					case 37:
						r[a - 1].push(r[a]);
						this.$ = r[a - 1];
						break;
					case 38:
						this.$ = [r[a]];
						break;
					case 39:
						this.$ = [r[a - 2], r[a]];
						break;
					case 40:
						this.$ = [r[a - 2], new n.StringNode(r[a])];
						break;
					case 41:
						this.$ = [r[a - 2], new n.IntegerNode(r[a])];
						break;
					case 42:
						this.$ = [r[a - 2], new n.BooleanNode(r[a])];
						break;
					case 43:
						this.$ = [r[a - 2], r[a]];
						break;
					case 44:
						this.$ = new n.PartialNameNode(r[a]);
						break;
					case 45:
						this.$ = new n.PartialNameNode(new n.StringNode(r[a]));
						break;
					case 46:
						this.$ = new n.PartialNameNode(new n.IntegerNode(r[a]));
						break;
					case 47:
						this.$ = new n.DataNode(r[a]);
						break;
					case 48:
						this.$ = new n.IdNode(r[a]);
						break;
					case 49:
						r[a - 2].push({
							part: r[a],
							separator: r[a - 1]
						});
						this.$ = r[a - 2];
						break;
					case 50:
						this.$ = [{
							part: r[a]
						}]
					}
				},
				table: [{
					3: 1,
					4: 2,
					5: [2, 7],
					6: 3,
					7: 4,
					8: 6,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 5],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					1: [3]
				}, {
					5: [1, 17]
				}, {
					5: [2, 6],
					7: 18,
					8: 6,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 19],
					20: [2, 6],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					5: [2, 5],
					6: 20,
					8: 21,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 5],
					20: [2, 5],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					17: 23,
					18: [1, 22],
					21: 24,
					29: 25,
					36: [1, 28],
					38: [1, 27],
					39: 26
				}, {
					5: [2, 8],
					14: [2, 8],
					15: [2, 8],
					16: [2, 8],
					19: [2, 8],
					20: [2, 8],
					22: [2, 8],
					23: [2, 8],
					25: [2, 8]
				}, {
					4: 29,
					6: 3,
					7: 4,
					8: 6,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 5],
					20: [2, 7],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					4: 30,
					6: 3,
					7: 4,
					8: 6,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 5],
					20: [2, 7],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					5: [2, 12],
					14: [2, 12],
					15: [2, 12],
					16: [2, 12],
					19: [2, 12],
					20: [2, 12],
					22: [2, 12],
					23: [2, 12],
					25: [2, 12]
				}, {
					5: [2, 13],
					14: [2, 13],
					15: [2, 13],
					16: [2, 13],
					19: [2, 13],
					20: [2, 13],
					22: [2, 13],
					23: [2, 13],
					25: [2, 13]
				}, {
					5: [2, 14],
					14: [2, 14],
					15: [2, 14],
					16: [2, 14],
					19: [2, 14],
					20: [2, 14],
					22: [2, 14],
					23: [2, 14],
					25: [2, 14]
				}, {
					5: [2, 15],
					14: [2, 15],
					15: [2, 15],
					16: [2, 15],
					19: [2, 15],
					20: [2, 15],
					22: [2, 15],
					23: [2, 15],
					25: [2, 15]
				}, {
					17: 31,
					21: 24,
					29: 25,
					36: [1, 28],
					38: [1, 27],
					39: 26
				}, {
					17: 32,
					21: 24,
					29: 25,
					36: [1, 28],
					38: [1, 27],
					39: 26
				}, {
					17: 33,
					21: 24,
					29: 25,
					36: [1, 28],
					38: [1, 27],
					39: 26
				}, {
					21: 35,
					26: 34,
					31: [1, 36],
					32: [1, 37],
					36: [1, 28],
					39: 26
				}, {
					1: [2, 1]
				}, {
					5: [2, 2],
					8: 21,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 19],
					20: [2, 2],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					17: 23,
					21: 24,
					29: 25,
					36: [1, 28],
					38: [1, 27],
					39: 26
				}, {
					5: [2, 4],
					7: 38,
					8: 6,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 19],
					20: [2, 4],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					5: [2, 9],
					14: [2, 9],
					15: [2, 9],
					16: [2, 9],
					19: [2, 9],
					20: [2, 9],
					22: [2, 9],
					23: [2, 9],
					25: [2, 9]
				}, {
					5: [2, 23],
					14: [2, 23],
					15: [2, 23],
					16: [2, 23],
					19: [2, 23],
					20: [2, 23],
					22: [2, 23],
					23: [2, 23],
					25: [2, 23]
				}, {
					18: [1, 39]
				}, {
					18: [2, 27],
					21: 44,
					24: [2, 27],
					27: 40,
					28: 41,
					29: 48,
					30: 42,
					31: [1, 45],
					32: [1, 46],
					33: [1, 47],
					34: 43,
					35: 49,
					36: [1, 50],
					38: [1, 27],
					39: 26
				}, {
					18: [2, 28],
					24: [2, 28]
				}, {
					18: [2, 48],
					24: [2, 48],
					31: [2, 48],
					32: [2, 48],
					33: [2, 48],
					36: [2, 48],
					38: [2, 48],
					40: [1, 51]
				}, {
					21: 52,
					36: [1, 28],
					39: 26
				}, {
					18: [2, 50],
					24: [2, 50],
					31: [2, 50],
					32: [2, 50],
					33: [2, 50],
					36: [2, 50],
					38: [2, 50],
					40: [2, 50]
				}, {
					10: 53,
					20: [1, 54]
				}, {
					10: 55,
					20: [1, 54]
				}, {
					18: [1, 56]
				}, {
					18: [1, 57]
				}, {
					24: [1, 58]
				}, {
					18: [1, 59],
					21: 60,
					36: [1, 28],
					39: 26
				}, {
					18: [2, 44],
					36: [2, 44]
				}, {
					18: [2, 45],
					36: [2, 45]
				}, {
					18: [2, 46],
					36: [2, 46]
				}, {
					5: [2, 3],
					8: 21,
					9: 7,
					11: 8,
					12: 9,
					13: 10,
					14: [1, 11],
					15: [1, 12],
					16: [1, 13],
					19: [1, 19],
					20: [2, 3],
					22: [1, 14],
					23: [1, 15],
					25: [1, 16]
				}, {
					14: [2, 17],
					15: [2, 17],
					16: [2, 17],
					19: [2, 17],
					20: [2, 17],
					22: [2, 17],
					23: [2, 17],
					25: [2, 17]
				}, {
					18: [2, 25],
					21: 44,
					24: [2, 25],
					28: 61,
					29: 48,
					30: 62,
					31: [1, 45],
					32: [1, 46],
					33: [1, 47],
					34: 43,
					35: 49,
					36: [1, 50],
					38: [1, 27],
					39: 26
				}, {
					18: [2, 26],
					24: [2, 26]
				}, {
					18: [2, 30],
					24: [2, 30],
					31: [2, 30],
					32: [2, 30],
					33: [2, 30],
					36: [2, 30],
					38: [2, 30]
				}, {
					18: [2, 36],
					24: [2, 36],
					35: 63,
					36: [1, 64]
				}, {
					18: [2, 31],
					24: [2, 31],
					31: [2, 31],
					32: [2, 31],
					33: [2, 31],
					36: [2, 31],
					38: [2, 31]
				}, {
					18: [2, 32],
					24: [2, 32],
					31: [2, 32],
					32: [2, 32],
					33: [2, 32],
					36: [2, 32],
					38: [2, 32]
				}, {
					18: [2, 33],
					24: [2, 33],
					31: [2, 33],
					32: [2, 33],
					33: [2, 33],
					36: [2, 33],
					38: [2, 33]
				}, {
					18: [2, 34],
					24: [2, 34],
					31: [2, 34],
					32: [2, 34],
					33: [2, 34],
					36: [2, 34],
					38: [2, 34]
				}, {
					18: [2, 35],
					24: [2, 35],
					31: [2, 35],
					32: [2, 35],
					33: [2, 35],
					36: [2, 35],
					38: [2, 35]
				}, {
					18: [2, 38],
					24: [2, 38],
					36: [2, 38]
				}, {
					18: [2, 50],
					24: [2, 50],
					31: [2, 50],
					32: [2, 50],
					33: [2, 50],
					36: [2, 50],
					37: [1, 65],
					38: [2, 50],
					40: [2, 50]
				}, {
					36: [1, 66]
				}, {
					18: [2, 47],
					24: [2, 47],
					31: [2, 47],
					32: [2, 47],
					33: [2, 47],
					36: [2, 47],
					38: [2, 47]
				}, {
					5: [2, 10],
					14: [2, 10],
					15: [2, 10],
					16: [2, 10],
					19: [2, 10],
					20: [2, 10],
					22: [2, 10],
					23: [2, 10],
					25: [2, 10]
				}, {
					21: 67,
					36: [1, 28],
					39: 26
				}, {
					5: [2, 11],
					14: [2, 11],
					15: [2, 11],
					16: [2, 11],
					19: [2, 11],
					20: [2, 11],
					22: [2, 11],
					23: [2, 11],
					25: [2, 11]
				}, {
					14: [2, 16],
					15: [2, 16],
					16: [2, 16],
					19: [2, 16],
					20: [2, 16],
					22: [2, 16],
					23: [2, 16],
					25: [2, 16]
				}, {
					5: [2, 19],
					14: [2, 19],
					15: [2, 19],
					16: [2, 19],
					19: [2, 19],
					20: [2, 19],
					22: [2, 19],
					23: [2, 19],
					25: [2, 19]
				}, {
					5: [2, 20],
					14: [2, 20],
					15: [2, 20],
					16: [2, 20],
					19: [2, 20],
					20: [2, 20],
					22: [2, 20],
					23: [2, 20],
					25: [2, 20]
				}, {
					5: [2, 21],
					14: [2, 21],
					15: [2, 21],
					16: [2, 21],
					19: [2, 21],
					20: [2, 21],
					22: [2, 21],
					23: [2, 21],
					25: [2, 21]
				}, {
					18: [1, 68]
				}, {
					18: [2, 24],
					24: [2, 24]
				}, {
					18: [2, 29],
					24: [2, 29],
					31: [2, 29],
					32: [2, 29],
					33: [2, 29],
					36: [2, 29],
					38: [2, 29]
				}, {
					18: [2, 37],
					24: [2, 37],
					36: [2, 37]
				}, {
					37: [1, 65]
				}, {
					21: 69,
					29: 73,
					31: [1, 70],
					32: [1, 71],
					33: [1, 72],
					36: [1, 28],
					38: [1, 27],
					39: 26
				}, {
					18: [2, 49],
					24: [2, 49],
					31: [2, 49],
					32: [2, 49],
					33: [2, 49],
					36: [2, 49],
					38: [2, 49],
					40: [2, 49]
				}, {
					18: [1, 74]
				}, {
					5: [2, 22],
					14: [2, 22],
					15: [2, 22],
					16: [2, 22],
					19: [2, 22],
					20: [2, 22],
					22: [2, 22],
					23: [2, 22],
					25: [2, 22]
				}, {
					18: [2, 39],
					24: [2, 39],
					36: [2, 39]
				}, {
					18: [2, 40],
					24: [2, 40],
					36: [2, 40]
				}, {
					18: [2, 41],
					24: [2, 41],
					36: [2, 41]
				}, {
					18: [2, 42],
					24: [2, 42],
					36: [2, 42]
				}, {
					18: [2, 43],
					24: [2, 43],
					36: [2, 43]
				}, {
					5: [2, 18],
					14: [2, 18],
					15: [2, 18],
					16: [2, 18],
					19: [2, 18],
					20: [2, 18],
					22: [2, 18],
					23: [2, 18],
					25: [2, 18]
				}],
				defaultActions: {
					17: [2, 1]
				},
				parseError: function (e) {
					throw new Error(e)
				},
				parse: function (e) {
					function t() {
						var e;
						e = i.lexer.lex() || 1;
						"number" != typeof e && (e = i.symbols_[e] || e);
						return e
					}
					var i = this,
						n = [0],
						s = [null],
						r = [],
						a = this.table,
						o = "",
						l = 0,
						c = 0,
						u = 0;
					this.lexer.setInput(e);
					this.lexer.yy = this.yy;
					this.yy.lexer = this.lexer;
					this.yy.parser = this;
					"undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
					var d = this.lexer.yylloc;
					r.push(d);
					var h = this.lexer.options && this.lexer.options.ranges;
					"function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
					for (var p, f, v, y, m, g, _, b, w, x = {};;) {
						v = n[n.length - 1];
						if (this.defaultActions[v]) y = this.defaultActions[v];
						else {
							(null === p || "undefined" == typeof p) && (p = t());
							y = a[v] && a[v][p]
						} if ("undefined" == typeof y || !y.length || !y[0]) {
							var C = "";
							if (!u) {
								w = [];
								for (g in a[v]) this.terminals_[g] && g > 2 && w.push("'" + this.terminals_[g] + "'");
								C = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[p] || p) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'");
								this.parseError(C, {
									text: this.lexer.match,
									token: this.terminals_[p] || p,
									line: this.lexer.yylineno,
									loc: d,
									expected: w
								})
							}
						}
						if (y[0] instanceof Array && y.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + v + ", token: " + p);
						switch (y[0]) {
						case 1:
							n.push(p);
							s.push(this.lexer.yytext);
							r.push(this.lexer.yylloc);
							n.push(y[1]);
							p = null;
							if (f) {
								p = f;
								f = null
							} else {
								c = this.lexer.yyleng;
								o = this.lexer.yytext;
								l = this.lexer.yylineno;
								d = this.lexer.yylloc;
								u > 0 && u--
							}
							break;
						case 2:
							_ = this.productions_[y[1]][1];
							x.$ = s[s.length - _];
							x._$ = {
								first_line: r[r.length - (_ || 1)].first_line,
								last_line: r[r.length - 1].last_line,
								first_column: r[r.length - (_ || 1)].first_column,
								last_column: r[r.length - 1].last_column
							};
							h && (x._$.range = [r[r.length - (_ || 1)].range[0], r[r.length - 1].range[1]]);
							m = this.performAction.call(x, o, c, l, this.yy, y[1], s, r);
							if ("undefined" != typeof m) return m;
							if (_) {
								n = n.slice(0, 2 * -1 * _);
								s = s.slice(0, -1 * _);
								r = r.slice(0, -1 * _)
							}
							n.push(this.productions_[y[1]][0]);
							s.push(x.$);
							r.push(x._$);
							b = a[n[n.length - 2]][n[n.length - 1]];
							n.push(b);
							break;
						case 3:
							return !0
						}
					}
					return !0
				}
			},
			i = function () {
				var e = {
					EOF: 1,
					parseError: function (e, t) {
						if (!this.yy.parser) throw new Error(e);
						this.yy.parser.parseError(e, t)
					},
					setInput: function (e) {
						this._input = e;
						this._more = this._less = this.done = !1;
						this.yylineno = this.yyleng = 0;
						this.yytext = this.matched = this.match = "";
						this.conditionStack = ["INITIAL"];
						this.yylloc = {
							first_line: 1,
							first_column: 0,
							last_line: 1,
							last_column: 0
						};
						this.options.ranges && (this.yylloc.range = [0, 0]);
						this.offset = 0;
						return this
					},
					input: function () {
						var e = this._input[0];
						this.yytext += e;
						this.yyleng++;
						this.offset++;
						this.match += e;
						this.matched += e;
						var t = e.match(/(?:\r\n?|\n).*/g);
						if (t) {
							this.yylineno++;
							this.yylloc.last_line++
						} else this.yylloc.last_column++;
						this.options.ranges && this.yylloc.range[1]++;
						this._input = this._input.slice(1);
						return e
					},
					unput: function (e) {
						var t = e.length,
							i = e.split(/(?:\r\n?|\n)/g);
						this._input = e + this._input;
						this.yytext = this.yytext.substr(0, this.yytext.length - t - 1);
						this.offset -= t;
						var n = this.match.split(/(?:\r\n?|\n)/g);
						this.match = this.match.substr(0, this.match.length - 1);
						this.matched = this.matched.substr(0, this.matched.length - 1);
						i.length - 1 && (this.yylineno -= i.length - 1);
						var s = this.yylloc.range;
						this.yylloc = {
							first_line: this.yylloc.first_line,
							last_line: this.yylineno + 1,
							first_column: this.yylloc.first_column,
							last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - t
						};
						this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - t]);
						return this
					},
					more: function () {
						this._more = !0;
						return this
					},
					less: function (e) {
						this.unput(this.match.slice(e))
					},
					pastInput: function () {
						var e = this.matched.substr(0, this.matched.length - this.match.length);
						return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
					},
					upcomingInput: function () {
						var e = this.match;
						e.length < 20 && (e += this._input.substr(0, 20 - e.length));
						return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
					},
					showPosition: function () {
						var e = this.pastInput(),
							t = new Array(e.length + 1).join("-");
						return e + this.upcomingInput() + "\n" + t + "^"
					},
					next: function () {
						if (this.done) return this.EOF;
						this._input || (this.done = !0);
						var e, t, i, n, s;
						if (!this._more) {
							this.yytext = "";
							this.match = ""
						}
						for (var r = this._currentRules(), a = 0; a < r.length; a++) {
							i = this._input.match(this.rules[r[a]]);
							if (i && (!t || i[0].length > t[0].length)) {
								t = i;
								n = a;
								if (!this.options.flex) break
							}
						}
						if (t) {
							s = t[0].match(/(?:\r\n?|\n).*/g);
							s && (this.yylineno += s.length);
							this.yylloc = {
								first_line: this.yylloc.last_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.last_column,
								last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
							};
							this.yytext += t[0];
							this.match += t[0];
							this.matches = t;
							this.yyleng = this.yytext.length;
							this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]);
							this._more = !1;
							this._input = this._input.slice(t[0].length);
							this.matched += t[0];
							e = this.performAction.call(this, this.yy, this, r[n], this.conditionStack[this.conditionStack.length - 1]);
							this.done && this._input && (this.done = !1);
							return e ? e : void 0
						}
						return "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
							text: "",
							token: null,
							line: this.yylineno
						})
					},
					lex: function () {
						var e = this.next();
						return "undefined" != typeof e ? e : this.lex()
					},
					begin: function (e) {
						this.conditionStack.push(e)
					},
					popState: function () {
						return this.conditionStack.pop()
					},
					_currentRules: function () {
						return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
					},
					topState: function () {
						return this.conditionStack[this.conditionStack.length - 2]
					},
					pushState: function (e) {
						this.begin(e)
					}
				};
				e.options = {};
				e.performAction = function (e, t, i, n) {
					switch (i) {
					case 0:
						t.yytext = "\\";
						return 14;
					case 1:
						"\\" !== t.yytext.slice(-1) && this.begin("mu");
						"\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1), this.begin("emu"));
						if (t.yytext) return 14;
						break;
					case 2:
						return 14;
					case 3:
						"\\" !== t.yytext.slice(-1) && this.popState();
						"\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1));
						return 14;
					case 4:
						t.yytext = t.yytext.substr(0, t.yyleng - 4);
						this.popState();
						return 15;
					case 5:
						return 25;
					case 6:
						return 16;
					case 7:
						return 20;
					case 8:
						return 19;
					case 9:
						return 19;
					case 10:
						return 23;
					case 11:
						return 22;
					case 12:
						this.popState();
						this.begin("com");
						break;
					case 13:
						t.yytext = t.yytext.substr(3, t.yyleng - 5);
						this.popState();
						return 15;
					case 14:
						return 22;
					case 15:
						return 37;
					case 16:
						return 36;
					case 17:
						return 36;
					case 18:
						return 40;
					case 19:
						break;
					case 20:
						this.popState();
						return 24;
					case 21:
						this.popState();
						return 18;
					case 22:
						t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"');
						return 31;
					case 23:
						t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\'/g, "'");
						return 31;
					case 24:
						return 38;
					case 25:
						return 33;
					case 26:
						return 33;
					case 27:
						return 32;
					case 28:
						return 36;
					case 29:
						t.yytext = t.yytext.substr(1, t.yyleng - 2);
						return 36;
					case 30:
						return "INVALID";
					case 31:
						return 5
					}
				};
				e.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}\/ ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
				e.conditions = {
					mu: {
						rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
						inclusive: !1
					},
					emu: {
						rules: [3],
						inclusive: !1
					},
					com: {
						rules: [4],
						inclusive: !1
					},
					INITIAL: {
						rules: [0, 1, 2, 31],
						inclusive: !0
					}
				};
				return e
			}();
		t.lexer = i;
		e.prototype = t;
		t.Parser = e;
		return new e
	}();
	e.Parser = r;
	e.parse = function (t) {
		if (t.constructor === e.AST.ProgramNode) return t;
		e.Parser.yy = e.AST;
		return e.Parser.parse(t)
	};
	e.AST = {};
	e.AST.ProgramNode = function (t, i) {
		this.type = "program";
		this.statements = t;
		i && (this.inverse = new e.AST.ProgramNode(i))
	};
	e.AST.MustacheNode = function (e, t, i) {
		this.type = "mustache";
		this.escaped = !i;
		this.hash = t;
		var n = this.id = e[0],
			s = this.params = e.slice(1),
			r = this.eligibleHelper = n.isSimple;
		this.isHelper = r && (s.length || t)
	};
	e.AST.PartialNode = function (e, t) {
		this.type = "partial";
		this.partialName = e;
		this.context = t
	};
	e.AST.BlockNode = function (t, i, n, s) {
		var r = function (t, i) {
			if (t.original !== i.original) throw new e.Exception(t.original + " doesn't match " + i.original)
		};
		r(t.id, s);
		this.type = "block";
		this.mustache = t;
		this.program = i;
		this.inverse = n;
		this.inverse && !this.program && (this.isInverse = !0)
	};
	e.AST.ContentNode = function (e) {
		this.type = "content";
		this.string = e
	};
	e.AST.HashNode = function (e) {
		this.type = "hash";
		this.pairs = e
	};
	e.AST.IdNode = function (t) {
		this.type = "ID";
		for (var i = "", n = [], s = 0, r = 0, a = t.length; a > r; r++) {
			var o = t[r].part;
			i += (t[r].separator || "") + o;
			if (".." === o || "." === o || "this" === o) {
				if (n.length > 0) throw new e.Exception("Invalid path: " + i);
				".." === o ? s++ : this.isScoped = !0
			} else n.push(o)
		}
		this.original = i;
		this.parts = n;
		this.string = n.join(".");
		this.depth = s;
		this.isSimple = 1 === t.length && !this.isScoped && 0 === s;
		this.stringModeValue = this.string
	};
	e.AST.PartialNameNode = function (e) {
		this.type = "PARTIAL_NAME";
		this.name = e.original
	};
	e.AST.DataNode = function (e) {
		this.type = "DATA";
		this.id = e
	};
	e.AST.StringNode = function (e) {
		this.type = "STRING";
		this.original = this.string = this.stringModeValue = e
	};
	e.AST.IntegerNode = function (e) {
		this.type = "INTEGER";
		this.original = this.integer = e;
		this.stringModeValue = Number(e)
	};
	e.AST.BooleanNode = function (e) {
		this.type = "BOOLEAN";
		this.bool = e;
		this.stringModeValue = "true" === e
	};
	e.AST.CommentNode = function (e) {
		this.type = "comment";
		this.comment = e
	};
	var a = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
	e.Exception = function () {
		for (var e = Error.prototype.constructor.apply(this, arguments), t = 0; t < a.length; t++) this[a[t]] = e[a[t]]
	};
	e.Exception.prototype = new Error;
	e.SafeString = function (e) {
		this.string = e
	};
	e.SafeString.prototype.toString = function () {
		return this.string.toString()
	};
	var o = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		l = /[&<>"'`]/g,
		c = /[&<>"'`]/,
		u = function (e) {
			return o[e] || "&amp;"
		};
	e.Utils = {
		extend: function (e, t) {
			for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
		},
		escapeExpression: function (t) {
			if (t instanceof e.SafeString) return t.toString();
			if (null == t || t === !1) return "";
			t = t.toString();
			return c.test(t) ? t.replace(l, u) : t
		},
		isEmpty: function (e) {
			return e || 0 === e ? "[object Array]" === i.call(e) && 0 === e.length ? !0 : !1 : !0
		}
	};
	var d = e.Compiler = function () {},
		h = e.JavaScriptCompiler = function () {};
	d.prototype = {
		compiler: d,
		disassemble: function () {
			for (var e, t, i, n = this.opcodes, s = [], r = 0, a = n.length; a > r; r++) {
				e = n[r];
				if ("DECLARE" === e.opcode) s.push("DECLARE " + e.name + "=" + e.value);
				else {
					t = [];
					for (var o = 0; o < e.args.length; o++) {
						i = e.args[o];
						"string" == typeof i && (i = '"' + i.replace("\n", "\\n") + '"');
						t.push(i)
					}
					s.push(e.opcode + " " + t.join(" "))
				}
			}
			return s.join("\n")
		},
		equals: function (e) {
			var t = this.opcodes.length;
			if (e.opcodes.length !== t) return !1;
			for (var i = 0; t > i; i++) {
				var n = this.opcodes[i],
					s = e.opcodes[i];
				if (n.opcode !== s.opcode || n.args.length !== s.args.length) return !1;
				for (var r = 0; r < n.args.length; r++)
					if (n.args[r] !== s.args[r]) return !1
			}
			t = this.children.length;
			if (e.children.length !== t) return !1;
			for (i = 0; t > i; i++)
				if (!this.children[i].equals(e.children[i])) return !1;
			return !0
		},
		guid: 0,
		compile: function (e, t) {
			this.children = [];
			this.depths = {
				list: []
			};
			this.options = t;
			var i = this.options.knownHelpers;
			this.options.knownHelpers = {
				helperMissing: !0,
				blockHelperMissing: !0,
				each: !0,
				"if": !0,
				unless: !0,
				"with": !0,
				log: !0
			};
			if (i)
				for (var n in i) this.options.knownHelpers[n] = i[n];
			return this.program(e)
		},
		accept: function (e) {
			return this[e.type](e)
		},
		program: function (e) {
			var t, i = e.statements;
			this.opcodes = [];
			for (var n = 0, s = i.length; s > n; n++) {
				t = i[n];
				this[t.type](t)
			}
			this.isSimple = 1 === s;
			this.depths.list = this.depths.list.sort(function (e, t) {
				return e - t
			});
			return this
		},
		compileProgram: function (e) {
			var t, i = (new this.compiler).compile(e, this.options),
				n = this.guid++;
			this.usePartial = this.usePartial || i.usePartial;
			this.children[n] = i;
			for (var s = 0, r = i.depths.list.length; r > s; s++) {
				t = i.depths.list[s];
				2 > t || this.addDepth(t - 1)
			}
			return n
		},
		block: function (e) {
			var t = e.mustache,
				i = e.program,
				n = e.inverse;
			i && (i = this.compileProgram(i));
			n && (n = this.compileProgram(n));
			var s = this.classifyMustache(t);
			if ("helper" === s) this.helperMustache(t, i, n);
			else if ("simple" === s) {
				this.simpleMustache(t);
				this.opcode("pushProgram", i);
				this.opcode("pushProgram", n);
				this.opcode("emptyHash");
				this.opcode("blockValue")
			} else {
				this.ambiguousMustache(t, i, n);
				this.opcode("pushProgram", i);
				this.opcode("pushProgram", n);
				this.opcode("emptyHash");
				this.opcode("ambiguousBlockValue")
			}
			this.opcode("append")
		},
		hash: function (e) {
			var t, i, n = e.pairs;
			this.opcode("pushHash");
			for (var s = 0, r = n.length; r > s; s++) {
				t = n[s];
				i = t[1];
				if (this.options.stringParams) {
					i.depth && this.addDepth(i.depth);
					this.opcode("getContext", i.depth || 0);
					this.opcode("pushStringParam", i.stringModeValue, i.type)
				} else this.accept(i);
				this.opcode("assignToHash", t[0])
			}
			this.opcode("popHash")
		},
		partial: function (e) {
			var t = e.partialName;
			this.usePartial = !0;
			e.context ? this.ID(e.context) : this.opcode("push", "depth0");
			this.opcode("invokePartial", t.name);
			this.opcode("append")
		},
		content: function (e) {
			this.opcode("appendContent", e.string)
		},
		mustache: function (e) {
			var t = this.options,
				i = this.classifyMustache(e);
			"simple" === i ? this.simpleMustache(e) : "helper" === i ? this.helperMustache(e) : this.ambiguousMustache(e);
			e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
		},
		ambiguousMustache: function (e, t, i) {
			var n = e.id,
				s = n.parts[0],
				r = null != t || null != i;
			this.opcode("getContext", n.depth);
			this.opcode("pushProgram", t);
			this.opcode("pushProgram", i);
			this.opcode("invokeAmbiguous", s, r)
		},
		simpleMustache: function (e) {
			var t = e.id;
			if ("DATA" === t.type) this.DATA(t);
			else if (t.parts.length) this.ID(t);
			else {
				this.addDepth(t.depth);
				this.opcode("getContext", t.depth);
				this.opcode("pushContext")
			}
			this.opcode("resolvePossibleLambda")
		},
		helperMustache: function (e, t, i) {
			var n = this.setupFullMustacheParams(e, t, i),
				s = e.id.parts[0];
			if (this.options.knownHelpers[s]) this.opcode("invokeKnownHelper", n.length, s);
			else {
				if (this.options.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + s);
				this.opcode("invokeHelper", n.length, s)
			}
		},
		ID: function (e) {
			this.addDepth(e.depth);
			this.opcode("getContext", e.depth);
			var t = e.parts[0];
			t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
			for (var i = 1, n = e.parts.length; n > i; i++) this.opcode("lookup", e.parts[i])
		},
		DATA: function (t) {
			this.options.data = !0;
			if (t.id.isScoped || t.id.depth) throw new e.Exception("Scoped data references are not supported: " + t.original);
			this.opcode("lookupData");
			for (var i = t.id.parts, n = 0, s = i.length; s > n; n++) this.opcode("lookup", i[n])
		},
		STRING: function (e) {
			this.opcode("pushString", e.string)
		},
		INTEGER: function (e) {
			this.opcode("pushLiteral", e.integer)
		},
		BOOLEAN: function (e) {
			this.opcode("pushLiteral", e.bool)
		},
		comment: function () {},
		opcode: function (e) {
			this.opcodes.push({
				opcode: e,
				args: [].slice.call(arguments, 1)
			})
		},
		declare: function (e, t) {
			this.opcodes.push({
				opcode: "DECLARE",
				name: e,
				value: t
			})
		},
		addDepth: function (e) {
			if (isNaN(e)) throw new Error("EWOT");
			if (0 !== e && !this.depths[e]) {
				this.depths[e] = !0;
				this.depths.list.push(e)
			}
		},
		classifyMustache: function (e) {
			var t = e.isHelper,
				i = e.eligibleHelper,
				n = this.options;
			if (i && !t) {
				var s = e.id.parts[0];
				n.knownHelpers[s] ? t = !0 : n.knownHelpersOnly && (i = !1)
			}
			return t ? "helper" : i ? "ambiguous" : "simple"
		},
		pushParams: function (e) {
			for (var t, i = e.length; i--;) {
				t = e[i];
				if (this.options.stringParams) {
					t.depth && this.addDepth(t.depth);
					this.opcode("getContext", t.depth || 0);
					this.opcode("pushStringParam", t.stringModeValue, t.type)
				} else this[t.type](t)
			}
		},
		setupMustacheParams: function (e) {
			var t = e.params;
			this.pushParams(t);
			e.hash ? this.hash(e.hash) : this.opcode("emptyHash");
			return t
		},
		setupFullMustacheParams: function (e, t, i) {
			var n = e.params;
			this.pushParams(n);
			this.opcode("pushProgram", t);
			this.opcode("pushProgram", i);
			e.hash ? this.hash(e.hash) : this.opcode("emptyHash");
			return n
		}
	};
	var p = function (e) {
		this.value = e
	};
	h.prototype = {
		nameLookup: function (e, t) {
			return /^[0-9]+$/.test(t) ? e + "[" + t + "]" : h.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
		},
		appendToBuffer: function (e) {
			return this.environment.isSimple ? "return " + e + ";" : {
				appendToBuffer: !0,
				content: e,
				toString: function () {
					return "buffer += " + e + ";"
				}
			}
		},
		initializeBuffer: function () {
			return this.quotedString("")
		},
		namespace: "Handlebars",
		compile: function (t, i, n, s) {
			this.environment = t;
			this.options = i || {};
			e.log(e.logger.DEBUG, this.environment.disassemble() + "\n\n");
			this.name = this.environment.name;
			this.isChild = !!n;
			this.context = n || {
				programs: [],
				environments: [],
				aliases: {}
			};
			this.preamble();
			this.stackSlot = 0;
			this.stackVars = [];
			this.registers = {
				list: []
			};
			this.compileStack = [];
			this.inlineStack = [];
			this.compileChildren(t, i);
			var r, a = t.opcodes;
			this.i = 0;
			for (m = a.length; this.i < m; this.i++) {
				r = a[this.i];
				"DECLARE" === r.opcode ? this[r.name] = r.value : this[r.opcode].apply(this, r.args)
			}
			return this.createFunctionContext(s)
		},
		nextOpcode: function () {
			var e = this.environment.opcodes;
			return e[this.i + 1]
		},
		eat: function () {
			this.i = this.i + 1
		},
		preamble: function () {
			var e = [];
			if (this.isChild) e.push("");
			else {
				var t = this.namespace,
					i = "helpers = this.merge(helpers, " + t + ".helpers);";
				this.environment.usePartial && (i = i + " partials = this.merge(partials, " + t + ".partials);");
				this.options.data && (i += " data = data || {};");
				e.push(i)
			}
			this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer());
			this.lastContext = 0;
			this.source = e
		},
		createFunctionContext: function (t) {
			var i = this.stackVars.concat(this.registers.list);
			i.length > 0 && (this.source[1] = this.source[1] + ", " + i.join(", "));
			if (!this.isChild)
				for (var n in this.context.aliases) this.context.aliases.hasOwnProperty(n) && (this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n]);
			this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";");
			this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n");
			this.environment.isSimple || this.source.push("return buffer;");
			for (var s = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], r = 0, a = this.environment.depths.list.length; a > r; r++) s.push("depth" + this.environment.depths.list[r]);
			var o = this.mergeSource();
			if (!this.isChild) {
				var l = e.COMPILER_REVISION,
					c = e.REVISION_CHANGES[l];
				o = "this.compilerInfo = [" + l + ",'" + c + "'];\n" + o
			}
			if (t) {
				s.push(o);
				return Function.apply(this, s)
			}
			var u = "function " + (this.name || "") + "(" + s.join(",") + ") {\n  " + o + "}";
			e.log(e.logger.DEBUG, u + "\n\n");
			return u
		},
		mergeSource: function () {
			for (var e, i = "", n = 0, s = this.source.length; s > n; n++) {
				var r = this.source[n];
				if (r.appendToBuffer) e = e ? e + "\n    + " + r.content : r.content;
				else {
					if (e) {
						i += "buffer += " + e + ";\n  ";
						e = t
					}
					i += r + "\n  "
				}
			}
			return i
		},
		blockValue: function () {
			this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
			var e = ["depth0"];
			this.setupParams(0, e);
			this.replaceStack(function (t) {
				e.splice(1, 0, t);
				return "blockHelperMissing.call(" + e.join(", ") + ")"
			})
		},
		ambiguousBlockValue: function () {
			this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
			var e = ["depth0"];
			this.setupParams(0, e);
			var t = this.topStack();
			e.splice(1, 0, t);
			e[e.length - 1] = "options";
			this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
		},
		appendContent: function (e) {
			this.source.push(this.appendToBuffer(this.quotedString(e)))
		},
		append: function () {
			this.flushInline();
			var e = this.popStack();
			this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }");
			this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
		},
		appendEscaped: function () {
			this.context.aliases.escapeExpression = "this.escapeExpression";
			this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
		},
		getContext: function (e) {
			this.lastContext !== e && (this.lastContext = e)
		},
		lookupOnContext: function (e) {
			this.push(this.nameLookup("depth" + this.lastContext, e, "context"))
		},
		pushContext: function () {
			this.pushStackLiteral("depth" + this.lastContext)
		},
		resolvePossibleLambda: function () {
			this.context.aliases.functionType = '"function"';
			this.replaceStack(function (e) {
				return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
			})
		},
		lookup: function (e) {
			this.replaceStack(function (t) {
				return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
			})
		},
		lookupData: function () {
			this.push("data")
		},
		pushStringParam: function (e, t) {
			this.pushStackLiteral("depth" + this.lastContext);
			this.pushString(t);
			"string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e)
		},
		emptyHash: function () {
			this.pushStackLiteral("{}");
			if (this.options.stringParams) {
				this.register("hashTypes", "{}");
				this.register("hashContexts", "{}")
			}
		},
		pushHash: function () {
			this.hash = {
				values: [],
				types: [],
				contexts: []
			}
		},
		popHash: function () {
			var e = this.hash;
			this.hash = t;
			if (this.options.stringParams) {
				this.register("hashContexts", "{" + e.contexts.join(",") + "}");
				this.register("hashTypes", "{" + e.types.join(",") + "}")
			}
			this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
		},
		pushString: function (e) {
			this.pushStackLiteral(this.quotedString(e))
		},
		push: function (e) {
			this.inlineStack.push(e);
			return e
		},
		pushLiteral: function (e) {
			this.pushStackLiteral(e)
		},
		pushProgram: function (e) {
			null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
		},
		invokeHelper: function (e, t) {
			this.context.aliases.helperMissing = "helpers.helperMissing";
			var i = this.lastHelper = this.setupHelper(e, t, !0),
				n = this.nameLookup("depth" + this.lastContext, t, "context");
			this.push(i.name + " || " + n);
			this.replaceStack(function (e) {
				return e + " ? " + e + ".call(" + i.callParams + ") " + ": helperMissing.call(" + i.helperMissingParams + ")"
			})
		},
		invokeKnownHelper: function (e, t) {
			var i = this.setupHelper(e, t);
			this.push(i.name + ".call(" + i.callParams + ")")
		},
		invokeAmbiguous: function (e, t) {
			this.context.aliases.functionType = '"function"';
			this.pushStackLiteral("{}");
			var i = this.setupHelper(0, e, t),
				n = this.lastHelper = this.nameLookup("helpers", e, "helper"),
				s = this.nameLookup("depth" + this.lastContext, e, "context"),
				r = this.nextStack();
			this.source.push("if (" + r + " = " + n + ") { " + r + " = " + r + ".call(" + i.callParams + "); }");
			this.source.push("else { " + r + " = " + s + "; " + r + " = typeof " + r + " === functionType ? " + r + ".apply(depth0) : " + r + "; }")
		},
		invokePartial: function (e) {
			var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
			this.options.data && t.push("data");
			this.context.aliases.self = "this";
			this.push("self.invokePartial(" + t.join(", ") + ")")
		},
		assignToHash: function (e) {
			var t, i, n = this.popStack();
			if (this.options.stringParams) {
				i = this.popStack();
				t = this.popStack()
			}
			var s = this.hash;
			t && s.contexts.push("'" + e + "': " + t);
			i && s.types.push("'" + e + "': " + i);
			s.values.push("'" + e + "': (" + n + ")")
		},
		compiler: h,
		compileChildren: function (e, t) {
			for (var i, n, s = e.children, r = 0, a = s.length; a > r; r++) {
				i = s[r];
				n = new this.compiler;
				var o = this.matchExistingProgram(i);
				if (null == o) {
					this.context.programs.push("");
					o = this.context.programs.length;
					i.index = o;
					i.name = "program" + o;
					this.context.programs[o] = n.compile(i, t, this.context);
					this.context.environments[o] = i
				} else {
					i.index = o;
					i.name = "program" + o
				}
			}
		},
		matchExistingProgram: function (e) {
			for (var t = 0, i = this.context.environments.length; i > t; t++) {
				var n = this.context.environments[t];
				if (n && n.equals(e)) return t
			}
		},
		programExpression: function (e) {
			this.context.aliases.self = "this";
			if (null == e) return "self.noop";
			for (var t, i = this.environment.children[e], n = i.depths.list, s = [i.index, i.name, "data"], r = 0, a = n.length; a > r; r++) {
				t = n[r];
				1 === t ? s.push("depth0") : s.push("depth" + (t - 1))
			}
			return (0 === n.length ? "self.program(" : "self.programWithDepth(") + s.join(", ") + ")"
		},
		register: function (e, t) {
			this.useRegister(e);
			this.source.push(e + " = " + t + ";")
		},
		useRegister: function (e) {
			if (!this.registers[e]) {
				this.registers[e] = !0;
				this.registers.list.push(e)
			}
		},
		pushStackLiteral: function (e) {
			return this.push(new p(e))
		},
		pushStack: function (e) {
			this.flushInline();
			var t = this.incrStack();
			e && this.source.push(t + " = " + e + ";");
			this.compileStack.push(t);
			return t
		},
		replaceStack: function (e) {
			var t, i = "",
				n = this.isInline();
			if (n) {
				var s = this.popStack(!0);
				if (s instanceof p) t = s.value;
				else {
					var r = this.stackSlot ? this.topStackName() : this.incrStack();
					i = "(" + this.push(r) + " = " + s + "),";
					t = this.topStack()
				}
			} else t = this.topStack();
			var a = e.call(this, t);
			if (n) {
				(this.inlineStack.length || this.compileStack.length) && this.popStack();
				this.push("(" + i + a + ")")
			} else {
				/^stack/.test(t) || (t = this.nextStack());
				this.source.push(t + " = (" + i + a + ");")
			}
			return t
		},
		nextStack: function () {
			return this.pushStack()
		},
		incrStack: function () {
			this.stackSlot++;
			this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot);
			return this.topStackName()
		},
		topStackName: function () {
			return "stack" + this.stackSlot
		},
		flushInline: function () {
			var e = this.inlineStack;
			if (e.length) {
				this.inlineStack = [];
				for (var t = 0, i = e.length; i > t; t++) {
					var n = e[t];
					n instanceof p ? this.compileStack.push(n) : this.pushStack(n)
				}
			}
		},
		isInline: function () {
			return this.inlineStack.length
		},
		popStack: function (e) {
			var t = this.isInline(),
				i = (t ? this.inlineStack : this.compileStack).pop();
			if (!e && i instanceof p) return i.value;
			t || this.stackSlot--;
			return i
		},
		topStack: function (e) {
			var t = this.isInline() ? this.inlineStack : this.compileStack,
				i = t[t.length - 1];
			return !e && i instanceof p ? i.value : i
		},
		quotedString: function (e) {
			return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
		},
		setupHelper: function (e, t, i) {
			var n = [];
			this.setupParams(e, n, i);
			var s = this.nameLookup("helpers", t, "helper");
			return {
				params: n,
				name: s,
				callParams: ["depth0"].concat(n).join(", "),
				helperMissingParams: i && ["depth0", this.quotedString(t)].concat(n).join(", ")
			}
		},
		setupParams: function (e, t, i) {
			var n, s, r, a = [],
				o = [],
				l = [];
			a.push("hash:" + this.popStack());
			s = this.popStack();
			r = this.popStack();
			if (r || s) {
				if (!r) {
					this.context.aliases.self = "this";
					r = "self.noop"
				}
				if (!s) {
					this.context.aliases.self = "this";
					s = "self.noop"
				}
				a.push("inverse:" + s);
				a.push("fn:" + r)
			}
			for (var c = 0; e > c; c++) {
				n = this.popStack();
				t.push(n);
				if (this.options.stringParams) {
					l.push(this.popStack());
					o.push(this.popStack())
				}
			}
			if (this.options.stringParams) {
				a.push("contexts:[" + o.join(",") + "]");
				a.push("types:[" + l.join(",") + "]");
				a.push("hashContexts:hashContexts");
				a.push("hashTypes:hashTypes")
			}
			this.options.data && a.push("data:data");
			a = "{" + a.join(",") + "}";
			if (i) {
				this.register("options", a);
				t.push("options")
			} else t.push(a);
			return t.join(", ")
		}
	};
	for (var f = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), v = h.RESERVED_WORDS = {}, y = 0, m = f.length; m > y; y++) v[f[y]] = !0;
	h.isValidJavaScriptVariableName = function (e) {
		return !h.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
	};
	e.precompile = function (t, i) {
		if (null == t || "string" != typeof t && t.constructor !== e.AST.ProgramNode) throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
		i = i || {};
		"data" in i || (i.data = !0);
		var n = e.parse(t),
			s = (new d).compile(n, i);
		return (new h).compile(s, i)
	};
	e.compile = function (i, n) {
		function s() {
			var s = e.parse(i),
				r = (new d).compile(s, n),
				a = (new h).compile(r, n, t, !0);
			return e.template(a)
		}
		if (null == i || "string" != typeof i && i.constructor !== e.AST.ProgramNode) throw new e.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + i);
		n = n || {};
		"data" in n || (n.data = !0);
		var r;
		return function (e, t) {
			r || (r = s());
			return r.call(this, e, t)
		}
	};
	e.VM = {
		template: function (t) {
			var i = {
				escapeExpression: e.Utils.escapeExpression,
				invokePartial: e.VM.invokePartial,
				programs: [],
				program: function (t, i, n) {
					var s = this.programs[t];
					n ? s = e.VM.program(t, i, n) : s || (s = this.programs[t] = e.VM.program(t, i));
					return s
				},
				merge: function (t, i) {
					var n = t || i;
					if (t && i) {
						n = {};
						e.Utils.extend(n, i);
						e.Utils.extend(n, t)
					}
					return n
				},
				programWithDepth: e.VM.programWithDepth,
				noop: e.VM.noop,
				compilerInfo: null
			};
			return function (n, s) {
				s = s || {};
				var r = t.call(i, e, n, s.helpers, s.partials, s.data),
					a = i.compilerInfo || [],
					o = a[0] || 1,
					l = e.COMPILER_REVISION;
				if (o !== l) {
					if (l > o) {
						var c = e.REVISION_CHANGES[l],
							u = e.REVISION_CHANGES[o];
						throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + c + ") or downgrade your runtime to an older version (" + u + ")."
					}
					throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ")."
				}
				return r
			}
		},
		programWithDepth: function (e, t, i) {
			var n = Array.prototype.slice.call(arguments, 3),
				s = function (e, s) {
					s = s || {};
					return t.apply(this, [e, s.data || i].concat(n))
				};
			s.program = e;
			s.depth = n.length;
			return s
		},
		program: function (e, t, i) {
			var n = function (e, n) {
				n = n || {};
				return t(e, n.data || i)
			};
			n.program = e;
			n.depth = 0;
			return n
		},
		noop: function () {
			return ""
		},
		invokePartial: function (i, n, s, r, a, o) {
			var l = {
				helpers: r,
				partials: a,
				data: o
			};
			if (i === t) throw new e.Exception("The partial " + n + " could not be found");
			if (i instanceof Function) return i(s, l);
			if (e.compile) {
				a[n] = e.compile(i, {
					data: o !== t
				});
				return a[n](s, l)
			}
			throw new e.Exception("The partial " + n + " could not be compiled when running in runtime-only mode")
		}
	};
	e.template = e.VM.template
}(Handlebars);
define("handlebars", function (e) {
	return function () {
		var t;
		return t || e.Handlebars
	}
}(this));
define("text", {
	load: function (e) {
		throw new Error("Dynamic load not allowed: " + e)
	}
});
define("text!templates/infobox.hbs", [], function () {
	return '<div class="flow_info-box">\n    <div class="flow_info-box__inner">\n        {{#if description }}\n        <div class="flow_info-box__description">\n            {{truncate description 150}}\n        </div>\n        {{/if}}\n        <div class="play-info-metadata">\n           {{#if available }}\n            {{available}}\n           {{/if}}\n        </div>\n        <div class="flow_info-box__accessibility">\n           {{#if closedCaptioned }}\n            <span class="svt_icon svt_icon--1-2x svt_icon--text" aria-hidden="true"></span>\n            <span class="playx-margin-left-xs">Valbar textning</span>\n            {{/if}}\n        </div>\n    </div>\n</div>'
});
define("play/info", ["Class", "jquery", "svtlib-messagechannel", "handlebars", "text!templates/infobox.hbs"], function (e, t, i, n, s) {
	return e.extend({
		startHoverTime: 550,
		fadeInDuration: 150,
		slideDuration: 100,
		$el: void 0,
		activeElement: void 0,
		$itemContainer: void 0,
		hoverSelector: ".flow_js-info--hover",
		popoutSelector: ".playJsInfo-Open",
		arrowClass: "flow_info-box__arrow",
		template: void 0,
		init: function (e) {
			this.$el = t(e);
			this.id = this.$el.attr("id");
			this.$itemContainer = this.$el.find(".flow_js-video-list-item-container");
			this.template = n.compile(s);
			this.addEventListeners()
		},
		addEventListeners: function () {
			var e = this;
			Modernizr.touch || Modernizr.mspointer || e.$el.on({
				mouseenter: function () {
					e.showHoverInfo(this)
				},
				mouseleave: function () {
					e.cancelHover(this)
				},
				focusin: function () {
					e.showHoverInfo(this)
				},
				focusout: function () {
					e.cancelHover(this)
				}
			}, e.hoverSelector)
		},
		isToggleArrowsVisible: function () {
			return t(this.popoutSelector).length > 0 && t(t(this.popoutSelector)[0]).is(":visible")
		},
		showHoverInfo: function (e) {
			var t = this;
			this.isToggleArrowsVisible() || (e.hoverTimer = setTimeout(function () {
				t.doShowHoverInfo(e)
			}, t.startHoverTime))
		},
		doShowHoverInfo: function (e) {
			e.hoverBox = this.getInfoElement(t(e));
			e.hoverBox.addClass("playOverlayBox playDisablePointer");
			this.setHoverPosition(e)
		},
		togglePopoutInfo: function (e, i) {
			Modernizr.touch && e.preventDefault();
			var n = t(i).closest(".flow_js-info-core").get(0);
			this.activeElement ? this.hidePopoutInfo(n) : this.showPopoutInfo(n);
			return !1
		},
		hidePopoutInfo: function (e) {
			var i = this,
				n = t(i.activeElement);
			n.removeClass(i.arrowClass);
			i.activeElement.infoElement.slideUp(i.slideDuration, function () {
				i.activeElement.infoElement.remove();
				delete i.activeElement.infoElement;
				n.find(".play-icon-arrow-up").removeClass("play-icon-arrow-up").addClass("play-icon-arrow-down");
				n.removeAttr("style");
				if (e && i.activeElement !== e) i.showPopoutInfo(e);
				else {
					i.activeElement = void 0;
					i.stopPopoutListeners()
				}
			})
		},
		showPopoutInfo: function (e) {
			e.infoElement = this.getInfoElement(t(e));
			e.infoElement.addClass("playPopoutInfo");
			t(e).addClass(this.arrowClass);
			this.repositionPopoutArrow(e);
			this.startPopoutlisteners();
			this.$el.after(e.infoElement);
			e.infoElement.hide().slideDown(this.slideDuration);
			t(e).find(".play-icon-arrow-down").removeClass("play-icon-arrow-down").addClass("play-icon-arrow-up");
			this.activeElement = e
		},
		startPopoutlisteners: function () {
			this.startResizeListener();
			this.startScrollListeners()
		},
		startResizeListener: function () {
			var e, i = this;
			t(window).on("resize.play.info", function () {
				clearTimeout(e);
				e = setTimeout(function () {
					i.activeElement && (i.isToggleArrowsVisible() ? i.repositionPopoutArrow(i.activeElement) : i.hidePopoutInfo())
				}, 100)
			})
		},
		startScrollListeners: function () {
			var e, t = this;
			t.movedListener = i.subscribe("slideableListMoved", function (i) {
				clearTimeout(e);
				e = setTimeout(function () {
					i.$el.attr("id") === t.id && t.activeElement && t.hidePopoutInfo()
				}, 100)
			});
			this.$itemContainer.on("scroll.play.info", function () {
				t.activeElement && t.hidePopoutInfo()
			})
		},
		stopPopoutListeners: function () {
			t(window).off("resize.play.info");
			i.unsubscribe("slideableListMoved", this.movedListener);
			this.$itemContainer.off("scroll.play.info")
		},
		repositionPopoutArrow: function (e) {
			var i = Math.round(this.$itemContainer.height()),
				n = parseInt(this.$itemContainer.css("padding-bottom"), 10);
			t(e).height(i - n)
		},
		setHoverPosition: function (e) {
			var i = t(e).find(".playJsInfo-ImageContainer").first(),
				n = 1.2 * t(e).width() - 10,
				s = i.offset().left,
				r = -1 * n;
			if (s > t(window).width() - s) {
				t(e.hoverBox).addClass("flow_arrow--right");
				t(e.hoverBox).css("left", r)
			} else {
				svt.play.isIELte7 && t(e).css("z-index", "50");
				t(e.hoverBox).addClass("flow_arrow--left");
				t(e.hoverBox).css("right", r)
			}
			t(e.hoverBox).css("top", "50%");
			var a = -1 * (i.height() / 2 + 10);
			i.append(e.hoverBox.hide().fadeIn(this.fadeInDuration));
			var o = -1 * (e.hoverBox.height() / 2);
			o = a > o ? a : o;
			t(e.hoverBox).css("margin-top", o)
		},
		cancelHover: function (e) {
			clearTimeout(e.hoverTimer);
			if (e.hoverBox) {
				svt.play.isIELte7 && t(e).css("z-index", "auto");
				e.hoverBox.remove()
			}
		},
		getInfoElement: function (e) {
			var i = void 0 === e.attr("data-broadcastEnded") || "true" === e.attr("data-broadcastEnded"),
				n = e.attr("data-broadcastStartTime"),
				s = e.attr("data-broadcasted"),
				r = "true" === e.attr("data-closedCaptioned");
			return t(this.template({
				title: e.attr("data-title"),
				description: e.attr("data-full-description"),
				length: e.attr("data-length"),
				available: n ? "" : e.attr("data-available"),
				broadcasted: i ? s : "",
				published: e.attr("data-published"),
				broadcastStartTime: i && "" !== s ? "" : n,
				closedCaptioned: r
			}))
		}
	})
});
define("play/template/play_template", [], function () {
	var e = {};
	e.getTemplate = function (e) {
		switch (e) {
		case "playJsSchedule-Info":
			return '<div class="playJsSchedule-Info play_channels--schedule-info is--selected"><article class="playChannelShowInfo play-video-info-padded play-text-info"><div class="playChannelShowInfoSection"><h1 class="play-h3 playx-color-white playx-margin-bottom-s"><%= this.title %></h1><p class="playx-margin-bottom-m"><%= this.description %></p><div class="playChannelShowPropertyList"><p><span class="playx-color-white play-text-info">Längd:</span> <%= this.length %></p><% if(this.titlePageRights) { %><p><span class="playx-color-white play-text-info">Rättigheter:</span> <%= this.titlePageRights %> </p><% } if(this.titlePageCategory) { %><p><span class="playx-color-white play-text-info">Kategori:</span> <a href="<%= this.titlePageCategoryUrl %>"><%= this.titlePageCategory %></a></p><% } %></div></div><% if(this.titlePageTitle) { %><div class="playChannelShowInfoSection"><h2 class="play-h3 playx-color-white playx-margin-bottom-s">Programinformation</h2><p class="playx-margin-bottom-m"><%= this.titlePageDescription %></p><a href="<%= this.titlePageExternalUrl %>"><span class="playIconExternaLink-light playIcon-Block"></span><%= this.titlePageTitle %> på SVT.se</a></div><div class="playChannelShowInfoSection"><h2 class="play-h3 playx-color-white playx-margin-bottom-s">Mer från programmet</h2><a href="<%= this.titlePageContentUrl %>"><% if(this.titlePageThumbnailUrl) { %><img class="playChannelShowInfoThumbnail" src="<%= this.titlePageThumbnailUrl %>" alt="<%= this.titlePageTitle %>"/><% } %>Fler avsnitt</a></div><% } %></article></div>';
		case "playSearchSuggestions":
			return '<ol class="playx-list-nostyle play-alt-list"></ol>';
		case "playSearchSuggestion":
			return '<li class="svt_mediablock playOverflowHidden"><a class="play-search-suggestions-link" href="<%= this.url %>"><figure class="svt_mediablock__fig--s play-search-suggestions-thumbnail"><img src="<%= this.thumbnail %>"  alt="${title.title}" class="flow_round-img--small"></figure><div class="svt_mediablock__text"><div class="flow_h6 flow_h6--padding-top jsResultTitle"><%= this.title %></div></div></a></li>';
		case "playSearchSuggestionShowAll":
			return '<li class="svt_mediablock playOverflowHidden"><a href="/sok?q=<%= this %>" class="flow_btn flow_btn--light flow_btn--block-center flow_btn--square jsResultTitleNone"><i class="svt_icon svt_icon--search"></i> Visa alla sökträffar</a></li>';
		case "playRemoteControls":
			return '<div class="playRemoteControls"><hr class="playRemoteDivider"><button id="playRemoteRewind" disabled type="button" value="rewind" class="roundedLeft"><span></span></button><button id="playRemotePlayPause" disabled value="resume" type="button" class="play" data-id="<%= this.id %>"><span></span></button><button id="playRemoteForward" disabled value="forward" type="button" class="roundedRight"><span></span></button><br/><button id="playRemoteVolumeDown" disabled value="volumeDown" type="button" class="roundedLeft"><span></span></button><button id="playRemoteVolume" disabled type="button" class="noBackground"><span></span></button><button id="playRemoteVolumeUp" disabled value="volumeUp" type="button" class="roundedRight"><span></span></button><hr class="playRemoteDivider"><div class="playRemoteSettingsView"><div class="playRemoteSettingsViewContainer svtXClearFix"><a href="/remote/0"><div class="play-icon-remote-power-off playFloatLeft"></div><span class="">Stäng av fjärrkontrollen</span></a></div></div></div>';
		case "playRemoteVideoPlay":
			return '<div class="flow_position-relative playOverflowHidden playFontSizeZero"><img src="<%= this.imgSrc %>" class="playRemotePoster"><button id="playRemotePlay" value="play" type="button" class="play" data-id="<%= this.id %>"><span></span></button></div>';
		case "playRemoteConnecting":
			return '<img class="playDashboardLoadingIcon playFloatLeft" src="/public/images/xl/loader_41.gif"><div class="playx-padding-top-xs"><div class="playAltText">Ansluter fjärrkontrollen...</div><span class="playOverFlowEllipsis"></span></div></div>';
		case "playRemoteConnected":
			return '<button id="playRemoteDashboardConnected" class="playDashboardIcon playFloatLeft" type="button" disabled><span></span></button><div class="playx-padding-top-xs"><div class="playAltText">Fjärrkontrollen är ansluten</div><span class="playOverFlowEllipsis">Välj en video</span></div>';
		case "playRemoteStatus":
			return '<button id="playRemoteDashboardPlayPause" value="pause" class="playDashboardIcon playFloatLeft resume" type="button"><span></span></button><div class="playx-padding-top-xs"><div class="playAltText">Nu spelas:</div><span class="playOverFlowEllipsis"><%= this.title %></span></div>';
		case "playTVModeLayer":
			return '<div class="playx-padding-m playx-clearfix"><h1 class="play-h2 playx-color-white play-text-center playx-margin-bottom-l playJsTvModeHeader"></h1><div class="play-tvmode-layer-options"><a id="playJsTVModeSwitchButton" class="play-button-xlarge play-tvmode-button-xlarge-enlarge" href="/television/" role="button"><span class="play-icon-inline-l play-icon-tv"></span><span id="playJsTVModeSwitchButtonText"></span></a><a id="playJsRemote-SwitchFooterButton" class="play-button-xlarge play-tvmode-button-xlarge-remote" href="/kontroll" role="button"><span class="play-icon-inline-l play-icon-remote"></span>Mobilen som fjärrkontroll</a></div><div class="playx-clear-both play-text-center"><a href="http://www.svt.se/tittarservice/hitta-svar/teknik/sa-ser-du-svt-play-pa-tv" class="play-link-standard playx-padding-xxs"><span class="play-icon-link-external-light play-icon-inline playx-margin-right-xs">Öppnar svt.se</span>Så ser du SVT Play på TV (svt.se)</a></div></div>';
		case "playFavouritesListItem":
			return '<article class="flow_position-relative flow_videolist-element flow_js-info-core playJsInfo-Hover"><a href="<%= this.url %>" class="flow_videolist-element-link playLink playIELinkFix flow_js-grid-item"><span class="playJsFavouritesRemoveBtn svt_icon svt_icon--close play-hidden"></span><div class="playJsInfo-ImageContainer flow_videolist-container-thumbnail"><img src="<%= this.imgSrc %>"></div><h2 class="play-h5"><span class="flow_videolist-heading play-link-sub"><%= this.title %></span></h2></a></article>';
		default:
			console.log("No template found: " + e + " in play_template");
			return ""
		}
	};
	return e
});
define("modules/search/search", ["jquery", "Class", "play/template/play_template", "svtlib-messagechannel"], function (e, t, i, n) {
	var s = [],
		r = t.extend({
			id: void 0,
			searchText: "",
			$container: void 0,
			$searchForm: void 0,
			$input: void 0,
			$suggestionsContainer: void 0,
			MAX_RESULTS: 5,
			keys: {
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				ESC: 27,
				RETURN: 13
			},
			options: {
				inputId: "q",
				autoComplete: !1,
				autoCompleteContainer: void 0
			},
			init: function (t, i) {
				this.$container = t;
				this.id = s.length + 1;
				s.push(this.id);
				this.options = e.extend({}, this.options, i);
				this.$searchForm = this.$container.find("form");
				this.$input = e("#" + this.options.inputId);
				var r = this;
				if (this.options.autoComplete) {
					this.$suggestionsContainer = this.options.autoCompleteContainer ? e(this.options.autoCompleteContainer) : this.$container.find(".flow_js-autocomplete");
					r.initAutocomplete();
					e.browser.msie && parseInt(e.browser.version, 10) < 10 && n.subscribe("/player/onInitialized", function () {
						r.unbindAutocomplete()
					})
				}
				this._bindListeners()
			},
			_bindListeners: function () {
				var e = this;
				n.subscribe("/search/toggle", function (t, i) {
					if (e._isMe(t)) {
						void 0 === i && (i = !e.$searchForm.is(":visible"));
						e.toggleSearchForm(i)
					}
				})
			},
			_isMe: function (e) {
				return e === this.id
			},
			isEmpty: function (e) {
				return 0 === e.find("a").size()
			},
			resetSearchText: function () {
				this.$input.val(this.searchText)
			},
			clearSuggestions: function (e) {
				e.fadeOut(function () {
					e.empty()
				})
			},
			isNavigationKey: function (e) {
				return this.isUpKey(e) || this.isDownKey(e)
			},
			isUpKey: function (e) {
				return e.keyCode === this.keys.UP || e.keyCode === this.keys.LEFT
			},
			isDownKey: function (e) {
				return e.keyCode === this.keys.DOWN || e.keyCode === this.keys.RIGHT
			},
			navigateToFirstResult: function () {
				this.searchText = this.$input.val();
				var e = this.$suggestionsContainer.find(".play-search-suggestions li:first");
				e.addClass("focused");
				if(xtra){
					xtra.loadInfo(e);
				}
				this.$input.val(e.find(".jsResultTitle").text())
			},
			navigateUp: function (e) {
				e.removeClass("focused");
				var t = e.prev();
				if (t.size() > 0) {
					t.addClass("focused");
					if(xtra){
						xtra.loadInfo(t);
					}
					this.$input.val(t.find(".jsResultTitle").text())
				} else this.resetSearchText()
			},
			navigateDown: function (e) {
				var t = e.next();
				if (t.size() > 0) {
					t.addClass("focused");
					e.removeClass("focused");
					if(xtra){
						xtra.loadInfo(t);
					}
					t.find(".jsResultTitleNone").size() > 0 ? this.resetSearchText() : this.$input.val(t.find(".jsResultTitle").text())
				} else e.removeClass("focused")
			},
			navigate: function (e) {
				var t = this,
					i = this.$suggestionsContainer.find(".play-search-suggestions .focused");
				0 === i.size() && t.isDownKey(e) ? t.navigateToFirstResult() : t.isDownKey(e) ? t.navigateDown(i, e) : t.isUpKey(e) && t.navigateUp(i, e)
			},
			toggleSearchForm: function (e) {
				var t = this,
					i = this.$input.attr("placeholder");
				if (e) {
					this.$container.removeClass("flow_hide");
					this.$input.on("focus.searchField", function () {
						t.$input.attr("placeholder", i)
					}).focus();
					this.$input.attr("placeholder", i)
				} else this.$container.addClass("flow_hide")
			},
			applyExtraFeatures: function (t) {
				"ge mig färgblindhet" === t ? svt.play.$body.addClass("playGreyscaleFilter") : "ge mig dålig syn" === t ? svt.play.$body.addClass("playBlurFilter") : "påskägg" === t ? navigator.userAgent.match(/(iPhone|iPad)/) && svt.play.$body.addClass("flow_iOS_icons") : "ge mig css3d" === t && e("html").addClass("a3dtime")
			},
			updateSuggestions: function (e, t) {
				var i, n, s;
				s = this.titles;
				if (s) {
					i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/gi, "\\$&").toLowerCase();
					var r = [];
					if (i) {
						var a;
						for (a = 0; a < s.length; a++) {
							n = s[a];
							n.weight = n.title.toLowerCase().indexOf(i);
							n.weight > -1 && r.push(n)
						}
						r.sort(function (e, t) {
							return e.weight - t.weight
						})
					}
					this.renderSuggestions(r, t)
				}
			},
			renderSuggestions: function (t, n) {
				if (t.length > 0) {
					var s, r = e(i.getTemplate("playSearchSuggestions"));
					for (s = 0; s < t.length && s < this.MAX_RESULTS; s++) r.append(e.jqote(i.getTemplate("playSearchSuggestion"), t[s]));
					r.append(e.jqote(i.getTemplate("playSearchSuggestionShowAll"), n));
					this.$suggestionsContainer.find(".play-search-suggestions").empty().append(r).show()
				} else this.$suggestionsContainer.find(".play-search-suggestions").hide()
			},
			loadTitleList: function () {
				var t = this;
				t.titles || e.ajax({
					url: "./ajax/sok/forslag.json",
					dataType: "json",
					cache: !0,
					success: function (e) {
						t.titles = e
					}
				})
			},
			initAutocomplete: function () {
				var t, i = this,
					n = e('<div class="playWithArrowAbove play-search-suggestions" style="display:none;"></div>');
				this.$suggestionsContainer.append(n);
				t = this.$suggestionsContainer.find(".play-search-suggestions");
				this.$input.focus(function () {
					i.loadTitleList()
				});
				this.$input.keyup(function (e) {
					if (!i.isNavigationKey(e) && e.keyCode !== i.keys.RETURN)
						if (e.keyCode !== i.keys.ESC) {
							i.updateSuggestions(n, i.$input.val());
							i.applyExtraFeatures(i.$input.val())
						} else {
							i.resetSearchText();
							i.clearSuggestions(n)
						}
				});
				this.$input.keydown(function (e) {
					if (i.isNavigationKey(e) && !i.isEmpty(n)) {
						i.navigate(e);
						return !1
					}
					if (e.keyCode === i.keys.RETURN) {
						var s = t.find(".focused a");
						if (s.size() > 0) {
							window.location = s.attr("href");
							return !1
						}
					}
					return !0
				});
				this.$input.blur(function () {
					i.clearSuggestions(t)
				});
				t.on("hover", "li", function () {
					t.removeClass("focused");
					i.$input.focus()
				})
			},
			unbindAutocomplete: function () {
				this.$suggestionsContainer.find(".play-search-suggestions").hide();
				this.$input.unbind("keyup")
			}
		});
	r.make = function (e) {
		return new r(e)
	};
	return r
});
var mediaCheck = function (e) {
	var t, n = window.matchMedia !== undefined;
	mqChange = function (e, t) {
		e.matches ? typeof t.entry == "function" && t.entry() : typeof t.exit == "function" && t.exit()
	};
	if (n) {
		createListener = function () {
			t = window.matchMedia(e.media);
			t.addListener(function () {
				mqChange(t, e)
			});
			mqChange(t, e)
		};
		createListener()
	} else {
		var r = window.outerWidth,
			i = function () {
				var t = e.media.match(/\((.*)-.*:\s*(.*)\)/),
					n = t[1],
					i = parseInt(t[2], 10),
					s = {};
				if (r != window.outerWidth) {
					s.matches = n === "max" && i > window.outerWidth || n === "min" && i < window.outerWidth;
					mqChange(s, e);
					r = window.outerWidth
				}
			};
		window.addEventListener ? window.addEventListener("resize", i) : window.attachEvent && window.attachEvent("resize", i);
		i()
	}
};;
define("mediaCheck", function (e) {
	return function () {
		var t;
		return t || e.mediaCheck
	}
}(this));
define("play/device", ["jquery", "mediaCheck"], function (e, t) {
	window.svt = window.svt || {};
	svt.play = svt.play || {};
	svt.play.device = {
		inSweden: function () {
			return null != Modernizr.sweden ? !!Modernizr.sweden : !0
		},
		isIE: function () {
			return !!Modernizr.ie
		},
		isFirefox: function () {
			return window.navigator.userAgent && window.navigator.userAgent.match(/Firefox/)
		},
		isMobile: function () {
			return null != Modernizr.mobile ? !!Modernizr.mobile : !1
		},
		isLargeOrBigger: function () {
			return Modernizr.mq("(min-width: 801px)")
		},
		isMediumOrSmaller: function () {
			return Modernizr.mq("(max-width: 800px)")
		},
		getBrowserSize: function () {
			var t = e(window).width(),
				i = "xsmall";
			t > 600 && 800 >= t ? i = "small" : t > 800 && 1024 >= t ? i = "medium" : t > 1024 && 1824 >= t ? i = "large" : t > 1824 && (i = "xlarge");
			return i
		},
		whenLarge: function (e, t) {
			this._registerListeners("(min-width : 801px)", e, t)
		},
		whenMedium: function (e, t) {
			this._registerListeners("(min-width : 601px) and (max-width : 800px)", e, t)
		},
		whenSmall: function (e, t) {
			this._registerListeners("(max-width : 601px)", e, t)
		},
		_registerListeners: function (e, i, n) {
			t({
				media: e,
				entry: i,
				exit: n
			})
		}
	};
	return svt.play.device
});
define("play/constants", [], function () {
	return {
		ANIMATION_DURATION: 800,
		SHORT_ANIMATION_DURATION: 200,
		UI_EFFECT_SLIDE: "easeInOutQuint"
	}
});
define("play/alphabetic", ["Class", "jquery", "./device", "./constants"], function (e, t, i, n) {
	return e.extend({
		dropDownMenu: void 0,
		titleList: void 0,
		init: function () {
			var e = this;
			t(".playJsAlphabeticTab").each(function () {
				e.dropDownMenu = new e.DropDownMenu(t(".playJsDropDownMenu"), t(".playJsDropDownButton"));
				e.titleList = new e.TitleList;
				t(".playJsAlphabeticAccessibility").click(function () {
					e.selectAccessibility(t(this), !0);
					return !1
				});
				t(".playJsAlphabeticRights").click(function () {
					e.selectRights(t(this), !0);
					return !1
				});
				t(".playJsAlphabeticClose").click(function () {
					e.dropDownMenu.close();
					return !1
				});
				e.titleList.disableEmptySkipLinks();
				e.titleList.addColumnsForCrappyBrowsers();
				e.applyInitialRights()
			})
		},
		applyInitialRights: function () {
			if (-1 === window.location.search.indexOf("rights=")) {
				var e;
				if (i.inSweden()) {
					if (i.isMobile()) {
						e = t('.playJsAlphabeticRights[data-rights="mobil"]');
						this.selectRights(e, !1)
					}
				} else {
					e = t('.playJsAlphabeticRights[data-rights="utomlands"]');
					this.selectRights(e, !1)
				}
			}
		},
		selectAccessibility: function (e, t) {
			this.dropDownMenu.selectAccessibility(e);
			var n = this.dropDownMenu.getSelectedAccessibility(),
				s = this.dropDownMenu.getSelectedRights();
			this.titleList.rights(n, s);
			i.isMediumOrSmaller() && t && this.dropDownMenu.close();
			this.replaceBrowserHistoryState(n, s)
		},
		selectRights: function (e, t) {
			this.dropDownMenu.selectRights(e);
			var n = this.dropDownMenu.getSelectedAccessibility(),
				s = this.dropDownMenu.getSelectedRights();
			this.titleList.rights(n, s);
			i.isMediumOrSmaller() && t && this.dropDownMenu.close();
			this.replaceBrowserHistoryState(n, s)
		},
		replaceBrowserHistoryState: function (e, t) {
			if (Modernizr.history) {
				var i = document.location.pathname,
					n = [];
				e && "alla" !== e && n.push("tillganglighet=" + e);
				t && "alla" !== t && n.push("rattigheter=" + t);
				n.length && (i += "?" + n.join("&"));
				window.history.replaceState({}, "", i)
			}
		},
		TitleList: function () {
			this.rights = function (e, t) {
				this._updateVisibleTitles(e, t);
				this._updateLetterHeadings()
			};
			this._updateVisibleTitles = function (e, i) {
				var n = ".playJsAlphabeticTitle",
					s = "";
				if ("mobil" === i) {
					n += "[data-mobile=true]";
					s += ".playJsAlphabeticTitle[data-mobile=false]"
				}
				if ("utomlands" === i) {
					n += "[data-abroad=true]";
					s = this._addSeparatorIfNeeded(s);
					s += ".playJsAlphabeticTitle[data-abroad=false]"
				}
				if ("textat" === e) {
					n += "[data-text=true]";
					s = this._addSeparatorIfNeeded(s);
					s += ".playJsAlphabeticTitle[data-text=false]"
				}
				s && t(s).addClass("playJsAlphabeticTitleHidden");
				t(n).removeClass("playJsAlphabeticTitleHidden")
			};
			this._addSeparatorIfNeeded = function (e) {
				return e.length > 0 ? e + ", " : e
			};
			this._updateLetterHeadings = function () {
				var e = this;
				t(".play-alphabetic-letter").each(function () {
					var i = t(this),
						n = 0 === i.find(".playJsAlphabeticTitle:not(.playJsAlphabeticTitleHidden)").size();
					i.toggleClass("playx-display-none", n);
					e._updateSkipLink(i.attr("id"), n)
				})
			};
			this.disableEmptySkipLinks = function () {
				t(".play-alphabetic-skiplinks").on("click", ".playAlphabeticSkiplinkDisabled", function (e) {
					e.preventDefault()
				})
			};
			this._updateSkipLink = function (e, i) {
				var n = t('.playJsAlphabeticSkiplink[href="#' + e + '"]');
				n.toggleClass("playAlphabeticSkiplinkDisabled", i);
				i ? n.attr("tabindex", "-1") : n.removeAttr("tabindex")
			};
			this.addColumnsForCrappyBrowsers = function () {
				Modernizr.csscolumns || t(".playJsAlphabeticLetterLinks").each(function () {
					var e = t(this),
						i = e.find(".play-list-item"),
						n = i.size() / 3,
						s = 0,
						r = t(),
						a = t(),
						o = t();
					i.each(function () {
						n > s ? r = r.add(this) : 2 * n > s ? a = a.add(this) : o = o.add(this);
						s++
					});
					r.wrapAll('<div class="playAlphabeticColumn"></div>');
					a.wrapAll('<div class="playAlphabeticColumn"></div>');
					o.wrapAll('<div class="playAlphabeticColumn"></div>');
					e.show()
				})
			}
		},
		DropDownMenu: function (e, i) {
			var s = this;
			s.button = i;
			s.menu = e;
			s.selectedAccessibility = s.menu.find(".playJsAlphabeticAccessibility.is-selected");
			s.selectedRights = s.menu.find(".playJsAlphabeticRights.is-selected");
			s.button.click(function () {
				s.toggle()
			});
			this.toggle = function () {
				s.menu.is(":visible") ? s.close() : s.open()
			};
			this.close = function () {
				s.menu.slideUp(n.SHORT_ANIMATION_DURATION, function () {
					s.menu.css("display", "")
				});
				s.button.find(".playDropDownArrow").toggleClass("flow_videolist-expand-button__icon flow_videolist-expand-button__icon--colapse")
			};
			this.open = function () {
				s.menu.slideDown(n.SHORT_ANIMATION_DURATION);
				s.button.find(".playDropDownArrow").toggleClass("flow_videolist-expand-button__icon flow_videolist-expand-button__icon--colapse")
			};
			this.selectAccessibility = function (e) {
				s.selectedAccessibility.removeClass("is-selected");
				e.addClass("is-selected");
				s.selectedAccessibility = e;
				s.updateHeading()
			};
			this.selectRights = function (e) {
				s.selectedRights.removeClass("is-selected");
				e.addClass("is-selected");
				s.selectedRights = e;
				s.updateHeading()
			};
			this.updateHeading = function () {
				var e = s.selectedRights.attr("data-rights-name"),
					i = s.selectedAccessibility.attr("data-accessibility-name");
				i && "Alla" !== i && (e += ". " + i);
				t(".playJsDropDownButtonHeading").text(e)
			};
			this.getSelectedAccessibility = function () {
				return s.selectedAccessibility.attr("data-accessibility")
			};
			this.getSelectedRights = function () {
				return s.selectedRights.attr("data-rights")
			}
		}
	})
});
(function () {
	function e(e, t, i) {
		for (var n = (i || 0) - 1, s = e ? e.length : 0; ++n < s;)
			if (e[n] === t) return n;
		return -1
	}

	function t(t, i) {
		var n = typeof i;
		t = t.cache;
		if ("boolean" == n || null == i) return t[i] ? 0 : -1;
		"number" != n && "string" != n && (n = "object");
		var s = "number" == n ? i : b + i;
		t = (t = t[n]) && t[s];
		return "object" == n ? t && e(t, i) > -1 ? 0 : -1 : t ? 0 : -1
	}

	function i(e) {
		var t = this.cache,
			i = typeof e;
		if ("boolean" == i || null == e) t[e] = !0;
		else {
			"number" != i && "string" != i && (i = "object");
			var n = "number" == i ? e : b + e,
				s = t[i] || (t[i] = {});
			"object" == i ? (s[n] || (s[n] = [])).push(e) : s[n] = !0
		}
	}

	function n(e) {
		return e.charCodeAt(0)
	}

	function s(e, t) {
		var i = e.criteria,
			n = t.criteria;
		if (i !== n) {
			if (i > n || "undefined" == typeof i) return 1;
			if (n > i || "undefined" == typeof n) return -1
		}
		return e.index - t.index
	}

	function r(e) {
		var t = -1,
			n = e.length,
			s = e[0],
			r = e[0 | n / 2],
			a = e[n - 1];
		if (s && "object" == typeof s && r && "object" == typeof r && a && "object" == typeof a) return !1;
		var o = l();
		o["false"] = o["null"] = o["true"] = o.undefined = !1;
		var c = l();
		c.array = e;
		c.cache = o;
		c.push = i;
		for (; ++t < n;) c.push(e[t]);
		return c
	}

	function a(e) {
		return "\\" + et[e]
	}

	function o() {
		return y.pop() || []
	}

	function l() {
		return m.pop() || {
			array: null,
			cache: null,
			criteria: null,
			"false": !1,
			index: 0,
			"null": !1,
			number: null,
			object: null,
			push: null,
			string: null,
			"true": !1,
			undefined: !1,
			value: null
		}
	}

	function c(e) {
		return "function" != typeof e.toString && "string" == typeof (e + "")
	}

	function u() {}

	function d(e) {
		e.length = 0;
		y.length < x && y.push(e)
	}

	function h(e) {
		var t = e.cache;
		t && h(t);
		e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null;
		m.length < x && m.push(e)
	}

	function p(e, t, i) {
		t || (t = 0);
		"undefined" == typeof i && (i = e ? e.length : 0);
		for (var n = -1, s = i - t || 0, r = Array(0 > s ? 0 : s); ++n < s;) r[n] = e[t + n];
		return r
	}

	function f(i) {
		function y(e) {
			return e && "object" == typeof e && !ls(e) && Dn.call(e, "__wrapped__") ? e : new m(e)
		}

		function m(e, t) {
			this.__chain__ = !!t;
			this.__wrapped__ = e
		}

		function x(e, t, i, n, s) {
			if (i) {
				var r = i(e);
				if ("undefined" != typeof r) return r
			}
			var a = jt(e);
			if (!a) return e;
			var l = Bn.call(e);
			if (!Y[l] || !rs.nodeClass && c(e)) return e;
			var u = ns[l];
			switch (l) {
			case B:
			case V:
				return new u(+e);
			case U:
			case X:
				return new u(e);
			case J:
				r = u(e.source, A.exec(e));
				r.lastIndex = e.lastIndex;
				return r
			}
			var h = ls(e);
			if (t) {
				var f = !n;
				n || (n = o());
				s || (s = o());
				for (var v = n.length; v--;)
					if (n[v] == e) return s[v];
				r = h ? u(e.length) : {}
			} else r = h ? p(e) : _s({}, e); if (h) {
				Dn.call(e, "index") && (r.index = e.index);
				Dn.call(e, "input") && (r.input = e.input)
			}
			if (!t) return r;
			n.push(e);
			s.push(r);
			(h ? gs : xs)(e, function (e, a) {
				r[a] = x(e, t, i, n, s)
			});
			if (f) {
				d(n);
				d(s)
			}
			return r
		}

		function et(e, t, i) {
			if ("function" != typeof e) return Ki;
			if ("undefined" == typeof t) return e;
			var n = e.__bindData__ || rs.funcNames && !e.name;
			if ("undefined" == typeof n) {
				var s = D && $n.call(e);
				rs.funcNames || !s || P.test(s) || (n = !0);
				if (rs.funcNames || !n) {
					n = !rs.funcDecomp || D.test(s);
					os(e, n)
				}
			}
			if (n !== !0 && n && 1 & n[1]) return e;
			switch (i) {
			case 1:
				return function (i) {
					return e.call(t, i)
				};
			case 2:
				return function (i, n) {
					return e.call(t, i, n)
				};
			case 3:
				return function (i, n, s) {
					return e.call(t, i, n, s)
				};
			case 4:
				return function (i, n, s, r) {
					return e.call(t, i, n, s, r)
				}
			}
			return Ni(e, t)
		}

		function it(e, t, i, n) {
			for (var s = (n || 0) - 1, r = e ? e.length : 0, a = []; ++s < r;) {
				var o = e[s];
				if (o && "object" == typeof o && "number" == typeof o.length && (ls(o) || yt(o))) {
					t || (o = it(o, t, i));
					var l = -1,
						c = o.length,
						u = a.length;
					a.length += c;
					for (; ++l < c;) a[u++] = o[l]
				} else i || a.push(o)
			}
			return a
		}

		function nt(e, t, i, n, s, r) {
			if (i) {
				var a = i(e, t);
				if ("undefined" != typeof a) return !!a
			}
			if (e === t) return 0 !== e || 1 / e == 1 / t;
			var l = typeof e,
				u = typeof t;
			if (!(e !== e || e && Z[l] || t && Z[u])) return !1;
			if (null == e || null == t) return e === t;
			var h = Bn.call(e),
				p = Bn.call(t);
			h == H && (h = W);
			p == H && (p = W);
			if (h != p) return !1;
			switch (h) {
			case B:
			case V:
				return +e == +t;
			case U:
				return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
			case J:
			case X:
				return e == wn(t)
			}
			var f = h == R;
			if (!f) {
				if (Dn.call(e, "__wrapped__ ") || Dn.call(t, "__wrapped__")) return nt(e.__wrapped__ || e, t.__wrapped__ || t, i, n, s, r);
				if (h != W || !rs.nodeClass && (c(e) || c(t))) return !1;
				var v = !rs.argsObject && yt(e) ? _n : e.constructor,
					y = !rs.argsObject && yt(t) ? _n : t.constructor;
				if (v != y && !($t(v) && v instanceof v && $t(y) && y instanceof y)) return !1
			}
			var m = !s;
			s || (s = o());
			r || (r = o());
			for (var g = s.length; g--;)
				if (s[g] == e) return r[g] == t;
			var _ = 0;
			a = !0;
			s.push(e);
			r.push(t);
			if (f) {
				g = e.length;
				_ = t.length;
				a = _ == e.length;
				if (!a && !n) return a;
				for (; _--;) {
					var b = g,
						w = t[_];
					if (n)
						for (; b-- && !(a = nt(e[b], w, i, n, s, r)););
					else if (!(a = nt(e[_], w, i, n, s, r))) break
				}
				return a
			}
			ws(t, function (t, o, l) {
				if (Dn.call(l, o)) {
					_++;
					return a = Dn.call(e, o) && nt(e[o], t, i, n, s, r)
				}
			});
			a && !n && ws(e, function (e, t, i) {
				return Dn.call(i, t) ? a = --_ > -1 : void 0
			});
			if (m) {
				d(s);
				d(r)
			}
			return a
		}

		function rt(e, t, i, n, s) {
			(ls(t) ? Qt : xs)(t, function (t, r) {
				var a, o, l = t,
					c = e[r];
				if (t && ((o = ls(t)) || Cs(t))) {
					for (var u = n.length; u--;)
						if (a = n[u] == t) {
							c = s[u];
							break
						}
					if (!a) {
						var d;
						if (i) {
							l = i(c, t);
							(d = "undefined" != typeof l) && (c = l)
						}
						d || (c = o ? ls(c) ? c : [] : Cs(c) ? c : {});
						n.push(t);
						s.push(c);
						d || rt(c, t, i, n, s)
					}
				} else {
					if (i) {
						l = i(c, t);
						"undefined" == typeof l && (l = t)
					}
					"undefined" != typeof l && (c = l)
				}
				e[r] = c
			})
		}

		function ot(i, n, s) {
			var a = -1,
				l = pt(),
				c = i ? i.length : 0,
				u = [],
				p = !n && c >= w && l === e,
				f = s || p ? o() : u;
			if (p) {
				var v = r(f);
				if (v) {
					l = t;
					f = v
				} else {
					p = !1;
					f = s ? f : (d(f), u)
				}
			}
			for (; ++a < c;) {
				var y = i[a],
					m = s ? s(y, a, i) : y;
				if (n ? !a || f[f.length - 1] !== m : l(f, m) < 0) {
					(s || p) && f.push(m);
					u.push(y)
				}
			}
			if (p) {
				d(f.array);
				h(f)
			} else s && d(f);
			return u
		}

		function lt(e) {
			return function (t, i, n) {
				var s = {};
				i = y.createCallback(i, n, 3);
				if (ls(t))
					for (var r = -1, a = t.length; ++r < a;) {
						var o = t[r];
						e(s, o, i(o, r, t), t)
					} else gs(t, function (t, n, r) {
						e(s, t, i(t, n, r), r)
					});
				return s
			}
		}

		function ct(e, t, i, n, s, r) {
			var a = 1 & t,
				o = 2 & t,
				l = 4 & t,
				c = 8 & t,
				u = 16 & t,
				d = 32 & t,
				h = e;
			if (!o && !$t(e)) throw new xn;
			if (u && !i.length) {
				t &= -17;
				u = i = !1
			}
			if (d && !n.length) {
				t &= -33;
				d = n = !1
			}
			var p = e && e.__bindData__;
			if (p) {
				!a || 1 & p[1] || (p[4] = s);
				!a && 1 & p[1] && (t |= 8);
				!l || 4 & p[1] || (p[5] = r);
				u && On.apply(p[2] || (p[2] = []), i);
				d && On.apply(p[3] || (p[3] = []), n);
				p[1] |= t;
				return ct.apply(null, p)
			}
			if (!a || o || l || d || !(rs.fastBind || zn && u)) v = function () {
				var p = arguments,
					f = a ? s : this;
				if (l || u || d) {
					p = es.call(p);
					u && Vn.apply(p, i);
					d && On.apply(p, n);
					if (l && p.length < r) {
						t |= 16;
						return ct(e, c ? t : -4 & t, p, null, s, r)
					}
				}
				o && (e = f[h]);
				if (this instanceof v) {
					f = dt(e.prototype);
					var y = e.apply(f, p);
					return jt(y) ? y : f
				}
				return e.apply(f, p)
			};
			else {
				if (u) {
					var f = [s];
					On.apply(f, i)
				}
				var v = u ? zn.apply(e, f) : zn.call(e, s)
			}
			os(v, es.call(arguments));
			return v
		}

		function ut() {
			Q.shadowedProps = M;
			Q.array = Q.bottom = Q.loop = Q.top = "";
			Q.init = "iterable";
			Q.useHas = !0;
			for (var e, t = 0; e = arguments[t]; t++)
				for (var i in e) Q[i] = e[i];
			var n = Q.args;
			Q.firstArg = /^[^,]+/.exec(n)[0];
			var s = yn("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + n + ") {\n" + as(Q) + "\n}");
			return s(et, q, Sn, Dn, _, yt, ls, Ft, Q.keys, kn, Z, ss, X, In, Bn)
		}

		function dt(e) {
			return jt(e) ? Un(e) : {}
		}

		function ht(e) {
			return fs[e]
		}

		function pt() {
			var t = (t = y.indexOf) === _i ? e : t;
			return t
		}

		function ft(e) {
			var t, i;
			if (!e || Bn.call(e) != W || (t = e.constructor, $t(t) && !(t instanceof t)) || !rs.argsClass && yt(e) || !rs.nodeClass && c(e)) return !1;
			if (rs.ownLast) {
				ws(e, function (e, t, n) {
					i = Dn.call(n, t);
					return !1
				});
				return i !== !1
			}
			ws(e, function (e, t) {
				i = t
			});
			return "undefined" == typeof i || Dn.call(e, i)
		}

		function vt(e) {
			return vs[e]
		}

		function yt(e) {
			return e && "object" == typeof e && "number" == typeof e.length && Bn.call(e) == H || !1
		}

		function mt(e, t, i, n) {
			if ("boolean" != typeof t && null != t) {
				n = i;
				i = t;
				t = !1
			}
			return x(e, t, "function" == typeof i && et(i, n, 1))
		}

		function gt(e, t, i) {
			return x(e, !0, "function" == typeof t && et(t, i, 1))
		}

		function _t(e, t, i) {
			var n;
			t = y.createCallback(t, i, 3);
			xs(e, function (e, i, s) {
				if (t(e, i, s)) {
					n = i;
					return !1
				}
			});
			return n
		}

		function bt(e, t, i) {
			var n;
			t = y.createCallback(t, i, 3);
			xt(e, function (e, i, s) {
				if (t(e, i, s)) {
					n = i;
					return !1
				}
			});
			return n
		}

		function wt(e, t, i) {
			var n = [];
			ws(e, function (e, t) {
				n.push(t, e)
			});
			var s = n.length;
			t = et(t, i, 3);
			for (; s-- && t(n[s--], n[s], e) !== !1;);
			return e
		}

		function xt(e, t, i) {
			var n = us(e),
				s = n.length;
			t = et(t, i, 3);
			for (; s--;) {
				var r = n[s];
				if (t(e[r], r, e) === !1) break
			}
			return e
		}

		function Ct(e) {
			var t = [];
			ws(e, function (e, i) {
				$t(e) && t.push(i)
			});
			return t.sort()
		}

		function St(e, t) {
			return e ? Dn.call(e, t) : !1
		}

		function kt(e) {
			for (var t = -1, i = us(e), n = i.length, s = {}; ++t < n;) {
				var r = i[t];
				s[e[r]] = r
			}
			return s
		}

		function It(e) {
			return e === !0 || e === !1 || Bn.call(e) == B
		}

		function Tt(e) {
			return e ? "object" == typeof e && Bn.call(e) == V : !1
		}

		function Et(e) {
			return e ? 1 === e.nodeType : !1
		}

		function At(e) {
			var t = !0;
			if (!e) return t;
			var i = Bn.call(e),
				n = e.length;
			if (i == R || i == X || (rs.argsClass ? i == H : yt(e)) || i == W && "number" == typeof n && $t(e.splice)) return !n;
			xs(e, function () {
				return t = !1
			});
			return t
		}

		function Pt(e, t, i, n) {
			return nt(e, t, "function" == typeof i && et(i, n, 2))
		}

		function Lt(e) {
			return Jn(e) && !Xn(parseFloat(e))
		}

		function $t(e) {
			return "function" == typeof e
		}

		function jt(e) {
			return !(!e || !Z[typeof e])
		}

		function Dt(e) {
			return Ot(e) && e != +e
		}

		function Nt(e) {
			return null === e
		}

		function Ot(e) {
			return "number" == typeof e || Bn.call(e) == U
		}

		function Mt(e) {
			return e && Z[typeof e] ? Bn.call(e) == J : !1
		}

		function Ft(e) {
			return "string" == typeof e || Bn.call(e) == X
		}

		function Ht(e) {
			return "undefined" == typeof e
		}

		function Rt(e) {
			var t = arguments,
				i = 2;
			if (!jt(e)) return e;
			"number" != typeof t[2] && (i = t.length);
			if (i > 3 && "function" == typeof t[i - 2]) var n = et(t[--i - 1], t[i--], 2);
			else i > 2 && "function" == typeof t[i - 1] && (n = t[--i]);
			for (var s = es.call(arguments, 1, i), r = -1, a = o(), l = o(); ++r < i;) rt(e, s[r], n, a, l);
			d(a);
			d(l);
			return e
		}

		function Bt(e, t, i) {
			var n = pt(),
				s = "function" == typeof t,
				r = {};
			if (s) t = y.createCallback(t, i, 3);
			else var a = it(arguments, !0, !1, 1);
			ws(e, function (e, i, o) {
				(s ? !t(e, i, o) : n(a, i) < 0) && (r[i] = e)
			});
			return r
		}

		function Vt(e) {
			for (var t = -1, i = us(e), n = i.length, s = hn(n); ++t < n;) {
				var r = i[t];
				s[t] = [r, e[r]]
			}
			return s
		}

		function qt(e, t, i) {
			var n = {};
			if ("function" != typeof t)
				for (var s = -1, r = it(arguments, !0, !1, 1), a = jt(e) ? r.length : 0; ++s < a;) {
					var o = r[s];
					o in e && (n[o] = e[o])
				} else {
					t = y.createCallback(t, i, 3);
					ws(e, function (e, i, s) {
						t(e, i, s) && (n[i] = e)
					})
				}
			return n
		}

		function zt(e, t, i, n) {
			var s = ls(e);
			t = et(t, n, 4);
			if (null == i)
				if (s) i = [];
				else {
					var r = e && e.constructor,
						a = r && r.prototype;
					i = dt(a)
				}(s ? gs : xs)(e, function (e, n, s) {
					return t(i, e, n, s)
				});
			return i
		}

		function Ut(e) {
			for (var t = -1, i = us(e), n = i.length, s = hn(n); ++t < n;) s[t] = e[i[t]];
			return s
		}

		function Wt(e) {
			var t = arguments,
				i = -1,
				n = it(t, !0, !1, 1),
				s = t[2] && t[2][t[1]] === e ? 1 : n.length,
				r = hn(s);
			rs.unindexedChars && Ft(e) && (e = e.split(""));
			for (; ++i < s;) r[i] = e[n[i]];
			return r
		}

		function Jt(e, t, i) {
			var n = -1,
				s = pt(),
				r = e ? e.length : 0,
				a = !1;
			i = (0 > i ? Gn(0, r + i) : i) || 0;
			ls(e) ? a = s(e, t, i) > -1 : "number" == typeof r ? a = (Ft(e) ? e.indexOf(t, i) : s(e, t, i)) > -1 : gs(e, function (e) {
				return ++n >= i ? !(a = e === t) : void 0
			});
			return a
		}

		function Xt(e, t, i) {
			var n = !0;
			t = y.createCallback(t, i, 3);
			if (ls(e))
				for (var s = -1, r = e.length; ++s < r && (n = !!t(e[s], s, e)););
			else gs(e, function (e, i, s) {
				return n = !!t(e, i, s)
			});
			return n
		}

		function Yt(e, t, i) {
			var n = [];
			t = y.createCallback(t, i, 3);
			if (ls(e))
				for (var s = -1, r = e.length; ++s < r;) {
					var a = e[s];
					t(a, s, e) && n.push(a)
				} else gs(e, function (e, i, s) {
					t(e, i, s) && n.push(e)
				});
			return n
		}

		function Gt(e, t, i) {
			t = y.createCallback(t, i, 3);
			if (!ls(e)) {
				var n;
				gs(e, function (e, i, s) {
					if (t(e, i, s)) {
						n = e;
						return !1
					}
				});
				return n
			}
			for (var s = -1, r = e.length; ++s < r;) {
				var a = e[s];
				if (t(a, s, e)) return a
			}
		}

		function Kt(e, t, i) {
			var n;
			t = y.createCallback(t, i, 3);
			Zt(e, function (e, i, s) {
				if (t(e, i, s)) {
					n = e;
					return !1
				}
			});
			return n
		}

		function Qt(e, t, i) {
			if (t && "undefined" == typeof i && ls(e))
				for (var n = -1, s = e.length; ++n < s && t(e[n], n, e) !== !1;);
			else gs(e, t, i);
			return e
		}

		function Zt(e, t, i) {
			var n = e,
				s = e ? e.length : 0;
			t = t && "undefined" == typeof i ? t : et(t, i, 3);
			if (ls(e))
				for (; s-- && t(e[s], s, e) !== !1;);
			else {
				if ("number" != typeof s) {
					var r = us(e);
					s = r.length
				} else rs.unindexedChars && Ft(e) && (n = e.split(""));
				gs(e, function (e, i, a) {
					i = r ? r[--s] : --s;
					return t(n[i], i, a)
				})
			}
			return e
		}

		function ei(e, t) {
			var i = es.call(arguments, 2),
				n = -1,
				s = "function" == typeof t,
				r = e ? e.length : 0,
				a = hn("number" == typeof r ? r : 0);
			Qt(e, function (e) {
				a[++n] = (s ? t : e[t]).apply(e, i)
			});
			return a
		}

		function ti(e, t, i) {
			var n = -1,
				s = e ? e.length : 0,
				r = hn("number" == typeof s ? s : 0);
			t = y.createCallback(t, i, 3);
			if (ls(e))
				for (; ++n < s;) r[n] = t(e[n], n, e);
			else gs(e, function (e, i, s) {
				r[++n] = t(e, i, s)
			});
			return r
		}

		function ii(e, t, i) {
			var s = -1 / 0,
				r = s;
			if (!t && ls(e))
				for (var a = -1, o = e.length; ++a < o;) {
					var l = e[a];
					l > r && (r = l)
				} else {
					t = !t && Ft(e) ? n : y.createCallback(t, i, 3);
					gs(e, function (e, i, n) {
						var a = t(e, i, n);
						if (a > s) {
							s = a;
							r = e
						}
					})
				}
			return r
		}

		function ni(e, t, i) {
			var s = 1 / 0,
				r = s;
			if (!t && ls(e))
				for (var a = -1, o = e.length; ++a < o;) {
					var l = e[a];
					r > l && (r = l)
				} else {
					t = !t && Ft(e) ? n : y.createCallback(t, i, 3);
					gs(e, function (e, i, n) {
						var a = t(e, i, n);
						if (s > a) {
							s = a;
							r = e
						}
					})
				}
			return r
		}

		function si(e, t, i, n) {
			var s = arguments.length < 3;
			t = et(t, n, 4);
			if (ls(e)) {
				var r = -1,
					a = e.length;
				s && (i = e[++r]);
				for (; ++r < a;) i = t(i, e[r], r, e)
			} else gs(e, function (e, n, r) {
				i = s ? (s = !1, e) : t(i, e, n, r)
			});
			return i
		}

		function ri(e, t, i, n) {
			var s = arguments.length < 3;
			t = et(t, n, 4);
			Zt(e, function (e, n, r) {
				i = s ? (s = !1, e) : t(i, e, n, r)
			});
			return i
		}

		function ai(e, t, i) {
			t = y.createCallback(t, i, 3);
			return Yt(e, function (e, i, n) {
				return !t(e, i, n)
			})
		}

		function oi(e, t, i) {
			var n = e ? e.length : 0;
			"number" != typeof n ? e = Ut(e) : rs.unindexedChars && Ft(e) && (e = e.split(""));
			if (null == t || i) return e ? e[en(n - 1)] : v;
			var s = li(e);
			s.length = Kn(Gn(0, t), s.length);
			return s
		}

		function li(e) {
			var t = -1,
				i = e ? e.length : 0,
				n = hn("number" == typeof i ? i : 0);
			Qt(e, function (e) {
				var i = en(++t);
				n[t] = n[i];
				n[i] = e
			});
			return n
		}

		function ci(e) {
			var t = e ? e.length : 0;
			return "number" == typeof t ? t : us(e).length
		}

		function ui(e, t, i) {
			var n;
			t = y.createCallback(t, i, 3);
			if (ls(e))
				for (var s = -1, r = e.length; ++s < r && !(n = t(e[s], s, e)););
			else gs(e, function (e, i, s) {
				return !(n = t(e, i, s))
			});
			return !!n
		}

		function di(e, t, i) {
			var n = -1,
				r = e ? e.length : 0,
				a = hn("number" == typeof r ? r : 0);
			t = y.createCallback(t, i, 3);
			Qt(e, function (e, i, s) {
				var r = a[++n] = l();
				r.criteria = t(e, i, s);
				r.index = n;
				r.value = e
			});
			r = a.length;
			a.sort(s);
			for (; r--;) {
				var o = a[r];
				a[r] = o.value;
				h(o)
			}
			return a
		}

		function hi(e) {
			return e && "number" == typeof e.length ? rs.unindexedChars && Ft(e) ? e.split("") : p(e) : Ut(e)
		}

		function pi(e) {
			for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
				var s = e[t];
				s && n.push(s)
			}
			return n
		}

		function fi(i) {
			var n = -1,
				s = pt(),
				a = i ? i.length : 0,
				o = it(arguments, !0, !0, 1),
				l = [],
				c = a >= w && s === e;
			if (c) {
				var u = r(o);
				if (u) {
					s = t;
					o = u
				} else c = !1
			}
			for (; ++n < a;) {
				var d = i[n];
				s(o, d) < 0 && l.push(d)
			}
			c && h(o);
			return l
		}

		function vi(e, t, i) {
			var n = -1,
				s = e ? e.length : 0;
			t = y.createCallback(t, i, 3);
			for (; ++n < s;)
				if (t(e[n], n, e)) return n;
			return -1
		}

		function yi(e, t, i) {
			var n = e ? e.length : 0;
			t = y.createCallback(t, i, 3);
			for (; n--;)
				if (t(e[n], n, e)) return n;
			return -1
		}

		function mi(e, t, i) {
			var n = 0,
				s = e ? e.length : 0;
			if ("number" != typeof t && null != t) {
				var r = -1;
				t = y.createCallback(t, i, 3);
				for (; ++r < s && t(e[r], r, e);) n++
			} else {
				n = t;
				if (null == n || i) return e ? e[0] : v
			}
			return p(e, 0, Kn(Gn(0, n), s))
		}

		function gi(e, t, i, n) {
			if ("boolean" != typeof t && null != t) {
				n = i;
				i = n && n[t] === e ? null : t;
				t = !1
			}
			null != i && (e = ti(e, i, n));
			return it(e, t)
		}

		function _i(t, i, n) {
			if ("number" == typeof n) {
				var s = t ? t.length : 0;
				n = 0 > n ? Gn(0, s + n) : n || 0
			} else if (n) {
				var r = Ei(t, i);
				return t[r] === i ? r : -1
			}
			return e(t, i, n)
		}

		function bi(e, t, i) {
			var n = 0,
				s = e ? e.length : 0;
			if ("number" != typeof t && null != t) {
				var r = s;
				t = y.createCallback(t, i, 3);
				for (; r-- && t(e[r], r, e);) n++
			} else n = null == t || i ? 1 : t || n;
			return p(e, 0, Kn(Gn(0, s - n), s))
		}

		function wi(i) {
			for (var n = arguments, s = n.length, a = -1, l = o(), c = -1, u = pt(), p = i ? i.length : 0, f = [], v = o(); ++a < s;) {
				var y = n[a];
				l[a] = u === e && (y ? y.length : 0) >= w && r(a ? n[a] : v)
			}
			e: for (; ++c < p;) {
				var m = l[0];
				y = i[c];
				if ((m ? t(m, y) : u(v, y)) < 0) {
					a = s;
					(m || v).push(y);
					for (; --a;) {
						m = l[a];
						if ((m ? t(m, y) : u(n[a], y)) < 0) continue e
					}
					f.push(y)
				}
			}
			for (; s--;) {
				m = l[s];
				m && h(m)
			}
			d(l);
			d(v);
			return f
		}

		function xi(e, t, i) {
			var n = 0,
				s = e ? e.length : 0;
			if ("number" != typeof t && null != t) {
				var r = s;
				t = y.createCallback(t, i, 3);
				for (; r-- && t(e[r], r, e);) n++
			} else {
				n = t;
				if (null == n || i) return e ? e[s - 1] : v
			}
			return p(e, Gn(0, s - n))
		}

		function Ci(e, t, i) {
			var n = e ? e.length : 0;
			"number" == typeof i && (n = (0 > i ? Gn(0, n + i) : Kn(i, n - 1)) + 1);
			for (; n--;)
				if (e[n] === t) return n;
			return -1
		}

		function Si(e) {
			for (var t = arguments, i = 0, n = t.length, s = e ? e.length : 0; ++i < n;)
				for (var r = -1, a = t[i]; ++r < s;)
					if (e[r] === a) {
						Rn.call(e, r--, 1);
						s--
					}
			return e
		}

		function ki(e, t, i) {
			e = +e || 0;
			i = "number" == typeof i ? i : +i || 1;
			if (null == t) {
				t = e;
				e = 0
			}
			for (var n = -1, s = Gn(0, An((t - e) / (i || 1))), r = hn(s); ++n < s;) {
				r[n] = e;
				e += i
			}
			return r
		}

		function Ii(e, t, i) {
			var n = -1,
				s = e ? e.length : 0,
				r = [];
			t = y.createCallback(t, i, 3);
			for (; ++n < s;) {
				var a = e[n];
				if (t(a, n, e)) {
					r.push(a);
					Rn.call(e, n--, 1);
					s--
				}
			}
			return r
		}

		function Ti(e, t, i) {
			if ("number" != typeof t && null != t) {
				var n = 0,
					s = -1,
					r = e ? e.length : 0;
				t = y.createCallback(t, i, 3);
				for (; ++s < r && t(e[s], s, e);) n++
			} else n = null == t || i ? 1 : Gn(0, t);
			return p(e, n)
		}

		function Ei(e, t, i, n) {
			var s = 0,
				r = e ? e.length : s;
			i = i ? y.createCallback(i, n, 1) : Ki;
			t = i(t);
			for (; r > s;) {
				var a = s + r >>> 1;
				i(e[a]) < t ? s = a + 1 : r = a
			}
			return s
		}

		function Ai() {
			return ot(it(arguments, !0, !0))
		}

		function Pi(e, t, i, n) {
			if ("boolean" != typeof t && null != t) {
				n = i;
				i = n && n[t] === e ? null : t;
				t = !1
			}
			null != i && (i = y.createCallback(i, n, 3));
			return ot(e, t, i)
		}

		function Li(e) {
			return fi(e, es.call(arguments, 1))
		}

		function $i() {
			for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, i = e ? ii(Ts(e, "length")) : 0, n = hn(0 > i ? 0 : i); ++t < i;) n[t] = Ts(e, t);
			return n
		}

		function ji(e, t) {
			for (var i = -1, n = e ? e.length : 0, s = {}; ++i < n;) {
				var r = e[i];
				t ? s[r] = t[i] : r && (s[r[0]] = r[1])
			}
			return s
		}

		function Di(e, t) {
			if (!$t(t)) throw new xn;
			return function () {
				return --e < 1 ? t.apply(this, arguments) : void 0
			}
		}

		function Ni(e, t) {
			return arguments.length > 2 ? ct(e, 17, es.call(arguments, 2), null, t) : ct(e, 1, null, null, t)
		}

		function Oi(e) {
			for (var t = arguments.length > 1 ? it(arguments, !0, !1, 1) : Ct(e), i = -1, n = t.length; ++i < n;) {
				var s = t[i];
				e[s] = ct(e[s], 1, null, null, e)
			}
			return e
		}

		function Mi(e, t) {
			return arguments.length > 2 ? ct(t, 19, es.call(arguments, 2), null, e) : ct(t, 3, null, null, e)
		}

		function Fi() {
			for (var e = arguments, t = e.length; t--;)
				if (!$t(e[t])) throw new xn;
			return function () {
				for (var t = arguments, i = e.length; i--;) t = [e[i].apply(this, t)];
				return t[0]
			}
		}

		function Hi(e, t, i) {
			var n = typeof e;
			if (null == e || "function" == n) return et(e, t, i);
			if ("object" != n) return function (t) {
				return t[e]
			};
			var s = us(e),
				r = s[0],
				a = e[r];
			return 1 != s.length || a !== a || jt(a) ? function (t) {
				for (var i = s.length, n = !1; i-- && (n = nt(t[s[i]], e[s[i]], null, !0)););
				return n
			} : function (e) {
				var t = e[r];
				return a === t && (0 !== a || 1 / a == 1 / t)
			}
		}

		function Ri(e, t) {
			t = "number" == typeof t ? t : +t || e.length;
			return ct(e, 4, null, null, null, t)
		}

		function Bi(e, t, i) {
			var n, s, r, a, o, l, c, u = 0,
				d = !1,
				h = !0;
			if (!$t(e)) throw new xn;
			t = Gn(0, t) || 0;
			if (i === !0) {
				var p = !0;
				h = !1
			} else if (jt(i)) {
				p = i.leading;
				d = "maxWait" in i && (Gn(t, i.maxWait) || 0);
				h = "trailing" in i ? i.trailing : h
			}
			var f = function () {
					var i = t - (Nn() - a);
					if (0 >= i) {
						s && Pn(s);
						var d = c;
						s = l = c = v;
						if (d) {
							u = Nn();
							r = e.apply(o, n)
						}
					} else l = Hn(f, i)
				},
				y = function () {
					l && Pn(l);
					s = l = c = v;
					if (h || d !== t) {
						u = Nn();
						r = e.apply(o, n)
					}
				};
			return function () {
				n = arguments;
				a = Nn();
				o = this;
				c = h && (l || !p);
				if (d === !1) var i = p && !l;
				else {
					s || p || (u = a);
					var v = d - (a - u);
					if (0 >= v) {
						s && (s = Pn(s));
						u = a;
						r = e.apply(o, n)
					} else s || (s = Hn(y, v))
				}
				l || t === d || (l = Hn(f, t));
				i && (r = e.apply(o, n));
				return r
			}
		}

		function Vi(e) {
			if (!$t(e)) throw new xn;
			var t = es.call(arguments, 1);
			return Hn(function () {
				e.apply(v, t)
			}, 1)
		}

		function qi(e, t) {
			if (!$t(e)) throw new xn;
			var i = es.call(arguments, 2);
			return Hn(function () {
				e.apply(v, i)
			}, t)
		}

		function zi(e, t) {
			if (!$t(e)) throw new xn;
			var i = function () {
				var n = i.cache,
					s = t ? t.apply(this, arguments) : b + arguments[0];
				return Dn.call(n, s) ? n[s] : n[s] = e.apply(this, arguments)
			};
			i.cache = {};
			return i
		}

		function Ui(e) {
			var t, i;
			if (!$t(e)) throw new xn;
			return function () {
				if (t) return i;
				t = !0;
				i = e.apply(this, arguments);
				e = null;
				return i
			}
		}

		function Wi(e) {
			return ct(e, 16, es.call(arguments, 1))
		}

		function Ji(e) {
			return ct(e, 32, null, es.call(arguments, 1))
		}

		function Xi(e, t, i) {
			var n = !0,
				s = !0;
			if (!$t(e)) throw new xn;
			if (i === !1) n = !1;
			else if (jt(i)) {
				n = "leading" in i ? i.leading : n;
				s = "trailing" in i ? i.trailing : s
			}
			G.leading = n;
			G.maxWait = t;
			G.trailing = s;
			var r = Bi(e, t, G);
			return r
		}

		function Yi(e, t) {
			if (!$t(t)) throw new xn;
			return function () {
				var i = [e];
				On.apply(i, arguments);
				return t.apply(this, i)
			}
		}

		function Gi(e) {
			return null == e ? "" : wn(e).replace(ms, ht)
		}

		function Ki(e) {
			return e
		}

		function Qi(e, t) {
			var i = e,
				n = !t || $t(i);
			if (!t) {
				i = m;
				t = e;
				e = y
			}
			Qt(Ct(t), function (s) {
				var r = e[s] = t[s];
				n && (i.prototype[s] = function () {
					var t = this.__wrapped__,
						n = [t];
					On.apply(n, arguments);
					var s = r.apply(e, n);
					if (t && "object" == typeof t && t === s) return this;
					s = new i(s);
					s.__chain__ = this.__chain__;
					return s
				})
			})
		}

		function Zi() {
			i._ = Tn;
			return this
		}

		function en(e, t, i) {
			var n = null == e,
				s = null == t;
			if (null == i)
				if ("boolean" == typeof e && s) {
					i = e;
					e = 1
				} else if (!s && "boolean" == typeof t) {
				i = t;
				s = !0
			}
			n && s && (t = 1);
			e = +e || 0;
			if (s) {
				t = e;
				e = 0
			} else t = +t || 0;
			var r = Zn();
			return i || e % 1 || t % 1 ? Kn(e + r * (t - e + parseFloat("1e-" + ((r + "").length - 1))), t) : e + Ln(r * (t - e + 1))
		}

		function tn(e, t) {
			if (e) {
				var i = e[t];
				return $t(i) ? e[t]() : i
			}
		}

		function nn(e, t, i) {
			var n = y.templateSettings;
			e || (e = "");
			i = bs({}, i, n);
			var s, r = bs({}, i.imports, n.imports),
				o = us(r),
				l = Ut(r),
				c = 0,
				u = i.interpolate || j,
				d = "__p += '",
				h = bn((i.escape || j).source + "|" + u.source + "|" + (u === L ? E : j).source + "|" + (i.evaluate || j).source + "|$", "g");
			e.replace(h, function (t, i, n, r, o, l) {
				n || (n = r);
				d += e.slice(c, l).replace(N, a);
				i && (d += "' +\n__e(" + i + ") +\n'");
				if (o) {
					s = !0;
					d += "';\n" + o + ";\n__p += '"
				}
				n && (d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'");
				c = l + t.length;
				return t
			});
			d += "';\n";
			var p = i.variable,
				f = p;
			if (!f) {
				p = "obj";
				d = "with (" + p + ") {\n" + d + "\n}\n"
			}
			d = (s ? d.replace(S, "") : d).replace(I, "$1").replace(T, "$1;");
			d = "function(" + p + ") {\n" + (f ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
			var m = "\n/*\n//# sourceURL=" + (i.sourceURL || "/lodash/template/source[" + F+++"]") + "\n*/";
			try {
				var g = yn(o, "return " + d + m).apply(v, l)
			} catch (_) {
				_.source = d;
				throw _
			}
			if (t) return g(t);
			g.source = d;
			return g
		}

		function sn(e, t, i) {
			e = (e = +e) > -1 ? e : 0;
			var n = -1,
				s = hn(e);
			t = et(t, i, 1);
			for (; ++n < e;) s[n] = t(n);
			return s
		}

		function rn(e) {
			return null == e ? "" : wn(e).replace(ys, vt)
		}

		function an(e) {
			var t = ++g;
			return wn(null == e ? "" : e) + t
		}

		function on(e) {
			e = new m(e);
			e.__chain__ = !0;
			return e
		}

		function ln(e, t) {
			t(e);
			return e
		}

		function cn() {
			this.__chain__ = !0;
			return this
		}

		function un() {
			return wn(this.__wrapped__)
		}

		function dn() {
			return this.__wrapped__
		}
		i = i ? at.defaults(tt.Object(), i, at.pick(tt, O)) : tt;
		var hn = i.Array,
			pn = i.Boolean,
			fn = i.Date,
			vn = i.Error,
			yn = i.Function,
			mn = i.Math,
			gn = i.Number,
			_n = i.Object,
			bn = i.RegExp,
			wn = i.String,
			xn = i.TypeError,
			Cn = [],
			Sn = vn.prototype,
			kn = _n.prototype,
			In = wn.prototype,
			Tn = i._,
			En = bn("^" + wn(kn.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
			An = mn.ceil,
			Pn = i.clearTimeout,
			Ln = mn.floor,
			$n = yn.prototype.toString,
			jn = En.test(jn = _n.getPrototypeOf) && jn,
			Dn = kn.hasOwnProperty,
			Nn = En.test(Nn = fn.now) && Nn || function () {
				return +new fn
			},
			On = Cn.push,
			Mn = kn.propertyIsEnumerable,
			Fn = i.setImmediate,
			Hn = i.setTimeout,
			Rn = Cn.splice,
			Bn = kn.toString,
			Vn = Cn.unshift,
			qn = function () {
				try {
					var e = {},
						t = En.test(t = _n.defineProperty) && t,
						i = t(e, e, e) && t
				} catch (n) {}
				return i
			}(),
			zn = En.test(zn = Bn.bind) && zn,
			Un = En.test(Un = _n.create) && Un,
			Wn = En.test(Wn = hn.isArray) && Wn,
			Jn = i.isFinite,
			Xn = i.isNaN,
			Yn = En.test(Yn = _n.keys) && Yn,
			Gn = mn.max,
			Kn = mn.min,
			Qn = i.parseInt,
			Zn = mn.random,
			es = Cn.slice,
			ts = En.test(i.attachEvent),
			is = zn && !/\n|true/.test(zn + ts),
			ns = {};
		ns[R] = hn;
		ns[B] = pn;
		ns[V] = fn;
		ns[z] = yn;
		ns[W] = _n;
		ns[U] = gn;
		ns[J] = bn;
		ns[X] = wn;
		var ss = {};
		ss[R] = ss[V] = ss[U] = {
			constructor: !0,
			toLocaleString: !0,
			toString: !0,
			valueOf: !0
		};
		ss[B] = ss[X] = {
			constructor: !0,
			toString: !0,
			valueOf: !0
		};
		ss[q] = ss[z] = ss[J] = {
			constructor: !0,
			toString: !0
		};
		ss[W] = {
			constructor: !0
		};
		! function () {
			for (var e = M.length; e--;) {
				var t = M[e];
				for (var i in ss) Dn.call(ss, i) && !Dn.call(ss[i], t) && (ss[i][t] = !1)
			}
		}();
		m.prototype = y.prototype;
		var rs = y.support = {};
		! function () {
			var e = function () {
					this.x = 1
				},
				t = {
					0: 1,
					length: 1
				},
				n = [];
			e.prototype = {
				valueOf: 1,
				y: 1
			};
			for (var s in new e) n.push(s);
			for (s in arguments);
			rs.argsClass = Bn.call(arguments) == H;
			rs.argsObject = arguments.constructor == _n && !(arguments instanceof hn);
			rs.enumErrorProps = Mn.call(Sn, "message") || Mn.call(Sn, "name");
			rs.enumPrototypes = Mn.call(e, "prototype");
			rs.fastBind = zn && !is;
			rs.funcDecomp = !En.test(i.WinRTError) && D.test(f);
			rs.funcNames = "string" == typeof yn.name;
			rs.nonEnumArgs = 0 != s;
			rs.nonEnumShadows = !/valueOf/.test(n);
			rs.ownLast = "x" != n[0];
			rs.spliceObjects = (Cn.splice.call(t, 0, 1), !t[0]);
			rs.unindexedChars = "xx" != "x" [0] + _n("x")[0];
			try {
				rs.nodeClass = !(Bn.call(document) == W && !({
					toString: 0
				} + ""))
			} catch (r) {
				rs.nodeClass = !0
			}
		}(1);
		y.templateSettings = {
			escape: /<%-([\s\S]+?)%>/g,
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: L,
			variable: "",
			imports: {
				_: y
			}
		};
		var as = function (e) {
			var t = "var index, iterable = " + e.firstArg + ", result = " + e.init + ";\nif (!iterable) return result;\n" + e.top + ";";
			if (e.array) {
				t += "\nvar length = iterable.length; index = -1;\nif (" + e.array + ") {  ";
				rs.unindexedChars && (t += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  ");
				t += "\n  while (++index < length) {\n    " + e.loop + ";\n  }\n}\nelse {  "
			} else rs.nonEnumArgs && (t += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + e.loop + ";\n    }\n  } else {  ");
			rs.enumPrototypes && (t += "\n  var skipProto = typeof iterable == 'function';\n  ");
			rs.enumErrorProps && (t += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
			var i = [];
			rs.enumPrototypes && i.push('!(skipProto && index == "prototype")');
			rs.enumErrorProps && i.push('!(skipErrorProps && (index == "message" || index == "name"))');
			if (e.useHas && e.keys) {
				t += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n";
				i.length && (t += "    if (" + i.join(" && ") + ") {\n  ");
				t += e.loop + ";    ";
				i.length && (t += "\n    }");
				t += "\n  }  "
			} else {
				t += "\n  for (index in iterable) {\n";
				e.useHas && i.push("hasOwnProperty.call(iterable, index)");
				i.length && (t += "    if (" + i.join(" && ") + ") {\n  ");
				t += e.loop + ";    ";
				i.length && (t += "\n    }");
				t += "\n  }    ";
				if (rs.nonEnumShadows) {
					t += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ";
					for (k = 0; 7 > k; k++) {
						t += "\n    index = '" + e.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))";
						e.useHas || (t += " || (!nonEnum[index] && iterable[index] !== objectProto[index])");
						t += ") {\n      " + e.loop + ";\n    }      "
					}
					t += "\n  }    "
				}
			}(e.array || rs.nonEnumArgs) && (t += "\n}");
			t += e.bottom + ";\nreturn result";
			return t
		};
		Un || (dt = function (e) {
			if (jt(e)) {
				u.prototype = e;
				var t = new u;
				u.prototype = null
			}
			return t || {}
		});
		var os = qn ? function (e, t) {
			K.value = t;
			qn(e, "__bindData__", K)
		} : u;
		rs.argsClass || (yt = function (e) {
			return e && "object" == typeof e && "number" == typeof e.length && Dn.call(e, "callee") || !1
		});
		var ls = Wn || function (e) {
				return e && "object" == typeof e && "number" == typeof e.length && Bn.call(e) == R || !1
			},
			cs = ut({
				args: "object",
				init: "[]",
				top: "if (!(objectTypes[typeof object])) return result",
				loop: "result.push(index)"
			}),
			us = Yn ? function (e) {
				return jt(e) ? rs.enumPrototypes && "function" == typeof e || rs.nonEnumArgs && e.length && yt(e) ? cs(e) : Yn(e) : []
			} : cs,
			ds = {
				args: "collection, callback, thisArg",
				top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
				array: "typeof length == 'number'",
				keys: us,
				loop: "if (callback(iterable[index], index, collection) === false) return result"
			},
			hs = {
				args: "object, source, guard",
				top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
				keys: us,
				loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
				bottom: "  }\n}"
			},
			ps = {
				top: "if (!objectTypes[typeof iterable]) return result;\n" + ds.top,
				array: !1
			},
			fs = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			},
			vs = kt(fs),
			ys = bn("(" + us(vs).join("|") + ")", "g"),
			ms = bn("[" + us(fs).join("") + "]", "g"),
			gs = ut(ds),
			_s = ut(hs, {
				top: hs.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
				loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
			}),
			bs = ut(hs),
			ws = ut(ds, ps, {
				useHas: !1
			}),
			xs = ut(ds, ps);
		$t(/x/) && ($t = function (e) {
			return "function" == typeof e && Bn.call(e) == z
		});
		var Cs = jn ? function (e) {
				if (!e || Bn.call(e) != W || !rs.argsClass && yt(e)) return !1;
				var t = e.valueOf,
					i = "function" == typeof t && (i = jn(t)) && jn(i);
				return i ? e == i || jn(e) == i : ft(e)
			} : ft,
			Ss = lt(function (e, t, i) {
				Dn.call(e, i) ? e[i]++ : e[i] = 1
			}),
			ks = lt(function (e, t, i) {
				(Dn.call(e, i) ? e[i] : e[i] = []).push(t)
			}),
			Is = lt(function (e, t, i) {
				e[i] = t
			}),
			Ts = ti,
			Es = Yt;
		is && st && "function" == typeof Fn && (Vi = function (e) {
			if (!$t(e)) throw new xn;
			return Fn.apply(i, arguments)
		});
		var As = 8 == Qn(C + "08") ? Qn : function (e, t) {
			return Qn(Ft(e) ? e.replace($, "") : e, t || 0)
		};
		y.after = Di;
		y.assign = _s;
		y.at = Wt;
		y.bind = Ni;
		y.bindAll = Oi;
		y.bindKey = Mi;
		y.chain = on;
		y.compact = pi;
		y.compose = Fi;
		y.countBy = Ss;
		y.createCallback = Hi;
		y.curry = Ri;
		y.debounce = Bi;
		y.defaults = bs;
		y.defer = Vi;
		y.delay = qi;
		y.difference = fi;
		y.filter = Yt;
		y.flatten = gi;
		y.forEach = Qt;
		y.forEachRight = Zt;
		y.forIn = ws;
		y.forInRight = wt;
		y.forOwn = xs;
		y.forOwnRight = xt;
		y.functions = Ct;
		y.groupBy = ks;
		y.indexBy = Is;
		y.initial = bi;
		y.intersection = wi;
		y.invert = kt;
		y.invoke = ei;
		y.keys = us;
		y.map = ti;
		y.max = ii;
		y.memoize = zi;
		y.merge = Rt;
		y.min = ni;
		y.omit = Bt;
		y.once = Ui;
		y.pairs = Vt;
		y.partial = Wi;
		y.partialRight = Ji;
		y.pick = qt;
		y.pluck = Ts;
		y.pull = Si;
		y.range = ki;
		y.reject = ai;
		y.remove = Ii;
		y.rest = Ti;
		y.shuffle = li;
		y.sortBy = di;
		y.tap = ln;
		y.throttle = Xi;
		y.times = sn;
		y.toArray = hi;
		y.transform = zt;
		y.union = Ai;
		y.uniq = Pi;
		y.values = Ut;
		y.where = Es;
		y.without = Li;
		y.wrap = Yi;
		y.zip = $i;
		y.zipObject = ji;
		y.collect = ti;
		y.drop = Ti;
		y.each = Qt;
		y.eachRight = Zt;
		y.extend = _s;
		y.methods = Ct;
		y.object = ji;
		y.select = Yt;
		y.tail = Ti;
		y.unique = Pi;
		y.unzip = $i;
		Qi(y);
		y.clone = mt;
		y.cloneDeep = gt;
		y.contains = Jt;
		y.escape = Gi;
		y.every = Xt;
		y.find = Gt;
		y.findIndex = vi;
		y.findKey = _t;
		y.findLast = Kt;
		y.findLastIndex = yi;
		y.findLastKey = bt;
		y.has = St;
		y.identity = Ki;
		y.indexOf = _i;
		y.isArguments = yt;
		y.isArray = ls;
		y.isBoolean = It;
		y.isDate = Tt;
		y.isElement = Et;
		y.isEmpty = At;
		y.isEqual = Pt;
		y.isFinite = Lt;
		y.isFunction = $t;
		y.isNaN = Dt;
		y.isNull = Nt;
		y.isNumber = Ot;
		y.isObject = jt;
		y.isPlainObject = Cs;
		y.isRegExp = Mt;
		y.isString = Ft;
		y.isUndefined = Ht;
		y.lastIndexOf = Ci;
		y.mixin = Qi;
		y.noConflict = Zi;
		y.parseInt = As;
		y.random = en;
		y.reduce = si;
		y.reduceRight = ri;
		y.result = tn;
		y.runInContext = f;
		y.size = ci;
		y.some = ui;
		y.sortedIndex = Ei;
		y.template = nn;
		y.unescape = rn;
		y.uniqueId = an;
		y.all = Xt;
		y.any = ui;
		y.detect = Gt;
		y.findWhere = Gt;
		y.foldl = si;
		y.foldr = ri;
		y.include = Jt;
		y.inject = si;
		xs(y, function (e, t) {
			y.prototype[t] || (y.prototype[t] = function () {
				var t = [this.__wrapped__],
					i = this.__chain__;
				On.apply(t, arguments);
				var n = e.apply(y, t);
				return i ? new m(n, i) : n
			})
		});
		y.first = mi;
		y.last = xi;
		y.sample = oi;
		y.take = mi;
		y.head = mi;
		xs(y, function (e, t) {
			var i = "sample" !== t;
			y.prototype[t] || (y.prototype[t] = function (t, n) {
				var s = this.__chain__,
					r = e(this.__wrapped__, t, n);
				return s || null != t && (!n || i && "function" == typeof t) ? new m(r, s) : r
			})
		});
		y.VERSION = "2.2.1";
		y.prototype.chain = cn;
		y.prototype.toString = un;
		y.prototype.value = dn;
		y.prototype.valueOf = dn;
		gs(["join", "pop", "shift"], function (e) {
			var t = Cn[e];
			y.prototype[e] = function () {
				var e = this.__chain__,
					i = t.apply(this.__wrapped__, arguments);
				return e ? new m(i, e) : i
			}
		});
		gs(["push", "reverse", "sort", "unshift"], function (e) {
			var t = Cn[e];
			y.prototype[e] = function () {
				t.apply(this.__wrapped__, arguments);
				return this
			}
		});
		gs(["concat", "slice", "splice"], function (e) {
			var t = Cn[e];
			y.prototype[e] = function () {
				return new m(t.apply(this.__wrapped__, arguments), this.__chain__)
			}
		});
		rs.spliceObjects || gs(["pop", "shift", "splice"], function (e) {
			var t = Cn[e],
				i = "splice" == e;
			y.prototype[e] = function () {
				var e = this.__chain__,
					n = this.__wrapped__,
					s = t.apply(n, arguments);
				0 === n.length && delete n[0];
				return e || i ? new m(s, e) : s
			}
		});
		return y
	}
	var v, y = [],
		m = [],
		g = 0,
		_ = {},
		b = +new Date + "",
		w = 75,
		x = 40,
		C = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
		S = /\b__p \+= '';/g,
		I = /\b(__p \+=) '' \+/g,
		T = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
		E = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
		A = /\w*$/,
		P = /^function[ \n\r\t]+\w/,
		L = /<%=([\s\S]+?)%>/g,
		$ = RegExp("^[" + C + "]*0+(?=.$)"),
		j = /($^)/,
		D = /\bthis\b/,
		N = /['\n\r\t\u2028\u2029\\]/g,
		O = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"],
		M = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		F = 0,
		H = "[object Arguments]",
		R = "[object Array]",
		B = "[object Boolean]",
		V = "[object Date]",
		q = "[object Error]",
		z = "[object Function]",
		U = "[object Number]",
		W = "[object Object]",
		J = "[object RegExp]",
		X = "[object String]",
		Y = {};
	Y[z] = !1;
	Y[H] = Y[R] = Y[B] = Y[V] = Y[U] = Y[W] = Y[J] = Y[X] = !0;
	var G = {
			leading: !1,
			maxWait: 0,
			trailing: !1
		},
		K = {
			configurable: !1,
			enumerable: !1,
			value: null,
			writable: !1
		},
		Q = {
			args: "",
			array: null,
			bottom: "",
			firstArg: "",
			init: "",
			keys: null,
			loop: "",
			shadowedProps: null,
			support: null,
			top: "",
			useHas: !1
		},
		Z = {
			"boolean": !1,
			"function": !0,
			object: !0,
			number: !1,
			string: !1,
			undefined: !1
		},
		et = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"	": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		tt = Z[typeof window] && window || this,
		it = Z[typeof exports] && exports && !exports.nodeType && exports,
		nt = Z[typeof module] && module && !module.nodeType && module,
		st = nt && nt.exports === it && it,
		rt = Z[typeof global] && global;
	!rt || rt.global !== rt && rt.window !== rt || (tt = rt);
	var at = f();
	if ("function" == typeof define && "object" == typeof define.amd && define.amd) {
		tt._ = at;
		define("lodash", [], function () {
			return at
		})
	} else it && nt ? st ? (nt.exports = at)._ = at : it._ = at : tt._ = at
}).call(this);
define("play/statistics", ["jquery", "lodash"], function (e, t) {
	var i = function (e, i, n, s, r) {
			if (window._gaq && window._gaq.push) {
				var a = ["_trackEvent", e, i];
				n && a.push(n);
				s && a.push(s);
				_gaq.push(a);
				t.isFunction(r) && setTimeout(r, 100)
			} else t.isFunction(r) && r()
		},
		n = function (t, i, n, s, r) {
			var a = e(t),
				o = a.closest("a"),
				l = e._data(a[0], "events") || {},
				c = l.click && l.click.length > 0;
			a.click(function (e) {
				svt.play.statistics.trackEvent(i, n, s, r);
				if (!c && o.length && o.attr("href")) {
					e.preventDefault();
					setTimeout(function () {
						window.location = o.attr("href")
					}, 100);
					return !1
				}
				return !0
			})
		};
	window.svt = window.svt || {};
	svt.play = svt.play || {};
	svt.play.statistics = {
		trackEvent: i,
		addClickTracking: n,
		init: function () {
			window._gaq && window._gaq.push && e("[data-clicktracking]").each(function (t, i) {
				var s = e(i).attr("data-clicktracking").replace(/'/g, '"') || "{}";
				s = JSON.parse(s);
				s && s.category && s.action && n(i, s.category, s.action, s.label, s.value);
				e(i).removeAttr("data-clicktracking")
			})
		}
	};
	return svt.play.statistics
});
define("jquery.kinetic", ["jquery"], function (e) {
	var t = {
			cursor: "move",
			decelerate: !0,
			triggerHardware: !1,
			y: !0,
			x: !0,
			slowdown: .9,
			maxvelocity: 40,
			throttleFPS: 60,
			movingClass: {
				up: "kinetic-moving-up",
				down: "kinetic-moving-down",
				left: "kinetic-moving-left",
				right: "kinetic-moving-right"
			},
			deceleratingClass: {
				up: "kinetic-decelerating-up",
				down: "kinetic-decelerating-down",
				left: "kinetic-decelerating-left",
				right: "kinetic-decelerating-right"
			}
		},
		i = "kinetic-settings",
		n = "kinetic-active";
	window.requestAnimationFrame || (window.requestAnimationFrame = function () {
		return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
			window.setTimeout(e, 1e3 / 60)
		}
	}());
	e.support = e.support || {};
	e.extend(e.support, {
		touch: "ontouchend" in document
	});
	var s = function () {
			return !1
		},
		r = function (e, t) {
			return 0 === Math.floor(Math.abs(e)) ? 0 : e * t
		},
		a = function (e, t) {
			var i = e;
			e > 0 ? e > t && (i = t) : 0 - t > e && (i = 0 - t);
			return i
		},
		o = function (e, t) {
			this.removeClass(e.movingClass.up).removeClass(e.movingClass.down).removeClass(e.movingClass.left).removeClass(e.movingClass.right).removeClass(e.deceleratingClass.up).removeClass(e.deceleratingClass.down).removeClass(e.deceleratingClass.left).removeClass(e.deceleratingClass.right);
			e.velocity > 0 && this.addClass(t.right);
			e.velocity < 0 && this.addClass(t.left);
			e.velocityY > 0 && this.addClass(t.down);
			e.velocityY < 0 && this.addClass(t.up)
		},
		l = function (e, t) {
			t.velocity = 0;
			t.velocityY = 0;
			t.decelerate = !0;
			"function" == typeof t.stopped && t.stopped.call(e, t)
		},
		c = function (e, t) {
			var i = e[0];
			if (t.x && i.scrollWidth > 0) {
				i.scrollLeft = t.scrollLeft = i.scrollLeft + t.velocity;
				Math.abs(t.velocity) > 0 && (t.velocity = t.decelerate ? r(t.velocity, t.slowdown) : t.velocity)
			} else t.velocity = 0; if (t.y && i.scrollHeight > 0) {
				i.scrollTop = t.scrollTop = i.scrollTop + t.velocityY;
				Math.abs(t.velocityY) > 0 && (t.velocityY = t.decelerate ? r(t.velocityY, t.slowdown) : t.velocityY)
			} else t.velocityY = 0;
			o.call(e, t, t.deceleratingClass);
			"function" == typeof t.moved && t.moved.call(e, t);
			Math.abs(t.velocity) > 0 || Math.abs(t.velocityY) > 0 ? window.requestAnimationFrame(function () {
				c(e, t)
			}) : l(e, t)
		},
		u = function (t) {
			var n = e.kinetic.callMethods[t],
				s = Array.prototype.slice.call(arguments);
			n && this.each(function () {
				var t = s.slice(1),
					r = e(this).data(i);
				t.unshift(r);
				n.apply(this, t)
			})
		},
		d = function (t, i) {
			t[0];
			e.support.touch ? t.bind("touchstart", i.events.touchStart).bind("touchend", i.events.inputEnd).bind("touchmove", i.events.touchMove) : t.mousedown(i.events.inputDown).mouseup(i.events.inputEnd).mousemove(i.events.inputMove);
			t.click(i.events.inputClick).scroll(i.events.scroll).bind("selectstart", s).bind("dragstart", i.events.dragStart).bind("mousewheel", i.events.mouseWheel).bind("wheel", i.events.mouseWheel)
		},
		h = function (t, i) {
			t[0];
			e.support.touch ? t.unbind("touchstart", i.events.touchStart).unbind("touchend", i.events.inputEnd).unbind("touchmove", i.events.touchMove) : t.unbind("mousedown", i.events.inputDown).unbind("mouseup", i.events.inputEnd).unbind("mousemove", i.events.inputMove).unbind("scroll", i.events.scroll).unbind("mousewheel", i.events.mouseWheel).unbind("wheel", i.events.mouseWheel);
			t.unbind("click", i.events.inputClick).unbind("selectstart", s);
			t.unbind("dragstart", i.events.dragStart)
		},
		p = function (s) {
			this.addClass(n).each(function () {
				var n = this,
					r = e(this);
				if (!r.data(i)) {
					var l, u, h, p, f = e.extend({}, t, s),
						v = !1,
						y = !1,
						m = !1,
						g = 1e3 / f.throttleFPS;
					f.velocity = 0;
					f.velocityY = 0;
					var _ = function () {
						l = !1;
						u = !1;
						m = !1
					};
					e(document).mouseup(_).click(_);
					var b = function () {
							f.velocity = a(v - l, f.maxvelocity);
							f.velocityY = a(y - u, f.maxvelocity)
						},
						w = function (t) {
							return e.isFunction(f.filterTarget) ? f.filterTarget.call(n, t) !== !1 : !0
						},
						x = function (e, t) {
							m = !0;
							f.velocity = v = 0;
							f.velocityY = y = 0;
							l = e;
							u = t
						},
						C = function () {
							if (l && v && f.decelerate === !1) {
								f.decelerate = !0;
								b();
								l = v = !1;
								c(r, f)
							}
							m = !1
						},
						S = function (t, i) {
							if (!h || new Date > new Date(h.getTime() + g)) {
								h = new Date;
								if (m && (l || u)) {
									if (p) {
										e(p).blur();
										p = null;
										r.focus()
									}
									f.decelerate = !1;
									f.velocity = f.velocityY = 0;
									r[0].scrollLeft = f.scrollLeft = f.x ? r[0].scrollLeft - (t - l) : r[0].scrollLeft;
									r[0].scrollTop = f.scrollTop = f.y ? r[0].scrollTop - (i - u) : r[0].scrollTop;
									v = l;
									y = u;
									l = t;
									u = i;
									b();
									o.call(r, f, f.movingClass);
									"function" == typeof f.moved && f.moved.call(r, f)
								}
							}
						};
					f.events = {
						touchStart: function (e) {
							var t;
							if (w(e.target)) {
								t = e.originalEvent.touches[0];
								x(t.clientX, t.clientY);
								e.stopPropagation()
							}
						},
						touchMove: function (e) {
							var t;
							if (m) {
								t = e.originalEvent.touches[0];
								S(t.clientX, t.clientY);
								e.preventDefault && e.preventDefault()
							}
						},
						inputDown: function (e) {
							if (1 === e.which && w(e.target)) {
								x(e.clientX, e.clientY);
								p = e.target;
								"IMG" === e.target.nodeName && e.preventDefault();
								e.stopPropagation()
							} else C()
						},
						inputEnd: function (e) {
							C();
							p = null;
							e.preventDefault && e.preventDefault()
						},
						inputMove: function (e) {
							if (m) {
								S(e.clientX, e.clientY);
								e.preventDefault && e.preventDefault()
							}
						},
						scroll: function (e) {
							e.preventDefault && e.preventDefault()
						},
						inputClick: function (e) {
							if (Math.abs(f.velocity) > 0) {
								e.preventDefault();
								return !1
							}
							return !0
						},
						dragStart: function () {
							return !p
						},
						mouseWheel: function (e) {
							var t = e.originalEvent.wheelDeltaX || e.originalEvent.deltaX,
								i = e.originalEvent.wheelDeltaY || e.originalEvent.deltaY;
							e.originalEvent.wheelDeltaX || (t = -1 * t);
							if (t && Math.abs(t) > Math.abs(i)) {
								e.preventDefault();
								x(e.originalEvent.clientX, e.originalEvent.clientY);
								S(e.originalEvent.clientX + t / 6, e.originalEvent.clientY);
								C()
							}
						}
					};
					d(r, f);
					r.data(i, f).css("cursor", f.cursor);
					f.triggerHardware && r.css({
						"-webkit-transform": "translate3d(0,0,0)",
						"-webkit-perspective": "1000",
						"-webkit-backface-visibility": "hidden"
					})
				}
			})
		};
	e.kinetic = {
		settingsKey: i,
		callMethods: {
			start: function (t, i) {
				var n = e(this);
				t = e.extend(t, i);
				if (t) {
					t.decelerate = !1;
					c(n, t)
				}
			},
			end: function (t) {
				e(this);
				t && (t.decelerate = !0)
			},
			stop: function (t) {
				var i = e(this);
				l(i, t)
			},
			detach: function (t) {
				var i = e(this);
				h(i, t);
				i.removeClass(n).css("cursor", "")
			},
			attach: function (t) {
				var i = e(this);
				d(i, t);
				i.addClass(n).css("cursor", "move")
			}
		}
	};
	e.fn.kinetic = function (e) {
		"string" == typeof e ? u.apply(this, arguments) : p.call(this, e);
		return this
	}
});
define("modules/slidablelist/simplelistitem", ["Class"], function (e) {
	return e.extend({
		init: function (e) {
			this.setElement(e);
			this.hasLoadedImage = !1
		},
		setElement: function (e) {
			this.$el = e
		},
		loadImage: function (e) {
			if (!this.hasLoadedImage) {
				var t = this.$el.attr("data-src");
				if (t) {
					var i = this;
					this.$el.bind("load", function () {
						i.hasLoadedImage = !0;
						e()
					});
					this.$el.attr("src", t);
					this.$el.get(0).removeAttribute("data-src")
				} else e && e()
			}
		},
		getWidth: function () {
			return this.$el.parents(".flow_js-video-list-item-container").children().outerWidth(!0)
		}
	})
});
define("svtlib-slidablelist/app/js/arrow_view", ["Class", "svtlib-messagechannel"], function (e, t) {
	return e.extend({
		init: function (e) {
			this._isContinuousScroll = !!e
		},
		setElement: function (e) {
			this.$el = e;
			this.bind()
		},
		bind: function () {
			var e = this;
			if (this._isContinuousScroll) {
				this.$el.on("mousedown", function (t) {
					e._onActivated();
					var i, n = function () {
							clearInterval(i);
							e.$el.off("mouseup")
						},
						s = function () {
							e.$el.hasClass("is-visible") ? e._onActivated() : n()
						};
					i = setInterval(s, 500);
					e.$el.on("mouseup", function (e) {
						n();
						e.preventDefault()
					});
					t.preventDefault()
				});
				this.$el.on("click", function (e) {
					e.preventDefault()
				})
			} else this.$el.click(function () {
				e._onActivated()
			})
		},
		hide: function () {
			this.$el.removeClass("is-visible");
			this.$el.addClass("is-invisible")
		},
		show: function () {
			this.$el.addClass("is-visible");
			this.$el.removeClass("is-invisible")
		},
		_onActivated: function () {
			t.publish("arrow-view-activated", this)
		}
	})
});
define("svtlib-slidablelist/app/js/row_view", ["Class", "lodash"], function (e, t) {
	var i = {
		duration: 350,
		queue: !1,
		easing: "linear"
	};
	return e.extend({
		setElement: function (e) {
			this.$el = e
		},
		distanceToRight: function () {
			return this.$el.get(0).scrollWidth - this.getWidth() - this.distanceToLeft()
		},
		distanceToLeft: function () {
			return this.$el.scrollLeft()
		},
		setLeftDistance: function (e, n, s) {
			this.testFunc();
			if (n) {
				t.defaults(n, i);
				var r = n.complete;
				n.complete = function () {
					s();
					t.isFunction(r) && r()
				};
				this.$el.animate({
					scrollLeft: e
				}, n)
			} else {
				this.$el.scrollLeft(e);
				s()
			}
		},
		testFunc: function () {},
		maxScrollDistance: function () {
			return this.$el.get(0).scrollWidth - this.$el.width()
		},
		getWidth: function (e) {
			var t = 0,
				i = 0;
			if (!e) {
				t = this.$el.css("padding-left");
				t = parseInt(t.substring(0, t.length - 2), 10);
				i = this.$el.css("padding-right");
				i = parseInt(i.substring(0, i.length - 2), 10)
			}
			return this.$el.width() + t + i
		}
	})
});
define("svtlib-slidablelist/app/js/svtlib-slidablelist", ["Class", "lodash", "./arrow_view", "./row_view", "svtlib-messagechannel"], function (e, t, i, n, s) {
	var r = {
		listItems: [],
		element: null,
		viewPortWidth: 960,
		continuousScroll: !1,
		leftArrowIdentifier: ".svtlibSlidableListArrow.is-left",
		rightArrowIdentifier: ".svtlibSlidableListArrow.is-right",
		listContainerIdentifier: ".svtlibSlidableListContainer",
		animation: {
			duration: 350
		},
		centerAlignment: !1,
		forceRepaint: !0,
		numImagesToPreload: 0
	};
	return e.extend({
		_lastKnownScrollPosition: 0,
		_numImagesLoaded: 0,
		_cacheIndexArray: [],
		init: function (e) {
			t.defaults(e, r);
			this.listItemViews = e.listItems;
			this.$el = e.element;
			this.createArrowViews(e.continuousScroll);
			this.leftArrow.setElement(this.$el.find(e.leftArrowIdentifier));
			this.rightArrow.setElement(this.$el.find(e.rightArrowIdentifier));
			this.createRow(e.buffer);
			this.row.setElement(this.$el.find(e.listContainerIdentifier));
			this.animation = e.animation;
			this.numImagesToPreload = e.numImagesToPreload;
			this._backgroundImageInterval = e.backgroundImageInterval;
			this._viewPortSize = e.viewPortWidth;
			this.setCenterAlignment(e.centerAlignment);
			if (e.loadImagesOnInit !== !1) {
				this.setArrowVisiblity();
				this.loadImagesInViewPort()
			}
			this._bind()
		},
		createArrowViews: function (e) {
			this.leftArrow = new i(e);
			this.rightArrow = new i(e)
		},
		createRow: function (e) {
			this.row = new n(e)
		},
		setLeftDistance: function (e, t, i) {
			var n = this,
				r = t === !0 ? this.animation : null,
				a = function () {
					n.setArrowVisiblity();
					"function" == typeof i && i()
				};
			if (0 === this._lastKnownScrollPosition && this._lastKnownScrollPosition === e) {
				this.row.$el.trigger("scroll");
				a()
			} else this.row.setLeftDistance(e, r, function () {
				s.publish("slideableListMoved", n);
				a()
			})
		},
		setCenterPosition: function (e, t) {
			this.setLeftDistance(e, t)
		},
		restoreLeftScrollToLastKnownPosition: function () {
			this.setLeftDistance(this._lastKnownScrollPosition)
		},
		loadMoreImages: function () {
			var e = Math.floor(this._lastKnownScrollPosition / this._getTitleWidth());
			this._centerAlignment === !0 ? this._loadImagesFromCenter(e, this._numImagesInViewPort()) : this._loadImagesToRight(e, this._numImagesInViewPort())
		},
		loadMoreImagesInBackground: function (e) {
			var i = 0;
			t.forEach(this.listItemViews, function (n, s) {
				return -1 === t.findIndex(this._cacheIndexArray, s) && this._loadImage(n, s) === !0 && i++ === e ? !1 : void 0
			})
		},
		loadImagesInViewPort: function () {
			var e = Math.floor(this._lastKnownScrollPosition / this._getTitleWidth());
			this._loadImagesToRight(e, this._numImagesInViewPort())
		},
		loadAllImages: function () {
			this._loadImagesToRight(0, this.listItemViews.length)
		},
		setListItemViews: function (e) {
			this.listItemViews = e;
			this._lastKnownScrollPosition = 0;
			this.loadImagesInViewPort();
			this.setArrowVisiblity()
		},
		_loadImagesFromCenter: function (e, t) {
			var i = Math.ceil(t / 2);
			this._loadImagesToRight(e, i);
			this._loadImagesToLeft(e, i)
		},
		_loadImagesToRight: function (e, t) {
			var i = e;
			t += this.numImagesToPreload;
			for (var n = 0; t > n; n++) {
				var s = this.listItemViews[i++];
				if (void 0 === s) return !1;
				this._loadImage(s, n)
			}
		},
		_loadImagesToLeft: function (e, t) {
			t += this.numImagesToPreload;
			for (var i = e, n = t; n > 0; n--) {
				var s = this.listItemViews[i--];
				if (void 0 === s) return !1;
				this._loadImage(s, n)
			}
		},
		_loadImage: function (e, t) {
			var i = this,
				n = function () {
					i._onImageLoaded()
				};
			if (e.loadImage(n) !== !1) {
				this._numImagesLoaded++;
				this._cacheIndexArray.push(t);
				return !0
			}
			return !1
		},
		_numImagesInViewPort: function () {
			return Math.ceil(this._viewPortSize / this._getTitleWidth())
		},
		refreshViewPort: function () {
			this.loadMoreImages()
		},
		setViewPortSize: function (e) {
			this._viewPortSize = e;
			this.refreshViewPort()
		},
		setCenterAlignment: function (e) {
			this._centerAlignment = e
		},
		getContent: function () {
			return this.row.$el
		},
		setContent: function (e) {
			this.row.$el.html(e)
		},
		appendContent: function (e) {
			this.row.$el.append(e)
		},
		setArrowVisiblity: function () {
			if (0 === this.listItemViews.length) return !1;
			this._shouldDisplayRightArrow() ? this.rightArrow.show() : this.rightArrow.hide();
			this._shouldDisplayLeftArrow() ? this.leftArrow.show() : this.leftArrow.hide()
		},
		hideArrows: function () {
			this.leftArrow.hide();
			this.rightArrow.hide()
		},
		_bind: function () {
			var e = this;
			this.row.$el.bind("scroll", function () {
				e._previousScrollPosition = e._lastKnownScrollPosition;
				e._lastKnownScrollPosition = e.row.distanceToLeft();
				e.loadMoreImages();
				s.publish("slideableListMoved", e)
			});
			s.subscribe("arrow-view-activated", function (t) {
				e._onActivatedArrow(t)
			})
		},
		_shouldDisplayRightArrow: function () {
			return this.row.distanceToRight() > 0
		},
		_shouldDisplayLeftArrow: function () {
			return this.row.distanceToLeft() > 0
		},
		_onActivatedArrow: function (e) {
			if (e === this.leftArrow || e === this.rightArrow) {
				var t = this._leftPositionCalculator(e === this.leftArrow),
					i = !0;
				this.setLeftDistance(t, i)
			}
		},
		_leftPositionCalculator: function (e) {
			for (var t = this._getTitleWidth(), i = Math.max(Math.floor(this._viewPortSize / t), 1) * t, n = e === !0 ? this.row.distanceToLeft() - i : this.row.distanceToLeft() + i, s = 1, r = 0, a = this.row.distanceToLeft(); s < this.listItemViews.length - 1; s++) {
				r = s * t;
				if (r === n) break;
				r > a && a + t > r && (n += r - a)
			}
			return e === !0 ? Math.max(n, 0) : Math.min(n, this.row.maxScrollDistance())
		},
		_onImageLoaded: function () {
			if (t.defaults.forceRepaint) {
				this.$el.css("border-right", "solid 1px transparent");
				var e = this;
				setTimeout(function () {
					e.$el.css("border-right", "solid 0px transparent")
				}, 100)
			}
		},
		_getTitleWidth: function () {
			return 0 === this.listItemViews.length ? 0 : this.listItemViews[0].getWidth()
		},
		adjustResizePosition: function () {
			var e = this._titleWidth;
			this._titleWidth = this._getTitleWidth();
			var t = this._titleWidth / e;
			this.setLeftDistance(this.row.distanceToLeft() * t, !1)
		}
	})
});
requirejs.config({
	shim: {
		Class: {
			exports: "Class"
		},
		jQuery: {
			exports: "jQuery"
		},
		lodash: {
			exports: "_"
		}
	},
	paths: {
		Class: "/bower_components/Class.js/Class",
		jQuery: "/bower_components/jquery/jquery",
		lodash: "/bower_components/lodash/dist/lodash"
	},
	packages: [{
		name: "svtlib-jasmine-testsuite",
		main: "app/js/require-config.js",
		location: "/bower_components/svtlib-jasmine-testsuite"
	}, {
		name: "svtlib-messagechannel",
		main: "app/js/require-config.js",
		location: "/bower_components/svtlib-messagechannel"
	}]
});
define("svtlib-slidablelist/app/js/require-config", ["svtlib-slidablelist/app/js/svtlib-slidablelist"], function (e) {
	return e
});
define("svtlib-slidablelist", ["svtlib-slidablelist/app/js/require-config"], function (e) {
	return e
});
define("modules/slidablelist/slidablelist", ["Class", "jquery", "lodash", "jquery.kinetic", "./simplelistitem", "svtlib-slidablelist", "svtlib-messagechannel"], function (e, t, i, n, s, r, a) {
	var o = {
		listContainerIdentifier: ".flow_js-video-list-item-container",
		expandButtonIdentifier: ".play_js-expand-videolist"
	};
	return e.extend({
		_$videoList: void 0,
		_slidableList: void 0,
		_$expandButton: void 0,
		_$extraCollapseButton: void 0,
		_$listContainer: void 0,
		_$listPanel: void 0,
		_lastItemWidth: void 0,
		_leftArrowIdentifier: ".flow_slidablelist-arrow.is-left",
		_rightArrowIdentifier: ".flow_slidablelist-arrow.is-right",
		_$leftArrow: void 0,
		_$rightArrow: void 0,
		_expanded: !1,
		_isActive: !1,
		init: function (e, n) {
			var a = this;
			n = i.defaults(n || {}, o);
			this._$videoList = e;
			this._$listContainer = this._$videoList.find(n.listContainerIdentifier);
			this._$listPanel = this._$videoList.closest(".flow_videolist");
			var l = [];
			this._$videoList.find("img").each(function () {
				l.push(new s(t(this)))
			});
			this._slidableList = new r({
				continuousScroll: !0,
				viewPortWidth: this._$videoList.width(),
				element: this._$videoList,
				listItems: l,
				listContainerIdentifier: n.listContainerIdentifier,
				leftArrowIdentifier: this._leftArrowIdentifier,
				rightArrowIdentifier: this._rightArrowIdentifier,
				animation: {
					duration: 200
				},
				forceRepaint: !1,
				numImagesToPreload: this._$videoList.hasClass("playJsIsTeaser") ? 2 : 6
			});
			Modernizr.touch || this._$listContainer.kinetic({
				moved: function (e) {
					a._$videoList.find(":active").trigger("mouseleave");
					a._slidableList.setLeftDistance(e.scrollLeft, !1)
				},
				y: !1
			});
			this._$leftArrow = this._$videoList.find(this._leftArrowIdentifier);
			this._$rightArrow = this._$videoList.find(this._rightArrowIdentifier);
			this._$expandButton = t(this._$listPanel.find(n.expandButtonIdentifier));
			this._$expandButton.click(function () {
				a.toggleExpansion()
			});
			this._lastItemWidth = this._slidableList._getTitleWidth();
			this._repositionArrows();
			this._bindListeners()
		},
		getElement: function () {
			return this._$videoList
		},
		resize: function () {
			this._slidableList.adjustResizePosition();
			this._slidableList.setViewPortSize(this.getElement().width());
			this._slidableList.loadImagesInViewPort();
			this._slidableList.setArrowVisiblity();
			this._repositionArrows()
		},
		toggleExpansion: function () {
			this._expanded ? this.collapse() : this.expand()
		},
		expand: function () {
			this._expanded = !0;
			this._$listPanel.addClass("flow_videolist-expanded");
			this._slidableList.loadAllImages();
			if (!Modernizr.touch) {
				this._$listContainer.kinetic("detach");
				this._slidableList.hideArrows()
			}
			this.showCollapseButtons()
		},
		collapse: function () {
			this._expanded = !1;
			this._$listPanel.removeClass("flow_videolist-expanded");
			Modernizr.touch || this._$listContainer.kinetic("attach");
			this._slidableList.restoreLeftScrollToLastKnownPosition();
			this.showExpandButton()
		},
		showCollapseButtons: function () {
			var e = this;
			this._$expandButton.find(".flow_videolist-expand-button__text").text("Stäng");
			this._$expandButton.find(".flow_videolist-expand-button__icon").removeClass("flow_videolist-expand-button__icon").addClass("flow_videolist-expand-button__icon--colapse");
			this._$extraCollapseButton = this._$expandButton.clone();
			this._$extraCollapseButton.addClass("flow_videolist-extra-collapse-button");
			this._$extraCollapseButton.click(function () {
				window.scrollTo(0, e._$listPanel.offset().top - 70);
				e.collapse()
			});
			this._$extraCollapseButton.insertAfter(this._$listContainer)
		},
		showExpandButton: function () {
			this._$expandButton.find(".flow_videolist-expand-button__text").text("Visa alla");
			this._$expandButton.find(".flow_videolist-expand-button__icon--colapse").removeClass("flow_videolist-expand-button__icon--colapse").addClass("flow_videolist-expand-button__icon");
			this._$extraCollapseButton.remove();
			this._$extraCollapseButton = void 0
		},
		_repositionArrows: function () {
			var e = this._$videoList.find(".flow_round-img--big, .flow_videolist-thumbnail").first(),
				t = e.closest("article, li").offsetParent().offset().top,
				i = t ? Math.abs(e.offset().top - t) : 0,
				n = this._$leftArrow.height() / 2,
				s = e.height() / 2,
				r = {
					"margin-top": -n,
					top: s + i
				};
			this._$leftArrow.css(r);
			this._$rightArrow.css(r)
		},
		_bindListeners: function () {
			var e = this;
			a.subscribe("/videocontext/update", function (t) {
				t.activeList && (e._isActive = e._$videoList.find(".flow_videolist-element").index(t.activeList.get(0)) > -1)
			});
			a.subscribe("/modules/flowplayer/video-episode-loaded", function (t) {
				e._isActive && e._$videoList.find("[data-index=" + t.index + "]")
			})
		}
	})
});
define("utils/modernizr", [], function () {
	return window.Modernizr || {}
});
define("modules/schedulecarousel/schedulecarousel", ["Class", "jquery", "lodash", "svtlib-messagechannel", "utils/modernizr", "play/device"], function (e, t, i, n, s, r) {
	var a = ".flow_js-video-list-item",
		o = ".flow_js-video-list",
		l = ".flow_js-video-list-item-title",
		c = ".svtflowJsScheduleCover",
		u = "svtflow_tabla-element--active",
		d = "svtflow_tabla-element--focus",
		h = "." + u,
		p = ".flow_js-schedulelist-nav--next",
		f = ".flow_js-schedulelist-nav--previous",
		v = "is--active",
		y = e.extend({
			_$carouselContainer: null,
			_$videoList: null,
			_$activeItem: null,
			_isActive: !1,
			_pagedItemList: [],
			_carousel: null,
			init: function () {
				this._$carouselContainer = t(".flow_js-schedule-list");
				var e = {
						arrows: !1,
						centerMode: s.touch ? !1 : !0,
						slide: "li",
						slidesToScroll: s.touch ? 5 : 1,
						touchThreshold: 9
					},
					i = {
						centerPadding: "5%",
						slidesToShow: 3,
						slidesToScroll: s.touch ? 3 : 1,
						centerMode: s.touch ? !1 : !0
					},
					n = {
						centerPadding: 0,
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: !0,
						touchThreshold: 8
					};
				this._carousel = this._$carouselContainer.find(o).slick(t.extend({}, e, {
					centerPadding: "5%",
					slidesToShow: 5,
					responsive: [{
						breakpoint: 1050,
						settings: t.extend({}, e, i)
					}, {
						breakpoint: 786,
						settings: t.extend({}, e, n)
					}]
				}));
				this._$videoList = this._$carouselContainer.find(o);
				this._$activeItem = this._$videoList.find(h);
				this._isActive = this._$activeItem.length > 0;
				this._bindListeners();
				this._centerActiveItem()
			},
			_bindListeners: function () {
				var e = this;
				t(p).click(function (t) {
					t.preventDefault();
					e._carousel.slickNext();
					return !1
				});
				t(f).click(function (t) {
					t.preventDefault();
					e._carousel.slickPrev();
					return !1
				});
				n.subscribe("/videocontext/update", function (t) {
					t.activeList && (e._isActive = e._$videoList.find(a).index(t.activeList.get(0)) > -1)
				});
				n.subscribe("/modules/flowplayer/video-episode-loaded", function (t) {
					e._setActiveItem(e._$videoList.find("[data-index=" + t.index + "]"));
					e._setCoverItem(e._$activeItem)
				});
				n.subscribe("/router/clear", function () {
					e._centerActiveItem();
					e._setCoverItem(e._$activeItem)
				});
				this._coverItemTimer = null;
				var i = this._$videoList.find(a),
					o = this._$carouselContainer.find(l);
				r.whenLarge(function () {
					o.off("click.toggleinfo");
					i.removeClass(d);
					s.touch && i.on("click.toggleinfo", function () {
						var n = t(this);
						clearTimeout(e._coverItemTimer);
						e._coverItemTimer = setTimeout(function () {
							e._setCoverItem(n);
							i.not(n).removeClass(d);
							n.toggleClass(d)
						}, 100)
					})
				}, function () {
					i.off("click.toggleinfo");
					i.removeClass(d);
					o.on("click.toggleinfo", function () {
						i.toggleClass(d)
					})
				});
				if (!s.touch) {
					i.on("mouseover", function () {
						var n = t(this);
						clearTimeout(e._coverItemTimer);
						e._coverItemTimer = setTimeout(function () {
							e._setCoverItem(n)
						}, 100);
						i.removeClass(d)
					});
					i.on("mouseout", function () {
						clearTimeout(e._coverItemTimer);
						e._coverItemTimer = setTimeout(e._setCoverItem.bind(e, e._$activeItem), 100);
						i.removeClass(d)
					})
				}
				t(c).on("click", function (t) {
					t.preventDefault();
					e._centerActiveItem();
					e._$activeItem.toggleClass(d);
					return !1
				})
			},
			_setCoverItem: function (e) {
				var i = e.data("thumbnailxlimax");
				i && t(c + ":visible").css({
					"background-image": "url(" + i.replace(/ /g, "%20") + ")"
				})
			},
			_setActiveItem: function (e) {
				if (this._isActive) {
					var t = this._$videoList.find("." + u);
					if (t.length) {
						t.find("img").removeClass(v);
						t.removeClass(u)
					}
					e.addClass(u);
					e.find("img").addClass(v);
					this._$activeItem = e.not(".slick-cloned")
				}
			},
			_centerActiveItem: function () {
				if (this._isActive && this._$activeItem) {
					var e = this._$activeItem.data("index") - 1;
					this._carousel.slickGoTo(e)
				}
			}
		});
	return {
		make: function (e) {
			return new y(e)
		}
	}
});
define("modules/splash/splash-minimal", ["jquery", "Class"], function (e, t) {
	var i = t.extend({
		splashTimeout: 3500,
		_timeoutID: 0,
		init: function (e) {
			this.$splashContainer = e;
			if (this.$splashContainer.length) {
				var t = this;
				Modernizr.csstransitions && this.$splashContainer.find(".flow-progress__bar").width("100%");
				this._timeoutID = setTimeout(function () {
					t.hideSplash()
				}, this.splashTimeout)
			}
		},
		hideSplash: function () {
			var e = this;
			svt.play.$body.removeClass("flow--splashing");
			e.$splashContainer.remove();
			e._destroy()
		},
		_destroy: function () {
			this.$splashItems = null;
			this.$splashContainer = null
		}
	});
	i.make = function (e) {
		return new i(e)
	};
	return i
});
define("svtlib-playerplugins/app/js/template/svtplayerplugins_template", [], function () {
	var e = {};
	e.getTemplate = function (e) {
		switch (e) {
		case "playParentalControlBlockedScreen":
			return '<div class="playParentalControlBlockedScreen playControlBlockedScreen svtplayerCenter-Outer playOverlayScreen-Outer" role="alertdialog" tabindex="0" aria-labelledby="playParentalControlBlockedScreenTitle_<%= this.playerId %>" aria-describedby="playParentalControlBlockedScreenDescription_<%= this.playerId %>"><div class="svtplayerCenter-Inner playControlBlockedScreen-Inner playOverlayScreen-Inner "><h2 id="playParentalControlBlockedScreenTitle_<%= this.playerId %>">Olämpligt innehåll för barn</h2><div class="svtlib-playerplugins-hide-Gte-M"><p class="svtlib-playerplugins-Margin-Top-S" id="playParentalControlBlockedScreenDescription_<%= this.playerId %>">Alla ska vara trygga på svt.se och SVT Play. Läs mer på svt.se om <a href="http://www.svt.se/tittarservice/hitta-svar/sa-skyddar-vi-barnen-1">innehåll för barn på SVT</a> eller gå direkt till <a href="http://www.svt.se/barnkanalen">Barnkanalen</a></p></div><div class="svtlib-playerplugins-hide-Lte-S"><p class="svtlib-playerplugins-Margin-Top-S">SVT vill att både barn och vuxna ska känna sig trygga på svt.se och SVT Play. Därför varnar vi för program som har ett innehåll som inte lämpar sig för barn.</p><h3 class="svtlib-playerplugins-Margin-Top-S">Barnkanalen</h3><p>Vi är särskilt måna om barnen. För att skydda barnen har vi därför valt att skapa en egen, säkrare värld, nämligen <a href="http://www.svt.se/barnkanalen">Barnkanalen</a></p><h3 class="svtlib-playerplugins-Margin-Top-S">Barnlås</h3><p>I många apparater kan man ställa in barnlås med hjälp av operativsystemet. Då kan du blockera vissa sidor, som exempelvis SVT Play.</p><p><a href="http://www.svt.se/tittarservice/hitta-svar/teknik/barnlas">Barnlås i operativsystemet</a></p><p class="svtlib-playerplugins-Margin-Top-S">Läs gärna mer på svt.se om <a href="http://www.svt.se/tittarservice/hitta-svar/sa-skyddar-vi-barnen-1">innehåll för barn på SVT</a></p></div><div class="playParentalControlInput svtClearfix"><button class="playParentalControlCloseButton">Stäng</button></div></div></div>';
		case "playNextEpisodeOverlay":
			return '<div class="svtplayerCenter-Outer playOverlayScreen-Outer"><div class="svtplayerCenter-Inner playOverlayContainer"><button class="svtlib-playerplugins-next-episode-button-left playJsNextEpisode-Replay<% if(this.title) { %> svtlib-playerplugins-left <% } %>"><span class="svtlib-playerplugins-next-episode-caption-left"><span class="svt_icon svt_icon--replay svtlib-playerplugins-next-episode-icon-left"></span><span class="svtlib-playerplugins-next-episode-text-left">Spela igen</span></span></button><% if(this.title) { %><button class="svtlib-playerplugins-next-episode-button-right svtlib-playerplugins-right playJsNextEpisode-PlayNext"><span class="svtlib-playerplugins-next-episode-thumbnail"><img src="<%= this.thumbnail %>"></span><span class="svtlib-playerplugins-next-episode-caption-right"><span class="svt_icon svt_icon--forward svtlib-playerplugins-next-episode-icon-right"></span><span class="svtlib-playerplugins-next-episode-text-right"><span class="playH6-Bold playTextAlignLeft">Nästa <%= this.type %>:</span><span class="playOverFlowEllipsis playLink"><%= this.title %></span></span></span></button><% } %></div></div>';
		case "playExpiredOverlay":
			return '<div class="svtplayerOverlay svtplayerCenter-Outer playControlBlockedScreen playOverlayScreen-Outer"><div class="svtplayerCenter-Inner playControlBlockedScreen-Inner playOverlayScreen-Inner"><span class="svt_icon svt_icon--info playHide-XS"></span><div class="playExpiredOverlayText"><h2>Vi har tyvärr inte längre rättigheter att visa det här avsnittet</h2><p class="svtlib-playerplugins-Margin-Top-S">Avsnittet kunde ses fram till <%= this.expiredDate %>. <a href="http://www.svt.se/tittarservice/hitta-svar/program/rattigheter-i-svt-play">Läs mer om rättigheter på SVT Play</a>.</p></div></div></div>';
		default:
			log("No template found: " + e + " in svtplayerplugins_template");
			return ""
		}
	};
	return e
});
define("svtlib-playerplugins/app/js/expired-episode/expiredEpisode", ["Class", "jquery", "lodash", "./../template/svtplayerplugins_template", "svtlib-messagechannel"], function (e, t, i, n, s) {
	var r = {
		templateName: "playExpiredOverlay",
		overlayId: "expiredEpisode"
	};
	return e.extend({
		_playerId: void 0,
		$player: void 0,
		_overlayId: void 0,
		init: function (e, n) {
			n = n || {};
			i.defaults(n, r);
			this._config = n;
			this.$player = t(e);
			if ("true" === this.$player.attr("data-expired")) {
				var a = this.$player.attr("data-permalink");
				this._playerId = this.$player.attr("id");
				this._overlayId = this._config.overlayId;
				this._subscribe();
				this._registerOverlay();
				this.data = {
					expiredDate: this.$player.attr("data-expired-date"),
					numberOfClips: this.$player.attr("data-number-of-clips"),
					numberOfEpisodes: this.$player.attr("data-number-of-episodes"),
					permalink: a
				};
				s.publish("/player/showOverlay", [this._playerId, this._overlayId])
			}
		},
		show: function () {
			if (!this.$overlay) {
				this.$overlay = t(t.jqote(n.getTemplate(this._config.templateName), this.data));
				this.$player.append(this.$overlay);
				this._bindClickEvents()
			}
			this.$overlay.show()
		},
		hide: function () {
			this.$overlay && this.$overlay.hide()
		},
		_subscribe: function () {
			var e = this;
			s.subscribe("player/overlay/expiredEpisode/show/" + this._playerId, function () {
				e.show()
			});
			s.subscribe("player/overlay/expiredEpisode/hide/" + this._playerId, function () {
				e.hide()
			})
		},
		_registerOverlay: function () {
			s.publish("/player/registerOverlay", [this._playerId, this._overlayId, 1e3])
		},
		_bindClickEvents: function () {
			this.$overlay.find(".playJsOpenTab").on("click", function (e) {
				e.preventDefault();
				window.location.hash = "related";
				t("#" + t(this).attr("data-target")).click().focus()
			})
		}
	})
});
define("svtlib-playerplugins/app/js/next-episode/nextEpisode", ["Class", "jquery", "lodash", "./../template/svtplayerplugins_template", "play/statistics", "svtlib-messagechannel"], function (e, t, i, n, s, r) {
	var a = {
		templateName: "playNextEpisodeOverlay",
		markerClasses: {
			next: "playJsNextEpisode-PlayNext",
			replay: "playJsNextEpisode-Replay"
		}
	};
	return e.extend({
		_playerId: void 0,
		_videoId: void 0,
		$player: void 0,
		nextEpisode: void 0,
		$overlay: void 0,
		replayEnabled: void 0,
		init: function (e, n) {
			n = n || {};
			i.defaults(n, a);
			this._config = n;
			var s = this;
			s.$player = t(e);
			s._playerId = s.$player.attr("id");
			s._videoId = s.$player.attr("data-id");
			s.$player.attr("data-next") && (s.nextEpisode = {
				title: s.$player.attr("data-next-title"),
				thumbnail: s.$player.attr("data-next-thumbnail"),
				href: s.$player.attr("data-next-href"),
				type: s.$player.attr("data-next-type")
			});
			s.replayEnabled = s.$player.attr("data-replay-button") ? !0 : !1;
			if (s.replayEnabled || s.nextEpisode) {
				s._subscribe();
				s._addButtonDelegates();
				s._registerOverlay()
			}
		},
		show: function () {
			svt.play.statistics.trackEvent("Next Episode", "Show overlay", this._videoId);
			if (!this.$overlay) {
				this.$overlay = t(t.jqote(n.getTemplate(this._config.templateName), this.nextEpisode));
				this.$player.append(this.$overlay)
			}
			this.$overlay.show()
		},
		hide: function () {
			this.$overlay && this.$overlay.hide()
		},
		_subscribe: function () {
			var e = this;
			r.subscribe("player/overlay/nextEpisode/show/" + this._playerId, function () {
				e.show()
			});
			r.subscribe("player/overlay/nextEpisode/hide/" + this._playerId, function () {
				e.hide()
			});
			r.subscribe("/player/onVideoEnd", function (t) {
				var i = t instanceof Array ? t[0] : t;
				if (i == e._playerId) {
					r.publish("/player/enable", [e._playerId, !1]);
					r.publish("/player/showOverlay", [e._playerId, "nextEpisode"])
				}
			})
		},
		_registerOverlay: function () {
			r.publish("/player/registerOverlay", [this._playerId, "nextEpisode", 350])
		},
		_addButtonDelegates: function () {
			var e = this;
			t("body").on({
				click: function (t) {
					t.stopImmediatePropagation();
					t.preventDefault();
					t.stopPropagation();
					s && s.trackEvent("Videos", "Play next", e._videoId, !1, function () {
						location.href = e.nextEpisode.href
					})
				}
			}, "." + this._config.markerClasses.next);
			this.replayEnabled && t("body").on({
				click: function () {
					r.publish("/player/play", [e._playerId, !0]);
					s && s.trackEvent("Videos", "Play again", e._videoId)
				}
			}, "." + this._config.markerClasses.replay)
		}
	})
});
define("svtlib-playerplugins/app/js/parental-control/parentalControl", ["Class", "jquery", "lodash", "./../template/svtplayerplugins_template", "svtlib-messagechannel"], function (e, t, i, n, s) {
	var r = {
		templateName: "playParentalControlBlockedScreen",
		markerClass: "playJsParentalControl"
	};
	return e.extend({
		_player: void 0,
		_playerId: void 0,
		_overlayId: void 0,
		init: function (e, a) {
			a = a || {};
			i.defaults(a, r);
			n = a.template || n;
			this._config = a;
			this._player = t(e);
			this._playerId = this._player.attr("id");
			this._overlayId = "parentalControl";
			this._registerOverlay();
			this._subscribe();
			this._player.hasClass(this._config.markerClass) && s.publish("/player/showOverlay", [this._playerId, this._overlayId])
		},
		_subscribe: function () {
			var e = this;
			s.subscribe("player/overlay/parentalControl/show/" + this._playerId, function () {
				e.show()
			});
			s.subscribe("player/overlay/parentalControl/hide/" + this._playerId, function () {
				e.hide()
			})
		},
		_registerOverlay: function () {
			s.publish("/player/registerOverlay", [this._playerId, this._overlayId, 550])
		},
		show: function () {
			var e = this;
			this.showBlockedScreen();
			t(".playParentalControlCloseButton", e._player).click(function () {
				s.publish("/player/hideOverlay", [e._playerId, e._overlayId]);
				return !1
			})
		},
		hide: function () {
			this.closeBlockedScreen()
		},
		showBlockedScreen: function () {
			var e = t(t.jqote(n.getTemplate(this._config.templateName), {
				playerId: this._playerId
			}));
			this._player.append(e);
			e.focus()
		},
		closeBlockedScreen: function () {
			s.publish("/player/showControlbar", [this._playerId, !0, !0]);
			t("." + this._config.templateName, this._player).remove();
			s.publish("/player/enable", [this._playerId, !0])
		}
	})
});
define("svtlib-playerplugins/app/js/popularity/popularity", ["Class", "jquery"], function (e, t) {
	return e.extend({
		playerId: void 0,
		$player: void 0,
		nextEpisode: void 0,
		init: function (e) {
			var i = this;
			i.$player = t(e);
			if (i.$player.attr("data-popularity")) {
				var n = i.$player.attr("data-popularity-host"),
					s = i.$player.attr("data-popularity-id"),
					r = i.$player.attr("data-popularity-program-id"),
					a = i.$player.attr("data-popularity-category"),
					o = i.$player.attr("data-popularity-url");
				t.ajax({
					type: "GET",
					url: n + "/video?url=" + o + "&id=" + s + "&programId=" + r + (a ? "&category=" + a : ""),
					dataType: "jsonp",
					jsonpCallback: "callback",
					success: function () {
						return !0
					}
				})
			}
		}
	})
});
requirejs.config({
	shim: {
		Class: {
			exports: "Class"
		},
		lodash: {
			exports: "_"
		}
	},
	paths: {
		Class: "/bower_components/Class.js/Class",
		jQuery: "/bower_components/jquery/jquery",
		lodash: "/bower_components/lodash/dist/lodash"
	},
	packages: [{
		name: "svtlib-messagechannel",
		main: "app/js/require-config.js",
		location: "/bower_components/svtlib-messagechannel"
	}]
});
define("svtlib-playerplugins/app/js/require-config", ["svtlib-playerplugins/app/js/expired-episode/expiredEpisode", "svtlib-playerplugins/app/js/next-episode/nextEpisode", "svtlib-playerplugins/app/js/parental-control/parentalControl", "svtlib-playerplugins/app/js/popularity/popularity"], function (e, t, i, n) {
	return {
		ExpiredEpisode: e,
		NextEpisode: t,
		ParentalControl: i,
		Popularity: n
	}
});
define("svtlib-playerplugins", ["svtlib-playerplugins/app/js/require-config"], function (e) {
	return e
});
/* Copyright (c) 2009 Nedstat B.V. 4.1.0
 * All rights reserved.
 * By using this software, you are agreeing to be bound by the
 * terms of this license: http://www.nedstat.com/terms.html
 */
if (typeof (ns_) == "undefined") {
	ns_ = new Object()
}
ns_.extend = function (a, c) {
	for (var b in c) {
		a[b] = c[b]
	}
	return a
};
ns_.encode = encodeURIComponent ? encodeURIComponent : function (a) {
	return escape(a).replace(/\//g, "%2F")
};
ns_.b = {};
ns_.b.ie =
/*@cc_on!@*/
false;
ns_.b.ie9 = ns_.b.ie && document.addEventListener;
ns_.b.sf = navigator.vendor ? /apple/i.test(navigator.vendor) : false;
ns_.b.ch = window.chrome ? true : false;
ns_.b.ff = /firefox/i.test(navigator.userAgent);
ns_.b.op = window.opera ? true : false;
if (typeof (ns_) == "undefined") {
	ns_ = new Object()
}
ns_.dt = {
	initDate: new Date().getTime(),
	lastRun: new Date().getTime(),
	delta: 0,
	intervalID: null,
	intervalTime: 1000,
	intervalRuns: 0,
	timedObserver: function () {
		var a = ns_.dt.getTime();
		ns_.dt.intervalID = setTimeout(ns_.dt.timedObserver, ns_.dt.intervalTime);
		ns_.dt.intervalRuns++;
		var b = a - ns_.dt.lastRun - ns_.dt.intervalTime;
		if (b > (ns_.dt.intervalTime * 2) || b < -(ns_.dt.intervalTime * 2)) {
			ns_.dt.delta += b;
			a -= b
		}
		ns_.dt.lastRun = a
	},
	getTime: function () {
		var a = new Date().getTime();
		return a - ns_.dt.delta
	}
};
ns_.dt.timedObserver();
ns_.extend(Function.prototype, (function () {
	var e = Array.prototype.slice;

	function d(k, h) {
		var j = k.length,
			i = h.length;
		while (i--) {
			k[j + i] = h[i]
		}
		return k
	}

	function f(i, h) {
		i = e.call(i, 0);
		return d(i, h)
	}

	function a() {
		return this.STargumentIsSuper() ? ["$super"] : [""]
	}

	function c() {
		return /^[\s\(]*function[^(]*\(\s*\$super/.test(this.toString())
	}

	function b(j) {
		if (arguments.length < 2 && typeof arguments[0] == "undefined") {
			return this
		}
		var h = this,
			i = e.call(arguments, 1);
		return function () {
			var k = f(i, arguments);
			return h.apply(j, k)
		}
	}

	function g(i) {
		var h = this;
		return function () {
			var j = d([h.STbind(this)], arguments);
			return i.apply(this, j)
		}
	}
	return {
		STargumentNames: a,
		STargumentIsSuper: c,
		STbind: b,
		STwrap: g
	}
})());
ns_.Class = {
	extend: function (c, a) {
		if (arguments.length == 1) {
			a = c, c = null
		}
		if (typeof (c) == "function") {
			var b = function () {
				return this.initialize.apply(this, arguments)
			};
			b.prototype = new c()
		} else {
			var b = function () {}
		} if (a) {
			ns_.Class.inherit(b.prototype, a)
		}
		return b
	},
	inherit: function (e, b, h) {
		if (arguments.length == 3) {
			var c = e[h],
				d = b[h],
				g = d;
			var a;
			if (e && g.STargumentIsSuper()) {
				d = (function (f) {
					return function () {
						return f.apply(this, arguments)
					}
				})(c).STwrap(g)
			} else {
				d = function () {
					var j = this.parent;
					this.parent = c;
					var f = g.apply(this, arguments);
					j ? this.parent = j : delete this.parent;
					return f
				}
			}
			d.valueOf = function () {
				return g
			};
			d.toString = function () {
				return g.toString()
			};
			e[h] = d
		} else {
			for (var i in b) {
				if (e[i] && typeof (b[i]) == "function") {
					ns_.Class.inherit(e, b, i)
				} else {
					e[i] = b[i]
				}
			}
		}
		return e
	}
};
if (typeof (ns_.ar) == "undefined") {
	ns_.ar = {
		push: function () {
			for (var b = 0, a = arguments.length; b < a; b++) {
				this[this.length] = arguments[b]
			}
		},
		splice: function () {
			var j = ns_.ar.create(),
				d = arguments;
			if (d.length <= 1) {
				return j
			} else {
				if (d.length > 2) {
					for (var f = 2, c = d.length; f < c; f++) {
						j.push(d[f])
					}
				}
			}
			var b = this.slice(0, d[0]);
			var e = this.slice(d[0], d[0] + d[1]);
			var h = this.slice(d[0] + d[1]);
			var g = b.concat(j, h);
			this.length = 0;
			for (var f = 0, c = g.length; f < c; f++) {
				this.push(g[f])
			}
			return e
		},
		shift: function () {
			for (var d = 0, a = this[0], c = this.length - 1; d < c; d++) {
				this[d] = this[d + 1]
			}
			this.length--;
			return a
		}
	}
}
ns_.ar.create = function () {
	var c = [];
	for (var a in c) {
		delete c[a]
	}
	for (var d = 0, b = arguments.length; d < b; d++) {
		c[c.length] = arguments[d]
	}
	return c
};
ns_.ar.indexOf = function (c, b) {
	var a = -1;
	ns_.ar.each(c, function (e, d) {
		if (e == b) {
			a = d
		}
	}, this);
	return a
};
ns_.ar.merge = function () {
	var a = ns_.ar.create();
	ns_.ar.each(arguments, function (b) {
		ns_.ar.each(b, function (d, c) {
			a[c] = d
		})
	}, this);
	return a
};
ns_.ar.pair = function (c, b) {
	var a = ns_.ar.create();
	ns_.ar.each(b, function (e, d) {
		a.push(d + c + e)
	}, this);
	return a
};
ns_.ar.each = function (g, f, d) {
	try {
		if (typeof (f) == "function") {
			d = typeof (d) != "undefined" ? d : this.each.caller;
			if (typeof g.length != "number" || typeof g[0] == "undefined") {
				var b = typeof (g.__proto__) != "undefined";
				for (var c in g) {
					if ((!b || (b && typeof (g.__proto__[c]) == "undefined")) && typeof g[c] != "function") {
						f.call(d, g[c], c)
					}
				}
			} else {
				for (var c = 0, a = g.length; c < a; c++) {
					f.call(d, g[c], c)
				}
			}
		}
	} catch (h) {}
};
if (typeof (ns_.dom) == "undefined") {
	ns_.dom = {
		cache: {},
		getElementsByTagName: function (b, c) {
			var a, b = b,
				c = document.getElementById(c) || document;
			if (c.getElementsByTagName) {
				a = c.getElementsByTagName(b)
			} else {
				if (c.all && c.all.tags) {
					a = c.all.tags(b)
				}
			}
			return a || []
		},
		addEvent: (document.addEventListener && !document.attachEvent) ? (function (a, c, b) {
			a.addEventListener(c, b, false);
			if (ns_.dom.cache) {
				ns_.dom.cache.add(a, c, b, false)
			}
			return true
		}) : (document.attachEvent) ? (function (a, c, b) {
			var d;
			if (typeof a.addEventListener != "undefined" && (!a.attachEvent)) {
				d = a.addEventListener(c, b)
			} else {
				c = (c.substring(0, 1) == c.substring(0, 1).toUpperCase() ? c : "on" + c);
				d = a.attachEvent(c, b)
			} if (d && ns_.dom.cache) {
				ns_.dom.cache.add(a, c, b, false)
			}
			return d
		}) : (function (c, b, a) {
			if (document.layers && c == document && b.toLowerCase() == "click") {
				b = "mouseup";
				c.captureEvents(Event.MOUSEUP)
			}
			var d = c["on" + b];
			if (typeof d != "function") {
				c["on" + b] = a
			} else {
				c["on" + b] = function (f) {
					if (d) {
						d(f)
					}
					a(f)
				}
			} if (ns_.dom.cache) {
				ns_.dom.cache.add(c, b, a, false)
			}
			return true
		}),
		removeEvent: function (a, c, b) {
			ns_.dom.cache.del(a, c, b)
		}
	}
}
ns_.dom.cache = {
	_events: ns_.ar.create(),
	add: function (b, d, c, a) {
		this._events.push(arguments)
	},
	del: function (a, c, b) {
		ns_.ar.each(this._events, function (e, d) {
			if (!!!b && e[0] == a && e[1] == c) {
				this.detach(e[0], e[1], e[2], e[3]);
				this._events.splice(d, 1);
				throw "Event found"
			} else {
				if (!!b && e[0] == a && e[1] == c && e[2] == b) {
					this.detach(e[0], e[1], e[2], e[3]);
					this._events.splice(d, 1);
					throw "Event found"
				}
			}
		}, ns_.dom.cache)
	},
	detach: function (b, d, c, a) {
		if (typeof b.removeEventListener != "undefined") {
			if (ns_.b.ie) {
				b.removeEventListener(d, c)
			} else {
				b.removeEventListener(d, c, a)
			}
		} else {
			if (b.detachEvent) {
				b.detachEvent(d, c)
			}
		}
	},
	flush: function () {
		try {
			ns_.ar.each(this._events, function (c, b) {
				if (typeof c != "undefined") {
					this.detach(c[0], c[1], c[2], c[3]);
					this._events.splice(b, 1)
				}
			}, ns_.dom.cache)
		} catch (a) {}
	}
};
ns_.dom.addEvent(window, "unload", ns_.dom.cache.flush.STbind(ns_.dom.cache));
ns_.Error = {};
ns_.Class.extend((function () {
	var c = false;

	function e(g) {
		c = !!g
	}

	function f(g) {
		var h = [new Date()];
		h = h.concat([("0" + h[0].getHours()).slice(-2), ("0" + h[0].getMinutes()).slice(-2), ("0" + h[0].getSeconds()).slice(-2), ("00" + h[0].getMilliseconds()).slice(-3)]);
		g = f.caller[0] = "[" + h[1] + ":" + h[2] + ":" + h[3] + "." + h[4] + "] " + g;
		return true
	}

	function b(j) {
		for (var h = 0, g = arguments.length; h < g; h++) {
			f(arguments[h])
		}
		a()
	}

	function d(j) {
		for (var h = 0, g = arguments.length; h < g; h++) {
			f(arguments[h])
		}
		a();
		if (c) {
			throw j
		}
		return false
	}

	function a() {
		if (c && typeof (console) == "object") {
			if (console[a.caller.name]) {
				console[a.caller.name].apply(console, a.caller.arguments)
			} else {
				if (console.log) {
					for (var h = 0, g = a.caller.arguments.length; h < g; h++) {
						console.log(a.caller.arguments[h])
					}
				}
			}
		} else {
			if (c && (!a.caller.name || a.caller.name == "error")) {
				for (var h = 0, g = a.caller.arguments.length; h < g; h++) {
					alert(a.caller.arguments[h])
				}
			}
		}
	}
	ns_.Class.inherit(ns_.Error, {
		log: b,
		debug: b,
		error: d,
		setDebug: e
	})
})());
ns_.MediaEvents = {
	STREAM_START: "onStart",
	STREAM_PAUSE: "onPause",
	STREAM_STOP: "onStop",
	STREAM_RESUME: "onResume",
	STREAM_METADATA: "onReceiveMetaData",
	STREAM_SEND_DATA: "onSendData",
	STREAM_CHANGE: "onChange",
	STREAM_ERROR: "onError",
	STREAM_LOADING: "onLoading",
	STREAM_LOADED: "onLoaded",
	STREAM_UNLOAD: "onUnload",
	STREAM_VOLUME: "onVolume",
	STREAM_SEEK: "onSeek",
	PLAYHEAD_UPDATE: "onPlayHeadUpdate"
};
ns_.MediaEvent = function (e) {
	if (typeof (e) != "string") {
		return null
	}
	var b = {
		type: e,
		target: null,
		created: ns_.dt.getTime(),
		_a: {
			playHeadPosition: 0
		}
	};
	if (arguments.length > 1) {
		for (var d = 1, a = arguments.length; d < a; d++) {
			for (var c in arguments[d]) {
				if (c == "target") {
					b[c] = arguments[d][c]
				} else {
					b._a[c] = arguments[d][c]
				}
			}
		}
	}
	return b
};
ns_.DispatcherEvents = {
	STREAM_START: "stream:start",
	STREAM_PAUSE: "stream:pause",
	STREAM_STOP: "stream:stop",
	STREAM_RESUME: "stream:resume",
	STREAM_METADATA: "stream:metadata",
	STREAM_SEND_DATA: "stream:senddata",
	STREAM_CHANGE: "stream:change",
	STREAM_ERROR: "stream:error",
	STREAM_LOADING: "stream:loading",
	STREAM_LOADED: "stream:loaded",
	STREAM_UNLOAD: "stream:unload",
	STREAM_VOLUME: "stream:volume",
	STREAM_SEEK: "stream:change",
	PLAYHEAD_UPDATE: "stream:change",
	MEDIA_CHANGE: "media:change"
};
ns_.StreamSenseEvents = {
	PLAYLIST_END: "ss:playlistend",
	SHUTDOWN: "ss:shutdown",
	PLAY: "ss:play",
	PAUSE: "ss:pause",
	END: "ss:end",
	KEEP_ALIVE: "ss:keep-alive",
	HEARTBEAT: "ss:heartbeat",
	DISPATCH: "ss:dispatch",
	MEASURE: "ss:measure"
};
if (typeof (ns_.dict) == "undefined") {
	ns_.dict = {}
}
ns_.dict.Labels = function () {
	return {
		measurementType: {
			name: "type",
			value: "hidden"
		},
		measurementDate: {
			name: "_t"
		},
		scriptVersion: {
			name: "st_sv",
			value: null
		},
		urlContainer: {
			name: "jspageurl"
		},
		eventCounter: {
			name: "st_ec"
		},
		error: {
			name: "st_er",
			value: null
		},
		eventType: {
			name: "st_ev",
			value: null
		},
		indexOfClipInPlaylist: {
			name: "st_cn"
		},
		programTitle: {
			name: "st_pr"
		},
		episodeTitle: {
			name: "st_ep"
		},
		episodePart: {
			name: "st_pn"
		},
		episodeTotalLength: {
			name: "st_el"
		},
		productionDate: {
			name: "st_dt"
		},
		type: {
			name: "st_ty"
		},
		bitrate: {
			name: "st_br"
		},
		stationName: {
			name: "st_st"
		},
		length: {
			name: "st_cl"
		},
		bandwidth: {
			name: "st_ub"
		},
		buffering: {
			name: "st_bt"
		},
		playerType: {
			name: "st_mp"
		},
		playerVersion: {
			name: "st_mv"
		},
		fee: {
			name: "st_fee"
		},
		totalPlayedTimeOfClip: {
			name: "st_pt"
		},
		playSequenceOfClip: {
			name: "st_sq"
		},
		playHeadPosition: {
			name: "st_po"
		},
		pausesSequenceOfClip: {
			name: "st_pc"
		},
		resolution: {
			name: "st_cs"
		},
		volume: {
			name: "st_vo"
		},
		windowState: {
			name: "st_ws"
		},
		playlistTitle: {
			name: "st_pl"
		},
		episodeParts: {
			name: "st_tp"
		},
		playlistLengthOfClips: {
			name: "st_ca"
		},
		playlistBufferTimeOfClips: {
			name: "st_bp"
		},
		playlistTotalPlayedTimeOfClips: {
			name: "st_pa"
		},
		playlistId: {
			name: "st_id"
		},
		playlistSequence: {
			name: "st_sp"
		},
		playlistPausesOfClips: {
			name: "st_pp"
		},
		playlistFirstPlay: {
			name: "st_pb",
			value: 1
		},
		playlistLastEnd: {
			name: "st_pe",
			value: 1
		},
		playlistNumberOfClips: {
			name: "st_cp"
		},
		heartbeatCounter: {
			name: "st_hc"
		},
		contentURL: {
			name: "st_cu"
		}
	}
};
ns_.EventDispatcher = ns_.Class.extend({
	_chain: null,
	_events: null,
	buildChain: function () {
		if (!this._chain) {
			this._chain = ns_.ar.create();
			if (this._events) {
				for (var a in this._events) {
					this._chain[a] = null
				}
			}
		}
	},
	listen: function (b, a) {
		if (!a instanceof Function) {
			throw {
				message: "Listener isn't a function"
			}
		}
		this.buildChain();
		if (!this._chain[b]) {
			this._chain[b] = ns_.ar.create(a)
		} else {
			this._chain[b].push(a)
		}
	},
	listened: function (a) {
		if (((typeof this._chain[a] == "undefined") || (this._chain[a] == null) || (this._chain[a].length <= 0))) {
			return false
		} else {
			return true
		}
	},
	unlisten: function (c, b) {
		if (!this.listened(c)) {
			return false
		}
		for (var a = 0; a < this._chain[c].length; a++) {
			if (this._chain[c][a] === b) {
				this._chain[c].splice(a, 1)
			}
		}
	},
	fire: function (d, c) {
		this.buildChain();
		c = [{
			target: this,
			type: d
		}].concat(c);
		for (var b in this._events) {
			if (b == d && typeof (this[d]) == "function") {
				if (this[d].apply(this, c) == false) {
					return false
				}
			}
		}
		if (!this.listened(d)) {
			return false
		}
		for (var b = 0, a = this._chain[d].length; b < a; b++) {
			if (this._chain[d][b].apply(this, c) == false) {
				return false
			}
		}
	}
});
ns_.Component = ns_.Class.extend(ns_.EventDispatcher, {
	_s: null,
	_a: null,
	_u: null,
	initialize: function (a) {
		this._a = {};
		this._u = ns_.ar.create();
		if (a) {
			this._s = a
		} else {
			this._s = this
		}
	},
	set: function (c, b, a) {
		if (!c || (ns_.ar.indexOf(this._u, c) != -1 && !!!a)) {
			return false
		} else {
			if (a) {
				if (ns_.ar.indexOf(this._u, c) == -1) {
					this._u.push(c)
				}
			}
		}
		this._a[c] = b;
		return true
	},
	get: function (a) {
		if (a && typeof this._a[a] != "undefined") {
			return this._a[a]
		} else {
			return null
		}
	},
	setAttribute: function (b, a) {
		return this.set(b, a, true)
	},
	setAttributes: function (b) {
		for (var a in b) {
			this.set(a, b[a], true)
		}
	},
	getAttribute: function (a) {
		return this.get(a)
	},
	getAttributes: function (c) {
		var a = {};
		for (var b in c) {
			a[b] = this.get(b)
		}
		return a
	},
	getAllAttributes: function () {
		var a = {};
		for (var b in this._a) {
			a[b] = this._a[b]
		}
		return a
	}
});
ns_.Dispatcher = ns_.Class.extend(ns_.Component, (function () {
	this._ssEventQueue;
	this.last;

	function e($super, l) {
		$super(l);
		this._ssEventQueue = ns_.ar.create();
		this._events = {
			"ss:play": null,
			"ss:pause": null,
			"ss:end": null,
			"ss:keep-alive": null,
			"ss:heartbeat": null,
			"ss:playlistend": null,
			"ss:dispatch": null,
			"ss:measure": null
		}
	}

	function c(l) {
		if (!l) {
			return false
		}
		this._ssEventQueue.push(l)
	}

	function h(p) {
		var n = false;
		for (var o = 0, m = this._ssEventQueue.length; o < m; o++) {
			if (this._ssEventQueue[o] === p) {
				n = this._ssEventQueue.splice(o, 1)
			}
		}
		return n
	}

	function i(r, q) {
		var n, m, p;
		var l = ns_.ar.indexOf(this._ssEventQueue, r);
		p = l > -1 ? this._ssEventQueue[l] : false;
		q = p ? p.type : q;
		if (r && p == r) {
			if (l > 0) {
				n = this._ssEventQueue[ns_.ar.indexOf(this._ssEventQueue, r) - 1]
			}
			m = this._ssEventQueue[ns_.ar.indexOf(this._ssEventQueue, r) + 1]
		} else {
			p = r;
			n = this._ssEventQueue[this._ssEventQueue.length - 1]
		} if (!n) {
			n = this.last
		}
		try {
			if (q && (n || q == "play") && (!n || q != n.type) && (!n || !(q == "pause" && n.type == "end")) && (!n || !(q == "pause" && n.type == "play" && !n.sent))) {
				return true
			} else {
				return false
			}
		} catch (o) {
			return false
		}
	}

	function g(o, m) {
		var l = false;
		var n = o.substring(o.indexOf(":") + 1);
		if (this.semaphore(false, n) || m._a.forced) {
			l = new ns_.Measurement(this._s, n, m)
		}
		return l
	}

	function b(l, m) {
		var n = this.dispatch(l.type, m);
		if (n) {
			if (!m._a.forced) {
				if (!m.target.isBuffering() && this.semaphore(n, n.type)) {
					n.send()
				} else {
					n.cancel()
				}
			} else {
				n.send(true)
			}
		}
	}

	function k(l, m) {
		var n = this.dispatch(l.type, m);
		if (n) {
			if (!m._a.forced) {
				if (this.semaphore(n, n.type)) {
					n.send()
				} else {
					n.cancel()
				}
			} else {
				n.send(true)
			}
		}
	}

	function a(l, m) {
		var n = this.dispatch(l.type, m);
		if (n) {
			if (!m._a.forced) {
				if (this.semaphore(n, n.type)) {
					n.send()
				} else {
					n.cancel()
				}
			} else {
				n.send(true)
			}
		}
	}

	function d(l, m) {
		var n = this.dispatch(l.type, m);
		if (n) {
			n.send()
		}
	}

	function j(n) {
		var o = this._s._player.snapshot(),
			q = this._s._playlist._clip;
		o.forced = true;
		var l = new ns_.MediaEvent("heartbeat", o);
		l._a.totalPlayedTimeOfClip = q._playbackTime + (l.created - q._playbackStartTime);
		var p = this.dispatch(n.type, l);
		p.labels.heartbeatCounter.value = this._s._heart.counter;
		if (p) {
			p.send()
		}
	}

	function f(l, m) {
		this._s.fire(ns_.StreamSenseEvents.DISPATCH, m)
	}
	return {
		"ss:play": b,
		"ss:pause": k,
		"ss:end": a,
		"ss:keep-alive": d,
		"ss:heartbeat": j,
		"ss:dispatch": f,
		semaphore: i,
		enqueue: c,
		dequeue: h,
		dispatch: g,
		initialize: e
	}
})());
ns_.MediaComponent = ns_.Class.extend(ns_.Component, {
	initialize: function ($super, a) {
		if (a) {
			$super(a)
		}
	}
});
ns_.Measurement = ns_.Class.extend(ns_.Component, {
	type: "",
	date: 0,
	prefix: "ns_",
	succeeded: true,
	sent: false,
	pixel: null,
	initialize: function ($super, b, d, c) {
		$super(b);
		this.labels = new ns_.dict.Labels();
		this.custom = {};
		this.date = c.created;
		if (d && typeof this.eventTypes[d] != "undefined") {
			this.type = this.labels.eventType.value = d;
			if (this.type == "heartbeat") {
				this.labels.eventType.value = "hb"
			}
			if (c && c._a) {
				for (var a in c._a) {
					if (typeof this.labels[a] != "undefined") {
						this.labels[a].value = c._a[a]
					}
				}
			}
			this.measure()
		}
		this.labels.measurementDate.value = this.date;
		this.custom.ns_ts = this.date
	},
	labels: {},
	eventTypes: {
		play: {
			mandatory: ["measurementDate", "measurementType", "scriptVersion", "eventCounter", "eventType", "indexOfClipInPlaylist", "episodeTitle", "episodePart", "buffering", "playerType", "playerVersion", "playSequenceOfClip", "playHeadPosition", "episodeParts", "playlistId", "playlistSequence", "bandwidth"],
			playlist: ["playlistFirstPlay"],
			optionals: ["programTitle", "episodeTotalLength", "productionDate", "type", "length", "fee", "resolution", "bitrate", "volume", "windowState", "playlistTitle", "playlistLengthOfClips", "error", "stationName", "contentURL", "urlContainer"]
		},
		pause: {
			mandatory: ["measurementDate", "measurementType", "scriptVersion", "eventCounter", "eventType", "indexOfClipInPlaylist", "episodeTitle", "episodePart", "length", "buffering", "playerType", "playerVersion", "playHeadPosition", "pausesSequenceOfClip", "totalPlayedTimeOfClip", "volume", "episodeParts", "playlistId", "playlistSequence", "bandwidth"],
			playlist: ["playlistBufferTimeOfClips", "playlistTotalPlayedTimeOfClips", "playlistPausesOfClips", "playlistLengthOfClips"],
			optionals: ["programTitle", "episodeTotalLength", "productionDate", "type", "fee", "resolution", "windowState", "playlistTitle", "bitrate", "stationName", "error", "urlContainer", "contentURL"]
		},
		end: {
			mandatory: ["measurementDate", "measurementType", "scriptVersion", "eventCounter", "eventType", "indexOfClipInPlaylist", "episodeTitle", "episodePart", "length", "buffering", "playerType", "playerVersion", "playHeadPosition", "pausesSequenceOfClip", "totalPlayedTimeOfClip", "volume", "episodeParts", "playlistId", "playlistSequence", "bandwidth"],
			playlist: ["playlistBufferTimeOfClips", "playlistTotalPlayedTimeOfClips", "playlistPausesOfClips", "playlistLastEnd", "playlistLengthOfClips"],
			optionals: ["programTitle", "episodeTotalLength", "productionDate", "type", "fee", "resolution", "windowState", "playlistTitle", "bitrate", "stationName", "error", "contentURL", "urlContainer"]
		},
		"keep-alive": {
			mandatory: ["measurementDate", "measurementType", "eventCounter", "eventType", "episodeTitle", "playHeadPosition", "playlistId"],
			optionals: ["programTitle", "playlistTitle", "contentURL"]
		},
		heartbeat: {
			mandatory: ["measurementDate", "measurementType", "scriptVersion", "eventCounter", "eventType", "indexOfClipInPlaylist", "episodeTitle", "episodePart", "length", "buffering", "playerType", "playerVersion", "playHeadPosition", "pausesSequenceOfClip", "totalPlayedTimeOfClip", "volume", "episodeParts", "playlistId", "playlistSequence", "bandwidth", "heartbeatCounter"],
			playlist: ["playlistBufferTimeOfClips", "playlistTotalPlayedTimeOfClips", "playlistPausesOfClips", "playlistLengthOfClips"],
			optionals: ["programTitle", "episodeTotalLength", "productionDate", "type", "fee", "resolution", "windowState", "playlistTitle", "bitrate", "stationName", "error", "contentURL", "urlContainer"]
		}
	},
	bulkSet: function (b) {
		for (var a in b) {
			if (typeof this.labels[a] != "undefined") {
				this.labels[a].value = b[a]
			} else {
				this.custom[a] = b[a]
			}
		}
	},
	measure: function () {
		if (!!!this.type || !!!this.labels.eventType.value) {
			return
		}
		this._s.fire(ns_.StreamSenseEvents.MEASURE, this);
		this._s._d.enqueue(this)
	},
	send: function (c) {
		var b = this._s._d.last ? this._s._d.last.type == "end" : false,
			a = this._s._d.last ? this._s._d.last.type == "pause" : false;
		if (this.type != "heartbeat" && this.type != "custom" && this.type != "keep-alive") {
			this._s._d.last = this
		}
		if ((this.type == "end" && this._s._playlist._ended) || (b && this.type == "play") || (a && !this._s._playlist._ended)) {
			if (!this._s._shutdown) {
				window.setTimeout(this.preprocessPlaylistLabels.STbind(this, this.getPixelURL(), c), this._s.cfg.PLAYLIST_END_TIMER)
			} else {
				this.request(this.getPixelURL(), c)
			}
		} else {
			this.request(this.getPixelURL(), c)
		}
		this._s._d.dequeue(this);
		this._s._d.fire(ns_.StreamSenseEvents.DISPATCH, this)
	},
	preprocessPlaylistLabels: function (c, d) {
		if ((this.type == "play" || this.type == "end") && !(((this.type == "play" && this._s._playlist._sequence == 1 && this._s._playlist._eventCounter <= 2)) || (this.type == "end" && this._s._playlist._ended))) {
			if (this.type == "play") {
				c = this.getPixelURL()
			}
			var e = this.eventTypes[this.type].playlist;
			for (var a in e) {
				if (typeof this.labels[e[a]] != "undefined") {
					var b = [((typeof this.labels[e[a]].prefix == "undefined" || this.labels[e[a]].prefix) ? this.prefix : ""), this.labels[e[a]].name].join("");
					c = c.replace(new RegExp(b + "=[^&]*&", "gi"), "")
				}
			}
		}
		this.request(c, d)
	},
	request: function (a, b) {
		this.pixel = (ns_.b.ie) ? new Image() : (b && this.type == "end" && this._s._shutdown && this.labels.playlistLastEnd.value) ? document.body.appendChild(document.createElement("img")) : new Image();
		if (b && !this._s._shutdown) {
			this.pixel.style.display = "none"
		}
		if (!this._s._shutdown) {
			this.pixel.onload = (function (c) {
				return function (d) {
					if (!d) {
						d = event;
						var f = this
					} else {
						var f = d.target
					}
					var e = c._s;
					c.sent = true
				}
			})(this);
			this.pixel.onerror = this.pixel.onload
		}
		if (ns_.b.ie || !(this.type == "end" && this._s._shutdown)) {
			this.pixel.src = a
		} else {
			document.write(["<h", "tml><h", "ead><me", "ta http", '-equiv="refresh" content="0;url=', document.location.href, '"/></h', "ead>", "<bo", "dy><scr", 'ipt>var date = "', this.date, '"; if ((new Date().getTime()-date) < 500){ var p = new Image(); p.src ="', a, '"}</scr', "ipt></b", "ody></h", "tml>"].join(""))
		}
	},
	cancel: function () {
		this.sent = false;
		this.succeeded = false;
		this._s._d.dequeue(this)
	},
	serialize: function () {
		var e = ns_.ar.create();
		var g = this.eventTypes[this.type];
		for (var b in g) {
			var k = g[b];
			for (var f = 0, d = k.length; f < d; f++) {
				var h = this.labels[k[f]];
				var c = typeof (h.value);
				if ((c == "undefined" || h.value === "") && b == "optionals") {
					continue
				} else {
					if (c == "undefined") {
						h.value = this._s.cfg.DEFAULT_VALUE_STR
					}
				}
				var a = [((typeof h.prefix == "undefined" || h.prefix) ? this.prefix : ""), h.name].join("");
				var j = c == "number" ? Math.round(h.value * Math.pow(10, 2)) / Math.pow(10, 2) : h.value;
				e.push([a, "=", ns_.encode(typeof j == "string" ? j : String(j))].join(""))
			}
		}
		for (var h in this.custom) {
			var j = this.custom[h];
			if (j && j != "") {
				e.push([h, "=", ns_.encode(j)].join(""))
			}
		}
		return e.join("&")
	},
	getPixelURL: function () {
		return [this._s.getPixelURL(), "&", this.serialize()].join("")
	}
});
ns_.Heart = ns_.Class.extend(ns_.EventDispatcher, (function () {
	var c = 500;
	this._s;
	this.interval;
	this.pulses;
	this.pulse;
	this.counter;
	this.beats;
	this.lapse;
	this.pause;

	function a(g) {
		this._s = g;
		this.pulses = ns_.ar.create();
		this["heart:tick"] = this.onTick.STbind(this);
		this._s._d.listen("ss:dispatch", this["ss:dispatch"].STbind(this))
	}

	function e() {
		this.counter = 0;
		this.beats = 0;
		this.lapse = 0;
		this.pause = 0;
		if (this.pulses.length > 0) {
			this.pulse = this.pulses[0]
		} else {
			this.pulse = null
		}
	}

	function d(g) {
		if (!(g.tempo == 0 && g.limit == 0)) {
			this.pulses.push(g);
			if (this.pulses.length == 1) {
				this.pulse = this.pulses[0];
				this.reset()
			}
		}
	}

	function b() {
		var g = ns_.dt.getTime();
		if (this.pulse) {
			if ((g - this.lapse) >= this.pulse.tempo) {
				this.beats++;
				this.counter++;
				this._s._d.fire("ss:heartbeat");
				this.lapse = g;
				if (this.pulse.limit != 0 && this.beats == this.pulse.limit) {
					this.beats = 0;
					if (ns_.ar.indexOf(this.pulses, this.pulse) + 1 < this.pulses.length) {
						this.pulse = this.pulses[ns_.ar.indexOf(this.pulses, this.pulse) + 1]
					} else {
						this["ss:dispatch"](null, {
							type: "end"
						})
					}
				}
			}
		}
		this.interval = window.setTimeout(this["heart:tick"], this._tick)
	}

	function f(g, h) {
		switch (h.type) {
		case "play":
			if (this.pulse) {
				this.lapse = h.date - this.pause;
				this.interval = window.setTimeout(this["heart:tick"], this._tick)
			}
			break;
		case "pause":
			if (this.pulse) {
				this.pause = h.date - this.lapse;
				this.counter = 0
			}
		case "end":
			window.clearTimeout(this.interval);
			if (h.type == "end") {
				this.reset()
			}
			break
		}
	}
	return {
		"ss:dispatch": f,
		onTick: b,
		reset: e,
		addPulse: d,
		initialize: a
	}
})());
ns_.Heart.Pulse = function (b, a) {
	this.limit = a;
	this.tempo = b
};
ns_.Playlist = ns_.Class.extend(ns_.Component, {
	isClipActive: function (a) {
		if (!!a && !!this._clip && this._clip === a) {
			return true
		} else {
			return false
		}
	},
	addNewClip: function (a) {
		var b = new ns_.Clip(this._s, this, !a);
		this.addClip(b, !a);
		return b
	},
	addClip: function (b, a) {
		if (ns_.ar.indexOf(this._clips, b) == -1) {
			this._clips.push(b);
			if (!b.get("episodeTitle")) {
				this._indexes.push(b)
			}
		}
		if (!!a) {
			this.setClip(b)
		}
		this.fire(ns_.DispatcherEvents.MEDIA_CHANGE, [this, b]);
		return this._clips.length
	},
	setClip: function (a) {
		if (ns_.ar.indexOf(this._clips, a) == -1) {
			this.addClip(a, false)
		}
		if (this._clip) {
			this._clip.deactivate()
		}
		this._clip = a;
		this._clip.activate();
		return this._clip
	},
	getBufferTimeOfClips: function () {
		for (var b = 0, c = 0, a = this._clips.length; c < a; c++) {
			b += Number(this._clips[c]._bufferingTime)
		}
		return b
	},
	getPausesOfClips: function () {
		for (var b = 0, c = 0, a = this._clips.length; c < a; c++) {
			b += Number(this._clips[c]._pauses)
		}
		return b
	},
	getTotalPlaybackTime: function (d) {
		for (var b = 0, c = 0, a = this._clips.length; c < a; c++) {
			if (this._clips[c] == this._clip) {
				b += Number(d.labels.totalPlayedTimeOfClip.value)
			} else {
				b += Number(this._clips[c]._playbackTime)
			}
		}
		return Number(b) + Number(this._clipPlaybackTime)
	},
	getTotalLength: function () {
		for (var b = 0, c = 0, a = this._clips.length; c < a; c++) {
			b += Number(this._clips[c].get("length"))
		}
		return b
	},
	buildEpisode: function () {
		var c = ns_.ar.create();
		var e = this._clip.get("programTitle");
		var d = this._clip.get("episodeTitle");
		if (e && d) {
			for (var b = 0, a = this._clips.length; b < a; b++) {
				if (this._clips[b].get("programTitle") == e && this._clips[b].get("episodeTitle") == d) {
					c.push(this._clips[b])
				}
			}
		}
		if (!c.length) {
			c.push(this._clip)
		}
		return c
	},
	getEpisodeTotalLength: function () {
		var d = 0;
		if (!!this._clip.get("episodeTotalLength")) {
			return this._clip.get("episodeTotalLength")
		} else {
			var e = this.buildEpisode();
			for (var c = 0, b = e.length; c < b; c++) {
				var a = Number(e[c].get("length"));
				d = d + a
			}
		}
		return d
	},
	getEpisodePart: function () {
		var a = this.buildEpisode();
		var b = ns_.ar.indexOf(a, this._clip);
		if (b == -1) {
			return 1
		}
		return b + 1
	},
	getEpisodeParts: function () {
		var a = this.buildEpisode();
		return a.length
	},
	getClipIndex: function () {
		var a = ns_.ar.indexOf(this._indexes, this._clip);
		if (a == -1) {
			return 1
		}
		return a + 1
	},
	getNumberOfClips: function () {
		return this._clips.length
	},
	getID: function () {
		return ns_.dt.getTime() + "_" + this._index
	},
	initialize: function ($super, b, a) {
		$super(b);
		this._events = {
			"media:change": null,
			"ss:dispatch": null,
			"ss:measure": null,
			onReceiveMetaData: null
		};
		this._index = ++this._s._playlistCount;
		this._id = this.getID();
		this._clip = null;
		this._clips = ns_.ar.create();
		this._started = false;
		this._sequence = 1;
		this._eventCounter = 1;
		this._pauses = 0;
		this._ended = false;
		this._indexes = ns_.ar.create();
		this._clipPlaybackTime = 0;
		this["onReceiveMetaData_cb"] = this["onReceiveMetaData"].STbind(this);
		this["onStreamChange_cb"] = this["stream:change"].STbind(this);
		this["onMeasure_cb"] = this["ss:measure"].STbind(this);
		this["onDispatch_cb"] = this["ss:dispatch"].STbind(this);
		if (a) {
			this.activate()
		}
	},
	reset: function () {
		for (var b = 0, a = this._clips.length; b < a; b++) {
			this._clips[b].reset()
		}
		this._started = false;
		this._pauses = 0;
		this._sequence = 1;
		this._ended = false;
		this._id = this.getID();
		this._clipPlaybackTime = 0;
		this._eventCounter = 1
	},
	loop: function () {
		this._sequence++
	},
	activate: function () {
		this._s.listen("ss:measure", this["onMeasure_cb"]);
		this._s.listen("ss:dispatch", this["onDispatch_cb"])
	},
	deactivate: function () {
		this._s.unlisten("ss:measure", this["onMeasure_cb"]);
		this._s.unlisten("ss:dispatch", this["onDispatch_cb"])
	},
	listenClip: function (a) {
		a.listen("onReceiveMetaData", this["onReceiveMetaData_cb"])
	},
	unlistenClip: function (a) {
		a.unlisten("onReceiveMetaData", this["onReceiveMetaData_cb"])
	},
	onReceiveMetaData: function (a, c) {
		for (var b in c._a) {
			switch (b) {
			case "playlistTitle":
				this.set(b, c._a[b]);
				break
			}
		}
	},
	"stream:change": function (a, b) {
		this._ended = false
	},
	"media:change": function (b, a, c) {
		this._ended = false;
		this.listenClip(c)
	},
	"ss:measure": function (a, b) {
		this.set("playlistLengthOfClips", this.getTotalLength());
		this.set("indexOfClipInPlaylist", ns_.ar.indexOf(this._clips, this._clip) + 1);
		this.set("playlistBufferTimeOfClips", this.getBufferTimeOfClips());
		this.set("playlistPausesOfClips", this.getPausesOfClips());
		this.set("playlistTotalPlayedTimeOfClips", this.getTotalPlaybackTime(b));
		this.set("playlistSequence", this._sequence);
		this.set("episodeTitle", this.getClipIndex());
		this.set("episodeParts", this.getEpisodeParts());
		this.set("episodePart", this.getEpisodePart());
		if (this.get("episodeParts") > 1) {
			this.set("episodeTotalLength", this.getEpisodeTotalLength())
		}
		if (!!this.get("playlistTitle") && this.get("playlistTitle") != "") {
			this.set("programTitle", this.get("playlistTitle"))
		}
		this.set("playlistFirstPlay", 1);
		this.set("playlistLastEnd", 1);
		this.set("playlistId", this._id);
		this.set("eventCounter", this._eventCounter);
		b.bulkSet(this.getAllAttributes())
	},
	"ss:dispatch": function (a, b) {
		switch (b.type) {
		case "play":
			this._started = true;
			this._eventCounter++;
			break;
		case "pause":
			this._pauses++;
			this._eventCounter++;
			break;
		case "keep-alive":
			this._eventCounter++;
			break;
		case "end":
			window.setTimeout((function () {
				if (this._ended) {
					this.reset()
				}
			}).STbind(this), this._s.cfg.PLAYLIST_END_TIMER);
			break
		}
	}
});
ns_.Clip = ns_.Class.extend(ns_.Component, {
	reset: function () {
		this._playlist._clipPlaybackTime += Number(this._playbackTime ? this._playbackTime : 0);
		this._bufferingStart = this._bufferingTime = this._playbackStartPos = this._playbackStartTime = this._playbackTime = 0;
		this._starts = this._pauses = 0;
		this._states = {
			isPlaying: false,
			isBuffering: false,
			isSeeking: false,
			isStopped: false,
			isPaused: false
		}
	},
	initialize: function ($super, d, a, c) {
		if (d) {
			$super(d)
		}
		this._events = {};
		for (var b in ns_.MediaEvents) {
			this._events[ns_.MediaEvents[b]] = null
		}
		this._events.onBufferStart = null;
		this._events.onBufferEnd = null;
		this._playlist = a;
		this.listen(ns_.MediaEvents.STREAM_CHANGE, this._playlist.onStreamChange_cb);
		this.reset();
		this._states = {
			isPlaying: false,
			isBuffering: false,
			isSeeking: false,
			isStopped: false,
			isPaused: false
		};
		if (!!c) {
			this.activate()
		}
	},
	activate: function () {
		this.deactivate();
		if (!this.onMeasure_cb) {
			this.onMeasure_cb = this.onMeasure.STbind(this)
		}
		this._s.listen(ns_.StreamSenseEvents.MEASURE, this.onMeasure_cb);
		if (!this.onDispatch_cb) {
			this.onDispatch_cb = this.onDispatch.STbind(this)
		}
		this._s.listen(ns_.StreamSenseEvents.DISPATCH, this.onDispatch_cb);
		this.fire(ns_.MediaEvents.STREAM_CHANGE, this)
	},
	deactivate: function () {
		if (!this._playlist.isClipActive(this)) {
			return
		}
		this._s.unlisten(ns_.StreamSenseEvents.MEASURE, this.onMeasure_cb);
		this._s.unlisten(ns_.StreamSenseEvents.DISPATCH, this.onDispatch_cb)
	},
	isPlaying: function () {
		return this._states.isPlaying && this._playlist.isClipActive(this)
	},
	isBuffering: function () {
		return this._states.isBuffering && this._playlist.isClipActive(this)
	},
	isStopped: function () {
		return this._states.isStopped
	},
	isPaused: function () {
		return this._states.isPaused && this._playlist.isClipActive(this)
	},
	onStart: function (a, b) {
		this.reset();
		if (b._a.length > 0) {
			this.set("length", b._a.length)
		}
		this._s.fire(ns_.DispatcherEvents.STREAM_START, b)
	},
	onPause: function (a, b) {
		b._a.totalPlayedTimeOfClip = this._playbackTime + (b.created - this._playbackStartTime);
		this._s.fire(ns_.DispatcherEvents.STREAM_PAUSE, b)
	},
	onResume: function (a, b) {
		this._s.fire(ns_.DispatcherEvents.STREAM_RESUME, b)
	},
	onBufferStart: function (a, b) {
		this._states.isBuffering = true;
		this._bufferingStart = b.created
	},
	onBufferEnd: function (a, b) {
		this._states.isBuffering = false;
		if (b.created < this._bufferingStart) {
			this._bufferingTime += this._bufferingStart - b.created
		} else {
			this._bufferingTime += b.created - this._bufferingStart
		}
	},
	onStop: function (a, b) {
		var c = this._s._d;
		this._s._playlist._ended = true;
		if (c.last && c.last.type == "play") {
			b._a.totalPlayedTimeOfClip = this._playbackTime + (b.created - this._playbackStartTime)
		} else {
			b._a.totalPlayedTimeOfClip = this._playbackTime
		}
		this._s.fire(ns_.DispatcherEvents.STREAM_STOP, b)
	},
	onSeek: function (a, b) {
		this._states.isSeeking = true;
		if ((typeof b._a.seekStart != "undefined") && (typeof b._a.seekEnd != "undefined")) {
			b._a.playHeadPosition = b._a.seekStart;
			if (this.isPlaying()) {
				this.fire(ns_.MediaEvents.STREAM_PAUSE, b);
				b._a.playHeadPosition = b._a.seekEnd;
				b.created = ns_.dt.getTime();
				this.fire(ns_.MediaEvents.STREAM_RESUME, b)
			}
		}
		this._states.isSeeking = false
	},
	onReceiveMetaData: function (a, c) {
		for (var b in c._a) {
			switch (b) {
			case "length":
				this.set(b, c._a[b]);
				break
			}
		}
	},
	onError: function (a, b) {
		this._s.fire(ns_.DispatcherEvents.STREAM_ERROR, b)
	},
	onMeasure: function (a, b) {
		this.set("playSequenceOfClip", this._starts + 1);
		this.set("pausesSequenceOfClip", this._pauses);
		this.set("buffering", this._bufferingTime);
		b.bulkSet(this.getAllAttributes());
		if ((b.type == "pause" || b.type == "end") && Number(b.labels.totalPlayedTimeOfClip.value) > 0) {
			this._playbackTime = Number(b.labels.totalPlayedTimeOfClip.value)
		}
	},
	onDispatch: function (a, b) {
		switch (b.type) {
		case "play":
			this._playbackStartTime = b.date;
			this._playbackStartPos = b.labels.playHeadPosition.value;
			this._states.isPlaying = true;
			this._states.isPaused = false;
			this._states.isStopped = false;
			this._starts++;
			break;
		case "pause":
			this._states.isPlaying = false;
			this._states.isPaused = true;
			this._states.isStopped = false;
			this._playbackStartTime = b.date;
			this._playbackStartPos = b.labels.playHeadPosition.value;
			this._pauses++;
			this._playbackTime = Number(b.labels.totalPlayedTimeOfClip.value);
			break
		}
	}
});
if (typeof (ns_) == "undefined") {
	ns_ = new Object()
}
if (typeof (ns_.dt) == "undefined") {
	ns_.dt = {
		getTime: function () {
			return new Date().getTime()
		}
	}
}
if (typeof (ns_.cookie) == "undefined") {
	ns_.cookie = {}
}
ns_.cookie.create = function (c, f, d, h, e, g) {
	if (d) {
		var b = new Date();
		if (typeof (d) == "number") {
			b.setTime(ns_.dt.getTime() + (d * 1000))
		} else {
			if (d.getTime) {
				b.setTime(d.getTime())
			}
		}
		var a = "; expires=" + b.toGMTString()
	} else {
		var a = ""
	}
	document.cookie = [c, "=", f, a, "; path=", h ? h : "/", e ? "; domain=" + e : "", g ? "; secure" : ""].join("")
};
ns_.cookie.read = function (b) {
	var e = b + "=";
	var a = document.cookie.split(";");
	for (var d = 0; d < a.length; d++) {
		var f = a[d];
		while (f.charAt(0) == " ") {
			f = f.substring(1, f.length)
		}
		if (f.indexOf(e) == 0) {
			return f.substring(e.length, f.length)
		}
	}
	return null
};
ns_.cookie.erase = function (a) {
	ns_.cookie.create(a, "", -1)
};
if (typeof (ns_) == "undefined") {
	ns_ = new Object()
}
if (typeof (ns_.Loader) == "undefined") {
	ns_.Loader = {
		config: {}
	}
}
ns_.Loader.setup = function (b) {
	for (var a in b) {
		switch (a) {
		case "type":
		case "attributes":
			ns_.Loader.config[a] = b[a]
		}
	}
};
ns_.Loader.load = function (f) {
	try {
		var c = document.getElementsByTagName("HEAD").item(0);
		var a = document.createElement("SCRIPT");
		a.type = ns_.Loader.config.type || "text/javascript";
		a.src = f;
		if (ns_.Loader.config.attributes) {
			for (var b in ns_.Loader.config.attributes) {
				a.setAttribute(b, ns_.Loader.config.attributes[b])
			}
		}
		c.appendChild(a)
	} catch (d) {}
};
ns_.Loader.loadFromScriptSource = function (f, h) {
	if (!h || !f || !document.getElementsByTagName) {
		return
	}
	var b = new RegExp(f + "(?:\\.min)?\\.js(?:\\?.*" + h + "=([^&]*))+", "i");
	var n = document.getElementsByTagName("SCRIPT");
	for (var g = 0, d = n.length; g < d; g++) {
		if (b.test(n[g].src)) {
			var a = n[g].src.match(b)[1].split(",");
			var k = n[g].src.replace(b, "");
			for (var e = 0, c = a.length; e < c; e++) {
				ns_.Loader.load(k + a[e] + (/\.min\./i.test(n[g].src) ? ".min.js" : ".js"))
			}
		}
	}
};
ns_.Loader.loadFromScriptSource("streamsense", "load");
ns_.StreamSense = ns_.Class.extend(ns_.Component, (function () {
	var k = {
		TIMER_DELAY: 500,
		KEEP_ALIVE_DELAY: 20 * 60 * 1000,
		DEFAULT_ERROR_STR: "STREAMSENSE_ERROR_UNKNOWN",
		DEFAULT_VALUE_STR: "%STATICTEXT_UNKNOWN%",
		DEBUG: false,
		PLAYLIST_END_TIMER: 500,
		LOAD_COMPONENTS: ns_.ar.create()
	};
	var e = "4.1.0";
	var z = 0;
	var n = ns_.ar.create();
	this._shutdown;
	this._counterName;
	this._errors;
	this._events;
	this._d;
	this._player;
	this._playlist;
	this.MediaComps;
	this._instanceIndex;
	this._playlistCount;
	this._keepAliveTimer;
	this._heart;

	function a($super, H, E, G) {
		$super(null);
		this._shutdown = false;
		G = G || {};
		for (var F in this.cfg) {
			G[F] = (typeof (G[F]) != "undefined") ? G[F] : this.cfg[F]
		}
		this.cfg = G;
		this._errors = ns_.ar.create();
		ns_.Error.setDebug(this.cfg.DEBUG);
		this._events = {};
		for (var F in ns_.DispatcherEvents) {
			this._events[ns_.DispatcherEvents[F]] = null
		}
		for (var F in ns_.StreamSenseEvents) {
			this._events[ns_.StreamSenseEvents[F]] = null
		}
		this.labels = new ns_.dict.Labels();
		z++;
		n.push(this);
		this._instanceIndex = z;
		this._playlistCount = 0;
		if (!!E) {
			this.setPixelURL(E)
		}
		this._d = new ns_.Dispatcher(this);
		if (this.cfg.LOAD_COMPONENTS.length > 0) {
			for (var F = 0, D = this.cfg.LOAD_COMPONENTS.length; F < D; F++) {
				this.registerMediaComponent(this.cfg.LOAD_COMPONENTS[F])
			}
		}
		if (ns_.b.ff) {
			window.setTimeout(function (J, I) {
				return function () {
					J.setPlayer(I)
				}
			}(this, H), this.cfg.TIMER_DELAY / 2)
		} else {
			j.call(this, H)
		}
		this._heart = new ns_.Heart(this);
		this._heart.addPulse(new ns_.Heart.Pulse(10000, 6));
		this._heart.addPulse(new ns_.Heart.Pulse(60000, 0));
		ns_.dom.addEvent(window, "beforeunload", this.shutdown.STbind(this));
		ns_.dom.addEvent(window, "unload", this.shutdown.STbind(this))
	}

	function y(D) {
		if (!!D) {
			if (D.indexOf("?") == -1) {
				D += "?video"
			} else {
				if (D.indexOf("?") == (D.length - 1)) {
					D += "video"
				}
			}
			return this._counterName = D
		}
	}

	function p() {
		if (!!this._counterName) {
			return this._counterName
		} else {
			if (window.ns_p && typeof ns_p.src === "string") {
				return this.setPixelURL(ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, ""))
			} else {
				if (window.ns_pixelUrl) {
					return this.setPixelURL(window.ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, ""))
				} else {
					return this.setPixelURL(document.location.href.replace(/#.*/, ""))
				}
			}
		}
	}

	function j(D) {
		if (this._player && this._player.deactivate) {
			this._player.deactivate()
		}
		if (typeof (D) == "string") {
			D = document.getElementById(D)
		}
		this._player = w.call(this, D);
		if (!this._player) {
			return ns_.Error.info("StreamSense.setPlayer: unable to set player [" + typeof (D) + "] = " + D)
		}
	}

	function q() {
		if (this._player) {
			return this._player
		} else {
			return false
		}
	}

	function C(D) {
		if (this._playlist) {
			this._playlist.deactivate()
		}
		if (!D) {
			return this._playlist = new ns_.Playlist(this, true)
		} else {
			return this._playlist = D
		}
	}

	function x() {
		if (!this._playlist) {
			return this.setPlaylist()
		} else {
			return this._playlist
		}
	}

	function c(D) {
		if (!D) {
			return this.getPlaylist().addNewClip()
		} else {
			return this.getPlaylist().addClip(D, true)
		}
	}

	function t(D) {
		if (!D) {
			return this.getPlaylist().addNewClip(true)
		} else {
			return this.getPlaylist().addClip(D)
		}
	}

	function i() {
		if (this.getPlaylist()._clip) {
			return this.getPlaylist()._clip
		} else {
			return this.setClip()
		}
	}

	function g(E, F, D) {
		if (this.getPlayer() && this.getPlayer()._nativeLabels) {
			this.getPlayer()._nativeLabels.push(E);
			this.getPlayer()._realLabels.push(F)
		}
		return this.setAttribute(F, D)
	}

	function u() {
		return z
	}

	function v() {
		return this._instanceIndex
	}

	function s(G) {
		if (typeof this.MediaComps == "undefined") {
			this.MediaComps = ns_.ar.create()
		}
		var D = true;
		for (var F = 0, E = this.MediaComps.length; F < E; F++) {
			if (this.MediaComps[F].prototype.isEligible === G.prototype.isEligible) {
				this.MediaComps[F].prototype.deactivate();
				D = this.MediaComps[F] = G
			}
		}
		if (!G || !D) {
			return ns_.Error.info("registerMediaComponent got a wrong reference: [" + typeof (G) + "] = " + G)
		}
		this.MediaComps.push(G);
		this.MediaComps[G.prototype.getNickname()] = G
	}

	function w(F) {
		if (typeof this.MediaComps == "undefined") {
			return setTimeout((function (H, G) {
				return function () {
					H.setPlayer.call(H, G)
				}
			})(this, F), 500)
		}
		for (var E = 0, D = this.MediaComps.length; E < D; E++) {
			if (this.MediaComps[E].prototype.isEligible(F)) {
				return new this.MediaComps[E](this, F)
			}
		}
	}

	function b(D, E) {
		this._d.fire(ns_.StreamSenseEvents.PLAY, E)
	}

	function d(D, E) {
		this._d.fire(ns_.StreamSenseEvents.PAUSE, E)
	}

	function l(D, E) {
		this._d.fire(ns_.StreamSenseEvents.PLAY, E)
	}

	function h(D, E) {
		this._d.fire(ns_.StreamSenseEvents.END, E)
	}

	function f(D, E) {
		if (E.text) {
			var F = /;/.test(E.text) ? E.text.replace(/;/g, ns_.encode(";")) : E.text;
			this._errors.push((F || F == "") ? F : this.cfg.DEFAULT_ERROR_STR)
		}
	}

	function m(D, E) {
		this.set("scriptVersion", [e, ";JS"].join(""));
		this.set("error", this._errors.join(";"));
		this.set("urlContainer", document.location.href);
		E.bulkSet(this.getAllAttributes())
	}

	function A(D, E) {
		this._errors = ns_.ar.create();
		switch (E.type) {
		case "play":
		case "keep-alive":
			this._keepAliveTimer = window.setTimeout((function (F) {
				return function () {
					var G = F._player.snapshot();
					G.forced = true;
					F._d.fire("ss:keep-alive", new ns_.MediaEvent("keep-alive", G))
				}
			})(this), this.cfg.KEEP_ALIVE_DELAY);
			break;
		case "pause":
		case "end":
			window.clearTimeout(this._keepAliveTimer);
			this._keepAliveTimer = null;
			break
		}
	}

	function B(E, D) {
		try {
			if (this._d.last && this._d.last.type != "end") {
				var F = this.getPlayer().snapshot();
				F.forced = true;
				var H = new ns_.MediaEvent(ns_.MediaEvents.STREAM_STOP, F);
				this.getClip().fire(ns_.MediaEvents.STREAM_STOP, H)
			}
			this.getClip().deactivate();
			this.getPlaylist().deactivate();
			this.getPlayer().deactivate()
		} catch (G) {}
	}

	function r(D) {
		if (!this._shutdown) {
			this._shutdown = true;
			this.fire(ns_.StreamSenseEvents.SHUTDOWN, D)
		}
	}

	function o(D) {
		if (typeof D == "undefined") {
			D = 0
		}
		for (var F = 0, E = n.length; F < E; F++) {
			if (n[F]._instanceIndex == D + 1) {
				return n[F]
			}
		}
		return this.prototype
	}
	return {
		registerMediaComponent: s,
		"stream:start": b,
		"stream:pause": d,
		"stream:resume": l,
		"stream:stop": h,
		"stream:error": f,
		"ss:measure": m,
		"ss:dispatch": A,
		"ss:shutdown": B,
		shutdown: r,
		initialize: a,
		setPixelURL: y,
		getPixelURL: p,
		setPlayer: j,
		getPlayer: q,
		setPlaylist: C,
		getPlaylist: x,
		getClip: i,
		setClip: c,
		setAttributeASX: g,
		getCount: u,
		getIndex: v,
		getStreamSense: o,
		cfg: k
	}
})());
ns_.StreamSense.getStreamSense = ns_.StreamSense.prototype.getStreamSense;
/* Copyright (c) 2009 Nedstat B.V. 4.1.0
 * All rights reserved.
 * By using this software, you are agreeing to be bound by the
 * terms of this license: http://www.nedstat.com/terms.html
 */
if (typeof (ns_) == "undefined") {
	ns_ = new Object()
}
ns_.HTML5MediaComponent = ns_.Class.extend(ns_.MediaComponent, {
	_nickName: "html5",
	_clip: null,
	_player: null,
	_playlist: null,
	_events: {},
	_seekStart: null,
	_wasBuffering: false,
	_listeners: {
		loadstart: function (a) {
			if (!this._clip) {
				this.setClip()
			}
		},
		loadedmetadata: function (a) {
			if (!this._clip) {
				this.setClip()
			}
		},
		playing: function (a) {
			if (this.getClip()._starts == 0) {
				this.getClip().fire("onStart", new ns_.MediaEvent("onPlay", this.snapshot()))
			} else {
				this.getClip().fire("onResume", new ns_.MediaEvent("onPlay", this.snapshot()))
			}
		},
		pause: function (a) {
			this.getClip().fire("onPause", new ns_.MediaEvent("onPause", this.snapshot()))
		},
		ended: function (a) {
			this.getClip().fire("onStop", new ns_.MediaEvent("onStop", this.snapshot()))
		},
		seeking: function (a) {
			this._seekStart = this.getPosition()
		},
		seeked: function (b) {
			var a = this.snapshot();
			a.seekStart = this._seekStart;
			a.seekEnd = a.playHeadPosition;
			this.getClip().fire(ns_.MediaEvents.STREAM_SEEK, new ns_.MediaEvent(ns_.MediaEvents.STREAM_SEEK, a));
			this._seekStart = null
		}
	},
	initialize: function ($super, c, b) {
		$super(c);
		this.listeners = {};
		for (var a in this._listeners) {
			this.listeners[a] = this._listeners[a].STbind(this)
		}
		for (var a in ns_.DispatcherEvents) {
			this._events[ns_.DispatcherEvents[a]] = null
		}
		this._s.registerMediaComponent(ns_.HTML5MediaComponent);
		if (b) {
			this.activate(b)
		}
	},
	activate: function (a) {
		this._player = a;
		this._s.registerMediaComponent(ns_.HTML5MediaComponent);
		this.bindEvents();
		if (!this["onMeasure_cb"]) {
			this["onMeasure_cb"] = this.onMeasure.STbind(this)
		}
		this._s.listen("ss:measure", this["onMeasure_cb"]);
		if (!this["onMediaChange_cb"]) {
			this["onMediaChange_cb"] = this.onMediaChange.STbind(this)
		}
		this.getPlaylist().listen(ns_.DispatcherEvents.MEDIA_CHANGE, this["onMediaChange_cb"])
	},
	deactivate: function () {
		if (!this._player) {
			return false
		}
		this.unbindEvents();
		this._s.unlisten("ss:measure", this["onMeasure_cb"]);
		this.getPlaylist().unlisten(ns_.DispatcherEvents.MEDIA_CHANGE, this["onMediaChange_cb"])
	},
	bindEvents: function () {
		for (var a in this.listeners) {
			ns_.dom.addEvent(this._player, a, this.listeners[a])
		}
	},
	unbindEvents: function () {
		for (var a in this.listeners) {
			ns_.dom.removeEvent(this._player, a)
		}
	},
	listenClip: function () {
		if (!this._clip) {
			return false
		}
		var b;
		for (var a in ns_.MediaEvents) {
			b = ns_.MediaEvents[a];
			if (typeof this[b] != "undefined" && typeof this[b].STbind != "undefined") {
				if (!this[b + "_cb"]) {
					this[b + "_cb"] = this[b].STbind(this)
				}
				this._clip.listen(b, this[b + "_cb"])
			}
		}
	},
	unlistenClip: function () {
		if (!this._clip) {
			return false
		}
		var b;
		for (var a in ns_.MediaEvents) {
			b = ns_.MediaEvents[a];
			if (typeof this[b] != "undefined" && typeof this[b].STbind != "undefined") {
				this._clip.unlisten(b, this[b + "_cb"])
			}
		}
	},
	getNickname: function () {
		return this._nickName
	},
	setClip: function () {
		if (this._clip && this.getPlaylist().isClipActive(this._clip)) {
			if (this._clip.isPlaying() || this._clip.isPaused()) {
				this._clip.fire("onStop", new ns_.MediaEvent("onStop", this.snapshot()))
			}
			this.unlistenClip();
			this._clip = oClip;
			this.listenClip()
		} else {
			if (this._clip) {
				this.listenClip()
			} else {
				this._clip = this.getPlaylist().addNewClip();
				this.listenClip()
			}
		}
		return this._clip
	},
	getClip: function () {
		if (!!this._clip) {
			return this._clip
		} else {
			if (this.getPlaylist()._clips.length == 0) {
				return this.setClip()
			}
		}
	},
	setPlaylist: function () {
		return this._s.setPlaylist()
	},
	getPlaylist: function () {
		return this._s.getPlaylist()
	},
	isPlaying: function () {
		var a = false;
		if (this._player.readyState >= this._player.HAVE_FUTURE_DATA && !this._player.paused && !this._player.ended) {
			a = true
		}
		return a
	},
	isPaused: function () {
		var a = this._player.paused;
		return a
	},
	isEligible: function (a) {
		try {
			if (a.nodeName.toLowerCase() == "video" && a.NETWORK_IDLE) {
				return true
			}
		} catch (b) {
			return false
		}
		return true
	},
	snapshot: function () {
		var a = {};
		a.target = this.getClip();
		a.playHeadPosition = this.getPosition();
		a.length = this.getLength();
		a.volume = this.getVolume();
		return a
	},
	isLooping: function () {
		if (this._player.getAttribute("loop")) {
			return true
		} else {
			return false
		}
	},
	getPosition: function () {
		return (this._player.currentTime * 1000).toFixed(0)
	},
	getLength: function () {
		return (this._player.duration * 1000).toFixed(0)
	},
	getVolume: function () {
		if (!this._player.muted) {
			return (this._player.volume * 100).toFixed(0)
		} else {
			return 0
		}
	},
	getPlaylistName: function () {
		return document.title
	},
	getPlayerVersion: function () {
		return 0
	},
	getBandWidth: function () {
		return 0
	},
	getResolution: function () {
		return [this._player.videoWidth, "x", this._player.videoHeight].join("")
	},
	onMeasure: function (a, b) {
		this.setAttribute("bitrate", 0);
		this.setAttribute("playerType", "HTML5");
		this.setAttribute("playerVersion", this.getPlayerVersion());
		this.setAttribute("bandwidth", this.getBandWidth());
		this.setAttribute("resolution", this.getResolution());
		b.bulkSet(this.getAllAttributes())
	},
	onMediaChange: function (b, a, c) {
		this._clip = c
	}
});
(function () {
	if (typeof (ns_) != "undefined" && typeof (ns_.StreamSense) != "undefined") {
		ns_.StreamSense.getStreamSense().registerMediaComponent(ns_.HTML5MediaComponent)
	} else {
		setTimeout(arguments.callee, 500)
	}
})();;
define("svtlib-svtplayer/src/js/libs/statistics/streamsense-concat.min", function () {});
define("svtlib-svtplayer/src/js/svtplayer/util/utils", [], function () {
	svtplayer = svtplayer || {};
	svtplayer.util = svtplayer.util || {};
	svtplayer.util.Utils = {
		formatTime: function (e) {
			if (-1 != e.indexOf(":")) {
				var t = e.split(":");
				e = t.length > 2 ? 3600 * parseInt(t[0]) + 60 * parseInt(t[1]) + parseInt(t[2]) : t.length > 1 ? 60 * parseInt(t[0]) + parseInt(t[1]) : parseInt(t[0])
			}
			var i = "",
				n = Math.floor(e / 3600),
				s = Math.floor(e / 60 - 60 * n),
				r = e % 60;
			if (n > 0) {
				i += n + " h ";
				s > 0 && (i += s + " min")
			} else if (s >= 10) i += s + " min";
			else if (s > 0) {
				i += s + " min";
				r > 0 && (i += " " + r + " sek")
			} else i += r + " sek";
			return i
		},
		formatDigitalTime: function (e) {
			if (isNaN(e) && e.indexOf(":") > -1) return e;
			var t = Math.floor(e / 3600),
				i = Math.floor(e / 60 - 60 * t),
				n = e % 60;
			return t > 0 ? this.addLeadingZero(t) + ":" + this.addLeadingZero(i) + ":" + this.addLeadingZero(n) : i > 0 ? this.addLeadingZero(i) + ":" + this.addLeadingZero(n) : n > 0 ? "00:" + this.addLeadingZero(n) : void 0
		},
		formatShortTime: function (e) {
			var t = this.formatTime(e),
				i = t.split(" ");
			return i[0] + " " + i[1]
		},
		addLeadingZero: function (e) {
			var t = "" + e;
			return t.length < 2 ? "0" + e : e
		},
		getEncodedJson: function (e) {
			return encodeURIComponent(JSON.stringify(e))
		},
		openPopup: function (e, t) {
			var i = [];
			i.push("status=" + (void 0 == t.status ? 0 : t.status));
			i.push("toolbar=" + (void 0 == t.toolbar ? 0 : t.toolbar));
			i.push("location=" + (void 0 == t.location ? 0 : t.location));
			i.push("menubar=" + (void 0 == t.menubar ? 0 : t.menubar));
			i.push("directories=" + (void 0 == t.directories ? 0 : t.directories));
			i.push("resizable=" + (void 0 == t.resizable ? 1 : t.resizable));
			i.push("scrollbars=" + (void 0 == t.scrollbars ? 0 : t.scrollbars));
			i.push("height=" + (void 0 == t.height ? 480 : t.height));
			i.push("width=" + (void 0 == t.width ? 640 : t.width));
			var n = void 0 == t.name ? "win_" + Math.floor(1e3 * Math.random() + 1) : t.name,
				s = window.open(e, n, i.join(","));
			return s
		},
		addFlashListener: function (e, t, i, n) {
			null == window.__svtplayerCallback__ && (window.__svtplayerCallback__ = function (e, t, i) {
				var n = window.__svtplayerEventListeners__[t][e];
				null != n && n.method.apply(n.scope, [t, i])
			});
			null == window.__svtplayerEventListeners__ && (window.__svtplayerEventListeners__ = {});
			void 0 == window.__svtplayerEventListeners__[t] && (window.__svtplayerEventListeners__[t] = {});
			window.__svtplayerEventListeners__[t][e] = {
				scope: i,
				method: n
			}
		},
		removeFlashListener: function (e, t) {
			if (null == window.__svtplayerEventListeners__ || null == window.__svtplayerEventListeners__[t] || null == window.__svtplayerEventListeners__[t][e]) return !1;
			delete window.__svtplayerEventListeners__[t][e];
			return void 0
		},
		urlifyString: function (e) {
			for (var t = "", i = !1, n = !1, s = 0; s < e.length; ++s) {
				var r = e.charAt(s);
				if (i && n && " " != r) {
					t += "_";
					i = !1
				}
				switch (r) {
				case "a":
				case "b":
				case "c":
				case "d":
				case "e":
				case "f":
				case "g":
				case "h":
				case "i":
				case "j":
				case "k":
				case "l":
				case "m":
				case "n":
				case "o":
				case "p":
				case "q":
				case "r":
				case "s":
				case "t":
				case "u":
				case "v":
				case "w":
				case "x":
				case "y":
				case "z":
				case "0":
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
				case "-":
				case ".":
					t = t + "" + r;
					break;
				case "A":
				case "B":
				case "C":
				case "D":
				case "E":
				case "F":
				case "G":
				case "H":
				case "I":
				case "J":
				case "K":
				case "L":
				case "M":
				case "N":
				case "O":
				case "P":
				case "Q":
				case "R":
				case "S":
				case "T":
				case "U":
				case "V":
				case "W":
				case "X":
				case "Y":
				case "Z":
					t = t + "" + r.toLowerCase();
					break;
				case "ö":
				case "Ö":
					t += "o";
					break;
				case "å":
				case "Å":
				case "ä":
				case "Ä":
					t += "a";
					break;
				case "é":
				case "É":
				case "è":
				case "È":
					t += "e";
					break;
				case "ü":
				case "Ü":
					t += "u";
					break;
				case "&":
					t += "och";
					break;
				case " ":
					i = !0;
					break;
				default:
					t += "_"
				}
				n = n || !i
			}
			return t.toString()
		},
		ajaxJsonRequest: function (e, t, i) {
			var n = -1 == e.indexOf("callback") ? "json" : "jsonp";
			$.ajax({
				url: e,
				dataType: n,
				cache: !0,
				success: function (e, i, n) {
					"function" == typeof t && t(e, i, n)
				},
				error: function (e) {
					"function" == typeof i && i(e)
				}
			})
		},
		getQueryParameter: function (e) {
			for (var t = window.location.search.substring(1), i = t.split("&"), n = 0; n < i.length; n++) {
				var s = i[n].split("=");
				if (s[0] == e) return s[1]
			}
			return !1
		},
		getArgs: function (e) {
			var t = window.subscribe ? e : e[0];
			return Array.prototype.slice.call(t)
		}
	};
	return svtplayer.util.Utils
});
define("svtlib-svtplayer/src/js/svtplayer/util/device", ["./utils"], function (e) {
	svtplayer.util.Device = {
		getOrientation: function () {
			return 90 === Math.abs(window.orientation) ? "landscape" : "portrait"
		},
		isSmallScreen: function () {
			return window.innerWidth < 500
		},
		isHttpLiveStreamingCapable: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			void 0 == this._isHttpLiveStreamingCapable && (this._isHttpLiveStreamingCapable = this.isIOS() || -1 != this.ua.indexOf("android 4") || -1 != this.ua.indexOf("lg browser") || -1 != this.ua.indexOf("nintendo wiiu") || -1 != this.ua.indexOf("playstation 4") || window.Modernizr && Modernizr.localStorage && localStorage.getItem("hls") || this.isHlsOnlyDevice() || this.isMacDesktopSafari());
			return this._isHttpLiveStreamingCapable
		},
		isFlashCapable: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			if (void 0 === this._isFlashCapable) {
				this._isFlashCapable = !1;
				if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && !this.isHlsOnlyDevice()) this._isFlashCapable = !0;
				else try {
					var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					e && (this._isFlashCapable = !0)
				} catch (t) {}
			}
			return this._isFlashCapable
		},
		isIE: function () {
			return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)
		},
		isMobile: function () {
			return "undefined" != typeof Modernizr && null != Modernizr.mobile ? !!Modernizr.mobile : this.isAndroid() || this.isIOSMobile() || this.isWindowsPhone()
		},
		inSweden: function () {
			return "undefined" != typeof Modernizr && null != Modernizr.sweden ? !!Modernizr.sweden : !0
		},
		isAndroid: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			void 0 == this._isAndroid && (this._isAndroid = this.ua.indexOf("android") > -1);
			return this._isAndroid
		},
		isAndroidApp: function () {
			return !!window.SvtPlayAndroid
		},
		isWindowsPhone: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			void 0 == this._isWindowsPhone && (this._isWindowsPhone = this.ua.indexOf("windows phone") > -1 || this.ua.indexOf("wpdesktop") > -1);
			return this._isWindowsPhone
		},
		usesExternalVideoPlayerApp: function () {
			return this.isWindowsPhone() || !this.isAndroidApp() && this.isAndroid()
		},
		isIOS: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			void 0 == this._isIOS && (this._isIOS = this.ua.indexOf("ipad") > -1 || this.ua.indexOf("iphone") > -1 || this.ua.indexOf("ipod") > -1);
			return this._isIOS
		},
		isIOSMobile: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			void 0 == this._isIOSMobile && (this._isIOSMobile = this.ua.indexOf("iphone") > -1 || this.ua.indexOf("ipod") > -1);
			return this._isIOSMobile
		},
		isMacDesktopSafari: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			void 0 == this._isMacDesktopSafari && (this._isMacDesktopSafari = this.ua.indexOf("safari") > -1 && this.ua.indexOf("mac") > -1 && -1 == this.ua.indexOf("chrome"));
			return this._isMacDesktopSafari
		},
		isHlsOnlyDevice: function () {
			this.ua = this.ua || navigator.userAgent.toLowerCase();
			var t = $("body").hasClass("playJsFeature-hls"),
				i = "true" === e.getQueryParameter("hls");
			void 0 == this._isHlsOnlyDevice && (this._isHlsOnlyDevice = t || i || -1 != this.ua.indexOf("philips") || -1 != this.ua.indexOf("sonycebrowser") || -1 != this.ua.indexOf("inettvbrowser") || -1 != this.ua.indexOf("viera") || -1 != this.ua.indexOf("adb"));
			return this._isHlsOnlyDevice
		},
		isIELessThen7: function () {
			return $("html").hasClass("ieLte7")
		}
	};
	return svtplayer.util.Device
});
define("svtlib-svtplayer/src/js/template/svtplayer_template", [], function () {
	svtplayer.Template = window.svtplayer.Template || {};
	svtplayer.Template.getTemplate = function (e) {
		switch (e) {
		case "svtplayerFlashIE":
			return '<object id="<%=this.id %>" class="svtplayerVideoIE svtPlayer-z-bottom" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="height:<%=this.height %>;"><param name="movie" value="<%= this.PLAYER_SWF %>" /><param name="flashvars" value="<%=this.flashvars %>" /><param name="allowscriptaccess" value="always" /><param name="allowfullscreen" value="true" />            <param name="bgcolor" value="#000000" />            <param name="wmode" value="<%= this.wmode %>" /></object>';
		case "svtplayerFlashNoIE":
			return '<object id="<%=this.id %>" class="svtplayerVideoNoIE svtPlayer-z-bottom" type="application/x-shockwave-flash" data="<%= this.PLAYER_SWF %>"><param name="flashvars" value="<%=this.flashvars %>" /><param name="allowscriptaccess" value="always" /> <param name="allowfullscreen" value="true" />            <param name="bgcolor" value="#000000" />            <param name="wmode" value="<%= this.wmode %>" /></object>';
		case "svtplayerHtml5":
			return '<video class="svtplayerVideoNoIE svtPlayer-z-bottom" width="<%=this.width %>"            poster="<%=this.poster %>" type="application/vnd.apple.mpegurl" x-webkit-airplay="allow" controls            src="<%=this.videosrc %>" id="<%=this.id %>" ></video>';
		case "svtplayerError":
			return '<div class="svtplayerOverlay svtplayerError svtplayerCenter-Outer svtPlayer-z-bottom"><div class="svtplayerCenter-Inner svtplayerError-notHtml5Supported"><h2 class="svtplayerErrorHeadline">Videon är inte tillgänglig</h2><p><strong>Videon du har valt kan av tekniska skäl tyvärr inte visas i den typ av dator du just nu använder.</strong></p></div><div class="svtplayerCenter-Inner svtplayerError-noFlashPlugin"><h2 class="svtplayerErrorHeadline">För att se video rekommenderar vi Flash Player 10.1 eller senare</h2><p><a href="http://www.adobe.com/go/getflashplayer" class="svtH6 svtLink-Play">Ladda ner Flash Player (öppnas på adobe.com)</a></p><p><a href="<%=window.location.href %><%=(window.location.search.length > 0) ? "&" : "?" %>hls=true">Spela HTML5-video</a></p></div><div class="svtplayerCenter-Inner svtplayerError-denied"><div class="svtplayerErrorHeadlineContainer"><h2 class="svtplayerErrorHeadline">Videon är inte tillgänglig</h2></div><p class="svtplayerErrorDescription">Det kan finnas flera olika skäl till att du inte kan se videon.<br/>På vår testsida kan du prova om du kan se vår testvideo:</p><p><a href="http://www.svtplay.se/svt-play-testsida" class="svtplayerUnderline">SVT Play testsida</a></p></div><div class="svtplayerCenter-Inner svtplayerError-noMobileRights"><div class="svtplayerErrorHeadlineContainer"><span class="svtplayerIconMobileblock svtplayerErrorIcon"></span><h2 class="svtplayerErrorHeadline svtPlayer-hide-XS">Videon kan inte ses i mobiler och surfplattor</h2></div><p class="svtPlayer-hide-XS"><a href="http://www.svt.se/tittarservice/hitta-svar/teknik/olika-utbud-i-min-dator-mobiltelefon-och-surfplatta-1" class="svtplayerUnderline">Läs mer om våra rättigheter</a></p></div><div class="svtplayerCenter-Inner svtplayerError-onlyAvailableInSweden"><div class="svtplayerErrorHeadlineContainer"><span class="svtplayerIconGeoblock svtplayerErrorIcon"></span><h2 class="svtplayerErrorHeadline svtPlayer-hide-XS">Videon kan bara ses i Sverige</h2></div><p class="svtPlayer-hide-XS svtPlayer-hide-S svtplayerErrorDescription">Inom Sverige kan du se SVT Play utan geografiska begränsningar. Är du utomlands kan du se många men inte alla program på SVT Play. Lagen om upphovsrätt styr dock, så att upphovsmännen kan begränsa visningsrätten till enbart Sverige. Då får vi inte visa program utomlands.</p><p class="svtPlayer-hide-XS"><a href="http://www.svt.se/tittarservice/hitta-svar/teknik/utomlands-och-titta-pa-svt-play-2" class="svtplayerUnderline">Läs mer om våra rättigheter</a></p></div><div class="svtplayerCenter-Inner svtplayerError-android"><h2 class="svtplayerErrorHeadline">För att kunna se denna video behövs Playappen för android</h2><p><a href="#" class="svtplayerUnderline svtplayer-jsonurl">Jag har appen, öppna videon</a></p><p><a href="#" class="svtplayerUnderline">Ladda ner appen från Google play</a></p></div><div class="svtplayerCenter-Inner svtplayerError-error"><h2 class="svtplayerErrorHeadline">Den här videon är tyvärr inte tillgänglig</h2><div class="svtplayerClipboardButtonContainer svtPlayer-hide"><div class="svtJSCopyToClipboardButton">Kopiera felinformation</div></div></div></div>';
		case "svtplayerContext":
			return '<div class="svtplayerCB svtPlayer-z-top svtplayerCenter-Outer svtPlayer-hide"><input class="svtVisuallyhidden svtplayerStartButton" type="button" name="spela" value="Spela video" accesskey="p"/><div class="svtplayerCBContainer svtplayerCenter-Inner svtplayer-js-base-controls"><span class="svtplayerSprite-Play<% if (this.length <= 0) { %> svtplayerSprite-Play-noLength<% } %>"></span><% if (this.length > 0) { %><span class="svtplayerTime"><time><%=this.lengthStr %></time></span><% } %></div><div class="svtplayerHide-XXS svtplayer_chromecast-container is--inactive svtplayerOverlayChromeCast svtPlayer-hide"><div class="svtplayerCBContainer svtplayerCenter-Inner svtplayer_cb-container--dynamic-width svtplayer-js-cc-controls svtPlayer-hide"><span class="svtplayerIcon-cc-control-loading"></span></div><button class="svtplayer_chromecast__button is--inactive svtplayerTeaserContainer svtplayerInlineBlock svtplayer-jsToggleCC"><span class="svtplayer-js-cc-state svtplayerIcon-cc-idle svtplayer_chromecast-state"></span><span class="svtplayer_chromecast-state svtplayer_js-cc-name svtplayer_chromecast-state--text">Visa på Chromecast</span></button></div><div class="svtplayerHide-XXS svtplayer-js-cc-controls-progressbar svtplayer-cc-controls-progressbar svtplayerInner-Bottom svtPlayer-hide"><div class="svtplayer_progressbar"><span class="svtplayer_js-current-time svtplayer_progressbar__time">00:00</span><input type="range" class="svtplayer_progressbar__range svtplayer-js-progressbar" value="0" step="0.1"><span class="svtplayer_js-duration svtplayer_progressbar__time is--last">00:00</span></div></div></div><div class="svtplayerTeaser svtPlayer-z-top svtPlayer-hide"><input class="svtVisuallyhidden svtplayerStartButton" type="button" name="spela" value="Spela video" accesskey="p"/><div class="svtplayerTeaserContainer"><span class="svtplayerSprite-Play"></span><% if (this.length > 0) { %><span class="svtplayerTime"><time><%=this.shortLengthStr %></time></span><% } %></div></div><div class="svtplayerOverlay svtplayerOverlayEmbed svtPlayer-z-middle svtPlayer-hide"><h2 class="svtPlayer-hide-XS">Använd den här videon</h2><a href="#close" class="svtplayerClose">&nbsp;</a><div class="svtplayerEmbedContent svtplayerCenterContainer"><div class="svtplayerCenterInner"><p class="svtPlayer-hide-XS">Kopiera och klistra in koden nedan för att visa videon på din hemsida</p><select class="svtplayerFormSelect"><option value="480x270">Litet format: 480x270</option><option value="640x360">Stort format: 640x360</option></select><input class="svtplayerJSCopyCBtext svtplayerFormText" type="text" value="<%=this.embedCode %>" /><div class="svtJSCopyToClipboardButton svtPlayer-hide">Kopiera kod</div></div></div></div><div class="svtplayerOverlay svtplayerOverlayEnd svtPlayer-z-middle svtPlayer-hide"><div class="svtplayerEndContent svtplayerCenterContainer"></div></div><div class="svtplayerOverlay svtplayerOverlayPause svtPlayer-z-middle svtPlayer-hide svtplayerCenter-Outer"><div class="svtplayerCenter-Inner"><div class="svtplayerCBContainer"><span class="svtplayerSprite-Play"></span><p>Visningen stoppad på grund av inaktivitet</p></div></div></div><div class="svtplayerOverlayLiveCountdown svtPlayer-z-middle svtPlayer-hide svtplayerCenter-Outer"><div class="svtplayerCountDownNow svtplayerCenter-Inner svtPlayer-hide"><% if(this.disabled == undefined || this.disabled.indexOf("live") == -1) { %><div class="svtplayerSprite-LiveActive"></div><% } %><input class="svtVisuallyhidden svtplayerStartButton" type="button" name="spela" value="Spela video" accesskey="p"/><div class="svtplayerCBContainer"><span class="svtplayerSprite-Play"></span></div></div><div class="svtplayerCountDownNowTeaser svtPlayer-hide"><% if(this.disabled == undefined || this.disabled.indexOf("live") == -1) { %><div class="svtplayerSprite-LiveActive"></div><% } %><input class="svtVisuallyhidden svtplayerStartButton" type="button" name="spela" value="Spela video" accesskey="p"/><div class="svtplayerHide-gte-XS svtplayerInner-Bottom"><span class="svtplayerSprite-LiveActive-Small"></span></div><div class="svtplayerTeaserContainer svtplayerHide-XXS"><span class="svtplayerSprite-Play"></span><div class="svtplayerCountdownTitle svtPlayer-hide-XS"><h2><%=this.title %></h2></div></div></div><div class="svtplayerCountdown"><div class="svtplayerHide-XXS svtplayerCenter-Inner svtplayerOverlayLiveCountdown-Inner"><% if(this.disabled == undefined || this.disabled.indexOf("live") == -1) { %><div class="svtplayerSprite-Live"></div><% } %><div class=""><div class="svtplayerCountdownTitle svtPlayer-hide-XS"><h2><%=this.title %></h2></div><div class="svtplayerCountdownContainer"><p class="svtplayerFont12 svtXPadding-Bottom-5px">Sändningen startar om:</p><div class="svtplayerCountdownTime"><div class="svtplayerFontXL svtplayerJsDays"></div><div class="svtplayerFloatLeft"><div class="svtplayerCountdownLetter svtplayerJsLeadHour svtplayerFontXL">0</div><div class="svtplayerCountdownLetter svtplayerJsHour svtplayerFontXL">0</div><p class="svtplayerFont12 svtXClearBoth svtXPadding-Top-5px">Timmar</p></div><span class="svtplayerFontXL svtplayerFloatLeft">:</span><div class="svtplayerFloatLeft"><div class="svtplayerCountdownLetter svtplayerJsLeadMin svtplayerFontXL">0</div><div class="svtplayerCountdownLetter svtplayerJsMin svtplayerFontXL">0</div><p class="svtplayerFont12 svtXClearBoth svtXPadding-Top-5px">Minuter</p></div><span class="svtplayerFontXL svtplayerFloatLeft">:</span><div class="svtplayerFloatLeft"><div class="svtplayerCountdownLetter svtplayerJsLeadSec svtplayerFontXL">0</div><div class="svtplayerCountdownLetter svtplayerJsSec svtplayerFontXL">0</div><p class="svtplayerFont12 svtXClearBoth svtXPadding-Top-5px">Sekunder</p></div></div></div></div></div><div class="svtplayerHide-gte-XS svtplayerInner-Bottom"><% if(this.disabled == undefined || this.disabled.indexOf("live") == -1) { %><div class="svtplayerSprite-Live-Small"></div><% } %></div></div><div class="svtplayerInner-Bottom svtplayerJsPlayFromStart svtPlayer-hide"><button class="svtplayerTeaserContainer svtplayerInlineBlock"><span class="svtplayerSprite-Replay"></span><span class="svtplayerPlayFromStart">Se från början</span></button></div></div>';
		case "svtplayerEmbedCode":
			return '<iframe src="<%=this.url %>" width="<%=this.width %>" height="<%=this.height %>" frameborder="0" scrolling="no"></iframe>';
		case "svtplayerCopyButton":
			return '<object id="<%=this.id %>" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="width:<%=this.width %>;height:<%=this.height %>;"><param name="movie" value="<%=this.COPY_TO_CLIPBOARD_SWF %>" /><param name="flashvars" value="overcolor=<%=this.overcolor %>&amp;outcolor=<%=this.outcolor %>&amp;radious=<%=this.radious %>&amp;copytext=<%=this.copytext %>&amp;text=<%=this.text %>&amp;font=<%=this.font %>&amp;size=<%=this.size %>&amp;textcolor=<%=this.textcolor %>&amp;bold=<%=this.bold %>" /><param name="allowscriptaccess" value="always" /> <param name="allowfullscreen" value="true" />             <embed width="<%=this.width %>" height="<%=this.height %>"                flashvars="overcolor=<%=this.overcolor %>&amp;outcolor=<%=this.outcolor %>&amp;radious=<%=this.radious %>&amp;copytext=<%=this.copytext %>&amp;text=<%=this.text %>&amp;font=<%=this.font %>&amp;size=<%=this.size %>&amp;textcolor=<%=this.textcolor %>&amp;bold=<%=this.bold %>"                allowscriptaccess="always" allowfullscreen="true"                bgcolor="#000000" quality="high" name="<%=this.id %>embed" id="<%=this.id %>embed"                src="<%=this.COPY_TO_CLIPBOARD_SWF %>" type="application/x-shockwave-flash">            </embed></object>';
		default:
			log("No template found: " + e + " in svtplayer.Template");
			return ""
		}
	};
	return svtplayer.Template
});
define("svtlib-svtplayer/src/js/svtplayer/util/copytoclipboard", ["Class", "jquery", "jqote2", "./device", "./../../template/svtplayer_template"], function (e, t, i, n, s) {
	svtplayer.util.CopyToClipboard = e.extend({
		_flashObject: void 0,
		_flashEmbed: void 0,
		_element: void 0,
		_hasRun: !1,
		init: function (e, i, r) {
			if (n.isFlashCapable) {
				var a = s.getTemplate("svtplayerCopyButton"),
					o = "clipboard" + Math.round(1e5 * Math.random());
				i = encodeURI(i);
				i = i.replace(/&/g, "%26");
				var l = {
					id: o,
					copytext: i,
					overcolor: 5089567,
					outcolor: 3288877,
					width: "135px",
					height: "43px",
					radious: 10,
					text: encodeURI(e.html()),
					font: e.css("font-family"),
					textcolor: 16777215,
					size: 17,
					bold: !1,
					COPY_TO_CLIPBOARD_SWF: svtplayer.SVTPlayer.COPY_TO_CLIPBOARD_SWF
				};
				l = t.extend(l, r);
				e.css("display", "block");
				e.jqotesub(a, l);
				e.show();
				this._flashObject = t("#" + o)[0];
				this._flashEmbed = t("#" + o + "embed")[0];
				this._element = e
			}
		},
		setCopyText: function (e) {
			if (this._hasRun) this._flashObject && this._flashObject.setCopyText ? this._flashObject.setCopyText(e) : this._flashEmbed && this._flashEmbed.setCopyText && this._flashEmbed.setCopyText(e);
			else {
				this._hasRun = !0;
				var t = this;
				setTimeout(function () {
					t.setCopyText(e)
				}, 500)
			}
		},
		cleanup: function () {
			t(this._flashObject).remove();
			t(this._flashEmbed).remove();
			this._element.remove()
		}
	});
	return svtplayer.util.CopyToClipboard
});
define("svtlib-svtplayer/src/js/svtplayer/overlay/embed", ["Class", "jquery", "jqote2", "./../util/copytoclipboard", "./../../template/svtplayer_template", "svtlib-messagechannel"], function (e, t, i, n, s, r) {
	svtplayer.overlay = svtplayer.overlay || {};
	svtplayer.overlay.Embed = e.extend({
		_$element: void 0,
		_$embed: void 0,
		_embedUrl: void 0,
		_playerId: void 0,
		init: function (e, i) {
			this._playerId = e;
			this._$element = i;
			this._$embed = this._$element.find(".svtplayerOverlayEmbed");
			var r = t.jqote(s.getTemplate("svtplayerEmbedCode"), this._getEmbedData());
			r = r.replace(/\"/g, "'");
			this._copyToClipboardButton = new n(i.find(".svtJSCopyToClipboardButton").first(), r);
			var a = this;
			this._$embed.find("select").change(function () {
				a._updateText()
			});
			this._subscribe()
		},
		_subscribe: function () {
			var e = this;
			r.subscribe("player/overlay/embed/show/" + this._playerId, function () {
				e.show()
			});
			r.subscribe("player/overlay/embed/hide/" + this._playerId, function () {
				e.hide()
			});
			r.subscribe("/player/onUpdateSettings", function (t, i) {
				e._updateSettings(t, i)
			})
		},
		_updateSettings: function (e, t) {
			e == this._playerId && t.context && (this._embedUrl = t.context.embedUrl)
		},
		show: function () {
			var e = this;
			this._updateText();
			this._$embed.show();
			this._$embed.find(".svtplayerClose").bind("click", function (t) {
				t.preventDefault();
				r.publish("/player/onClose", [e._playerId])
			});
			this._$element.find(".svtplayerJSCopyCBtext").select()
		},
		hide: function () {
			this._$embed.find(".svtplayerClose").unbind("click");
			this._$embed.hide()
		},
		_updateText: function () {
			var e = this._getEmbedData(),
				i = this._$element.find("select").val().split("x");
			e.width = i[0];
			e.height = i[1];
			embedCode = t.jqote(s.getTemplate("svtplayerEmbedCode"), e);
			this._$element.find(".svtplayerJSCopyCBtext").attr("value", embedCode).select();
			this._copyToClipboardButton.setCopyText(embedCode)
		},
		_getEmbedData: function () {
			this._embedUrl = this._embedUrl || this._$element.attr("data-embed-href") || "";
			return {
				url: this._embedUrl,
				width: this._$element.width(),
				height: this._$element.height()
			}
		}
	});
	return svtplayer.overlay.Embed
});
define("svtlib-svtplayer/src/js/svtplayer/overlay/endscreen", ["Class", "jquery", "svtlib-messagechannel"], function (e, t, i) {
	svtplayer.overlay = svtplayer.overlay || {};
	svtplayer.overlay.EndScreen = e.extend({
		_$end: void 0,
		_playerId: void 0,
		init: function (e, t) {
			this._$end = t.find(".svtplayerOverlayEnd");
			this._playerId = e;
			this._subscribe()
		},
		_subscribe: function () {
			var e = this;
			i.subscribe("player/overlay/endScreen/show/" + this._playerId, function () {
				e.show()
			});
			i.subscribe("player/overlay/endScreen/hide/" + this._playerId, function () {
				e.hide()
			})
		},
		show: function () {
			this._$end.show()
		},
		hide: function () {
			this._$end.hide()
		}
	});
	return svtplayer.overlay.EndScreen
});
define("svtlib-svtplayer/src/js/svtplayer/overlay/pause", ["Class", "jquery", "svtlib-messagechannel"], function (e, t, i) {
	svtplayer.overlay = svtplayer.overlay || {};
	svtplayer.overlay.Pause = e.extend({
		_$pause: void 0,
		_title: void 0,
		_playerId: void 0,
		init: function (e, t, i) {
			this._$pause = t.find(".svtplayerOverlayPause");
			this._title = i;
			this._playerId = e;
			this._subscribe()
		},
		_subscribe: function () {
			var e = this;
			i.subscribe("player/overlay/pause/show/" + this._playerId, function () {
				e.show()
			});
			i.subscribe("player/overlay/pause/hide/" + this._playerId, function () {
				e.hide()
			})
		},
		show: function () {
			this._$pause.show();
			this._$pause.find(".svtplayerCountdownTitle h2").html(this._title)
		},
		hide: function () {
			this._$pause.hide()
		}
	});
	return svtplayer.overlay.Pause
});
define("svtlib-svtplayer/src/js/svtplayer/overlay/liveCountdown", ["Class", "jquery", "./../util/device", "svtlib-messagechannel"], function (e, t, i, n) {
	svtplayer.overlay = svtplayer.overlay || {};
	svtplayer.overlay.LiveCountdown = e.extend({
		_$liveCountdownOverlay: void 0,
		_$liveCountdown: void 0,
		_$liveCountdownNow: void 0,
		_$leadHour: void 0,
		_$hour: void 0,
		_$leadMin: void 0,
		_$min: void 0,
		_$leadSec: void 0,
		_$sec: void 0,
		_$element: void 0,
		_$playFromStart: void 0,
		_svtplayer: void 0,
		_start: void 0,
		_timeLeft: void 0,
		_counting: void 0,
		_settings: void 0,
		_countdownTimer: void 0,
		_playerId: void 0,
		_flashEnabled: void 0,
		init: function (e, t, n, s) {
			this._start = n;
			this._playerId = e;
			this._$element = t;
			this._$liveCountdownOverlay = t.find(".svtplayerOverlayLiveCountdown");
			this._$liveCountdown = t.find(".svtplayerCountdown");
			if ("true" == s) this._$liveCountdownNow = t.find(".svtplayerCountDownNowTeaser");
			else {
				this._$liveCountdownNow = t.find(".svtplayerCountDownNow");
				"true" == this._$element.attr("data-dvr") && i.isFlashCapable() && (this._$playFromStart = t.find(".svtplayerJsPlayFromStart"))
			}
			this._$leadHour = t.find(".svtplayerJsLeadHour");
			this._$hour = t.find(".svtplayerJsHour");
			this._$leadMin = t.find(".svtplayerJsLeadMin");
			this._$min = t.find(".svtplayerJsMin");
			this._$leadSec = t.find(".svtplayerJsLeadSec");
			this._$sec = t.find(".svtplayerJsSec");
			this._subscribe();
			this._addEventListeners()
		},
		_subscribe: function () {
			var e = this;
			n.subscribe("player/overlay/liveCountdown/show/" + this._playerId, function () {
				e.show()
			});
			n.subscribe("player/overlay/liveCountdown/hide/" + this._playerId, function () {
				e.hide()
			})
		},
		show: function () {
			var e = this._$element.attr("data-livestart"),
				t = this._$element.attr("data-title");
			clearInterval(this._countdownTimer);
			this._timeLeft = -1 * e;
			if (this._timeLeft <= 0) this._startLiveBroadcast(!0);
			else {
				this._setLiveGraphic(!1);
				if (Math.floor(this._timeLeft / 3600) >= 24) {
					var i = Math.floor(this._timeLeft / 86400),
						n = "dagar";
					1 == i && (n = "dag");
					this._$liveCountdownOverlay.find(".svtplayerCountdownTime").html('<div class="svtplayerFontXL svtplayerJsDays">' + i + " " + n + "</div>")
				} else {
					this._counting = !0;
					var s = this;
					this._syncCounter(function (e) {
						if (!e) {
							s._updateTime();
							s._countdownTimer = setInterval(function () {
								s._counter()
							}, 1e3)
						}
					})
				}
			}
			this._$liveCountdownOverlay.find(".svtplayerCountdownTitle h2").html(t)
		},
		hide: function () {
			this._$liveCountdownOverlay.hide()
		},
		_addEventListeners: function () {
			var e = this;
			this._$playFromStart && this._$playFromStart.on("click", function (t) {
				t.preventDefault();
				t.stopPropagation();
				e.playFromStart();
				return !1
			})
		},
		_setLiveGraphic: function (e) {
			if (e) {
				this._$liveCountdownOverlay.find(".svtplayerSprite-Live").removeClass("svtplayerSprite-Live").addClass("svtplayerSprite-LiveActive");
				this._$liveCountdownNow.css("display", "inline-block");
				this._$liveCountdown.hide();
				this._$playFromStart && this._$playFromStart.show()
			} else {
				this._$liveCountdownOverlay.find(".svtplayerSprite-LiveActive").removeClass("svtplayerSprite-LiveActive").addClass("svtplayerSprite-Live");
				this._$liveCountdownNow.hide();
				this._$playFromStart && this._$playFromStart.hide();
				this._$liveCountdown.show()
			}
			this._$liveCountdownOverlay.css("display", "inline-block")
		},
		_countDown: function () {
			if (this._timeLeft < 2) {
				this._counting = !1;
				clearInterval(this._countdownTimer);
				this._timeLeft = 0
			} else this._timeLeft--
		},
		_counter: function () {
			this._countDown();
			this._updateTime();
			var e = this;
			this._counting ? 0 == this._timeLeft % 60 && this._syncCounter() : e._startLiveBroadcast(!1)
		},
		_syncCounter: function (e) {
			var t = this;
			this._getJSON(function (i) {
				t._settings = i;
				var n = -1 * i.video.livestart;
				1 > n ? t._startLiveBroadcast(!1) : Math.abs(t._timeLeft - n) > 20 && (t._timeLeft = n);
				e && e(1 > n)
			})
		},
		_startLiveBroadcast: function (e) {
			var t = this;
			clearInterval(this._countdownTimer);
			if (this._settings) {
				this._settings.video.livestart = 0;
				n.publish("/player/updateSettings", [t._playerId, this._settings])
			}
			switch (t._start) {
			case "auto":
				n.publish("/player/play", [t._playerId, !0]);
				break;
			case "disable":
			case "disabled":
				n.publish("/player/showControlbar", [t._playerId, !1, !1]);
				this._setLiveGraphic(!0);
				break;
			default:
				if (e) {
					n.publish("/player/showControlbar", [t._playerId, !1, !0]);
					this._setLiveGraphic(!0)
				} else n.publish("/player/play", [t._playerId, !0])
			}
		},
		_getJSON: function (e) {
			var i = this,
				s = this._$element.attr("data-json-href"),
				r = -1 == s.indexOf("callback") ? "json" : "jsonp";
			s += (-1 == s.indexOf("?") ? "?" : "&") + "output=json";
			s = s.replace("http://localhost:8080/", "/");
			t.ajax({
				url: s,
				dataType: r,
				cache: !0,
				success: e,
				error: function () {
					n.publish("/player/showView", [i._playerId, "error"])
				}
			})
		},
		_addLeadingZero: function (e) {
			return e.toString().length < 2 ? "0" + e : "" + e
		},
		_updateTime: function () {
			var e = Math.floor(this._timeLeft / 3600),
				t = Math.floor(this._timeLeft / 60) % 60,
				i = this._timeLeft % 60;
			e = this._addLeadingZero(e);
			t = this._addLeadingZero(t);
			i = this._addLeadingZero(i);
			this._$leadHour.html(e.charAt(0));
			this._$hour.html(e.charAt(1));
			this._$leadMin.html(t.charAt(0));
			this._$min.html(t.charAt(1));
			this._$leadSec.html(i.charAt(0));
			this._$sec.html(i.charAt(1))
		},
		playFromStart: function () {
			n.publish("/player/play", [this._playerId, !0, 1])
		}
	});
	return svtplayer.overlay.LiveCountdown
});
define("svtlib-svtplayer/src/js/svtplayer/overlay/controlbar", ["Class", "jquery", "../util/utils", "svtlib-messagechannel"], function (e, t, i, n) {
	function s(e) {
		var t = e > 3600 ? Math.floor(e / 3600) : null,
			i = e >= 60 ? Math.floor(e % 3600 / 60) : 0,
			n = e >= 60 ? Math.floor(e % 60) : Math.floor(e);
		i = 9 >= i ? "0" + i : i;
		n = 9 >= n ? "0" + n : n;
		return (null !== t ? t + ":" : "") + i + ":" + n
	}
	svtplayer.overlay = svtplayer.overlay || {};
	var r = {
		INACTIVE: 0,
		ACTIVE: 1,
		LOADING: 2,
		PLAYING: 3,
		PAUSED: 4,
		SEEKING: 5,
		BUFFERING: 6,
		IDLE: 7,
		OTHER_VIDEO_PLAYING: 8,
		ERROR: 9
	};
	svtplayer.overlay.ControlBar = e.extend({
		_$controlbar: void 0,
		_$progressbar: void 0,
		_duration: 0,
		_currentTime: 0,
		init: function (e, t, i) {
			this._$controlbar = i ? t.find(".svtplayerTeaser") : t.find(".svtplayerCB");
			this._$progressbar = this._$controlbar.find(".svtplayer-js-progressbar");
			this._playerId = e;
			this._subscribe()
		},
		_subscribe: function () {
			var e = this;
			n.subscribe("player/overlay/controlBar/show/" + this._playerId, function () {
				e.show()
			});
			n.subscribe("player/overlay/controlBar/hide/" + this._playerId, function () {
				e.hide()
			});
			n.subscribe("/player/chromecast/available/" + this._playerId, function () {
				e.showChromecast()
			});
			n.subscribe("/player/chromecast/unavailable/" + this._playerId, function () {
				e.hideChromcast()
			});
			n.subscribe("/player/chromecast/active/" + this._playerId, this.activateChromecast.bind(this));
			n.subscribe("/player/chromecast/inactive/" + this._playerId, this.deactivateChromecast.bind(this));
			n.subscribe("/player/chromecast/idle/" + this._playerId, function () {
				e.setChromecastStatus(r.IDLE)
			});
			n.subscribe("/player/chromecast/playing/" + this._playerId, function () {
				e.setChromecastStatus(r.PLAYING)
			});
			n.subscribe("/player/chromecast/paused/" + this._playerId, function () {
				e.setChromecastStatus(r.PAUSED)
			});
			n.subscribe("/player/chromecast/loading/" + this._playerId, function () {
				e.setChromecastStatus(r.LOADING)
			});
			n.subscribe("/player/chromecast/buffering/" + this._playerId, function () {
				e.setChromecastStatus(r.BUFFERING)
			});
			n.subscribe("/player/chromecast/othervideo/" + this._playerId, function () {
				e.setChromecastStatus(r.OTHER_VIDEO_PLAYING)
			});
			n.subscribe("/player/chromecast/error/" + this._playerId, function () {
				e.setChromecastStatus(r.ERROR)
			});
			n.subscribe("/player/duration/", this.setDuration.bind(this));
			n.subscribe("/player/currenttime/", this.setCurrentTime.bind(this))
		},
		show: function () {
			this._$controlbar.show()
		},
		hide: function () {
			this._$controlbar.hide()
		},
		showChromecast: function () {
			var e = this;
			this.setChromecastStatus(r.INACTIVE);
			this._$controlbar.find(".svtplayerOverlayChromeCast").removeClass("svtPlayer-hide").addClass("is--visible");
			this._$controlbar.find(".svtplayer-jsToggleCC").on("click", function () {
				e._status === r.INACTIVE ? n.publish("/player/chromecast/activate/" + e._playerId) : n.publish("/player/chromecast/deactivate/" + e._playerId);
				t(this).mouseout();
				return !1
			});
			this._$controlbar.find(".svtplayer-js-cc-controls").on("click", function (t) {
				t.preventDefault();
				if (e._status === r.PLAYING) {
					n.publish("/player/pause", [e._playerId]);
					e._status = r.PAUSED
				} else {
					n.publish("/player/play", [e._playerId]);
					e._status = r.PLAYING
				}
				return !1
			});
			this._$progressbar.on("mousedown", function () {
				e._seek = !0;
				n.publish("/player/seek/start", [e._playerId])
			});
			this._$progressbar.on("change", function () {
				var i = t(this).val();
				n.publish("/player/seek/move", [e._playerId, i]);
				e.setCurrentTime(e._playerId, i / 100 * e._duration, !0)
			});
			this._$progressbar.on("mouseup", function () {
				e._seek = !1;
				var i = t(this).val();
				n.publish("/player/seek", [e._playerId, i])
			})
		},
		hideChromcast: function () {
			this._$controlbar.find(".svtplayerOverlayChromeCast").hide().removeClass("is--visible")
		},
		activateChromecast: function (e) {
			this._$controlbar.find(".svtplayer_js-cc-name").html(e ? "Visas på " + e : "Visas på Chromecast");
			this.setChromecastStatus(r.ACTIVE)
		},
		deactivateChromecast: function () {
			this._$controlbar.find(".svtplayer_js-cc-name").html("Visa på Chromecast");
			this.setChromecastStatus(r.INACTIVE)
		},
		setChromecastStatus: function (e) {
			var t = this._$controlbar.find(".svtplayer-js-cc-controls span");
			this._$controlbar.find(".svtplayer-js-base-controls");
			this._status = e;
			if (e !== r.INACTIVE) switch (e) {
			case r.PLAYING:
				t.removeClass().addClass("svtplayerIcon-cc-control-pause");
				this._setChromecastActiveControls(!0, !0);
				break;
			case r.PAUSED:
				t.removeClass().addClass("svtplayerIcon-cc-control-play");
				this._setChromecastActiveControls(!0, !0);
				break;
			case r.LOADING:
				this._setChromecastActiveControls(!0, !1);
				t.removeClass().addClass("svtplayerIcon-cc-control-loading");
				break;
			case r.BUFFERING:
				this._setChromecastActiveControls(!0, !0);
				t.removeClass().addClass("svtplayerIcon-cc-control-loading");
				break;
			case r.ACTIVE:
				this._setChromecastActiveControls(!0, !1);
				this._$controlbar.find(".svtplayer-js-cc-state").removeClass("svtplayerIcon-cc-idle").addClass("svtplayerIcon-cc-active");
				this._$controlbar.find(".svtplayer-jsToggleCC").removeClass("is--inactive");
				this._$controlbar.find(".svtplayerOverlayChromeCast").removeClass("is--inactive");
				break;
			case r.IDLE:
				this._setChromecastActiveControls(!0, !1);
				t.removeClass().addClass("svtplayerIcon-cc-control-play");
				this._setProgress(0);
				this._$controlbar.find(".svtplayer-js-cc-state").removeClass("svtplayerIcon-cc-idle").addClass("svtplayerIcon-cc-active");
				break;
			case r.OTHER_VIDEO_PLAYING:
				t.removeClass().addClass("svtplayerIcon-cc-control-play");
				this._setChromecastActiveControls(!0, !1);
				break;
			default:
				t.removeClass().addClass("svtplayerIcon-cc-control-error");
				this._$controlbar.find(".svtplayer-jsToggleCC").addClass("is--inactive");
				this._$controlbar.find(".svtplayerOverlayChromeCast").addClass("is--inactive");
				this._setChromecastActiveControls(!1, !1)
			} else {
				this._$controlbar.find(".svtplayer-js-cc-state").removeClass("svtplayerIcon-cc-active").addClass("svtplayerIcon-cc-idle");
				this._$controlbar.find(".svtplayer-jsToggleCC").addClass("is--inactive");
				this._$controlbar.find(".svtplayerOverlayChromeCast").addClass("is--inactive");
				this._setChromecastActiveControls(!1, !1)
			}
		},
		_setChromecastActiveControls: function (e, t) {
			var i = this._$controlbar.find(".svtplayer-js-cc-controls"),
				n = this._$controlbar.find(".svtplayer-js-base-controls"),
				s = this._$controlbar.find(".svtplayer-js-cc-controls-progressbar");
			if (e) {
				i.removeClass("svtPlayer-hide");
				n.addClass("svtPlayer-hide")
			} else {
				i.addClass("svtPlayer-hide");
				n.removeClass("svtPlayer-hide")
			}
			t ? s.removeClass("svtPlayer-hide") : s.addClass("svtPlayer-hide")
		},
		setDuration: function () {
			var e = i.getArgs(arguments),
				t = e[0],
				n = e[1];
			if (t === this._playerId) {
				this._$controlbar.find(".svtplayer_js-duration").html(s(n));
				this._duration = n
			}
		},
		setCurrentTime: function () {
			var e = i.getArgs(arguments),
				t = e[0],
				n = e[1],
				r = e[2];
			if (t === this._playerId) {
				this._$controlbar.find(".svtplayer_js-current-time").html(s(n));
				this._duration > 0 && !r && this._setProgress(100 * (n / this._duration));
				this._currentTime = n
			}
		},
		_setProgress: function (e) {
			this._$controlbar.find(".svtplayer-js-progressbar").attr("value", e.toFixed(1))
		}
	});
	return svtplayer.overlay.ControlBar
});
define("svtlib-svtplayer/src/js/svtplayer/overlay/error", ["Class", "jquery", "./../../template/svtplayer_template", "svtlib-messagechannel"], function (e, t, i, n) {
	svtplayer.overlay = svtplayer.overlay || {};
	svtplayer.overlay.Error = e.extend({
		_$error: void 0,
		_type: void 0,
		$element: void 0,
		_playerId: void 0,
		init: function (e, t, i) {
			this.$element = t;
			this._type = i;
			this._playerId = e;
			this._subscribe()
		},
		_subscribe: function () {
			var e = this;
			n.subscribe("player/overlay/" + this._type + "/show/" + this._playerId, function () {
				e.show()
			});
			n.subscribe("player/overlay/" + this._type + "/hide/" + this._playerId, function () {
				e.hide()
			})
		},
		show: function () {
			this._$error = this._$error || this.$element.find(".svtplayerError");
			if (0 === this._$error.length) {
				var e = i.getTemplate("svtplayerError"),
					t = {
						SPRITE_PATH: svtplayer.SVTPlayer.SPRITE_PATH
					};
				this.$element.jqoteapp(e, t);
				this._$error = this.$element.find(".svtplayerError")
			} else this._$error.show();
			this._$error.find(".svtplayerCenter-Inner").hide();
			this._$error.find(".svtplayerError-" + this._type).show()
		},
		hide: function () {
			this._$error = this._$error || this.$element.find(".svtplayerError");
			this._$error && this._$error.hide()
		}
	});
	return svtplayer.overlay.Error
});
define("svtlib-svtplayer/src/js/svtplayer/overlayHandler", ["Class", "./overlay/embed", "./overlay/endscreen", "./overlay/pause", "./overlay/liveCountdown", "./overlay/controlbar", "./overlay/error", "svtlib-messagechannel"], function (e, t, i, n, s, r, a, o) {
	svtplayer.OverlayHandler = e.extend({
		_playerId: void 0,
		_embed: void 0,
		_endscreen: void 0,
		_liveCountdown: void 0,
		_pause: void 0,
		_controlbar: void 0,
		_error: void 0,
		_registered: {},
		_current: void 0,
		init: function (e) {
			this._playerId = e.playerId;
			new r(this._playerId, e.element, e.teaserMode);
			new n(this._playerId, e.element, e.title);
			new i(this._playerId, e.element);
			new s(this._playerId, e.element, e.start, e.teaserMode, e.title);
			new t(this._playerId, e.element);
			new a(this._playerId, e.element, "error");
			new a(this._playerId, e.element, "denied");
			new a(this._playerId, e.element, "noMobileRights");
			new a(this._playerId, e.element, "onlyAvailableInSweden");
			new a(this._playerId, e.element, "noFlashPlugin");
			this.registerOverlay("controlBar", 100);
			this.registerOverlay("pause", 200);
			this.registerOverlay("endScreen", 300);
			this.registerOverlay("liveCountdown", 400);
			this.registerOverlay("embed", 500);
			this.registerOverlay("error", 600);
			this.registerOverlay("denied", 700);
			this.registerOverlay("noFlashPlugin", 800);
			this.registerOverlay("noMobileRights", 900);
			this.registerOverlay("onlyAvailableInSweden", 1e3);
			this._subscribe()
		},
		_subscribe: function () {
			o.subscribe()
		},
		_show: function (e) {
			var t = this;
			if (e) {
				o.publish("player/overlay/" + e + "/show/" + t._playerId);
				this._current = e
			}
		},
		_hide: function (e) {
			e && o.publish("player/overlay/" + e + "/hide/" + this._playerId)
		},
		activate: function (e) {
			if (e in this._registered) {
				this._registered[e].active = !0;
				if (this._current) {
					if (this._registered[e].prio > this._registered[this._current].prio || e === this._current) {
						this._hide(this._current);
						this._show(e)
					}
				} else this._show(e)
			}
		},
		deactivate: function (e) {
			if (this._registered[e]) {
				this._registered[e].active = !1;
				this._hide(e);
				if (this._current === e) {
					this._current = void 0;
					var t = this.getNext();
					t && this.activate(t)
				}
			}
		},
		show: function (e, t) {
			t ? this.activate(e) : this.deactivate(e)
		},
		hideAll: function () {
			this._hide(this._current);
			for (var e in this._registered) this._registered[e].active = !1
		},
		getNext: function () {
			var e = "",
				t = 0;
			for (var i in this._registered)
				if (i && this._registered[i].active && this._registered[i].prio > t) {
					t = this._registered[i].prio;
					e = i
				}
			return e
		},
		calculatePrio: function (e) {
			return e
		},
		registerOverlay: function (e, t) {
			var t = this.calculatePrio(t);
			this._registered[e] = {
				prio: t,
				active: !1
			}
		}
	});
	return svtplayer.OverlayHandler
});
define("svtlib-svtplayer/src/js/svtplayer/androidController", ["Class"], function (e) {
	return e.extend({
		_videoUrl: null,
		_videoCallback: null,
		init: function (e, t) {
			this._videoUrl = e;
			this._videoCallback = t;
			window.SvtPlayAndroid.loadVideo(e)
		}
	})
});
define("svtlib-svtplayer/src/js/svtplayer/video", ["Class", "jquery", "jqote2", "./util/utils", "./util/device", "./androidController", "./../template/svtplayer_template", "svtlib-messagechannel"], function (e, t, i, n, s, r, a, o) {
	svtplayer.Video = e.extend({
		isPlayingState: !0,
		init: function (e, t, i, n) {
			this.readyQueue = [];
			this.$element = t;
			this.UID = Math.round(1e6 * Math.random()) + "";
			this.playerID = e;
			this.initialized = !1;
			this.isVideoSwitching = !1;
			this.isStarted = !1;
			this.isReady = !1;
			this._overlayHandler = n;
			this.videoId = this.$element.data("id");
			this.usesFlash = s.isFlashCapable()
		},
		_initialize: function (e) {
			var i = this;
			this._settings = e;
			this.initialized = !0;
			var l = s.isHttpLiveStreamingCapable(),
				c = s.isFlashCapable(),
				u = "";
			if (t("div.svtFullFrame").length > 0) {
				w = "100%";
				h = "100%"
			} else {
				w = this.$element.width();
				h = this.$element.height()
			} if (c) {
				d = s.isIE() ? a.getTemplate("svtplayerFlashIE") : a.getTemplate("svtplayerFlashNoIE");
				this.usesFlash = !0
			} else if (l || s.isAndroidApp()) {
				u = this.getVideoUrl("ios");
				if ("" == u) this.error = "notHtml5Supported";
				else {
					s.isIOS() || s.isMacDesktopSafari() || -1 == u.indexOf("?cc1") || (u = u.split("?cc1")[0]);
					d = a.getTemplate("svtplayerHtml5")
				}
				this.usesFlash = !1
			} else this.error = "noFlashPlugin";
			this._validateSettings(e) || (this.error = "error");
			if (this.error) o.publish("/player/onError", [this.playerID, this.error]);
			else {
				e.context.UID = this.UID;
				e.context.isSmallScreen = s.isSmallScreen();
				if (this.usesFlash) {
					this.$element.jqoteapp(d, {
						id: "svtplayer_" + this.UID,
						width: w,
						height: h,
						PLAYER_SWF: svtplayer.SVTPlayer.PLAYER_SWF,
						flashvars: "json=" + n.getEncodedJson(e),
						wmode: e.wmode || "direct"
					});
					this.videoElement = this.$element.find(">object")[0];
					this._addFlashListener("initialized", this, this._videoCallback);
					this._addFlashListener("playing", this, this._videoCallback);
					this._addFlashListener("paused", this, this._videoCallback);
					this._addFlashListener("ended", this, this._videoCallback);
					this._addFlashListener("error", this, this._videoCallback);
					this._addFlashListener("denied", this, this._videoCallback);
					this._addFlashListener("qualityChanged", this, this._videoCallback);
					this._addFlashListener("subtitleChanged", this, this._videoCallback);
					this._addFlashListener("showView", this, this._videoCallback);
					this._addFlashListener("scroll", this, this._videoCallback);
					this._addFlashListener("focusChanged", this, this._videoCallback)
				} else if (s.isAndroidApp()) this.videoElement = new r(u, this._videoCallback);
				else {
					var d = a.getTemplate("svtplayerHtml5");
					this.$element.jqoteapp(d, {
						id: "svtplayer_" + this.UID,
						videosrc: u,
						poster: this.$element.find("img").attr("src")
					});
					var p = this.$element.find("video");
					this.videoElement = p[0];
					p.bind("playing", function () {
						i._videoCallback("playing")
					});
					p.bind("pause", function () {
						i._videoCallback("paused")
					});
					p.bind("ended", function () {
						i._videoCallback("ended")
					});
					p.bind("error", function () {
						i._videoCallback("denied")
					});
					i._videoCallback("initialized", {
						subtitle: !1,
						quality: 0
					});
					this._updateStatistics()
				}
			}
		},
		showError: function (e) {
			this.videoElement && e && this.cleanUp();
			e ? this._overlayHandler.show(e, !0) : this._overlayHandler.show("error", !1);
			this.error = e
		},
		show: function (e) {
			if (this.initialized)
				if (e) {
					t("#svtplayer_" + this.UID).css("left", "0");
					this.resume()
				} else {
					if (this.isReady) {
						this.isPlayingState && (this.ignorePause = !0);
						this.isPlayingState && this.pause()
					}
					t("#svtplayer_" + this.UID).css("left", "-1000%")
				}
			this.visible = e
		},
		getCurrentTime: function () {
			return this.isReady ? this.usesFlash ? this.videoElement.getPosition(!0) : this.videoElement.currentTime : 0
		},
		getVolume: function () {
			return this.isReady ? this.usesFlash ? this.videoElement.getVolume() : this.videoElement.volume : 0
		},
		setVolume: function (e, t) {
			return this.isReady ? this.usesFlash ? this.videoElement.setVolume(e, t) : this.videoElement.volume = Math.min(1, Math.max(0, t ? this.videoElement.volume + e : e)) : this.getVolume()
		},
		pause: function () {
			if (this.isReady) {
				this._markedPaused = !0;
				if (this.isPlayingState === !0) {
					if (this.usesFlash) return this.videoElement.svtPause();
					this.videoElement.pause();
					return this.videoElement.currentTime
				}
			}
			return this.getCurrentTime()
		},
		resume: function () {
			this._markedPaused = !1;
			this.isReady && (this.usesFlash ? this.videoElement.resume() : this.videoElement.play())
		},
		changeVideo: function (e) {
			this._markedPaused = !1;
			if (this._validateSettings(e)) {
				this._settings = e;
				if (this.initialized)
					if (this.isReady)
						if (this.usesFlash) {
							var t = "json=" + n.getEncodedJson(e);
							this.$element.find('param[name="flashvars"]').attr("value", t);
							this.isVideoSwitching = !0;
							this.videoElement.setJSONItem(JSON.stringify(e))
						} else {
							this.videoElement.src = this.getVideoUrl("ios", e);
							this.videoElement.poster = this.$element.find("img").attr("src");
							this._updateStatistics()
						} else this.queueCommand(this.changeVideo, e);
				else this._initialize(e)
			} else o.publish("/player/onError", [this.playerID, "error"])
		},
		seek: function (e, t, i) {
			if (this.isReady)
				if (this.usesFlash) this.videoElement.seek(e, t, i);
				else {
					t || (e *= this._settings.video.materialLength);
					this.videoElement.currentTime = i ? this.videoElement.currentTime + e : e
				} else this.queueCommand(this.show, e, t, i)
		},
		showSubtitle: function (e) {
			this.isReady ? this.usesFlash && this.videoElement.showSubtitle(e) : this.queueCommand(this.showSubtitle, e)
		},
		getDebugText: function () {
			if (!this.isReady || !this.usesFlash) return this._debugLog || "not ready or no flash";
			try {
				return this.videoElement.getDebugText()
			} catch (e) {
				return "Error fetching debug information -- not ready."
			}
		},
		showQualitySettings: function (e) {
			if (this.isReady) {
				void 0 == e && (e = !this.videoElement.isQualitySettingsVisible());
				this.usesFlash && this.videoElement.showQualitySettings(e)
			} else this.queueCommand(this.showQualitySettings, e)
		},
		queueCommand: function (e) {
			var t = Array.prototype.slice.call(arguments);
			t.splice(0, 1);
			this.readyQueue.push({
				command: e,
				arguments: t
			})
		},
		runQueuedCommands: function () {
			for (var e = 0; e < this.readyQueue.length; e++) this.readyQueue[e].command.apply(this, this.readyQueue[e].arguments)
		},
		_videoCallback: function (e, t) {
			switch (e) {
			case "initialized":
				this.isReady = !0;
				this.runQueuedCommands();
				o.publish("/player/onInitialized", [this.playerID, t]);
				break;
			case "playing":
				this.isPlayingState = !0;
				this.isVideoSwitching = !1;
				o.publish("/player/onPlaying", [this.playerID, this._settings, !this.isStarted]);
				"true" === n.getQueryParameter("hls") && window.Modernizr && Modernizr.localStorage && localStorage.setItem("hls", !0);
				this.isStarted = !0;
				this._markedPaused === !0 && this.pause();
				break;
			case "paused":
				this.ignorePause ? this.ignorePause = !1 : this.isPlayingState = !1;
				o.publish("/player/onPause", [this.playerID, this._settings]);
				break;
			case "ended":
				if (!this.isVideoSwitching) {
					this.isPlayingState = !1;
					o.publish("/player/onVideoEnd", [this.playerID, this._settings])
				}
				break;
			case "error":
			case "denied":
				this.isVideoSwitching = !1;
				o.publish("/player/onError", [this.playerID, e]);
				break;
			case "qualityChanged":
				o.publish("/player/onQualityChanged", [this.playerID, t[0]]);
				break;
			case "subtitleChanged":
				o.publish("/player/onSubtitleChanged", [this.playerID, t[0]]);
				break;
			case "showView":
				o.publish("/player/showView", [this.playerID, t[0]]);
				break;
			case "scroll":
				window.scrollTo(0, window.pageYOffset - t[0]);
				break;
			case "focusChanged":
				o.publish("/player/focusChanged", [this.playerID, t[0]])
			}
		},
		_validateSettings: function (e) {
			var t = this,
				i = !1;
			e.video.videoReferences = e.video.videoReferences || e.video.videoReferenser;
			for (var n = 0; n < e.video.videoReferences.length; n++) {
				video = e.video.videoReferences[n];
				video.playerType = video.playerType || video.spelartyp || t._guessPlayerType(video);
				if (video.playerType == (this.usesFlash ? "flash" : "ios")) {
					i = !0;
					break
				}
			}
			return i
		},
		_updateStatistics: function () {
			var e = this._settings.statistics;
			if (e && e.statisticsUrl) {
				var t = "svtplayer_" + this.UID,
					i = svtplayer.SVTPlayer.BUILD_VERSION;
				this._ss = this._ss || new ns_.StreamSense(t);
				this._ss.setPixelURL(e.statisticsUrl);
				this._ss.setAttributes({
					ns_st_pl: e.category,
					ns_st_pr: e.folderStructure,
					ns_st_ep: e.title,
					ns_st_dt: e.broadcastDate,
					ns_st_pn: 1,
					ns_st_tp: 1,
					mms_clnr: e.mmsClientNr || "1001001",
					mms_tid: e.programId || "000000",
					mms_subsite: "SVT",
					mms_bdt: e.broadcastDate || "000000",
					mms_tm: e.broadcastTime || "000000",
					mms_cat: e.mmsCategory || "000000",
					client: e.client
				});
				if ("function" == typeof setAkamaiMediaAnalyticsData) {
					var s = e.folderStructure; - 1 != s.indexOf(".") && (s = s.split(".")[0]);
					var r = n.urlifyString(s) + " - " + n.urlifyString(e.title) + " (" + e.programId + ")";
					setAkamaiMediaAnalyticsData("title", r);
					setAkamaiMediaAnalyticsData("device", navigator.platform);
					setAkamaiMediaAnalyticsData("show", n.urlifyString(s));
					setAkamaiMediaAnalyticsData("category", n.urlifyString(e.category));
					setAkamaiMediaAnalyticsData("length", e.mmsCategory);
					setAkamaiMediaAnalyticsData("eventName", r);
					setAkamaiMediaAnalyticsData("playerId", "svtplayer-" + i + "-" + e.client + "-html5")
				}
			}
		},
		getVideoUrl: function (e, t) {
			var i = this;
			void 0 == t && (t = this._settings);
			t.video.videoReferences = t.video.videoReferences || t.video.videoReferenser;
			for (var n = 0; n < t.video.videoReferences.length; n++) {
				video = t.video.videoReferences[n];
				video.playerType = video.playerType || video.spelartyp || i._guessPlayerType(video);
				if (video.playerType == e) return video.url
			}
			return ""
		},
		_guessPlayerType: function (e) {
			var t = e.url.split(".").pop();
			return -1 != t.indexOf("m3u8") ? "ios" : -1 != ["f4m", "flv"].indexOf(t) ? "flash" : ""
		},
		cleanUp: function () {
			if (this.initialized) {
				this.pause();
				var e = t(this.videoElement);
				if (this.usesFlash) {
					this.visible && (this._debugLog = this.getDebugText());
					this._removeFlashListener("initialized", this);
					this._removeFlashListener("playing", this);
					this._removeFlashListener("paused", this);
					this._removeFlashListener("ended", this);
					this._removeFlashListener("error", this);
					this._removeFlashListener("denied", this);
					this._removeFlashListener("qualityChanged", this);
					this._removeFlashListener("subtitleChanged", this);
					this._removeFlashListener("showView", this);
					this._removeFlashListener("scroll", this)
				} else {
					e.unbind("playing");
					e.unbind("pause");
					e.unbind("ended");
					e.unbind("error")
				}
				this.initialized = !1;
				this.isReady = !1;
				e.remove()
			}
		},
		_addFlashListener: function (e, t, i) {
			n.addFlashListener(this.UID, e, t, i)
		},
		_removeFlashListener: function (e, t) {
			n.removeFlashListener(this.UID, e, t)
		}
	});
	return svtplayer.Video
});
define("svtlib-svtplayer/src/js/svtplayer/thumbnail", ["Class", "jquery", "jqote2", "./util/device", "./util/utils", "./../template/svtplayer_template", "svtlib-messagechannel"], function (e, t, i, n, s, r, a) {
	svtplayer.Thumbnail = e.extend({
		init: function (e) {
			var t = this;
			this._$element = e;
			this.isReady = !1;
			if (e.hasClass("svtplayerInitialized")) return !1;
			var i = n.isFlashCapable();
			if (!i || !this._getData("stream")) return !1;
			this._$bgimg = e.find("img");
			this._playerID = this._getData("playerId");
			this._videoID = this._getData("id");
			this.UID = Math.round(1e6 * Math.random()) + "";
			void 0 == this._getData("href") && e.attr("data-href", e.attr("href"));
			e.removeAttr("href");
			this._$bgimg.css("z-index", 0);
			this.isLiveNow = !0;
			this._initialize();
			e.addClass("svtplayerInitialized");
			e.addClass("svtJsClickAreaIgnore");
			a.subscribe("/player/onUpdateSettings", function (e, i) {
				t._updateHandler(e, i)
			});
			svtplayer.Thumbnail._instances[this._videoID] = this;
			return this
		},
		_updateHandler: function (e, t) {
			e == this._playerID && (t.videoId == this._videoID ? this.isReady && this.cleanup() : this.isReady || this._initialize())
		},
		_initialize: function () {
			var e = n.isIE() ? "svtplayerFlashIE" : "svtplayerFlashNoIE",
				t = r.getTemplate(e),
				i = this._getData("stream"),
				a = this._getData("start") || "click",
				o = {
					id: "thumbnail_" + this._videoID,
					width: this._$element.width(),
					height: this._$element.height(),
					flashvars: "stream=" + i + "&UID=" + this.UID + "&start=" + a,
					PLAYER_SWF: svtplayer.Thumbnail.THUMBNAIL_SWF,
					wmode: "transparent"
				};
			this._$element.jqoteapp(t, o);
			this.videoElement = this._$element.find(">object")[0];
			s.addFlashListener(this.UID, "click", this, this._videoCallback);
			s.addFlashListener(this.UID, "ended", this, this._videoCallback);
			s.addFlashListener(this.UID, "error", this, this._videoCallback);
			this.isReady = !0
		},
		cleanup: function () {
			s.removeFlashListener(this.UID, "click", this, this._videoCallback);
			s.removeFlashListener(this.UID, "ended", this, this._videoCallback);
			s.removeFlashListener(this.UID, "error", this, this._videoCallback);
			t(this.videoElement).remove();
			this._$element.removeClass("svtJsClickAreaIgnore");
			this.isReady = !1
		},
		_videoCallback: function (e) {
			switch (e) {
			case "click":
				var t = this._$element;
				t.find(this._$element.attr("data-target")).click();
				break;
			case "error":
			case "ended":
				this.cleanup()
			}
		},
		_getData: function (e) {
			return this._$element.attr("data-" + e)
		}
	});
	svtplayer.Thumbnail.THUMBNAIL_FILE = "thumbnail.swf";
	svtplayer.Thumbnail._instances = {};
	svtplayer.Thumbnail.init = function () {
		svtplayer.Thumbnail.THUMBNAIL_SWF = svtplayer.Thumbnail.THUMBNAIL_SWF || svtplayer.SVTPlayer.SWF_PATH + svtplayer.Thumbnail.THUMBNAIL_FILE;
		t(".svtplayer-thumbnail").each(function () {
			!t(this).hasClass("svtplayerInitialized") && t("body")[0].offsetWidth >= 601 && new svtplayer.Thumbnail(t(this))
		})
	};
	svtplayer.Thumbnail.getPlayer = function (e) {
		return svtplayer.Thumbnail._instances[e]
	};
	return svtplayer.Thumbnail
});
define("svtlib-svtplayer/src/js/svtplayer/chromecastController", ["Class", "jquery", "jqote2", "./util/device", "./util/utils", "./overlayHandler", "./../template/svtplayer_template", "./video", "./thumbnail", "svtlib-messagechannel"], function (e, t, i, n, s, r, a, o, l, c) {
	function u(e) {
		var t = window.subscribe ? e : e[0];
		return Array.prototype.slice.call(t)
	}
	var d = "C73FFF43",
		h = {
			PROGRESS_STATUS: "urn:x-cast:se.svt.chromecast.progress.status",
			SEND_COMMAND: "urn:x-cast:se.svt.chromecast.command"
		};
	return e.extend({
		video: null,
		session: null,
		timer: null,
		currentTime: null,
		totalTime: null,
		init: function (e) {
			this.video = e;
			this._loadChromeCast();
			this._initListeners()
		},
		_loadChromeCast: function () {
			var e = this;
			this._loadChromeCastSDK(function () {
				chrome.cast && chrome.cast.isAvailable ? e._initChromeCast() : setTimeout(function () {
					chrome.cast && chrome.cast.isAvailable && e._initChromeCast()
				}, 1e3)
			})
		},
		_initChromeCast: function () {
			if (chrome.cast.SessionRequest) {
				var e = new chrome.cast.SessionRequest(d),
					t = this,
					i = new chrome.cast.ApiConfig(e, function (e) {
						t.session = e;
						t._initSessionListeners(e);
						c.publish("/player/chromecast/active/" + t.video.playerID, [t.session.receiver.friendlyName]);
						var i = t.getMedia(e);
						if (i) {
							var n = i.media.customData.videoId,
								s = i.playerState;
							if (t.video.videoId === n) {
								t._initMediaListeners();
								if (s === chrome.cast.media.PlayerState.PLAYING || s === chrome.cast.media.PlayerState.BUFFERING) {
									c.publish("/player/chromecast/playing/" + t.video.playerID);
									t.startProgressTimer()
								} else {
									c.publish("/player/chromecast/paused/" + t.video.playerID);
									t.stopProgressTimer()
								}
							} else c.publish("/player/chromecast/othervideo/" + t.video.playerID);
							t.updateProgress(i.currentTime, i.media.duration)
						} else c.publish("/player/chromecast/idle/" + t.video.playerID, [t.session.receiver.friendlyName])
					}, function (e) {
						e === chrome.cast.ReceiverAvailability.AVAILABLE ? c.publish("/player/chromecast/available/" + t.video.playerID) : c.publish("/player/chromecast/unavailable/" + t.video.playerID)
					});
				chrome.cast.initialize(i, function () {
					c.subscribe("/player/chromecast/activate/" + t.video.playerID, function () {
						t.loadAndPlay()
					});
					c.subscribe("/player/chromecast/deactivate/" + t.video.playerID, function () {
						chrome.cast.requestSession(function () {}, function () {})
					})
				}, function () {})
			}
		},
		_loadChromeCastSDK: function (e) {
			t.getScript("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js", function () {
				"function" == typeof e && e()
			})
		},
		loadAndPlay: function () {
			var e = this;
			this.session ? this._loadMedia() : chrome.cast.requestSession(function (t) {
				e._initSessionListeners(t);
				e.session = t;
				c.publish("/player/chromecast/active/" + e.video.playerID, [t.receiver.friendlyName]);
				e._loadMedia()
			}, function (e) {
				console.log(e)
			})
		},
		_loadMedia: function () {
			var e = this,
				t = e.video.$element.data("json-href");
			t = t + (-1 == t.indexOf("?") ? "?" : "&") + "output=json";
			s.ajaxJsonRequest(t, function (t) {
				c.publish("/player/chromecast/loading/" + e.video.playerID);
				var i = {
					command: "SET_METADATA",
					data: {
						imageUrl: e.video.$element.find("img").first().attr("src"),
						programmeTitle: e.video.$element.attr("data-title"),
						episodeTitle: ""
					}
				};
				e.session.sendMessage(h.SEND_COMMAND, i, function () {}, function (e) {
					console.log(e)
				});
				var n = new chrome.cast.media.MediaInfo(e.video.getVideoUrl("ios", t));
				n.contentType = "video/mp4";
				n.customData = {
					videoId: t.videoId
				};
				var s = new chrome.cast.media.LoadRequest(n);
				s.autoplay = !1;
				s.currentTime = 0;
				e.session.loadMedia(s, function () {
					e._initMediaListeners();
					e.startProgressTimer();
					c.publish("/player/chromecast/playing/" + e.video.playerID);
					e.startProgressTimer()
				}, function () {
					c.publish("/player/chromecast/error/" + e.video.playerID)
				})
			}, function (e) {
				console.log(e)
			})
		},
		_initSessionListeners: function (e) {
			var t = this;
			e.addUpdateListener(function (e) {
				if (e);
				else {
					c.publish("/player/chromecast/inactive/" + t.video.playerID);
					t.session = null
				}
			});
			e.addMessageListener(h.PROGRESS_STATUS, function (e, i) {
				var n = JSON.parse(i),
					s = t.getMedia();
				s && t.updateProgress(n.currentTime, t.getMedia().media.duration)
			})
		},
		_initMediaListeners: function () {
			var e = this.getMedia(),
				t = this;
			e && e.addUpdateListener(function () {
				var i = e.playerState;
				switch (i) {
				case chrome.cast.media.PlayerState.PLAYING:
					c.publish("/player/chromecast/playing/" + t.video.playerID);
					break;
				case chrome.cast.media.PlayerState.BUFFERING:
					c.publish("/player/chromecast/buffering/" + t.video.playerID);
					break;
				case chrome.cast.media.PlayerState.PAUSED:
					c.publish("/player/chromecast/paused/" + t.video.playerID);
					break;
				case chrome.cast.media.PlayerState.IDLE:
					t.stopProgressTimer();
					c.publish("/player/chromecast/idle/" + t.video.playerID, [t.session.receiver.friendlyName])
				}
			})
		},
		_initListeners: function () {
			var e = this;
			c.subscribe("/player/seek/start", function () {
				e._isValidVideoIdForMessage(arguments) && e.stopProgressTimer()
			});
			c.subscribe("/player/seek", function () {
				e._isValidVideoIdForMessage(arguments) && e.startProgressTimer()
			})
		},
		startProgressTimer: function () {
			var e = this;
			this.timer || (this.timer = setInterval(function () {
				e.session && e.session.sendMessage(h.PROGRESS_STATUS, "get_status", function () {}, function (e) {
					console.log(e)
				})
			}, 200))
		},
		stopProgressTimer: function () {
			clearInterval(this.timer);
			this.timer = null
		},
		updateProgress: function (e, t) {
			var i = this.getMedia();
			if (i) {
				t !== this.totalTime && c.publish("/player/duration/", [this.video.playerID, t]);
				c.publish("/player/currenttime/", [this.video.playerID, e]);
				this.currentTime = e;
				this.totalTime = t
			} else this.stopProgressTimer()
		},
		pause: function () {
			var e = this.getMedia(this.session);
			if (e) {
				var t = this;
				e.pause(null, function () {
					t.stopProgressTimer()
				}, function () {
					c.publish("/player/chromecast/error/" + t.video.playerID)
				})
			}
		},
		play: function () {
			var e = this.getMedia(this.session);
			if (e) {
				var t = this;
				e.play(null, function () {
					t.startProgressTimer()
				}, function () {
					c.publish("/player/chromecast/error/" + t.video.playerID)
				})
			} else this.loadAndPlay()
		},
		seek: function (e) {
			var t = this.getMedia(),
				i = this;
			if (t) {
				this.stopProgressTimer();
				var n = new chrome.cast.media.SeekRequest;
				n.currentTime = e / 100 * this.totalTime;
				t.seek(n, function () {
					i.startProgressTimer()
				}, function (e) {
					console.log(e);
					c.publish("/player/chromecast/error/" + i.video.playerID)
				})
			}
		},
		getMedia: function () {
			var e = this.session && this.session.media && this.session.media.length ? this.session.media[0] : null;
			return e && e.media.customData.videoId === this.video.videoId ? e : null
		},
		isActive: function () {
			return null !== this.session
		},
		_isValidVideoIdForMessage: function (e) {
			var t = u(e).shift();
			return t === this.video.playerID
		}
	})
});
svtplayer = window.svtplayer || {};
define("svtlib-svtplayer/src/js/svtplayer/svtplayer", ["Class", "jquery", "jqote2", "./util/device", "./util/utils", "./util/copytoclipboard", "./overlayHandler", "./../template/svtplayer_template", "./video", "./thumbnail", "./chromecastController", "svtlib-messagechannel"], function (e, t, i, n, s, r, a, o, l, c, u, d) {
	svtplayer.SVTPlayer = e.extend({
		_clickEnabled: !0,
		_buttonsEnabled: !0,
		videoState: "init",
		videoReferencesviewState: "init",
		_enabled: !0,
		_dataInvalid: !0,
		_chromecastEnabled: !1,
		_eventHandles: [],
		init: function (e) {
			if (!e.hasClass("svtplayerInitialized")) {
				this._$element = e;
				var i = this,
					r = this._$element.width(),
					c = this._$element.height();
				this._articleID = this._getData("id");
				this._$bgimg = e.find("img");
				this._playerID = e.attr("id") || e.parent().attr("id");
				void 0 == this._getData("href") && e.attr("data-href", e.attr("href"));
				this._title = this._getData("title");
				if (void 0 == this._title) {
					this._title = e.attr("title");
					e.attr("data-title", e.attr("title"))
				}
				e.removeAttr("href");
				e.removeAttr("title");
				if (e.find(".svtplayer-jsPlayerObject param[name=flashvars]").length > 0) {
					var h = e.find(".svtplayer-jsPlayerObject param[name=flashvars]").attr("value");
					h = h.replace("json=", "");
					h = decodeURIComponent(h);
					this.updateSettings(JSON.parse(h), !1)
				}
				this._$bgimg.removeClass("svtPlayer-hide");
				e.find(".svtplayer-jsremove").remove();
				var p = this._getData("length") || "0",
					f = parseInt(p),
					v = {
						length: f,
						lengthStr: s.formatTime(p),
						shortLengthStr: s.formatShortTime(p),
						lengthDigits: s.formatDigitalTime(p),
						width: r,
						height: c,
						articleId: this._articleID,
						poster: this._$bgimg.first().attr("src"),
						currentwh: r + "x" + c,
						SPRITE_PATH: svtplayer.SVTPlayer.SPRITE_PATH,
						title: this._getData("title"),
						disabled: this._getData("disabled")
					};
				e.jqoteapp(o.getTemplate("svtplayerContext"), v);
				var y = this._getData("teaser-mode");
				this._overlayHandler = new a({
					playerId: this._playerID,
					element: e,
					start: this._getData("start"),
					teaserMode: y
				});
				this._$bgimg.css("z-index", 0);
				this.availableOnMobile = "false" != this._getData("available-on-mobile");
				this.preventMobile = !this.availableOnMobile && n.isMobile();
				this.onlyAvailableInSweden = "true" == this._getData("only-available-in-sweden");
				this.geoBlock = this.onlyAvailableInSweden && !n.inSweden();
				if (void 0 != this._getData("livestart")) {
					var m = parseInt(this._getData("livestart")),
						g = parseInt(this._getData("length"));
					this.isLiveBroadcast = !0;
					this.isLiveNow = this._isLiveNow(m, g)
				} else {
					this.isLiveBroadcast = !1;
					this.isLiveNow = !1
				}
				this.video = new l(this._playerID, this._$element, this.isLiveBroadcast && !this.isLiveNow, this._overlayHandler);
				this._registerSubscriptions();
				var _ = this._getData("start") || "click",
					b = !0,
					w = "auto" == _,
					x = !0;
				if (this.isLiveBroadcast) {
					if (!this.isLiveNow) {
						b = !1;
						w = !1
					}
					x = !1;
					this.videoState = "live"
				} else {
					if ("disable" == _ || "disabled" == _) {
						this._enabled = !1;
						b = !1
					}
					this.videoState = "init"
				}(this.preventMobile || this.geoBlock) && (b = !1);
				this._clickEnabled = !b;
				var C = t("body").hasClass("playJsFeature-hlsAutostart") && !e.hasClass("playJsParentalControl");
				w || C && n.isIOS() && !y ? this._startVideo() : this._showControlbar(x, b);
				this.geoBlock ? d.publish("/player/onError", [this._playerID, "onlyAvailableInSweden"]) : this.preventMobile ? d.publish("/player/onError", [this._playerID, "noMobileRights"]) : this.isLiveBroadcast && i.showView("liveCountdown", b);
				t(window).resize(function () {
					i._updateSize()
				});
				this._updateSize();
				e.addClass("svtplayerInitialized");
				svtplayer.SVTPlayer._instances[this._playerID] = this;
				this._chromecastEnabled = "true" == this._getData("chromecast-enabled") && window.hasOwnProperty("chrome");
				this._chromecastEnabled && (this.chromecastController = new u(this.video))
			}
		},
		_registerSubscriptions: function () {
			var e, t, i = this;
			for (e = 0; e < this._eventHandles.length; e++) {
				t = this._eventHandles[e];
				d.unsubscribe(t.event, t.id)
			}
			i._mapSubscribe("/player/updateSettings", i.updateSettings);
			i._mapSubscribe("/player/loadAndPlay", i.changeVideo);
			i._mapSubscribe("/player/pause", i.pause);
			i._mapSubscribe("/player/play", i.play);
			i._mapSubscribe("/player/seek", i.seek);
			i._mapSubscribe("/player/showSubtitle", i.showSubtitle);
			i._mapSubscribe("/player/showControlbar", i._showControlbar);
			i._mapSubscribe("/player/updateSize", i._updateSize);
			i._mapSubscribe("/player/enable", i.enable);
			i._mapSubscribe("/player/cleanup", i.cleanUp);
			i._mapSubscribe("/player/showView", i.showView);
			i._mapSubscribe("/player/showOverlay", i.showOverlay);
			i._mapSubscribe("/player/hideOverlay", i.hideOverlay);
			i._mapSubscribe("/player/setVolume", i.setVolume);
			i._mapSubscribe("/player/onVideoEnd", i._videoEnded);
			i._mapSubscribe("/player/onError", i._onError);
			i._mapSubscribe("/player/onClose", i._closeHandler);
			i._mapSubscribe("/player/registerOverlay", i._registerOverlay)
		},
		_mapSubscribe: function (e, t) {
			var i, n = this;
			i = d.subscribe(e, function () {
				var e, i = window.subscribe ? arguments : arguments[0],
					s = Array.prototype.slice.call(i),
					r = s.shift(),
					a = s[s.length - 1];
				("string" == typeof a || a instanceof String) && "/player/callback/" == a.substring(0, 17) && (e = s.pop());
				if (r == n._playerID) {
					t.apply(n, s);
					e && d.publish(e)
				}
			});
			this._eventHandles.push({
				event: e,
				id: i
			})
		},
		updateSettings: function (e, t, i) {
			this.serverDate = t || this.serverDate || new Date;
			this.dateOffset = this.serverDate.getTime() - (new Date).getTime();
			e.context = e.context || {};
			e.context.dateOffset = this.dateOffset;
			void 0 == e.video.availableOnMobile && (e.video.availableOnMobile = !0);
			void 0 == e.video.onlyAvailableInSweden && (e.video.onlyAvailableInSweden = !1);
			var n = e.video.livestart,
				s = e.video.materialLength;
			this.isLiveBroadcast = e.video.live;
			this.isLiveNow = this._isLiveNow(n, s);
			e.video.url = i || this._$element.attr("data-json-href");
			this._settings = e;
			this._dataInvalid = !0;
			d.publish("/player/onUpdateSettings", [this._playerID, this._settings])
		},
		showView: function (e, t) {
			t = void 0 == t ? "end" == e || "pause" == e || "init" == e : t;
			if ("popup" == e || "help" == e) this._openPopup(e);
			else {
				this._showVideo("video" == e);
				this._overlayHandler.show("end", "end" == e);
				this._overlayHandler.show("pause", "pause" == e);
				this._overlayHandler.show("embed", "embed" == e);
				this._overlayHandler.show("liveCountdown", "liveCountdown" == e);
				this._showControlbar("end" == e || "init" == e, t);
				("init" == e || "video" == e || "end" == e || "pause" == e) && (this.videoState = e)
			}
		},
		showOverlay: function (e) {
			this._overlayHandler.show(e, !0)
		},
		hideOverlay: function (e) {
			this._overlayHandler.show(e, !1)
		},
		enable: function (e) {
			e ? this._enableClick(!0) : this.showView("init", !1);
			this._enabled = e
		},
		pause: function () {
			if (!this.video) return 0;
			if (!this._chromecastEnabled || !this.chromecastController.isActive()) return this.video.pause();
			this.chromecastController.pause();
			return void 0
		},
		changeVideo: function (e) {
			var t = this,
				i = e + (-1 == e.indexOf("?") ? "?" : "&") + "output=json";
			i = void 0 != this.position ? i + "&position=" + this.position : i;
			if (!n.isAndroidApp() && n.isAndroid()) {
				var r = "http://" + window.location.host;
				window.location = "http://www.svtplay.se/app/android?play=" + encodeURIComponent(r + i)
			} else n.isWindowsPhone() ? window.location = "svtplay://" + window.location.host + i : s.ajaxJsonRequest(i, function (i, n, s) {
				var r = new Date(s.getResponseHeader("Date"));
				t.updateSettings(i, r, e);
				t._updateContext()
			}, function () {
				t.showView("error")
			})
		},
		play: function (e, t) {
			if (this._chromecastEnabled && this.chromecastController.isActive()) this.chromecastController.play();
			else {
				if (e) {
					this.isLiveNow = !0;
					this._settings && (this._settings.video.livestart = 0)
				}
				this.position = void 0 != t && t >= 0 ? t : void 0;
				if (e || !this.isLiveBroadcast || this.isLiveBroadcast && this.isLiveNow)
					if (this.video.initialized) {
						this.showView("video", !1);
						this._dataInvalid ? this._updateContext() : this.video.resume()
					} else this._startVideo()
			}
		},
		setVolume: function (e, t) {
			this.video && this.video.setVolume(e, t)
		},
		seek: function (e, t, i) {
			t = void 0 === t ? !0 : t;
			i = void 0 === i ? !1 : i;
			if (this._chromecastEnabled && this.chromecastController.isActive()) this.chromecastController.seek(e);
			else if (this.video) {
				this.video.seek(e, t, i);
				this.showView("video", !1)
			}
		},
		showSubtitle: function (e) {
			this.video && this.video.showSubtitle(e)
		},
		cleanUp: function () {
			this._enableClick(!1);
			this.video.cleanUp();
			this.geoBlock ? this._overlayHandler.show("onlyAvailableInSweden", !0) : this.preventMobile ? this._overlayHandler.show("noMobileRights", !0) : this.isLiveBroadcast ? this.showView("liveCountdown", this.isLiveNow) : this.showView("init", "disable" != this._getData("start"));
			this.copyUtil && this.copyUtil.cleanup()
		},
		_onError: function (e) {
			var i = this;
			this._showControlbar(!1, !1);
			this.video.usesFlash && d.subscribe("player/overlay/error/show/" + this._playerID, function () {
				setTimeout(function () {
					var e = t(".svtplayerError-error"),
						n = e.find(".svtplayerClipboardButtonContainer"),
						s = e.find(".svtJSCopyToClipboardButton");
					this.copyUtil = new r(s, i.video.getDebugText(), {
						height: "25px",
						size: "12",
						width: "140px"
					});
					e.on("click", function (e) {
						e.preventDefault();
						n.toggle()
					})
				}, 500)
			});
			this.video.showError(e)
		},
		_openPopup: function (e) {
			var t, i = "";
			if ("help" == e) {
				i = "http://www.svt.se/hjalp/svtplay/";
				t = {
					width: 684,
					height: 600
				}
			} else if ("popup" == e) {
				var n = this.pause();
				i = this._settings.context.popoutUrl + "&position=" + Math.round(n);
				t = {
					width: this._$element.width(),
					height: this._$element.height()
				}
			}
			"" != i && s.openPopup(i, t)
		},
		_showControlbar: function (e, t) {
			t = void 0 === t ? !0 : t;
			if (e)
				if (t) {
					var i = this;
					setTimeout(function () {
						i._enableClick(!0)
					}, 100)
				} else this._enableClick(!1);
			else this._enableClick(t);
			this._overlayHandler.show("controlBar", e)
		},
		_showVideo: function (e) {
			this.video.show(e)
		},
		_enableClick: function (e) {
			if (this._clickEnabled != e) {
				if (e) {
					var t = this;
					this._$element.bind("click", function (e) {
						e.preventDefault();
						n.usesExternalVideoPlayerApp() || t._enableClick(!1);
						d.publish("/player/play", [t._playerID, !0])
					});
					this._$element.removeClass("svtplayerDisabled")
				} else {
					this._$element.unbind("click");
					this._$element.addClass("svtplayerDisabled")
				}
				this._clickEnabled = e
			}
		},
		_startVideo: function () {
			if (this._settings && !n.usesExternalVideoPlayerApp()) this._updateContext();
			else {
				var e = this._getData("json-href");
				e = e.replace("http://localhost:8080/", "/");
				this.changeVideo(e)
			}
		},
		_updateContext: function () {
			var e = this._settings;
			this._$element.attr("data-title", e.context.title);
			this._$element.attr("data-id", e.videoId || e.artikelId);
			this._$element.attr("data-length", e.video.materialLangd);
			this._$element.attr("data-available-on-mobile", e.video.availableOnMobile);
			this._$element.attr("data-only-available-in-sweden", e.video.onlyAvailableInSweden);
			this._$element.attr("data-livestart", e.video.livestart);
			this._$element.attr("data-json-href", e.video.url);
			if (void 0 != this._getData("position")) {
				e.video.position = parseInt(this._getData("position"));
				this._$element.removeAttr("data-position")
			}
			void 0 != this._getData("disabled") && (e.disabled = this._getData("disabled"));
			void 0 != this._getData("wmode") && (e.wmode = this._getData("wmode"));
			if (e.video.onlyAvailableInSweden && !n.inSweden()) d.publish("/player/onError", [this._playerID, "onlyAvailableInSweden"]);
			else if (!e.video.availableOnMobile && n.isMobile()) d.publish("/player/onError", [this._playerID, "noMobileRights"]);
			else {
				var t = e.video.livestart;
				if (this.isLiveBroadcast && 0 > t) this.showView("liveCountdown", !1);
				else {
					this.video.showError(!1);
					this.video.changeVideo(e);
					this._dataInvalid = !1;
					this.showView("video")
				}
			}
		},
		_videoEnded: function () {
			this._isEnabled("end") && this.showView("end")
		},
		_closeHandler: function () {
			this.showView(this.videoState, !1)
		},
		_registerOverlay: function (e, t) {
			this._overlayHandler.registerOverlay(e, t)
		},
		_updateSize: function () {
			var e, i = this._$element.width(),
				n = ["XXS", "XS", "S", "M", "L"];
			e = 400 > i ? 224 > i ? "XXS" : "XS" : 600 > i ? "S" : 800 > i ? "M" : "L";
			for (var s = 0; s < n.length; s++) {
				var r = n[s];
				e != r && this._$element.find(".svtPlayer-hide-" + r).each(function () {
					t(this).hasClass("svtPlayer-hide-important") || t(this).removeClass("svtPlayer-hide")
				})
			}
			this._setSizeClass(this._size, e);
			this._$element.find(".svtPlayer-hide-" + e).addClass("svtPlayer-hide");
			this._size = e
		},
		_setSizeClass: function (e, t) {
			"XXS" == e && this._$element.removeClass("svtPlayer-XXS");
			"XS" == e && this._$element.removeClass("svtPlayer-XS");
			"S" == e ? this._$element.removeClass("svtPlayer-S svtPlayer-S-M-L svtPlayer-S-M") : "M" == e ? this._$element.removeClass("svtPlayer-M svtPlayer-M-L svtPlayer-S-M-L") : "L" == e && this._$element.removeClass("svtPlayer-L svtPlayer-S-M-L svtPlayer-M-L");
			"XXS" == t ? this._$element.addClass("svtPlayer-XXS") : "XS" == t ? this._$element.addClass("svtPlayer-XS") : "S" == t ? this._$element.addClass("svtPlayer-S svtPlayer-S-M-L svtPlayer-S-M") : "M" == t ? this._$element.addClass("svtPlayer-M svtPlayer-M-L svtPlayer-S-M svtPlayer-S-M-L") : "L" == t && this._$element.addClass("svtPlayer-L svtPlayer-M-L svtPlayer-S-M-L")
		},
		_isLiveNow: function (e, t) {
			return e >= 0 && (t > e || -1 == t)
		},
		_getData: function (e) {
			return this._$element.attr("data-" + e)
		},
		_isEnabled: function (e) {
			var t = this._getData("disabled") || "";
			t = t.replace(/ /g, "");
			return -1 == ("," + t + ",").indexOf("," + e + ",")
		}
	});
	svtplayer.SVTPlayer.SWF_PATH = "/statiskt/swf/video/";
	svtplayer.SVTPlayer.SPRITE_PATH = "/statiskt/skins/svt/css/img/svtplayer/";
	svtplayer.SVTPlayer.PLAYER_FILE = "svtplayer-%SVTPLAYERVERSION%.swf";
	svtplayer.SVTPlayer.BUILD_VERSION = "@@SVTPLAYER_BUILD_VERSION";
	svtplayer.SVTPlayer._instances = {};
	svtplayer.SVTPlayer.init = function (e) {
		e = e || {};
		svtplayer.SVTPlayer.PLAYER_SWF = svtplayer.SVTPlayer.PLAYER_SWF || svtplayer.SVTPlayer.SWF_PATH + svtplayer.SVTPlayer.PLAYER_FILE;
		svtplayer.SVTPlayer.COPY_TO_CLIPBOARD_SWF = svtplayer.SVTPlayer.COPY_TO_CLIPBOARD_SWF || svtplayer.SVTPlayer.SWF_PATH + "copytoclipboard.swf";
		t(".svtplayer").each(function () {
			t(this).hasClass("svtplayerInitialized") || new svtplayer.SVTPlayer(t(this))
		});
		e.initThumbnail && c.init()
	};
	svtplayer.SVTPlayer.getPlayer = function (e) {
		return svtplayer.SVTPlayer._instances[e]
	};
	svtplayer.SVTPlayer.getDebugText = function () {
		var e = svtplayer.SVTPlayer._instances,
			t = "PLAYER: " + document.location.href + "\n";
		for (var i in e)
			if (e.hasOwnProperty(i)) {
				t += "id=" + i + "\n";
				t += e[i].video.getDebugText()
			}
		return t
	};
	return svtplayer.SVTPlayer
});
! function () {
	requirejs.config({
		shim: {
			Class: {
				exports: "Class"
			},
			jqote2: {
				deps: ["jquery"],
				exports: "jQuery.jqote"
			}
		},
		paths: {
			Class: "/bower_components/Class.js/Class",
			jquery: "/bower_components/jquery/jquery",
			jqote2: "/bower_components/jqote2/index"
		},
		packages: [{
			name: "svtlib-messagechannel",
			main: "app/js/require-config.js",
			location: "/bower_components/svtlib-messagechannel"
		}]
	});
	define("svtlib-svtplayer/src/js/require-config", ["svtlib-svtplayer/src/js/libs/statistics/streamsense-concat.min", "svtlib-svtplayer/src/js/svtplayer/svtplayer"], function (e, t) {
		return t
	})
}();
define("svtlib-svtplayer", ["svtlib-svtplayer/src/js/require-config"], function (e) {
	return e
});
define("utils/fullscreen", ["jquery", "svtlib-messagechannel"], function (e, t) {
	var i = document.documentElement,
		n = e("body").get(0);
	e(document, "html").on({
		fullscreenchange: function () {
			t.publish("fullscreen-changed", null !== document.fullscreenElement)
		},
		mozfullscreenchange: function () {
			t.publish("fullscreen-changed", null !== document.mozFullScreenElement)
		},
		webkitfullscreenchange: function () {
			t.publish("fullscreen-changed", null !== document.webkitFullscreenElement)
		},
		msfullscreenchange: function () {
			t.publish("fullscreen-changed", null !== document.msFullscreenElement)
		}
	});
	return {
		hasFullscreen: function () {
			return void 0 !== (i.requestFullscreen || i.mozRequestFullScreen || i.webkitRequestFullScreen || n.msRequestFullscreen)
		},
		isFullscreen: function () {
			return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
		},
		requestFullscreen: function () {
			this.hasFullscreen() && (i.requestFullscreen ? i.requestFullscreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen())
		},
		cancelFullscreen: function () {
			document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
		}
	}
});
define("singletons/instances", ["Class"], function (e) {
	var t = {},
		i = e.extend({
			get: function (e, i) {
				void 0 === t[e] && (t[e] = new i);
				return t[e]
			}
		});
	return new i
});
define("modules/window/window_view", ["Class", "jquery", "svtlib-messagechannel"], function (e, t, i) {
	var n = "svtflow-OverflowHidden",
		s = "is--not-visible",
		r = 27;
	return e.extend({
		$el: void 0,
		$containerBase: void 0,
		init: function () {
			var e = this;
			this.$el = t("html");
			this.$containerBase = t(".flow_root, .flow_footer");
			this.$body = this.$el.find("> body");
			this._lastKnownScrollTop = 0;
			this._bindKeys();
			this._bindResize();
			i.subscribe("/modules/flowplayer/flowplayer-show", function () {
				e._lastKnownScrollTop = e._currentScrollTop()
			});
			i.subscribe("/router/reset", function () {
				e._scroll(e._lastKnownScrollTop)
			})
		},
		setOverflow: function (e) {
			if (e === !0) {
				this.$body.addClass(n);
				this.$el.addClass(n)
			} else {
				this.$body.removeClass(n);
				this.$el.removeClass(n)
			}
		},
		setVisibility: function (e) {
			e ? this.$containerBase.removeClass(s) : this.$containerBase.addClass(s)
		},
		isVisible: function () {
			return this.$containerBase.is(":visible")
		},
		getWindowSize: function () {
			this._windowWidth = this._windowWidth || window.innerWidth;
			return this._windowWidth <= 600 ? "xsmall" : this._windowWidth < 800 ? "small" : this._windowWidth < 1024 ? "medium" : this._windowWidth < 1824 ? "large" : "xlarge"
		},
		triggerRepaint: function (e) {
			return e ? t(e)[0].offsetHeight : document.body.offsetHeight
		},
		_scroll: function (e) {
			t.merge(this.$body, this.$el).scrollTop(e)
		},
		_navigateToHref: function (e) {
			void 0 !== e && (window.location.href = e)
		},
		_currentScrollTop: function () {
			return t(window).scrollTop()
		},
		_bindKeys: function () {
			t(document).bind("keyup", function (e) {
				e.keyCode === r && i.publish("keypressed", "escape")
			})
		},
		_bindResize: function () {
			var e = this;
			t(window).bind("resize", function () {
				e._windowWidth = window.innerWidth;
				i.publish("window-resized")
			})
		}
	})
});
define("singletons/window_view", ["singletons/instances", "modules/window/window_view"], function (e, t) {
	return e.get("modules/window/window_view", t)
});
define("play/custom-share", ["Class", "jquery"], function (e, t) {
	t.sharedCount = function (e, i) {
		e = encodeURIComponent(e || location.href);
		var n = {
			url: "http://tools.svtplay.se/svt-sharescounter/shares?url=" + e,
			cache: !0,
			dataType: "json"
		};
		if ("withCredentials" in new XMLHttpRequest) n.success = i;
		else {
			var s = "sc_" + e.replace(/\W/g, "");
			window[s] = i;
			n.jsonpCallback = s;
			n.dataType += "p"
		}
		return t.ajax(n)
	};
	return e.extend({
		$element: void 0,
		init: function (e) {
			var t = this;
			t.$element = e;
			t.getShareData(t.$element.attr("data-url"));
			t.bindSocialLinksToPopup()
		},
		getShareData: function (e) {
			var i = this;
			t.sharedCount(escape(e), function (e) {
				i.populateData(e)
			})
		},
		populateData: function (e) {
			var t = this;
			if (e) {
				t.$element.find(".playJsShare-Facebook").text(e.facebook || 0);
				t.$element.find(".playJsShare-Twitter").text(e.twitter || 0);
				t.$element.find(".playJsShare-Google").text(e.googlePlus || 0)
			}
		},
		bindSocialLinksToPopup: function () {
			var e = this;
			e.$element.find("a.flow_js-share-button").click(function () {
				var e = t(this);
				e.hasClass("play-button-email") || window.open("", "flow_popup", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420")
			})
		}
	})
});
define("text!templates/flow_player_info.hbs", [], function () {
	return '<div class="flow_player__info">\n    <article class="flow_player-info__media-block">\n        <header class="flow_player-info__text-block flow_player-info__text-block--header">\n            <h1 class="flow_player__h1">\n                {{title}}\n            </h1>\n\n        </header>\n\n        <div class="flow_player-info__text-block flow_player-info__episode-info">\n            <p class="flow_h6">\n                {{#if season}}Säsong {{season}} - {{/if}}\n                {{episode}}\n                {{#if lengthFormatted}}\n                | {{lengthFormatted}}\n                {{else}}\n                {{#if length}} | {{length}}{{/if}}\n                {{/if}}\n\n            </p>\n			<p class="flow_player-info__alllink"><a href="/{{titlepagePath}}">Allt från {{title}}</a></p>\n            <p class="flow_x-no-margin flow_hide-e-xs flow_hide-touch">\n                {{#if shortDescription}}{{shortDescription}} | {{/if}}\n                <a class="flow_player-info__all flow_js-toggle flow_player-info__btn-more flow-no-decoration" href="#" role="button"><span class="flow-decorate">Mer om programmet</span> <span class="svt_icon svt_icon--caret-down" aria-hidden="true"></span></a>\n            </p>\n        </div>\n        <div class="flow_player-info__text-block flow_player-info__text-block--max-width flow_js-toggle-info is--hidden">\n           {{#if fullDescription}}\n            <p>\n                {{fullDescription}}\n            </p>\n            {{/if}}\n            <p>\n                {{#if available}}{{available}}.<br>{{/if}}\n                {{#if onlySweden}}Kan endast ses i Sverige.{{else}}Kan ses i hela världen.{{/if}}<br>\n                {{#if availableOnMobile }}Kan ses i mobilen.{{else}}Kan inte ses i mobilen.{{/if}}\n            </p>\n            <ul class="flow_player-info__list playJsCustomShare" data-url="http://www.svtflow.se{{permalink}}">\n                <li class="flow_player-info__list__share">\n                    <div class="flow_share">\n                        <span class="svt_icon svt_icon--facebook svt_icon--1-2x" aria-hidden="true"></span>\n                        <a title="Dela avsnittet på Facebook" target="flow_popup" class="play-link-standard flow_js-share-button"\n                           href="https://www.facebook.com/sharer/sharer.php?u={{encode \'http://www.svtflow.se\' permalink}}"\n                           data-clicktracking="{\'category\': \'Social Media\', \'action\': \'Facebook\', \'label\': \'{{id}}\'}">facebook</a>\n                        <span class="flow_share__count playJsShare-Facebook">0</span>\n                    </div>\n                </li>\n                <li class="flow_player-info__list__share">\n                    <div class="flow_share">\n                        <span class="svt_icon svt_icon--twitter svt_icon--1-2x" aria-hidden="true"></span>\n                        <a title="Tweeta" class="play-link-standard flow_js-share-button" target="flow_popup"\n                           href="https://twitter.com/intent/tweet?via=svtflow&hashtags=svtflowtips&lang=sv&related=svtflow&text={{encode title \' - \' episode}}&url={{encode \'http://www.svtflow.se\' permalink}}"\n                           data-clicktracking="{\'category\': \'Social Media\', \'action\': \'Twitter\', \'label\': \'{{id}}\'}">Twitter</a>\n                        <a href="https://twitter.com/search?q=http://www.svtflow.se{{permalink}}" target="_blank"\n                           class="flow_share__count play-LinkDiscreet playJsShare-Twitter">0</a>\n                    </div>\n                </li>\n                <li class="flow_player-info__list__share">\n                    <div class="flow_share">\n                        <span class="svt_icon svt_icon--google-plus svt_icon--1-2x" aria-hidden="true"></span>\n                        <a title="Dela programmet på Google+" target="flow_popup" class="play-link-standard flow_js-share-button"\n                           href="https://plus.google.com/share?url={{encode \'http://www.svtflow.se\' permalink}}"\n                           data-clicktracking="{\'category\': \'Social Media\', \'action\': \'GooglePlus\', \'label\': \'{{id}}\'}">Google+</a>\n                        <span class="flow_share__count playJsShare-Google">0</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        {{#if tags}}\n        <div class="flow_player-info__text-block">\n            <ul class="flow_player-info__list">\n                {{#each tags}}\n                <li><a class="flow_btn flow_btn--light flow_btn--xs" href="{{url}}">{{name}}</a></li>\n                {{/each}}\n            </ul>\n        </div>\n        {{/if}}\n    </article>\n\n    <a class="flow_player-info__footer flow_hide-touch" href="/{{titlepagePath}}">Allt från {{title}}</a>\n\n</div>'
});
define("modules/flowplayer/flowplayer_info_view", ["Class", "jquery", "handlebars", "svtlib-messagechannel", "singletons/window_view", "play/custom-share", "utils/modernizr", "text!templates/flow_player_info.hbs"], function (e, t, i, n, s, r, a, o) {
	return e.extend({
		_currentWindowSize: "",
		$container: void 0,
		$el: void 0,
		template: void 0,
		options: {
			extrainfoContainerClass: ".flow_js-toggle-info",
			toggleButtonClass: ".flow_js-toggle"
		},
		init: function (e) {
			this.$container = e;
			this._registerTemplates();
			this._currentWindowSize = s.getWindowSize()
		},
		render: function (e) {
			this.destroy();
			this.$el = t(this.template(e));
			this._addInfoElement();
			this._setupShare();
			this._bindEvents()
		},
		destroy: function () {
			this._unbindEvents();
			this.$el && this.$el.remove();
			this.$el = null
		},
		_registerTemplates: function () {
			this.template = i.compile(o)
		},
		_unbindEvents: function () {
			this.$el && this.$el.off()
		},
		_bindEvents: function () {
			var e = this,
				t = this.$el.find(this.options.toggleButtonClass + " .svt_icon");
			this.$el.on("click", this.options.toggleButtonClass, function (i) {
				i.preventDefault();
				if (e._isExtraInfoVisible()) {
					e._displayExtraInfo(!1);
					t.removeClass("svt_icon--caret-up").addClass("svt_icon--caret-down")
				} else {
					e._displayExtraInfo(!0);
					t.removeClass("svt_icon--caret-down").addClass("svt_icon--caret-up")
				}
			});
			n.subscribe("window-resized", function () {
				if (s.getWindowSize() !== e._currentWindowSize && ("xsmall" === s.getWindowSize() || "xsmall" === e._currentWindowSize)) {
					e._currentWindowSize = s.getWindowSize();
					e._addInfoElement()
				}
			})
		},
		_setupShare: function () {
			var e = this.$el.find(".playJsCustomShare");
			e.length > 0 && new r(e)
		},
		_displayExtraInfo: function (e) {
			e ? this.$el.find(this.options.extrainfoContainerClass).removeClass("is--hidden") : this.$el.find(this.options.extrainfoContainerClass).addClass("is--hidden")
		},
		_addInfoElement: function () {
			this.$el && (a.touch || "xsmall" === this._currentWindowSize ? this.$container.find(".flow_player__video-wrapper").before(this.$el) : this.$container.find(".flow_player__controller-overlay").append(this.$el))
		},
		_isExtraInfoVisible: function () {
			return !this.$el.find(this.options.extrainfoContainerClass).hasClass("is--hidden")
		}
	})
});
define("text!templates/flowplayer_navigation.hbs", [], function () {
	return '<a href="{{jsonHref}}" class="flow_player__navigation flow_player__navigation--{{navside}}">\n\n    <div class="flow_player__navigation__arrow flow_player__navigation__arrow--{{navside}}">\n        <div class="flow_player__navigation__arrow__content">\n            <img src="{{thumbnailsquare}}" alt="{{title}}" class="flow_round-img--big" />\n            <span aria-hidden="true" class="flow_player__navigation__arrow__obj flow_player__navigation__arrow__obj--{{navside}}">\n                  <span class="svtVisuallyhidden">{{headertitle}}</span>\n            </span>\n        </div>\n    </div>\n\n    <div class="flow_player__navigation__info flow_player__navigation__info--{{navside}}">\n        <article class="flow_player__navigation__info__content">\n            <div class="svtflow_header flow_player__navigation__header flow_x-margin-bottom-20">\n                <div class="svtflow_header--second-bg">\n                    <div class="svtflow_header--content">\n                        {{headertitle}}\n                    </div>\n                </div>\n            </div>\n            <div class="flow_x-margin-bottom-20">\n                <h2 class="flow_h6 flow_h6--center">\n                    {{#if title }}\n                        {{title}}\n                        {{#if episode}}\n                            <br />\n                            <span class="flow_h6__italic">{{episode}}</span>\n                        {{/if}}\n                    {{else}}\n                        Programtitel saknas\n                    {{/if}}\n                </h2>\n            </div>\n\n            <hr class="svflow_line-dotted flow_x-margin-bottom-20" />\n\n            <p class="flow_x-margin-bottom-20">\n                {{#if description }}\n                    {{truncate fullDescription 150}}\n                {{else}}\n                    Programbeskrivning saknas\n                {{/if}}\n            </p>\n\n            <p class="flow_player__dl-horizontal">\n                {{#if length }}{{length}}<br>{{/if}}\n                {{#if available }}{{available}}{{/if}}\n            </p>\n        </article>\n    </div>\n</a>'
});
define("text!templates/flowplayer_navigation_bottom.hbs", [], function () {
	return '<a href="{{jsonHref}}" class="flow_player__navigation__arrow-mobile flow_player__navigation__arrow-mobile--{{navside}}">\n    {{#ifCond navside "right"}}\n    <div class="flow_player__navigation__arrow-text flow_player__navigation__arrow-text--right flow_x-float--left">\n        Nästa\n        <div class="flow_hide-e-xs">\n            <h2 class="flow_h6">\n                {{#if title }}\n                {{title}}\n                {{#if episode}}\n                <br />\n                <span class="flow_h6__italic">{{episode}}</span>\n                {{/if}}\n                {{else}}\n                Programtitel saknas\n                {{/if}}\n            </h2>\n        </div>\n    </div>\n\n    <img src="{{thumbnailsquare}}" alt="{{title}}" class="flow_round-img--big flow_hide-e-xs flow_x-float--left" />\n    {{/ifCond}}\n    <span aria-hidden="true" class="flow_player__navigation__arrow__obj flow_player__navigation__arrow__obj--{{navside}}">\n        <span class="svtVisuallyhidden">{{headertitle}}</span>\n    </span>\n    {{#ifCond navside "left"}}\n    <img src="{{thumbnailsquare}}" alt="{{title}}" class="flow_round-img--big flow_hide-e-xs flow_x-float--left" />\n    <div class="flow_player__navigation__arrow-text flow_player__navigation__arrow-text--left">Föregående\n        <div class="flow_hide-e-xs">\n            <h2 class="flow_h6">\n                {{#if title }}\n                {{title}}\n                {{#if episode}}\n                <br />\n                <span class="flow_h6__italic">{{episode}}</span>\n                {{/if}}\n                {{else}}\n                Programtitel saknas\n                {{/if}}\n            </h2>\n        </div>\n    </div>\n    {{/ifCond}}\n</a>'
});
define("modules/flowplayer/flowplayer_collection_view", ["Class", "jquery", "handlebars", "svtlib-messagechannel", "text!templates/flowplayer_navigation.hbs", "text!templates/flowplayer_navigation_bottom.hbs"], function (e, t, i, n, s, r) {
	return e.extend({
		$el: void 0,
		$prevNav: void 0,
		$nextNav: void 0,
		$prevNavBottom: void 0,
		$nextNavBottom: void 0,
		templates: void 0,
		init: function (e) {
			this.$el = e;
			this._registerTemplates()
		},
		render: function (e, i) {
			this.$nextNav && this.$nextNav.remove();
			this.$prevNav && this.$prevNav.remove();
			if (e) {
				e.navside = "right";
				e.headertitle = "Nästa";
				this.$nextNav = t(this.template(e));
				this.$el.find(".flow_player__controller-overlay").append(this.$nextNav)
			}
			if (i) {
				i.navside = "left";
				i.headertitle = "Föregående";
				this.$prevNav = t(this.template(i));
				this.$el.find(".flow_player__controller-overlay").append(this.$prevNav)
			}
			this._renderBottomNavigation(e, i)
		},
		_registerTemplates: function () {
			this.template = i.compile(s);
			this.templateBottom = i.compile(r)
		},
		_renderBottomNavigation: function (e, i) {
			this.$nextNavBottom && this.$nextNavBottom.remove();
			this.$prevNavBottom && this.$prevNavBottom.remove();
			if (e) {
				this.$nextNavBottom = t(this.templateBottom(e));
				this.$el.find(".flow_player__nav__bottom").append(this.$nextNavBottom)
			}
			if (i) {
				this.$prevNavBottom = t(this.templateBottom(i));
				this.$el.find(".flow_player__nav__bottom").append(this.$prevNavBottom)
			}
		}
	})
});
define("text!templates/flow_player.hbs", [], function () {
	return '<div class="flow_player__controller-overlay">\n    {{> flowplayer_menu}}\n    <span class="flow_player__logo"></span>\n    <a class="flow_player__close" href="#" role="button">\n        <span class="flow_player__close--icon flow_text--hidden">Stäng</span>\n    </a>\n    <a class="flow_js-player-menu flow_player__menu" href="#" role="button">\n        <span class="flow_player__menu--icon flow_text--hidden">Menu</span>\n    </a>\n\n    <div class="flow_player__play-bar">\n\n        <a href="#" class="flow_player__play-button flow_js__play-button">\n            <span class="svt_icon svt_icon--play svt_icon--align-middle flow_player__play-button-icon" aria-hidden="true"></span>\n            {{#if lengthFormatted}}\n                <span class="flow_x-padding-left-20">\n                {{lengthFormatted}}\n                </span>\n            {{else}}\n                {{#if length}}\n                    <span class="flow_x-padding-left-20">\n                    {{length}}\n                    </span>\n                {{/if}}\n            {{/if}}\n        </a>\n        {{#if hasFullscreen}}\n        <a href="#" class="flow_player__fullscreen-button flow_js__fullscreen-button" data-show-fullscreen-text="Spela i helskärm" data-hide-fullscreen-text="Avsluta fullskärm">\n            <span class="svt_icon svt_icon--fullscreen svt_icon--align-middle flow_player__fullscreen-icon" aria-hidden="true"></span>\n             <span class="flow_js__fullscreen-text"></span>\n        </a>\n        {{/if}}\n    </div>\n\n</div>\n\n<div class="flow_player__video-wrapper">\n    <div class="flow_player__video-container" style="background-image:url(\'{{thumbnailxl}}\');">\n        {{> svt_player}}\n    </div>\n</div>\n\n<div class="flow_player__nav__bottom">\n\n</div>'
});
define("modules/flowplayer/flowplayer_view", ["Class", "jquery", "handlebars", "svtlib-messagechannel", "svtlib-svtplayer", "svtlib-playerplugins", "play/utils", "play/device", "utils/fullscreen", "singletons/window_view", "modules/flowplayer/flowplayer_info_view", "modules/flowplayer/flowplayer_collection_view", "modules/search/search", "text!templates/flow_player.hbs"], function (e, t, i, n, s, r, a, o, l, c, u, d, h, p) {
	return e.extend({
		$el: void 0,
		flowplayerInfoView: void 0,
		flowplayerCollectionView: void 0,
		searchInstance: void 0,
		template: void 0,
		topic: "/modules/flowplayer/",
		tagdata: void 0,
		wmode: void 0,
		options: {
			showPlayerClass: "flow_player--show",
			hidePlayerClass: "flow_hide",
			overlayTimeoutTime: 2e3
		},
		_searchInitialized: !1,
		_menuIsActive: !1,
		init: function (e, i) {
			this.$el = e;
			(o.isIE() || o.isFirefox()) && (this.wmode = "opaque");
			this.tagdata = this.$el.data("tags");
			this.options = t.extend({}, this.options, i);
			this.flowplayerInfoView = new u(this.$el);
			this.flowplayerCollectionView = new d(this.$el);
			this._registerTemplates();
			this._bindEvents()
		},
		render: function (e, t) {
			t && (e.disabled = "end");
			e.hasFullscreen = l.hasFullscreen();
			e.wmode = this.wmode;
			e.tagdata = this.tagdata;
			this.$el.html(this.template(e));
			this.updateInfo(e, t);
			this.toggleFullscreenText(l.isFullscreen());
			c.triggerRepaint(this.$el);
			this._initSvtPlayer();
			this._searchInitialized = this._menuIsActive = !1
		},
		showPlayer: function () {
			this.$el.removeClass(this.options.hidePlayerClass);
			c.setOverflow(!0);
			c.setVisibility(!1);
			a.hideAddressBar()
		},
		hidePlayer: function () {
			this.flowplayerInfoView.destroy();
			this.destroyPlayer();
			this.$el.find(".flow_player__player").html("");
			this.$el.addClass(this.options.hidePlayerClass);
			c.setOverflow(!1);
			c.setVisibility(!0)
		},
		hideOverlayControl: function (e) {
			e ? this.$el.find(".flow_player__info, .flow_player__close").addClass("is--transition-hidden") : this.$el.find(".flow_player__controller-overlay").addClass("is--transition-hidden")
		},
		showOverlayControl: function () {
			this._menuIsActive ? this.$el.find(".flow_player__controller-overlay").removeClass("is--transition-hidden") : this.$el.find(".flow_player__controller-overlay, .flow_player__info, .flow_player__close").removeClass("is--transition-hidden")
		},
		hideInfo: function () {
			this.$el.find(".flow_player__info").addClass("flow_hide-no-touch")
		},
		showInfo: function () {
			this.$el.find(".flow_player__info").removeClass("flow_hide-no-touch")
		},
		hidePlayBar: function () {
			this.$el.find(".flow_player__play-bar").addClass("is--hidden")
		},
		showPlayBar: function () {
			this.$el.find(".flow_player__play-bar").removeClass("is--hidden")
		},
		updateInfo: function (e, i) {
			this.flowplayerInfoView.render(e);
			if (e.thumbnailxl) {
				this.$el.find(".flow_player__video-container").css("background-image", 'url("' + e.thumbnailxl + '")');
				this.$el.find(".flow_player__bg-img").attr("src", e.thumbnailxl)
			}
			if (i && i.size() > 1) {
				var n = e.index < i.size() ? i.getNextDataFromIndex(e.index) : i.getDataFromIndex(1),
					s = e.index > 1 ? i.getPrevDataFromIndex(e.index) : i.getDataFromIndex(i.size());
				n && n.data && (n = t.extend(!0, {}, n.data));
				s && s.data && (s = t.extend(!0, {}, s.data));
				this.flowplayerCollectionView.render(n, s)
			}
		},
		supportsOnEnd: function () {
			return 0 === this._findVideoElement().length
		},
		atApproxEnd: function () {
			if (this.supportsOnEnd() === !1) {
				var e = this._findVideoElement().get(0),
					t = 1;
				return e.duration - e.currentTime < t
			}
			return !1
		},
		isVisible: function () {
			return !this.$el.hasClass(this.options.hidePlayerClass)
		},
		destroyPlayer: function () {
			n.publish("/player/cleanup", ["player-overlay"])
		},
		toggleFullscreenText: function (e) {
			var t = this.$el.find(".flow_js__fullscreen-button");
			t && (e && t.data("hide-fullscreen-text") ? t.find(".flow_js__fullscreen-text").text(t.data("hide-fullscreen-text")) : t.data("show-fullscreen-text") && t.find(".flow_js__fullscreen-text").text(t.data("show-fullscreen-text")))
		},
		isFlash: function () {
			return this._svtplayer && this._svtplayer.video && this._svtplayer.video.usesFlash
		},
		_findVideoElement: function () {
			return this.$el.find("video")
		},
		_registerTemplates: function () {
			this.template = i.compile(p)
		},
		_bindEvents: function () {
			var e = this;
			this.$el.on("click", ".flow_player__close", function (t) {
				t.preventDefault();
				n.publish(e.topic + "overlayClose");
				return !1
			}).on("click", ".flow_js__play-button", function (t) {
				t.preventDefault();
				e._playVideo();
				return !1
			}).on("click", ".flow_js-player-menu", function () {
				var i = t(this);
				if (e._menuIsActive) {
					i.removeClass("flow_player__menu--is-active");
					e._showMenu(!1);
					e.showOverlayControl()
				} else {
					i.addClass("flow_player__menu--is-active");
					e._showMenu(!0);
					e.hideOverlayControl(!0)
				}
				return !1
			}).on("click", ".flow_js-search-toggle", function (i) {
				i.preventDefault();
				var s = e.$el.find(".flow_js-player-menu"),
					r = e.$el.find(".flow_menu__container-nav-items"),
					a = t("#overlay-input"),
					o = a.attr("placeholder");
				if (r.hasClass("flow_menu__container-nav-items--search-active")) {
					s.removeClass("flow_player__menu--search-active");
					r.removeClass("flow_menu__container-nav-items--search-active");
					n.publish("/search/toggle", e.searchInstances.id)
				} else {
					s.addClass("flow_player__menu--search-active");
					r.addClass("flow_menu__container-nav-items--search-active");
					a.on("focus.searchField", function () {
						a.attr("placeholder", o)
					}).focus();
					a.attr("placeholder", o)
				}
				return !1
			})
		},
		_showMenu: function (e) {
			var t = this.$el.find(".svtflow_container-menu--overlay");
			if (e) {
				t.addClass("is--active");
				c.triggerRepaint(t);
				t.find(".flow_player__menu-nav, .flow_menu__genres--overlay").addClass("is--active");
				if (!this._searchInitialized) {
					this.searchInstances = new h(this.$el.find(".flow_menu__search"), {
						autoCompleteContainer: ".svtflow_container-menu--overlay",
						autoComplete: !0,
						inputId: "overlay-input"
					});
					this._searchInitialized = !0
				}
				this._menuIsActive = !0
			} else {
				t.find(".flow_player__menu-nav, .flow_menu__genres--overlay").removeClass("is--active");
				t.removeClass("is--active");
				if (this._searchInitialized) {
					this.$el.find(".flow_player__menu").removeClass("flow_player__menu--search-active");
					this.$el.find(".flow_menu__container-nav-items").removeClass("flow_menu__container-nav-items--search-active")
				}
				this._menuIsActive = !1
			}
		},
		_initSvtPlayer: function (e) {
			var t = this,
				i = this.$el.find(".flow_player__player");
			this._svtplayer = new svtplayer.SVTPlayer(i);
			new r.ExpiredEpisode(i);
			new r.ParentalControl(i);
			n.subscribe("/player/onInitialized", function () {
				var e, i = t._findVideoElement();
				!Modernizr.touch && i.length && i.on("mousemove", function () {
					e && clearTimeout(e);
					n.publish("/player/focusChanged", [1, !0]);
					e = setTimeout(function () {
						n.publish("/player/focusChanged", [1, !1])
					}, t.options.overlayTimeoutTime)
				})
			});
			e && this._playVideo()
		},
		_playVideo: function () {
			n.publish("/player/play", ["player-overlay"])
		}
	})
});
define("models/episode_model", ["Class", "jquery"], function (e, t) {
	return e.extend({
		defaults: {
			id: void 0,
			title: "",
			episode: "",
			jsonHref: "",
			description: "Beskrivning saknas",
			length: "0",
			available: ""
		},
		data: void 0,
		init: function (e) {
			this.data = t.extend({}, this.defaults, e)
		},
		get: function (e) {
			return this.data[e]
		}
	})
});
define("collections/list_collection", ["Class", "jquery", "lodash", "models/episode_model"], function (e, t, i, n) {
	return e.extend({
		_collection: void 0,
		init: function (e) {
			var i = this;
			this._collection = [];
			e.each(function () {
				var e = t(this).data();
				i.add(i._fillData(e))
			})
		},
		getData: function (e) {
			return this._getFromIndex(this._getIndexForId(e))
		},
		getDataFromIndex: function (e) {
			var t = this._getIndex(e);
			return this._isValidIndex(t) ? this._getFromIndex(t) : null
		},
		getNextDataFromIndex: function (e) {
			var t = this._getIndex(e);
			return this._isValidIndex(t) ? this._getFromIndex(t + 1) : null
		},
		getPrevDataFromIndex: function (e) {
			var t = this._getIndex(e);
			return this._isValidIndex(t) ? this._getFromIndex(t - 1) : null
		},
		add: function (e) {
			this._collection.push(e)
		},
		size: function () {
			return this._collection.length
		},
		_fillData: function (e) {
			return new n(e)
		},
		_getFromIndex: function (e) {
			return this._isValidIndex(e) ? this._collection[e] : null
		},
		_getIndexForId: function (e) {
			return this._getIndex({
				data: {
					id: e
				}
			})
		},
		_getIndex: function (e) {
			e = "object" == typeof e ? e : {
				data: {
					index: e
				}
			};
			return i.findIndex(this._collection, e)
		},
		_isValidIndex: function (e) {
			return e > -1 && e < this._collection.length
		}
	})
});
define("singletons/video_context", ["Class", "jquery", "./instances", "svtlib-messagechannel"], function (e, t, i, n) {
	var s = e.extend({
		_context: null,
		topic: "/videocontext/",
		init: function () {
			this._context = {
				activeList: null,
				initIndex: null,
				historyState: null
			};
			this._bindListeners()
		},
		setContextFromList: function (e, t, i) {
			var s = t.data("index");
			this._context = {
				activeList: e.length ? e : t,
				initIndex: void 0 !== s ? s : 0,
				historyState: void 0 !== i ? i : "replace"
			};
			n.publish(this.topic + "update", this._context)
		},
		getContext: function () {
			return this._context
		},
		_bindListeners: function () {}
	});
	return i.get("VideoContext", s)
});
define("modules/flowplayer/flowplayer", ["jquery", "Class", "utils/modernizr", "svtlib-messagechannel", "modules/flowplayer/flowplayer_view", "collections/list_collection", "singletons/window_view", "singletons/video_context", "singletons/instances"], function (e, t, i, n, s, r, a, o, l) {
	var c = "collectionData",
		u = "videoData",
		d = "videoIndex",
		h = "player-overlay",
		p = t.extend({
			topic: "/modules/flowplayer/",
			playerView: void 0,
			$el: void 0,
			options: {
				playlist: void 0
			},
			_isPlaying: !1,
			_started: !1,
			init: function (t, r) {
				var a = this,
					l = e("body");
				this.$el = t;
				this.options = e.extend({}, this.options, r);
				this.playerView = new s(t, r);
				this.playerView.isVisible() && this._showOverlay();
				this._bindListeners();
				if (l.hasClass("svtflow_js-video-page")) {
					var c = e(".flow_js-single-player").first();
					c.length && a._handleRouting(c)
				} else if (!i.touch && l.hasClass("svtflow_js-start-page") && l.hasClass("flow--splashing")) {
					var u = e(".svtflow_tabla");
					if (u.length) {
						var d = u.find(".flow_js-video-list .flow_js-video-list-item").not(".slick-cloned, .flow_js-video-list-item--excluded"),
							h = u.find(".flow_js-video-list-item.svtflow_tabla-element--active");
						o.setContextFromList(d, h, "push");
						n.publish("/modules/flowplayer/showVideo", h.data("id"))
					}
				}
			},
			_bindListeners: function () {
				var t = this;
				e("body").on("click", "a", function (i) {
					if (t._handleRouting(e(this))) {
						i.preventDefault();
						return !1
					}
					return !0
				});
				n.subscribe(this.topic + "overlayClose", function () {
					t._hideOverlay();
					n.publish("/router/clear", o.getContext().historyState)
				});
				n.subscribe(this.topic + "showVideo", function (e) {
					if (t.playerView.isVisible())
						if (t._started && t.playerView.isFlash()) {
							t._manualDestroy = !0;
							setTimeout(function () {
								t.playerView.destroyPlayer();
								n.publish("/player/hideOverlay", [h]);
								t._setVideo(t._getVideoData(e))
							}, 100)
						} else {
							n.publish("/player/hideOverlay", [h]);
							t._setVideo(t._getVideoData(e))
						} else {
						n.publish(t.topic + "flowplayer-show");
						t._showOverlay();
						t._setVideo(t._getVideoData(e))
					}
				});
				n.subscribe("/player/onVideoEnd", function () {
					if (t.playerView.supportsOnEnd() === !0) {
						var e = t._getNextVideoData();
						t._onEnd = !0;
						e ? n.publish("/router/route", e.jsonHref) : t._setVideo(null)
					}
				});
				n.subscribe("/player/onPause", function () {
					if (t.playerView.supportsOnEnd() === !1 && t.playerView.atApproxEnd() === !0) {
						var e = t._getNextVideoData();
						t._onEnd = !0;
						e && n.publish("/router/route", e.jsonHref)
					} else t._manualDestroy ? t._manualDestroy = !1 : t._isPlaying = !1
				});
				n.subscribe("/player/onPlaying", function () {
					t._started || t.playerView.hideOverlayControl();
					t._isPlaying = !0;
					t._started = !0;
					t._onEnd && (t._overlayTimeout = setTimeout(function () {
						t.playerView.hideOverlayControl();
						t._onEnd = !1
					}, 3e3))
				});
				n.subscribe("/player/play", function () {
					t.playerView.hidePlayBar()
				});
				n.subscribe("/player/showOverlay", function (e) {
					e && e.length > 1 && ("expiredEpisode" === e[1] || "parentalControl" === e[1]) && t.enable(!1)
				});
				n.subscribe("/player/enable", function (e) {
					e && e.length > 1 && t.enable(e[1])
				});
				if (!i.touch) {
					n.subscribe("/player/focusChanged", function (e) {
						"xsmall" !== a.getWindowSize() && (e && e[1] === !0 ? t.playerView.showOverlayControl() : t._started && !t._onEnd && t.playerView.hideOverlayControl())
					});
					n.subscribe("/player/onError", function () {
						if (t.playerView.isVisible()) {
							t.enable(!1);
							t.playerView.showOverlayControl();
							if (t._started) {
								t.playerView.destroyPlayer();
								t._started = !1
							}
						}
					})
				}
				n.subscribe("/videocontext/update", function (e) {
					if (e && e.activeList) {
						var i = new r(e.activeList);
						t._setData(c, i);
						t._setData(d, e.initIndex)
					}
				});
				n.subscribe("fullscreen-changed", function (e) {
					t.playerView.toggleFullscreenText(e);
					e && n.publish("/player/play", ["player-overlay"])
				})
			},
			enable: function (e) {
				if (e) {
					this.playerView.showPlayBar();
					this.playerView.showInfo()
				} else {
					this.playerView.hidePlayBar();
					this.playerView.hideInfo()
				}
			},
			_showOverlay: function () {
				this.playerView.showPlayer()
			},
			_hideOverlay: function () {
				if (this.playerView.isVisible()) {
					this.playerView.hidePlayer();
					this._clearData();
					this._isPlaying = this._started = !1
				}
			},
			_setVideo: function (e) {
				if (e && e.jsonHref) {
					this._setData(d, e.index);
					if (this._isPlaying) {
						if (e && e.jsonHref) {
							n.publish("/player/loadAndPlay", [h, e.jsonHref]);
							this.playerView.updateInfo(e, this._getData(c));
							n.publish("/player/focusChanged", [e.id, !0])
						}
					} else this.playerView.render(e, this._getData(c));
					this._setData(u, e);
					n.publish(this.topic + "video-episode-loaded", e)
				} else {
					n.publish("/player/showView", ["player-overlay", "end"]);
					this._isPlaying = !1;
					this._started = !1;
					this.playerView.showOverlayControl();
					this.playerView.showPlayBar()
				}
			},
			_getNextVideoData: function () {
				var e, t = this._getData(c),
					i = this._getData(d);
				if (t) {
					e = i === t.size() ? t.getDataFromIndex(1) : t.getNextDataFromIndex(i);
					return e ? e.data : null
				}
				return null
			},
			_getVideoData: function (e) {
				var t, i, n, s = this._getData(c),
					r = this._getData(d);
				if (!s) return null;
				t = s.getDataFromIndex(r);
				if (t && t.data.id === e) return t.data;
				i = s.getNextDataFromIndex(r);
				n = s.getPrevDataFromIndex(r);
				return i && i.data.id === e ? i.data : n && n.data.id === e ? n.data : s.getData(e).data
			},
			_setData: function (e, t) {
				this.$el.data(e, t)
			},
			_getData: function (e) {
				return e ? this.$el.data(e) : this.$el.data()
			},
			_clearData: function () {
				this.$el.removeData()
			},
			_handleRouting: function (t) {
				var i = t.attr("href"),
					s = t.closest(".flow_js-video-list-item, .flow_js-single-player");
				if (!s.hasClass("flow_js-single-player")) {
					var r = t.closest(".flow_js-video-list").find(".flow_js-video-list-item").not(".slick-cloned, .flow_js-video-list-item--excluded");
					s.length && o.setContextFromList(r, s);
					return l.get("Router").route(i)
				}
				var a = s.data("id"),
					c = e(".flow_js-video-list").first().find(".flow_js-video-list-item").filter(function () {
						return e(this).data("id") === a
					});
				if (c.length) {
					c.find(".flow_js-overlay-player").trigger("click");
					return !0
				}
				o.setContextFromList(s, s);
				n.publish("/modules/flowplayer/showVideo", a);
				return !1
			}
		});
	p.make = function (e, t) {
		return new p(e, t)
	};
	return p
});
define("modules/menu/menu", ["jquery", "Class", "svtlib-messagechannel"], function (e, t, i) {
	var n = [],
		s = t.extend({
			$container: void 0,
			id: void 0,
			$activeItem: void 0,
			options: {
				inlineMenuClass: ".flow_nav-mf__show",
				toggleInlineMenuClass: ".flow_js-menu-toggle-mf",
				searchToggleClass: ".flow_js-search-toggle",
				searchId: void 0
			},
			init: function (t, i) {
				this.id = n.length + 1;
				n.push(this.id);
				this.$container = t;
				this.options = e.extend({}, this.options, i);
				this.$activeItem = this.$container.find(".flow_nav-gte-M-item-active");
				this._bindListeners()
			},
			_bindListeners: function () {
				var t = this,
					n = e(this.options.inlineMenuClass),
					s = e(this.options.toggleInlineMenuClass);
				s.click(function () {
					var s = e(this);
					if (s.hasClass("is--active")) {
						s.removeClass("is--active");
						n.addClass("flow_show-block-no-js")
					} else {
						s.addClass("is--active");
						n.removeClass("flow_show-block-no-js");
						if (t.options.searchId) {
							i.publish("/search/toggle", t.options.searchId, !1);
							t.$activeItem && t.$activeItem.addClass("flow_nav-gte-M-item-active");
							e(".flowJsMenuToggle-gte-s").removeClass("flow_nav-gte-M-item-active")
						}
					}
					return !1
				});
				this.$container.on("click", this.options.searchToggleClass, function (e) {
					e.preventDefault();
					t._toggleSearchForm();
					return !1
				})
			},
			_toggleSearchForm: function () {
				i.publish("/search/toggle", this.options.searchId);
				this.$activeItem && this.$activeItem.toggleClass("flow_nav-gte-M-item-active");
				e(".flowJsMenuToggle-gte-s").toggleClass("flow_nav-gte-M-item-active")
			}
		});
	s.make = function (e, t) {
		return new s(e, t)
	};
	return s
});
define("utils/sitecatalyst_page_data", [], function () {
	return window.SVTFLOW_SITECATALYSTDATA
});
/* Adobe Tag Container Loader version: 1.0.7
Copyright 1996-2013 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */
var s = new TagContainerLoader();
s.tagContainerDC = "d3";
s.tagContainerNamespace = "svt";
s.tagContainerName = "SVTTagContainer";
s.loadTagContainer();

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
function TagContainerLoader() {
	var t = this,
		w = t.w = window;
	t.d = w.document;
	t._c = 's_l';
	if (!w.s_c_il) {
		w.s_c_il = [];
		w.s_c_in = 0
	}
	t._il = w.s_c_il;
	t._in = w.s_c_in;
	t._il[t._in] = t;
	w.s_c_in++;
	t.timeout = 5000;
	t.to =
		new Function('var t=s_c_il[' + t._in + '];if(t.mt)t.mt(0)');
	t.loadTagContainer = function () {
		var t = this,
			l, p = t.d.body,
			n, a = t.tagContainerServer ? t.tagContainerServer : 'www.adobetag.com',
			b =
			t.tagContainerServerSecure ? t.tagContainerServerSecure : a,
			c = t.d.cookie,
			d = t.tagContainerEnv ? t.tagContainerEnv : (c ? (c.indexOf('s_tagEnv=dev') >= 0 ? 'dev' : (c.indexOf('s_tagEnv=stage') >= 0 ? 'stage' : 'live')) :
				'live'),
			u = (t.w.location.protocol.toLowerCase().indexOf('https') >= 0 ? 'https://' + b : 'http://' + a) + '/' + (t.tagContainerDC ? t.tagContainerDC + '/' : '') + t.tagContainerNamespace + '/' + d + '/' + t.tagContainerName + '.js'
		if (t.tagContainerURL) u = t.tagContainerURL;
		if (t.timeout) t.ti = setTimeout(t.to, t.timeout);
		if (t.d.getElementsByTagName) {
			l = t.d.getElementsByTagName('HEAD');
			if (l && l[0]) p = l[0]
		} else p = 0; if (
			p && !t.tagContainerSynchronous) {
			n = t.d.createElement('SCRIPT');
			if (n) {
				n.type = 'text/javascript';
				n.setAttribute('async', 'async');
				n.src = u;
				if (p.firstChild) p.insertBefore(n, p.firstChild);
				else p.appendChild(n)
			}
		} else t.d.write('<sc' + 'ript language="JavaScript" type="text/javascript" sr' + 'c="' + u + '"></sc' + 'ript>')
	};
	t.fs = function (x, y) {
		if (x && y) {
			var a = x.split(','),
				b = y.split(','),
				i, j;
			for (i = 0; i < a.length; i++) {
				for (j = 0; j < b.length; j++)
					if (a[i] == b[j]) return 1
			}
		}
		return 0
	};
	t.aa = function (a) {
		var b = 0,
			i;
		if (a) {
			b = [];
			for (i = 0; i < a.length; i++) b[i] = a[i]
		}
		return b
	};
	t.wl = [];
	t.wq = [];
	t.createAsynchronousCustomTagHandler = function (
		o, f) {
		var t = this,
			x, i;
		if (!f) {
			f = o;
			o = 0;
			x = t.w
		} else {
			if (!t.w[o]) t.w[o] = {};
			x = t.wl[o] = t.w[o]
		} if (typeof (f) != 'object') f = [f];
		for (i = 0; i < f.length; i++)
			if (!x[f[i]]) x[f[i]] = new Function('var t=s_c_il[' + t._in +
				'];t.wq[t.wq.length]={' + (o ? 'o:"' + o + '",' : '') + 'f:"' + f[i] + '",a:t.aa(arguments)}')
	};
	t.as = function (x) {
		var y = [],
			i;
		for (i = 1; i < x.length; i++) y[y.length] = x[i];
		return y
	};
	t.s = 0;
	t.contextData = {}
	t.retrieveLightData = {};
	if (!w.s_giq) w.s_giq = [];
	t._gi = w.s_gi;
	w.s_gi = new Function('u', 'var t=s_c_il[' + t._in +
		'],w=t.w,l=t._il,i,j,x,s;u=u.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=="s_c"||(j>0&&x=="s_l"))&&s.oun&&(s.oun==u||(s.fs&&s.sa&&s.fs(s.oun,u)))){' +
		'if(s.sa)s.sa(u);return s}}if(!t.oun){t.sa(u);return t}if(t._gi)return t._gi(u);s=new TagContainerLoader();s.tagContainerName="s_tca_"+w.s_giq.length;s.sa(u);w.s_giq[w.s_giq.length]=s;return s');
	t.sa =
		function (u) {
			var t = this;
			if (t.s) t.s.sa(u);
			t.un = u;
			if (!t.oun) t.oun = u;
			else if (!t.fs(t.oun, u)) t.oun += ',' + u
	};
	t.tq = [];
	t.track = t.t = function (vo) {
		var t = this,
			m;
		if (t.s) return t.s.t(vo);
		if (!vo) vo = {};
		for (m in t) {
			if (
				m != 'un' || t.u != t.un) vo[m] = t[m]
		}
		t.tq[t.tq.length] = vo;
		t.lnk = t.linkName = t.linkType = '';
		return '';
	};
	t.trackLink = t.tl = function (o, u, n, vo) {
		var t = this;
		if (t.s) return t.s.tl(o, u, v, vo);
		t.lnk = o;
		t.linkType = u
		t.linkName = n;
		return t.t(vo)
	};
	t.trackLight = function (p, ss, i, vo) {
		var t = this;
		if (t.s) return t.s.trackLight(p, ss, i, vo);
		t.lightProfileID = p;
		t.lightStoreForSeconds = ss;
		t.lightIncrementBy = i;
		return t.t(vo)
	}
	t.lmq = [];
	t.loadModule = function (n, u, d) {
		var t = this;
		if (t.s) return t.s.loadModule(n, u, d);
		t.lmq[t.lmq.length] = {
			n: n,
			u: u,
			d: d
		};
		return 0
	};
	t.ml = [];
	t.mmq = [];
	t.mo = function (m, f) {
		var t = this,
			i;
		t.ml[m] = t[m] = {};
		if (f)
			for (i = 0; i < f.length; i++) t[m][f[i]] = new Function('var t=s_c_il[' + t._in + '];t.mmq[t.mmq.length]={m:"' + m + '",f:"' + f[i] + '",a:t.aa(arguments)}')
	};
	t.mo('Media', ['open', 'play', 'stop', 'close', 'track']);
	t.mo(
		'Survey', ['launch']);
	t.mci = [];
	t.mn = [];
	t.mc = function (n, m, p, k) {
		var t = this,
			b, l = 0;
		if (typeof (mboxFactoryDefault) == 'undefined' || t.d.getElementById(m) == null) return;
		if (!mboxFactoryDefault.isEnabled()) {
			clearInterval(t.mci[k]);
			t.mt(true);
			return
		}
		if (typeof (mboxFactoryDefault.get(t.mn[0], 0)) != 'undefined') l = mboxFactoryDefault.get(t.mn[0], 0).isShown();
		if (k == 0 || l) {
			clearInterval(t.mci[k]);
			b =
				mboxFactoryDefault.create(n, p.split("&"));
			if (b) b.load()
		}
	};
	if (!w.mboxCreate && !w.mboxDefine && !w.mboxUpdate) {
		w.mboxVersion = 'mini';
		if (!t.d.getElementById('mboxScriptContainer')) t.d.write(
			'<div id="mboxScriptContainer" style="display:none;visibility:hidden;"></div><style>.mboxDefault{visibility:hidden;}</style>');
		t.mt = function (f) {
			var t = this,
				i, j, d;
			if (typeof (mboxFactoryDefault) ==
				'undefined' || f) {
				for (i in t.mci) clearInterval(t.mci[i]);
				d = (t.d.getElementsByClassName) ? t.d.getElementsByClassName('mboxDefault') : t.d.getElementsByTagName('div');
				for (j in d)
					if (d[j].className ==
						"mboxDefault") d[j].style.visibility = "visible"
			}
		};
		t.mpi = {};
		t.mp = function (x, m) {
			var t = this;
			t.mpi[x] = setInterval(function () {
					if (typeof (mboxFactoryDefault) === 'undefined') return;
					m();
					clearInterval(t.mpi[x])
				},
				13)
		};
		w.mboxCreate = function (n) {
			var j = 0,
				i, m, p, k;
			for (i in t.mn)
				if (t.mn[i] == n) j++;
			t.mn[t.mn.length] = n;
			m = 'mboxMarker-default-' + n + '-' + j;
			t.d.write('<div id="' + m +
				'" style="visibility:hidden;display:none">&nbsp;</div>');
			p = t.as(arguments).join("&");
			k = t.mci.length;
			t.mci[k] = setInterval(function () {
				t.mc(n, m, p, k);
			}, 5)
		};
		w.mboxDefine = function (d, n) {
			var a = t.as(arguments)
			t.mp('define_' + n, function () {
				mboxFactoryDefault.create(n, a, d);
			})
		};
		w.mboxUpdate = function (n) {
			var a = t.as(arguments),
				x;
			x = 'update_' + n;
			t.mpi[x] = setInterval(function () {
				if (typeof (mboxFactoryDefault) ===
					'undefined' || typeof (mboxFactoryDefault.get(n)) === 'undefined') return;
				mboxFactoryDefault.update(n, a);
				clearInterval(t.mpi[x]);
			}, 13)
		};
		w.mboxLoadSCPlugin = function (s) {
			(function () {
				if (typeof (
					mboxFactoryDefault) === 'undefined' || typeof (mboxExternalLoadSCPlugin) === 'undefined' || (s._c == 's_l' && !s.s)) {
					setTimeout(arguments.callee, 19);
					return
				}
				if (s._c == 's_l') s = s.s;
				mboxExternalLoadSCPlugin(s)
			})()
		};
	}
};
define("appMeasurementLookup", function (e) {
	return function () {
		var t;
		return t || e.s_gi
	}
}(this));
define("modules/statistics/tagmanager", ["jquery", "appMeasurementLookup"], function (e) {
	return {
		onTagLoaded: function (t, i) {
			e(function () {
				var e = window.s;
				t.call(i, e)
			})
		}
	}
});
define("modules/statistics/appmeasurement", ["lodash", "Class", "modules/statistics/tagmanager"], function (e, t, i) {
	var n = t.extend({
		_recorded: [],
		_appMeasurement: null,
		init: function () {
			this._appMeasurement = this._createRecordingAppMeasurement();
			i.onTagLoaded(this._gotAppMeasurement, this)
		},
		trackAsPageView: function (e) {
			this._appMeasurement.clearVars();
			this._appMeasurement.track(e)
		},
		trackAsEvent: function (e, t) {
			this._appMeasurement.clearVars();
			this._appMeasurement.trackLink(!0, "o", e, t)
		},
		_createRecordingAppMeasurement: function () {
			var e = this;
			return {
				track: function (t) {
					e._recorded.push({
						method: "track",
						args: [t]
					})
				},
				trackLink: function (t, i, n, s) {
					e._recorded.push({
						method: "trackLink",
						args: [t, i, n, s]
					})
				},
				clearVars: function () {}
			}
		},
		_gotAppMeasurement: function (t) {
			this._appMeasurement = t;
			void 0 === this._appMeasurement.clearVars && (this._appMeasurement.clearVars = function () {
				e.forOwn(this, function (e, t) {
					("prop" === t.substring(0, 4) || "eVar" === t.substring(0, 4) || "hier" === t.substring(0, 4) || "list" === t.substring(0, 4) || "channel" === t || "events" === t || "eventList" === t || "products" === t || "productList" === t || "purchaseID" === t || "transactionID" === t || "state" === t || "zip" === t || "campaign" === t) && (this[t] = void 0)
				}, this)
			});
			this._replayRecorded()
		},
		_replayRecorded: function () {
			e.each(this._recorded, function (e) {
				this._appMeasurement.clearVars();
				this._appMeasurement[e.method].apply(this._appMeasurement, e.args)
			}, this)
		}
	});
	return new n
});
define("modules/statistics/user_statistics", ["Class", "jquery", "svtlib-messagechannel", "utils/sitecatalyst_page_data", "modules/statistics/appmeasurement", "singletons/window_view"], function (e, t, i, n, s, r) {
	return e.extend({
		properties: {
			pageName: "svtflow:Svt Flow:index",
			channel: "Svt Flow",
			prop2: "svtflow:",
			prop3: "svtflow::",
			prop9: "svtflow.se",
			prop7: "Svt Flow"
		},
		init: function () {
			this.listen()
		},
		listen: function () {
			var e = this;
			i.subscribe("/modules/flowplayer/video-episode-loaded", function (t) {
				if (t) {
					var i = "svtflow:",
						n = "",
						s = e._getCategoryName(t.category),
						r = void 0 !== t.broadcastended;
					i += s + ":" + t.title + ":" + e._getContentTypeName(t.contentType, r) + ":" + t.episode;
					n = s + ":";
					e.trackPageLoad({
						pageName: i,
						channel: s,
						prop2: n,
						prop3: n + ":" + t.title,
						prop4: t.episode,
						prop5: t.id,
						prop6: t.contentType,
						prop7: s,
						prop8: window.location.protocol + "://" + window.location.host + t.jsonHref,
						prop9: "svtflow.se"
					})
				}
			});
			i.subscribe("/router/reset", function () {
				e.trackPageLoad(n)
			})
		},
		trackPageLoad: function (e) {
			e = t.extend({}, this.properties, e);
			e.prop10 || (e.prop10 = r.getWindowSize());
			s.trackAsPageView(e)
		},
		_getPageUrl: function () {
			var e = window.location.href;
			e && (e = e.lastIndexOf("/") === e.length - 1 ? e.substring(e.lastIndexOf("/"), 0) : e);
			return e
		},
		_getContentTypeName: function (e, t) {
			return "videoEpisod" === e ? t ? "live" : "hela-program" : "videoKlipp" === e ? "klipp" : "unknown-type"
		},
		_getCategoryName: function (e) {
			return e ? e : "missing-category"
		}
	})
});
define("singletons/user_statistics", ["singletons/instances", "modules/statistics/user_statistics"], function (e, t) {
	return e.get("modules/statistics/user_statistics", t)
});
define("text!templates/partials/flowplayer_menu.hbs", [], function () {
	return '<div class="svtflow_container-menu--overlay flow_hide-e-xs">\n    <nav class="flow_player__menu-nav" role="navigation">\n        <ul class="flow_menu__container-nav-items flow_hide-e-xs">\n            <li>\n                <a class="flow_menu__nav-item" href="/">\n                    <span class="svt_icon flow_nav-gte-M-item-start" aria-hidden="true"></span>\n                    <span class="flow_menu__nav-item-text">Start</span>\n                </a>\n            </li>\n            <li>\n                <a class="flow_menu__nav-item" href="/program">\n                    <span class="svt_icon flow_nav-gte-M-item-program" aria-hidden="true"></span>\n                    <span class="flow_menu__nav-item-text">Program</span>\n                </a>\n            </li>\n\n            <li class="flow_menu__search-item" tabindex="0">\n                <a class="flow_js-search-toggle flow_menu__nav-item" href="/sok" tabindex="-1">\n                    <span class="svt_icon flow_nav-gte-M-item-search" aria-hidden="true"></span>\n                    <span class="flow_menu__nav-item-text">Sök</span>\n                </a>\n            </li>\n            <li class="flow_menu__search">\n                <div class="flow_search flow_search--overlay flow_js-autocomplete ">\n                    <form action="/sok" method="GET" autocomplete="off" role="search" class="flow_search-form flow_search-form--overlay">\n                        <label class="flow_hide" for="overlay-input">Sök efter</label>\n                        <input class="flow_search-box flow_search-box--overlay flow_js-input-placeholder" id="overlay-input" name="q" placeholder="Börja skriva för att söka" value="" accesskey="4">\n                        <button class="svt_icon svt_icon--search flow_search-submit flow_search-submit--overlay" type="submit" title="Sök på svtflow.se" value="Sök"></button>\n                    </form>\n                </div>\n            </li>\n        </ul>\n    </nav>\n\n    {{#if tagdata}}\n    <div class="flow_menu__genres--overlay">\n        <ul class="flow_menu__genres">\n            <li>\n                Genrer\n            </li>\n            {{#each tagdata}}\n            <li>\n                <a href="{{url}}">{{name}}</a>\n            </li>\n            {{/each}}\n        </ul>\n    </div>\n    {{/if}}\n</div>'
});
define("text!templates/partials/svt_player.hbs", [], function () {
	return '<a id="player-overlay" class="svtplayer playJsRemotePlayer flow_player__player {{#if inappropriateForChildren }} playJsParentalControl{{/if}}"\n    data-id="{{id}}"\n    data-title="{{title}}"\n    {{#if wmode}}\n    data-wmode="{{wmode}}"\n    {{/if}}\n    {{#if start}}\n    data-start="{{start}}"\n    {{/if}}\n    {{#if chromecastEnabled}}\n	data-chromecast-enabled="true"\n	{{/if}}\n    data-length="{{materialLength}}"\n    {{#if availableOnMobile}}\n    data-available-on-mobile="true"\n    {{else}}\n    data-available-on-mobile="false"\n    {{/if}}\n    data-only-available-in-sweden="{{onlyAvailableInSweden}}"\n    data-json-href="{{jsonHref}}"\n    {{#if position}}\n    data-position="{{position}}"\n    {{/if}}\n    {{#if disabled}}\n        data-disabled="{{disabled}}"\n    {{/if}}\n    {{#if expired}}\n        data-expired-date="{{expiredDate}}"\n        data-expired="{{expired}}"\n        data-number-of-episodes="{{numberOfEpisodes}}"\n        data-number-of-clips="{{numberOfClips}}"\n    {{/if}}\n    data-dvr="{{dvr}}"\n    data-poster="{{thumbnailxl}}"\n    href="{{jsonHref}}">\n    {{#unless _titlePage}}\n      {{#if thumbnailxl}}\n        <div class="flow_player__bg-image-wrapper">\n            <img class="svtHide-No-Js flow_player__bg-img" data-responsive-maxsize="extralarge" data-aspect-ratio="16_9" data-screen-fraction="1" src="{{thumbnailxl}}" alt="" />\n        </div>\n      {{/if}}\n    {{/unless}}\n</a>\n\n'
});
define("utils/handlebars_helper", ["handlebars", "lodash", "text!templates/partials/flowplayer_menu.hbs", "text!templates/partials/svt_player.hbs"], function (e, t, i, n) {
	var s = {
		truncate: function (t, i) {
			if (t.length > i && t.length > 0) {
				var n = t + " ";
				n = t.substr(0, i);
				n = t.substr(0, n.lastIndexOf(" "));
				n = n.length > 0 ? n : t.substr(0, i);
				return new e.SafeString(n + "...")
			}
			return t
		},
		encode: function () {
			for (var e = "", t = 0; t < arguments.length; t++) "string" == typeof arguments[t] && (e += arguments[t]);
			return encodeURIComponent(e)
		},
		ifCond: function (e, t, i) {
			return e === t ? i.fn(this) : i.inverse(this)
		}
	};
	return {
		init: function () {
			t.each(s, function (t, i) {
				e.registerHelper(i, t)
			});
			e.registerPartial("svt_player", n);
			e.registerPartial("flowplayer_menu", i)
		}
	}
});
"object" != typeof JSON && (JSON = {});
! function () {
	function f(e) {
		return 10 > e ? "0" + e : e
	}

	function quote(e) {
		escapable.lastIndex = 0;
		return escapable.test(e) ? '"' + e.replace(escapable, function (e) {
			var t = meta[e];
			return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + e + '"'
	}

	function str(e, t) {
		var i, n, s, r, a, o = gap,
			l = t[e];
		l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e));
		"function" == typeof rep && (l = rep.call(t, e, l));
		switch (typeof l) {
		case "string":
			return quote(l);
		case "number":
			return isFinite(l) ? String(l) : "null";
		case "boolean":
		case "null":
			return String(l);
		case "object":
			if (!l) return "null";
			gap += indent;
			a = [];
			if ("[object Array]" === Object.prototype.toString.apply(l)) {
				r = l.length;
				for (i = 0; r > i; i += 1) a[i] = str(i, l) || "null";
				s = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + o + "]" : "[" + a.join(",") + "]";
				gap = o;
				return s
			}
			if (rep && "object" == typeof rep) {
				r = rep.length;
				for (i = 0; r > i; i += 1)
					if ("string" == typeof rep[i]) {
						n = rep[i];
						s = str(n, l);
						s && a.push(quote(n) + (gap ? ": " : ":") + s)
					}
			} else
				for (n in l)
					if (Object.prototype.hasOwnProperty.call(l, n)) {
						s = str(n, l);
						s && a.push(quote(n) + (gap ? ": " : ":") + s)
					}
			s = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + o + "}" : "{" + a.join(",") + "}";
			gap = o;
			return s
		}
	}
	if ("function" != typeof Date.prototype.toJSON) {
		Date.prototype.toJSON = function () {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
			return this.valueOf()
		}
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap, indent, meta = {
			"\b": "\\b",
			"	": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		rep;
	"function" != typeof JSON.stringify && (JSON.stringify = function (e, t, i) {
		var n;
		gap = "";
		indent = "";
		if ("number" == typeof i)
			for (n = 0; i > n; n += 1) indent += " ";
		else "string" == typeof i && (indent = i);
		rep = t;
		if (t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
		return str("", {
			"": e
		})
	});
	"function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
		function walk(e, t) {
			var i, n, s = e[t];
			if (s && "object" == typeof s)
				for (i in s)
					if (Object.prototype.hasOwnProperty.call(s, i)) {
						n = walk(s, i);
						void 0 !== n ? s[i] = n : delete s[i]
					}
			return reviver.call(e, t, s)
		}
		var j;
		text = String(text);
		cx.lastIndex = 0;
		cx.test(text) && (text = text.replace(cx, function (e) {
			return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
		}));
		if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
			j = eval("(" + text + ")");
			return "function" == typeof reviver ? walk({
				"": j
			}, "") : j
		}
		throw new SyntaxError("JSON.parse")
	})
}();
! function (e, t) {
	var i = e.History = e.History || {},
		n = e.jQuery;
	if ("undefined" != typeof i.Adapter) throw new Error("History.js Adapter has already been loaded...");
	i.Adapter = {
		bind: function (e, t, i) {
			n(e).bind(t, i)
		},
		trigger: function (e, t, i) {
			n(e).trigger(t, i)
		},
		extractEventData: function (e, i, n) {
			var s = i && i.originalEvent && i.originalEvent[e] || n && n[e] || t;
			return s
		},
		onDomLoad: function (e) {
			n(e)
		}
	};
	"undefined" != typeof i.init && i.init()
}(window);
! function (e) {
	var t = e.document,
		i = e.setTimeout || i,
		n = e.clearTimeout || n,
		s = e.setInterval || s,
		r = e.History = e.History || {};
	if ("undefined" != typeof r.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
	r.initHtml4 = function () {
		if ("undefined" != typeof r.initHtml4.initialized) return !1;
		r.initHtml4.initialized = !0;
		r.enabled = !0;
		r.savedHashes = [];
		r.isLastHash = function (e) {
			var t, i = r.getHashByIndex();
			t = e === i;
			return t
		};
		r.isHashEqual = function (e, t) {
			e = encodeURIComponent(e).replace(/%25/g, "%");
			t = encodeURIComponent(t).replace(/%25/g, "%");
			return e === t
		};
		r.saveHash = function (e) {
			if (r.isLastHash(e)) return !1;
			r.savedHashes.push(e);
			return !0
		};
		r.getHashByIndex = function (e) {
			var t = null;
			t = "undefined" == typeof e ? r.savedHashes[r.savedHashes.length - 1] : 0 > e ? r.savedHashes[r.savedHashes.length + e] : r.savedHashes[e];
			return t
		};
		r.discardedHashes = {};
		r.discardedStates = {};
		r.discardState = function (e, t, i) {
			var n, s = r.getHashByState(e);
			n = {
				discardedState: e,
				backState: i,
				forwardState: t
			};
			r.discardedStates[s] = n;
			return !0
		};
		r.discardHash = function (e, t, i) {
			var n = {
				discardedHash: e,
				backState: i,
				forwardState: t
			};
			r.discardedHashes[e] = n;
			return !0
		};
		r.discardedState = function (e) {
			var t, i = r.getHashByState(e);
			t = r.discardedStates[i] || !1;
			return t
		};
		r.discardedHash = function (e) {
			var t = r.discardedHashes[e] || !1;
			return t
		};
		r.recycleState = function (e) {
			var t = r.getHashByState(e);
			r.discardedState(e) && delete r.discardedStates[t];
			return !0
		};
		if (r.emulated.hashChange) {
			r.hashChangeInit = function () {
				r.checkerFunction = null;
				var i, n, a, o, l = "",
					c = Boolean(r.getHash());
				if (r.isInternetExplorer()) {
					i = "historyjs-iframe";
					n = t.createElement("iframe");
					n.setAttribute("id", i);
					n.setAttribute("src", "#");
					n.style.display = "none";
					t.body.appendChild(n);
					n.contentWindow.document.open();
					n.contentWindow.document.close();
					a = "";
					o = !1;
					r.checkerFunction = function () {
						if (o) return !1;
						o = !0;
						var t = r.getHash(),
							i = r.getHash(n.contentWindow.document);
						if (t !== l) {
							l = t;
							if (i !== t) {
								a = i = t;
								n.contentWindow.document.open();
								n.contentWindow.document.close();
								n.contentWindow.document.location.hash = r.escapeHash(t)
							}
							r.Adapter.trigger(e, "hashchange")
						} else if (i !== a) {
							a = i;
							c && "" === i ? r.back() : r.setHash(i, !1)
						}
						o = !1;
						return !0
					}
				} else r.checkerFunction = function () {
					var t = r.getHash() || "";
					if (t !== l) {
						l = t;
						r.Adapter.trigger(e, "hashchange")
					}
					return !0
				};
				r.intervalList.push(s(r.checkerFunction, r.options.hashChangeInterval));
				return !0
			};
			r.Adapter.onDomLoad(r.hashChangeInit)
		}
		if (r.emulated.pushState) {
			r.onHashChange = function (t) {
				var i, n = t && t.newURL || r.getLocationHref(),
					s = r.getHashByUrl(n),
					a = null,
					o = null;
				if (r.isLastHash(s)) {
					r.busy(!1);
					return !1
				}
				r.doubleCheckComplete();
				r.saveHash(s);
				if (s && r.isTraditionalAnchor(s)) {
					r.Adapter.trigger(e, "anchorchange");
					r.busy(!1);
					return !1
				}
				a = r.extractState(r.getFullUrl(s || r.getLocationHref()), !0);
				if (r.isLastSavedState(a)) {
					r.busy(!1);
					return !1
				}
				o = r.getHashByState(a);
				i = r.discardedState(a);
				if (i) {
					r.getHashByIndex(-2) === r.getHashByState(i.forwardState) ? r.back(!1) : r.forward(!1);
					return !1
				}
				r.pushState(a.data, a.title, encodeURI(a.url), !1);
				return !0
			};
			r.Adapter.bind(e, "hashchange", r.onHashChange);
			r.pushState = function (t, i, n, s) {
				n = encodeURI(n).replace(/%25/g, "%");
				if (r.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
				if (s !== !1 && r.busy()) {
					r.pushQueue({
						scope: r,
						callback: r.pushState,
						args: arguments,
						queue: s
					});
					return !1
				}
				r.busy(!0);
				var a = r.createStateObject(t, i, n),
					o = r.getHashByState(a),
					l = r.getState(!1),
					c = r.getHashByState(l),
					u = r.getHash(),
					d = r.expectedStateId == a.id;
				r.storeState(a);
				r.expectedStateId = a.id;
				r.recycleState(a);
				r.setTitle(a);
				if (o === c) {
					r.busy(!1);
					return !1
				}
				r.saveState(a);
				d || r.Adapter.trigger(e, "statechange");
				r.isHashEqual(o, u) || r.isHashEqual(o, r.getShortUrl(r.getLocationHref())) || r.setHash(o, !1);
				r.busy(!1);
				return !0
			};
			r.replaceState = function (t, i, n, s) {
				n = encodeURI(n).replace(/%25/g, "%");
				if (r.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
				if (s !== !1 && r.busy()) {
					r.pushQueue({
						scope: r,
						callback: r.replaceState,
						args: arguments,
						queue: s
					});
					return !1
				}
				r.busy(!0);
				var a = r.createStateObject(t, i, n),
					o = r.getHashByState(a),
					l = r.getState(!1),
					c = r.getHashByState(l),
					u = r.getStateByIndex(-2);
				r.discardState(l, a, u);
				if (o === c) {
					r.storeState(a);
					r.expectedStateId = a.id;
					r.recycleState(a);
					r.setTitle(a);
					r.saveState(a);
					r.Adapter.trigger(e, "statechange");
					r.busy(!1)
				} else r.pushState(a.data, a.title, a.url, !1);
				return !0
			}
		}
		r.emulated.pushState && r.getHash() && !r.emulated.hashChange && r.Adapter.onDomLoad(function () {
			r.Adapter.trigger(e, "hashchange")
		})
	};
	"undefined" != typeof r.init && r.init()
}(window);
! function (e, t) {
	var i = e.console || t,
		n = e.document,
		s = e.navigator,
		r = e.sessionStorage || !1,
		a = e.setTimeout,
		o = e.clearTimeout,
		l = e.setInterval,
		c = e.clearInterval,
		u = e.JSON,
		d = e.alert,
		h = e.History = e.History || {},
		p = e.history;
	try {
		r.setItem("TEST", "1");
		r.removeItem("TEST")
	} catch (f) {
		r = !1
	}
	u.stringify = u.stringify || u.encode;
	u.parse = u.parse || u.decode;
	if ("undefined" != typeof h.init) throw new Error("History.js Core has already been loaded...");
	h.init = function () {
		if ("undefined" == typeof h.Adapter) return !1;
		"undefined" != typeof h.initCore && h.initCore();
		"undefined" != typeof h.initHtml4 && h.initHtml4();
		return !0
	};
	h.initCore = function () {
		if ("undefined" != typeof h.initCore.initialized) return !1;
		h.initCore.initialized = !0;
		h.options = h.options || {};
		h.options.hashChangeInterval = h.options.hashChangeInterval || 100;
		h.options.safariPollInterval = h.options.safariPollInterval || 500;
		h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500;
		h.options.disableSuid = h.options.disableSuid || !1;
		h.options.storeInterval = h.options.storeInterval || 1e3;
		h.options.busyDelay = h.options.busyDelay || 250;
		h.options.debug = h.options.debug || !1;
		h.options.initialTitle = h.options.initialTitle || n.title;
		h.options.html4Mode = h.options.html4Mode || !1;
		h.options.delayInit = h.options.delayInit || !1;
		h.intervalList = [];
		h.clearAllIntervals = function () {
			var e, t = h.intervalList;
			if ("undefined" != typeof t && null !== t) {
				for (e = 0; e < t.length; e++) c(t[e]);
				h.intervalList = null
			}
		};
		h.debug = function () {
			h.options.debug && h.log.apply(h, arguments)
		};
		h.log = function () {
			var e, t, s, r, a, o = !("undefined" == typeof i || "undefined" == typeof i.log || "undefined" == typeof i.log.apply),
				l = n.getElementById("log");
			if (o) {
				r = Array.prototype.slice.call(arguments);
				e = r.shift();
				"undefined" != typeof i.debug ? i.debug.apply(i, [e, r]) : i.log.apply(i, [e, r])
			} else e = "\n" + arguments[0] + "\n";
			for (t = 1, s = arguments.length; s > t; ++t) {
				a = arguments[t];
				if ("object" == typeof a && "undefined" != typeof u) try {
					a = u.stringify(a)
				} catch (c) {}
				e += "\n" + a + "\n"
			}
			if (l) {
				l.value += e + "\n-----\n";
				l.scrollTop = l.scrollHeight - l.clientHeight
			} else o || d(e);
			return !0
		};
		h.getInternetExplorerMajorVersion = function () {
			var e = h.getInternetExplorerMajorVersion.cached = "undefined" != typeof h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function () {
				for (var e = 3, t = n.createElement("div"), i = t.getElementsByTagName("i");
					(t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && i[0];);
				return e > 4 ? e : !1
			}();
			return e
		};
		h.isInternetExplorer = function () {
			var e = h.isInternetExplorer.cached = "undefined" != typeof h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
			return e
		};
		h.emulated = h.options.html4Mode ? {
			pushState: !0,
			hashChange: !0
		} : {
			pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent))),
			hashChange: Boolean(!("onhashchange" in e || "onhashchange" in n) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
		};
		h.enabled = !h.emulated.pushState;
		h.bugs = {
			setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),
			safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),
			ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
			hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
		};
		h.isEmptyObject = function (e) {
			for (var t in e)
				if (e.hasOwnProperty(t)) return !1;
			return !0
		};
		h.cloneObject = function (e) {
			var t, i;
			if (e) {
				t = u.stringify(e);
				i = u.parse(t)
			} else i = {};
			return i
		};
		h.getRootUrl = function () {
			var e = n.location.protocol + "//" + (n.location.hostname || n.location.host);
			n.location.port && (e += ":" + n.location.port);
			e += "/";
			return e
		};
		h.getBaseHref = function () {
			var e = n.getElementsByTagName("base"),
				t = null,
				i = "";
			if (1 === e.length) {
				t = e[0];
				i = t.href.replace(/[^\/]+$/, "")
			}
			i = i.replace(/\/+$/, "");
			i && (i += "/");
			return i
		};
		h.getBaseUrl = function () {
			var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
			return e
		};
		h.getPageUrl = function () {
			var e, t = h.getState(!1, !1),
				i = (t || {}).url || h.getLocationHref();
			e = i.replace(/\/+$/, "").replace(/[^\/]+$/, function (e) {
				return /\./.test(e) ? e : e + "/"
			});
			return e
		};
		h.getBasePageUrl = function () {
			var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e) {
				return /[^\/]$/.test(e) ? "" : e
			}).replace(/\/+$/, "") + "/";
			return e
		};
		h.getFullUrl = function (e, t) {
			var i = e,
				n = e.substring(0, 1);
			t = "undefined" == typeof t ? !0 : t;
			/[a-z]+\:\/\//.test(e) || (i = "/" === n ? h.getRootUrl() + e.replace(/^\/+/, "") : "#" === n ? h.getPageUrl().replace(/#.*/, "") + e : "?" === n ? h.getPageUrl().replace(/[\?#].*/, "") + e : t ? h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + e.replace(/^(\.\/)+/, ""));
			return i.replace(/\#$/, "")
		};
		h.getShortUrl = function (e) {
			var t = e,
				i = h.getBaseUrl(),
				n = h.getRootUrl();
			h.emulated.pushState && (t = t.replace(i, ""));
			t = t.replace(n, "/");
			h.isTraditionalAnchor(t) && (t = "./" + t);
			t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "");
			return t
		};
		h.getLocationHref = function (e) {
			e = e || n;
			return e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
		};
		h.store = {};
		h.idToState = h.idToState || {};
		h.stateToId = h.stateToId || {};
		h.urlToId = h.urlToId || {};
		h.storedStates = h.storedStates || [];
		h.savedStates = h.savedStates || [];
		h.normalizeStore = function () {
			h.store.idToState = h.store.idToState || {};
			h.store.urlToId = h.store.urlToId || {};
			h.store.stateToId = h.store.stateToId || {}
		};
		h.getState = function (e, t) {
			"undefined" == typeof e && (e = !0);
			"undefined" == typeof t && (t = !0);
			var i = h.getLastSavedState();
			!i && t && (i = h.createStateObject());
			if (e) {
				i = h.cloneObject(i);
				i.url = i.cleanUrl || i.url
			}
			return i
		};
		h.getIdByState = function (e) {
			var t, i = h.extractId(e.url);
			if (!i) {
				t = h.getStateString(e);
				if ("undefined" != typeof h.stateToId[t]) i = h.stateToId[t];
				else if ("undefined" != typeof h.store.stateToId[t]) i = h.store.stateToId[t];
				else {
					for (;;) {
						i = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
						if ("undefined" == typeof h.idToState[i] && "undefined" == typeof h.store.idToState[i]) break
					}
					h.stateToId[t] = i;
					h.idToState[i] = e
				}
			}
			return i
		};
		h.normalizeState = function (e) {
			var t, i;
			e && "object" == typeof e || (e = {});
			if ("undefined" != typeof e.normalized) return e;
			e.data && "object" == typeof e.data || (e.data = {});
			t = {};
			t.normalized = !0;
			t.title = e.title || "";
			t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref());
			t.hash = h.getShortUrl(t.url);
			t.data = h.cloneObject(e.data);
			t.id = h.getIdByState(t);
			t.cleanUrl = t.url.replace(/\??\&_suid.*/, "");
			t.url = t.cleanUrl;
			i = !h.isEmptyObject(t.data);
			if ((t.title || i) && h.options.disableSuid !== !0) {
				t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, "");
				/\?/.test(t.hash) || (t.hash += "?");
				t.hash += "&_suid=" + t.id
			}
			t.hashedUrl = h.getFullUrl(t.hash);
			(h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl);
			return t
		};
		h.createStateObject = function (e, t, i) {
			var n = {
				data: e,
				title: t,
				url: i
			};
			n = h.normalizeState(n);
			return n
		};
		h.getStateById = function (e) {
			e = String(e);
			var i = h.idToState[e] || h.store.idToState[e] || t;
			return i
		};
		h.getStateString = function (e) {
			var t, i, n;
			t = h.normalizeState(e);
			i = {
				data: t.data,
				title: e.title,
				url: e.url
			};
			n = u.stringify(i);
			return n
		};
		h.getStateId = function (e) {
			var t, i;
			t = h.normalizeState(e);
			i = t.id;
			return i
		};
		h.getHashByState = function (e) {
			var t, i;
			t = h.normalizeState(e);
			i = t.hash;
			return i
		};
		h.extractId = function (e) {
			var t, i, n, s;
			s = -1 != e.indexOf("#") ? e.split("#")[0] : e;
			i = /(.*)\&_suid=([0-9]+)$/.exec(s);
			n = i ? i[1] || e : e;
			t = i ? String(i[2] || "") : "";
			return t || !1
		};
		h.isTraditionalAnchor = function (e) {
			var t = !/[\/\?\.]/.test(e);
			return t
		};
		h.extractState = function (e, t) {
			var i, n, s = null;
			t = t || !1;
			i = h.extractId(e);
			i && (s = h.getStateById(i));
			if (!s) {
				n = h.getFullUrl(e);
				i = h.getIdByUrl(n) || !1;
				i && (s = h.getStateById(i));
				s || !t || h.isTraditionalAnchor(e) || (s = h.createStateObject(null, null, n))
			}
			return s
		};
		h.getIdByUrl = function (e) {
			var i = h.urlToId[e] || h.store.urlToId[e] || t;
			return i
		};
		h.getLastSavedState = function () {
			return h.savedStates[h.savedStates.length - 1] || t
		};
		h.getLastStoredState = function () {
			return h.storedStates[h.storedStates.length - 1] || t
		};
		h.hasUrlDuplicate = function (e) {
			var t, i = !1;
			t = h.extractState(e.url);
			i = t && t.id !== e.id;
			return i
		};
		h.storeState = function (e) {
			h.urlToId[e.url] = e.id;
			h.storedStates.push(h.cloneObject(e));
			return e
		};
		h.isLastSavedState = function (e) {
			var t, i, n, s = !1;
			if (h.savedStates.length) {
				t = e.id;
				i = h.getLastSavedState();
				n = i.id;
				s = t === n
			}
			return s
		};
		h.saveState = function (e) {
			if (h.isLastSavedState(e)) return !1;
			h.savedStates.push(h.cloneObject(e));
			return !0
		};
		h.getStateByIndex = function (e) {
			var t = null;
			t = "undefined" == typeof e ? h.savedStates[h.savedStates.length - 1] : 0 > e ? h.savedStates[h.savedStates.length + e] : h.savedStates[e];
			return t
		};
		h.getCurrentIndex = function () {
			var e = null;
			e = h.savedStates.length < 1 ? 0 : h.savedStates.length - 1;
			return e
		};
		h.getHash = function (e) {
			var t, i = h.getLocationHref(e);
			t = h.getHashByUrl(i);
			return t
		};
		h.unescapeHash = function (e) {
			var t = h.normalizeHash(e);
			t = decodeURIComponent(t);
			return t
		};
		h.normalizeHash = function (e) {
			var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
			return t
		};
		h.setHash = function (e, t) {
			var i, s;
			if (t !== !1 && h.busy()) {
				h.pushQueue({
					scope: h,
					callback: h.setHash,
					args: arguments,
					queue: t
				});
				return !1
			}
			h.busy(!0);
			i = h.extractState(e, !0);
			if (i && !h.emulated.pushState) h.pushState(i.data, i.title, i.url, !1);
			else if (h.getHash() !== e)
				if (h.bugs.setHash) {
					s = h.getPageUrl();
					h.pushState(null, null, s + "#" + e, !1)
				} else n.location.hash = e;
			return h
		};
		h.escapeHash = function (t) {
			var i = h.normalizeHash(t);
			i = e.encodeURIComponent(i);
			h.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?"));
			return i
		};
		h.getHashByUrl = function (e) {
			var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
			t = h.unescapeHash(t);
			return t
		};
		h.setTitle = function (e) {
			var t, i = e.title;
			if (!i) {
				t = h.getStateByIndex(0);
				t && t.url === e.url && (i = t.title || h.options.initialTitle)
			}
			try {
				n.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
			} catch (s) {}
			n.title = i;
			return h
		};
		h.queues = [];
		h.busy = function (e) {
			"undefined" != typeof e ? h.busy.flag = e : "undefined" == typeof h.busy.flag && (h.busy.flag = !1);
			if (!h.busy.flag) {
				o(h.busy.timeout);
				var t = function () {
					var e, i, n;
					if (!h.busy.flag)
						for (e = h.queues.length - 1; e >= 0; --e) {
							i = h.queues[e];
							if (0 !== i.length) {
								n = i.shift();
								h.fireQueueItem(n);
								h.busy.timeout = a(t, h.options.busyDelay)
							}
						}
				};
				h.busy.timeout = a(t, h.options.busyDelay)
			}
			return h.busy.flag
		};
		h.busy.flag = !1;
		h.fireQueueItem = function (e) {
			return e.callback.apply(e.scope || h, e.args || [])
		};
		h.pushQueue = function (e) {
			h.queues[e.queue || 0] = h.queues[e.queue || 0] || [];
			h.queues[e.queue || 0].push(e);
			return h
		};
		h.queue = function (e, t) {
			"function" == typeof e && (e = {
				callback: e
			});
			"undefined" != typeof t && (e.queue = t);
			h.busy() ? h.pushQueue(e) : h.fireQueueItem(e);
			return h
		};
		h.clearQueue = function () {
			h.busy.flag = !1;
			h.queues = [];
			return h
		};
		h.stateChanged = !1;
		h.doubleChecker = !1;
		h.doubleCheckComplete = function () {
			h.stateChanged = !0;
			h.doubleCheckClear();
			return h
		};
		h.doubleCheckClear = function () {
			if (h.doubleChecker) {
				o(h.doubleChecker);
				h.doubleChecker = !1
			}
			return h
		};
		h.doubleCheck = function (e) {
			h.stateChanged = !1;
			h.doubleCheckClear();
			h.bugs.ieDoubleCheck && (h.doubleChecker = a(function () {
				h.doubleCheckClear();
				h.stateChanged || e();
				return !0
			}, h.options.doubleCheckInterval));
			return h
		};
		h.safariStatePoll = function () {
			var t, i = h.extractState(h.getLocationHref());
			if (!h.isLastSavedState(i)) {
				t = i;
				t || (t = h.createStateObject());
				h.Adapter.trigger(e, "popstate");
				return h
			}
		};
		h.back = function (e) {
			if (e !== !1 && h.busy()) {
				h.pushQueue({
					scope: h,
					callback: h.back,
					args: arguments,
					queue: e
				});
				return !1
			}
			h.busy(!0);
			h.doubleCheck(function () {
				h.back(!1)
			});
			p.go(-1);
			return !0
		};
		h.forward = function (e) {
			if (e !== !1 && h.busy()) {
				h.pushQueue({
					scope: h,
					callback: h.forward,
					args: arguments,
					queue: e
				});
				return !1
			}
			h.busy(!0);
			h.doubleCheck(function () {
				h.forward(!1)
			});
			p.go(1);
			return !0
		};
		h.go = function (e, t) {
			var i;
			if (e > 0)
				for (i = 1; e >= i; ++i) h.forward(t);
			else {
				if (!(0 > e)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
				for (i = -1; i >= e; --i) h.back(t)
			}
			return h
		};
		if (h.emulated.pushState) {
			var f = function () {};
			h.pushState = h.pushState || f;
			h.replaceState = h.replaceState || f
		} else {
			h.onPopState = function (t, i) {
				var n, s, r = !1,
					a = !1;
				h.doubleCheckComplete();
				n = h.getHash();
				if (n) {
					s = h.extractState(n || h.getLocationHref(), !0);
					if (s) h.replaceState(s.data, s.title, s.url, !1);
					else {
						h.Adapter.trigger(e, "anchorchange");
						h.busy(!1)
					}
					h.expectedStateId = !1;
					return !1
				}
				r = h.Adapter.extractEventData("state", t, i) || !1;
				a = r ? h.getStateById(r) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref());
				a || (a = h.createStateObject(null, null, h.getLocationHref()));
				h.expectedStateId = !1;
				if (h.isLastSavedState(a)) {
					h.busy(!1);
					return !1
				}
				h.storeState(a);
				h.saveState(a);
				h.setTitle(a);
				h.Adapter.trigger(e, "statechange");
				h.busy(!1);
				return !0
			};
			h.Adapter.bind(e, "popstate", h.onPopState);
			h.pushState = function (t, i, n, s) {
				if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
				if (s !== !1 && h.busy()) {
					h.pushQueue({
						scope: h,
						callback: h.pushState,
						args: arguments,
						queue: s
					});
					return !1
				}
				h.busy(!0);
				var r = h.createStateObject(t, i, n);
				if (h.isLastSavedState(r)) h.busy(!1);
				else {
					h.storeState(r);
					h.expectedStateId = r.id;
					p.pushState(r.id, r.title, r.url);
					h.Adapter.trigger(e, "popstate")
				}
				return !0
			};
			h.replaceState = function (t, i, n, s) {
				if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
				if (s !== !1 && h.busy()) {
					h.pushQueue({
						scope: h,
						callback: h.replaceState,
						args: arguments,
						queue: s
					});
					return !1
				}
				h.busy(!0);
				var r = h.createStateObject(t, i, n);
				if (h.isLastSavedState(r)) h.busy(!1);
				else {
					h.storeState(r);
					h.expectedStateId = r.id;
					p.replaceState(r.id, r.title, r.url);
					h.Adapter.trigger(e, "popstate")
				}
				return !0
			}
		} if (r) {
			try {
				h.store = u.parse(r.getItem("History.store")) || {}
			} catch (v) {
				h.store = {}
			}
			h.normalizeStore()
		} else {
			h.store = {};
			h.normalizeStore()
		}
		h.Adapter.bind(e, "unload", h.clearAllIntervals);
		h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0)));
		if (r) {
			h.onUnload = function () {
				var e, t, i;
				try {
					e = u.parse(r.getItem("History.store")) || {}
				} catch (n) {
					e = {}
				}
				e.idToState = e.idToState || {};
				e.urlToId = e.urlToId || {};
				e.stateToId = e.stateToId || {};
				for (t in h.idToState) h.idToState.hasOwnProperty(t) && (e.idToState[t] = h.idToState[t]);
				for (t in h.urlToId) h.urlToId.hasOwnProperty(t) && (e.urlToId[t] = h.urlToId[t]);
				for (t in h.stateToId) h.stateToId.hasOwnProperty(t) && (e.stateToId[t] = h.stateToId[t]);
				h.store = e;
				h.normalizeStore();
				i = u.stringify(e);
				try {
					r.setItem("History.store", i)
				} catch (s) {
					if (s.code !== DOMException.QUOTA_EXCEEDED_ERR) throw s;
					if (r.length) {
						r.removeItem("History.store");
						r.setItem("History.store", i)
					}
				}
			};
			h.intervalList.push(l(h.onUnload, h.options.storeInterval));
			h.Adapter.bind(e, "beforeunload", h.onUnload);
			h.Adapter.bind(e, "unload", h.onUnload)
		}
		if (!h.emulated.pushState) {
			h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll, h.options.safariPollInterval));
			if ("Apple Computer, Inc." === s.vendor || "Mozilla" === (s.appCodeName || "")) {
				h.Adapter.bind(e, "hashchange", function () {
					h.Adapter.trigger(e, "popstate")
				});
				h.getHash() && h.Adapter.onDomLoad(function () {
					h.Adapter.trigger(e, "hashchange")
				})
			}
		}
	};
	h.options && h.options.delayInit || h.init()
}(window);
define("History", function (e) {
	return function () {
		var t;
		return t || e.History
	}
}(this));
define("modules/router/video_router", ["jquery", "lodash", "../../collections/list_collection", "svtlib-messagechannel"], function (e, t, i, n) {
	function s(e) {
		return !!e.match(/^\/(?:video|klipp)\//)
	}

	function r(e) {
		e && -1 === e.indexOf("| SVT Flow") && (e += " | SVT Flow");
		return e
	}
	var a;
	n.subscribe("/videocontext/update", function (e) {
		e && e.activeList && (a = new i(e.activeList))
	});
	return {
		accept: function (e) {
			return s(e)
		},
		route: function (e) {
			var t = e.replace(/^\/(?:video|klipp)\/(\d+?)\/.*/, "$1");
			if (!t) return null;
			t = Number(t);
			n.publish("/modules/flowplayer/showVideo", t);
			var i = a.getData(t);
			return {
				title: r(i && i.data ? i.data.fulltitle || i.title : null)
			}
		}
	}
});
define("singletons/router", ["jquery", "Class", "History", "../modules/router/video_router", "./instances", "svtlib-messagechannel"], function (e, t, i, n, s, r) {
	function a(e) {
		var t = null;
		if (!e) return !1;
		for (var i = 0; i < u.length; i++) {
			var n = u[i].router;
			if (n.accept(e)) {
				t = n.route(e) || {};
				break
			}
		}
		return t
	}

	function o(e, t) {
		return e.priority - t.priority
	}

	function l(e, t) {
		var n = a(e);
		if (n) {
			p = !0;
			var s = t || n.title || document.title;
			if (0 === h) i.pushState({
				index: h,
				url: e,
				manual: !0
			}, s, e);
			else try {
				i.replaceState({
					index: h,
					url: e,
					replace: !0
				}, s, e)
			} catch (r) {}
			p = !1;
			return !0
		}
		return !1
	}
	var c = !1,
		u = [{
			priority: 0,
			router: n
		}],
		d = i.getState(),
		h = 0,
		p = !1,
		f = t.extend({
			init: function () {
				u.sort(o)
			},
			start: function () {
				if (!c) {
					e(window).on("statechange", function () {
						var e = i.getState();
						void 0 === e.data.index ? window.location.reload() : e.data.index < h ? window.location = d.url : p || (window.location = e.url);
						e.data.replace && i.discardState(e);
						h++
					});
					c = !0
				}
			},
			register: function (e, t) {
				if ("function" != typeof e.accept || "function" != typeof e.route) throw new Error("Incorrect config: pattern and callback must be defined");
				t = void 0 === t ? 10 : t;
				u.push({
					priority: t,
					router: e
				});
				u.sort(o)
			},
			route: function (e) {
				return c ? l(e) : !1
			},
			back: function () {
				return c ? i.back() : !1
			},
			setFirstState: function (e, t) {
				d.title = e;
				d.url = t
			}
		});
	r.subscribe("/router/clear", function (e) {
		p = !0;
		e && "push" === e ? i.pushState({
			index: h,
			url: d.url,
			manual: !0
		}, d.title, d.url) : i.replaceState({
			index: h,
			replace: !0
		}, d.title, d.url);
		p = !1;
		r.publish("/router/reset")
	});
	r.subscribe("/router/route", function (e) {
		s.get("Router").route(e)
	});
	return s.get("Router", f)
});
define("utils/console", [], function () {
	! function () {
		for (var e, t = function () {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = i.length, s = window.console = window.console || {}; n--;) {
			e = i[n];
			s[e] || (s[e] = t)
		}
	}()
});
define("app", ["jquery", "jqote2", "jquery-cookie", "slick-carousel", "play/utils", "play/info", "modules/search/search", "play/alphabetic", "play/statistics", "modules/slidablelist/slidablelist", "modules/schedulecarousel/schedulecarousel", "modules/splash/splash-minimal", "svtlib-playerplugins", "svtlib-svtplayer", "svtlib-messagechannel", "modules/flowplayer/flowplayer", "modules/menu/menu", "collections/list_collection", "singletons/user_statistics", "singletons/instances", "utils/handlebars_helper", "utils/fullscreen", "singletons/router", "singletons/video_context", "utils/console"], function (e, t, i, n, s, r, a, o, l, c, u, d, h, p, f, v, y, m, g, _, b, w) {
	var x = e("html"),
		C = x.hasClass("ieLte8");
	b.init();
	window.svt = window.svt || {};
	svt.play = svt.play || {};
	svt.play.$body = svt.play.$body || e("body");
	svt.play.isIELte7 = x.hasClass("ieLte7");
	var S = _.get("Router"),
		k = [];
	C || e(".flow_js-schedule-list").each(function () {
		u.make(e(this))
	});
	e(".flow_js-list").each(function () {
		new r(this);
		k.push(new c(e(this)))
	});
	S.start();
	v.make(e(".flow_player"));
	s.orientationZoomFix();
	s.selectInputOnFocus();
	s.removePlaceholderOnFocus();
	s.hideAddressBar();
	svtplayer.SVTPlayer.PLAYER_SWF = "/public/swf/video/svtplayer-2014.19.swf";
	svtplayer.SVTPlayer.COPY_TO_CLIPBOARD_SWF = "/public/swf/video/copytoclipboard.swf";
	var I = new a(e(".flow_js-global-search"), {
		autoComplete: !0
	});
	e(document).on("click.globalSearch", ".flow_js-search-toggle", function (e) {
		e.preventDefault();
		f.publish("/search/toggle", I.id)
	});
	y.make(e(".flow_menu-global").first(), {
		searchId: I.id
	});
	new o;
	l.init();
	svt.play.$body.on("click", ".flow_js__fullscreen-button", function (e) {
		e.preventDefault();
		w.isFullscreen() ? w.cancelFullscreen() : w.requestFullscreen()
	});
	d.make(e("#flow_js-splash"));
	var T;
	e(window).bind("resize", function () {
		T && clearTimeout(T);
		T = setTimeout(function () {
			for (var e = 0; e < k.length; ++e) k[e].resize()
		}, 100)
	});
	e(window).on("load", function () {
		for (var e = 0; e < k.length; ++e) k[e].resize()
	})
});
require(["./app"]);