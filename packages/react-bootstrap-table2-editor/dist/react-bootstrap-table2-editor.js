(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Editor"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Editor"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIME_TO_CLOSE_MESSAGE = exports.TIME_TO_CLOSE_MESSAGE = 3000;
var DELAY_FOR_DBCLICK = exports.DELAY_FOR_DBCLICK = 200;
var CLICK_TO_CELL_EDIT = exports.CLICK_TO_CELL_EDIT = 'click';
var DBCLICK_TO_CELL_EDIT = exports.DBCLICK_TO_CELL_EDIT = 'dbclick';

var EDITTYPE = exports.EDITTYPE = {
  TEXT: 'text',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  CHECKBOX: 'checkbox',
  DATE: 'date'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = undefined;

var _wrapper = __webpack_require__(5);

var _wrapper2 = _interopRequireDefault(_wrapper);

var _editingCell = __webpack_require__(10);

var _editingCell2 = _interopRequireDefault(_editingCell);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    wrapperFactory: _wrapper2.default,
    editingCellFactory: _editingCell2.default,
    CLICK_TO_CELL_EDIT: _const.CLICK_TO_CELL_EDIT,
    DBCLICK_TO_CELL_EDIT: _const.DBCLICK_TO_CELL_EDIT,
    DELAY_FOR_DBCLICK: _const.DELAY_FOR_DBCLICK,
    options: options
  };
};

var Type = exports.Type = _const.EDITTYPE;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base, _ref) {
  var _class, _temp;

  var _ = _ref._,
      remoteResolver = _ref.remoteResolver;

  var EditingCell = void 0;
  return _temp = _class = function (_remoteResolver) {
    _inherits(CellEditWrapper, _remoteResolver);

    function CellEditWrapper(props) {
      _classCallCheck(this, CellEditWrapper);

      var _this = _possibleConstructorReturn(this, (CellEditWrapper.__proto__ || Object.getPrototypeOf(CellEditWrapper)).call(this, props));

      EditingCell = props.cellEdit.editingCellFactory(_);
      _this.startEditing = _this.startEditing.bind(_this);
      _this.escapeEditing = _this.escapeEditing.bind(_this);
      _this.completeEditing = _this.completeEditing.bind(_this);
      _this.handleCellUpdate = _this.handleCellUpdate.bind(_this);
      _this.state = {
        ridx: null,
        cidx: null,
        message: null,
        isDataChanged: false
      };
      return _this;
    }

    _createClass(CellEditWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.cellEdit && this.isRemoteCellEdit()) {
          if (nextProps.cellEdit.options.errorMessage) {
            this.setState(function () {
              return {
                isDataChanged: false,
                message: nextProps.cellEdit.options.errorMessage
              };
            });
          } else {
            this.setState(function () {
              return {
                isDataChanged: true
              };
            });
            this.escapeEditing();
          }
        } else {
          this.setState(function () {
            return {
              isDataChanged: false
            };
          });
        }
      }
    }, {
      key: 'handleCellUpdate',
      value: function handleCellUpdate(row, column, newValue) {
        var _props = this.props,
            keyField = _props.keyField,
            cellEdit = _props.cellEdit,
            store = _props.store;
        var _cellEdit$options = cellEdit.options,
            beforeSaveCell = _cellEdit$options.beforeSaveCell,
            afterSaveCell = _cellEdit$options.afterSaveCell;

        var oldValue = _.get(row, column.dataField);
        var rowId = _.get(row, keyField);
        if (_.isFunction(beforeSaveCell)) beforeSaveCell(oldValue, newValue, row, column);
        if (this.isRemoteCellEdit()) {
          this.handleCellChange(rowId, column.dataField, newValue);
        } else {
          store.edit(rowId, column.dataField, newValue);
          if (_.isFunction(afterSaveCell)) afterSaveCell(oldValue, newValue, row, column);
          this.completeEditing();
        }
      }
    }, {
      key: 'completeEditing',
      value: function completeEditing() {
        this.setState(function () {
          return {
            ridx: null,
            cidx: null,
            message: null,
            isDataChanged: true
          };
        });
      }
    }, {
      key: 'startEditing',
      value: function startEditing(ridx, cidx) {
        var _this2 = this;

        var editing = function editing() {
          _this2.setState(function () {
            return {
              ridx: ridx,
              cidx: cidx,
              isDataChanged: false
            };
          });
        };

        var selectRow = this.props.selectRow;

        if (!selectRow || selectRow.clickToEdit || !selectRow.clickToSelect) editing();
      }
    }, {
      key: 'escapeEditing',
      value: function escapeEditing() {
        this.setState(function () {
          return {
            ridx: null,
            cidx: null
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            isDataChanged = _state.isDataChanged,
            stateRest = _objectWithoutProperties(_state, ['isDataChanged']);

        var _props$cellEdit = this.props.cellEdit,
            _props$cellEdit$optio = _props$cellEdit.options,
            nonEditableRows = _props$cellEdit$optio.nonEditableRows,
            errorMessage = _props$cellEdit$optio.errorMessage,
            optionsRest = _objectWithoutProperties(_props$cellEdit$optio, ['nonEditableRows', 'errorMessage']),
            editingCellFactory = _props$cellEdit.editingCellFactory,
            cellEditRest = _objectWithoutProperties(_props$cellEdit, ['options', 'editingCellFactory']);

        var newCellEdit = _extends({}, optionsRest, cellEditRest, stateRest, {
          EditingCell: EditingCell,
          nonEditableRows: _.isDefined(nonEditableRows) ? nonEditableRows() : [],
          onStart: this.startEditing,
          onEscape: this.escapeEditing,
          onUpdate: this.handleCellUpdate
        });

        return _react2.default.createElement(Base, _extends({}, this.props, {
          data: this.props.store.data,
          isDataChanged: isDataChanged,
          cellEdit: newCellEdit
        }));
      }
    }]);

    return CellEditWrapper;
  }(remoteResolver(_react.Component)), _class.propTypes = {
    options: _propTypes2.default.shape({
      mode: _propTypes2.default.oneOf([_const.CLICK_TO_CELL_EDIT, _const.DBCLICK_TO_CELL_EDIT]).isRequired,
      onErrorMessageDisappear: _propTypes2.default.func,
      blurToSave: _propTypes2.default.bool,
      beforeSaveCell: _propTypes2.default.func,
      afterSaveCell: _propTypes2.default.func,
      nonEditableRows: _propTypes2.default.func,
      timeToCloseMessage: _propTypes2.default.number,
      errorMessage: _propTypes2.default.string
    })
  }, _temp;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdownEditor = __webpack_require__(11);

var _dropdownEditor2 = _interopRequireDefault(_dropdownEditor);

var _textareaEditor = __webpack_require__(12);

var _textareaEditor2 = _interopRequireDefault(_textareaEditor);

var _checkboxEditor = __webpack_require__(13);

var _checkboxEditor2 = _interopRequireDefault(_checkboxEditor);

var _dateEditor = __webpack_require__(14);

var _dateEditor2 = _interopRequireDefault(_dateEditor);

var _textEditor = __webpack_require__(15);

var _textEditor2 = _interopRequireDefault(_textEditor);

var _editorIndicator = __webpack_require__(16);

var _editorIndicator2 = _interopRequireDefault(_editorIndicator);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint no-return-assign: 0 */
/* eslint class-methods-use-this: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */


exports.default = function (_) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(EditingCell, _Component);

    function EditingCell(props) {
      _classCallCheck(this, EditingCell);

      var _this = _possibleConstructorReturn(this, (EditingCell.__proto__ || Object.getPrototypeOf(EditingCell)).call(this, props));

      _this.indicatorTimer = null;
      _this.clearTimer = _this.clearTimer.bind(_this);
      _this.handleBlur = _this.handleBlur.bind(_this);
      _this.handleClick = _this.handleClick.bind(_this);
      _this.handleKeyDown = _this.handleKeyDown.bind(_this);
      _this.beforeComplete = _this.beforeComplete.bind(_this);
      _this.state = {
        invalidMessage: null
      };
      return _this;
    }

    _createClass(EditingCell, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref) {
        var message = _ref.message;

        if (_.isDefined(message)) {
          this.createTimer();
          this.setState(function () {
            return {
              invalidMessage: message
            };
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.clearTimer();
      }
    }, {
      key: 'clearTimer',
      value: function clearTimer() {
        if (this.indicatorTimer) {
          clearTimeout(this.indicatorTimer);
        }
      }
    }, {
      key: 'createTimer',
      value: function createTimer() {
        var _this2 = this;

        this.clearTimer();
        var _props = this.props,
            timeToCloseMessage = _props.timeToCloseMessage,
            onErrorMessageDisappear = _props.onErrorMessageDisappear;

        this.indicatorTimer = _.sleep(function () {
          _this2.setState(function () {
            return {
              invalidMessage: null
            };
          });
          if (_.isFunction(onErrorMessageDisappear)) onErrorMessageDisappear();
        }, timeToCloseMessage);
      }
    }, {
      key: 'beforeComplete',
      value: function beforeComplete(newValue) {
        var _props2 = this.props,
            onUpdate = _props2.onUpdate,
            row = _props2.row,
            column = _props2.column;

        if (_.isFunction(column.validator)) {
          var validateForm = column.validator(newValue, row, column);
          if (_.isObject(validateForm) && !validateForm.valid) {
            this.setState(function () {
              return {
                invalidMessage: validateForm.message
              };
            });
            this.createTimer();
            return;
          }
        }
        onUpdate(row, column, newValue);
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur() {
        var _props3 = this.props,
            onEscape = _props3.onEscape,
            blurToSave = _props3.blurToSave;

        if (blurToSave) {
          this.beforeComplete(this.editor.getValue());
        } else {
          onEscape();
        }
      }
    }, {
      key: 'handleKeyDown',
      value: function handleKeyDown(e) {
        var onEscape = this.props.onEscape;

        if (e.keyCode === 27) {
          // ESC
          onEscape();
        } else if (e.keyCode === 13) {
          // ENTER
          this.beforeComplete(this.editor.getValue());
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick(e) {
        if (e.target.tagName !== 'TD') {
          // To avoid the row selection event be triggered,
          // When user define selectRow.clickToSelect and selectRow.clickToEdit
          // We shouldn't trigger selection event even if user click on the cell editor(input)
          e.stopPropagation();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var editor = void 0;
        var _props4 = this.props,
            row = _props4.row,
            column = _props4.column,
            className = _props4.className,
            style = _props4.style,
            rowIndex = _props4.rowIndex,
            columnIndex = _props4.columnIndex;
        var dataField = column.dataField;


        var value = _.get(row, dataField);
        var hasError = _.isDefined(this.state.invalidMessage);

        var customEditorClass = column.editorClasses || '';
        if (_.isFunction(column.editorClasses)) {
          customEditorClass = column.editorClasses(value, row, rowIndex, columnIndex);
        }

        var editorStyle = column.editorStyle || {};
        if (_.isFunction(column.editorStyle)) {
          editorStyle = column.editorStyle(value, row, rowIndex, columnIndex);
        }

        var editorClass = (0, _classnames2.default)({
          animated: hasError,
          shake: hasError
        }, customEditorClass);

        var editorProps = {
          ref: function ref(node) {
            return _this3.editor = node;
          },
          defaultValue: value,
          style: editorStyle,
          className: editorClass,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur
        };

        var isDefaultEditorDefined = _.isObject(column.editor);

        if (isDefaultEditorDefined) {
          editorProps = _extends({}, editorProps, column.editor);
        } else if (_.isFunction(column.editorRenderer)) {
          editorProps = _extends({}, editorProps, {
            onUpdate: this.beforeComplete
          });
        }

        if (_.isFunction(column.editorRenderer)) {
          editor = column.editorRenderer(editorProps, value, row, column, rowIndex, columnIndex);
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.SELECT) {
          editor = _react2.default.createElement(_dropdownEditor2.default, editorProps);
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.TEXTAREA) {
          editor = _react2.default.createElement(_textareaEditor2.default, editorProps);
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.CHECKBOX) {
          editor = _react2.default.createElement(_checkboxEditor2.default, editorProps);
        } else if (isDefaultEditorDefined && column.editor.type === _const.EDITTYPE.DATE) {
          editor = _react2.default.createElement(_dateEditor2.default, editorProps);
        } else {
          editor = _react2.default.createElement(_textEditor2.default, editorProps);
        }

        return _react2.default.createElement(
          'td',
          {
            className: (0, _classnames2.default)('react-bootstrap-table-editing-cell', className),
            style: style,
            onClick: this.handleClick
          },
          editor,
          hasError ? _react2.default.createElement(_editorIndicator2.default, { invalidMessage: this.state.invalidMessage }) : null
        );
      }
    }]);

    return EditingCell;
  }(_react.Component), _class.propTypes = {
    row: _propTypes2.default.object.isRequired,
    rowIndex: _propTypes2.default.number.isRequired,
    column: _propTypes2.default.object.isRequired,
    columnIndex: _propTypes2.default.number.isRequired,
    onUpdate: _propTypes2.default.func.isRequired,
    onEscape: _propTypes2.default.func.isRequired,
    timeToCloseMessage: _propTypes2.default.number,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
  }, _class.defaultProps = {
    timeToCloseMessage: _const.TIME_TO_CLOSE_MESSAGE,
    className: null,
    style: {}
  }, _temp;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var DropDownEditor = function (_Component) {
  _inherits(DropDownEditor, _Component);

  function DropDownEditor() {
    _classCallCheck(this, DropDownEditor);

    return _possibleConstructorReturn(this, (DropDownEditor.__proto__ || Object.getPrototypeOf(DropDownEditor)).apply(this, arguments));
  }

  _createClass(DropDownEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;

      this.select.value = defaultValue;
      this.select.focus();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.select.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          className = _props.className,
          options = _props.options,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'className', 'options']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-select', className);

      var attr = _extends({}, rest, {
        className: editorClass
      });

      return _react2.default.createElement(
        'select',
        _extends({}, attr, {
          ref: function ref(node) {
            return _this2.select = node;
          },
          defaultValue: defaultValue
        }),
        options.map(function (_ref) {
          var label = _ref.label,
              value = _ref.value;
          return _react2.default.createElement(
            'option',
            { key: value, value: value },
            label
          );
        })
      );
    }
  }]);

  return DropDownEditor;
}(_react.Component);

DropDownEditor.propTypes = {
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  options: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.any
  }))]).isRequired
};
DropDownEditor.defaultProps = {
  className: '',
  defaultValue: '',
  style: {}
};
exports.default = DropDownEditor;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var TextAreaEditor = function (_Component) {
  _inherits(TextAreaEditor, _Component);

  function TextAreaEditor(props) {
    _classCallCheck(this, TextAreaEditor);

    var _this = _possibleConstructorReturn(this, (TextAreaEditor.__proto__ || Object.getPrototypeOf(TextAreaEditor)).call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(TextAreaEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;

      this.text.value = defaultValue;
      this.text.focus();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.text.value;
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 13 && !e.shiftKey) return;
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'className']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-textarea', className);
      return _react2.default.createElement('textarea', _extends({
        ref: function ref(node) {
          return _this2.text = node;
        },
        type: 'textarea',
        className: editorClass
      }, rest, {
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return TextAreaEditor;
}(_react.Component);

TextAreaEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onKeyDown: _propTypes2.default.func
};
TextAreaEditor.defaultProps = {
  className: '',
  defaultValue: '',
  onKeyDown: undefined
};
exports.default = TextAreaEditor;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var CheckBoxEditor = function (_Component) {
  _inherits(CheckBoxEditor, _Component);

  function CheckBoxEditor(props) {
    _classCallCheck(this, CheckBoxEditor);

    var _this = _possibleConstructorReturn(this, (CheckBoxEditor.__proto__ || Object.getPrototypeOf(CheckBoxEditor)).call(this, props));

    _this.state = {
      checked: props.defaultValue.toString() === props.value.split(':')[0]
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CheckBoxEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkbox.focus();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _props$value$split = this.props.value.split(':'),
          _props$value$split2 = _slicedToArray(_props$value$split, 2),
          positive = _props$value$split2[0],
          negative = _props$value$split2[1];

      return this.checkbox.checked ? positive : negative;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.props.onChange) this.props.onChange(e);
      var target = e.target;

      this.setState(function () {
        return { checked: target.checked };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'className']);

      var editorClass = (0, _classnames2.default)('editor edit-chseckbox checkbox', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.checkbox = node;
        },
        type: 'checkbox',
        className: editorClass
      }, rest, {
        checked: this.state.checked,
        onChange: this.handleChange
      }));
    }
  }]);

  return CheckBoxEditor;
}(_react.Component);

CheckBoxEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  onChange: _propTypes2.default.func
};
CheckBoxEditor.defaultProps = {
  className: '',
  value: 'on:off',
  defaultValue: false,
  onChange: undefined
};
exports.default = CheckBoxEditor;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var DateEditor = function (_Component) {
  _inherits(DateEditor, _Component);

  function DateEditor() {
    _classCallCheck(this, DateEditor);

    return _possibleConstructorReturn(this, (DateEditor.__proto__ || Object.getPrototypeOf(DateEditor)).apply(this, arguments));
  }

  _createClass(DateEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;

      this.date.valueAsDate = new Date(defaultValue);
      this.date.focus();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.date.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'className']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-date', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.date = node;
        },
        type: 'date',
        className: editorClass
      }, rest));
    }
  }]);

  return DateEditor;
}(_react.Component);

DateEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.string
};
DateEditor.defaultProps = {
  className: '',
  defaultValue: ''
};
exports.default = DateEditor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var TextEditor = function (_Component) {
  _inherits(TextEditor, _Component);

  function TextEditor() {
    _classCallCheck(this, TextEditor);

    return _possibleConstructorReturn(this, (TextEditor.__proto__ || Object.getPrototypeOf(TextEditor)).apply(this, arguments));
  }

  _createClass(TextEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;

      this.text.value = defaultValue;
      this.text.focus();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.text.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'className']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-text', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.text = node;
        },
        type: 'text',
        className: editorClass
      }, rest));
    }
  }]);

  return TextEditor;
}(_react.Component);

TextEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
TextEditor.defaultProps = {
  className: null,
  defaultValue: ''
};
exports.default = TextEditor;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-return-assign: 0 */
var EditorIndicator = function EditorIndicator(_ref) {
  var invalidMessage = _ref.invalidMessage;
  return _react2.default.createElement(
    'div',
    { className: 'alert alert-danger fade in' },
    _react2.default.createElement(
      'strong',
      null,
      invalidMessage
    )
  );
};

EditorIndicator.propTypes = {
  invalidMessage: _propTypes2.default.string
};

EditorIndicator.defaultProps = {
  invalidMessage: null
};
exports.default = EditorIndicator;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNjgwYWMxZjZkYzc2ZjM3YjZhOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL3dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9lZGl0aW5nLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2Ryb3Bkb3duLWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvdGV4dGFyZWEtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9jaGVja2JveC1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2RhdGUtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy90ZXh0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvZWRpdG9yLWluZGljYXRvci5qcyJdLCJuYW1lcyI6WyJUSU1FX1RPX0NMT1NFX01FU1NBR0UiLCJERUxBWV9GT1JfREJDTElDSyIsIkNMSUNLX1RPX0NFTExfRURJVCIsIkRCQ0xJQ0tfVE9fQ0VMTF9FRElUIiwiRURJVFRZUEUiLCJURVhUIiwiU0VMRUNUIiwiVEVYVEFSRUEiLCJDSEVDS0JPWCIsIkRBVEUiLCJvcHRpb25zIiwid3JhcHBlckZhY3RvcnkiLCJlZGl0aW5nQ2VsbEZhY3RvcnkiLCJUeXBlIiwiQmFzZSIsIl8iLCJyZW1vdGVSZXNvbHZlciIsIkVkaXRpbmdDZWxsIiwicHJvcHMiLCJjZWxsRWRpdCIsInN0YXJ0RWRpdGluZyIsImJpbmQiLCJlc2NhcGVFZGl0aW5nIiwiY29tcGxldGVFZGl0aW5nIiwiaGFuZGxlQ2VsbFVwZGF0ZSIsInN0YXRlIiwicmlkeCIsImNpZHgiLCJtZXNzYWdlIiwiaXNEYXRhQ2hhbmdlZCIsIm5leHRQcm9wcyIsImlzUmVtb3RlQ2VsbEVkaXQiLCJlcnJvck1lc3NhZ2UiLCJzZXRTdGF0ZSIsInJvdyIsImNvbHVtbiIsIm5ld1ZhbHVlIiwia2V5RmllbGQiLCJzdG9yZSIsImJlZm9yZVNhdmVDZWxsIiwiYWZ0ZXJTYXZlQ2VsbCIsIm9sZFZhbHVlIiwiZ2V0IiwiZGF0YUZpZWxkIiwicm93SWQiLCJpc0Z1bmN0aW9uIiwiaGFuZGxlQ2VsbENoYW5nZSIsImVkaXQiLCJlZGl0aW5nIiwic2VsZWN0Um93IiwiY2xpY2tUb0VkaXQiLCJjbGlja1RvU2VsZWN0Iiwic3RhdGVSZXN0Iiwibm9uRWRpdGFibGVSb3dzIiwib3B0aW9uc1Jlc3QiLCJjZWxsRWRpdFJlc3QiLCJuZXdDZWxsRWRpdCIsImlzRGVmaW5lZCIsIm9uU3RhcnQiLCJvbkVzY2FwZSIsIm9uVXBkYXRlIiwiZGF0YSIsInByb3BUeXBlcyIsInNoYXBlIiwibW9kZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9uRXJyb3JNZXNzYWdlRGlzYXBwZWFyIiwiZnVuYyIsImJsdXJUb1NhdmUiLCJib29sIiwidGltZVRvQ2xvc2VNZXNzYWdlIiwibnVtYmVyIiwic3RyaW5nIiwiaW5kaWNhdG9yVGltZXIiLCJjbGVhclRpbWVyIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsImJlZm9yZUNvbXBsZXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJjcmVhdGVUaW1lciIsImNsZWFyVGltZW91dCIsInNsZWVwIiwidmFsaWRhdG9yIiwidmFsaWRhdGVGb3JtIiwiaXNPYmplY3QiLCJ2YWxpZCIsImVkaXRvciIsImdldFZhbHVlIiwiZSIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyb3dJbmRleCIsImNvbHVtbkluZGV4IiwidmFsdWUiLCJoYXNFcnJvciIsImN1c3RvbUVkaXRvckNsYXNzIiwiZWRpdG9yQ2xhc3NlcyIsImVkaXRvclN0eWxlIiwiZWRpdG9yQ2xhc3MiLCJhbmltYXRlZCIsInNoYWtlIiwiZWRpdG9yUHJvcHMiLCJyZWYiLCJub2RlIiwiZGVmYXVsdFZhbHVlIiwib25LZXlEb3duIiwib25CbHVyIiwiaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCIsImVkaXRvclJlbmRlcmVyIiwidHlwZSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIkRyb3BEb3duRWRpdG9yIiwic2VsZWN0IiwiZm9jdXMiLCJyZXN0IiwiYXR0ciIsIm1hcCIsImxhYmVsIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImFueSIsIlRleHRBcmVhRWRpdG9yIiwidGV4dCIsInNoaWZ0S2V5IiwidW5kZWZpbmVkIiwiQ2hlY2tCb3hFZGl0b3IiLCJjaGVja2VkIiwidG9TdHJpbmciLCJzcGxpdCIsImhhbmRsZUNoYW5nZSIsImNoZWNrYm94IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm9uQ2hhbmdlIiwiRGF0ZUVkaXRvciIsImRhdGUiLCJ2YWx1ZUFzRGF0ZSIsIkRhdGUiLCJUZXh0RWRpdG9yIiwiRWRpdG9ySW5kaWNhdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7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QjtBQUFBLENBQXhCOztBQU9Ba0UsZ0JBQWdCcEYsU0FBaEIsR0FBNEI7QUFDMUJrQixrQkFBZ0Isb0JBQVVQO0FBREEsQ0FBNUI7O0FBSUF5RSxnQkFBZ0I3QixZQUFoQixHQUErQjtBQUM3QnJDLGtCQUFnQjtBQURhLENBQS9CO2tCQUdla0UsZSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJFZGl0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNjgwYWMxZjZkYzc2ZjM3YjZhOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGNvbnN0IFRJTUVfVE9fQ0xPU0VfTUVTU0FHRSA9IDMwMDA7XG5leHBvcnQgY29uc3QgREVMQVlfRk9SX0RCQ0xJQ0sgPSAyMDA7XG5leHBvcnQgY29uc3QgQ0xJQ0tfVE9fQ0VMTF9FRElUID0gJ2NsaWNrJztcbmV4cG9ydCBjb25zdCBEQkNMSUNLX1RPX0NFTExfRURJVCA9ICdkYmNsaWNrJztcblxuZXhwb3J0IGNvbnN0IEVESVRUWVBFID0ge1xuICBURVhUOiAndGV4dCcsXG4gIFNFTEVDVDogJ3NlbGVjdCcsXG4gIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICBDSEVDS0JPWDogJ2NoZWNrYm94JyxcbiAgREFURTogJ2RhdGUnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2NvbnN0LmpzIiwiaW1wb3J0IHdyYXBwZXJGYWN0b3J5IGZyb20gJy4vc3JjL3dyYXBwZXInO1xuaW1wb3J0IGVkaXRpbmdDZWxsRmFjdG9yeSBmcm9tICcuL3NyYy9lZGl0aW5nLWNlbGwnO1xuaW1wb3J0IHtcbiAgRURJVFRZUEUsXG4gIENMSUNLX1RPX0NFTExfRURJVCxcbiAgREJDTElDS19UT19DRUxMX0VESVQsXG4gIERFTEFZX0ZPUl9EQkNMSUNLXG59IGZyb20gJy4vc3JjL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMgPSB7fSkgPT4gKHtcbiAgd3JhcHBlckZhY3RvcnksXG4gIGVkaXRpbmdDZWxsRmFjdG9yeSxcbiAgQ0xJQ0tfVE9fQ0VMTF9FRElULFxuICBEQkNMSUNLX1RPX0NFTExfRURJVCxcbiAgREVMQVlfRk9SX0RCQ0xJQ0ssXG4gIG9wdGlvbnNcbn0pO1xuXG5leHBvcnQgY29uc3QgVHlwZSA9IEVESVRUWVBFO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3IvaW5kZXguanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENMSUNLX1RPX0NFTExfRURJVCwgREJDTElDS19UT19DRUxMX0VESVQgfSBmcm9tICcuL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBCYXNlLFxuICB7IF8sIHJlbW90ZVJlc29sdmVyIH1cbikgPT4ge1xuICBsZXQgRWRpdGluZ0NlbGw7XG4gIHJldHVybiBjbGFzcyBDZWxsRWRpdFdyYXBwZXIgZXh0ZW5kcyByZW1vdGVSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFtDTElDS19UT19DRUxMX0VESVQsIERCQ0xJQ0tfVE9fQ0VMTF9FRElUXSkuaXNSZXF1aXJlZCxcbiAgICAgICAgb25FcnJvck1lc3NhZ2VEaXNhcHBlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBibHVyVG9TYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgYmVmb3JlU2F2ZUNlbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBhZnRlclNhdmVDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbm9uRWRpdGFibGVSb3dzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgdGltZVRvQ2xvc2VNZXNzYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIEVkaXRpbmdDZWxsID0gcHJvcHMuY2VsbEVkaXQuZWRpdGluZ0NlbGxGYWN0b3J5KF8pO1xuICAgICAgdGhpcy5zdGFydEVkaXRpbmcgPSB0aGlzLnN0YXJ0RWRpdGluZy5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5lc2NhcGVFZGl0aW5nID0gdGhpcy5lc2NhcGVFZGl0aW5nLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNvbXBsZXRlRWRpdGluZyA9IHRoaXMuY29tcGxldGVFZGl0aW5nLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUNlbGxVcGRhdGUgPSB0aGlzLmhhbmRsZUNlbGxVcGRhdGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHJpZHg6IG51bGwsXG4gICAgICAgIGNpZHg6IG51bGwsXG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIGlzRGF0YUNoYW5nZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmNlbGxFZGl0ICYmIHRoaXMuaXNSZW1vdGVDZWxsRWRpdCgpKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2VsbEVkaXQub3B0aW9ucy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICBpc0RhdGFDaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5leHRQcm9wcy5jZWxsRWRpdC5vcHRpb25zLmVycm9yTWVzc2FnZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICBpc0RhdGFDaGFuZ2VkOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHRoaXMuZXNjYXBlRWRpdGluZygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgaXNEYXRhQ2hhbmdlZDogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNlbGxVcGRhdGUocm93LCBjb2x1bW4sIG5ld1ZhbHVlKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkLCBjZWxsRWRpdCwgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGJlZm9yZVNhdmVDZWxsLCBhZnRlclNhdmVDZWxsIH0gPSBjZWxsRWRpdC5vcHRpb25zO1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBfLmdldChyb3csIGNvbHVtbi5kYXRhRmllbGQpO1xuICAgICAgY29uc3Qgcm93SWQgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oYmVmb3JlU2F2ZUNlbGwpKSBiZWZvcmVTYXZlQ2VsbChvbGRWYWx1ZSwgbmV3VmFsdWUsIHJvdywgY29sdW1uKTtcbiAgICAgIGlmICh0aGlzLmlzUmVtb3RlQ2VsbEVkaXQoKSkge1xuICAgICAgICB0aGlzLmhhbmRsZUNlbGxDaGFuZ2Uocm93SWQsIGNvbHVtbi5kYXRhRmllbGQsIG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLmVkaXQocm93SWQsIGNvbHVtbi5kYXRhRmllbGQsIG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhZnRlclNhdmVDZWxsKSkgYWZ0ZXJTYXZlQ2VsbChvbGRWYWx1ZSwgbmV3VmFsdWUsIHJvdywgY29sdW1uKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZUVkaXRpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wbGV0ZUVkaXRpbmcoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHJpZHg6IG51bGwsXG4gICAgICAgIGNpZHg6IG51bGwsXG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIGlzRGF0YUNoYW5nZWQ6IHRydWVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGFydEVkaXRpbmcocmlkeCwgY2lkeCkge1xuICAgICAgY29uc3QgZWRpdGluZyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHJpZHgsXG4gICAgICAgICAgY2lkeCxcbiAgICAgICAgICBpc0RhdGFDaGFuZ2VkOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB7IHNlbGVjdFJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghc2VsZWN0Um93IHx8IChzZWxlY3RSb3cuY2xpY2tUb0VkaXQgfHwgIXNlbGVjdFJvdy5jbGlja1RvU2VsZWN0KSkgZWRpdGluZygpO1xuICAgIH1cblxuICAgIGVzY2FwZUVkaXRpbmcoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIHJpZHg6IG51bGwsXG4gICAgICAgIGNpZHg6IG51bGxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGlzRGF0YUNoYW5nZWQsIC4uLnN0YXRlUmVzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2VsbEVkaXQ6IHtcbiAgICAgICAgICBvcHRpb25zOiB7IG5vbkVkaXRhYmxlUm93cywgZXJyb3JNZXNzYWdlLCAuLi5vcHRpb25zUmVzdCB9LFxuICAgICAgICAgIGVkaXRpbmdDZWxsRmFjdG9yeSxcbiAgICAgICAgICAuLi5jZWxsRWRpdFJlc3RcbiAgICAgICAgfVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBuZXdDZWxsRWRpdCA9IHtcbiAgICAgICAgLi4ub3B0aW9uc1Jlc3QsXG4gICAgICAgIC4uLmNlbGxFZGl0UmVzdCxcbiAgICAgICAgLi4uc3RhdGVSZXN0LFxuICAgICAgICBFZGl0aW5nQ2VsbCxcbiAgICAgICAgbm9uRWRpdGFibGVSb3dzOiBfLmlzRGVmaW5lZChub25FZGl0YWJsZVJvd3MpID8gbm9uRWRpdGFibGVSb3dzKCkgOiBbXSxcbiAgICAgICAgb25TdGFydDogdGhpcy5zdGFydEVkaXRpbmcsXG4gICAgICAgIG9uRXNjYXBlOiB0aGlzLmVzY2FwZUVkaXRpbmcsXG4gICAgICAgIG9uVXBkYXRlOiB0aGlzLmhhbmRsZUNlbGxVcGRhdGVcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCYXNlXG4gICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICBkYXRhPXsgdGhpcy5wcm9wcy5zdG9yZS5kYXRhIH1cbiAgICAgICAgICBpc0RhdGFDaGFuZ2VkPXsgaXNEYXRhQ2hhbmdlZCB9XG4gICAgICAgICAgY2VsbEVkaXQ9eyBuZXdDZWxsRWRpdCB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvd3JhcHBlci5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IGNsYXNzLW1ldGhvZHMtdXNlLXRoaXM6IDAgKi9cbi8qIGVzbGludCBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBEcm9wZG93bkVkaXRvciBmcm9tICcuL2Ryb3Bkb3duLWVkaXRvcic7XG5pbXBvcnQgVGV4dEFyZWFFZGl0b3IgZnJvbSAnLi90ZXh0YXJlYS1lZGl0b3InO1xuaW1wb3J0IENoZWNrQm94RWRpdG9yIGZyb20gJy4vY2hlY2tib3gtZWRpdG9yJztcbmltcG9ydCBEYXRlRWRpdG9yIGZyb20gJy4vZGF0ZS1lZGl0b3InO1xuaW1wb3J0IFRleHRFZGl0b3IgZnJvbSAnLi90ZXh0LWVkaXRvcic7XG5pbXBvcnQgRWRpdG9ySW5kaWNhdG9yIGZyb20gJy4vZWRpdG9yLWluZGljYXRvcic7XG5pbXBvcnQgeyBUSU1FX1RPX0NMT1NFX01FU1NBR0UsIEVESVRUWVBFIH0gZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IF8gPT5cbiAgY2xhc3MgRWRpdGluZ0NlbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICByb3c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGNvbHVtbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBvblVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uRXNjYXBlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdGltZVRvQ2xvc2VNZXNzYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgdGltZVRvQ2xvc2VNZXNzYWdlOiBUSU1FX1RPX0NMT1NFX01FU1NBR0UsXG4gICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICBzdHlsZToge31cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5pbmRpY2F0b3JUaW1lciA9IG51bGw7XG4gICAgICB0aGlzLmNsZWFyVGltZXIgPSB0aGlzLmNsZWFyVGltZXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5iZWZvcmVDb21wbGV0ZSA9IHRoaXMuYmVmb3JlQ29tcGxldGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGludmFsaWRNZXNzYWdlOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBtZXNzYWdlIH0pIHtcbiAgICAgIGlmIChfLmlzRGVmaW5lZChtZXNzYWdlKSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVRpbWVyKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICBpbnZhbGlkTWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMuaW5kaWNhdG9yVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW5kaWNhdG9yVGltZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVRpbWVyKCkge1xuICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgICBjb25zdCB7IHRpbWVUb0Nsb3NlTWVzc2FnZSwgb25FcnJvck1lc3NhZ2VEaXNhcHBlYXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLmluZGljYXRvclRpbWVyID0gXy5zbGVlcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICBpbnZhbGlkTWVzc2FnZTogbnVsbFxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24ob25FcnJvck1lc3NhZ2VEaXNhcHBlYXIpKSBvbkVycm9yTWVzc2FnZURpc2FwcGVhcigpO1xuICAgICAgfSwgdGltZVRvQ2xvc2VNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBiZWZvcmVDb21wbGV0ZShuZXdWYWx1ZSkge1xuICAgICAgY29uc3QgeyBvblVwZGF0ZSwgcm93LCBjb2x1bW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi52YWxpZGF0b3IpKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9IGNvbHVtbi52YWxpZGF0b3IobmV3VmFsdWUsIHJvdywgY29sdW1uKTtcbiAgICAgICAgaWYgKF8uaXNPYmplY3QodmFsaWRhdGVGb3JtKSAmJiAhdmFsaWRhdGVGb3JtLnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgICAgaW52YWxpZE1lc3NhZ2U6IHZhbGlkYXRlRm9ybS5tZXNzYWdlXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlVGltZXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9uVXBkYXRlKHJvdywgY29sdW1uLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQmx1cigpIHtcbiAgICAgIGNvbnN0IHsgb25Fc2NhcGUsIGJsdXJUb1NhdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoYmx1clRvU2F2ZSkge1xuICAgICAgICB0aGlzLmJlZm9yZUNvbXBsZXRlKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25Fc2NhcGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICAgIGNvbnN0IHsgb25Fc2NhcGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgICAgb25Fc2NhcGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBFTlRFUlxuICAgICAgICB0aGlzLmJlZm9yZUNvbXBsZXRlKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnVEQnKSB7XG4gICAgICAgIC8vIFRvIGF2b2lkIHRoZSByb3cgc2VsZWN0aW9uIGV2ZW50IGJlIHRyaWdnZXJlZCxcbiAgICAgICAgLy8gV2hlbiB1c2VyIGRlZmluZSBzZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCBhbmQgc2VsZWN0Um93LmNsaWNrVG9FZGl0XG4gICAgICAgIC8vIFdlIHNob3VsZG4ndCB0cmlnZ2VyIHNlbGVjdGlvbiBldmVudCBldmVuIGlmIHVzZXIgY2xpY2sgb24gdGhlIGNlbGwgZWRpdG9yKGlucHV0KVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBlZGl0b3I7XG4gICAgICBjb25zdCB7IHJvdywgY29sdW1uLCBjbGFzc05hbWUsIHN0eWxlLCByb3dJbmRleCwgY29sdW1uSW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGRhdGFGaWVsZCB9ID0gY29sdW1uO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IF8uZ2V0KHJvdywgZGF0YUZpZWxkKTtcbiAgICAgIGNvbnN0IGhhc0Vycm9yID0gXy5pc0RlZmluZWQodGhpcy5zdGF0ZS5pbnZhbGlkTWVzc2FnZSk7XG5cbiAgICAgIGxldCBjdXN0b21FZGl0b3JDbGFzcyA9IGNvbHVtbi5lZGl0b3JDbGFzc2VzIHx8ICcnO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdG9yQ2xhc3NlcykpIHtcbiAgICAgICAgY3VzdG9tRWRpdG9yQ2xhc3MgPSBjb2x1bW4uZWRpdG9yQ2xhc3Nlcyh2YWx1ZSwgcm93LCByb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgZWRpdG9yU3R5bGUgPSBjb2x1bW4uZWRpdG9yU3R5bGUgfHwge307XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKGNvbHVtbi5lZGl0b3JTdHlsZSkpIHtcbiAgICAgICAgZWRpdG9yU3R5bGUgPSBjb2x1bW4uZWRpdG9yU3R5bGUodmFsdWUsIHJvdywgcm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjcyh7XG4gICAgICAgIGFuaW1hdGVkOiBoYXNFcnJvcixcbiAgICAgICAgc2hha2U6IGhhc0Vycm9yXG4gICAgICB9LCBjdXN0b21FZGl0b3JDbGFzcyk7XG5cbiAgICAgIGxldCBlZGl0b3JQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBub2RlID0+IHRoaXMuZWRpdG9yID0gbm9kZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgc3R5bGU6IGVkaXRvclN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGVkaXRvckNsYXNzLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXJcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzRGVmYXVsdEVkaXRvckRlZmluZWQgPSBfLmlzT2JqZWN0KGNvbHVtbi5lZGl0b3IpO1xuXG4gICAgICBpZiAoaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCkge1xuICAgICAgICBlZGl0b3JQcm9wcyA9IHtcbiAgICAgICAgICAuLi5lZGl0b3JQcm9wcyxcbiAgICAgICAgICAuLi5jb2x1bW4uZWRpdG9yXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdG9yUmVuZGVyZXIpKSB7XG4gICAgICAgIGVkaXRvclByb3BzID0ge1xuICAgICAgICAgIC4uLmVkaXRvclByb3BzLFxuICAgICAgICAgIG9uVXBkYXRlOiB0aGlzLmJlZm9yZUNvbXBsZXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29sdW1uLmVkaXRvclJlbmRlcmVyKSkge1xuICAgICAgICBlZGl0b3IgPSBjb2x1bW4uZWRpdG9yUmVuZGVyZXIoZWRpdG9yUHJvcHMsIHZhbHVlLCByb3csIGNvbHVtbiwgcm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCAmJiBjb2x1bW4uZWRpdG9yLnR5cGUgPT09IEVESVRUWVBFLlNFTEVDVCkge1xuICAgICAgICBlZGl0b3IgPSA8RHJvcGRvd25FZGl0b3IgeyAuLi5lZGl0b3JQcm9wcyB9IC8+O1xuICAgICAgfSBlbHNlIGlmIChpc0RlZmF1bHRFZGl0b3JEZWZpbmVkICYmIGNvbHVtbi5lZGl0b3IudHlwZSA9PT0gRURJVFRZUEUuVEVYVEFSRUEpIHtcbiAgICAgICAgZWRpdG9yID0gPFRleHRBcmVhRWRpdG9yIHsgLi4uZWRpdG9yUHJvcHMgfSAvPjtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWZhdWx0RWRpdG9yRGVmaW5lZCAmJiBjb2x1bW4uZWRpdG9yLnR5cGUgPT09IEVESVRUWVBFLkNIRUNLQk9YKSB7XG4gICAgICAgIGVkaXRvciA9IDxDaGVja0JveEVkaXRvciB7IC4uLmVkaXRvclByb3BzIH0gLz47XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmYXVsdEVkaXRvckRlZmluZWQgJiYgY29sdW1uLmVkaXRvci50eXBlID09PSBFRElUVFlQRS5EQVRFKSB7XG4gICAgICAgIGVkaXRvciA9IDxEYXRlRWRpdG9yIHsgLi4uZWRpdG9yUHJvcHMgfSAvPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXRvciA9IDxUZXh0RWRpdG9yIHsgLi4uZWRpdG9yUHJvcHMgfSAvPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRkXG4gICAgICAgICAgY2xhc3NOYW1lPXsgY3MoJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1lZGl0aW5nLWNlbGwnLCBjbGFzc05hbWUpIH1cbiAgICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGVkaXRvciB9XG4gICAgICAgICAgeyBoYXNFcnJvciA/IDxFZGl0b3JJbmRpY2F0b3IgaW52YWxpZE1lc3NhZ2U9eyB0aGlzLnN0YXRlLmludmFsaWRNZXNzYWdlIH0gLz4gOiBudWxsIH1cbiAgICAgICAgPC90ZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2VkaXRpbmctY2VsbC5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRHJvcERvd25FZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNlbGVjdC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB0aGlzLnNlbGVjdC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBjbGFzc05hbWUsIG9wdGlvbnMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjcygnZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXNlbGVjdCcsIGNsYXNzTmFtZSk7XG5cbiAgICBjb25zdCBhdHRyID0ge1xuICAgICAgLi4ucmVzdCxcbiAgICAgIGNsYXNzTmFtZTogZWRpdG9yQ2xhc3NcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3RcbiAgICAgICAgeyAuLi5hdHRyIH1cbiAgICAgICAgcmVmPXsgbm9kZSA9PiB0aGlzLnNlbGVjdCA9IG5vZGUgfVxuICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9ucy5tYXAoKHsgbGFiZWwsIHZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgdmFsdWUgfSB2YWx1ZT17IHZhbHVlIH0+eyBsYWJlbCB9PC9vcHRpb24+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgKTtcbiAgfVxufVxuXG5Ecm9wRG93bkVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyXG4gIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvcHRpb25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLmFueVxuICAgIH0pKVxuICBdKS5pc1JlcXVpcmVkXG59O1xuRHJvcERvd25FZGl0b3IuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBkZWZhdWx0VmFsdWU6ICcnLFxuICBzdHlsZToge31cbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bkVkaXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItZWRpdG9yL3NyYy9kcm9wZG93bi1lZGl0b3IuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRleHRBcmVhRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnRleHQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdGhpcy50ZXh0LmZvY3VzKCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0LnZhbHVlO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgIWUuc2hpZnRLZXkpIHJldHVybjtcbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVkaXRvckNsYXNzID0gY3MoJ2Zvcm0tY29udHJvbCBlZGl0b3IgZWRpdC10ZXh0YXJlYScsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByZWY9eyBub2RlID0+IHRoaXMudGV4dCA9IG5vZGUgfVxuICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICBjbGFzc05hbWU9eyBlZGl0b3JDbGFzcyB9XG4gICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMuaGFuZGxlS2V5RG93biB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuVGV4dEFyZWFFZGl0b3IucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXJcbiAgXSksXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbn07XG5UZXh0QXJlYUVkaXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGRlZmF1bHRWYWx1ZTogJycsXG4gIG9uS2V5RG93bjogdW5kZWZpbmVkXG59O1xuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFFZGl0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvdGV4dGFyZWEtZWRpdG9yLmpzIiwiLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDaGVja0JveEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0VmFsdWUudG9TdHJpbmcoKSA9PT0gcHJvcHMudmFsdWUuc3BsaXQoJzonKVswXVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGVja2JveC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgW3Bvc2l0aXZlLCBuZWdhdGl2ZV0gPSB0aGlzLnByb3BzLnZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tib3guY2hlY2tlZCA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY2hlY2tlZDogdGFyZ2V0LmNoZWNrZWQgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjcygnZWRpdG9yIGVkaXQtY2hzZWNrYm94IGNoZWNrYm94JywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHJlZj17IG5vZGUgPT4gdGhpcy5jaGVja2JveCA9IG5vZGUgfVxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBjbGFzc05hbWU9eyBlZGl0b3JDbGFzcyB9XG4gICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAgIGNoZWNrZWQ9eyB0aGlzLnN0YXRlLmNoZWNrZWQgfVxuICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5DaGVja0JveEVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5DaGVja0JveEVkaXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHZhbHVlOiAnb246b2ZmJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgb25DaGFuZ2U6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94RWRpdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2NoZWNrYm94LWVkaXRvci5qcyIsIi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRGF0ZUVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZGF0ZS52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgdGhpcy5kYXRlLmZvY3VzKCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjcygnZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LWRhdGUnLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXsgbm9kZSA9PiB0aGlzLmRhdGUgPSBub2RlIH1cbiAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICBjbGFzc05hbWU9eyBlZGl0b3JDbGFzcyB9XG4gICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuRGF0ZUVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5EYXRlRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGVmYXVsdFZhbHVlOiAnJ1xufTtcbmV4cG9ydCBkZWZhdWx0IERhdGVFZGl0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLWVkaXRvci9zcmMvZGF0ZS1lZGl0b3IuanMiLCIvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRleHRFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnRleHQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdGhpcy50ZXh0LmZvY3VzKCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjcygnZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHQnLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXsgbm9kZSA9PiB0aGlzLnRleHQgPSBub2RlIH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9eyBlZGl0b3JDbGFzcyB9XG4gICAgICAgIHsgLi4ucmVzdCB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuVGV4dEVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlclxuICBdKVxufTtcblRleHRFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG4gIGRlZmF1bHRWYWx1ZTogJydcbn07XG5leHBvcnQgZGVmYXVsdCBUZXh0RWRpdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL3RleHQtZWRpdG9yLmpzIiwiLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFZGl0b3JJbmRpY2F0b3IgPSAoeyBpbnZhbGlkTWVzc2FnZSB9KSA9PlxuICAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgZmFkZSBpblwiPlxuICAgICAgPHN0cm9uZz57IGludmFsaWRNZXNzYWdlIH08L3N0cm9uZz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuRWRpdG9ySW5kaWNhdG9yLnByb3BUeXBlcyA9IHtcbiAgaW52YWxpZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkVkaXRvckluZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGludmFsaWRNZXNzYWdlOiBudWxsXG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdG9ySW5kaWNhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1lZGl0b3Ivc3JjL2VkaXRvci1pbmRpY2F0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table2-editor.js.map