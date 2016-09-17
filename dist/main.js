'use strict';

// LICENSE: MIT


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatrixTransposer = function () {
  function MatrixTransposer() {
    _classCallCheck(this, MatrixTransposer);
  }

  _createClass(MatrixTransposer, null, [{
    key: 'arrayTranspose',


    /**
     * 引数で与えられた二次元配列の行と列を入れ替えた配列を新たに生成し戻します。
     *
     * @param twoDimensionalArray {Array}
     * ＠param option {Object}
     * @returns {Array}
     */
    value: function arrayTranspose(twoDimensionalArray, option) {
      if (!Array.isArray(twoDimensionalArray)) {
        throw new Error('Illegal argument. First argument is not array.');
      }
      if (option && (typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
        throw new Error('Illegal argument. Second argument is not object.');
      }
      if (option && (option.referenceIndex || option.referenceIndex === 0) && typeof option.referenceIndex !== 'number') {
        throw new Error('Illegal argument. Second argument[referenceIndex] is not number.');
      }
      var targetIndex = option.referenceIndex || MatrixTransposer.DEFAULT_OPTION.referenceIndex;
      if (!Array.isArray(twoDimensionalArray[targetIndex])) {
        throw new Error('Illegal argument. First Argument[' + targetIndex + '] is not Array.');
      }

      return twoDimensionalArray[targetIndex].map(function (value, columnIndex) {
        return twoDimensionalArray.map(function (row, rowIndex) {
          if (!Array.isArray(row)) {
            throw new Error('Illegal argument. Argument[' + rowIndex + '] is not Array.');
          }
          if (typeof row[columnIndex] === 'undefined') {
            return option && (option.defaultValue || option.defaultValue === 0) ? option.defaultValue : MatrixTransposer.DEFAULT_OPTION.defaultValue;
          } else {
            return row[columnIndex];
          }
        });
      });
    }
  }, {
    key: 'DEFAULT_OPTION',
    get: function get() {
      return {
        referenceIndex: 0,
        defaultValue: null
      };
    }
  }]);

  return MatrixTransposer;
}();

exports.default = MatrixTransposer;