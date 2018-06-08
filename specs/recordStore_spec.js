const RecordStore = require('../RecordStore');
const assert = require('assert');

describe('Record Store', function() {

  let recordStore;

  beforeEach(function() {
    recordStore = new RecordStore('Round Records', 'Glasgow', 1000);
  });

  it('should have a name', function() {
    assert.strictEqual(recordStore.name, 'Round Records');
  });

  it('should have a city', function() {
    assert.strictEqual(recordStore.city, 'Glasgow');
  });

  it('should have an inventory, starts empty', function() {
    assert.deepStrictEqual(recordStore.inventory, []);
  });

  it('should have a balance', function() {
    assert.strictEqual(recordStore.balance, 1000);
  });

  xit('should be able to add Records to inventory', function() {
    const record = new Record('test', 'test', 'test', 10);
    recordStore.add(record);
    assert.deepStrictEqual(recordStore.inventory, [record])
  });
});
