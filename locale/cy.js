(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue2-datepicker')) :
	typeof define === 'function' && define.amd ? define(['vue2-datepicker'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.DatePicker = global.DatePicker || {}, global.DatePicker.lang = global.DatePicker.lang || {}, global.DatePicker.lang.cy = factory(global.DatePicker)));
}(this, (function (DatePicker) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var cy = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	var locale = {
	  months: ['Ionawr', 'Chwefror', 'Mawrth', 'Ebrill', 'Mai', 'Mehefin', 'Gorffennaf', 'Awst', 'Medi', 'Hydref', 'Tachwedd', 'Rhagfyr'],
	  monthsShort: ['Ion', 'Chwe', 'Maw', 'Ebr', 'Mai', 'Meh', 'Gor', 'Aws', 'Med', 'Hyd', 'Tach', 'Rhag'],
	  weekdays: ['Dydd Sul', 'Dydd Llun', 'Dydd Mawrth', 'Dydd Mercher', 'Dydd Iau', 'Dydd Gwener', 'Dydd Sadwrn'],
	  weekdaysShort: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
	  weekdaysMin: ['Su', 'Ll', 'Ma', 'Me', 'Ia', 'Gw', 'Sa'],
	  firstDayOfWeek: 0,
	  firstWeekContainsDate: 1
	};
	var _default = locale;
	exports["default"] = _default;
	module.exports = exports.default;
	});

	var cy$1 = unwrapExports(cy);

	var lang = {
	  formatLocale: cy$1,
	  yearFormat: 'YYYY',
	  monthFormat: 'MMM',
	  monthBeforeYear: true
	};
	DatePicker__default['default'].locale('cy', lang);

	return lang;

})));
