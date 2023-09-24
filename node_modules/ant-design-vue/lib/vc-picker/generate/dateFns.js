"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dateFns = require("date-fns");
var Locale = _interopRequireWildcard(require("date-fns/locale"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const dealLocal = str => {
  return str.replace(/_/g, '');
};
const localeParse = format => {
  return format.replace(/Y/g, 'y').replace(/D/g, 'd').replace(/gggg/, 'yyyy').replace(/g/g, 'G').replace(/([Ww])o/g, 'wo');
};
const generateConfig = {
  // get
  getNow: () => new Date(),
  getFixedDate: string => new Date(string),
  getEndDate: date => (0, _dateFns.endOfMonth)(date),
  getWeekDay: date => (0, _dateFns.getDay)(date),
  getYear: date => (0, _dateFns.getYear)(date),
  getMonth: date => (0, _dateFns.getMonth)(date),
  getDate: date => (0, _dateFns.getDate)(date),
  getHour: date => (0, _dateFns.getHours)(date),
  getMinute: date => (0, _dateFns.getMinutes)(date),
  getSecond: date => (0, _dateFns.getSeconds)(date),
  // set
  addYear: (date, diff) => (0, _dateFns.addYears)(date, diff),
  addMonth: (date, diff) => (0, _dateFns.addMonths)(date, diff),
  addDate: (date, diff) => (0, _dateFns.addDays)(date, diff),
  setYear: (date, year) => (0, _dateFns.setYear)(date, year),
  setMonth: (date, month) => (0, _dateFns.setMonth)(date, month),
  setDate: (date, num) => (0, _dateFns.setDate)(date, num),
  setHour: (date, hour) => (0, _dateFns.setHours)(date, hour),
  setMinute: (date, minute) => (0, _dateFns.setMinutes)(date, minute),
  setSecond: (date, second) => (0, _dateFns.setSeconds)(date, second),
  // Compare
  isAfter: (date1, date2) => (0, _dateFns.isAfter)(date1, date2),
  isValidate: date => (0, _dateFns.isValid)(date),
  locale: {
    getWeekFirstDay: locale => {
      const clone = Locale[dealLocal(locale)];
      return clone.options.weekStartsOn;
    },
    getWeekFirstDate: (locale, date) => {
      return (0, _dateFns.startOfWeek)(date, {
        locale: Locale[dealLocal(locale)]
      });
    },
    getWeek: (locale, date) => {
      return (0, _dateFns.getWeek)(date, {
        locale: Locale[dealLocal(locale)]
      });
    },
    getShortWeekDays: locale => {
      const clone = Locale[dealLocal(locale)];
      return Array.from({
        length: 7
      }).map((_, i) => clone.localize.day(i, {
        width: 'short'
      }));
    },
    getShortMonths: locale => {
      const clone = Locale[dealLocal(locale)];
      return Array.from({
        length: 12
      }).map((_, i) => clone.localize.month(i, {
        width: 'abbreviated'
      }));
    },
    format: (locale, date, format) => {
      if (!(0, _dateFns.isValid)(date)) {
        return null;
      }
      return (0, _dateFns.format)(date, localeParse(format), {
        locale: Locale[dealLocal(locale)]
      });
    },
    parse: (locale, text, formats) => {
      for (let i = 0; i < formats.length; i += 1) {
        const format = localeParse(formats[i]);
        const formatText = text;
        const date = (0, _dateFns.parse)(formatText, format, new Date(), {
          locale: Locale[dealLocal(locale)]
        });
        if ((0, _dateFns.isValid)(date) && formatText.length === format.length && (0, _dateFns.isMatch)(formatText, format)) {
          return date;
        }
      }
      return null;
    }
  },
  toDate: (value, valueFormat) => {
    if (Array.isArray(value)) {
      return value.map(val => typeof val === 'string' && val ? (0, _dateFns.parse)(val, valueFormat, new Date()) : val || null);
    } else {
      return typeof value === 'string' && value ? (0, _dateFns.parse)(value, valueFormat, new Date()) : value || null;
    }
  },
  toString: (value, valueFormat) => {
    if (Array.isArray(value)) {
      return value.map(val => (0, _dateFns.isDate)(val) ? (0, _dateFns.format)(val, valueFormat) : val);
    } else {
      return (0, _dateFns.isDate)(value) ? (0, _dateFns.format)(value, valueFormat) : value;
    }
  }
};
var _default = generateConfig;
exports.default = _default;