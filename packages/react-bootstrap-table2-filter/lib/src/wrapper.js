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

var _filter = require('./filter');

var _comparison = require('./comparison');

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-param-reassign: 0 */

exports.default = function (Base, _ref) {
  var _class, _temp;

  var _ = _ref._,
      remoteResolver = _ref.remoteResolver;
  return _temp = _class = function (_remoteResolver) {
    _inherits(FilterWrapper, _remoteResolver);

    function FilterWrapper(props) {
      _classCallCheck(this, FilterWrapper);

      var _this = _possibleConstructorReturn(this, (FilterWrapper.__proto__ || Object.getPrototypeOf(FilterWrapper)).call(this, props));

      _this.state = { currFilters: {}, isDataChanged: props.isDataChanged || false };
      _this.onFilter = _this.onFilter.bind(_this);
      return _this;
    }

    _createClass(FilterWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref2) {
        var isDataChanged = _ref2.isDataChanged,
            store = _ref2.store,
            columns = _ref2.columns;

        // consider to use lodash.isEqual
        var isRemoteFilter = this.isRemoteFiltering() || this.isRemotePagination();
        if (isRemoteFilter || JSON.stringify(this.state.currFilters) !== JSON.stringify(store.filters)) {
          // I think this condition only isRemoteFilter is enough
          store.filteredData = store.getAllData();
          this.setState(function () {
            return { isDataChanged: true, currFilters: store.filters };
          });
        } else {
          if (Object.keys(this.state.currFilters).length > 0) {
            store.filteredData = (0, _filter.filters)(store, columns, _)(this.state.currFilters);
          }
          this.setState(function () {
            return { isDataChanged: isDataChanged };
          });
        }
      }

      /**
       * filter the table like below:
       * onFilter(column, filterType)(filterVal)
       * @param {Object} column
       * @param {String} filterType
       * @param {String} filterVal - user input for filtering.
       */

    }, {
      key: 'onFilter',
      value: function onFilter(column, filterType) {
        var _this2 = this;

        return function (filterVal) {
          var _props = _this2.props,
              store = _props.store,
              columns = _props.columns;
          // watch out here if migration to context API, #334

          var currFilters = Object.assign({}, store.filters);
          var dataField = column.dataField,
              filter = column.filter;


          if (!_.isDefined(filterVal) || filterVal === '') {
            delete currFilters[dataField];
          } else {
            // select default comparator is EQ, others are LIKE
            var _filter$props = filter.props,
                _filter$props$compara = _filter$props.comparator,
                comparator = _filter$props$compara === undefined ? filterType === _const.FILTER_TYPE.SELECT ? _comparison.EQ : _comparison.LIKE : _filter$props$compara,
                _filter$props$caseSen = _filter$props.caseSensitive,
                caseSensitive = _filter$props$caseSen === undefined ? false : _filter$props$caseSen;

            currFilters[dataField] = { filterVal: filterVal, filterType: filterType, comparator: comparator, caseSensitive: caseSensitive };
          }

          store.filters = currFilters;

          if (_this2.isRemoteFiltering() || _this2.isRemotePagination()) {
            _this2.handleRemoteFilterChange();
            // when remote filtering is enable, dont set currFilters state
            // in the componentWillReceiveProps,
            // it's the key point that we can know the filter is changed
            return;
          }

          store.filteredData = (0, _filter.filters)(store, columns, _)(currFilters);
          _this2.setState(function () {
            return { currFilters: currFilters, isDataChanged: true };
          });
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Base, _extends({}, this.props, {
          data: this.props.store.data,
          onFilter: this.onFilter,
          isDataChanged: this.state.isDataChanged
        }));
      }
    }]);

    return FilterWrapper;
  }(remoteResolver(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired,
    columns: _propTypes2.default.array.isRequired
  }, _temp;
};