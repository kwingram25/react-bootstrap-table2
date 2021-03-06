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

var _remoteResolver2 = require('../props-resolver/remote-resolver');

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base) {
  var _class, _temp;

  return _temp = _class = function (_remoteResolver) {
    _inherits(SortWrapper, _remoteResolver);

    function SortWrapper(props) {
      _classCallCheck(this, SortWrapper);

      var _this = _possibleConstructorReturn(this, (SortWrapper.__proto__ || Object.getPrototypeOf(SortWrapper)).call(this, props));

      _this.handleSort = _this.handleSort.bind(_this);
      return _this;
    }

    _createClass(SortWrapper, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            columns = _props.columns,
            defaultSorted = _props.defaultSorted,
            defaultSortDirection = _props.defaultSortDirection,
            store = _props.store;
        // defaultSorted is an array, it's ready to use as multi / single sort
        // when we start to support multi sort, please update following code to use array.forEach

        if (defaultSorted && defaultSorted.length > 0) {
          var dataField = defaultSorted[0].dataField;
          var order = defaultSorted[0].order;
          var column = columns.filter(function (col) {
            return col.dataField === dataField;
          });
          if (column.length > 0) {
            store.setSort(column[0], order, defaultSortDirection);

            if (column[0].onSort) {
              column[0].onSort(store.sortField, store.sortOrder);
            }

            if (this.isRemoteSort() || this.isRemotePagination()) {
              this.handleSortChange();
            } else {
              store.sortBy(column[0]);
            }
          }
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var sortedColumn = void 0;
        for (var i = 0; i < nextProps.columns.length; i += 1) {
          if (nextProps.columns[i].dataField === nextProps.store.sortField) {
            sortedColumn = nextProps.columns[i];
            break;
          }
        }
        if (sortedColumn && sortedColumn.sort) {
          nextProps.store.sortBy(sortedColumn);
        }
      }
    }, {
      key: 'handleSort',
      value: function handleSort(column) {
        var store = this.props.store;

        store.setSort(column, undefined, this.props.defaultSortDirection);

        if (column.onSort) {
          column.onSort(store.sortField, store.sortOrder);
        }

        if (this.isRemoteSort() || this.isRemotePagination()) {
          this.handleSortChange();
        } else {
          store.sortBy(column);
          this.forceUpdate();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Base, _extends({}, this.props, {
          onSort: this.handleSort,
          data: this.props.store.data
        }));
      }
    }]);

    return SortWrapper;
  }((0, _remoteResolver3.default)(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired
  }, _temp;
};