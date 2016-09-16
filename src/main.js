'use strict';


// LICENSE: MIT


class MatrixTransposer {

  /**
   * 引数で与えられた二次元配列の行と列を入れ替えた配列を新たに生成し戻します。
   *
   * @param twoDimensionalArray {Array}
   * @returns {Array}
   */
  static arrayTranspose(twoDimensionalArray) {

    if (!Array.isArray(twoDimensionalArray)) {
      throw new Error('Illegal argument. Argument is not Array.');
    }

    if (twoDimensionalArray.length === 0) {
      return [];
    }

    let results = [];
    for (let i = 0; i < twoDimensionalArray[0].length; i++) {
      let result = [];
      for (let j = 0; j < twoDimensionalArray.length; j++) {
        if (!Array.isArray(twoDimensionalArray[j])) {
          throw new Error(`Illegal argument. Argument[${j}] is not Array.`);
        }
        result.push(twoDimensionalArray[j][i]);
      }
      results.push(result);
    }
    return results;
  }

}

export default MatrixTransposer;
