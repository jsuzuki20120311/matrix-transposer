'use strict';


// LICENSE: MIT


class MatrixTransposer {

  static get DEFAULT_OPTION() {
    return {
      referenceIndex: 0,
      defaultValue: null
    };
  }

  /**
   * 引数で与えられた二次元配列の行と列を入れ替えた配列を新たに生成し戻します。
   *
   * @param twoDimensionalArray {Array}
   * ＠param option {Object}
   * @returns {Array}
   */
  static arrayTranspose(twoDimensionalArray, option) {
    if (!Array.isArray(twoDimensionalArray)) {
      throw new Error('Illegal argument. First argument is not array.');
    }
    if (option && typeof option !== 'object') {
      throw new Error('Illegal argument. Second argument is not object.');
    }
    if (option && (option.referenceIndex || option.referenceIndex === 0)
      && typeof option.referenceIndex !== 'number'
    ) {
      throw new Error(`Illegal argument. Second argument[referenceIndex] is not number.`);
    }
    let targetIndex = option.referenceIndex || MatrixTransposer.DEFAULT_OPTION.referenceIndex;
    if (!Array.isArray(twoDimensionalArray[targetIndex])) {
      throw new Error(`Illegal argument. First Argument[${targetIndex}] is not Array.`);
    }

    return twoDimensionalArray[targetIndex].map((value, columnIndex) => {
      return twoDimensionalArray.map((row, rowIndex) => {
        if (!Array.isArray(row)) {
          throw new Error(`Illegal argument. Argument[${rowIndex}] is not Array.`);
        }
        if (typeof row[columnIndex] === 'undefined') {
          return (option && (option.defaultValue || option.defaultValue === 0)) ? option.defaultValue : MatrixTransposer.DEFAULT_OPTION.defaultValue;
        } else {
          return row[columnIndex];
        }
      });
    });
  }

}

export default MatrixTransposer;
