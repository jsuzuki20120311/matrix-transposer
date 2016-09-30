var MatrixTransposer = require('../dist/main').default;
var chai = require('chai');
var assert = chai.assert;


describe('test', function () {

  it('test1', function () {
    var array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array),
      [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ]
    );
  });

  it('test2', function () {
    var array = [
      [1, 2, 3],
      [4, 5],
      [7]
    ];
    var option = {};
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array, option),
      [
        [1, 4, 7],
        [2, 5, null],
        [3, null, null]
      ]
    );
  });

  it('test3', function () {
    var array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    var option = {};
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array, option),
      [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ]
    );
  });

  it('test4', function () {
    var array = [
      [1, 2, 3],
      [4, 5],
      [7]
    ];
    var option = {
      referenceIndex: 0,
      defaultValue: null
    };
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array, option),
      [
        [1, 4, 7],
        [2, 5, null],
        [3, null, null]
      ]
    );
  });

  it('test5', function () {
    var array = [
      [1, 2, 3],
      [4, 5],
      [7]
    ];
    var option = {
      referenceIndex: 1
    };
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array, option),
      [
        [1, 4, 7],
        [2, 5, null]
      ]
    );
  });

  it('test6', function () {
    var array = [
      [1, 2, 3],
      [4, 5],
      [7]
    ];
    var option = {
      referenceIndex: 1,
      defaultValue: 0
    };
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array, option),
      [
        [1, 4, 7],
        [2, 5, 0]
      ]
    );
  });

  it('test7', function () {
    var array = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array),
      [
        ['a', 'd', 'g'],
        ['b', 'e', 'h'],
        ['c', 'f', 'i']
      ]
    );
  });

  it('test8', function () {
    var array = [
    ];
    assert.throws(function () {
        MatrixTransposer.arrayTranspose(array)
    },Error);
  });

  it('test9', function () {
    var array = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    var option = {
      referenceIndex: 'a'
    };
    assert.throws(function () {
      MatrixTransposer.arrayTranspose(array, option)
    },Error);
  });

  it('test10', function () {
    var array = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    var option = 1;
    assert.throws(function () {
      MatrixTransposer.arrayTranspose(array, option)
    },Error);
  });

  it('test11', function () {
    var array = [
      [1],
      [4, 5, 6]
    ];
    var option = {
      referenceIndex: 0,
      defaultValue: 0
    };
    assert.deepEqual(
      MatrixTransposer.arrayTranspose(array, option),
      [
        [1, 4]
      ]
    );
  });

});
