'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = require('./const');

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