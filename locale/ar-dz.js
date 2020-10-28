(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue2-datepicker')) :
	typeof define === 'function' && define.amd ? define(['vue2-datepicker'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.DatePicker = global.DatePicker || {}, global.DatePicker.lang = global.DatePicker.lang || {}, global.DatePicker.lang.arDZ = factory(global.DatePicker)));
}(this, (function (DatePicker) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var arDz = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	var locale = {
	  months: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
	  monthsShort: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
	  weekdays: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
	  weekdaysShort: ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'],
	  weekdaysMin: ['أح', 'إث', 'ثلا', 'أر', 'خم', 'جم', 'سب'],
	  firstDayOfWeek: 0,
	  firstWeekContainsDate: 4
	};
	var _default = locale;
	exports["default"] = _default;
	module.exports = exports.default;
	});

	var arDZ = unwrapExports(arDz);

	var lang = {
	  formatLocale: arDZ,
	  yearFormat: 'YYYY',
	  monthFormat: 'MMM',
	  monthBeforeYear: true
	};
	DatePicker__default['default'].locale('ar-dz', lang);

	return lang;

})));
