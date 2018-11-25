var assert = require('chai').assert;
var BubbleSort = require('../bubble-sort');


describe('Sort', function() {

  it('should be a function', function() {
    assert.isFunction(BubbleSort);
  });
  it('should exist', function() {
    var sort = new BubbleSort();
    assert.isObject(sort);
  });
  it('can sort', function() {
    var sort = new BubbleSort();
    assert.deepEqual(sort.sort([4, 1, 3, 2]), [1, 2, 3, 4] );
  });
  it('can sort larger array', function() {
    var sort = new BubbleSort();
    assert.deepEqual(sort.sort([10, 7, 4, 8, 9, 6, 1, 5, 3, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
