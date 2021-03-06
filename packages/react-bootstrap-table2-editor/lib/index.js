'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = undefined;

var _wrapper = require('./src/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _editingCell = require('./src/editing-cell');

var _editingCell2 = _interopRequireDefault(_editingCell);

var _const = require('./src/const');

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