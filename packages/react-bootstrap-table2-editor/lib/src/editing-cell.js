'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdownEditor = require('./dropdown-editor');

var _dropdownEditor2 = _interopRequireDefault(_dropdownEditor);

var _textareaEditor = require('./textarea-editor');

var _textareaEditor2 = _interopRequireDefault(_textareaEditor);

var _checkboxEditor = require('./checkbox-editor');

var _checkboxEditor2 = _interopRequireDefault(_checkboxEditor);

var _dateEditor = require('./date-editor');

var _dateEditor2 = _interopRequireDefault(_dateEditor);

var _textEditor = require('./text-editor');

var _textEditor2 = _interopRequireDefault(_textEditor);

var _editorIndicator = require('./editor-indicator');

var _editorIndicator2 = _interopRequireDefault(_editorIndicator);

var _const = require('./const');

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